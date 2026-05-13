export type SiteLocale = 'en' | 'zh' | 'nl';

export interface LocalizedText {
  en: string;
  zh: string;
  nl: string;
}

export type ProjectCategory =
  | 'personal-website'
  | 'enterprise-website'
  | 'saas-platform'
  | 'web-application'
  | 'desktop-application'
  | 'browser-extension'
  | 'developer-resource-hub'
  | 'education-platform'
  | 'ecommerce-wordpress'
  | 'logistics-air-cargo'
  | 'document-intelligence'
  | 'scientific-computing'
  | 'architecture-reference';

export type ProjectStatus = 'featured' | 'active' | 'completed' | 'planned' | 'school-project' | 'client-project';

export type ProjectType =
  | 'portfolio'
  | 'website'
  | 'web-app'
  | 'desktop-app'
  | 'browser-extension'
  | 'api-service'
  | 'resource-platform'
  | 'saas-concept';

export interface ProjectLink {
  label: LocalizedText;
  href: string;
  type: 'repo' | 'demo' | 'docs' | 'download' | 'api' | 'website' | 'release';
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

export interface Project {
  slug: string;
  name: string;
  englishName: string;
  chineseName?: string;
  dutchName?: string;
  tagline: LocalizedText;
  description: LocalizedText;
  longDescription: LocalizedText;
  category: ProjectCategory[];
  status: ProjectStatus;
  projectType: ProjectType[];
  logo?: string;
  repoPath?: string;
  repoUrl?: string;
  demoUrl?: string;
  downloadUrl?: string;
  apiBasePath?: string;
  websiteUrl?: string;
  techStackIds: string[];
  backendRequired: boolean;
  downloadable: boolean;
  desktopApp: boolean;
  browserExtension: boolean;
  webVersion: boolean;
  screenshots?: string[];
  releaseAssets: ProjectReleaseAsset[];
  securityNotes: LocalizedText[];
  deploymentNotes: LocalizedText[];
  features: LocalizedText[];
  useCases: LocalizedText[];
  architectureNotes: LocalizedText[];
  roadmap?: LocalizedText[];
  chips?: LocalizedText[];
  featured?: boolean;
  previewImage?: string;
  previewVariant?: 'pdf-reader' | 'aircargo-edi' | 'ode-solver' | 'surpriseme' | 'harry-website' | 'future-platform';
  displayTags?: string[];
}
