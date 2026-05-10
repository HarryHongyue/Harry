# 项目接入指南

向 Harry 添加或整合项目时，请使用此清单。

## 1. 先确定项目角色

项目分为三类：

- 展示型项目：只需要产品介绍和下载入口。
- 应用型项目：需要 `/apps/...` 在线功能页面。
- 后端算力项目：需要独立 API 服务和 Docker 部署。

## 2. 仓库边界

Harry 可以接收：

- 产品展示内容。
- 统一 UI 组件。
- 下载元数据。
- 在线应用入口页面。
- 登录保护壳。

Harry 不应该接收：

- 独立项目的整套 React 应用壳。
- 重复 Header、Footer、ThemeSwitcher、i18n Provider。
- OCR、PDF 解析、EDI 生成等后端核心逻辑。
- 桌面应用源码。
- 浏览器扩展源码。
- 大型安装包二进制。

## 3. 添加项目数据

编辑：

```text
src/data/projects.ts
```

添加或更新 `Project` 记录：

- `slug`
- `name`
- `tagline`
- `description`
- `category`
- `status`
- `deploymentType`
- `techStack`
- `links`
- `backendRequired`
- `publicUrl`
- `apiBasePath`
- `reverseProxyPath`
- `releaseAssets`
- `securityNotes`
- `deploymentNotes`

## 4. 路由规则

不再为每个项目配置二级域名。

项目展示页使用：

```text
/projects/<project-slug>
```

在线应用页使用：

```text
/apps/<project-slug>
```

后端 API 使用：

```text
/api/<project-slug>/*
```

下载入口使用：

```text
/downloads
```

发布元数据使用：

```text
/releases/release-manifest.json
```

## 5. 静态展示项目接入

适用于 ODE Solver、SurpriseMe 这类项目。

独立项目保留：

- 应用源码。
- 打包脚本。
- GitHub Release 发布脚本。

Harry 迁入：

- 产品 Hero。
- 功能介绍。
- 安装步骤。
- 下载按钮。
- 版本展示。
- Release notes 摘要。

不要原样复制整个旧前端项目。只迁移内容、交互逻辑和可复用区块。

## 6. 后端算力项目接入

适用于 PDF Reader、Aircargo EDI 这类项目。

独立项目保留：

- FastAPI / Python 后端。
- Dockerfile。
- 后端测试。
- 核心业务逻辑。
- 桌面版或离线版构建。

Harry 负责：

- `/projects/<slug>` 公开展示页。
- `/apps/<slug>` 在线应用入口。
- 登录窗口。
- 调用 `/api/<slug>/*`。

## 7. `/apps` 登录要求

所有 `/apps/...` 页面都应该要求登录。

推荐实现：

- 未登录显示登录窗口。
- 登录成功后写入 HttpOnly session cookie。
- Harry 前端只负责展示登录状态。
- 后端 API 必须校验 session。
- 上传、解析、生成接口必须限流。

## 8. 下载和版本更新

对于安装程序、扩展包或归档文件，请使用 GitHub Releases 或服务器 release 存储。

Harry 读取 release manifest：

```text
/releases/release-manifest.json
```

manifest 中记录：

- 版本号。
- 平台。
- 下载链接。
- 文件大小。
- sha256。
- Release notes。

这样项目发布新版后，Harry 的下载按钮和版本号可以自动更新。

## 9. 安全说明

如果项目接受上传，请添加涵盖以下内容的 `securityNotes`：

- 文件大小限制。
- MIME 和扩展名验证。
- 临时文件隔离。
- 自动清理。
- CORS 白名单。
- 速率限制。
- 文件名不信任。
- 登录/session 校验。

## 10. 一句话原则

把 Harry 当成统一门面，把独立项目当成发动机。

门面负责展示、导航、下载和统一体验；发动机负责真实计算、打包和发布。
