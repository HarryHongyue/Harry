param(
  [string]$Server = $env:HARRY_SERVER,
  [string]$User = $(if ($env:HARRY_USER) { $env:HARRY_USER } else { "ubuntu" }),
  [string]$KeyPath = $env:HARRY_SSH_KEY,
  [string]$RemoteRoot = $(if ($env:HARRY_REMOTE_ROOT) { $env:HARRY_REMOTE_ROOT } else { "/opt/harry-site" })
)

$ErrorActionPreference = "Stop"

if (-not $Server) {
  throw "Missing server. Pass -Server <ip-or-domain> or set HARRY_SERVER."
}

if (-not $KeyPath) {
  throw "Missing SSH key. Pass -KeyPath <path> or set HARRY_SSH_KEY."
}

if (-not (Test-Path -LiteralPath $KeyPath)) {
  throw "SSH key does not exist: $KeyPath"
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$distPath = Join-Path $repoRoot "dist"
$artifactDir = Join-Path $repoRoot ".deploy"
$timestamp = Get-Date -Format "yyyyMMddHHmmss"
$archiveName = "harry-dist-$timestamp.tar.gz"
$archivePath = Join-Path $artifactDir $archiveName
$remoteTmp = "/tmp/$archiveName"
$remoteRelease = "$RemoteRoot/sites/main/releases/$timestamp"
$remoteCurrent = "$RemoteRoot/sites/main/current"

Write-Host "==> Harry deploy target: ${User}@${Server}:${RemoteRoot}"
Set-Location $repoRoot

Write-Host "==> Type-checking"
cmd /c npm run type-check
if ($LASTEXITCODE -ne 0) { throw "type-check failed" }

Write-Host "==> Building"
cmd /c npm run build
if ($LASTEXITCODE -ne 0) { throw "build failed" }

if (-not (Test-Path -LiteralPath $distPath)) {
  throw "dist folder not found: $distPath"
}

New-Item -ItemType Directory -Force -Path $artifactDir | Out-Null
if (Test-Path -LiteralPath $archivePath) {
  Remove-Item -LiteralPath $archivePath -Force
}

Write-Host "==> Packing dist"
tar -czf $archivePath -C $distPath .
if ($LASTEXITCODE -ne 0) { throw "tar failed" }

Write-Host "==> Uploading artifact"
scp -i $KeyPath $archivePath "${User}@${Server}:${remoteTmp}"
if ($LASTEXITCODE -ne 0) { throw "scp upload failed" }

$remoteScript = @"
set -euo pipefail
mkdir -p '$remoteRelease'
tar -xzf '$remoteTmp' -C '$remoteRelease'
rm -f '$remoteTmp'
ln -sfn '$remoteRelease' '$remoteCurrent'
chmod -R 755 '$remoteRelease'
sudo caddy validate --config /etc/caddy/Caddyfile
sudo systemctl reload caddy || sudo systemctl restart caddy
echo 'Current release: $remoteRelease'
"@

Write-Host "==> Activating release atomically"
$remoteScript | ssh -i $KeyPath "$User@$Server" "bash -s"
if ($LASTEXITCODE -ne 0) { throw "remote activation failed" }

Write-Host "==> Deployment complete"
