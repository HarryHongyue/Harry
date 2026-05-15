# 统一主站与一键发布方案
## 最终结论
```text
Harry 主站负责统一展示、统一下载、统一路由、统一主题、统一多语言。各独立项目负责自己的核心能力、应用端构建、后端服务、安装包和 Release 发布。
```

不要再让每个小项目各自维护一个完整官网，也不要为每个项目配置一个二级域名。那样会让部署、主题、多语言、下载链接和版本更新变得越来越分散。
## 推荐总架构
```text
Harry
├── /
├── /about
├── /projects
├── /projects/ode-solver
├── /projects/surpriseme
├── /projects/pdf-reader
├── /projects/aircargo-edi
├── /downloads
├── /deployment
├── /security
└── /apps
    ├── /apps/pdf-reader
    └── /apps/aircargo-edi
```

## 仓库职责划分

### Harry 主站

Harry 负责：
- 项目展示页面
- 下载中心
- 版本号展示
- Release notes 摘要
- 下载按钮
- 多语言内容
- 明暗主题
- `/apps/...` 在线应用入口
- 统一部署文档和安全文档
- `release-manifest.json` 统一版本管理
Harry 不负责：

- OCR 算法实现
- PDF 解析核心逻辑
- JavaFX 界面源码
- 浏览器扩展源码
- 大型安装包二进制长期存储
### ODE All-In-One Solver

ODE 仓库保留：
- Java/Maven/JavaFX 界面应用源码
- 数值层求解核心逻辑
- 安装包构建脚本
- GitHub Release 发布脚本
迁移到 Harry：
- 产品介绍页
- 功能亮点
- 安装步骤
- 下载按钮
- 当前版本展示
- Release notes 摘要
不建议继续单独维护 ODE 官网前端。ODE 的旧前端内容可以迁移到 Harry 内部页面组件，但不要原样复制整个 React 应用壳
### SurpriseMe

SurpriseMe 仓库保留：
- Chrome / Firefox / Safari 扩展源码
- 扩展打包脚本
- 商店发布资料
- GitHub Release 发布脚本
迁移到 Harry：
- 产品介绍页
- 功能亮点
- 浏览器下载入口
- 隐私说明入口
- 当前版本展示
- Release notes 摘要
不建议继续单独维护 SurpriseMe 官网前端。SurpriseMe 的旧前端内容可以迁移到 Harry 内部页面组件
### PDF Reader

PDF Reader 仓库保留：
- FastAPI 后端
- OCR pipeline
- PDF 上传处理
- 解析逻辑
- Dockerfile
- 桌面版或离线版构建脚本
- Release 发布脚本
Harry 负责：
- `/projects/pdf-reader` 产品展示页
- `/apps/pdf-reader` 在线工具页面
- `/downloads` 中的应用版下载入口
后端部署：
```text
https://harryhongyue.com/api/pdf-reader/*
```

### Aircargo EDI

Aircargo EDI 仓库保留：
- PDF 解析
- AWB/HAWB 数据结构
- Cargo-IMP FWB/FHL 生成
- FastAPI 后端
- 桌面版或离线版构建脚本
- Dockerfile
- Release 发布脚本
Harry 负责：
- `/projects/aircargo-edi` 产品展示页
- `/apps/aircargo-edi` 在线工具页面
- `/downloads` 中的应用版下载入口
后端部署：
```text
https://harryhongyue.com/api/aircargo-edi/*
```

### 计量证书管理系统

计量证书管理系统仓库保留：
- JavaFX 桌面应用源码
- 证书管理核心逻辑
- H2 数据库
- 安装包构建脚本
- GitHub Release 发布脚本
迁移到 Harry：
- 产品介绍页
- 功能亮点
- 安装步骤
- 下载按钮
- 当前版本展示
- Release notes 摘要
不建议继续单独维护计量证书管理系统官网前端

## 为什么不把所有项目都 Docker 化
Docker 适合后端服务和静态站点部署。推荐规则：
- Harry 主站：使用 Docker 部署，通过 GitHub Actions 自动构建镜像并部署
- ODE Solver：不需要 Docker，发布桌面界面安装包
- SurpriseMe：不需要 Docker，发布扩展包
- 计量证书管理系统：不需要 Docker，发布桌面界面安装包
- PDF Reader 后端：适合 Docker
- Aircargo EDI 后端：适合 Docker
如果把 ODE、SurpriseMe 和计量证书管理系统的静态前端也 Docker 化，只是多容器、多路由、多次构建，并不会让维护更简单。

## Harry 部署方式
Harry 主站使用 Docker 容器化部署：
- **构建方式**: GitHub Actions 自动构建 Docker 镜像并推送到 GitHub Container Registry
- **部署方式**: 通过 SSH 连接到服务器，执行 `docker-compose pull` 和 `docker-compose up -d` 更新容器
- **自动更新**: 使用 watchtower 监控 Docker 镜像更新，自动拉取新镜像并重启容器
- **配置文件**: `Dockerfile` (多阶段构建：node:20-alpine 构建前端 + nginx:1.27-alpine 部署)
- **编排文件**: `compose.yml` (包含 harry-web 服务和 watchtower 服务)
## 一键发布目标
每个独立项目最终提供一个发布脚本，例如：
```powershell
.\scripts\release.ps1 -Version 1.0.1
```

脚本负责：
1. 更新版本号
2. 构建安装包、扩展包或后端镜像
3. 生成 sha256
4. 创建 GitHub Release
5. 上传 release asset
6. 更新 release manifest
7. 如有后端，构建 Docker image
8. 如有后端，重启服务器容器
## Harry 动态更新方式
Harry 前端运行时读取：

```text
/releases/release-manifest.json
```

页面自动展示：
- 最新版本号
- 下载链接
- 平台
- 文件大小
- sha256
- Release notes
这样 ODE、SurpriseMe、PDF Reader 或 Aircargo EDI 发布新版后，Harry 不一定需要重新构建。它像一个"信息面板"，读取 manifest 后自动换上最新版本信息。
## `/apps` 登录要求

`/projects/...` 是公开展示页
`/apps/...` 是在线功能页面，后续应加登录门槛：
```text
/apps/pdf-reader
/apps/aircargo-edi
```

推荐实现顺序：
1. 先做一个轻量登录窗口
2. 登录状态保存在 HttpOnly session cookie 中
3. 后端 API 同时检查 session
4. 未登录访问 `/apps/...` 时显示登录页面
5. 登录后才显示在线工具页面
不要只在前端隐藏页面。真正的上传、解析、生成接口必须由后端检查登录状态。
## 当前执行顺序

### 已完成
- ✅ Harry Docker 化部署
- ✅ Harry GitHub Actions 自动构建和部署 workflow
- ✅ Harry compose.yml watchtower 自动更新配置
- ✅ Harry 单域名部署
- ✅ 文档统一成单域名路由方案
- ✅ Harry 增加 release manifest 读取能力 (`src/utils/releaseManifest.ts`)
- ✅ ODE 展示页内容迁移到 Harry (`OdeSolverShowcase.tsx`)
- ✅ SurpriseMe 展示页内容迁移到 Harry (`SurpriseMeShowcase.tsx`)
- ✅ PDF Reader 展示页内容迁移到 Harry (`PdfReaderShowcase.tsx`)
- ✅ Aircargo EDI 展示页内容迁移到 Harry (`AircargoEdiShowcase.tsx`)
- ✅ 计量证书管理系统展示页内容迁移到 Harry (`MetrologyCertificateShowcase.tsx`)
- ✅ ODE 一键 Release 脚本 (在 ODE 仓库的 `scripts/release.ps1`)
- ✅ SurpriseMe 一键 Release 脚本 (在 SurpriseMe 仓库的 `scripts/release.ps1`)
- ✅ PDF Reader 一键 Release 脚本 (在 PDF Reader 仓库的 `scripts/release.ps1`)
- ✅ Aircargo EDI 一键 Release 脚本 (在 Aircargo EDI 仓库的 `scripts/release.ps1`)
- ✅ 计量证书管理系统一键 Release 脚本 (在计量证书管理系统仓库的 `scripts/release.ps1`)
- ✅ Harry GitHub Actions 自动化重建 workflow (`.github/workflows/auto-rebuild.yml`)
- ✅ Harry compose.yml watchtower 自动更新配置
- ✅ release-manifest.json 统一版本管理 (`public/releases/release-manifest.json`)
- ✅ 详细的项目迁移指南 (`docs/project-migration-guide.md`)

### 待完成
- [ ] PDF Reader 后端 Docker 化并接入 `/api/pdf-reader/*`
- [ ] Aircargo EDI 后端 Docker 化并接入 `/api/aircargo-edi/*`
- [ ] 实现 `/apps/pdf-reader` 和 `/apps/aircargo-edi` 登录保护
- [ ] 所有项目配置 GitHub Secrets
- [ ] 测试完整的自动化发布流程
## 关键原则

- 不再为项目展示页使用二级域名
- 不再让每个项目维护独立官网
- 不原样复制其他项目的 React 应用壳
- 迁移内容、组件和业务入口，不迁移重复的 Header、Footer、ThemeSwitcher、i18n Provider
- 后端算力项目保留在各自仓库，通过 Docker + API 路由接入 Harry
- 桌面应用和扩展包通过 GitHub Releases 发布，Harry 读取 manifest 展示最新版本号
