import React from 'react';
import { ArrowRight, Cloud, Download, FolderKanban, HardDrive, Layers3, Server, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoSection from '../components/ui/NeoSection';
import { featuredProjects, latestDownloadAssets } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import { neoButtonClass } from '../components/ui/NeoButton';

const HomePage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="neo-page">
      <div className="section-shell">
        <section className="neo-hero">
          <div className="neo-hero__copy">
            <div className="neo-eyebrow">{pickText(currentLanguage, uiText.home.eyebrow)}</div>
            <h1>
              Harry
              <br />
              Personal Showcase
            </h1>
            <div className="neo-hero__subtitle">
              <strong>{uiText.home.subtitleEn}</strong>
              <span>{uiText.home.subtitleZh}</span>
            </div>
            <p>{pickText(currentLanguage, uiText.home.body)}</p>
            <div className="neo-hero__actions">
              <Link to="/projects" className={neoButtonClass('primary')}>
                {pickText(currentLanguage, uiText.common.viewProjects)}
                <ArrowRight size={18} />
              </Link>
              <Link to="/deployment" className={neoButtonClass('secondary')}>
                {pickText(currentLanguage, uiText.common.exploreArchitecture)}
              </Link>
            </div>
            <div className="neo-chip-row">
              {featuredProjects[0].featureBadges.map((badge) => (
                <NeoBadge key={badge.en} tone="cyan">
                  {pickText(currentLanguage, badge)}
                </NeoBadge>
              ))}
            </div>
          </div>

          <div className="neo-hero__visual">
            <div className="neo-hero__mini neo-hero__mini--top-left">
              <Server size={28} color="var(--accent-cyan)" />
            </div>
            <div className="neo-hero__mini neo-hero__mini--top-right">
              <Layers3 size={28} color="var(--accent-blue)" />
            </div>
            <div className="neo-hero__mini neo-hero__mini--bottom-right">
              <HardDrive size={28} color="var(--accent-teal)" />
            </div>
            <div className="neo-hero__glyph">H</div>
          </div>
        </section>
      </div>

      <NeoSection
        eyebrow={pickText(currentLanguage, uiText.home.featuredTitle)}
        title={pickText(currentLanguage, uiText.home.featuredTitle)}
        description={pickText(currentLanguage, uiText.home.featuredBody)}
      >
        <div className="neo-project-grid">
          {featuredProjects.slice(0, 3).map((project, index) => (
            <NeoCard key={project.slug} hoverable className="neo-project-card">
              <div className="neo-project-card__header">
                <NeoIconBox tone={index === 0 ? 'cyan' : index === 1 ? 'blue' : 'teal'} icon={<FolderKanban size={26} />} />
                <div>
                  <h3>{pickText(currentLanguage, project.name)}</h3>
                  <p>{pickText(currentLanguage, project.tagline)}</p>
                </div>
              </div>
              <div className="neo-chip-row">
                {project.featureBadges.slice(0, 2).map((badge) => (
                  <NeoBadge key={badge.en}>{pickText(currentLanguage, badge)}</NeoBadge>
                ))}
              </div>
              <p>{pickText(currentLanguage, project.description)}</p>
              <div className="neo-project-card__actions">
                <NeoBadge tone="teal">{project.techStack.slice(0, 2).join(' / ')}</NeoBadge>
                <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')}>
                  {pickText(currentLanguage, uiText.common.learnMore)}
                </Link>
              </div>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection
        eyebrow={pickText(currentLanguage, uiText.home.architectureTitle)}
        title={pickText(currentLanguage, uiText.home.architectureTitle)}
        description={pickText(currentLanguage, uiText.home.architectureBody)}
      >
        <div className="neo-architecture-strip">
          <div className="neo-architecture-node">
            <NeoIconBox tone="teal" icon={<FolderKanban size={26} />} />
            <strong>{currentLanguage === 'zh' ? '主站' : currentLanguage === 'nl' ? 'Hoofdsite' : 'Main Site'}</strong>
            <p>harry.dev</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="blue" icon={<Server size={26} />} />
            <strong>API Gateway</strong>
            <p>{currentLanguage === 'zh' ? '路由 / 鉴权 / 限流' : currentLanguage === 'nl' ? 'Routing / auth / limieten' : 'Routing / auth / rate limit'}</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="cyan" icon={<Layers3 size={26} />} />
            <strong>{currentLanguage === 'zh' ? '独立项目应用' : currentLanguage === 'nl' ? 'Projectapps' : 'Project Apps'}</strong>
            <p>PDF Reader / Aircargo EDI / ODE</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="purple" icon={<Cloud size={26} />} />
            <strong>{currentLanguage === 'zh' ? '云端基础设施' : currentLanguage === 'nl' ? 'Cloudinfra' : 'Cloud Infrastructure'}</strong>
            <p>{currentLanguage === 'zh' ? '计算 / 存储 / 数据' : currentLanguage === 'nl' ? 'Compute / opslag / data' : 'Compute / storage / data'}</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="teal" icon={<Download size={26} />} />
            <strong>{currentLanguage === 'zh' ? '下载层' : currentLanguage === 'nl' ? 'Downloadlaag' : 'Downloads'}</strong>
            <p>{currentLanguage === 'zh' ? '文档 / 安装包 / 发布' : currentLanguage === 'nl' ? 'Docs / installers / releases' : 'Docs / installers / releases'}</p>
          </div>
        </div>
      </NeoSection>

      <NeoSection
        eyebrow={pickText(currentLanguage, uiText.home.downloadsTitle)}
        title={pickText(currentLanguage, uiText.home.downloadsTitle)}
        description={pickText(currentLanguage, uiText.home.downloadsBody)}
      >
        <div className="neo-grid neo-grid--4">
          {latestDownloadAssets.map(({ asset, project }) => (
            <NeoCard key={`${project.slug}-${asset.label.en}`} hoverable>
              <div className="neo-project-card__header">
                <NeoIconBox tone="warning" icon={<Download size={24} />} />
                <div>
                  <h3>{pickText(currentLanguage, asset.label)}</h3>
                  <p>{pickText(currentLanguage, asset.platform)}</p>
                </div>
              </div>
              <div className="neo-kv-list">
                <div>
                  <dt>{pickText(currentLanguage, uiText.common.latestRelease)}</dt>
                  <dd>{asset.version}</dd>
                </div>
                <div>
                  <dt>{currentLanguage === 'zh' ? '大小' : currentLanguage === 'nl' ? 'Grootte' : 'Size'}</dt>
                  <dd>{asset.size}</dd>
                </div>
              </div>
              <a href={asset.href} className={neoButtonClass('secondary')}>
                {pickText(currentLanguage, uiText.common.download)}
              </a>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <div className="section-shell">
        <NeoCard variant="glowing" className="neo-note-banner">
          <div className="neo-project-card__header">
            <NeoIconBox tone="success" icon={<ShieldCheck size={24} />} />
            <div>
              <h3>{pickText(currentLanguage, uiText.common.secureByDesign)}</h3>
              <p>
                {currentLanguage === 'zh'
                  ? '下载、路由、部署和服务边界都围绕长期维护来组织。'
                  : currentLanguage === 'nl'
                    ? 'Downloads, routing, deployment en servicegrenzen zijn georganiseerd rond onderhoudbaarheid.'
                    : 'Downloads, routing, deployment, and service boundaries are all organized for long-term maintainability.'}
              </p>
            </div>
          </div>
          <Link to="/security" className={neoButtonClass('primary')}>
            {pickText(currentLanguage, uiText.nav.security)}
          </Link>
        </NeoCard>
      </div>
    </div>
  );
};

export default HomePage;
