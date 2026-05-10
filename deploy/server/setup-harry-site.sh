#!/usr/bin/env bash
set -euo pipefail

DOMAIN="${1:-harryhongyue.com}"
WWW_DOMAIN="${2:-www.${DOMAIN}}"
APP_ROOT="${3:-/opt/harry-site}"
DEPLOY_USER="${4:-ubuntu}"

MAIN_ROOT="${APP_ROOT}/sites/main"
CURRENT_ROOT="${MAIN_ROOT}/current"

echo "==> Preparing Harry site directories under ${APP_ROOT}"
sudo mkdir -p "${MAIN_ROOT}/releases"
sudo mkdir -p "${CURRENT_ROOT}"
sudo mkdir -p "${APP_ROOT}/downloads"/{ode-solver,surpriseme,pdf-reader,aircargo-edi}
sudo mkdir -p "${APP_ROOT}/releases"
sudo mkdir -p "${APP_ROOT}/manifests"
sudo mkdir -p "${APP_ROOT}/services"/{pdf-reader-api,aircargo-edi-api}
sudo mkdir -p "${APP_ROOT}/caddy"

echo "==> Setting ownership to ${DEPLOY_USER}:${DEPLOY_USER}"
sudo chown -R "${DEPLOY_USER}:${DEPLOY_USER}" "${APP_ROOT}"
sudo chmod -R 755 "${APP_ROOT}"

if [ ! -f "${APP_ROOT}/releases/release-manifest.json" ]; then
  echo "==> Creating initial release manifest"
  cat > "${APP_ROOT}/releases/release-manifest.json" <<'JSON'
{
  "ode-solver": {
    "latestVersion": "1.0.0",
    "assets": [
      {
        "label": "Windows installer",
        "platform": "windows",
        "href": "https://github.com/HarryHongyue/ODE-All-In-One-Solver/releases/latest",
        "sha256": "sha256-to-be-added",
        "size": "TBD"
      }
    ]
  },
  "surpriseme": {
    "latestVersion": "0.1.0",
    "assets": [
      {
        "label": "Chrome extension",
        "platform": "chrome",
        "href": "https://github.com/HarryHongyue/SurpriseMe/releases/latest",
        "sha256": "sha256-to-be-added",
        "size": "TBD"
      }
    ]
  },
  "pdf-reader": {
    "latestVersion": "0.1.0",
    "assets": []
  },
  "aircargo-edi": {
    "latestVersion": "0.1.0",
    "assets": []
  }
}
JSON
fi

echo "==> Backing up current Caddyfile if present"
if [ -f /etc/caddy/Caddyfile ]; then
  sudo cp /etc/caddy/Caddyfile "/etc/caddy/Caddyfile.backup.$(date +%Y%m%d%H%M%S)"
fi

echo "==> Writing clean Caddyfile for ${DOMAIN}"
sudo tee /etc/caddy/Caddyfile > /dev/null <<CADDY
${DOMAIN} {
    root * ${CURRENT_ROOT}
    encode gzip zstd

    handle_path /downloads/* {
        root * ${APP_ROOT}/downloads
        file_server
    }

    handle_path /releases/* {
        root * ${APP_ROOT}/releases
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

${WWW_DOMAIN} {
    redir https://${DOMAIN}{uri}
}
CADDY

echo "==> Validating Caddyfile"
sudo caddy validate --config /etc/caddy/Caddyfile

echo "==> Reloading Caddy"
sudo systemctl reload caddy || sudo systemctl restart caddy

echo "==> Done. Directory structure:"
tree -L 4 "${APP_ROOT}" || find "${APP_ROOT}" -maxdepth 4 -type d | sort
