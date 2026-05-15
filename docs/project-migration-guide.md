# 项目迁移改造指南

本文档为每个项目提供详细的改造说明，根据项目类型分类指导如何迁移到统一的 Harry 网站自动化发布系统。

---

## 一、纯桌面应用项目

### 1. ODE Solver (ODE-All-In-One-Solver)

#### 项目类型
- **类型**: JavaFX 桌面应用
- **前端**: 无独立前端
- **后端**: 无后端 API
- **发布方式**: GitHub Releases (Windows 安装程序)

#### 改造步骤

**步骤 1: 创建 release.ps1 脚本**
- ✅ 已完成：`scripts/release.ps1`
- 脚本功能：
  - 更新 `pom.xml` 版本号
  - 构建 Windows 安装程序
  - 生成 SHA256 校验和
  - 创建 GitHub Release
  - 更新 Harry manifest
  - 触发 Harry 网站重建

**步骤 2: 配置环境变量**
在项目仓库的 GitHub Secrets 中添加：
- `HARRY_GITHUB_TOKEN`: 用于触发 Harry 网站重建的 GitHub Token

**步骤 3: 使用 release.ps1 发布新版本**
```powershell
cd g:\GitHubPersonal\ODE-All-In-One-Solver
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增功能1, 新增功能2, 修复bug"
```

**步骤 4: 验证自动化流程**
- 检查 GitHub Release 是否创建成功
- 检查 Harry manifest 是否更新
- 检查 Harry 网站是否显示最新版本

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 配置 GitHub Secrets: `HARRY_GITHUB_TOKEN`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示

---

### 2. SurpriseMe

#### 项目类型
- **类型**: 浏览器扩展
- **前端**: 无独立前端
- **后端**: 无后端 API
- **发布方式**: GitHub Releases (ZIP 扩展包)

#### 改造步骤

**步骤 1: 创建 release.ps1 脚本**
- ✅ 已完成：`scripts/release.ps1`
- 脚本功能：
  - 更新 `package.json` 版本号
  - 构建浏览器扩展 ZIP 包
  - 生成 SHA256 校验和
  - 创建 GitHub Release
  - 更新 Harry manifest
  - 触发 Harry 网站重建

**步骤 2: 配置环境变量**
在项目仓库的 GitHub Secrets 中添加：
- `HARRY_GITHUB_TOKEN`: 用于触发 Harry 网站重建的 GitHub Token

**步骤 3: 使用 release.ps1 发布新版本**
```powershell
cd g:\GitHubPersonal\SurpriseMe
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增颜色选项, 修复Chrome兼容性"
```

**步骤 4: 验证自动化流程**
- 检查 GitHub Release 是否创建成功
- 检查 Harry manifest 是否更新
- 检查 Harry 网站是否显示最新版本

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 配置 GitHub Secrets: `HARRY_GITHUB_TOKEN`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示

---

### 3. 计量证书管理系统

#### 项目类型
- **类型**: JavaFX 桌面应用
- **前端**: 无独立前端
- **后端**: 无后端 API
- **发布方式**: GitHub Releases (Windows 安装程序)

#### 改造步骤

**步骤 1: 创建 release.ps1 脚本**
- ✅ 已完成：`scripts/release.ps1`
- 脚本功能：
  - 更新 `pom.xml` 版本号
  - 调用 `package.bat` 构建安装程序
  - 生成 SHA256 校验和
  - 创建 GitHub Release
  - 更新 Harry manifest
  - 触发 Harry 网站重建

**步骤 2: 配置环境变量**
在项目仓库的 GitHub Secrets 中添加：
- `HARRY_GITHUB_TOKEN`: 用于触发 Harry 网站重建的 GitHub Token

**步骤 3: 使用 release.ps1 发布新版本**
```powershell
cd g:\GitHubPersonal\计量证书管理系统
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增批量导入功能, 修复数据库bug"
```

**步骤 4: 验证自动化流程**
- 检查 GitHub Release 是否创建成功
- 检查 Harry manifest 是否更新
- 检查 Harry 网站是否显示最新版本

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 配置 GitHub Secrets: `HARRY_GITHUB_TOKEN`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示

---

## 二、桌面应用 + 后端 API 项目

### 4. PDF Reader

#### 项目类型
- **类型**: Python 桌面应用 + FastAPI 后端
- **前端**: 无独立前端
- **后端**: FastAPI (需要 Docker 化)
- **发布方式**: 
  - 桌面版: GitHub Releases (Windows/macOS 安装程序)
  - 后端: Docker 镜像 (ghcr.io/harryhongyue/pdf-reader-api)

#### 改造步骤

**步骤 1: 创建 release.ps1 脚本**
- ✅ 已完成：`scripts/release.ps1`
- 脚本功能：
  - 更新 `local_version.json` 版本号
  - 构建 Windows 桌面安装程序
  - 生成 SHA256 校验和
  - 创建 GitHub Release
  - 构建并推送 Docker 镜像
  - 更新 Harry manifest
  - 触发 Harry 网站重建

**步骤 2: 后端 Docker 化**
在项目仓库的 `backend/` 目录中创建 `Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**步骤 3: 配置环境变量**
在项目仓库的 GitHub Secrets 中添加：
- `HARRY_GITHUB_TOKEN`: 用于触发 Harry 网站重建的 GitHub Token
- `DOCKER_USERNAME`: GitHub Container Registry 用户名
- `DOCKER_PASSWORD`: GitHub Container Registry Token (用于推送镜像)

**步骤 4: 使用 release.ps1 发布新版本**
```powershell
cd g:\GitHubPersonal\PDF-Reader
.\scripts\release.ps1 -Version "v1.3.0" -Changes "新增表格识别功能, 优化OCR准确率"
```

**步骤 5: 验证自动化流程**
- 检查 GitHub Release 是否创建成功
- 检查 Docker 镜像是否推送成功
- 检查 Harry manifest 是否更新
- 检查 Harry 网站是否显示最新版本
- 检查 Harry compose.yml 是否配置 watchtower

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 创建 `backend/Dockerfile`
- [ ] 配置 GitHub Secrets: `HARRY_GITHUB_TOKEN`, `DOCKER_USERNAME`, `DOCKER_PASSWORD`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示
- [ ] 验证 Docker 镜像推送
- [ ] 验证 watchtower 自动更新

---

### 5. Aircargo EDI

#### 项目类型
- **类型**: Python 桌面应用 + FastAPI 后端
- **前端**: 无独立前端
- **后端**: FastAPI (需要 Docker 化)
- **发布方式**: 
  - 桌面版: GitHub Releases (Windows 安装程序)
  - 后端: Docker 镜像 (ghcr.io/harryhongyue/aircargo-edi-api)

#### 改造步骤

**步骤 1: 创建 release.ps1 脚本**
- ✅ 已完成：`scripts/release.ps1`
- 脚本功能：
  - 更新 `local_version.json` 版本号
  - 构建 Windows 桌面安装程序
  - 生成 SHA256 校验和
  - 创建 GitHub Release
  - 构建并推送 Docker 镜像
  - 更新 Harry manifest
  - 触发 Harry 网站重建

**步骤 2: 后端 Docker 化**
在项目仓库的 `backend/` 目录中创建 `Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**步骤 3: 配置环境变量**
在项目仓库的 GitHub Secrets 中添加：
- `HARRY_GITHUB_TOKEN`: 用于触发 Harry 网站重建的 GitHub Token
- `DOCKER_USERNAME`: GitHub Container Registry 用户名
- `DOCKER_PASSWORD`: GitHub Container Registry Token (用于推送镜像)

**步骤 4: 使用 release.ps1 发布新版本**
```powershell
cd g:\GitHubPersonal\Aircargo-EDI
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增AWB解析功能, 优化报文生成"
```

**步骤 5: 验证自动化流程**
- 检查 GitHub Release 是否创建成功
- 检查 Docker 镜像是否推送成功
- 检查 Harry manifest 是否更新
- 检查 Harry 网站是否显示最新版本
- 检查 Harry compose.yml 是否配置 watchtower

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 创建 `backend/Dockerfile`
- [ ] 配置 GitHub Secrets: `HARRY_GITHUB_TOKEN`, `DOCKER_USERNAME`, `DOCKER_PASSWORD`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示
- [ ] 验证 Docker 镜像推送
- [ ] 验证 watchtower 自动更新

---

## 三、网站案例项目

### 6. Future Website Building Platform (Future-Website-Building-Platform)

#### 项目类型
- **类型**: React 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- 在 `src/components/project/` 创建 `FutureWebsitePlatformShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加项目截图、功能介绍、技术栈等信息
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- 在 `src/data/projects.ts` 中添加项目配置
- 设置 `downloadable: false`（因为不是可下载的应用）
- 添加项目链接（指向实际运行的网站地址）

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

### 7. Ominigent (Ominigent)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 可能有后端（保留，不删除）
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- 在 `src/components/project/` 创建 `OminigentShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加项目截图、功能介绍、技术栈等信息
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- 在 `src/data/projects.ts` 中添加项目配置
- 设置 `downloadable: false`
- 添加项目链接（指向实际运行的网站地址）

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的后端代码（如果有）
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

### 8. CryoCore Cooling (CryocoreCooling)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- ✅ 已完成：`CryoCoreCoolingShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- ✅ 已完成：已在 projects.ts 中配置
- 设置 `downloadable: false`

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

### 9. Song Yan (SongYan)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- ✅ 已完成：`SongYanShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- ✅ 已完成：已在 projects.ts 中配置
- 设置 `downloadable: false`

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

### 10. Harry Personal (HarryPersonal)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- ✅ 已完成：`HarryPersonalShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- ✅ 已完成：已在 projects.ts 中配置
- 设置 `downloadable: false`

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

### 11. Harry's Hub (HarrysHub)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- ✅ 已完成：`HarrysHubShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- ✅ 已完成：已在 projects.ts 中配置
- 设置 `downloadable: false`

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

### 12. Electronic Product Specifications Analysis (Electronic-Product-Specifications-Analysis-Front-End)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 可能有后端（Etymolab-Back-End，保留，不删除）
- **发布方式**: 独立部署，Harry 网站仅作为展示页

#### 改造步骤

**重要说明**: 此项目是独立的网站项目，有自己的前端代码和部署方式。Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。

**步骤 1: 在 Harry 网站创建展示组件**
- ✅ 已完成：`ElectronicProductSpecsShowcase.tsx`
- 使用 Harry 网站的统一设计风格
- 添加"访问网站"按钮链接到实际运行的网站

**步骤 2: 在 Harry projects.ts 添加项目条目**
- ✅ 已完成：已在 projects.ts 中配置
- 设置 `downloadable: false`

**步骤 3: 无需修改项目代码**
- 保留项目的所有前端代码
- 保留项目的后端代码（Etymolab-Back-End，如果有）
- 保留项目的部署配置
- Harry 网站仅作为介绍页，不影响项目独立运行

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站

---

## 四、Harry 网站配置

### GitHub Actions 配置

**步骤 1: 配置 GitHub Secrets**
在 Harry 仓库的 GitHub Secrets 中添加：
- `SERVER_HOST`: 服务器地址
- `SERVER_USER`: 服务器用户名
- `SSH_PRIVATE_KEY`: SSH 私钥内容（路径：`G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key`）

**步骤 2: 验证 GitHub Actions**
- ✅ 已完成：`.github/workflows/auto-rebuild.yml`
- 验证 workflow 能正确触发
- 验证 Docker 镜像能正确推送
- 验证 SSH 部署能成功执行

### Docker Compose 配置

**步骤 1: 配置 watchtower**
- ✅ 已完成：在 `compose.yml` 中添加 watchtower 服务
- 为所有服务添加 `com.centurylinklabs.watchtower.enable=true` 标签

**步骤 2: 启动 watchtower**
```bash
cd g:\GitHubPersonal\Harry
docker-compose up -d watchtower
```

**步骤 3: 验证自动更新**
- 发布新版本的 Docker 镜像
- 等待 5 分钟（WATCHTOWER_POLL_INTERVAL=300）
- 验证 watchtower 是否自动拉取新镜像并重启容器

---

## 五、总结

### 完成的改造
- ✅ ODE Solver: 创建 release.ps1
- ✅ SurpriseMe: 创建 release.ps1
- ✅ PDF Reader: 创建 release.ps1
- ✅ Aircargo EDI: 创建 release.ps1
- ✅ 计量证书管理系统: 创建 release.ps1
- ✅ Harry 网站所有 Showcase 组件支持 manifest
- ✅ release-manifest.json 包含所有桌面应用
- ✅ Harry GitHub Actions workflow
- ✅ Harry compose.yml watchtower 配置

### 待完成的改造
- [ ] PDF Reader 后端 Docker 化
- [ ] Aircargo EDI 后端 Docker 化
- [ ] 所有项目配置 GitHub Secrets
- [ ] 测试完整的自动化发布流程
- [ ] 更新 unified-release-and-site-plan.md 文档
