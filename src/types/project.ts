export type ProjectCategory =
  | 'main-site'
  | 'web-app'
  | 'web-app-with-backend'
  | 'desktop-software'
  | 'browser-extension'
  | 'backend-service'
  | 'architecture-reference';

export type ProjectStatus =
  | 'active'
  | 'planned'
  | 'experimental'
  | 'archived';

export type DeploymentType =
  | 'static-site'
  | 'static-site-plus-api'
  | 'desktop-release'
  | 'browser-extension-release'
  | 'reference-only';

export interface ProjectLink {
  label: string;
  href: string;
  type: 'repo' | 'demo' | 'download' | 'docs' | 'api' | 'release';
  external?: boolean;
}

export interface ProjectReleaseAsset {
  label: string;
  platform?: 'windows' | 'macos' | 'linux' | 'chrome' | 'firefox' | 'safari' | 'web';
  version?: string;
  href: string;
  sha256?: string;
  size?: string;
  notes?: string;
}

export interface Project {
  slug: string;
  name: string;
  shortName?: string;
  tagline: string;
  description: string;
  longDescription?: string;
  category: ProjectCategory;
  status: ProjectStatus;
  deploymentType: DeploymentType;
  techStack: string[];
  repo?: string;
  links: ProjectLink[];
  releaseAssets?: ProjectReleaseAsset[];
  screenshots?: string[];
  featured?: boolean;
  backendRequired: boolean;
  apiBasePath?: string;
  publicUrl?: string;
  reverseProxyPath?: string;
  securityNotes?: string[];
  deploymentNotes?: string[];
}
