import type { Project, ProjectCategory, ProjectStatus } from '../types/project';

export const categoryLabels: Record<ProjectCategory, string> = {
  'main-site': 'Main site',
  'web-app': 'Web app',
  'web-app-with-backend': 'Web app + API',
  'desktop-software': 'Desktop software',
  'browser-extension': 'Browser extension',
  'backend-service': 'Backend service',
  'architecture-reference': 'Architecture reference',
};

export const statusLabels: Record<ProjectStatus, string> = {
  active: 'Active',
  planned: 'Planned',
  experimental: 'Experimental',
  archived: 'Archived',
};

export const projects: Project[] = [
  {
    slug: 'harry',
    name: 'Harry Personal Showcase',
    shortName: 'Harry',
    tagline: 'The lightweight main showcase and unified entry point for Harry Hongyue projects.',
    description:
      'Harry is the primary personal website: a project catalog, download entry, deployment guide, and security documentation hub.',
    longDescription:
      'This repository stays intentionally light. It presents Harry, organizes independent projects, and connects users to demos, repositories, release assets, deployment notes, and security guidance without merging those projects into a single codebase.',
    category: 'main-site',
    status: 'active',
    deploymentType: 'static-site',
    techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'CSS variables'],
    repo: 'HarryHongyue/Harry',
    publicUrl: 'https://harryhongyue.com',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/Harry', type: 'repo', external: true },
      { label: 'Deployment docs', href: '/deployment', type: 'docs' },
      { label: 'Security baseline', href: '/security', type: 'docs' },
    ],
    featured: true,
    backendRequired: false,
    deploymentNotes: [
      'Builds to static files with Vite.',
      'Can be served from /opt/harry-site/sites/main/current behind Caddy.',
      'Coordinates other projects through first-party routes, API paths, release metadata, and downloads.',
    ],
    securityNotes: [
      'No backend or database is included in this repository.',
      'Use HTTPS and keep deployment secrets outside Git.',
    ],
  },
  {
    slug: 'pdf-reader',
    name: 'PDF Reader',
    tagline: 'PDF upload, OCR, and parsing pipeline experience with a Vite frontend and FastAPI backend.',
    description:
      'A PDF processing project with a static frontend, FastAPI backend, OCR dependencies, dynamic pipelines, and temporary upload sessions.',
    longDescription:
      'PDF Reader is an independent repository. Harry only presents its product role, repository, demo entry, API gateway shape, and security requirements. The OCR backend should be deployed as a private container or service behind a reverse proxy.',
    category: 'web-app-with-backend',
    status: 'active',
    deploymentType: 'static-site-plus-api',
    techStack: ['Vite', 'React', 'TypeScript', 'FastAPI', 'Python', 'RapidOCR', 'OpenCV', 'pypdfium2'],
    repo: 'HarryHongyue/PDF-Reader',
    publicUrl: 'https://harryhongyue.com/projects/pdf-reader',
    apiBasePath: 'https://harryhongyue.com/api/pdf-reader',
    reverseProxyPath: '/api/pdf-reader/*',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/PDF-Reader', type: 'repo', external: true },
      { label: 'Project page', href: '/projects/pdf-reader', type: 'demo' },
      { label: 'App route', href: '/apps/pdf-reader', type: 'demo' },
    ],
    featured: true,
    backendRequired: true,
    securityNotes: [
      'Restrict PDF upload size at both reverse proxy and FastAPI layers.',
      'Validate extension and MIME type; do not trust uploaded filenames.',
      'Use UUID/session-isolated temporary directories and clean them after each request.',
      'Use a production CORS whitelist instead of allow_origins=["*"].',
      'Add basic API rate limiting before exposing OCR workloads publicly.',
    ],
    deploymentNotes: [
      'Keep the product and app entry inside Harry routes.',
      'Run the FastAPI backend behind /api/pdf-reader/*.',
      'Keep OCR service ports bound to localhost or the Docker network only.',
    ],
  },
  {
    slug: 'aircargo-edi',
    name: 'Aircargo EDI',
    tagline: 'AWB/HAWB PDF extraction and Cargo-IMP FWB/FHL generation direction for logistics workflows.',
    description:
      'A Python project moving toward logistics, air cargo, EDI, and PDF parsing capabilities with FastAPI, domain models, and desktop/web interfaces.',
    longDescription:
      'Aircargo EDI currently contains the domain/application skeleton, PDF parsing logic, a FastAPI/Jinja local web UI, CLI tools, and desktop delivery planning. Harry presents it as an independent backend-capable project that can later be exposed through a controlled API path.',
    category: 'web-app-with-backend',
    status: 'active',
    deploymentType: 'static-site-plus-api',
    techStack: ['Python', 'FastAPI', 'Pydantic', 'PyMuPDF', 'Jinja2', 'PySide6', 'Cargo-IMP'],
    repo: 'HarryHongyue/Aircargo-EDI',
    publicUrl: 'https://harryhongyue.com/projects/aircargo-edi',
    apiBasePath: 'https://harryhongyue.com/api/aircargo-edi',
    reverseProxyPath: '/api/aircargo-edi/*',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/Aircargo-EDI', type: 'repo', external: true },
      { label: 'Project page', href: '/projects/aircargo-edi', type: 'demo' },
      { label: 'App route', href: '/apps/aircargo-edi', type: 'demo' },
    ],
    featured: true,
    backendRequired: true,
    securityNotes: [
      'Treat AWB/HAWB PDFs as untrusted user input.',
      'Validate uploaded file type, size, and generated download paths.',
      'Avoid exposing generated artifacts by arbitrary filesystem path.',
      'Whitelist CORS origins before publishing a browser frontend.',
    ],
    deploymentNotes: [
      'Deploy the service from the independent Aircargo-EDI repository.',
      'Expose it internally as aircargo-edi-api:8000 and route through /api/aircargo-edi/*.',
      'Keep local-first desktop delivery separate from the public API.',
    ],
  },
  {
    slug: 'ode-solver',
    name: 'ODE All-In-One Solver',
    shortName: 'ODE Solver',
    tagline: 'JavaFX desktop software for numerical differential equation solving with a separate Vite website.',
    description:
      'A Java/Maven/JavaFX desktop application with numerical ODE solving features and a static website for documentation and downloads.',
    longDescription:
      'ODE All-In-One Solver remains its own repository. The Harry site links users to its website, repository, and release assets while keeping installer binaries in GitHub Releases or a downloads domain rather than committing them into Harry.',
    category: 'desktop-software',
    status: 'active',
    deploymentType: 'desktop-release',
    techStack: ['Java', 'Maven', 'JavaFX', 'exp4j', 'Gson', 'Vite', 'React', 'TypeScript', 'Inno Setup'],
    repo: 'HarryHongyue/ODE-All-In-One-Solver',
    publicUrl: 'https://harryhongyue.com/projects/ode-solver',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/ODE-All-In-One-Solver', type: 'repo', external: true },
      { label: 'Project page', href: '/projects/ode-solver', type: 'demo' },
      { label: 'Releases placeholder', href: 'https://github.com/HarryHongyue/ODE-All-In-One-Solver/releases', type: 'release', external: true },
    ],
    releaseAssets: [
      {
        label: 'Windows installer',
        platform: 'windows',
        version: '1.0.0-placeholder',
        href: 'https://github.com/HarryHongyue/ODE-All-In-One-Solver/releases',
        sha256: 'sha256-to-be-added',
        size: 'TBD',
        notes: 'Publish generated installer through GitHub Releases and expose it through Harry release metadata.',
      },
    ],
    featured: true,
    backendRequired: false,
    deploymentNotes: [
      'Move product page content into Harry instead of serving a separate ODE website.',
      'Publish installers through GitHub Releases and surface the latest version through /releases/release-manifest.json.',
    ],
    securityNotes: [
      'Publish checksums for installers.',
      'Do not commit release binaries into the Harry repository.',
    ],
  },
  {
    slug: 'surpriseme',
    name: 'SurpriseMe',
    tagline: 'A website and multi-browser extension project for lightweight surprise content experiences.',
    description:
      'SurpriseMe includes a Vite React website plus Chrome, Firefox, and Safari extension packages with a separate extension build flow.',
    longDescription:
      'SurpriseMe stays as an independent website and browser-extension repository. Harry aggregates its showcase links and browser-specific release entries.',
    category: 'browser-extension',
    status: 'active',
    deploymentType: 'browser-extension-release',
    techStack: ['Vite', 'React', 'TypeScript', 'Tailwind CSS', 'Browser Extension APIs', 'JavaScript'],
    repo: 'HarryHongyue/SurpriseMe',
    publicUrl: 'https://harryhongyue.com/projects/surpriseme',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/SurpriseMe', type: 'repo', external: true },
      { label: 'Project page', href: '/projects/surpriseme', type: 'demo' },
      { label: 'Releases placeholder', href: 'https://github.com/HarryHongyue/SurpriseMe/releases', type: 'release', external: true },
    ],
    releaseAssets: [
      {
        label: 'Chrome extension',
        platform: 'chrome',
        version: '0.1.0-placeholder',
        href: 'https://github.com/HarryHongyue/SurpriseMe/releases',
        sha256: 'sha256-to-be-added',
        size: 'TBD',
      },
      {
        label: 'Firefox extension',
        platform: 'firefox',
        version: '0.1.0-placeholder',
        href: 'https://github.com/HarryHongyue/SurpriseMe/releases',
        sha256: 'sha256-to-be-added',
        size: 'TBD',
      },
      {
        label: 'Safari extension',
        platform: 'safari',
        version: '0.1.0-placeholder',
        href: 'https://github.com/HarryHongyue/SurpriseMe/releases',
        sha256: 'sha256-to-be-added',
        size: 'TBD',
      },
    ],
    featured: true,
    backendRequired: false,
    deploymentNotes: [
      'Move product page content into Harry instead of serving a separate SurpriseMe website.',
      'Keep extension build outputs in GitHub Releases and expose them through Harry release metadata.',
    ],
    securityNotes: [
      'Review extension permissions before release.',
      'Publish browser package checksums and version notes.',
    ],
  },
  {
    slug: 'harry-comprehensive-website',
    name: 'Harry Comprehensive Website',
    tagline: 'Reference project for software download catalogs, project presentation, multilingual UX, and frontend/backend separation.',
    description:
      'A broader resource hub that can inform Harry project-display and download-center patterns without becoming the main-site skeleton.',
    longDescription:
      'Harry Comprehensive Website contains useful experience around multilingual pages, software resource catalogs, and frontend/backend separation. This refactor borrows the ideas, not the code or architecture.',
    category: 'web-app',
    status: 'experimental',
    deploymentType: 'reference-only',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'i18n', 'Backend reference'],
    repo: 'HarryHongyue/Harry-Comprehensive-Website',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/Harry-Comprehensive-Website', type: 'repo', external: true },
    ],
    backendRequired: true,
    deploymentNotes: [
      'Use as reference material only.',
      'Do not migrate its backend into Harry.',
    ],
    securityNotes: [
      'If reused later, keep secrets and backend services outside this repository.',
    ],
  },
  {
    slug: 'future-website-building-platform',
    name: 'Future Website Building Platform',
    tagline: 'Long-term architecture reference for modular shell, templates, configuration, deployment, and security documentation.',
    description:
      'A large platform repository used only as an architecture reference. It is not the skeleton for Harry.',
    longDescription:
      'Future Website Building Platform contains heavy platform concepts such as apps, packages, services, infra, modular docs, and operational practices. Harry intentionally adopts only lightweight documentation and modular-shell ideas.',
    category: 'architecture-reference',
    status: 'experimental',
    deploymentType: 'reference-only',
    techStack: ['Monorepo reference', 'Modular shell ideas', 'Templates', 'Deployment docs', 'Security docs'],
    repo: 'HarryHongyue/Future-Website-Building-Platform',
    links: [
      { label: 'Repository', href: 'https://github.com/HarryHongyue/Future-Website-Building-Platform', type: 'repo', external: true },
    ],
    backendRequired: true,
    deploymentNotes: [
      'Reference only; do not import platform services into Harry.',
      'Use its modular documentation mindset without adding Keycloak, CMS, audit, event bus, or multi-tenant systems.',
    ],
    securityNotes: [
      'Avoid expanding Harry into a production platform before the main showcase needs it.',
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string | undefined) =>
  projects.find((project) => project.slug === slug);
