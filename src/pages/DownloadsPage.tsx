import React from 'react';
import { ArrowRight, Download, Globe2 } from 'lucide-react';
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
import DownloadHero3DScene from '../components/hero3d/DownloadHero3DScene';
import { getProjectDisplayName } from '../lib/projectText';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const DownloadsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const columns = [
    {
      key: 'label',
      header: currentLanguage === 'zh' ? '名称' : currentLanguage === 'nl' ? 'Naam' : 'Name',
      render: (row: ProjectReleaseAsset) => pickText(currentLanguage, row.label),
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
      key: 'sha256',
      header: 'SHA-256',
      render: (row: ProjectReleaseAsset) => <code style={{ color: 'var(--text-secondary)' }}>{row.sha256.slice(0, 12)}...</code>,
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
              <strong>{uiText.home.subtitleEn}</strong>
              <span>{currentLanguage === 'zh' ? uiText.home.subtitleZh : currentLanguage === 'nl' ? uiText.home.subtitleNl : uiText.home.subtitleZh}</span>
            </div>
            <p>{pickText(currentLanguage, uiText.downloads.intro)}</p>
            <div className="neo-inline-actions">
              <a href="https://github.com/HarryHongyue" target="_blank" rel="noreferrer" className={neoButtonClass('secondary')}>
                <Globe2 size={18} />
                {pickText(currentLanguage, uiText.common.githubReleases)}
              </a>
              <a href="https://omnigent.nl" target="_blank" rel="noreferrer" className={neoButtonClass('primary')}>
                {pickText(currentLanguage, uiText.common.officialMirrors)}
                <ArrowRight size={18} />
              </a>
            </div>
            <NeoBadge tone="teal">{pickText(currentLanguage, uiText.common.verifyChecksum)}</NeoBadge>
          </div>

          <DownloadHero3DScene intensity="high" />
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
                </div>
              </div>
              {project.releaseAssets[0] ? <NeoBadge tone="teal">{project.releaseAssets[0].version}</NeoBadge> : null}
            </div>
            <NeoTable<ProjectReleaseAsset> rowKey={(row) => `${row.label.en}-${row.version}`} rows={project.releaseAssets} columns={columns} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DownloadsPage;
