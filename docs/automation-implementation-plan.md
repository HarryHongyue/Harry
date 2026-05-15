# 自动化改造详细实施计划

## 目标
实现各项目发布新版本后，Harry 网站自动更新下载链接、版本号、发布日期，并触发 Docker 自动化部署。

## 当前状态分析

### 项目结构
- **Harry**: 有 Dockerfile 和 compose.yml，前端静态站点
- **ODE Solver**: 有 frontend/scripts/update-version-info.js，无 release.ps1
- **PDF Reader**: 有 backend (FastAPI)，无 scripts 目录
- **SurpriseMe**: 有 scripts/build-extension.js，无 release.ps1
- **Aircargo EDI**: 无 scripts 目录

### 当前问题
- 版本信息硬编码在 `projects.ts` 中
- 各项目缺少一键发布脚本
- 没有统一的 release-manifest.json
- 没有自动化触发机制

## 实施计划

### 阶段 1: Harry 网站改造（核心基础设施）

#### 步骤 1.1: 创建 release-manifest.json 结构
**文件位置**: `public/releases/release-manifest.json`

```json
{
  "lastUpdated": "2026-05-14T00:00:00Z",
  "projects": {
    "ode-solver": {
      "slug": "ode-solver",
      "latestVersion": "v1.0.0",
      "releaseDate": "2025-07-05",
      "assets": [
        {
          "label": {"en": "Windows Installer", "zh": "Windows 安装程序", "nl": "Windows-installer"},
          "platform": {"en": "Windows 64-bit", "zh": "Windows 64 位", "nl": "Windows 64-bit"},
          "version": "v1.0.0",
          "size": "126.8 MB",
          "href": "https://github.com/HarryHongyue/ODE-All-In-One-Solver/releases/download/v1.0.0/ODE-Solver-Setup.exe",
          "sha256": "3f2b7e5c90f0b62d4a6df1e8bc9d2f7b441e3b9d52cfab8e01c7ddda7f1d53f2"
        }
      ],
      "versionHistory": [
        {
          "version": "v1.0.0",
          "date": "2025-07-05",
          "changes": [
            "ODE Solver 初始版本发布",
            "支持 Euler、Runge-Kutta 等求解方法",
            "提供解曲线的交互式可视化",
            "支持将结果导出为 CSV 和 PNG 等格式"
          ]
        }
      ]
    },
    "pdf-reader": {
      "slug": "pdf-reader",
      "latestVersion": "v1.2.3",
      "releaseDate": "2026-05-11",
      "assets": [
        {
          "label": {"en": "Windows Installer", "zh": "Windows 安装程序", "nl": "Windows-installer"},
          "platform": {"en": "Windows 64-bit", "zh": "Windows 64 位", "nl": "Windows 64-bit"},
          "version": "v1.2.3",
          "size": "148 MB",
          "href": "https://github.com/HarryHongyue/PDF-Reader/releases/download/v1.2.3/PDF-Reader-Setup.exe",
          "sha256": "a94e3f6129384b79de1ec0f2bd9c10bb8234fbcff9914ee53d2c9a147ef0a4f2"
        },
        {
          "label": {"en": "macOS Installer", "zh": "macOS 安装程序", "nl": "macOS-installer"},
          "platform": {"en": "macOS Universal", "zh": "macOS 通用版", "nl": "macOS universal"},
          "version": "v1.2.3",
          "size": "142 MB",
          "href": "https://github.com/HarryHongyue/PDF-Reader/releases/download/v1.2.3/PDF-Reader-Setup.dmg",
          "sha256": "45f1e2340ce91c9d947b4051f4343f12b4a9d4c2f8c0a9be1165404b0c111f6e"
        }
      ],
      "versionHistory": [
        {
          "version": "v1.2.3",
          "date": "2026-05-11",
          "changes": [
            "PDF Reader 项目页面重构为专属展示页面",
            "突出 OCR、文本表格提取和坐标感知解析能力",
            "提供 Windows 与 macOS 安装入口",
            "强化隐私、临时文件和 API 边界说明"
          ]
        }
      ]
    },
    "surpriseme": {
      "slug": "surpriseme",
      "latestVersion": "v1.0.0",
      "releaseDate": "2026-05-11",
      "assets": [
        {
          "label": {"en": "Chrome Extension", "zh": "Chrome 扩展", "nl": "Chrome-extensie"},
          "platform": {"en": "Chrome/Edge/Brave/Vivaldi", "zh": "Chrome/Edge/Brave/Vivaldi", "nl": "Chrome/Edge/Brave/Vivaldi"},
          "version": "v1.0.0",
          "size": "19 KB",
          "href": "https://github.com/HarryHongyue/SurpriseMe/releases/download/v1.0.0/SurpriseMe.zip",
          "sha256": "abc123..."
        }
      ],
      "versionHistory": [
        {
          "version": "v1.0.0",
          "date": "2026-05-11",
          "changes": [
            "SurpriseMe 浏览器扩展初始版本发布",
            "支持为任何网页添加可自定义的彩色边框",
            "支持多种颜色选择和自定义颜色创建",
            "适用于 Chrome、Firefox、Safari 等主流浏览器"
          ]
        }
      ]
    },
    "aircargo-edi": {
      "slug": "aircargo-edi",
      "latestVersion": "v1.0.0",
      "releaseDate": "2026-05-14",
      "assets": [
        {
          "label": {"en": "Windows Installer", "zh": "Windows 安装程序", "nl": "Windows-installer"},
          "platform": {"en": "Windows 64-bit", "zh": "Windows 64 位", "nl": "Windows 64-bit"},
          "version": "v1.0.0",
          "size": "120 MB",
          "href": "https://github.com/HarryHongyue/Aircargo-EDI/releases/download/v1.0.0/Aircargo-EDI-Setup.exe",
          "sha256": "def456..."
        }
      ],
      "versionHistory": [
        {
          "version": "v1.0.0",
          "date": "2026-05-14",
          "changes": [
            "Aircargo EDI 初始版本发布",
            "支持 PDF 解析和 AWB/HAWB 数据提取",
            "支持 Cargo-IMP FWB/FHL 生成",
            "提供桌面应用和在线 API"
          ]
        }
      ]
    }
  }
}
```

#### 步骤 1.2: 创建 release manifest 读取工具
**文件位置**: `src/utils/releaseManifest.ts`

```typescript
import type { ProjectReleaseAsset } from '../types/project';

export interface ReleaseManifestAsset {
  label: { en: string; zh: string; nl: string };
  platform: { en: string; zh: string; nl: string };
  version: string;
  size: string;
  href: string;
  sha256: string;
}

export interface ReleaseManifestVersion {
  version: string;
  date: string;
  changes: string[];
}

export interface ReleaseManifestProject {
  slug: string;
  latestVersion: string;
  releaseDate: string;
  assets: ReleaseManifestAsset[];
  versionHistory: ReleaseManifestVersion[];
}

export interface ReleaseManifest {
  lastUpdated: string;
  projects: Record<string, ReleaseManifestProject>;
}

let cachedManifest: ReleaseManifest | null = null;

export async function fetchReleaseManifest(): Promise<ReleaseManifest> {
  if (cachedManifest) {
    return cachedManifest;
  }

  try {
    const response = await fetch('/releases/release-manifest.json');
    if (!response.ok) {
      throw new Error(`Failed to fetch manifest: ${response.statusText}`);
    }
    cachedManifest = await response.json();
    return cachedManifest;
  } catch (error) {
    console.error('Error fetching release manifest:', error);
    return { lastUpdated: '', projects: {} };
  }
}

export function getProjectAssets(
  manifest: ReleaseManifest,
  slug: string
): ProjectReleaseAsset[] {
  const project = manifest.projects[slug];
  if (!project) return [];

  return project.assets.map(asset => ({
    label: asset.label,
    platform: asset.platform,
    version: asset.version,
    size: asset.size,
    href: asset.href,
    sha256: asset.sha256,
    releaseDate: project.releaseDate
  }));
}

export function getProjectVersionHistory(
  manifest: ReleaseManifest,
  slug: string
): ReleaseManifestVersion[] {
  const project = manifest.projects[slug];
  return project?.versionHistory || [];
}

export function getLatestVersion(
  manifest: ReleaseManifest,
  slug: string
): string {
  const project = manifest.projects[slug];
  return project?.latestVersion || '1.0.0';
}
```

#### 步骤 1.3: 修改 projects.ts 支持 manifest 读取
**文件位置**: `src/data/projects.ts`

在文件开头添加导入：
```typescript
import { fetchReleaseManifest, getProjectAssets } from '../utils/releaseManifest';
```

修改 `projects` 数组中各项目的 `releaseAssets` 为动态获取：
```typescript
export const projects: Project[] = [
  {
    // ... 其他字段
    releaseAssets: [], // 初始为空，运行时从 manifest 填充
  },
  // ...
];

// 初始化时从 manifest 加载
let releaseManifest: ReleaseManifest | null = null;

export async function initializeReleaseAssets() {
  releaseManifest = await fetchReleaseManifest();
  
  projects.forEach(project => {
    if (project.slug) {
      project.releaseAssets = getProjectAssets(releaseManifest, project.slug);
    }
  });
}
```

#### 步骤 1.4: 修改 showcase 组件从 manifest 读取版本历史
**文件位置**: `src/components/project/OdeSolverShowcase.tsx`

修改版本历史部分：
```typescript
import { fetchReleaseManifest, getProjectVersionHistory } from '../../utils/releaseManifest';

const OdeSolverShowcase: React.FC<OdeSolverShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const [versionHistory, setVersionHistory] = useState<ReleaseManifestVersion[]>([]);
  const [latestVersion, setLatestVersion] = useState('');

  useEffect(() => {
    fetchReleaseManifest().then(manifest => {
      setVersionHistory(getProjectVersionHistory(manifest, 'ode-solver'));
      setLatestVersion(getLatestVersion(manifest, 'ode-solver'));
    });
  }, []);

  // 使用 versionHistory 和 latestVersion 而不是硬编码
};
```

同样修改 `PdfReaderShowcase.tsx`、`SurpriseMeShowcase.tsx`、`AircargoEdiShowcase.tsx`。

### 阶段 2: 各项目仓库创建 release.ps1 脚本

#### 步骤 2.1: ODE Solver release.ps1
**文件位置**: `G:\GitHubPersonal\ODE-All-In-One-Solver\scripts\release.ps1`

```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$Version,
    [string]$Changes = ""
)

# Error handling
$ErrorActionPreference = "Stop"

Write-Host "🚀 Starting ODE Solver Release Process for $Version" -ForegroundColor Green

# Step 1: Update version in pom.xml
Write-Host "📝 Updating version in pom.xml..." -ForegroundColor Yellow
$pomPath = "backend\pom.xml"
$pomContent = Get-Content $pomPath -Raw
$pomContent = $pomContent -replace '<version>.*</version>', "<version>$Version</version>"
Set-Content $pomPath $pomContent -NoNewline

# Step 2: Build installers
Write-Host "🔨 Building installers..." -ForegroundColor Yellow
cd backend
mvn clean package jfx:native
cd ..

# Step 3: Generate SHA256
Write-Host "🔐 Generating SHA256 checksums..." -ForegroundColor Yellow
$installerPath = "backend\target\ODE-Solver-Setup.exe"
$sha256 = (Get-FileHash -Path $installerPath -Algorithm SHA256).Hash.ToLower()

# Step 4: Create GitHub Release
Write-Host "📦 Creating GitHub Release..." -ForegroundColor Yellow
$releaseNotes = "ODE Solver $Version Release`n`n$Changes"
gh release create $Version $installerPath --notes $releaseNotes --title "ODE Solver $Version"

# Step 5: Update Harry manifest
Write-Host "🔄 Updating Harry release manifest..." -ForegroundColor Yellow
$harryPath = "G:\GitHubPersonal\Harry"
$manifestPath = "$harryPath\public\releases\release-manifest.json"

# Clone Harry repo if not exists
if (-not (Test-Path $harryPath)) {
    git clone https://github.com/HarryHongyue/Harry.git $harryPath
}

cd $harryPath
git pull

# Read and update manifest
$manifest = Get-Content $manifestPath -Raw | ConvertFrom-Json

# Update ODE Solver entry
$manifest.projects.'ode-solver'.latestVersion = $Version
$manifest.projects.'ode-solver'.releaseDate = (Get-Date).ToString("yyyy-MM-dd")
$manifest.projects.'ode-solver'.assets[0].version = $Version
$manifest.projects.'ode-solver'.assets[0].sha256 = $sha256
$manifest.projects.'ode-solver'.assets[0].href = "https://github.com/HarryHongyue/ODE-All-In-One-Solver/releases/download/$Version/ODE-Solver-Setup.exe"

# Add new version to history
$newVersionEntry = @{
    version = $Version
    date = (Get-Date).ToString("yyyy-MM-dd")
    changes = $Changes -split ',\s*'
}
$manifest.projects.'ode-solver'.versionHistory = @($newVersionEntry) + $manifest.projects.'ode-solver'.versionHistory

# Update lastUpdated
$manifest.lastUpdated = (Get-Date).ToString("o")

# Write back
$manifest | ConvertTo-Json -Depth 10 | Set-Content $manifestPath

# Commit and push
git add $manifestPath
git commit -m "Update manifest for ODE Solver $Version"
git push

# Trigger Harry rebuild via GitHub API
Write-Host "🔔 Triggering Harry website rebuild..." -ForegroundColor Yellow
$token = $env:HARRY_GITHUB_TOKEN
$headers = @{
    Authorization = "token $token"
}
$body = @{
    event_type = "release-update"
    client_payload = @{
        project = "ode-solver"
        version = $Version
    }
} | ConvertTo-Json

Invoke-RestMethod -Uri "https://api.github.com/repos/HarryHongyue/Harry/dispatches" -Method Post -Headers $headers -Body $body -ContentType "application/json"

Write-Host "✅ Release process completed successfully!" -ForegroundColor Green
```

#### 步骤 2.2: SurpriseMe release.ps1
**文件位置**: `G:\GitHubPersonal\SurpriseMe\scripts\release.ps1`

```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$Version,
    [string]$Changes = ""
)

$ErrorActionPreference = "Stop"
Write-Host "🚀 Starting SurpriseMe Release Process for $Version" -ForegroundColor Green

# Step 1: Update version in package.json
Write-Host "📝 Updating version in package.json..." -ForegroundColor Yellow
$packagePath = "package.json"
$package = Get-Content $packagePath -Raw | ConvertFrom-Json
$package.version = $Version
$package | ConvertTo-Json -Depth 10 | Set-Content $packagePath

# Step 2: Build extensions
Write-Host "🔨 Building extensions..." -ForegroundColor Yellow
node scripts/build-extension.js

# Step 3: Generate SHA256
Write-Host "🔐 Generating SHA256 checksums..." -ForegroundColor Yellow
$extensionPath = "public\SurpriseMe.zip"
$sha256 = (Get-FileHash -Path $extensionPath -Algorithm SHA256).Hash.ToLower()

# Step 4: Create GitHub Release
Write-Host "📦 Creating GitHub Release..." -ForegroundColor Yellow
$releaseNotes = "SurpriseMe $Version Release`n`n$Changes"
gh release create $Version $extensionPath --notes $releaseNotes --title "SurpriseMe $Version"

# Step 5: Update Harry manifest (类似 ODE Solver)
# ... 同样的 manifest 更新逻辑

Write-Host "✅ Release process completed successfully!" -ForegroundColor Green
```

#### 步骤 2.3: PDF Reader release.ps1（含桌面版）
**文件位置**: `G:\GitHubPersonal\PDF-Reader\scripts\release.ps1`

```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$Version,
    [string]$Changes = ""
)

$ErrorActionPreference = "Stop"
Write-Host "🚀 Starting PDF Reader Release Process for $Version" -ForegroundColor Green

# Step 1: Update version
Write-Host "📝 Updating version..." -ForegroundColor Yellow
# Update local_version.json
$versionPath = "local_version.json"
$versionData = @{
    version = $Version
    release_date = (Get-Date).ToString("yyyy-MM-dd")
}
$versionData | ConvertTo-Json | Set-Content $versionPath

# Step 2: Build desktop installers
Write-Host "🔨 Building desktop installers..." -ForegroundColor Yellow
# Windows installer
pyinstaller --onefile --windowed --icon=icon.ico --name="PDF-Reader-Setup" main_gui.py

# macOS installer (需要 macOS 环境)
# pyinstaller --onefile --windowed --icon=icon.icns --name="PDF-Reader-Setup" main_gui.py

# Step 3: Generate SHA256
Write-Host "🔐 Generating SHA256 checksums..." -ForegroundColor Yellow
$windowsInstaller = "dist\PDF-Reader-Setup.exe"
$windowsSha256 = (Get-FileHash -Path $windowsInstaller -Algorithm SHA256).Hash.ToLower()

# Step 4: Create GitHub Release
Write-Host "📦 Creating GitHub Release..." -ForegroundColor Yellow
$releaseNotes = "PDF Reader $Version Release`n`n$Changes"
gh release create $Version $windowsInstaller --notes $releaseNotes --title "PDF Reader $Version"

# Step 5: Build and push Docker image (后端)
Write-Host "🐳 Building Docker image..." -ForegroundColor Yellow
cd backend
docker build -t ghcr.io/harryhongyue/pdf-reader-api:$Version .
docker push ghcr.io/harryhongyue/pdf-reader-api:$Version
docker tag ghcr.io/harryhongyue/pdf-reader-api:$Version ghcr.io/harryhongyue/pdf-reader-api:latest
docker push ghcr.io/harryhongyue/pdf-reader-api:latest
cd ..

# Step 6: Update Harry manifest
Write-Host "🔄 Updating Harry release manifest..." -ForegroundColor Yellow
# ... 类似 ODE Solver 的 manifest 更新逻辑
# 需要同时更新 Windows 和 macOS 的资产

# Step 7: Trigger Harry rebuild
# ... 类似 ODE Solver 的触发逻辑

Write-Host "✅ Release process completed successfully!" -ForegroundColor Green
```

#### 步骤 2.4: Aircargo EDI release.ps1（含桌面版）
**文件位置**: `G:\GitHubPersonal\Aircargo-EDI\scripts\release.ps1`

```powershell
param(
    [Parameter(Mandatory=$true)]
    [string]$Version,
    [string]$Changes = ""
)

$ErrorActionPreference = "Stop"
Write-Host "🚀 Starting Aircargo EDI Release Process for $Version" -ForegroundColor Green

# Step 1: Update version
Write-Host "📝 Updating version..." -ForegroundColor Yellow
$versionPath = "app_version.json"
$versionData = @{
    version = $Version
    release_date = (Get-Date).ToString("yyyy-MM-dd")
}
$versionData | ConvertTo-Json | Set-Content $versionPath

# Step 2: Build desktop installer
Write-Host "🔨 Building desktop installer..." -ForegroundColor Yellow
pyinstaller --onefile --windowed --icon="Aircargo-EDI Logo.png" --name="Aircargo-EDI-Setup" launcher.py

# Step 3: Generate SHA256
Write-Host "🔐 Generating SHA256 checksums..." -ForegroundColor Yellow
$installerPath = "dist\Aircargo-EDI-Setup.exe"
$sha256 = (Get-FileHash -Path $installerPath -Algorithm SHA256).Hash.ToLower()

# Step 4: Create GitHub Release
Write-Host "📦 Creating GitHub Release..." -ForegroundColor Yellow
$releaseNotes = "Aircargo EDI $Version Release`n`n$Changes"
gh release create $Version $installerPath --notes $releaseNotes --title "Aircargo EDI $Version"

# Step 5: Build and push Docker image (后端)
Write-Host "🐳 Building Docker image..." -ForegroundColor Yellow
docker build -t ghcr.io/harryhongyue/aircargo-edi-api:$Version .
docker push ghcr.io/harryhongyue/aircargo-edi-api:$Version
docker tag ghcr.io/harryhongyue/aircargo-edi-api:$Version ghcr.io/harryhongyue/aircargo-edi-api:latest
docker push ghcr.io/harryhongyue/aircargo-edi-api:latest

# Step 6: Update Harry manifest
# ... 类似 PDF Reader 的逻辑

# Step 7: Trigger Harry rebuild
# ... 类似 ODE Solver 的触发逻辑

Write-Host "✅ Release process completed successfully!" -ForegroundColor Green
```

### 阶段 3: GitHub Actions 自动触发

#### 步骤 3.1: 创建 Harry 的 GitHub Actions workflow
**文件位置**: `.github/workflows/auto-rebuild.yml`

```yaml
name: Auto Rebuild on Release Update

on:
  repository_dispatch:
    types: [release-update]
  workflow_dispatch:

jobs:
  rebuild:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to server
        uses: appleboy/ssh-action@v1.0.0
        with:
          host: ${{ secrets.SERVER_HOST }}
          username: ${{ secrets.SERVER_USER }}
          key: ${{ secrets.SSH_PRIVATE_KEY }}
          script: |
            cd /opt/harry-site
            docker-compose pull harry-web
            docker-compose up -d harry-web
```

### 阶段 4: Docker 自动化部署

#### 步骤 4.1: 服务器端配置 watchtower
**修改 compose.yml 添加 watchtower**:

```yaml
services:
  harry-web:
    build:
      context: .
      dockerfile: Dockerfile
    image: harry-web:latest
    container_name: harry-web
    restart: unless-stopped
    ports:
      - "8080:80"
    volumes:
      - ./public/releases:/usr/share/nginx/html/releases:ro
      - ./public/downloads:/usr/share/nginx/html/downloads:ro
    labels:
      - "com.centurylinklabs.watchtower.enable=true"

  watchtower:
    image: containrrr/watchtower
    container_name: watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      - WATCHTOWER_CLEANUP=true
      - WATCHTOWER_POLL_INTERVAL=300
      - WATCHTOWER_LABEL_ENABLE=true
    restart: unless-stopped

  pdf-reader-api:
    image: ghcr.io/harryhongyue/pdf-reader-api:latest
    container_name: pdf-reader-api
    restart: unless-stopped
    profiles:
      - backends
    expose:
      - "8000"
    labels:
      - "com.centurylinklabs.watchtower.enable=true"

  aircargo-edi-api:
    image: ghcr.io/harryhongyue/aircargo-edi-api:latest
    container_name: aircargo-edi-api
    restart: unless-stopped
    profiles:
      - backends
    expose:
      - "8000"
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
```

#### 步骤 4.2: 服务器部署脚本
**文件位置**: `scripts/deploy-harry.ps1`

```powershell
# SSH 到服务器
$server = "your-server.com"
$user = "username"
$keyPath = "G:\GitHubPersonal\Harry\Keys\HarryHongyue private ssh-key-2026-05-10.key"

# 执行部署
ssh -i $keyPath $user@$server "cd /opt/harry-site && docker-compose pull && docker-compose up -d"
```

### 阶段 5: PDF Reader 和 Aircargo EDI 外部版 APP 更新方案

#### 步骤 5.1: 外部版 APP 结构
外部版 APP 应该包含：
- 桌面安装包
- 自动更新检查机制
- 版本更新通知

#### 步骤 5.2: 自动更新检查
在桌面应用中添加版本检查逻辑：

```python
# PDF Reader 的 launcher.py 中添加
import requests
import json

def check_for_updates():
    try:
        response = requests.get('https://harryhongyue.com/releases/release-manifest.json')
        manifest = response.json()
        
        current_version = get_current_version()
        latest_version = manifest['projects']['pdf-reader']['latestVersion']
        
        if latest_version != current_version:
            show_update_notification(latest_version)
            return True
        return False
    except Exception as e:
        print(f"Update check failed: {e}")
        return False
```

#### 步骤 5.3: 更新 manifest 支持外部版
在 release-manifest.json 中添加外部版字段：

```json
{
  "projects": {
    "pdf-reader": {
      "desktopApp": {
        "autoUpdateUrl": "https://harryhongyue.com/releases/pdf-reader/update.json",
        "changelogUrl": "https://harryhongyue.com/projects/pdf-reader"
      }
    }
  }
}
```

## 实施顺序

1. ✅ 修复文档编码
2. ✅ 查看项目结构
3. 🔄 创建 release-manifest.json
4. ⏳ 创建 releaseManifest.ts 工具
5. ⏳ 修改 projects.ts
6. ⏳ 修改 showcase 组件
7. ⏳ 为 ODE Solver 创建 release.ps1
8. ⏳ 为 SurpriseMe 创建 release.ps1
9. ⏳ 为 PDF Reader 创建 release.ps1
10. ⏳ 为 Aircargo EDI 创建 release.ps1
11. ⏳ 创建 GitHub Actions workflow
12. ⏳ 配置 watchtower
13. ⏳ 测试完整流程

## 关键注意事项

1. **安全性**: GitHub token 需要作为 secret 存储在各仓库
2. **跨仓库权限**: release.ps1 需要有权限修改 Harry 仓库
3. **版本格式**: 统一使用语义化版本 (vX.Y.Z)
4. **SHA256 生成**: 确保在文件上传到 GitHub 后生成
5. **Docker 镜像**: 使用 GHCR 存储镜像
6. **回滚机制**: 如果更新失败，需要能够快速回滚

## 预期效果

完成后，发布流程变为：
```powershell
# 在各项目仓库执行
.\scripts\release.ps1 -Version "v1.2.4" -Changes "修复bug,添加新功能"
```

自动完成：
1. 更新版本号
2. 构建安装包
3. 生成 SHA256
4. 创建 GitHub Release
5. 更新 Harry manifest
6. 触发 Harry 网站重建
7. Docker 自动拉取新镜像
8. 网站自动展示最新版本
