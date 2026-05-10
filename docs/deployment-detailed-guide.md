# Harry 项目详细部署指南

本文档用于把 Harry 主站点部署到 Oracle Cloud 服务器，并使用 `harryhongyue.com` 和 `www.harryhongyue.com` 访问。

当前推荐方案是：

- 前端在本地构建。
- 服务器只负责托管静态文件。
- Caddy 负责 HTTPS、反向代理和 SPA 路由回退。
- Docker 只用于后端 API，不用于 Harry 主站点前端。

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
sudo apt install -y git curl wget nano unzip tree
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

Harry 主站点是 Vite + React 构建出的静态网站，不需要 Docker。

服务器上只需要创建放置静态文件的目录：

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
tree /opt/harry-site
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

---

## 7. 配置 Caddyfile

### 7.1 备份旧配置

```bash
sudo cp /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup.$(date +%Y%m%d%H%M%S)
```

### 7.2 写入新的 Caddyfile

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

### 7.3 验证配置

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

## 8. 本地构建 Harry 项目

在你本地 Windows PowerShell 中执行：

```powershell
cd G:\GitHubPersonal\Harry
npm install
npm run build
```

构建成功后，本地会生成：

```text
G:\GitHubPersonal\Harry\dist
```

这个 `dist` 目录就是需要上传到服务器的网站文件。

---

## 9. 上传网站文件到服务器

在本地 Windows PowerShell 中执行：

```powershell
scp -r -i "G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key" "G:\GitHubPersonal\Harry\dist\." ubuntu@150.136.248.233:/opt/harry-site/sites/main/current/
```

---

## 10. 验证网站

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

## 11. React 路由说明

当前推荐使用单域名多路由模式：

```text
https://harryhongyue.com/
https://harryhongyue.com/projects
https://harryhongyue.com/projects/pdf-reader
https://harryhongyue.com/projects/ode-solver
https://harryhongyue.com/projects/surpriseme
https://harryhongyue.com/downloads
```

Caddyfile 中的这两行很重要：

```caddyfile
try_files {path} /index.html
file_server
```

它们的作用是：当用户直接访问 `/projects/pdf-reader` 时，Caddy 会把请求交给 React 前端处理，而不是返回 404。

---

## 12. Docker 是否必须使用

当前 Harry 主站点不需要 Docker。

推荐规则：

- 静态前端：不需要 Docker。
- React/Vite 网站：本地构建后上传 `dist`。
- FastAPI / Node.js / Python 后端：可以使用 Docker。
- PDF Reader 后端：适合 Docker。
- Aircargo EDI 后端：适合 Docker。

所以你已经安装 Docker 没问题，但现在部署 Harry 主站点时可以先不用它。

---

## 13. 可选：部署后端 API

如果以后要把 PDF Reader 后端部署到这台服务器，可以使用：

```bash
cd /opt/harry-site/services
git clone https://github.com/HarryHongyue/PDF-Reader.git pdf-reader-api
cd pdf-reader-api/backend
docker build -t pdf-reader-api .
docker run -d --name pdf-reader-api --restart unless-stopped -p 127.0.0.1:8000:8000 pdf-reader-api
```

如果以后要部署 Aircargo EDI 后端，可以使用：

```bash
cd /opt/harry-site/services
git clone https://github.com/HarryHongyue/Aircargo-EDI.git aircargo-edi-api
cd aircargo-edi-api
docker build -t aircargo-edi-api .
docker run -d --name aircargo-edi-api --restart unless-stopped -p 127.0.0.1:8001:8000 aircargo-edi-api
```

注意：后端端口绑定到 `127.0.0.1`，不要直接暴露到公网。

---

## 14. 后续更新网站

以后每次更新网站，只需要在本地执行：

```powershell
cd G:\GitHubPersonal\Harry
npm run build
scp -r -i "G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key" "G:\GitHubPersonal\Harry\dist\." ubuntu@150.136.248.233:/opt/harry-site/sites/main/current/
```

一般不需要重启 Caddy。

---

## 15. 常用检查命令

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

查看网站目录：

```bash
ls -la /opt/harry-site/sites/main/current
```

查看磁盘空间：

```bash
df -h
```

查看内存：

```bash
free -h
```

---

## 16. 常见问题

### 16.1 Caddy 无法申请 HTTPS 证书

通常原因：

- DNS 还没有生效。
- 80 或 443 端口没有开放。
- 域名没有正确指向 `150.136.248.233`。

检查 DNS：

```bash
nslookup harryhongyue.com
nslookup www.harryhongyue.com
```

### 16.2 网站打开是 Caddy 默认页

说明 Caddyfile 没有正确覆盖，或者 root 目录没有指向：

```text
/opt/harry-site/sites/main/current
```

重新执行第 7 步。

### 16.3 直接打开项目路由返回 404

确认 Caddyfile 中有：

```caddyfile
try_files {path} /index.html
```

然后执行：

```bash
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy
```

### 16.4 上传后页面没有变化

可以尝试：

- 浏览器强制刷新。
- 清理浏览器缓存。
- 确认上传到的是 `/opt/harry-site/sites/main/current/`。
- 检查 `index.html` 修改时间。

```bash
ls -la /opt/harry-site/sites/main/current/index.html
```

---

## 17. 当前推荐执行顺序

如果你现在已经完成到第四步，接下来建议按这个顺序做：

1. 执行第 6 步，确认目录结构存在。
2. 执行第 7 步，写入干净的 Caddyfile。
3. 在本地执行第 8 步，构建项目。
4. 在本地执行第 9 步，上传 `dist`。
5. 执行第 10 步，浏览器访问网站验证。

---

## 18. 关键结论

- Harry 主站点不用 Docker。
- 当前最简单稳定的部署方式是：本地构建 `dist`，上传到服务器。
- 一个域名可以承载多个项目页面。
- 多个项目页面应该通过 React Router 的 `/projects/:slug` 实现。
- 后端 API 以后再用 Docker 部署即可。
