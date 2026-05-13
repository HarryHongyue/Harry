import React from 'react';
import { Download, Globe2, Palette, Puzzle, ShieldCheck } from 'lucide-react';
import { FaChrome, FaSafari, FaFirefox, FaEdge } from 'react-icons/fa';
import { SiOpera, SiBrave, SiVivaldi } from 'react-icons/si';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const browserLinks = [
  { label: 'Safari', href: 'https://apps.apple.com/app/surpriseme-extension/id', tone: '#007aff', icon: <FaSafari size={32} /> },
  { label: 'Firefox', href: 'https://addons.mozilla.org/zh-CN/firefox/addon/surpriseme/', tone: '#FF7139', icon: <FaFirefox size={32} /> },
  { label: 'Edge', href: 'https://microsoftedge.microsoft.com/addons/detail/jippmlfidaidmnhlmphilhbmkdfhkebh', tone: '#0078D4', icon: <FaEdge size={32} /> },
  { label: 'Opera', href: 'https://addons.opera.com/extensions/details/surpriseme', tone: '#FF1B2D', icon: <SiOpera size={32} /> },
  { label: 'Brave', href: 'https://chromewebstore.google.com/detail/SurpriseMe/badgnmgiefjegajabklbanhekhldbocg', tone: '#FB542B', icon: <SiBrave size={32} /> },
  { label: 'Vivaldi', href: 'https://chromewebstore.google.com/detail/SurpriseMe/badgnmgiefjegajabklbanhekhldbocg', tone: '#EF3939', icon: <SiVivaldi size={32} /> },
  { label: 'Arc', href: 'https://chromewebstore.google.com/detail/SurpriseMe/badgnmgiefjegajabklbanhekhldbocg', tone: '#A4A6FF', icon: <img src="/project-assets/arc-logo.png" alt="Arc" style={{ width: 32, height: 32 }} /> },
];

const SurpriseMeShowcase: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const features = [
    { title: currentLanguage === 'zh' ? '自定义' : currentLanguage === 'nl' ? 'Aanpassing' : 'Customization', body: currentLanguage === 'zh' ? '从多种颜色中选择或创建自己的自定义颜色。' : currentLanguage === 'nl' ? 'Kies uit verschillende kleuren of maak je eigen aangepaste kleur.' : 'Choose from a variety of colors or create your own custom color.', icon: <Palette size={22} /> },
    { title: currentLanguage === 'zh' ? '简单易用' : currentLanguage === 'nl' ? 'Eenvoud' : 'Simplicity', body: currentLanguage === 'zh' ? '一键激活和停用。没有复杂的设置。' : currentLanguage === 'nl' ? 'Activeren en deactiveren met één klik. Geen ingewikkelde instellingen.' : 'One-click activation and deactivation. No complicated settings.', icon: <Puzzle size={22} /> },
    { title: currentLanguage === 'zh' ? '跨浏览器' : currentLanguage === 'nl' ? 'Cross-browser' : 'Cross-Browser', body: currentLanguage === 'zh' ? '适用于 Chrome、Firefox 和 Safari 浏览器。' : currentLanguage === 'nl' ? 'Beschikbaar voor Chrome-, Firefox- en Safari-browsers.' : 'Available for Chrome, Firefox, and Safari browsers.', icon: <FaChrome size={22} /> },
  ];
  const versionChanges = [
    currentLanguage === 'zh' ? 'SurpriseMe 浏览器扩展初始版本发布。' : currentLanguage === 'nl' ? 'Eerste release van de SurpriseMe browserextensie.' : 'Initial release of the SurpriseMe browser extension.',
    currentLanguage === 'zh' ? '支持为任何网页添加可自定义的彩色边框。' : currentLanguage === 'nl' ? 'Ondersteuning voor het toevoegen van aanpasbare gekleurde randen aan elke webpagina.' : 'Support for adding customizable colored borders to any webpage.',
    currentLanguage === 'zh' ? '支持多种颜色选择和自定义颜色创建。' : currentLanguage === 'nl' ? 'Ondersteuning voor verschillende kleurenkeuzes en aangepaste kleurencreatie.' : 'Support for multiple color choices and custom color creation.',
    currentLanguage === 'zh' ? '适用于 Chrome、Firefox、Safari 等主流浏览器。' : currentLanguage === 'nl' ? 'Beschikbaar voor Chrome, Firefox, Safari en andere populaire browsers.' : 'Available for Chrome, Firefox, Safari, and other popular browsers.',
  ];
  const versionHistory = [
    { version: 'v1.0.0', date: '2025-08-08', changes: versionChanges },
  ];

  return (
    <>
      <section className="section-shell surprise-showcase-hero">
        <div className="surprise-showcase-hero__inner">
          <div className="surprise-showcase-hero__content-wrapper">
            <h1 className="surprise-showcase-hero__title">Surprise<span>Me</span></h1>
            <p className="surprise-showcase-hero__description">
              {currentLanguage === 'zh' ? '一个简单的浏览器扩展，可为任何网页添加可自定义的彩色边框。非常适合截图、演示和区分不同环境。' : currentLanguage === 'nl' ? 'Een eenvoudige browserextensie die een aanpasbare gekleurde rand aan elke webpagina toevoegt.' : 'A simple browser extension that adds a customizable colored border to any webpage. Perfect for screenshots, presentations, and visual distinction between environments.'}
            </p>
            <div className="surprise-showcase-hero__actions">
              <a href="#surpriseme-download" className={`${neoButtonClass('primary')} surprise-showcase-button`}><Download size={18} />{currentLanguage === 'zh' ? '开始使用' : currentLanguage === 'nl' ? 'Start nu' : 'Download'}</a>
              <a href="https://github.com/HarryHongyue/SurpriseMe" className={`${neoButtonClass('secondary')} surprise-showcase-button`} target="_blank" rel="noreferrer"><GithubIcon size={18} />{currentLanguage === 'zh' ? '了解更多' : currentLanguage === 'nl' ? 'Meer informatie' : 'Learn More'}</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell surprise-showcase-section">
        <h2 className="surprise-showcase-section__title">{currentLanguage === 'zh' ? '功能特点' : currentLanguage === 'nl' ? 'Functies' : 'Features'}</h2>
        <div className="surprise-showcase-feature-grid">
          {features.map((feature) => (
            <NeoCard key={feature.title} hoverable className="surprise-showcase-feature-card">
              <div className="surprise-showcase-feature-card__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      <section id="surpriseme-download" className="section-shell surprise-showcase-section">
        <h2 className="surprise-showcase-section__title">{currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}</h2>
        <p className="surprise-showcase-section__subtitle">{currentLanguage === 'zh' ? '立即开始使用 SurpriseMe！只需几秒钟即可安装，适用于 Chrome 浏览器。' : currentLanguage === 'nl' ? 'Begin met SurpriseMe in slechts enkele klikken. Beschikbaar voor Chrome browser.' : 'Get started with SurpriseMe in just a few clicks. Available for Chrome browser.'}</p>
        <NeoCard className="surprise-showcase-download-card">
          <div className="surprise-showcase-download-main">
            <div><h3>{currentLanguage === 'zh' ? '添加到 Chrome' : currentLanguage === 'nl' ? 'Toevoegen aan Chrome' : 'Add to Chrome'}</h3><p>{currentLanguage === 'zh' ? '版本 v1.0.0 - 主要版本' : currentLanguage === 'nl' ? 'Versie v1.0.0 - Primaire Release' : 'Version v1.0.0 - Primary Release'}</p></div>
            <a href="https://chromewebstore.google.com/detail/SurpriseMe/badgnmgiefjegajabklbanhekhldbocg" className={`${neoButtonClass('primary')} surprise-showcase-download-button`} target="_blank" rel="noreferrer"><FaChrome size={20} />{currentLanguage === 'zh' ? '添加到 Chrome' : currentLanguage === 'nl' ? 'Toevoegen aan Chrome' : 'Add to Chrome'}</a>
          </div>
          <div className="surprise-showcase-browser-panel">
            <h4>{currentLanguage === 'zh' ? '可用于其他浏览器' : currentLanguage === 'nl' ? 'Beschikbaar voor andere browsers' : 'Available on Other Browsers'}</h4>
            <div className="surprise-showcase-browser-grid">
              {browserLinks.map((browser) => (
                <a key={browser.label} href={browser.href} className="surprise-showcase-browser-button" target="_blank" rel="noreferrer">
                  <span style={{ color: browser.tone }}>{browser.icon}</span>
                  <strong>{browser.label}</strong>
                </a>
              ))}
            </div>
          </div>
          <div className="surprise-showcase-manual-panel">
            <p>{currentLanguage === 'zh' ? '或直接下载扩展文件进行手动安装：' : currentLanguage === 'nl' ? 'Of download de extensiebestanden direct voor handmatige installatie:' : 'Or download the extension files directly for manual installation:'}</p>
            <div className="surprise-showcase-manual-actions">
              <a href="/SurpriseMe.crx" download className={neoButtonClass('secondary')}><Download size={18} />{currentLanguage === 'zh' ? '下载 .crx 文件' : currentLanguage === 'nl' ? 'Download .crx bestand' : 'Download .crx file'}</a>
              <a href="/SurpriseMe.zip" download className={neoButtonClass('secondary')}><Download size={18} />{currentLanguage === 'zh' ? '下载 .zip 文件' : currentLanguage === 'nl' ? 'Download .zip bestand' : 'Download .zip file'}</a>
            </div>
          </div>
        </NeoCard>
      </section>

      <section className="section-shell surprise-showcase-section">
        <h2 className="surprise-showcase-section__title">{currentLanguage === 'zh' ? '版本更新' : currentLanguage === 'nl' ? 'Versie-updates' : 'Version Updates'}</h2>
        <NeoCard className="surprise-showcase-updates-card">
          <div className="surprise-showcase-updates-card__current">
            <h3>{currentLanguage === 'zh' ? '当前版本' : currentLanguage === 'nl' ? 'Huidige versie' : 'Current Version'}: <span>v1.0.0</span></h3>
          </div>
          <div className="surprise-showcase-version-list">
            {versionHistory.map((version, index) => (
              <div key={version.version} className={`surprise-showcase-version ${index !== 0 ? 'surprise-showcase-version--divided' : ''}`}>
                <div className="surprise-showcase-version__header">
                  <h4>{currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version'} {version.version}</h4>
                  <span>{currentLanguage === 'zh' ? `发布日期 ${version.date}` : currentLanguage === 'nl' ? `Uitgebracht op ${version.date}` : `Released on ${version.date}`}</span>
                </div>
                <ul className="surprise-showcase-version__changes">
                  {version.changes.map((change) => <li key={change}>{change}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </NeoCard>
      </section>

      <section className="section-shell surprise-showcase-section surprise-showcase-privacy">
        <div className="surprise-showcase-privacy__heading"><ShieldCheck size={46} /><h2 className="surprise-showcase-section__title">{currentLanguage === 'zh' ? '隐私政策' : currentLanguage === 'nl' ? 'Privacybeleid' : 'Privacy Policy'}</h2><p>{currentLanguage === 'zh' ? '您的隐私对我们很重要。以下是 SurpriseMe 如何处理您的数据。' : currentLanguage === 'nl' ? 'Uw privacy is belangrijk voor ons. Zo gaat SurpriseMe met uw gegevens om.' : 'Your privacy is important to us. Here is how SurpriseMe handles your data.'}</p></div>
        <NeoCard variant="inset" className="surprise-showcase-privacy-card">
          <div className="surprise-showcase-privacy-note"><p><strong>{currentLanguage === 'zh' ? '此扩展（SurpriseMe）不收集、存储、共享或上传任何个人信息、敏感数据或浏览历史记录。' : currentLanguage === 'nl' ? 'Deze extensie (SurpriseMe) verzamelt, bewaart, deelt of uploadt geen persoonlijke informatie, gevoelige data of browsegeschiedenis.' : 'This extension (SurpriseMe) does not collect, store, share, or upload any personal information, sensitive data, or browsing history.'}</strong></p><p>{currentLanguage === 'zh' ? '所有设置和数据都保存在您的浏览器本地，仅用于扩展的个性化设置。' : currentLanguage === 'nl' ? 'Alle instellingen en gegevens blijven lokaal op uw browser en worden alleen gebruikt voor personalisatie van de extensie.' : 'All settings and data are kept locally in your browser and used only for personalization of the extension.'}</p><p>{currentLanguage === 'zh' ? '最后更新: 2026/5/13' : currentLanguage === 'nl' ? 'Laatst bijgewerkt: 2026/5/13' : 'Last updated: 2026/5/13'}</p></div>
        </NeoCard>
      </section>
    </>
  );
};

export default SurpriseMeShowcase;
