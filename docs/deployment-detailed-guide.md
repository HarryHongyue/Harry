# Harry 项目详细部署指南

本文档用于把 Harry 主站点部署到 Oracle Cloud 服务器，并使用 `harryhongyue.com` 和 `www.harryhongyue.com` 访问。

当前推荐方案是：

- Harry 主站继续使用 Vite + React + React Router。
- 页面可以使用丰富 React 组件、动画、主题和项目展示区块。
- 可以选择本地构建后上传静态文件。
- 也可以选择 Docker 一键构建并运行 Harry 主站容器。
- Caddy 负责 HTTPS、反向代理和 SPA 路由回退。
- PDF Reader 和 Aircargo EDI 后端仍然作为独立 Docker API 服务。

---

## 1. 当前服务器信息

- 服务器公网 IP：`150.136.248.233`
- SSH 用户名：`ubuntu`
- 主域名：`harryhongyue.com`
- www 域名：`www.harryhongyue.com`
- 私钥路径：`G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key`
- 公钥路径：`G:\GitHubPersonal\Harry\Keys\HarryHongyue public ssh-key-2026-05-10.key.pub`

---

## 2. DNS 记录确认

在你的域名 DNS 后台中，确认有以下记录：

```text
类型：A
主机记录：@
记录值：150.136.248.233
```

```text
类型：A
主机记录：www
记录值：150.136.248.233
```

如果 `www` 之前指向了 GitHub Pages 的 CNAME，需要删除该 CNAME，改成上面的 A 记录。

---

## 3. 使用 Xshell 连接服务器

### 3.1 新建会话

打开 Xshell，创建一个新会话：

- 名称：`Harry Oracle Server`
- 协议：`SSH`
- 主机：`150.136.248.233`
- 端口：`22`

### 3.2 配置登录用户

在用户身份验证中填写：

- 用户名：`ubuntu`
- 方法：`Public Key`
- 用户密钥：选择你的私钥文件

私钥文件路径：

```text
G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key
```

### 3.3 首次连接

首次连接时，Xshell 会提示保存主机密钥，选择接受即可。

连接成功后，终端应出现类似：

```bash
ubuntu@your-server:~$
```

---

## 4. 安装基础工具

连接服务器后，先更新系统：

```bash
sudo apt update
sudo apt upgrade -y
```

安装常用工具：

```bash
sudo apt install -y git curl wget nano unzip
```

---

## 5. 安装 Caddy

Caddy 用来托管网站，并自动申请 HTTPS 证书。

### 5.1 安装依赖

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
```

### 5.2 添加 Caddy 官方源

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
```

```bash
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
```

### 5.3 安装 Caddy

```bash
sudo apt update
sudo apt install -y caddy
```

### 5.4 启动 Caddy

```bash
sudo systemctl enable caddy
sudo systemctl start caddy
```

检查状态：

```bash
sudo systemctl status caddy
```

看到 `active (running)` 就说明 Caddy 正在运行。

---

## 6. 创建服务器目录结构

Harry 主站点是 Vite + React 应用。它可以构建成静态文件，也可以通过 Docker 镜像一键构建和运行。

如果采用传统静态上传模式，服务器上创建放置静态文件的目录：

```bash
sudo mkdir -p /opt/harry-site/sites/main/current
sudo mkdir -p /opt/harry-site/sites/main/releases
sudo mkdir -p /opt/harry-site/downloads
sudo mkdir -p /opt/harry-site/services
```

设置权限：

```bash
sudo chown -R ubuntu:ubuntu /opt/harry-site
sudo chmod -R 755 /opt/harry-site
```

查看目录：

```bash
ls -la /opt/harry-site
```

或者使用find查看完整结构：

```bash
find /opt/harry-site -type d | sort
```

预期结构：

```text
/opt/harry-site
├── downloads
├── services
└── sites
    └── main
        ├── current
        └── releases
```

如果采用 Docker 一键部署模式，目录结构可以简化：

```bash
sudo mkdir -p /opt/harry-site/downloads
sudo mkdir -p /opt/harry-site/releases
sudo mkdir -p /opt/harry-site/services
```

设置权限：

```bash
sudo chown -R ubuntu:ubuntu /opt/harry-site
sudo chmod -R 755 /opt/harry-site
```

查看目录：

```bash
ls -la /opt/harry-site
```

或者使用find查看完整结构：

```bash
find /opt/harry-site -type d | sort
```

预期结构：

```text
/opt/harry-site
├── downloads
├── releases
└── services
```

**Docker 一键部署说明**：

此时 Harry 容器会在镜像构建阶段运行 `npm run build`，再由 Nginx 在容器内托管 `dist`。不需要手动上传静态文件。

本地或服务器运行：

```bash
docker compose up -d --build harry-web
```

默认容器访问端口：

```text
http://localhost:8080
```

---

## 7. 配置 Caddyfile

### 7.1 备份旧配置

```bash
sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup.$(date +%Y%m%d%H%M%S)
```

### 7.2 写入新的 Caddyfile（静态文件上传模式）

如果采用静态文件上传模式，使用以下配置：

直接复制下面整段命令到服务器终端执行：

```bash
sudo tee /etc/caddy/Caddyfile > /dev/null <<'CADDY'
harryhongyue.com {
    root * /opt/harry-site/sites/main/current
    encode gzip zstd

    handle_path /downloads/* {
        root * /opt/harry-site/downloads
        file_server
    }

    handle_path /api/pdf-reader/* {
        reverse_proxy 127.0.0.1:8000
    }

    handle_path /api/aircargo-edi/* {
        reverse_proxy 127.0.0.1:8001
    }

    try_files {path} /index.html
    file_server

    header {
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy strict-origin-when-cross-origin
    }
}

www.harryhongyue.com {
    redir https://harryhongyue.com{uri}
}
CADDY
```

### 7.3 写入新的 Caddyfile（Docker 一键部署模式）

如果采用 Docker 一键部署模式，使用以下配置：

直接复制下面整段命令到服务器终端执行：

```bash
sudo tee /etc/caddy/Caddyfile > /dev/null <<'CADDY'
harryhongyue.com {
    reverse_proxy 127.0.0.1:8080

    handle_path /downloads/* {
        root * /opt/harry-site/downloads
        file_server
    }

    handle_path /releases/* {
        root * /opt/harry-site/releases
        file_server
    }

    handle_path /api/pdf-reader/* {
        reverse_proxy 127.0.0.1:8000
    }

    handle_path /api/aircargo-edi/* {
        reverse_proxy 127.0.0.1:8001
    }

    header {
        X-Content-Type-Options nosniff
        X-Frame-Options DENY
        Referrer-Policy strict-origin-when-cross-origin
    }
}

www.harryhongyue.com {
    redir https://harryhongyue.com{uri}
}
CADDY
```

### 7.4 验证配置

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
```

如果没有报错，重新加载 Caddy：

```bash
sudo systemctl reload caddy
```

如果 reload 失败，执行：

```bash
sudo systemctl restart caddy
sudo journalctl -u caddy -n 80
```

---

## 8. Docker 镜像部署（推荐）

Docker 镜像部署是真正的容器化部署方式。在本地构建 Docker 镜像，推送到 Docker Hub，然后服务器拉取镜像运行。

### 8.1 准备 .dockerignore 文件

确保项目根目录有 `.dockerignore` 文件，排除不必要的文件：

```text
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build output
dist/
build/

# Environment files
.env
.env.local
.env.*.local

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db

# Git
.git/
.gitignore

# Documentation
docs/
*.md

# Keys and secrets
Keys/
*.key
*.pem
```

### 8.2 本地构建 Docker 镜像

在你本地 Windows PowerShell 中执行：

```powershell
cd G:\GitHubPersonal\Harry

# 构建 Docker 镜像
docker build -t harryhongyue/harry-web:latest .

# 查看构建的镜像
docker images
```

### 8.3 登录 Docker Hub

```powershell
# 登录 Docker Hub
docker login
```

输入你的 Docker Hub 用户名和密码。

### 8.4 推送镜像到 Docker Hub

```powershell
# 推送镜像到 Docker Hub
docker push harryhongyue/harry-web:latest
```

### 8.5 在服务器上拉取并运行镜像

连接服务器后执行：

```bash
# 登录 Docker Hub
docker login
```

输入你的 Docker Hub 用户名和密码。

```bash
# 拉取镜像
docker pull harryhongyue/harry-web:latest

# 停止旧容器（如果存在）
docker stop harry-web 2>/dev/null || true
docker rm harry-web 2>/dev/null || true

# 运行新容器
docker run -d --name harry-web --restart unless-stopped -p 127.0.0.1:8080:80 harryhongyue/harry-web:latest

# 查看容器状态
docker ps

# 查看容器日志
docker logs harry-web
```

### 8.6 验证 Docker 容器

```bash
# 检查容器是否运行
docker ps

# 测试容器内部访问
curl http://localhost:8080
```

---

## 9. 验证网站

在浏览器打开：

```text
https://harryhongyue.com
```

也可以打开：

```text
https://www.harryhongyue.com
```

`www` 会自动跳转到主域名。

如果页面可以打开，并且浏览器地址栏显示 HTTPS 锁，就说明部署成功。

---

## 10. React 路由说明

当前推荐使用单域名多路由模式：

```text
https://harryhongyue.com/
https://harryhongyue.com/projects
https://harryhongyue.com/projects/pdf-reader
https://harryhongyue.com/projects/ode-solver
https://harryhongyue.com/projects/surpriseme
https://harryhongyue.com/downloads
```

在 Docker 镜像部署模式下，React 路由由容器内的 Nginx 处理，Nginx 配置文件已经包含了 SPA 路由回退配置。Caddy 只需要反向代理到容器的 8080 端口即可。

---

## 11. Docker 镜像部署说明

当前 Harry 主站点采用 Docker 镜像部署方式：

**Docker 镜像部署（推荐）**
- 本地构建 Docker 镜像
- 推送到 Docker Hub
- 服务器拉取镜像运行
- 源代码安全性高，服务器上只有编译后的镜像
- 更新快速简单，只需要推送新镜像

推荐规则：

- React/Vite 网站：推荐 Docker 镜像部署
- FastAPI / Node.js / Python 后端：推荐使用 Docker
- PDF Reader 后端：适合 Docker
- Aircargo EDI 后端：适合 Docker

---

## 12. 可选：部署后端 API

如果以后要把 PDF Reader 后端部署到这台服务器，推荐使用 Docker 镜像部署方式：

```bash
# 在本地构建 PDF Reader 后端镜像
cd G:\GitHubPersonal\PDF-Reader\backend
docker build -t harryhongyue/pdf-reader-api:latest .
docker push harryhongyue/pdf-reader-api:latest

# 在服务器上拉取并运行
docker pull harryhongyue/pdf-reader-api:latest
docker stop pdf-reader-api 2>/dev/null || true
docker rm pdf-reader-api 2>/dev/null || true
docker run -d --name pdf-reader-api --restart unless-stopped -p 127.0.0.1:8000:8000 harryhongyue/pdf-reader-api:latest
```

如果以后要部署 Aircargo EDI 后端，可以使用：

```bash
# 在本地构建 Aircargo EDI 后端镜像
cd G:\GitHubPersonal\Aircargo-EDI
docker build -t harryhongyue/aircargo-edi-api:latest .
docker push harryhongyue/aircargo-edi-api:latest

# 在服务器上拉取并运行
docker pull harryhongyue/aircargo-edi-api:latest
docker stop aircargo-edi-api 2>/dev/null || true
docker rm aircargo-edi-api 2>/dev/null || true
docker run -d --name aircargo-edi-api --restart unless-stopped -p 127.0.0.1:8001:8000 harryhongyue/aircargo-edi-api:latest
```

注意：后端端口绑定到 `127.0.0.1`，不要直接暴露到公网。

---

## 13. 后续更新网站

以后每次更新网站，只需要在本地执行：

```powershell
cd G:\GitHubPersonal\Harry

# 重新构建镜像
docker build -t harryhongyue/harry-web:latest .

# 推送新镜像
docker push harryhongyue/harry-web:latest
```

然后在服务器上执行：

```bash
# 拉取新镜像
docker pull harryhongyue/harry-web:latest

# 停止旧容器
docker stop harry-web
docker rm harry-web

# 运行新容器
docker run -d --name harry-web --restart unless-stopped -p 127.0.0.1:8080:80 harryhongyue/harry-web:latest
```

---

## 15. 常用检查命令

### 15.1 Caddy 相关

检查 Caddy 状态：

```bash
sudo systemctl status caddy
```

查看 Caddy 日志：

```bash
sudo journalctl -u caddy -f
```

检查端口监听：

```bash
sudo ss -tlnp | grep -E ':(80|443)'
```

### 14.2 Docker 相关

检查 Docker 状态：

```bash
sudo systemctl status docker
```

查看运行中的容器：

```bash
docker ps
```

查看容器日志：

```bash
docker logs harry-web
```

查看容器资源使用：

```bash
docker stats
```

### 14.3 网站目录

查看目录结构：

```bash
find /opt/harry-site -type d | sort
```

### 14.4 系统资源

查看磁盘空间：

```bash
df -h
```

查看内存：

```bash
free -h
```

---

## 15. 常见问题

### 15.1 Caddy 无法申请 HTTPS 证书

通常原因：

- DNS 还没有生效。
- 80 或 443 端口没有开放。
- 域名没有正确指向 `150.136.248.233`。

检查 DNS：

```bash
nslookup harryhongyue.com
nslookup www.harryhongyue.com
```

### 15.2 Docker 镜像构建失败

可能原因：

- .dockerignore 文件配置错误
- Dockerfile 配置错误
- 网络问题导致无法拉取基础镜像

解决方法：

```bash
# 检查 .dockerignore 文件
cat .dockerignore

# 清理 Docker 缓存
docker system prune -a

# 重新构建
docker build -t harryhongyue/harry-web:latest .
```

### 15.3 Docker Hub 推送失败

可能原因：

- Docker Hub 登录失败
- 镜像名称错误
- 网络问题

解决方法：

```bash
# 重新登录
docker login

# 检查镜像名称
docker images

# 重新推送
docker push harryhongyue/harry-web:latest
```

### 15.4 容器无法启动

可能原因：

- 端口冲突
- 镜像拉取失败
- 容器配置错误

解决方法：

```bash
# 查看容器日志
docker logs harry-web

# 检查端口占用
sudo ss -tlnp | grep 8080

# 停止并删除旧容器
docker stop harry-web
docker rm harry-web

# 重新运行
docker run -d --name harry-web --restart unless-stopped -p 127.0.0.1:8080:80 harryhongyue/harry-web:latest
```

### 15.5 更新后页面没有变化

可以尝试：

- 浏览器强制刷新。
- 清理浏览器缓存。
- 确认服务器上拉取了新镜像。
- 检查容器是否使用了新镜像。

```bash
# 查看容器使用的镜像
docker inspect harry-web | grep Image

# 查看本地镜像
docker images harryhongyue/harry-web
```

---

## 16. 当前推荐执行顺序

如果你现在已经完成到第五步（Caddy已安装并启动），接下来建议按这个顺序做：

1. 执行第 6 步，确认目录结构存在。
2. 执行第 7.3 步，写入 Docker 镜像部署模式的 Caddyfile。
3. 在本地执行第 8.2 步，构建 Docker 镜像。
4. 在本地执行第 8.3 步，登录 Docker Hub。
5. 在本地执行第 8.4 步，推送镜像到 Docker Hub。
6. 在服务器上执行第 8.5 步，拉取并运行镜像。
7. 执行第 8.6 步，验证 Docker 容器。
8. 执行第 9 步，浏览器访问网站验证。

---

## 17. 关键结论

- Harry 主站点采用 Docker 镜像部署方式。
- 本地构建 Docker 镜像，推送到 Docker Hub，服务器拉取镜像运行。
- 源代码安全性高，服务器上只有编译后的镜像。
- 更新快速简单，只需要推送新镜像。
- 一个域名可以承载多个项目页面。
- 多个项目页面应该通过 React Router 的 `/projects/:slug` 实现。
- 后端 API 推荐使用 Docker 镜像部署。
- React 路由由容器内的 Nginx 处理，Caddy 只需要反向代理。
