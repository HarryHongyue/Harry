import React, { useState } from 'react';
import { Database, Download, FileSearch, FolderOpen, ShieldCheck } from 'lucide-react';
import type { Project } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectTechStackCards from './ProjectTechStackCards';

const certificateScreenshots = [
  new URL('../../assets/images/计量证书管理系统/证书1.PNG', import.meta.url).href,
  new URL('../../assets/images/计量证书管理系统/证书2.PNG', import.meta.url).href,
  new URL('../../assets/images/计量证书管理系统/证书3.PNG', import.meta.url).href,
];

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface MetrologyCertificateShowcaseProps {
  project: Project;
}

const MetrologyCertificateShowcase: React.FC<MetrologyCertificateShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const latestRelease = project.releaseAssets[0];
  const version = latestRelease?.version ?? 'v1.0.0';
  const releaseDate = latestRelease?.releaseDate ?? '2026-05-11';
  const features = [
    {
      title: currentLanguage === 'zh' ? '证书记录管理' : currentLanguage === 'nl' ? 'Certificaatbeheer' : 'Certificate Record Management',
      body: currentLanguage === 'zh' ? '围绕计量证书的新增、编辑、查询和维护构建完整桌面工作流。' : currentLanguage === 'nl' ? 'Bouwt een volledige desktopworkflow rond toevoegen, bewerken, zoeken en onderhouden van meetcertificaten.' : 'A complete desktop workflow for creating, editing, searching, and maintaining metrology certificate records.',
      icon: <FileSearch size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '附件与归档' : currentLanguage === 'nl' ? 'Bijlagen en archief' : 'Attachments and Archive',
      body: currentLanguage === 'zh' ? '将证书文件、附件和业务记录放在同一个可追踪的管理界面中。' : currentLanguage === 'nl' ? 'Brengt certificaatbestanden, bijlagen en bedrijfsrecords samen in één traceerbare beheerinterface.' : 'Keeps certificate files, attachments, and business records together in one traceable management interface.',
      icon: <FolderOpen size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '本地持久化' : currentLanguage === 'nl' ? 'Lokale persistentie' : 'Local Persistence',
      body: currentLanguage === 'zh' ? '面向办公室场景，使用本地数据存储和安装包交付保证稳定可用。' : currentLanguage === 'nl' ? 'Ontworpen voor kantoorwerk met lokale opslag en installerdistributie voor betrouwbaar gebruik.' : 'Designed for office workflows with local storage and installer-based delivery for reliable use.',
      icon: <Database size={22} />,
    },
  ];
  const versionChanges = [
    currentLanguage === 'zh' ? '计量证书管理系统初始版本发布。' : currentLanguage === 'nl' ? 'Eerste release van het meetcertificaatbeheersysteem.' : 'Initial release of the metrology certificate management system.',
    currentLanguage === 'zh' ? '支持证书的新增、编辑、查询和维护功能。' : currentLanguage === 'nl' ? 'Ondersteuning voor toevoegen, bewerken, zoeken en onderhouden van certificaten.' : 'Support for creating, editing, searching, and maintaining certificates.',
    currentLanguage === 'zh' ? '支持证书附件的本地存储和管理。' : currentLanguage === 'nl' ? 'Ondersteuning voor lokale opslag en beheer van certificaatbijlagen.' : 'Support for local storage and management of certificate attachments.',
    currentLanguage === 'zh' ? '提供桌面安装包交付，支持Windows系统。' : currentLanguage === 'nl' ? 'Desktop-installatiepakket beschikbaar voor Windows.' : 'Desktop installer package available for Windows.',
  ];
  const versionHistory = [
    { version, date: releaseDate, changes: versionChanges },
  ];
  const handleScreenshotMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - rect.left) / rect.width;
    setActiveScreenshot(Math.min(2, Math.max(0, Math.floor(ratio * 3))));
  };

  return (
    <>
      <section className="section-shell metrology-showcase-hero">
        <div className="metrology-showcase-hero__inner">
          <div className="metrology-showcase-hero__content">
            <h1 className="metrology-showcase-hero__title">
              {currentLanguage === 'zh' ? '计量证书' : currentLanguage === 'nl' ? 'Meetcertificaat' : 'Metrology'} <span>{currentLanguage === 'zh' ? '管理系统' : currentLanguage === 'nl' ? 'Beheersysteem' : 'Certificate System'}</span>
            </h1>
            <p className="metrology-showcase-hero__description">
              {currentLanguage === 'zh' ? '一个面向真实办公室流程的 JavaFX 桌面应用，用于管理计量证书、附件、本地数据和安装包交付。它不像烟花一样只闪一下，而是像文件柜一样稳定地承载每天的证书管理工作。' : currentLanguage === 'nl' ? 'Een JavaFX-desktopapp voor echte kantoorprocessen: meetcertificaten, bijlagen, lokale data en installerdistributie in één stabiele workflow.' : 'A JavaFX desktop application built for real office workflows: metrology certificates, attachments, local data, and installer delivery in one reliable management surface.'}
            </p>
            <div className="metrology-showcase-hero__actions">
              <a href="#metrology-download" className={`${neoButtonClass('primary')} metrology-showcase-button`}><Download size={18} />{currentLanguage === 'zh' ? '立即下载' : currentLanguage === 'nl' ? 'Download nu' : 'Download Now'}</a>
              <a href="https://github.com/HarryHongyue" className={`${neoButtonClass('secondary')} metrology-showcase-button`} target="_blank" rel="noreferrer"><GithubIcon size={18} />{currentLanguage === 'zh' ? '了解更多' : currentLanguage === 'nl' ? 'Meer informatie' : 'Learn More'}</a>
            </div>
          </div>
          <div className={`metrology-showcase-hero__visual metrology-showcase-hero__visual--active-${activeScreenshot}`} aria-label="Metrology Certificate Management System screenshots" onMouseMove={handleScreenshotMouseMove} onMouseLeave={() => setActiveScreenshot(0)}>
            {certificateScreenshots.map((src, index) => (
              <img key={src} src={src} alt={`Metrology certificate management screenshot ${index + 1}`} className={`metrology-showcase-hero__screenshot metrology-showcase-hero__screenshot--${index + 1}`} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell metrology-showcase-section">
        <h2 className="metrology-showcase-section__title">{currentLanguage === 'zh' ? '功能特点' : currentLanguage === 'nl' ? 'Functies' : 'Features'}</h2>
        <div className="metrology-showcase-feature-grid">
          {features.map((feature) => (
            <NeoCard key={feature.title} hoverable className="metrology-showcase-feature-card">
              <div className="metrology-showcase-feature-card__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      <section id="metrology-download" className="section-shell metrology-showcase-section">
        <h2 className="metrology-showcase-section__title">{currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}</h2>
        <p className="metrology-showcase-section__subtitle">
          {currentLanguage === 'zh' ? '获取 Windows 安装入口，把计量证书管理系统安装到本地办公环境中使用。' : currentLanguage === 'nl' ? 'Download de Windows-installer en gebruik het systeem lokaal in de kantooromgeving.' : 'Download the Windows installer and use the certificate management system locally in an office environment.'}
        </p>
        <NeoCard className="metrology-showcase-download-card">
          <div className="metrology-showcase-download-card__main">
            <a href="/downloads" className={`${neoButtonClass('primary')} metrology-showcase-download-button`}>
              <Download size={24} />
              {currentLanguage === 'zh' ? 'Windows版下载' : currentLanguage === 'nl' ? 'Download voor Windows' : 'Download for Windows'}
            </a>
            <p>{currentLanguage === 'zh' ? `版本 ${version} | 本地桌面版` : currentLanguage === 'nl' ? `Versie ${version} | Lokale desktopversie` : `Version ${version} | Local Desktop Edition`}</p>
          </div>
        </NeoCard>
      </section>

      <section className="section-shell metrology-showcase-section">
        <h2 className="metrology-showcase-section__title">{currentLanguage === 'zh' ? '版本更新' : currentLanguage === 'nl' ? 'Versie-updates' : 'Version Updates'}</h2>
        <NeoCard className="metrology-showcase-updates-card">
          <div className="metrology-showcase-updates-card__current">
            <h3>{currentLanguage === 'zh' ? '当前版本' : currentLanguage === 'nl' ? 'Huidige versie' : 'Current Version'}: <span>{version}</span></h3>
          </div>
          <div className="metrology-showcase-version-list">
            {versionHistory.map((version, index) => (
              <div key={version.version} className={`metrology-showcase-version ${index !== 0 ? 'metrology-showcase-version--divided' : ''}`}>
                <div className="metrology-showcase-version__header">
                  <h4>{currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version'} {version.version}</h4>
                  <span>{currentLanguage === 'zh' ? `发布日期 ${version.date}` : currentLanguage === 'nl' ? `Uitgebracht op ${version.date}` : `Released on ${version.date}`}</span>
                </div>
                <ul className="metrology-showcase-version__changes">
                  {version.changes.map((change) => <li key={change}>{change}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </NeoCard>
      </section>

      <section className="section-shell metrology-showcase-section">
        <h2 className="metrology-showcase-section__title">{currentLanguage === 'zh' ? '技术栈' : currentLanguage === 'nl' ? 'Tech Stack' : 'Tech Stack'}</h2>
        <NeoCard className="metrology-showcase-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
        </NeoCard>
      </section>

      <section className="section-shell metrology-showcase-section metrology-showcase-privacy">
        <div className="metrology-showcase-privacy__heading">
          <ShieldCheck size={46} />
          <h2 className="metrology-showcase-section__title">{currentLanguage === 'zh' ? '本地与安全' : currentLanguage === 'nl' ? 'Lokaal en veilig' : 'Local and Secure'}</h2>
          <p>{currentLanguage === 'zh' ? '系统定位是本地桌面工具，核心数据处理留在用户自己的办公环境里。' : currentLanguage === 'nl' ? 'Het systeem is een lokale desktoptool, waarbij kerngegevens binnen de eigen kantooromgeving blijven.' : 'The system is positioned as a local desktop tool, keeping core data handling inside the user’s own office environment.'}</p>
        </div>
        <NeoCard variant="inset" className="metrology-showcase-privacy-card">
          <div className="metrology-showcase-privacy-note">
            <p><strong>{currentLanguage === 'zh' ? '证书数据、附件和搜索记录以本地管理为核心，不依赖远程后台服务。' : currentLanguage === 'nl' ? 'Certificaatdata, bijlagen en zoekrecords zijn gericht op lokaal beheer zonder externe backend.' : 'Certificate data, attachments, and search records are centered around local management without requiring a remote backend.'}</strong></p>
            <p>{currentLanguage === 'zh' ? '后续重点可以继续增强备份、导出、审计可见性和安装包交付体验。' : currentLanguage === 'nl' ? 'Vervolgverbeteringen kunnen zich richten op back-up, export, audit-zichtbaarheid en installerervaring.' : 'Future improvements can focus on backup, export, audit visibility, and installer delivery experience.'}</p>
            <p>{currentLanguage === 'zh' ? '最后更新' : currentLanguage === 'nl' ? 'Laatst bijgewerkt' : 'Last updated'}: {new Date().toLocaleDateString()}</p>
          </div>
        </NeoCard>
      </section>
    </>
  );
};

export default MetrologyCertificateShowcase;
