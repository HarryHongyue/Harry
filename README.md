# Harry Personal Showcase

Harry is the main personal showcase website for Harry Hongyue. It is a lightweight Vite + React + TypeScript shell for personal introduction, project catalog, project detail pages, downloads, deployment notes, and security guidance.

This repository is not a monorepo and does not contain the source code for PDF Reader, Aircargo EDI, ODE All-In-One Solver, SurpriseMe, Harry Comprehensive Website, or Omnigent OS. Those projects remain independent repositories with independent builds and deployments.

## Tech Stack

- Vite
- React
- TypeScript
- React Router
- Tailwind CSS and existing CSS variables
- Existing theme switcher, language context, and responsive layout

## Local Development

```bash
npm install
npm run dev
npm run build
npm run preview
npm run type-check
```

## Routes

- `/` - Home page with hero, intro, featured projects, technical direction, and CTA
- `/about` - Personal introduction and skills
- `/projects` - Searchable and filterable project overview
- `/projects/:slug` - Dynamic project detail page
- `/downloads` - Aggregated release assets from project data
- `/deployment` - Self-hosting and reverse proxy deployment guide
- `/security` - Security baseline checklist
- `/contact` - Contact information

## Project Data

All project cards, detail pages, download entries, deployment notes, and security notes come from:

```text
src/data/projects.ts
```

Shared types live in:

```text
src/types/project.ts
```

Filtering helpers live in:

```text
src/utils/projectFilters.ts
```

## Adding a Project

1. Keep the project in its own repository.
2. Decide the project category and deployment type.
3. Add a new `Project` record in `src/data/projects.ts`.
4. Add repository, demo, docs, API, and release links as needed.
5. If the project has a backend, set `backendRequired`, `apiBasePath`, and `reverseProxyPath`.
6. If the project has downloads, add `releaseAssets` with version, platform, size, and sha256 placeholders.
7. If the project accepts uploads, add project-specific `securityNotes`.

See `docs/project-onboarding.md` for the full checklist.

## Deployment

The recommended deployment target is an Oracle free-tier VM running Caddy or Nginx as the public reverse proxy.

Recommended shape:

```text
/opt/harry-site/
├── caddy/
├── sites/
├── services/
├── downloads/
└── docker-compose.yml
```

Harry builds to static files and can be served from:

```text
/opt/harry-site/sites/main/
```

Other project frontends can be served from their own static folders or subdomains. Backend APIs should run as internal services and be exposed only through the reverse proxy, for example:

```text
https://api.your-domain.com/pdf-reader/*
https://api.your-domain.com/aircargo-edi/*
```

See:

- `docs/deployment.md`
- `deploy/caddy/Caddyfile.example`
- `deploy/docker-compose.example.yml`

## Independent Project Coordination

- PDF Reader: static frontend plus FastAPI OCR/parsing API.
- Aircargo EDI: Python/FastAPI-capable logistics and Cargo-IMP parsing project.
- ODE All-In-One Solver: Java/Maven/JavaFX desktop app plus static website and installer releases.
- SurpriseMe: Vite website plus Chrome, Firefox, and Safari extension packages.
- Harry Comprehensive Website: reference for multilingual project/download presentation.
- Omnigent OS: reference only for modular shell, templates, deployment, and security documentation ideas.

## Security

Do not commit:

- real `.env` files
- API keys
- GitHub tokens
- database passwords
- private keys
- production server IPs or secrets
- installer binaries as long-lived Git assets

For upload APIs such as PDF Reader and Aircargo EDI:

- limit file size
- validate extension and MIME type
- distrust uploaded filenames
- isolate temporary files by UUID/session
- clean temporary files after requests
- use CORS allowlists in production
- avoid exposing backend ports publicly

See `docs/security-baseline.md`.
