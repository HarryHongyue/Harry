# Harry 部署指南

Harry 是统一主展示站点。它负责项目展示、下载入口、部署说明、安全说明和在线应用入口。

当前不再推荐为每个项目配置独立二级域名。推荐使用一个主域名承载所有页面：

```text
https://harryhongyue.com
```

独立项目继续保留在各自仓库中。Harry 只整合展示层、下载元数据、应用入口和 API 路由。

## 推荐服务器结构

```text
/opt/harry-site/
├── sites/
│   └── main/
│       ├── current/
│       └── releases/
├── downloads/
├── releases/
├── manifests/
└── services/
    ├── pdf-reader-api/
    └── aircargo-edi-api/
```

## 推荐路由结构

```text
https://harryhongyue.com/
  Harry 主站点

https://harryhongyue.com/projects
  项目总览

https://harryhongyue.com/projects/pdf-reader
  PDF Reader 项目展示页

https://harryhongyue.com/projects/aircargo-edi
  Aircargo EDI 项目展示页

https://harryhongyue.com/projects/ode-solver
  ODE Solver 项目展示页

https://harryhongyue.com/projects/surpriseme
  SurpriseMe 项目展示页

https://harryhongyue.com/apps/pdf-reader
  PDF Reader 在线应用入口，需要登录

https://harryhongyue.com/apps/aircargo-edi
  Aircargo EDI 在线应用入口，需要登录

https://harryhongyue.com/api/pdf-reader/*
  PDF Reader 后端 API

https://harryhongyue.com/api/aircargo-edi/*
  Aircargo EDI 后端 API

https://harryhongyue.com/downloads
  下载中心页面

https://harryhongyue.com/releases/release-manifest.json
  发布元数据
```

## Oracle 免费虚拟机职责

将 Oracle 虚拟机用作轻量主机：

- Caddy 终止 HTTPS。
- Harry 主站以静态文件形式托管。
- 后端 API 作为内部 Docker 服务运行。
- 仅公开 22、80、443。
- API 容器绑定到 `127.0.0.1` 或 Docker 内部网络。

## Harry 主站部署流程

在本地构建：

```bash
npm install
npm run build
```

将 `dist/` 上传到：

```text
/opt/harry-site/sites/main/current/
```

Caddy 使用 SPA 回退：

```caddyfile
try_files {path} /index.html
file_server
```

这样直接访问 `/projects/pdf-reader` 或 `/apps/pdf-reader` 时不会返回 404。

## ODE Solver 发布方式

ODE Solver 不再单独部署官网。

ODE 仓库负责：

- JavaFX 桌面应用源码。
- 安装包构建。
- GitHub Release 发布。
- sha256 生成。
- release manifest 更新。

Harry 负责：

- `/projects/ode-solver` 展示页。
- `/downloads` 下载入口。
- 从 release manifest 显示最新版本。

## SurpriseMe 发布方式

SurpriseMe 不再单独部署官网。

SurpriseMe 仓库负责：

- Chrome / Firefox / Safari 扩展源码。
- 扩展包构建。
- GitHub Release 发布。
- sha256 生成。
- release manifest 更新。

Harry 负责：

- `/projects/surpriseme` 展示页。
- `/downloads` 下载入口。
- 从 release manifest 显示最新版本。

## PDF Reader 部署方式

PDF Reader 分为三层：

1. Harry 中的公开展示页：`/projects/pdf-reader`
2. Harry 中的在线应用入口：`/apps/pdf-reader`
3. 独立仓库中的 FastAPI 后端：`/api/pdf-reader/*`

后端推荐 Docker 化：

```bash
docker run -d --name pdf-reader-api --restart unless-stopped -p 127.0.0.1:8000:8000 pdf-reader-api
```

Caddy 路由：

```caddyfile
handle_path /api/pdf-reader/* {
    reverse_proxy 127.0.0.1:8000
}
```

## Aircargo EDI 部署方式

Aircargo EDI 分为三层：

1. Harry 中的公开展示页：`/projects/aircargo-edi`
2. Harry 中的在线应用入口：`/apps/aircargo-edi`
3. 独立仓库中的 FastAPI 后端：`/api/aircargo-edi/*`

后端推荐 Docker 化：

```bash
docker run -d --name aircargo-edi-api --restart unless-stopped -p 127.0.0.1:8001:8000 aircargo-edi-api
```

Caddy 路由：

```caddyfile
handle_path /api/aircargo-edi/* {
    reverse_proxy 127.0.0.1:8001
}
```

## `/apps` 登录要求

项目展示页公开：

```text
/projects/pdf-reader
/projects/aircargo-edi
```

在线应用页需要登录：

```text
/apps/pdf-reader
/apps/aircargo-edi
```

登录保护应同时出现在：

- Harry 前端路由层。
- 后端 API session 校验层。

不要只依赖前端隐藏按钮。上传、解析、生成等算力接口必须由后端验证登录状态。

## 发布元数据

Harry 后续读取：

```text
/releases/release-manifest.json
```

manifest 记录：

- 项目名。
- 当前版本。
- 平台。
- 下载链接。
- 文件大小。
- sha256。
- Release notes。

这样独立项目发布新版本后，Harry 可以自动展示最新下载信息。

## 重要边界

Harry 统一用户体验，但不吞并独立项目核心代码：

- ODE Solver 保留桌面应用源码。
- SurpriseMe 保留扩展源码。
- PDF Reader 保留 OCR 和后端处理逻辑。
- Aircargo EDI 保留物流解析和 EDI 生成逻辑。
- Harry 只吸收产品展示页面、下载入口、在线应用入口和统一样式。
