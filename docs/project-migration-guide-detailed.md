# 项目迁移详细指南

本文档为每个项目提供详细的逐步迁移指南，包括具体的操作步骤、GitHub 配置和部署流程选择。

---

## 一、纯桌面应用项目

### 1. ODE Solver (ODE-All-In-One-Solver)

#### 项目类型
- **类型**: JavaFX 桌面应用
- **前端**: 无独立前端
- **后端**: 无后端 API
- **发布方式**: GitHub Releases (Windows 安装程序)
- **项目路径**: `g:\GitHubPersonal\ODE-All-In-One-Solver`

#### 当前状态
- ✅ 已创建 `scripts/release.ps1`
- ✅ 已创建 Harry 展示组件 `OdeSolverShowcase.tsx`
- ✅ 已添加到 release-manifest.json
- ⚠️ 需要配置 GitHub Secrets
- ⚠️ 需要测试发布流程

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\ODE-All-In-One-Solver
# 确认项目结构
dir
# 应该看到：
# - pom.xml (Maven 配置)
# - frontend/ (如果有旧前端，可以保留或删除)
# - scripts/ (包含 release.ps1)
```

**步骤 2: 检查 release.ps1 脚本**
```powershell
# 检查 scripts/release.ps1 是否存在
dir scripts\release.ps1
# 查看脚本内容
type scripts\release.ps1
```

如果 `scripts/release.ps1` 不存在，需要创建它。脚本内容应该包括：
- 更新 `pom.xml` 版本号
- 构建安装程序
- 生成 SHA256 校验和
- 创建 GitHub Release
- 更新 Harry manifest
- 触发 Harry 网站重建

**步骤 3: 配置 GitHub Secrets**

**3.1 Token 策略说明**

关于 GitHub Token 的几个重要问题：

**Q1: Token 是一个应用一个 token，还是总共只需要一个 token？**

**推荐方案**：创建一个专用于自动化发布的 token，用于所有项目。

- **优点**：管理简单，只需要维护一个 token
- **缺点**：如果一个项目泄露，所有项目都会受影响
- **替代方案**：为每个项目创建单独的 token，提高安全性
- **当前推荐**：使用一个统一的自动化发布 token，因为：
  - 所有项目都是你个人的
  - token 只存储在 GitHub Secrets 中，不会泄露
  - 管理成本更低

**Q2: Token 过期日期如何设置？**

GitHub 强烈建议设置过期日期是为了安全性，但对于自动化脚本，频繁更新 token 很麻烦。

**推荐方案**：设置 1 年过期时间，并在日历中设置提醒。

- **选项 A（推荐）**：设置 1 年过期时间
  - 平衡了安全性和便利性
  - 每年更新一次，频率可接受
  - 在日历中设置提醒，避免忘记

- **选项 B**：使用 GitHub App 代替 Personal Access Token
  - 更安全，无过期限制
  - 但配置更复杂
  - 适合大型团队或多用户场景
  - **注意**：GitHub App 与 GitHub 移动应用（手机里的 App）是两个不同的东西
  - **详细配置步骤见下方"GitHub App 配置指南"**

- **选项 C**：设置 No expiration
  - 便利性最高
  - 安全性较低
  - 不推荐用于生产环境

**Q3: 需要选择哪些权限？**

权限选择取决于项目类型。以下是 GitHub Personal Access Token 的所有可用权限列表：

**完整的 GitHub Token 权限列表**：

**repo** ✅（纯桌面应用、桌面应用+后端 API、Harry 项目都需要）
- ✅ repo:status（完整仓库权限的一部分）
- ✅ repo_deployment（完整仓库权限的一部分）
- ✅ public_repo（完整仓库权限的一部分）
- ✅ repo:invite（完整仓库权限的一部分）
- ✅ security_events（完整仓库权限的一部分）
- ✅ workflow ✅（纯桌面应用、桌面应用+后端 API、Harry 项目都需要）
- ✅ write:packages ✅（桌面应用+后端 API 需要）
- ✅ read:packages ✅（桌面应用+后端 API 需要，Harry 项目可选）
- ❌ delete:packages（不需要）
- ❌ admin:org（不需要）
- ❌ write:org（不需要）
- ❌ read:org（不需要）
- ❌ manage_runners:org（不需要）
- ❌ admin:public_key（不需要）
- ❌ write:public_key（不需要）
- ❌ read:public_key（不需要）
- ❌ admin:repo_hook（不需要）
- ❌ write:repo_hook（不需要）
- ❌ read:repo_hook（不需要）
- ❌ admin:org_hook（不需要）
- ❌ gist（不需要）
- ❌ notifications（不需要）
- ❌ user（不需要）
- ❌ read:user（不需要）
- ❌ user:email（不需要）
- ❌ user:follow（不需要）
- ❌ delete_repo（不需要）
- ❌ write:discussion（不需要）
- ❌ read:discussion（不需要）
- ❌ admin:enterprise（不需要）
- ❌ manage_runners:enterprise（不需要）
- ❌ manage_billing:enterprise（不需要）
- ❌ read:enterprise（不需要）
- ❌ scim:enterprise（不需要）
- ❌ audit_log（不需要）
- ❌ read:audit_log（不需要）
- ❌ codespace（不需要）
- ❌ codespace:secrets（不需要）
- ❌ copilot（不需要）
- ❌ manage_billing:copilot（不需要）
- ❌ write:network_configurations（不需要）
- ❌ read:network_configurations（不需要）
- ❌ project（不需要）
- ❌ read:project（不需要）
- ❌ admin:gpg_key（不需要）
- ❌ write:gpg_key（不需要）
- ❌ read:gpg_key（不需要）
- ❌ admin:ssh_signing_key（不需要）
- ❌ write:ssh_signing_key（不需要）
- ❌ read:ssh_signing_key（不需要）

**按项目类型分类的权限选择**：

**纯桌面应用（ODE Solver、SurpriseMe、计量证书管理系统）**：
- ✅ **repo**（勾选此项会自动勾选所有子权限）
  - repo:status
  - repo_deployment
  - public_repo
  - repo:invite
  - security_events
- ✅ **workflow**（必须单独勾选）
- ❌ 其他所有权限都不需要

**桌面应用 + 后端 API（PDF Reader、Aircargo EDI）**：
- ✅ **repo**（勾选此项会自动勾选所有子权限）
  - repo:status
  - repo_deployment
  - public_repo
  - repo:invite
  - security_events
- ✅ **workflow**（必须单独勾选）
- ✅ **write:packages**（必须单独勾选，用于推送 Docker 镜像）
- ✅ **read:packages**（推荐勾选，用于拉取 Docker 镜像）
- ❌ 其他所有权限都不需要

**Harry 项目**：
- ✅ **repo**（勾选此项会自动勾选所有子权限）
  - repo:status
  - repo_deployment
  - public_repo
  - repo:invite
  - security_events
- ✅ **workflow**（必须单独勾选）
- ✅ **read:packages**（可选，用于拉取其他项目的 Docker 镜像）
- ❌ 其他所有权限都不需要

**权限选择总结**：
- 所有项目都需要：`repo` 和 `workflow`
- 有 Docker 的项目额外需要：`write:packages` 和 `read:packages`
- Harry 项目可选：`read:packages`
- 不需要：所有其他权限（特别是 `delete:packages`, `admin:org` 等高权限）

**在 GitHub 界面上如何勾选权限**：

1. 访问 `https://github.com/settings/tokens`
2. 点击 "Generate new token" -> "Generate new token (classic)"
3. 在 "Select scopes" 部分：
   - 找到 **repo** 部分，勾选 ✅
     - 这会自动勾选 repo 下的所有子权限
   - 找到 **workflow** 部分，勾选 ✅
   - （如果有 Docker）找到 **write:packages** 部分，勾选 ✅
   - （如果有 Docker）找到 **read:packages** 部分，勾选 ✅
4. 不要勾选其他任何权限
5. 点击 "Generate token"

**注意事项**：
- ✅ 表示需要勾选的权限
- ❌ 表示不需要勾选的权限
- 勾选 `repo` 会自动勾选其所有子权限，不需要手动勾选子权限
- `workflow` 需要单独勾选，不在 `repo` 下
- `write:packages` 和 `read:packages` 需要单独勾选，不在 `repo` 下
- 只授予必要的权限，不要授予 `delete:packages`, `admin:org` 等高权限



**3.2 获取 GitHub Token**

1. 访问 `https://github.com/settings/tokens`
2. 点击 "Generate new token" -> "Generate new token (classic)"
3. 填写 Token 信息：
   - **Note**: `自动化发布 Token - 用于项目发布自动化`（或其他描述性名称）
   - **Expiration**: 选择 `1 year`（推荐）
   - **Select scopes**: 根据项目类型选择权限（见上文）

4. 对于纯桌面应用（ODE Solver、SurpriseMe、计量证书管理系统），勾选：
   - ✅ `repo`（会自动勾选所有子权限）
   - ✅ `workflow`

5. 对于桌面应用 + 后端 API（PDF Reader、Aircargo EDI），额外勾选：
   - ✅ `write:packages`
   - ✅ `read:packages`

6. 点击 "Generate token"
7. **重要**：立即复制生成的 token（只显示一次，妥善保存）
8. 建议将 token 保存到密码管理器（如 1Password、Bitwarden）

**3.3 在项目仓库中配置 Secret**

1. 打开浏览器访问: `https://github.com/HarryHongyue/[项目名]/settings/secrets/actions`
2. 点击 "New repository secret"
3. 添加以下 Secret:
   - **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
   - **Value**: 粘贴刚才复制的 token
4. 点击 "Add secret"

**3.4 为多个项目配置同一个 Token**

如果使用统一的自动化发布 token，需要在每个项目仓库中重复上述步骤：

- ODE Solver: `https://github.com/HarryHongyue/ODE-All-In-One-Solver/settings/secrets/actions`
- SurpriseMe: `https://github.com/HarryHongyue/SurpriseMe/settings/secrets/actions`
- PDF Reader: `https://github.com/HarryHongyue/PDF-Reader/settings/secrets/actions`
- Aircargo EDI: `https://github.com/HarryHongyue/Aircargo-EDI/settings/secrets/actions`
- 计量证书管理系统: `https://github.com/HarryHongyue/Metrology-Certificate-System/settings/secrets/actions`

在每个仓库中都添加相同的 Secret：
- **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
- **Value**: 相同的 token 值

**3.5 Token 安全性建议**

1. **不要将 token 提交到代码仓库**
   - token 只能存储在 GitHub Secrets 中
   - 永远不要在代码中硬编码 token

2. **定期更新 token**
   - 设置 1 年过期时间
   - 在日历中设置提醒（提前 1 周）
   - 更新 token 后，记得更新所有项目仓库的 Secret

3. **监控 token 使用情况**
   - 访问 `https://github.com/settings/tokens`
   - 查看每个 token 的使用情况
   - 如果发现异常使用，立即撤销 token

4. **限制 token 权限**
   - 只授予必要的权限
   - 不要授予 `admin:org` 等高权限
   - 除非必要，不要授予 `delete:packages`

5. **使用环境变量**
   - 在脚本中使用环境变量读取 token
   - 不要在日志中打印 token

**步骤 4: 测试发布流程**

**4.1 准备发布**
```powershell
cd g:\GitHubPersonal\ODE-All-In-One-Solver
# 确保当前分支是 main 或 master
git branch
# 如果有未提交的更改，先提交
git status
git add .
git commit -m "准备发布新版本"
git push
```

**4.2 运行发布脚本**
```powershell
# 运行发布脚本
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增功能1, 新增功能2, 修复bug"
```

脚本会自动执行以下操作：
1. 更新 `pom.xml` 中的版本号
2. 运行 Maven 构建安装程序
3. 生成 SHA256 校验和
4. 创建 GitHub Release
5. 更新 Harry 仓库的 `release-manifest.json`
6. 触发 Harry 网站自动重建

**4.3 验证发布结果**
1. 访问 `https://github.com/HarryHongyue/ODE-All-In-One-Solver/releases`
   - 确认新版本 Release 已创建
   - 确认安装程序已上传
   - 确认 Release notes 包含变更说明

2. 访问 Harry 网站 `https://harryhongyue.com/projects/ode-solver`
   - 确认版本号已更新
   - 确认下载链接正确
   - 确认发布日期已更新

3. 访问 Harry 仓库 `https://github.com/HarryHongyue/Harry`
   - 检查 `public/releases/release-manifest.json` 是否更新
   - 检查 GitHub Actions 是否触发自动重建

**步骤 5: 处理旧前端（如果有）**

如果项目有旧的 `frontend/` 目录，可以选择：
- **选项 A**: 保留作为历史记录，但不维护
- **选项 B**: 删除旧前端，因为 Harry 网站已接管展示功能

选择 B 的操作：
```powershell
cd g:\GitHubPersonal\ODE-All-In-One-Solver
# 备份旧前端（可选）
# git mv frontend/ frontend-backup/
# 或者直接删除
# Remove-Item -Recurse -Force frontend\
# git add .
# git commit -m "删除旧前端，展示功能迁移到 Harry 网站"
# git push
```

#### GitHub Pages 配置

**不需要配置 GitHub Pages**，因为：
- ODE Solver 是桌面应用，不需要在线前端
- 展示功能已迁移到 Harry 网站
- 发布通过 GitHub Releases 完成

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 配置 GitHub Secrets: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示
- [ ] 处理旧前端（如果有）

---

### 2. SurpriseMe

#### 项目类型
- **类型**: 浏览器扩展
- **前端**: 无独立前端
- **后端**: 无后端 API
- **发布方式**: GitHub Releases (ZIP 扩展包)
- **项目路径**: `g:\GitHubPersonal\SurpriseMe`

#### 当前状态
- ✅ 已创建 `scripts/release.ps1`
- ✅ 已创建 Harry 展示组件 `SurpriseMeShowcase.tsx`
- ✅ 已添加到 release-manifest.json
- ⚠️ 需要配置 GitHub Secrets
- ⚠️ 需要测试发布流程

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\SurpriseMe
# 确认项目结构
dir
# 应该看到：
# - package.json (扩展配置)
# - manifest.json (浏览器扩展 manifest)
# - scripts/ (包含 build-extension.js 和 release.ps1)
# - src/ (扩展源码)
```

**步骤 2: 检查 release.ps1 脚本**
```powershell
# 检查 scripts/release.ps1 是否存在
dir scripts\release.ps1
# 查看脚本内容
type scripts\release.ps1
```

如果 `scripts/release.ps1` 不存在，需要创建它。脚本内容应该包括：
- 更新 `package.json` 版本号
- 更新 `manifest.json` 版本号
- 构建浏览器扩展 ZIP 包
- 生成 SHA256 校验和
- 创建 GitHub Release
- 更新 Harry manifest
- 触发 Harry 网站重建

**步骤 3: 配置 GitHub Secrets**

关于 GitHub Token 的配置，请参考 **ODE Solver 项目** 的详细说明（步骤 3.1-3.5），包括：
- Token 策略说明（一个 token 用于所有项目）
- Token 过期日期设置（推荐 1 年）
- 权限选择（根据项目类型）
- Token 安全性建议

**对于 SurpriseMe（纯桌面应用）**：
- Token 权限：`repo` + `workflow`
- 不需要：`write:packages`, `delete:packages`, `admin:org`

**配置步骤**：
1. 如果还没有创建统一的自动化发布 token，请参考 ODE Solver 的步骤 3.2 创建 token
2. 如果已经有统一的自动化发布 token，直接在 SurpriseMe 仓库中配置 Secret：
   - 访问：`https://github.com/HarryHongyue/SurpriseMe/settings/secrets/actions`
   - 点击 "New repository secret"
   - **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
   - **Value**: 粘贴统一的自动化发布 token
   - 点击 "Add secret"

**步骤 4: 测试发布流程**

**4.1 准备发布**
```powershell
cd g:\GitHubPersonal\SurpriseMe
# 确保当前分支是 main 或 master
git branch
# 如果有未提交的更改，先提交
git status
git add .
git commit -m "准备发布新版本"
git push
```

**4.2 运行发布脚本**
```powershell
# 运行发布脚本
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增颜色选项, 修复Chrome兼容性"
```

脚本会自动执行以下操作：
1. 更新 `package.json` 中的版本号
2. 更新 `manifest.json` 中的版本号
3. 运行构建脚本生成 ZIP 包
4. 生成 SHA256 校验和
5. 创建 GitHub Release
6. 更新 Harry 仓库的 `release-manifest.json`
7. 触发 Harry 网站自动重建

**4.3 验证发布结果**
1. 访问 `https://github.com/HarryHongyue/SurpriseMe/releases`
   - 确认新版本 Release 已创建
   - 确认 ZIP 包已上传
   - 确认 Release notes 包含变更说明

2. 访问 Harry 网站 `https://harryhongyue.com/projects/surpriseme`
   - 确认版本号已更新
   - 确认下载链接正确
   - 确认发布日期已更新

3. 访问 Harry 仓库 `https://github.com/HarryHongyue/Harry`
   - 检查 `public/releases/release-manifest.json` 是否更新
   - 检查 GitHub Actions 是否触发自动重建

**步骤 5: 处理旧前端（如果有）**

如果项目有旧的 `frontend/` 目录，可以选择：
- **选项 A**: 保留作为历史记录，但不维护
- **选项 B**: 删除旧前端，因为 Harry 网站已接管展示功能

#### GitHub Pages 配置

**不需要配置 GitHub Pages**，因为：
- SurpriseMe 是浏览器扩展，不需要在线前端
- 展示功能已迁移到 Harry 网站
- 发布通过 GitHub Releases 完成

#### Chrome Web Store / Firefox Add-ons 发布

发布新版本到浏览器商店需要单独操作：
1. **Chrome Web Store**:
   - 访问 `https://chrome.google.com/webstore/devconsole`
   - 上传新版本的 ZIP 包
   - 更新变更说明
   - 提交审核

2. **Firefox Add-ons**:
   - 访问 `https://addons.mozilla.org/developers/`
   - 上传新版本的 ZIP 包
   - 更新变更说明
   - 提交审核

这些步骤目前需要手动完成，可以后续考虑自动化。

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 配置 GitHub Secrets: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示
- [ ] 手动发布到 Chrome Web Store / Firefox Add-ons

---

### 3. 计量证书管理系统

#### 项目类型
- **类型**: JavaFX 桌面应用
- **前端**: 无独立前端
- **后端**: 无后端 API
- **发布方式**: GitHub Releases (Windows 安装程序)
- **项目路径**: `g:\GitHubPersonal\计量证书管理系统`

#### 当前状态
- ✅ 已创建 `scripts/release.ps1`
- ✅ 已创建 Harry 展示组件 `MetrologyCertificateShowcase.tsx`
- ✅ 已添加到 release-manifest.json
- ⚠️ 需要配置 GitHub Secrets
- ⚠️ 需要测试发布流程

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\计量证书管理系统
# 确认项目结构
dir
# 应该看到：
# - pom.xml (Maven 配置)
# - package.bat (安装包构建脚本)
# - scripts/ (包含 release.ps1)
# - src/ (Java 源码)
```

**步骤 2: 检查 release.ps1 脚本**
```powershell
# 检查 scripts/release.ps1 是否存在
dir scripts\release.ps1
# 查看脚本内容
type scripts\release.ps1
```

如果 `scripts/release.ps1` 不存在，需要创建它。脚本内容应该包括：
- 更新 `pom.xml` 版本号
- 调用 `package.bat` 构建安装程序
- 生成 SHA256 校验和
- 创建 GitHub Release
- 更新 Harry manifest
- 触发 Harry 网站重建

**步骤 3: 配置 GitHub Secrets**

关于 GitHub Token 的配置，请参考 **ODE Solver 项目** 的详细说明（步骤 3.1-3.5），包括：
- Token 策略说明（一个 token 用于所有项目）
- Token 过期日期设置（推荐 1 年）
- 权限选择（根据项目类型）
- Token 安全性建议

**对于计量证书管理系统（纯桌面应用）**：
- Token 权限：`repo` + `workflow`
- 不需要：`write:packages`, `delete:packages`, `admin:org`

**配置步骤**：
1. 如果还没有创建统一的自动化发布 token，请参考 ODE Solver 的步骤 3.2 创建 token
2. 如果已经有统一的自动化发布 token，直接在计量证书管理系统仓库中配置 Secret：
   - 访问：`https://github.com/HarryHongyue/计量证书管理系统/settings/secrets/actions`
   - 点击 "New repository secret"
   - **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
   - **Value**: 粘贴统一的自动化发布 token
   - 点击 "Add secret"

**步骤 4: 测试发布流程**

**4.1 准备发布**
```powershell
cd g:\GitHubPersonal\计量证书管理系统
# 确保当前分支是 main 或 master
git branch
# 如果有未提交的更改，先提交
git status
git add .
git commit -m "准备发布新版本"
git push
```

**4.2 运行发布脚本**
```powershell
# 运行发布脚本
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增批量导入功能, 修复数据库bug"
```

脚本会自动执行以下操作：
1. 更新 `pom.xml` 中的版本号
2. 运行 `package.bat` 构建安装程序
3. 生成 SHA256 校验和
4. 创建 GitHub Release
5. 更新 Harry 仓库的 `release-manifest.json`
6. 触发 Harry 网站自动重建

**4.3 验证发布结果**
1. 访问 `https://github.com/HarryHongyue/计量证书管理系统/releases`
   - 确认新版本 Release 已创建
   - 确认安装程序已上传
   - 确认 Release notes 包含变更说明

2. 访问 Harry 网站 `https://harryhongyue.com/projects/metrology-certificate`
   - 确认版本号已更新
   - 确认下载链接正确
   - 确认发布日期已更新

3. 访问 Harry 仓库 `https://github.com/HarryHongyue/Harry`
   - 检查 `public/releases/release-manifest.json` 是否更新
   - 检查 GitHub Actions 是否触发自动重建

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 配置 GitHub Secrets: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
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
- **项目路径**: `g:\GitHubPersonal\PDF-Reader`

#### 当前状态
- ✅ 已创建 `scripts/release.ps1`
- ✅ 已创建 Harry 展示组件 `PdfReaderShowcase.tsx`
- ✅ 已添加到 release-manifest.json
- ⚠️ 需要创建后端 Dockerfile
- ⚠️ 需要配置 GitHub Secrets
- ⚠️ 需要测试发布流程

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\PDF-Reader
# 确认项目结构
dir
# 应该看到：
# - backend/ (FastAPI 后端)
# - frontend/ (桌面应用前端，可选)
# - scripts/ (包含 release.ps1)
```

**步骤 2: 创建后端 Dockerfile**

在 `backend/` 目录中创建 `Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# 复制依赖文件
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

如果后端项目结构不同，需要根据实际情况调整 Dockerfile。

**步骤 3: 检查 release.ps1 脚本**
```powershell
# 检查 scripts/release.ps1 是否存在
dir scripts\release.ps1
# 查看脚本内容
type scripts\release.ps1
```

如果 `scripts/release.ps1` 不存在，需要创建它。脚本内容应该包括：
- 更新 `local_version.json` 版本号
- 构建 Windows 桌面安装程序
- 生成 SHA256 校验和
- 创建 GitHub Release
- 构建并推送 Docker 镜像
- 更新 Harry manifest
- 触发 Harry 网站重建

**步骤 4: 配置 GitHub Secrets**

关于 GitHub Token 的配置，请参考 **ODE Solver 项目** 的详细说明（步骤 3.1-3.5），包括：
- Token 策略说明（一个 token 用于所有项目）
- Token 过期日期设置（推荐 1 年）
- 权限选择（根据项目类型）
- Token 安全性建议

**对于 PDF Reader（桌面应用 + 后端 API）**：
- Token 权限：`repo` + `workflow` + `write:packages` + `read:packages`
- 不需要：`delete:packages`, `admin:org`

**配置步骤**：
1. 如果还没有创建统一的自动化发布 token，请参考 ODE Solver 的步骤 3.2 创建 token
   - **注意**：创建 token 时需要额外勾选 `write:packages` 和 `read:packages`
2. 如果已经有统一的自动化发布 token，确认该 token 包含 `write:packages` 权限
   - 如果不包含，需要重新创建 token 并添加相应权限
3. 在 PDF Reader 仓库中配置 Secret：
   - 访问：`https://github.com/HarryHongyue/PDF-Reader/settings/secrets/actions`
   - 点击 "New repository secret"
   - **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
   - **Value**: 粘贴统一的自动化发布 token
   - 点击 "Add secret"

**步骤 4.1: 配置 Docker 相关 Secrets**

除了 `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`，PDF Reader 还需要配置 Docker 相关的 Secrets：

1. 获取 GitHub Container Registry Token：
   - 访问 `https://github.com/settings/tokens`
   - 点击 "Generate new token" -> "Generate new token (classic)"
   - **Note**: `Docker Registry Token - 用于推送 Docker 镜像`
   - **Expiration**: 选择 `1 year`（推荐）
   - **Select scopes**：
     - ✅ `write:packages`（用于推送 Docker 镜像）
     - ✅ `read:packages`（用于拉取 Docker 镜像）
   - 点击 "Generate token"
   - 复制生成的 token

2. 在 PDF Reader 仓库中配置 Docker Secrets：
   - 访问：`https://github.com/HarryHongyue/PDF-Reader/settings/secrets/actions`
   - 点击 "New repository secret"
   - **Name**: `DOCKER_USERNAME`
   - **Value**: 你的 GitHub 用户名（例如：`HarryHongyue`）
   - 点击 "Add secret"
   
   - 再次点击 "New repository secret"
   - **Name**: `DOCKER_PASSWORD`
   - **Value**: 粘贴刚才创建的 Docker Registry Token
   - 点击 "Add secret"

**步骤 5: 测试发布流程**

**5.1 准备发布**
```powershell
cd g:\GitHubPersonal\PDF-Reader
# 确保当前分支是 main 或 master
git branch
# 如果有未提交的更改，先提交
git status
git add .
git commit -m "准备发布新版本"
git push
```

**5.2 运行发布脚本**
```powershell
# 运行发布脚本
.\scripts\release.ps1 -Version "v1.3.0" -Changes "新增表格识别功能, 优化OCR准确率"
```

脚本会自动执行以下操作：
1. 更新 `local_version.json` 中的版本号
2. 构建 Windows 桌面安装程序
3. 生成 SHA256 校验和
4. 创建 GitHub Release
5. 构建 Docker 镜像
6. 推送 Docker 镜像到 GitHub Container Registry
7. 更新 Harry 仓库的 `release-manifest.json`
8. 触发 Harry 网站自动重建

**5.3 验证发布结果**
1. 访问 `https://github.com/HarryHongyue/PDF-Reader/releases`
   - 确认新版本 Release 已创建
   - 确认安装程序已上传
   - 确认 Release notes 包含变更说明

2. 访问 GitHub Container Registry: `https://github.com/HarryHongyue/PDF-Reader/pkgs/container/pdf-reader-api`
   - 确认新版本 Docker 镜像已推送

3. 访问 Harry 网站 `https://harryhongyue.com/projects/pdf-reader`
   - 确认版本号已更新
   - 确认下载链接正确
   - 确认发布日期已更新

4. 访问 Harry 仓库 `https://github.com/HarryHongyue/Harry`
   - 检查 `public/releases/release-manifest.json` 是否更新
   - 检查 GitHub Actions 是否触发自动重建

**步骤 6: 配置 Harry compose.yml**

确保 Harry 仓库的 `compose.yml` 包含 PDF Reader 后端服务配置：

```yaml
services:
  pdf-reader-api:
    image: ghcr.io/harryhongyue/pdf-reader-api:latest
    container_name: pdf-reader-api
    ports:
      - "8001:8000"
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    restart: unless-stopped
```

**步骤 7: 验证 watchtower 自动更新**

1. 发布新版本 Docker 镜像后，等待 5 分钟（WATCHTOWER_POLL_INTERVAL=300）
2. 检查 watchtower 日志:
```powershell
docker logs watchtower
```
3. 验证 pdf-reader-api 容器是否自动重启:
```powershell
docker ps | findstr pdf-reader-api
```

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 创建 `backend/Dockerfile`
- [ ] 配置 GitHub Secrets: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`, `DOCKER_USERNAME`, `DOCKER_PASSWORD`
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
- **项目路径**: `g:\GitHubPersonal\Aircargo-EDI`

#### 当前状态
- ✅ 已创建 `scripts/release.ps1`
- ✅ 已创建 Harry 展示组件 `AircargoEdiShowcase.tsx`
- ✅ 已添加到 release-manifest.json
- ⚠️ 需要创建后端 Dockerfile
- ⚠️ 需要配置 GitHub Secrets
- ⚠️ 需要测试发布流程

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\Aircargo-EDI
# 确认项目结构
dir
# 应该看到：
# - backend/ (FastAPI 后端)
# - frontend/ (桌面应用前端，可选)
# - scripts/ (包含 release.ps1)
```

**步骤 2: 创建后端 Dockerfile**

在 `backend/` 目录中创建 `Dockerfile`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# 复制依赖文件
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码
COPY . .

# 暴露端口
EXPOSE 8000

# 启动命令
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

如果后端项目结构不同，需要根据实际情况调整 Dockerfile。

**步骤 3: 检查 release.ps1 脚本**
```powershell
# 检查 scripts/release.ps1 是否存在
dir scripts\release.ps1
# 查看脚本内容
type scripts\release.ps1
```

如果 `scripts/release.ps1` 不存在，需要创建它。脚本内容应该包括：
- 更新 `local_version.json` 版本号
- 构建 Windows 桌面安装程序
- 生成 SHA256 校验和
- 创建 GitHub Release
- 构建并推送 Docker 镜像
- 更新 Harry manifest
- 触发 Harry 网站重建

**步骤 4: 配置 GitHub Secrets**

关于 GitHub Token 的配置，请参考 **ODE Solver 项目** 的详细说明（步骤 3.1-3.5），包括：
- Token 策略说明（一个 token 用于所有项目）
- Token 过期日期设置（推荐 1 年）
- 权限选择（根据项目类型）
- Token 安全性建议

**对于 Aircargo EDI（桌面应用 + 后端 API）**：
- Token 权限：`repo` + `workflow` + `write:packages` + `read:packages`
- 不需要：`delete:packages`, `admin:org`

**配置步骤**：
1. 如果还没有创建统一的自动化发布 token，请参考 ODE Solver 的步骤 3.2 创建 token
   - **注意**：创建 token 时需要额外勾选 `write:packages` 和 `read:packages`
2. 如果已经有统一的自动化发布 token，确认该 token 包含 `write:packages` 权限
   - 如果不包含，需要重新创建 token 并添加相应权限
3. 在 Aircargo EDI 仓库中配置 Secret：
   - 访问：`https://github.com/HarryHongyue/Aircargo-EDI/settings/secrets/actions`
   - 点击 "New repository secret"
   - **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
   - **Value**: 粘贴统一的自动化发布 token
   - 点击 "Add secret"

**步骤 4.1: 配置 Docker 相关 Secrets**

除了 `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`，Aircargo EDI 还需要配置 Docker 相关的 Secrets：

1. 获取 GitHub Container Registry Token：
   - 如果已经在 PDF Reader 项目中创建了 Docker Registry Token，可以复用同一个 token
   - 如果没有，请参考 PDF Reader 的步骤 4.1 创建 token
   - **Note**: `Docker Registry Token - 用于推送 Docker 镜像`
   - **Expiration**: 选择 `1 year`（推荐）
   - **Select scopes**：
     - ✅ `write:packages`（用于推送 Docker 镜像）
     - ✅ `read:packages`（用于拉取 Docker 镜像）

2. 在 Aircargo EDI 仓库中配置 Docker Secrets：
   - 访问：`https://github.com/HarryHongyue/Aircargo-EDI/settings/secrets/actions`
   - 点击 "New repository secret"
   - **Name**: `DOCKER_USERNAME`
   - **Value**: 你的 GitHub 用户名（例如：`HarryHongyue`）
   - 点击 "Add secret"
   
   - 再次点击 "New repository secret"
   - **Name**: `DOCKER_PASSWORD`
   - **Value**: 粘贴 Docker Registry Token（可以与 PDF Reader 使用同一个 token）
   - 点击 "Add secret"

**步骤 5: 测试发布流程**

**5.1 准备发布**
```powershell
cd g:\GitHubPersonal\Aircargo-EDI
# 确保当前分支是 main 或 master
git branch
# 如果有未提交的更改，先提交
git status
git add .
git commit -m "准备发布新版本"
git push
```

**5.2 运行发布脚本**
```powershell
# 运行发布脚本
.\scripts\release.ps1 -Version "v1.1.0" -Changes "新增AWB解析功能, 优化报文生成"
```

脚本会自动执行以下操作：
1. 更新 `local_version.json` 中的版本号
2. 构建 Windows 桌面安装程序
3. 生成 SHA256 校验和
4. 创建 GitHub Release
5. 构建 Docker 镜像
6. 推送 Docker 镜像到 GitHub Container Registry
7. 更新 Harry 仓库的 `release-manifest.json`
8. 触发 Harry 网站自动重建

**5.3 验证发布结果**
1. 访问 `https://github.com/HarryHongyue/Aircargo-EDI/releases`
   - 确认新版本 Release 已创建
   - 确认安装程序已上传
   - 确认 Release notes 包含变更说明

2. 访问 GitHub Container Registry: `https://github.com/HarryHongyue/Aircargo-EDI/pkgs/container/aircargo-edi-api`
   - 确认新版本 Docker 镜像已推送

3. 访问 Harry 网站 `https://harryhongyue.com/projects/aircargo-edi`
   - 确认版本号已更新
   - 确认下载链接正确
   - 确认发布日期已更新

4. 访问 Harry 仓库 `https://github.com/HarryHongyue/Harry`
   - 检查 `public/releases/release-manifest.json` 是否更新
   - 检查 GitHub Actions 是否触发自动重建

**步骤 6: 配置 Harry compose.yml**

确保 Harry 仓库的 `compose.yml` 包含 Aircargo EDI 后端服务配置：

```yaml
services:
  aircargo-edi-api:
    image: ghcr.io/harryhongyue/aircargo-edi-api:latest
    container_name: aircargo-edi-api
    ports:
      - "8002:8000"
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    restart: unless-stopped
```

**步骤 7: 验证 watchtower 自动更新**

1. 发布新版本 Docker 镜像后，等待 5 分钟（WATCHTOWER_POLL_INTERVAL=300）
2. 检查 watchtower 日志:
```powershell
docker logs watchtower
```
3. 验证 aircargo-edi-api 容器是否自动重启:
```powershell
docker ps | findstr aircargo-edi-api
```

#### 代码仓库操作清单
- [x] 创建 `scripts/release.ps1`
- [ ] 创建 `backend/Dockerfile`
- [ ] 配置 GitHub Secrets: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`, `DOCKER_USERNAME`, `DOCKER_PASSWORD`
- [ ] 测试发布流程
- [ ] 验证 Harry 网站版本显示
- [ ] 验证 Docker 镜像推送
- [ ] 验证 watchtower 自动更新

---

## 三、网站案例项目

### 重要说明

网站案例项目（Omnigent OS、Omnigent、CryoCore Cooling、Song Yan、Harry Personal、Harry's Hub、Electronic Product Specifications Analysis）是**独立运行的网站项目**，有自己的前端代码和部署方式。

**Harry 网站仅作为介绍页展示项目信息，不影响项目的独立运行。**

这些项目**不需要删除任何代码**，也不需要修改任何部署配置。只需要在 Harry 网站创建展示组件作为介绍页。

---

### 6. Omnigent OS (Future-Website-Building-Platform)

#### 项目类型
- **类型**: React 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\Future-Website-Building-Platform`

#### 当前状态
- ✅ 已在 Harry 网站创建展示组件（如有）
- ✅ 已在 Harry projects.ts 添加项目条目（如有）
- ⚠️ 需要验证 Harry 网站展示页正常显示
- ⚠️ 需要验证"访问网站"链接正确

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\Future-Website-Building-Platform
# 确认项目结构
dir
# 应该看到：
# - package.json
# - src/ 或 frontend/ (React 源码)
# - vite.config.ts 或其他构建配置
```

**步骤 2: 确认项目独立部署方式**

检查项目的部署配置：
- 如果使用 GitHub Pages: 查看 `.github/workflows/` 目录
- 如果使用 Vercel/Netlify: 查看项目配置
- 如果使用自建服务器: 查看 Dockerfile 或部署脚本

**不需要修改任何部署配置**，项目继续独立运行。

**步骤 3: 在 Harry 网站创建展示组件（如果还没有）**

如果 Harry 网站还没有展示组件，需要创建：

1. 在 Harry 项目中创建文件: `src/components/project/FutureWebsitePlatformShowcase.tsx`
2. 使用 Harry 网站的统一设计风格
3. 添加项目截图、功能介绍、技术栈等信息
4. 添加"访问网站"按钮链接到实际运行的网站

示例代码结构：
```tsx
import React from 'react';
import { ExternalLink } from 'lucide-react';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';

const FutureWebsitePlatformShowcase: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="section-shell">
        <h1>Omnigent OS</h1>
        <p>项目描述...</p>
        <a href="https://实际网站地址" className={neoButtonClass} target="_blank" rel="noopener noreferrer">
          <ExternalLink size={20} />
          访问网站
        </a>
      </section>
      
      {/* Features Section */}
      <section className="section-shell">
        <h2>功能特性</h2>
        <NeoCard>
          {/* 功能列表 */}
        </NeoCard>
      </section>
    </>
  );
};

export default FutureWebsitePlatformShowcase;
```

**步骤 4: 在 Harry projects.ts 添加项目条目（如果还没有）**

在 Harry 项目的 `src/data/projects.ts` 中添加：

```typescript
{
  id: 'future-website-platform',
  name: 'Omnigent OS',
  slug: 'future-website-platform',
  description: '未来网站构建平台',
  category: 'website',
  downloadable: false, // 不是可下载的应用
  externalUrl: 'https://实际网站地址', // 实际运行的网站地址
  showcaseComponent: FutureWebsitePlatformShowcase,
}
```

**步骤 5: 验证 Harry 网站展示页**

1. 访问 Harry 网站: `https://harryhongyue.com/projects/future-website-platform`
2. 确认展示页正常显示
3. 确认"访问网站"按钮链接正确
4. 点击"访问网站"按钮，确认能正常跳转到实际网站

#### GitHub Pages 配置

**如果项目使用 GitHub Pages 部署**，确保配置正确：

1. 访问 `https://github.com/HarryHongyue/Future-Website-Building-Platform/settings/pages`
2. 选择部署源：
   - **Source**: GitHub Actions
   - 或者 **Source**: Deploy from a branch
3. 如果选择 "Deploy from a branch":
   - **Branch**: `main` (或 `master`)
   - **Folder**: `/root` (或 `/docs`，取决于构建输出目录)

**不需要修改现有配置**，项目继续使用 GitHub Pages 独立部署。

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件（如有）
- [x] 在 Harry projects.ts 添加项目条目（如有）
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

### 7. Omnigent (Omnigent)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 可能有后端（保留，不删除）
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\Omnigent`

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\Omnigent
# 确认项目结构
dir
# 检查是否有后端
dir backend
```

**步骤 2: 确认项目独立部署方式**

检查项目的部署配置（同 Omnigent OS）。

**步骤 3: 在 Harry 网站创建展示组件（如果还没有）**

参考 Omnigent OS 的步骤。

**步骤 4: 在 Harry projects.ts 添加项目条目（如果还没有）**

参考 Omnigent OS 的步骤。

**步骤 5: 验证 Harry 网站展示页**

参考 Omnigent OS 的步骤。

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件（如有）
- [x] 在 Harry projects.ts 添加项目条目（如有）
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

### 8. CryoCore Cooling (CryocoreCooling)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\CryocoreCooling`

#### 当前状态
- ✅ 已在 Harry 网站创建展示组件 `CryoCoreCoolingShowcase.tsx`
- ✅ 已在 Harry projects.ts 添加项目条目
- ⚠️ 需要验证 Harry 网站展示页正常显示
- ⚠️ 需要验证"访问网站"链接正确

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\CryocoreCooling
# 确认项目结构
dir
```

**步骤 2: 确认项目独立部署方式**

检查项目的部署配置。

**步骤 3: 验证 Harry 网站展示组件**

1. 打开 Harry 项目的 `src/components/project/CryoCoreCoolingShowcase.tsx`
2. 确认"访问网站"按钮链接正确
3. 如果链接不正确，修改为实际运行的网站地址

**步骤 4: 验证 Harry projects.ts 配置**

1. 打开 Harry 项目的 `src/data/projects.ts`
2. 找到 CryoCore Cooling 项目条目
3. 确认 `externalUrl` 字段指向实际运行的网站地址
4. 确认 `downloadable: false`

**步骤 5: 验证 Harry 网站展示页**

1. 访问 Harry 网站: `https://harryhongyue.com/projects/cryocore-cooling`
2. 确认展示页正常显示
3. 确认"访问网站"按钮链接正确
4. 点击"访问网站"按钮，确认能正常跳转到实际网站

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

### 9. Song Yan (SongYan)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\SongYan`

#### 当前状态
- ✅ 已在 Harry 网站创建展示组件 `SongYanShowcase.tsx`
- ✅ 已在 Harry projects.ts 添加项目条目
- ⚠️ 需要验证 Harry 网站展示页正常显示
- ⚠️ 需要验证"访问网站"链接正确

#### 详细迁移步骤

参考 CryoCore Cooling 的详细迁移步骤。

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

### 10. Harry Personal (HarryPersonal)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\HarryPersonal`

#### 当前状态
- ✅ 已在 Harry 网站创建展示组件 `HarryPersonalShowcase.tsx`
- ✅ 已在 Harry projects.ts 添加项目条目
- ⚠️ 需要验证 Harry 网站展示页正常显示
- ⚠️ 需要验证"访问网站"链接正确

#### 详细迁移步骤

参考 CryoCore Cooling 的详细迁移步骤。

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

### 11. Harry's Hub (HarrysHub)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 无后端
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\HarrysHub`

#### 当前状态
- ✅ 已在 Harry 网站创建展示组件 `HarrysHubShowcase.tsx`
- ✅ 已在 Harry projects.ts 添加项目条目
- ⚠️ 需要验证 Harry 网站展示页正常显示
- ⚠️ 需要验证"访问网站"链接正确

#### 详细迁移步骤

参考 CryoCore Cooling 的详细迁移步骤。

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

### 12. Electronic Product Specifications Analysis (Electronic-Product-Specifications-Analysis-Front-End)

#### 项目类型
- **类型**: 前端网站（独立运行）
- **前端**: 有独立前端（保留，不删除）
- **后端**: 可能有后端（Etymolab-Back-End，保留，不删除）
- **发布方式**: 独立部署，Harry 网站仅作为展示页
- **项目路径**: `g:\GitHubPersonal\Electronic-Product-Specifications-Analysis-Front-End`

#### 当前状态
- ✅ 已在 Harry 网站创建展示组件 `ElectronicProductSpecsShowcase.tsx`
- ✅ 已在 Harry projects.ts 添加项目条目
- ⚠️ 需要验证 Harry 网站展示页正常显示
- ⚠️ 需要验证"访问网站"链接正确

#### 详细迁移步骤

**步骤 1: 验证项目结构**
```powershell
cd g:\GitHubPersonal\Electronic-Product-Specifications-Analysis-Front-End
# 确认项目结构
dir
# 检查是否有后端
dir backend
# 或检查是否有独立的后端仓库
```

**步骤 2: 确认项目独立部署方式**

检查项目的部署配置。

**步骤 3: 验证 Harry 网站展示组件**

参考 CryoCore Cooling 的步骤。

**步骤 4: 验证 Harry projects.ts 配置**

参考 CryoCore Cooling 的步骤。

**步骤 5: 验证 Harry 网站展示页**

参考 CryoCore Cooling 的步骤。

#### 代码仓库操作清单
- [x] 在 Harry 网站创建展示组件
- [x] 在 Harry projects.ts 添加项目条目
- [ ] 验证 Harry 网站展示页正常显示
- [ ] 验证"访问网站"链接正确指向实际运行的网站
- [ ] 确认项目独立部署配置正常

---

## 四、Harry 网站配置

### GitHub Actions 配置

#### 步骤 1: 配置 GitHub Secrets

在 Harry 仓库的 GitHub Secrets 中添加：

1. 打开浏览器访问: `https://github.com/HarryHongyue/Harry/settings/secrets/actions`
2. 点击 "New repository secret"
3. 添加以下 Secrets:
   - **Name**: `SERVER_HOST`
   - **Value**: 服务器地址（例如: `harryhongyue.com` 或 IP 地址）
   - **Name**: `SERVER_USER`
   - **Value**: 服务器用户名
   - **Name**: `SSH_PRIVATE_KEY`
   - **Value**: SSH 私钥内容（路径: `G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key`）

获取 SSH 私钥:
```powershell
type "G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key"
```
复制输出内容，粘贴到 GitHub Secret 中。

#### 步骤 2: 验证 GitHub Actions workflow

1. 打开 Harry 仓库的 Actions 页面: `https://github.com/HarryHongyue/Harry/actions`
2. 检查 `.github/workflows/auto-rebuild.yml` workflow 是否存在
3. 手动触发 workflow 测试:
   - 点击 workflow
   - 点击 "Run workflow"
   - 选择分支
   - 点击 "Run workflow"
4. 检查 workflow 是否成功执行
5. 检查服务器上的容器是否更新

### Docker Compose 配置

#### 步骤 1: 验证 compose.yml

打开 Harry 项目的 `compose.yml`，确认包含以下配置：

```yaml
services:
  harry-web:
    build:
      context: .
      dockerfile: Dockerfile
    image: ghcr.io/harryhongyue/harry-web:latest
    ports:
      - "8080:80"
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    restart: unless-stopped
    volumes:
      - ./public/releases:/usr/share/nginx/html/releases:ro

  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WATCHTOWER_POLL_INTERVAL=300
      - WATCHTOWER_CLEANUP=true
    restart: unless-stopped
```

#### 步骤 2: 启动 watchtower

```powershell
cd g:\GitHubPersonal\Harry
# 启动 watchtower
docker-compose up -d watchtower
# 检查 watchtower 状态
docker ps | findstr watchtower
# 查看日志
docker logs watchtower
```

#### 步骤 3: 验证自动更新

1. 发布新版本的 Harry Docker 镜像
2. 等待 5 分钟（WATCHTOWER_POLL_INTERVAL=300）
3. 检查 watchtower 日志:
```powershell
docker logs watchtower
```
4. 验证 harry-web 容器是否自动重启:
```powershell
docker ps | findstr harry-web
```
5. 访问 Harry 网站，确认内容已更新

---

## 五、总结

### release.ps1 脚本位置说明

**release.ps1 脚本是在各个对应的项目仓库中创建的，不是在 Harry 项目里。**

具体位置：
- **ODE Solver**: `g:\GitHubPersonal\ODE-All-In-One-Solver\scripts\release.ps1`
- **SurpriseMe**: `g:\GitHubPersonal\SurpriseMe\scripts\release.ps1`
- **PDF Reader**: `g:\GitHubPersonal\PDF-Reader\scripts\release.ps1`
- **Aircargo EDI**: `g:\GitHubPersonal\Aircargo-EDI\scripts\release.ps1`
- **计量证书管理系统**: `g:\GitHubPersonal\计量证书管理系统\scripts\release.ps1`

### 项目分类总结

#### 纯桌面应用（删除前端，使用 GitHub Releases）
- ODE Solver
- SurpriseMe
- 计量证书管理系统

#### 桌面应用 + 后端 API（删除前端，后端需要 Docker 化）
- PDF Reader
- Aircargo EDI

#### 网站案例项目（完全独立运行，无需任何修改）
- Omnigent OS
- Omnigent
- CryoCore Cooling
- Song Yan
- Harry Personal
- Harry's Hub
- Electronic Product Specifications Analysis

### 关键要点

1. **网站案例项目不需要删除任何代码**，它们是独立运行的网站
2. **release.ps1 脚本在各自项目仓库中**，不在 Harry 项目里
3. **Harry 网站仅作为介绍页**，不影响项目独立运行
4. **GitHub Secrets 需要在每个项目仓库中单独配置**
5. **Docker 镜像推送到 GitHub Container Registry**，watchtower 自动更新




---

## 附录 A：GitHub App 配置指南（可选）

### 重要说明

**GitHub App 与 GitHub 移动应用的区别**：
- **GitHub App**：一种用于自动化集成的应用类型，提供更细粒度的权限控制，可以代替 Personal Access Token
- **GitHub 移动应用**：手机里的 GitHub App，用于在手机上浏览和管理 GitHub 仓库，与自动化认证无关

**对于个人用户的建议**：
- GitHub App 配置复杂，适合大型团队或多用户场景
- 对于个人用户，推荐继续使用 Personal Access Token（设置 1 年过期时间）
- 如果你仍然想使用 GitHub App，请参考以下详细配置步骤

### GitHub App 配置步骤

**步骤 1：创建 GitHub App**

1. 访问 `https://github.com/settings/apps`
2. 点击 "New GitHub App"
3. 填写应用信息：
   - **GitHub App name**: `自动化发布 App - Harry Projects`（或其他描述性名称）
   - **Homepage URL**: `https://github.com/HarryHongyue`
   - **Description**: `用于自动化发布 Harry 项目的 GitHub App`
   - **Identification**：
     - ✅ **Identify and authorize users on your GitHub App installation**（勾选）
   - **Post installation**：
     - ✅ **Redirect on update**（可选）
   - **Webhook**：
     - ❌ **Active**（不勾选，我们不需要 Webhook）
   - **Permissions**：
     - **Repository permissions**：
       - ✅ **Administration**: Read and write
       - ✅ **Checks**: Read and write
       - ✅ **Contents**: Read and write
       - ✅ **Issues**: Read and write（可选）
       - ✅ **Metadata**: Read and write
       - ✅ **Pull requests**: Read and write（可选）
       - ✅ **Workflows**: Read and write（必须）
     - **Organization permissions**：
       - ❌ 不需要任何组织权限
   - **Where can this GitHub App be installed?**：
     - ✅ **Only on this account**（只安装在你的账户）
4. 点击 "Create GitHub App"

**步骤 2：生成 App 密钥**

1. 创建 GitHub App 后，会跳转到应用设置页面
2. 在左侧菜单中点击 "App settings"
3. 滚动到 "Client secrets" 部分
4. 点击 "Generate a new client secret"
5. 复制生成的 Client ID 和 Client Secret
6. **重要**：妥善保存这些密钥，只显示一次

**步骤 3：生成 Private Key**

1. 在左侧菜单中点击 "Generate a private key"
2. 点击 "Generate a private key" 按钮
3. 会自动下载一个 `.pem` 文件
4. 保存这个文件到安全的位置
5. **重要**：这个文件只下载一次，妥善保存

**步骤 4：安装 GitHub App**

1. 在左侧菜单中点击 "Install App"
2. 点击 "Install" 按钮
3. 选择要安装到的账户（应该是你的个人账户）
4. 选择要授权的仓库：
   - ✅ **All repositories**（推荐，授权所有仓库）
   - 或者 **Only select repositories**（只选择需要的仓库）
5. 点击 "Install"
6. 记录安装 ID（在 URL 中可以看到，例如：`/installations/12345678`）

**步骤 5：获取安装访问令牌**

GitHub App 使用 JWT（JSON Web Token）进行认证，需要编写代码来生成和刷新令牌。

**方法 A：使用现有工具（推荐）**

1. 安装 GitHub CLI：
```bash
# Windows (使用 winget)
winget install GitHub.cli

# 或者使用 Chocolatey
choco install gh
```

2. 登录 GitHub：
```bash
gh auth login
```

3. 使用 GitHub App 认证：
```bash
gh auth login --with-token <your-token>
```

**方法 B：编写 PowerShell 脚本生成 JWT**

创建一个 PowerShell 脚本来生成 JWT：

```powershell
# generate-jwt.ps1
param(
    [Parameter(Mandatory=$true)]
    [string]$AppId,
    
    [Parameter(Mandatory=$true)]
    [string]$PrivateKeyPath,
    
    [Parameter(Mandatory=$true)]
    [int]$InstallationId
)

# 加载必要的程序集
Add-Type -AssemblyName System.Security

# 读取私钥
$privateKey = Get-Content $PrivateKeyPath -Raw

# 生成 JWT
$header = @{
    alg = "RS256"
    typ = "JWT"
} | ConvertTo-Json

$now = [DateTimeOffset]::UtcNow
$payload = @{
    iat = $now.ToUnixTimeSeconds()
    exp = $now.AddMinutes(10).ToUnixTimeSeconds()
    iss = $AppId
} | ConvertTo-Json

$headerBase64 = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($header)).Replace('+', '-').Replace('/', '_').Replace('=', '')
$payloadBase64 = [System.Convert]::ToBase64String([System.Text.Encoding]::UTF8.GetBytes($payload)).Replace('+', '-').Replace('/', '_').Replace('=', '')

$signatureInput = "$headerBase64.$payloadBase64"

# 使用私钥签名
$rsa = [System.Security.Cryptography.RSA]::Create()
$rsa.ImportFromPem($privateKey)
$signature = $rsa.SignData([System.Text.Encoding]::UTF8.GetBytes($signatureInput), [System.Security.Cryptography.HashAlgorithmName]::SHA256, [System.Security.Cryptography.RSASignaturePadding]::Pkcs1)
$signatureBase64 = [System.Convert]::ToBase64String($signature).Replace('+', '-').Replace('/', '_').Replace('=', '')

$jwt = "$headerBase64.$payloadBase64.$signatureBase64"

# 获取安装访问令牌
$headers = @{
    Authorization = "Bearer $jwt"
    Accept = "application/vnd.github+json"
}

$response = Invoke-RestMethod -Uri "https://api.github.com/app/installations/$InstallationId/access_tokens" -Method Post -Headers $Headers

return $response.token
```

使用脚本：
```powershell
.\generate-jwt.ps1 -AppId "你的App ID" -PrivateKeyPath "path/to/private-key.pem" -InstallationId "你的安装ID"
```

**步骤 6：在项目中使用 GitHub App 令牌**

将生成的令牌配置到项目的 GitHub Secrets 中：

1. 访问项目仓库的 Settings -> Secrets and variables -> Actions
2. 点击 "New repository secret"
3. **Name**: `HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN`
4. **Value**: 粘贴生成的令牌
5. 点击 "Add secret"

**步骤 7：自动化令牌刷新**

GitHub App 的安装访问令牌只有 1 小时有效期，需要定期刷新。

**方法 A：在 release.ps1 脚本中添加令牌刷新逻辑**

```powershell
# 在脚本开始处添加
$jwtToken = & .\generate-jwt.ps1 -AppId $env:GITHUB_APP_ID -PrivateKeyPath $env:GITHUB_APP_PRIVATE_KEY_PATH -InstallationId $env:GITHUB_APP_INSTALLATION_ID
$env:HARRYWEBSITE_AUTOMATED_PACKAGE_DEPLOYMENT_GITHUB_TOKEN = $jwtToken
```

**方法 B：使用 GitHub Actions 自动刷新**

在 `.github/workflows/` 中创建一个 workflow 来定期刷新令牌。

### GitHub App vs Personal Access Token 对比

| 特性 | Personal Access Token | GitHub App |
|------|----------------------|------------|
| 配置复杂度 | 简单 | 复杂 |
| 过期时间 | 需要设置过期日期 | 无过期限制（安装访问令牌1小时） |
| 权限控制 | 粗粒度（repo, workflow等） | 细粒度（可精确到每个仓库的每个操作） |
| 安全性 | 较低（token泄露影响所有权限） | 较高（可限制到特定仓库和操作） |
| 适用场景 | 个人项目、小型团队 | 大型团队、企业级应用 |
| 令牌管理 | 手动更新 | 自动刷新（需要编写代码） |
| 成本 | 免费 | 免费（有速率限制） |

### 推荐决策

**对于你的情况（个人用户，自动化发布）**：

**推荐使用 Personal Access Token**：
- 配置简单，5分钟完成
- 设置1年过期时间，每年更新一次
- 在日历中设置提醒
- 安全性足够（token只存储在GitHub Secrets中）

**不推荐使用 GitHub App**：
- 配置复杂，需要1-2小时
- 需要编写代码来生成和刷新JWT
- 对于个人用户来说，额外收益不大
- 维护成本高

### 如果你仍然想使用 GitHub App

如果你坚持要使用 GitHub App，请按照上述步骤配置，并记住：

1. 需要编写代码来生成和刷新JWT
2. 需要在每个项目的 release.ps1 脚本中集成JWT生成逻辑
3. 需要妥善保存 Private Key 文件
4. 需要定期测试JWT生成和刷新功能
5. 如果遇到问题，调试会比较困难

**建议**：先使用 Personal Access Token，等熟悉整个自动化流程后，再考虑迁移到 GitHub App。

---