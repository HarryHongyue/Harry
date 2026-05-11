import React from 'react';
import { ArrowRight, Download, FileSpreadsheet, Globe2, Layers3, Lock, Server, ShieldCheck } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoSection from '../components/ui/NeoSection';
import { getProjectBySlug } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText } from '../data/siteContent';
import { neoButtonClass } from '../components/ui/NeoButton';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  const { currentLanguage } = useLanguage();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="neo-page">
        <div className="section-shell">
          <NeoCard>
            <h1>{currentLanguage === 'zh' ? '这个项目还没有加入目录。' : currentLanguage === 'nl' ? 'Dit project staat nog niet in de catalogus.' : 'That project is not in the catalog yet.'}</h1>
            <p>{slug}</p>
            <Link to="/projects" className={neoButtonClass('primary')}>
              {currentLanguage === 'zh' ? '返回项目页' : currentLanguage === 'nl' ? 'Terug naar projecten' : 'Back to projects'}
            </Link>
          </NeoCard>
        </div>
      </div>
    );
  }

  const isPdfReader = project.slug === 'pdf-reader';
  const isOde = project.slug === 'ode-solver';

  return (
    <div className="neo-page">
      <div className="section-shell">
        <div className="neo-detail-hero">
          <NeoCard className="neo-card">
            <div className="neo-section__header">
              <div className="neo-eyebrow">{pickText(currentLanguage, project.name)}</div>
              <h1>{pickText(currentLanguage, project.name)}</h1>
              <p>{pickText(currentLanguage, project.tagline)}</p>
              <p>{pickText(currentLanguage, project.overview)}</p>
              <div className="neo-inline-actions">
                {project.demoUrl ? (
                  <a href={project.demoUrl} className={neoButtonClass('primary')}>
                    {isPdfReader ? (currentLanguage === 'zh' ? '演示' : currentLanguage === 'nl' ? 'Demo' : 'Demo') : currentLanguage === 'zh' ? '打开' : currentLanguage === 'nl' ? 'Open' : 'Open'}
                  </a>
                ) : null}
                {project.repoUrl ? (
                  <a href={project.repoUrl} className={neoButtonClass('secondary')} target="_blank" rel="noreferrer">
                    <Globe2 size={18} />
                    {isPdfReader
                      ? currentLanguage === 'zh'
                        ? 'GitHub 仓库'
                        : currentLanguage === 'nl'
                          ? 'GitHub-repo'
                          : 'GitHub Repo'
                      : isOde
                        ? currentLanguage === 'zh'
                          ? '代码仓库'
                          : currentLanguage === 'nl'
                            ? 'Repository'
                            : 'Repository'
                        : currentLanguage === 'zh'
                          ? '源码'
                          : currentLanguage === 'nl'
                            ? 'Broncode'
                            : 'Source'}
                  </a>
                ) : null}
                {project.apiBasePath ? (
                  <Link to="/deployment" className={neoButtonClass('ghost')}>
                    <Server size={18} />
                    {currentLanguage === 'zh' ? 'API 文档' : currentLanguage === 'nl' ? 'API-documentatie' : 'API Docs'}
                  </Link>
                ) : null}
                {project.downloadUrl ? (
                  <a href={project.downloadUrl} className={neoButtonClass('ghost')} target="_blank" rel="noreferrer">
                    <Download size={18} />
                    {isOde ? (currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download') : currentLanguage === 'zh' ? '发布页' : currentLanguage === 'nl' ? 'Release' : 'Release'}
                  </a>
                ) : null}
              </div>
              <div className="neo-chip-cloud">
                {project.featureBadges.map((badge) => (
                  <NeoBadge key={badge.en} tone="cyan">
                    {pickText(currentLanguage, badge)}
                  </NeoBadge>
                ))}
              </div>
            </div>
          </NeoCard>

          <div className="neo-screenshot-mock">
            <div className="neo-screenshot-mock__screen">
              <div className="neo-project-card__header">
                <NeoIconBox tone={isOde ? 'teal' : 'cyan'} icon={isOde ? <FileSpreadsheet size={24} /> : <Layers3 size={24} />} />
                <div>
                  <h3>
                    {isPdfReader
                      ? currentLanguage === 'zh'
                        ? '产品截图模拟区'
                        : currentLanguage === 'nl'
                          ? 'Product-screenshot mock'
                          : 'Product Screenshot Mock Area'
                      : isOde
                        ? currentLanguage === 'zh'
                          ? '最新版本展示区'
                          : currentLanguage === 'nl'
                            ? 'Laatste release-oppervlak'
                            : 'Latest Release Surface'
                        : currentLanguage === 'zh'
                          ? '产品快照'
                          : currentLanguage === 'nl'
                            ? 'Productsnapshot'
                            : 'Product Snapshot'}
                  </h3>
                  <p>
                    {isPdfReader
                      ? currentLanguage === 'zh'
                        ? 'Upload / OCR / Review / Export'
                        : currentLanguage === 'nl'
                          ? 'Upload / OCR / Review / Export'
                          : 'Upload / OCR / Review / Export'
                      : isOde
                        ? currentLanguage === 'zh'
                          ? 'Installer / Docs / Release Notes'
                          : currentLanguage === 'nl'
                            ? 'Installer / Docs / Release Notes'
                            : 'Installer / Docs / Release Notes'
                        : pickText(currentLanguage, project.description)}
                  </p>
                </div>
              </div>
              <div className="neo-chip-cloud">
                {project.techStack.slice(0, 5).map((item) => (
                  <NeoBadge key={item}>{item}</NeoBadge>
                ))}
              </div>
              <div className="neo-screenshot-mock__bars">
                <span style={{ height: '38%' }} />
                <span style={{ height: '66%' }} />
                <span style={{ height: '92%' }} />
                <span style={{ height: '74%' }} />
                <span style={{ height: '58%' }} />
                <span style={{ height: '82%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <NeoSection title={currentLanguage === 'zh' ? '概览' : currentLanguage === 'nl' ? 'Overzicht' : 'Overview'}>
        <div className="neo-grid neo-grid--2">
          <NeoCard>
            <h3>{currentLanguage === 'zh' ? '关键能力' : currentLanguage === 'nl' ? 'Belangrijkste functies' : 'Key Features'}</h3>
            <ul className="neo-list">
              {project.keyFeatures.map((feature) => (
                <li key={feature.title.en}>
                  <div>
                    <strong>{pickText(currentLanguage, feature.title)}</strong>
                    <p>{pickText(currentLanguage, feature.description)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard variant="inset">
            <h3>{isOde ? (currentLanguage === 'zh' ? '现代技术栈' : currentLanguage === 'nl' ? 'Moderne technologie' : 'Built With Modern Technology') : currentLanguage === 'zh' ? '架构' : currentLanguage === 'nl' ? 'Architectuur' : 'Architecture'}</h3>
            <ul className="neo-list">
              {(isOde
                ? project.techStack.map((item) => ({
                    title: { en: item, zh: item, nl: item },
                    description: {
                      en: 'Core runtime and packaging toolchain.',
                      zh: '核心运行与打包技术栈。',
                      nl: 'Kernruntime en packaging-toolchain.',
                    },
                  }))
                : project.architecture
              ).map((item) => (
                <li key={item.title.en}>
                  <div>
                    <strong>{pickText(currentLanguage, item.title)}</strong>
                    <p>{pickText(currentLanguage, item.description)}</p>
                  </div>
                </li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </NeoSection>

      {isPdfReader ? (
        <>
          <NeoSection title={currentLanguage === 'zh' ? '架构' : currentLanguage === 'nl' ? 'Architectuur' : 'Architecture'}>
            <div className="neo-architecture-strip">
              {project.architecture.map((node) => (
                <div key={node.title.en} className="neo-architecture-node">
                  <strong>{pickText(currentLanguage, node.title)}</strong>
                  <p>{pickText(currentLanguage, node.description)}</p>
                </div>
              ))}
            </div>
          </NeoSection>
          <NeoSection title={currentLanguage === 'zh' ? '安全与隐私' : currentLanguage === 'nl' ? 'Security & privacy' : 'Security & Privacy'}>
            <div className="neo-grid neo-grid--2">
              <NeoCard>
                <div className="neo-project-card__header">
                  <NeoIconBox tone="teal" icon={<ShieldCheck size={22} />} />
                  <div>
                    <h3>{currentLanguage === 'zh' ? '安全与隐私' : currentLanguage === 'nl' ? 'Security & privacy' : 'Security & Privacy'}</h3>
                    <p>
                      {currentLanguage === 'zh'
                        ? '围绕上传、解析和私有服务边界的核心安全说明。'
                        : currentLanguage === 'nl'
                          ? 'Kernnotities over uploads, parsing en private servicegrenzen.'
                          : 'Core security notes around uploads, parsing, and private service boundaries.'}
                    </p>
                  </div>
                </div>
                <ul className="neo-list">
                  {project.securityNotes.map((item) => (
                    <li key={item.en}>{pickText(currentLanguage, item)}</li>
                  ))}
                </ul>
              </NeoCard>
              <NeoCard>
                <div className="neo-project-card__header">
                  <NeoIconBox tone="blue" icon={<Lock size={22} />} />
                  <div>
                    <h3>{currentLanguage === 'zh' ? '部署' : currentLanguage === 'nl' ? 'Deployment' : 'Deployment'}</h3>
                    <p>
                      {currentLanguage === 'zh'
                        ? '前端与 OCR / 提取后端分离部署。'
                        : currentLanguage === 'nl'
                          ? 'Gescheiden deployment van frontend en OCR/extractie-backend.'
                          : 'Separate deployment for the frontend and OCR/extraction backend.'}
                    </p>
                  </div>
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
        <NeoSection title={currentLanguage === 'zh' ? '最新版本' : currentLanguage === 'nl' ? 'Laatste release' : 'Latest Release'}>
          <div className="neo-grid neo-grid--2">
            <NeoCard>
              <h3>{currentLanguage === 'zh' ? '最新版本' : currentLanguage === 'nl' ? 'Laatste release' : 'Latest Release'}</h3>
              <p>{project.releaseAssets[0]?.version}</p>
              <p>
                {currentLanguage === 'zh'
                  ? '安装包、源码压缩包和版本说明集中发布。'
                  : currentLanguage === 'nl'
                    ? 'Installers, broncode en release notes worden samen gepubliceerd.'
                    : 'Installers, source archives, and release notes are published together.'}
              </p>
            </NeoCard>
            <NeoCard variant="inset">
              <h3>{currentLanguage === 'zh' ? '部署与可用性' : currentLanguage === 'nl' ? 'Deployment & beschikbaarheid' : 'Deployment & Availability'}</h3>
              <ul className="neo-list">
                {project.deploymentNotes.map((item) => (
                  <li key={item.en}>{pickText(currentLanguage, item)}</li>
                ))}
              </ul>
            </NeoCard>
          </div>
        </NeoSection>
      ) : null}

      {!isPdfReader && !isOde ? (
        <NeoSection title={currentLanguage === 'zh' ? '安全与部署' : currentLanguage === 'nl' ? 'Security & deployment' : 'Security & Deployment'}>
          <div className="neo-grid neo-grid--2">
            <NeoCard>
              <h3>{currentLanguage === 'zh' ? '安全说明' : currentLanguage === 'nl' ? 'Security-notities' : 'Security Notes'}</h3>
              <ul className="neo-list">
                {project.securityNotes.map((item) => (
                  <li key={item.en}>{pickText(currentLanguage, item)}</li>
                ))}
              </ul>
            </NeoCard>
            <NeoCard variant="inset">
              <h3>{currentLanguage === 'zh' ? '部署说明' : currentLanguage === 'nl' ? 'Deployment-notities' : 'Deployment Notes'}</h3>
              <ul className="neo-list">
                {project.deploymentNotes.map((item) => (
                  <li key={item.en}>{pickText(currentLanguage, item)}</li>
                ))}
              </ul>
            </NeoCard>
          </div>
        </NeoSection>
      ) : null}

      <div className="section-shell">
        <NeoCard variant="glowing" className="neo-note-banner">
          <div>
            <h3>{currentLanguage === 'zh' ? '继续浏览整个生态' : currentLanguage === 'nl' ? 'Verder door het ecosysteem' : 'Continue through the ecosystem'}</h3>
            <p>
              {currentLanguage === 'zh'
                ? '项目详情、下载中心和部署页共同构成统一展示入口。'
                : currentLanguage === 'nl'
                  ? 'Projectdetail, downloads en deployment vormen samen één showcase-ingang.'
                  : 'Project details, downloads, and deployment pages together form one unified showcase.'}
            </p>
          </div>
          <div className="neo-inline-actions">
            <Link to="/projects" className={neoButtonClass('secondary')}>
              {currentLanguage === 'zh' ? '查看全部项目' : currentLanguage === 'nl' ? 'Alle projecten' : 'All Projects'}
            </Link>
            <Link to="/downloads" className={neoButtonClass('primary')}>
              {currentLanguage === 'zh' ? '下载中心' : currentLanguage === 'nl' ? 'Downloads' : 'Downloads'}
              <ArrowRight size={18} />
            </Link>
          </div>
        </NeoCard>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
