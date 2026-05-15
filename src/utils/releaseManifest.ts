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
