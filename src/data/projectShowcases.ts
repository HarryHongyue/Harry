export interface ProjectShowcaseFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectShowcaseStep {
  title: string;
  description: string;
}

export interface ProjectShowcase {
  slug: string;
  logo: string;
  accent: string;
  eyebrow: string;
  headline: string;
  summary: string;
  metrics: string[];
  features: ProjectShowcaseFeature[];
  workflow: ProjectShowcaseStep[];
  appStatus: 'ready' | 'planned' | 'external';
  appSummary: string;
}

export const projectShowcases: Record<string, ProjectShowcase> = {
  'ode-solver': {
    slug: 'ode-solver',
    logo: '/project-assets/ode-solver-logo.png',
    accent: '#7A80E2',
    eyebrow: 'Desktop numerical lab',
    headline: 'Solve, compare, and visualize ordinary differential equations in one focused desktop tool.',
    summary: 'Migrated from the original ODE website concept: a clean hero, numerical method highlights, Windows installer flow, and release-driven download experience.',
    metrics: ['JavaFX desktop', 'Runge-Kutta / Euler', 'Windows installer'],
    appStatus: 'external',
    appSummary: 'The real solver remains a desktop application. Harry provides the product page and release entry.',
    features: [
      { title: 'Custom Equation Input', description: 'Input ordinary differential equations with a focused equation editor and support for multiple forms.', icon: 'fa-equals' },
      { title: 'Multiple Methods', description: 'Compare Euler, Runge-Kutta, Adams-style methods, and future numerical strategies.', icon: 'fa-calculator' },
      { title: 'Result Visualization', description: 'Use curves and plotted output to inspect solution behavior instead of reading raw numbers only.', icon: 'fa-chart-line' },
      { title: 'Export-ready workflow', description: 'Designed around installer releases, checksum metadata, and future downloadable result exports.', icon: 'fa-file-export' },
    ],
    workflow: [
      { title: 'Download installer', description: 'Harry reads release metadata and points users to the latest Windows installer.' },
      { title: 'Install locally', description: 'The numerical engine stays on the desktop for fast local execution.' },
      { title: 'Solve and compare', description: 'Users test methods side by side and inspect plotted behavior.' },
    ],
  },
  surpriseme: {
    slug: 'surpriseme',
    logo: '/project-assets/surpriseme-logo.png',
    accent: '#a855f7',
    eyebrow: 'Cross-browser extension',
    headline: 'A lightweight surprise engine for Chrome, Firefox, Safari, and playful browsing moments.',
    summary: 'Migrated from the original SurpriseMe site direction: punchy hero, browser extension positioning, privacy notes, and per-browser release assets.',
    metrics: ['Chrome', 'Firefox', 'Safari'],
    appStatus: 'external',
    appSummary: 'The extension packages remain in the SurpriseMe repository. Harry presents the product and release links.',
    features: [
      { title: 'Surprise actions', description: 'Trigger lightweight random experiences without turning the browser into a heavy platform.', icon: 'fa-shuffle' },
      { title: 'Simple browser flow', description: 'Install, enable, and start using the extension with minimal setup.', icon: 'fa-puzzle-piece' },
      { title: 'Cross-browser packaging', description: 'Separate package targets keep Chrome, Firefox, and Safari release paths clear.', icon: 'fa-globe' },
      { title: 'Privacy-first story', description: 'The Harry page can centralize permissions, privacy notes, and release trust signals.', icon: 'fa-shield-halved' },
    ],
    workflow: [
      { title: 'Choose browser', description: 'Users pick Chrome, Firefox, or Safari from Harry downloads.' },
      { title: 'Install extension', description: 'The package or store link comes from release metadata.' },
      { title: 'Enjoy surprises', description: 'The extension logic remains isolated in the SurpriseMe repository.' },
    ],
  },
  'pdf-reader': {
    slug: 'pdf-reader',
    logo: '/project-assets/pdf-reader-logo.png',
    accent: '#ef4444',
    eyebrow: 'PDF OCR pipeline',
    headline: 'Upload PDFs, extract logistics data, sort results, and prepare clean spreadsheet output.',
    summary: 'Inspired by the existing PDF Reader UI: drag-and-drop uploads, mode selection, OCR fallback, custom sorting, copy/export actions, and table results.',
    metrics: ['FastAPI backend', 'OCR fallback', 'Excel-friendly output'],
    appStatus: 'planned',
    appSummary: 'The online app shell is available in Harry, but production extraction should wait for the Docker API and login gate.',
    features: [
      { title: 'Drag-and-drop PDFs', description: 'The future Harry app route will preserve the simple upload-first workflow.', icon: 'fa-file-pdf' },
      { title: 'Mode-based parsing', description: 'Parsing modes such as AWB manifest extraction can be loaded from the backend.', icon: 'fa-sliders' },
      { title: 'Custom sorting', description: 'Paste spreadsheet order values and reorder extracted rows to match your workflow.', icon: 'fa-arrow-down-wide-short' },
      { title: 'Copy and export', description: 'TSV copy and CSV export remain key productivity actions for operations teams.', icon: 'fa-table' },
    ],
    workflow: [
      { title: 'Upload PDF files', description: 'Users add PDFs through the Harry app shell after login.' },
      { title: 'API extraction', description: 'The Dockerized backend performs OCR and parsing behind /api/pdf-reader/*.' },
      { title: 'Review output', description: 'Users sort, copy, export, and clean extracted rows.' },
    ],
  },
  'aircargo-edi': {
    slug: 'aircargo-edi',
    logo: '/project-assets/aircargo-edi-logo.png',
    accent: '#0f766e',
    eyebrow: 'Air cargo automation',
    headline: 'Turn AWB and HAWB documents into structured cargo data and future Cargo-IMP messages.',
    summary: 'Positioned as the logistics-heavy sibling of PDF Reader: controlled uploads, shipment models, FWB/FHL generation direction, and audit-friendly outputs.',
    metrics: ['AWB / HAWB', 'Cargo-IMP', 'FastAPI service'],
    appStatus: 'planned',
    appSummary: 'The online tool route is staged in Harry. The stable API and login/session layer should come first.',
    features: [
      { title: 'Shipment modeling', description: 'Normalize AWB, HAWB, pieces, weight, and routing data into domain objects.', icon: 'fa-plane-departure' },
      { title: 'Cargo-IMP direction', description: 'Prepare a path toward FWB/FHL generation from structured shipment data.', icon: 'fa-diagram-project' },
      { title: 'Document intake', description: 'Treat PDFs as untrusted inputs with strict validation and processing boundaries.', icon: 'fa-file-shield' },
      { title: 'Operations workflow', description: 'Bridge desktop, CLI, local web UI, and future cloud API paths without mixing codebases.', icon: 'fa-warehouse' },
    ],
    workflow: [
      { title: 'Collect documents', description: 'Users prepare AWB/HAWB PDFs or structured inputs.' },
      { title: 'Parse and validate', description: 'The backend extracts cargo fields and validates generated artifacts.' },
      { title: 'Generate EDI direction', description: 'Future outputs can feed Cargo-IMP FWB/FHL workflows.' },
    ],
  },
};

export const getProjectShowcase = (slug: string | undefined) => (slug ? projectShowcases[slug] : undefined);
