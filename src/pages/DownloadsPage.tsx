import React from 'react';
import { Download, Puzzle } from 'lucide-react';
import { FaApple, FaGithub, FaLinux, FaWindows } from 'react-icons/fa';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoSection from '../components/ui/NeoSection';
import NeoTable from '../components/ui/NeoTable';
import { downloadsProjects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import type { ProjectReleaseAsset } from '../types/project';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import { getProjectDisplayName } from '../lib/projectText';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import downloadsHeroBackground from '../assets/images/Backgrounds/下载hero部分背景图.png';

const getReleaseAssetIcon = (row: ProjectReleaseAsset) => {
  const text = `${row.label.en} ${row.platform.en}`.toLowerCase();

  if (text.includes('windows')) {
    return <FaWindows aria-hidden="true" />;
  }
  if (text.includes('macos') || text.includes('mac os')) {
    return <FaApple aria-hidden="true" />;
  }
  if (text.includes('linux')) {
    return <FaLinux aria-hidden="true" />;
  }
  if (text.includes('browser') || text.includes('crx') || text.includes('plugin') || text.includes('extension')) {
    return <Puzzle size={18} aria-hidden="true" />;
  }

  return <Download size={18} aria-hidden="true" />;
};

const DownloadsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const downloadsSubtitle = {
    primary: currentLanguage === 'zh' ? '一个愿景。多个项目。统一生态。' : currentLanguage === 'nl' ? 'Eén visie. Meerdere projecten. Eén ecosysteem.' : uiText.home.subtitleEn,
  };

  const columns = [
    {
      key: 'label',
      header: currentLanguage === 'zh' ? '名称' : currentLanguage === 'nl' ? 'Naam' : 'Name',
      render: (row: ProjectReleaseAsset) => (
        <span className="neo-download-asset-name">
          <span className="neo-download-asset-icon">{getReleaseAssetIcon(row)}</span>
          {pickText(currentLanguage, row.label)}
        </span>
      ),
    },
    {
      key: 'version',
      header: currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version',
      render: (row: ProjectReleaseAsset) => row.version,
    },
    {
      key: 'size',
      header: currentLanguage === 'zh' ? '大小' : currentLanguage === 'nl' ? 'Grootte' : 'Size',
      render: (row: ProjectReleaseAsset) => row.size,
    },
    {
      key: 'releaseDate',
      header: currentLanguage === 'zh' ? '发布日期' : currentLanguage === 'nl' ? 'Releasedatum' : 'Release Date',
      render: (row: ProjectReleaseAsset) => row.releaseDate,
    },
    {
      key: 'href',
      header: currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download',
      render: (row: ProjectReleaseAsset) => (
        <a href={row.href} className={`${neoButtonClass('ghost')} neo-download-button`} target={row.href.startsWith('http') ? '_blank' : undefined} rel={row.href.startsWith('http') ? 'noreferrer' : undefined}>
          <Download size={16} />
          {pickText(currentLanguage, uiText.common.download)}
        </a>
      ),
    },
  ];

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
        {downloadsProjects.map((project) => (
          <div key={project.slug} className="neo-table-card neo-table-card--rich">
            <div className="neo-table-card__header">
              <div className="neo-project-card__header">
                <ProjectLogo src={project.logo} alt={project.englishName} className="neo-project-logo--compact" />
                <div className="neo-project-card__header-content--centered">
                  <h3>{getProjectDisplayName(project, currentLanguage)}</h3>
                  <p>{pickText(currentLanguage, project.tagline)}</p>
                  {project.releaseAssets[0] ? (
                    <NeoBadge tone="success" className="neo-badge--inline">{project.releaseAssets[0].version}</NeoBadge>
                  ) : null}
                </div>
              </div>
            </div>
            <NeoTable<ProjectReleaseAsset> rowKey={(row) => `${row.label.en}-${row.version}`} rows={project.releaseAssets} columns={columns} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;
