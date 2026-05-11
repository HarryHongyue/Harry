export type SiteLocale = 'en' | 'zh' | 'nl';

export interface LocalizedText {
  en: string;
  zh: string;
  nl: string;
}

export type ProjectCategory =
  | 'main-site'
  | 'web-app'
  | 'backend'
  | 'desktop-software'
  | 'browser-extension'
  | 'architecture-reference';

export type ProjectStatus = 'featured' | 'active' | 'planned' | 'experimental';

export type DeploymentType =
  | 'main-showcase'
  | 'static-web'
  | 'web-plus-api'
  | 'backend-service'
  | 'desktop-release'
  | 'browser-extension-release'
  | 'reference-architecture';

export interface ProjectLink {
  label: LocalizedText;
  href: string;
  type: 'repo' | 'demo' | 'docs' | 'download' | 'api' | 'release';
  external?: boolean;
}

export interface ProjectReleaseAsset {
  label: LocalizedText;
  platform: LocalizedText;
  version: string;
  size: string;
  href: string;
  sha256: string;
  releaseDate: string;
}

export interface ProjectFeature {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectArchitectureNode {
  title: LocalizedText;
  description: LocalizedText;
}

export interface ProjectStat {
  label: LocalizedText;
  value: LocalizedText;
}

export interface Project {
  slug: string;
  name: LocalizedText;
  shortName?: LocalizedText;
  tagline: LocalizedText;
  description: LocalizedText;
  overview: LocalizedText;
  category: ProjectCategory;
  status: ProjectStatus;
  deploymentType: DeploymentType;
  techStack: string[];
  backendRequired: boolean;
  repoUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  docsUrl?: string;
  apiBasePath?: string;
  releaseAssets: ProjectReleaseAsset[];
  securityNotes: LocalizedText[];
  deploymentNotes: LocalizedText[];
  featureBadges: LocalizedText[];
  keyFeatures: ProjectFeature[];
  architecture: ProjectArchitectureNode[];
  stats: ProjectStat[];
  featured?: boolean;
}
