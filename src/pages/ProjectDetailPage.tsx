import React, { useEffect, useState } from 'react';
import { Download, ExternalLink, Globe2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoSection from '../components/ui/NeoSection';
import { getProjectBySlug } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText } from '../data/siteContent';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import { getProjectDisplayName } from '../lib/projectText';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import { fetchReleaseManifest, getProjectAssets, normalizeVersion } from '../utils/releaseManifest';
import type { ProjectReleaseAsset } from '../types/project';
import SurpriseMeShowcase from '../components/project/SurpriseMeShowcase';
import MetrologyCertificateShowcase from '../components/project/MetrologyCertificateShowcase';
import PdfReaderShowcase from '../components/project/PdfReaderShowcase';
import OdeSolverShowcase from '../components/project/OdeSolverShowcase';
import AircargoEdiShowcase from '../components/project/AircargoEdiShowcase';
import FutureWebsitePlatformShowcase from '../components/project/FutureWebsitePlatformShowcase';
import OmnigentShowcase from '../components/project/OmnigentShowcase';
import CryoCoreCoolingShowcase from '../components/project/CryoCoreCoolingShowcase';
import SongYanShowcase from '../components/project/SongYanShowcase';
import HarryPersonalShowcase from '../components/project/HarryPersonalShowcase';
import HarrysHubShowcase from '../components/project/HarrysHubShowcase';
import ElectronicProductSpecsShowcase from '../components/project/ElectronicProductSpecsShowcase';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { currentLanguage } = useLanguage();
  const project = getProjectBySlug(slug);
  const [manifestAssets, setManifestAssets] = useState<ProjectReleaseAsset[]>([]);

  const manifestSlugOverrides: Record<string, string> = {
    'ode-all-in-one-solver': 'ode-solver',
    'metrology-certificate-management-system': 'metrology-certificate',
  };

  useEffect(() => {
    if (!project || !project.downloadable) return;

    const loadAssets = async () => {
      try {
        const manifest = await fetchReleaseManifest();
        const manifestSlug = manifestSlugOverrides[project.slug] ?? project.slug;
        const assets = getProjectAssets(manifest, manifestSlug);
        setManifestAssets(assets);
      } catch (error) {
        console.error('Failed to load release assets for project detail page:', error);
      }
    };

    loadAssets();
  }, [project]);

  if (!project) {
    return (
      <div className="neo-page">
        <div className="section-shell">
          <NeoCard>
            <h1>{currentLanguage === 'zh' ? '这个项目还没有加入目录' : currentLanguage === 'nl' ? 'Dit project staat nog niet in de catalogus' : 'That project is not in the catalog yet'}</h1>
            <p>{slug}</p>
            <Link to="/projects" className={neoButtonClass('primary')}>
              {currentLanguage === 'zh' ? '返回项目页' : currentLanguage === 'nl' ? 'Terug naar projecten' : 'Back to projects'}
            </Link>
          </NeoCard>
        </div>
      </div>
    );
  }

  const isPdf = project.slug === 'pdf-reader';
  const isOde = project.slug === 'ode-all-in-one-solver';
  const isAircargoEdi = project.slug === 'aircargo-edi';
  const isSurpriseMe = project.slug === 'surpriseme';
  const isMetrologyCertificate = project.slug === 'metrology-certificate-management-system';
  const isFutureWebsitePlatform = project.slug === 'omnigent-os';
  const isOmnigent = project.slug === 'omnigent';
  const isCryoCoreCooling = project.slug === 'cryocore-cooling';
  const isSongYan = project.slug === 'song-yan';
  const isHarryPersonal = project.slug === 'harry';
  const isHarrysHub = project.slug === 'harrys-hub';
  const isElectronicProductSpecs = project.slug === 'electronic-product-specifications-analysis';
  const isWebsiteShowcase = isFutureWebsitePlatform || isOmnigent || isCryoCoreCooling || isSongYan || isHarryPersonal || isHarrysHub || isElectronicProductSpecs;

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <Breadcrumbs />
      {!isWebsiteShowcase && !isPdf && !isOde && !isAircargoEdi && !isSurpriseMe && !isMetrologyCertificate ? (
        <div className="section-shell">
          <div className={`neo-detail-hero ${isPdf ? 'is-pdf' : 'is-generic'}`}>
            <NeoCard className="neo-detail-card neo-detail-card--main">
              <div className="neo-project-card__header neo-project-card__header--hero">
                <ProjectLogo src={project.logo} alt={project.englishName} className="neo-project-logo--hero" />
                <div>
                  <h1 className="neo-hero-title neo-hero-title--detail">{getProjectDisplayName(project, currentLanguage)}</h1>
                  <p className="neo-detail-card__tagline">{pickText(currentLanguage, project.tagline)}</p>
                </div>
              </div>

              <p>{pickText(currentLanguage, project.longDescription)}</p>

              <div className="neo-inline-actions">
                {project.demoUrl ? (
                  <a href={project.demoUrl} className={neoButtonClass('primary')}>
                    <Globe2 size={18} />
                    {isPdf ? 'Demo' : currentLanguage === 'zh' ? '打开项目' : currentLanguage === 'nl' ? 'Open project' : 'Open Project'}
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a href={project.repoUrl} className={neoButtonClass('secondary')} target="_blank" rel="noreferrer">
                    <GithubIcon size={18} />
                    {currentLanguage === 'zh' ? '仓库' : currentLanguage === 'nl' ? 'Repository' : 'Repository'}
                  </a>
                ) : null}
                {project.apiBasePath ? (
                  <a href={project.apiBasePath} className={neoButtonClass('ghost')}>
                    <ExternalLink size={18} />
                    {currentLanguage === 'zh' ? 'API 文档' : currentLanguage === 'nl' ? 'API-documentatie' : 'API Docs'}
                  </a>
                ) : null}
                {project.websiteUrl ? (
                  <a href={project.websiteUrl} className={neoButtonClass('ghost')} target="_blank" rel="noreferrer">
                    <ExternalLink size={18} />
                    {currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Bezoek website' : 'Visit Website'}
                  </a>
                ) : null}
                {project.downloadUrl ? (
                  <a href={manifestAssets.length > 0 ? manifestAssets[0].href : (project.releaseAssets && project.releaseAssets.length > 0 ? project.releaseAssets[0].href : project.downloadUrl)} className={neoButtonClass('ghost')} target="_blank" rel="noreferrer">
                    <Download size={18} />
                    {currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}
                  </a>
                ) : null}
              </div>

              <div className="neo-chip-cloud">
                {(project.chips ?? []).map((chip) => (
                  <NeoBadge key={chip.en} tone="cyan">
                    {pickText(currentLanguage, chip)}
                  </NeoBadge>
                ))}
              </div>
            </NeoCard>

            <div className={`neo-reference-panel ${isPdf ? 'neo-reference-panel--pdf' : 'neo-reference-panel--generic'}`}>
              <div className="neo-reference-panel__screen">
                <ProjectLogo src={project.logo} alt={project.englishName} className="neo-reference-panel__logo" imageClassName={isPdf ? 'neo-reference-panel__logo--pdf' : ''} />
                <div className="neo-reference-panel__meta">
                  <h3>{isPdf ? (currentLanguage === 'zh' ? '文档处理工作流' : currentLanguage === 'nl' ? 'Documentworkflow' : 'Document Workflow') : currentLanguage === 'zh' ? '项目概览' : currentLanguage === 'nl' ? 'Projectoverzicht' : 'Project Overview'}</h3>
                  <p>{isPdf ? 'Upload -> OCR -> Extract -> Review' : pickText(currentLanguage, project.description)}</p>
                </div>
                <div className="neo-reference-panel__chips">
                  {project.techStackIds.slice(0, 5).map((item) => (
                    <span key={item} className="neo-reference-panel__chip">
                      {item.replace(/-/g, ' ')}
                    </span>
                  ))}
                </div>
                <div className="neo-reference-panel__bars">
                  <span style={{ height: '34%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '82%' }} />
                  <span style={{ height: '66%' }} />
                  <span style={{ height: '49%' }} />
                  <span style={{ height: '74%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {isOde ? <OdeSolverShowcase project={project} /> : null}

      {isAircargoEdi ? <AircargoEdiShowcase project={project} /> : null}

      {isSurpriseMe ? <SurpriseMeShowcase project={project} /> : null}

      {isMetrologyCertificate ? <MetrologyCertificateShowcase project={project} /> : null}

      {isPdf ? <PdfReaderShowcase project={project} /> : null}

      {isFutureWebsitePlatform ? <FutureWebsitePlatformShowcase project={project} /> : null}

      {isOmnigent ? <OmnigentShowcase project={project} /> : null}

      {isCryoCoreCooling ? <CryoCoreCoolingShowcase project={project} /> : null}

      {isSongYan ? <SongYanShowcase project={project} /> : null}

      {isHarryPersonal ? <HarryPersonalShowcase project={project} /> : null}

      {isHarrysHub ? <HarrysHubShowcase project={project} /> : null}

      {isElectronicProductSpecs ? <ElectronicProductSpecsShowcase project={project} /> : null}

      {!isWebsiteShowcase && !isPdf && !isOde && !isAircargoEdi && !isSurpriseMe && !isMetrologyCertificate ? (
        <NeoSection title={currentLanguage === 'zh' ? '概览' : currentLanguage === 'nl' ? 'Overzicht' : 'Overview'}>
          <div className="neo-grid neo-grid--2">
            <NeoCard hoverable className="neo-content-card">
              <h3>{currentLanguage === 'zh' ? '核心功能' : currentLanguage === 'nl' ? 'Kernfuncties' : 'Key Features'}</h3>
              <ul className="neo-list">
                {project.features.map((feature) => (
                  <li key={feature.en}>{pickText(currentLanguage, feature)}</li>
                ))}
              </ul>
            </NeoCard>
            <NeoCard variant="inset" hoverable className="neo-content-card">
              <h3>{currentLanguage === 'zh' ? '适用场景' : currentLanguage === 'nl' ? 'Gebruiksscenario’s' : 'Use Cases'}</h3>
              <ul className="neo-list">
                {project.useCases.map((item) => (
                  <li key={item.en}>{pickText(currentLanguage, item)}</li>
                ))}
              </ul>
            </NeoCard>
          </div>
        </NeoSection>
      ) : null}

      {!isWebsiteShowcase && !isPdf && !isOde && !isAircargoEdi && !isSurpriseMe && !isMetrologyCertificate ? (
        <NeoSection title={currentLanguage === 'zh' ? '架构与后续计划' : currentLanguage === 'nl' ? 'Architectuur en roadmap' : 'Architecture & Roadmap'}>
          <div className="neo-grid neo-grid--2">
            <NeoCard hoverable>
              <h3>{currentLanguage === 'zh' ? '架构说明' : currentLanguage === 'nl' ? 'Architectuurnotities' : 'Architecture Notes'}</h3>
              <ul className="neo-list">
                {project.architectureNotes.map((item) => (
                  <li key={item.en}>{pickText(currentLanguage, item)}</li>
                ))}
              </ul>
            </NeoCard>
            <NeoCard variant="inset" hoverable>
              <h3>{currentLanguage === 'zh' ? '后续计划' : currentLanguage === 'nl' ? 'Roadmap' : 'Roadmap'}</h3>
              <ul className="neo-list">
                {(project.roadmap ?? project.deploymentNotes).map((item) => (
                  <li key={item.en}>{pickText(currentLanguage, item)}</li>
                ))}
              </ul>
            </NeoCard>
          </div>
        </NeoSection>
      ) : null}

    </div>
  );
};

export default ProjectDetailPage;
