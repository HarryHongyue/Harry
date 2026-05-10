# Harry 主展示重构计划

## 目的

Harry 是 Harry Hongyue 的统一主站。它不是 monorepo，也不是后端平台。它负责把多个独立项目整理成统一的展示、下载、部署、安全和在线应用入口。

## 仓库边界

Harry 可以包含：

- 主站页面。
- 项目展示页。
- 下载中心。
- 发布元数据读取逻辑。
- `/apps/...` 在线应用入口。
- 统一主题和多语言系统。
- 部署和安全文档。

Harry 不应该包含：

- PDF Reader 的 OCR 核心逻辑。
- Aircargo EDI 的 PDF/EDI 生成核心逻辑。
- ODE Solver 的 JavaFX 桌面源码。
- SurpriseMe 的浏览器扩展源码。
- 独立项目的完整 React 应用壳。
- 大型安装包二进制。

## 引用项目发现

### Harry

- 本地路径：`G:\GitHubPersonal\Harry`
- 当前角色：统一主站、项目目录、下载中心、部署文档、安全文档。
- 部署方式：Vite 构建静态文件，Caddy 托管。

### PDF Reader

- 本地路径：`G:\GitHubPersonal\PDF-Reader`
- 结构：独立的 `frontend` Vite 应用和 `backend` FastAPI 应用。
- 后端能力：PDF 上传、OCR、动态解析管道、临时上传会话。
- Harry 角色：`/projects/pdf-reader` 展示页和 `/apps/pdf-reader` 在线入口。
- 部署影响：后端通过 Docker 暴露到 `/api/pdf-reader/*`。
- 安全重点：上传大小限制、文件名不信任、MIME/扩展名验证、临时清理、CORS 白名单、API 速率限制、登录校验。

### Aircargo EDI

- 本地路径：`G:\GitHubPersonal\Aircargo-EDI`
- 结构：Python 包、FastAPI/Jinja Web UI、CLI、桌面启动器。
- 后端能力：AWB/HAWB PDF 提取、结构化货运模型、Cargo-IMP FWB/FHL 生成方向。
- Harry 角色：`/projects/aircargo-edi` 展示页和 `/apps/aircargo-edi` 在线入口。
- 部署影响：后端通过 Docker 暴露到 `/api/aircargo-edi/*`。
- 安全重点：上传处理、生成工件下载验证、路径遍历防护、CORS、登录校验和代理限制。

### ODE All-In-One Solver

- 本地路径：`G:\GitHubPersonal\ODE-All-In-One-Solver`
- 结构：Java/Maven/JavaFX 桌面应用和旧 Vite React 网站。
- Harry 角色：迁移展示内容到 `/projects/ode-solver`，下载信息通过 release manifest 展示。
- 保留边界：桌面源码、安装包构建脚本和 Release 脚本留在 ODE 仓库。

### SurpriseMe

- 本地路径：`G:\GitHubPersonal\SurpriseMe`
- 结构：Vite React 网站加 Chrome、Firefox、Safari 扩展文件夹。
- Harry 角色：迁移展示内容到 `/projects/surpriseme`，下载信息通过 release manifest 展示。
- 保留边界：扩展源码、扩展打包脚本和商店资料留在 SurpriseMe 仓库。

## 目标路由

- `/`：主页外壳。
- `/about`：个人介绍。
- `/projects`：项目总览。
- `/projects/:slug`：项目详情。
- `/downloads`：下载中心。
- `/security`：安全基线。
- `/apps/pdf-reader`：需要登录的 PDF Reader 在线应用入口。
- `/apps/aircargo-edi`：需要登录的 Aircargo EDI 在线应用入口。
- `/contact`：联系方式。
- `*`：未找到页面。

## 数据层

核心数据来源：

- `src/types/project.ts`
- `src/data/projects.ts`
- `src/utils/projectFilters.ts`

所有项目卡片、详情、下载、部署说明和安全说明都从中心数据层读取。

## 统一发布思路

ODE、SurpriseMe、PDF Reader、Aircargo EDI 后续各自提供一键发布脚本。

脚本目标：

1. 更新版本号。
2. 构建安装包、扩展包或 Docker image。
3. 生成 sha256。
4. 创建 GitHub Release。
5. 上传 release asset。
6. 更新 `release-manifest.json`。
7. 如有后端，重启对应 Docker 容器。

Harry 读取：

```text
/releases/release-manifest.json
```

并自动展示最新版本、下载按钮、文件大小和 sha256。

## `/apps` 登录计划

`/projects/...` 公开访问。

`/apps/...` 必须登录后访问。

实施顺序：

1. 添加轻量登录页或登录弹窗。
2. 使用 HttpOnly session cookie。
3. 前端根据 session 展示应用页面。
4. 后端 API 同时验证 session。
5. 对上传和算力接口增加速率限制。

## 文档和部署文件

核心文档：

- `docs/security-baseline.md`
- `docs/project-onboarding.md`
- `docs/unified-release-and-site-plan.md`

文档统一采用单域名路由方案，不再使用项目二级域名方案。

## 实施顺序

1. 稳定 Harry 单域名部署。
2. 清理二级域名旧文档和旧展示文案。
3. 给 Harry 增加 release manifest 读取能力。
4. 迁移 ODE Solver 展示内容到 Harry。
5. 迁移 SurpriseMe 展示内容到 Harry。
6. 给 ODE Solver 写一键 Release 脚本。
7. 给 SurpriseMe 写一键 Release 脚本。
8. 给 PDF Reader 后端 Docker 化。
9. 给 Aircargo EDI 后端 Docker 化。
10. 实现 `/apps/pdf-reader` 和 `/apps/aircargo-edi` 登录保护。

## 验收检查

- `/`、`/projects`、`/projects/pdf-reader`、`/projects/ode-solver`、`/projects/surpriseme`、`/downloads`、`/security` 正常渲染。
- 项目数据不再依赖二级域名字段。
- 下载中心可以从项目数据或 release manifest 展示版本信息。
- TypeScript 类型检查通过。
- Vite 构建通过。
- 未添加真实机密或令牌。
- 未将独立项目核心源码复制到 Harry 中。
