import React from 'react';
import { ArrowRight, Download, Globe2, ShieldCheck } from 'lucide-react';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoSection from '../components/ui/NeoSection';
import NeoTable from '../components/ui/NeoTable';
import { projects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import type { ProjectReleaseAsset } from '../types/project';
import { neoButtonClass } from '../components/ui/NeoButton';

const DownloadsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const ode = projects.find((project) => project.slug === 'ode-solver');
  const surpriseMe = projects.find((project) => project.slug === 'surpriseme');
  const pdfReader = projects.find((project) => project.slug === 'pdf-reader');
  const aircargo = projects.find((project) => project.slug === 'aircargo-edi');
  const docs = projects.find((project) => project.slug === 'harry-showcase');

  const sections = [ode, surpriseMe, pdfReader, aircargo, docs].filter(Boolean) as typeof projects;

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
      render: (row: ProjectReleaseAsset) => <code style={{ color: 'var(--text-secondary)' }}>{row.sha256.slice(0, 14)}...</code>,
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
        <a href={row.href} className={neoButtonClass('ghost')}>
          {pickText(currentLanguage, uiText.common.download)}
        </a>
      ),
    },
  ];

  return (
    <div className="neo-page">
      <div className="section-shell">
        <section className="neo-hero">
          <div className="neo-hero__copy">
            <div className="neo-eyebrow">{pickText(currentLanguage, uiText.downloads.eyebrow)}</div>
            <h1>{pickText(currentLanguage, uiText.downloads.title)}</h1>
            <div className="neo-hero__subtitle">
              <strong>{uiText.home.subtitleEn}</strong>
              <span>{uiText.home.subtitleZh}</span>
            </div>
            <p>{pickText(currentLanguage, uiText.downloads.intro)}</p>
            <div className="neo-inline-actions">
              <a href="https://github.com/HarryHongyue" target="_blank" rel="noreferrer" className={neoButtonClass('secondary')}>
                <Globe2 size={18} />
                {pickText(currentLanguage, uiText.common.githubReleases)}
              </a>
              <a href="/downloads" className={neoButtonClass('primary')}>
                {pickText(currentLanguage, uiText.common.officialMirrors)}
                <ArrowRight size={18} />
              </a>
            </div>
            <NeoBadge tone="teal">{pickText(currentLanguage, uiText.common.verifyChecksum)}</NeoBadge>
          </div>

          <div className="neo-hero__visual">
            <div className="neo-hero__mini neo-hero__mini--top-left">
              <Download size={28} color="var(--accent-teal)" />
            </div>
            <div className="neo-hero__mini neo-hero__mini--top-right">
              <Globe2 size={28} color="var(--accent-blue)" />
            </div>
            <div className="neo-hero__glyph">H</div>
          </div>
        </section>
      </div>

      <div className="section-shell neo-download-groups">
        {sections.map((project) => (
          <div key={project.slug} className="neo-table-card">
            <div className="neo-table-card__header">
              <div className="neo-project-card__header">
                <NeoIconBox tone="cyan" icon={<Download size={22} />} />
                <div>
                  <h3>{pickText(currentLanguage, project.name)}</h3>
                  <p>{pickText(currentLanguage, project.tagline)}</p>
                </div>
              </div>
              {project.releaseAssets[0] ? <NeoBadge tone="teal">{project.releaseAssets[0].version}</NeoBadge> : null}
            </div>
            <NeoTable<ProjectReleaseAsset>
              rowKey={(row) => `${row.label.en}-${row.version}`}
              rows={project.releaseAssets}
              columns={columns}
            />
          </div>
        ))}
      </div>

      <div className="section-shell">
        <NeoCard variant="glowing" className="neo-note-banner">
          <div className="neo-project-card__header">
            <NeoIconBox tone="success" icon={<ShieldCheck size={22} />} />
            <div>
              <h3>{currentLanguage === 'zh' ? '始终通过官方来源下载。' : currentLanguage === 'nl' ? 'Download altijd via officiële bronnen.' : 'Always download from official sources.'}</h3>
              <p>{currentLanguage === 'zh' ? '下载后请校验 SHA-256，并在发现问题时反馈。' : currentLanguage === 'nl' ? 'Controleer SHA-256 na het downloaden en meld problemen.' : 'Verify SHA-256 after downloading and report issues if anything looks wrong.'}</p>
            </div>
          </div>
          <a href="https://github.com/HarryHongyue" target="_blank" rel="noreferrer" className={neoButtonClass('primary')}>
            <Globe2 size={18} />
            {pickText(currentLanguage, uiText.common.githubReleases)}
          </a>
        </NeoCard>
      </div>
    </div>
  );
};

export default DownloadsPage;
