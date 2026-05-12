import React from 'react';
import { ArrowRight, Download, ExternalLink, FileCode2, Globe2, Lock, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoSection from '../components/ui/NeoSection';
import { getProjectBySlug } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import { getProjectDisplayName } from '../lib/projectText';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { currentLanguage } = useLanguage();
  const project = getProjectBySlug(slug);

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
  const pdfArchitectureNodes = [
    { title: currentLanguage === 'zh' ? '前端' : currentLanguage === 'nl' ? 'Frontend' : 'Frontend', body: currentLanguage === 'zh' ? '上传、状态反馈和结果查看界面。' : currentLanguage === 'nl' ? 'Uploads, status en resultaatweergave.' : 'Uploads, status feedback, and results review.' },
    { title: 'API Gateway', body: currentLanguage === 'zh' ? '负责路由、边界控制和请求限制。' : currentLanguage === 'nl' ? 'Verzorgt routing, grenzen en request-limieten.' : 'Handles routing, boundary control, and request limits.' },
    { title: currentLanguage === 'zh' ? '后端 API' : currentLanguage === 'nl' ? 'Backend API' : 'Backend API', body: currentLanguage === 'zh' ? '组织解析任务、模式选择和结果校验。' : currentLanguage === 'nl' ? 'Orkestreert parsing, modi en validatie.' : 'Coordinates parsing jobs, modes, and validation.' },
    { title: currentLanguage === 'zh' ? 'OCR / 提取管线' : currentLanguage === 'nl' ? 'OCR / extractiepijplijn' : 'OCR / Extraction Pipeline', body: currentLanguage === 'zh' ? '执行文字、表格和坐标驱动的提取流程。' : currentLanguage === 'nl' ? 'Voert tekst-, tabel- en coördinaatextractie uit.' : 'Runs text, table, and coordinate-aware extraction.' },
    { title: currentLanguage === 'zh' ? '存储层' : currentLanguage === 'nl' ? 'Opslaglaag' : 'Storage', body: currentLanguage === 'zh' ? '管理临时文件、派生输出和处理日志。' : currentLanguage === 'nl' ? 'Beheert tijdelijke bestanden, output en logs.' : 'Manages temporary files, derived outputs, and processing logs.' },
  ];

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <Breadcrumbs />
      <div className="section-shell">
        <div className={`neo-detail-hero ${isPdf ? 'is-pdf' : isOde ? 'is-ode' : 'is-generic'}`}>
          <NeoCard className="neo-detail-card neo-detail-card--main">
            <div className="neo-project-card__header neo-project-card__header--hero">
              <ProjectLogo src={project.logo} alt={project.englishName} className="neo-project-logo--hero" />
              <div>
                <h1 className={`neo-hero-title neo-hero-title--detail ${isOde ? 'neo-hero-title--compact' : ''}`}>{getProjectDisplayName(project, currentLanguage)}</h1>
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
                  <FileCode2 size={18} />
                  {currentLanguage === 'zh' ? '仓库' : currentLanguage === 'nl' ? 'Repository' : 'Repository'}
                </a>
              ) : null}
              {project.apiBasePath ? (
                <a href={project.apiBasePath} className={neoButtonClass('ghost')}>
                  <ExternalLink size={18} />
                  {currentLanguage === 'zh' ? 'API 文档' : currentLanguage === 'nl' ? 'API-documentatie' : 'API Docs'}
                </a>
              ) : null}
              {isOde ? (
                <a href={project.downloadUrl ?? project.repoUrl ?? '#'} className={neoButtonClass('ghost')} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {currentLanguage === 'zh' ? '文档' : currentLanguage === 'nl' ? 'Documentatie' : 'Documentation'}
                </a>
              ) : null}
              {project.websiteUrl ? (
                <a href={project.websiteUrl} className={neoButtonClass('ghost')} target="_blank" rel="noreferrer">
                  <ExternalLink size={18} />
                  {currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Bezoek website' : 'Visit Website'}
                </a>
              ) : null}
              {project.downloadUrl ? (
                <a href={project.downloadUrl} className={neoButtonClass('ghost')} target="_blank" rel="noreferrer">
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

          <div className={`neo-reference-panel ${isPdf ? 'neo-reference-panel--pdf' : isOde ? 'neo-reference-panel--ode' : 'neo-reference-panel--generic'}`}>
            <div className="neo-reference-panel__screen">
              <ProjectLogo src={project.logo} alt={project.englishName} className="neo-reference-panel__logo" imageClassName={isPdf ? 'neo-reference-panel__logo--pdf' : ''} />
              <div className="neo-reference-panel__meta">
                <h3>{isPdf ? (currentLanguage === 'zh' ? '文档处理工作流' : currentLanguage === 'nl' ? 'Documentworkflow' : 'Document Workflow') : isOde ? (currentLanguage === 'zh' ? '数值求解工作流' : currentLanguage === 'nl' ? 'Numerieke workflow' : 'Numerical Workflow') : currentLanguage === 'zh' ? '项目概览' : currentLanguage === 'nl' ? 'Projectoverzicht' : 'Project Overview'}</h3>
                <p>{isPdf ? 'Upload -> OCR -> Extract -> Review' : isOde ? 'Input -> Solve -> Analyze -> Export' : pickText(currentLanguage, project.description)}</p>
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

      {isPdf ? (
        <>
          <NeoSection title={currentLanguage === 'zh' ? '架构' : currentLanguage === 'nl' ? 'Architectuur' : 'Architecture'}>
            <div className="neo-architecture-strip neo-architecture-strip--pdf">
              {pdfArchitectureNodes.map((item) => (
                <div key={item.title} className="neo-architecture-node neo-architecture-node--pulse">
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </div>
              ))}
            </div>
          </NeoSection>
          <NeoSection title={currentLanguage === 'zh' ? '安全与隐私' : currentLanguage === 'nl' ? 'Security & privacy' : 'Security & Privacy'}>
            <div className="neo-grid neo-grid--2">
              <NeoCard hoverable>
                <div className="neo-info-card__title">
                  <ShieldCheck size={18} />
                  <h3>{currentLanguage === 'zh' ? '安全说明' : currentLanguage === 'nl' ? 'Security-notities' : 'Security Notes'}</h3>
                </div>
                <ul className="neo-list">
                  {project.securityNotes.map((item) => (
                    <li key={item.en}>{pickText(currentLanguage, item)}</li>
                  ))}
                </ul>
              </NeoCard>
              <NeoCard variant="inset" hoverable>
                <div className="neo-info-card__title">
                  <Lock size={18} />
                  <h3>{currentLanguage === 'zh' ? '部署说明' : currentLanguage === 'nl' ? 'Deployment-notities' : 'Deployment Notes'}</h3>
                </div>
                <ul className="neo-list">
                  {project.deploymentNotes.map((item) => (
                    <li key={item.en}>{pickText(currentLanguage, item)}</li>
                  ))}
                </ul>
              </NeoCard>
            </div>
          </NeoSection>
        </>
      ) : null}

      {isOde ? (
        <>
          <NeoSection title={currentLanguage === 'zh' ? '现代技术栈' : currentLanguage === 'nl' ? 'Moderne technologie' : 'Built With Modern Technology'}>
            <div className="neo-grid neo-grid--4">
              {project.techStackIds.map((stack) => (
                <NeoCard key={stack} hoverable className="neo-tech-card">
                  <h3>{stack.replace(/-/g, ' ')}</h3>
                  <p>{currentLanguage === 'zh' ? '核心运行与打包能力。' : currentLanguage === 'nl' ? 'Kernruntime en packaging-capaciteit.' : 'Core runtime and packaging capability.'}</p>
                </NeoCard>
              ))}
            </div>
          </NeoSection>
          <NeoSection title={currentLanguage === 'zh' ? '最新版本' : currentLanguage === 'nl' ? 'Laatste release' : 'Latest Release'}>
            <div className="neo-grid neo-grid--2">
              <NeoCard hoverable>
                <h3>{project.releaseAssets[0]?.version ?? 'v1.0.0'}</h3>
                <p>{currentLanguage === 'zh' ? '跨平台安装包与桌面发布是这个项目故事的一部分。' : currentLanguage === 'nl' ? 'Cross-platform installers en desktopreleases horen bij het verhaal van dit project.' : 'Cross-platform installers and desktop releases are part of this project’s story.'}</p>
              </NeoCard>
              <NeoCard variant="inset" hoverable>
                <h3>{currentLanguage === 'zh' ? '部署与可用性' : currentLanguage === 'nl' ? 'Deployment en beschikbaarheid' : 'Deployment & Availability'}</h3>
                <ul className="neo-list">
                  {project.deploymentNotes.map((item) => (
                    <li key={item.en}>{pickText(currentLanguage, item)}</li>
                  ))}
                </ul>
              </NeoCard>
            </div>
          </NeoSection>
        </>
      ) : null}

      {!isPdf && !isOde ? (
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

      <div className="section-shell">
        <NeoCard variant="glowing" className="neo-home-cta">
          <div>
            <h3>{currentLanguage === 'zh' ? '继续浏览更多项目' : currentLanguage === 'nl' ? 'Bekijk meer projecten' : 'Continue Through More Projects'}</h3>
            <p>{currentLanguage === 'zh' ? '这个页面只是入口。完整项目目录、下载资源和其他案例页都在同一个系统里。' : currentLanguage === 'nl' ? 'Deze pagina is slechts één ingang. De volledige projectcatalogus, downloads en andere case pages leven in hetzelfde systeem.' : 'This page is one entry point inside the same system as the full project catalog, downloads, and other case pages.'}</p>
          </div>
          <div className="neo-inline-actions">
            <Link to="/projects" className={neoButtonClass('secondary')}>
              {pickText(currentLanguage, uiText.common.projectOverview)}
            </Link>
            <Link to="/downloads" className={neoButtonClass('primary')}>
              {pickText(currentLanguage, uiText.nav.downloads)}
              <ArrowRight size={18} />
            </Link>
          </div>
        </NeoCard>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
