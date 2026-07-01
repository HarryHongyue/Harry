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

export type ReleaseAssetKind = 'windows' | 'macos' | 'linux' | 'zip' | 'crx' | 'browser-extension' | 'generic';

export interface ReleaseAssetDescriptor {
  asset: ProjectReleaseAsset;
  kind: ReleaseAssetKind;
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
    const manifest = await response.json();
    cachedManifest = manifest;
    return manifest;
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

export function getLatestReleaseDate(
  manifest: ReleaseManifest,
  slug: string
): string {
  const project = manifest.projects[slug];
  return project?.releaseDate || '';
}

export function normalizeVersion(version?: string): string {
  if (!version) return 'v1.0.0';
  return version.toLowerCase().startsWith('v') ? version : `v${version}`;
}

export function detectReleaseAssetKind(asset: Pick<ProjectReleaseAsset, 'label' | 'platform' | 'href'>): ReleaseAssetKind {
  const text = `${asset.label.en} ${asset.label.zh} ${asset.label.nl} ${asset.platform.en} ${asset.platform.zh} ${asset.platform.nl} ${asset.href}`.toLowerCase();

  if (text.includes('.crx') || text.includes(' crx')) {
    return 'crx';
  }

  if (text.includes('windows') || text.includes('.exe') || text.includes('msi')) {
    return 'windows';
  }

  if (text.includes('macos') || text.includes('mac os') || text.includes('.dmg') || text.includes('.pkg')) {
    return 'macos';
  }

  if (text.includes('linux') || text.includes('.appimage') || text.includes('.deb') || text.includes('.rpm') || text.includes('.tar.gz')) {
    return 'linux';
  }

  if (text.includes('.zip') || text.includes(' zip')) {
    return 'zip';
  }

  if (text.includes('extension') || text.includes('browser')) {
    return 'browser-extension';
  }

  return 'generic';
}

export function describeReleaseAssets(assets: ProjectReleaseAsset[]): ReleaseAssetDescriptor[] {
  return assets.map((asset) => ({
    asset,
    kind: detectReleaseAssetKind(asset),
  }));
}
