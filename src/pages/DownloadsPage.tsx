import React, { useEffect, useState } from 'react';
import { Download, Puzzle } from 'lucide-react';
import { FaApple, FaGithub, FaLinux, FaWindows } from 'react-icons/fa';
import NeoBadge from '../components/ui/NeoBadge';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import { useLanguage } from '../contexts/LanguageContext';
import { downloadsProjects } from '../data/projects';
import { pickText, uiText } from '../data/siteContent';
import { getProjectDisplayName } from '../lib/projectText';
import downloadsHeroBackground from '../assets/images/Backgrounds/下载hero部分背景图.png';
import type { ProjectReleaseAsset } from '../types/project';
import {
  describeReleaseAssets,
  fetchReleaseManifest,
  getProjectAssets,
  normalizeVersion,
  type ReleaseAssetKind,
} from '../utils/releaseManifest';

const manifestSlugOverrides: Record<string, string> = {
  'ode-all-in-one-solver': 'ode-solver',
  'metrology-certificate-management-system': 'metrology-certificate',
};

const getAssetKindIcon = (kind: ReleaseAssetKind) => {
  if (kind === 'windows') return <FaWindows aria-hidden="true" />;
  if (kind === 'macos') return <FaApple aria-hidden="true" />;
  if (kind === 'linux') return <FaLinux aria-hidden="true" />;
  if (kind === 'zip' || kind === 'crx' || kind === 'browser-extension') return <Puzzle size={18} aria-hidden="true" />;
  return <Download size={18} aria-hidden="true" />;
};

const getAssetButtonLabel = (kind: ReleaseAssetKind, currentLanguage: 'en' | 'zh' | 'nl') => {
  const labels: Record<ReleaseAssetKind, { en: string; zh: string; nl: string }> = {
    windows: { en: 'Download for Windows', zh: 'Windows版下载', nl: 'Download voor Windows' },
    macos: { en: 'Download for macOS', zh: 'macOS版下载', nl: 'Download voor macOS' },
    linux: { en: 'Download for Linux', zh: 'Linux版下载', nl: 'Download voor Linux' },
    zip: { en: 'Download ZIP', zh: '下载 ZIP', nl: 'Download ZIP' },
    crx: { en: 'Download CRX', zh: '下载 CRX', nl: 'Download CRX' },
    'browser-extension': { en: 'Download Extension', zh: '下载扩展', nl: 'Download extensie' },
    generic: { en: 'Download', zh: '下载', nl: 'Download' },
  };

  return labels[kind][currentLanguage];
};

const formatVersionMeta = (asset: ProjectReleaseAsset, currentLanguage: 'en' | 'zh' | 'nl') => {
  const version = normalizeVersion(asset.version);
  if (currentLanguage === 'zh') return `版本 ${version}`;
  if (currentLanguage === 'nl') return `Versie ${version}`;
  return `Version ${version}`;
};

const DownloadsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const locale = currentLanguage as 'en' | 'zh' | 'nl';
  const [assetMap, setAssetMap] = useState<Record<string, ProjectReleaseAsset[]>>({});
  const [loading, setLoading] = useState(true);

  const downloadsSubtitle = {
    primary: currentLanguage === 'zh' ? '一个愿景。多个项目。统一生态。' : currentLanguage === 'nl' ? 'Eén visie. Meerdere projecten. Eén ecosysteem.' : uiText.home.subtitleEn,
  };

  useEffect(() => {
    const loadAssets = async () => {
      try {
        const manifest = await fetchReleaseManifest();
        const nextMap: Record<string, ProjectReleaseAsset[]> = {};
        downloadsProjects.forEach((project) => {
          const manifestSlug = manifestSlugOverrides[project.slug] ?? project.slug;
          nextMap[project.slug] = getProjectAssets(manifest, manifestSlug);
        });
        setAssetMap(nextMap);
      } catch (error) {
        console.error('Failed to load release assets for downloads page:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAssets();
  }, []);

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <Breadcrumbs />
      <div className="section-shell">
        <section className="neo-hero neo-hero--downloads">
          <div className="neo-hero__copy">
            <h1 className="neo-hero-title">{pickText(currentLanguage, uiText.downloads.title)}</h1>
            <div className="neo-hero__subtitle">
              <strong>{downloadsSubtitle.primary}</strong>
            </div>
            <p>{pickText(currentLanguage, uiText.downloads.intro)}</p>
            <div className="neo-inline-actions">
              <a href="https://github.com/HarryHongyue" target="_blank" rel="noreferrer" className={neoButtonClass('primary')}>
                <FaGithub size={18} />
                {pickText(currentLanguage, uiText.common.githubReleases)}
              </a>
            </div>
          </div>

          <div className="neo-download-hero-visual" aria-hidden="true">
            <img src={downloadsHeroBackground} alt="" />
          </div>
        </section>
      </div>

      <div className="section-shell neo-download-groups">
        {downloadsProjects.map((project) => {
          const assets = assetMap[project.slug] || [];
          const describedAssets = describeReleaseAssets(assets);

          if (!assets.length && !loading) {
            return null;
          }

          return (
            <div key={project.slug} className="neo-table-card neo-table-card--rich">
              <div className="neo-table-card__header">
                <div className="neo-project-card__header">
                  <ProjectLogo src={project.logo} alt={project.englishName} className="neo-project-logo--compact" />
                  <div className="neo-project-card__header-content--centered">
                    <h3>{getProjectDisplayName(project, locale)}</h3>
                    <p>{pickText(locale, project.tagline)}</p>
                    {assets[0] ? (
                      <NeoBadge tone="success" className="neo-badge--inline">{normalizeVersion(assets[0].version)}</NeoBadge>
                    ) : null}
                  </div>
                </div>
              </div>

              {describedAssets.length > 0 ? (
                <div className="neo-download-actions-grid">
                  {describedAssets.map(({ asset, kind }) => (
                    <div key={`${asset.href}-${asset.version}`} className="neo-download-action-card">
                      <div className="neo-download-action-card__meta">
                        <div className="neo-download-action-card__title">
                          <span className="neo-download-asset-icon">{getAssetKindIcon(kind)}</span>
                          <strong>{getAssetButtonLabel(kind, locale)}</strong>
                        </div>
                        <p>{formatVersionMeta(asset, locale)}</p>
                      </div>
                      <a
                        href={asset.href}
                        className={`${neoButtonClass('ghost')} neo-download-button`}
                        target={asset.href.startsWith('http') ? '_blank' : undefined}
                        rel={asset.href.startsWith('http') ? 'noreferrer' : undefined}
                      >
                        <Download size={16} />
                        {currentLanguage === 'zh' ? '立即下载' : currentLanguage === 'nl' ? 'Nu downloaden' : 'Download'}
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="neo-empty-state">
                  <p>{currentLanguage === 'zh' ? '暂无可用下载，请稍后查看。' : currentLanguage === 'nl' ? 'Nog geen downloads beschikbaar.' : 'No downloads available yet.'}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadsPage;
