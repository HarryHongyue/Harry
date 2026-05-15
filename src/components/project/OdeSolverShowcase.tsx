import React, { useState, useEffect } from 'react';
import { Calculator, ChartLine, Download, GitCompareArrows, ShieldCheck } from 'lucide-react';
import type { Project } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectTechStackCards from './ProjectTechStackCards';
import { fetchReleaseManifest, getProjectVersionHistory, getLatestVersion, getLatestReleaseDate } from '../../utils/releaseManifest';

const odeSolverScreenshot = new URL('../../assets/images/ODE Solver/ODE Solver.PNG', import.meta.url).href;

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface OdeSolverShowcaseProps {
  project: Project;
}

const OdeSolverShowcase: React.FC<OdeSolverShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const [versionHistory, setVersionHistory] = useState<any[]>([]);
  const [latestVersion, setLatestVersion] = useState('');
  const [latestReleaseDate, setLatestReleaseDate] = useState('');

  useEffect(() => {
    fetchReleaseManifest().then(manifest => {
      setVersionHistory(getProjectVersionHistory(manifest, 'ode-solver'));
      setLatestVersion(getLatestVersion(manifest, 'ode-solver'));
      setLatestReleaseDate(getLatestReleaseDate(manifest, 'ode-solver'));
    });
  }, []);
  const featureHighlights = [
    { title: currentLanguage === 'zh' ? '自定义方程输入' : currentLanguage === 'nl' ? 'Aangepaste vergelijking invoer' : 'Custom Equation Input', body: currentLanguage === 'zh' ? '使用直观的方程编辑器自由输入常微分方程，支持多种形式和阶数。' : currentLanguage === 'nl' ? 'Voer gewone differentiaalvergelijkingen vrij in met een intuïtieve editor, met ondersteuning voor meerdere vormen en ordes.' : 'Freely input ordinary differential equations with an intuitive equation editor, supporting multiple forms and orders.', icon: <GithubIcon size={22} /> },
    { title: currentLanguage === 'zh' ? '多种求解方法' : currentLanguage === 'nl' ? 'Meerdere oplossingsmethoden' : 'Multiple Solving Methods', body: currentLanguage === 'zh' ? '选择 Euler、Runge-Kutta、Adams-Bashforth 等数值方法求解方程。' : currentLanguage === 'nl' ? 'Kies uit numerieke methoden zoals Euler, Runge-Kutta en Adams-Bashforth.' : 'Choose from numerical methods including Euler, Runge-Kutta, Adams-Bashforth, and more.', icon: <Calculator size={22} /> },
    { title: currentLanguage === 'zh' ? '结果可视化' : currentLanguage === 'nl' ? 'Resultaatvisualisatie' : 'Result Visualization', body: currentLanguage === 'zh' ? '通过图表和绘图查看解曲线，适合学习、演示和结果分析。' : currentLanguage === 'nl' ? 'Bekijk oplossingscurves via grafieken voor leren, demonstratie en analyse.' : 'Use graphs and plots to inspect solution curves for learning, presentation, and analysis.', icon: <ChartLine size={22} /> },
    { title: currentLanguage === 'zh' ? '结果对比' : currentLanguage === 'nl' ? 'Resultaatvergelijking' : 'Result Comparison', body: currentLanguage === 'zh' ? '并排比较不同求解方法的结果，用于分析精度和性能差异。' : currentLanguage === 'nl' ? 'Vergelijk resultaten van verschillende methoden naast elkaar om nauwkeurigheid en prestaties te analyseren.' : 'Compare results from different methods side by side to analyze accuracy and performance differences.', icon: <GitCompareArrows size={22} /> },
    { title: currentLanguage === 'zh' ? '数据导出' : currentLanguage === 'nl' ? 'Data-export' : 'Data Export', body: currentLanguage === 'zh' ? '将结果导出为 CSV、PNG 等格式，方便后续分析或报告。' : currentLanguage === 'nl' ? 'Exporteer resultaten als CSV, PNG en andere formaten voor analyse of rapportage.' : 'Export results as CSV, PNG, and other formats for further analysis or reporting.', icon: <Download size={22} /> },
    { title: currentLanguage === 'zh' ? '开源软件' : currentLanguage === 'nl' ? 'Open source' : 'Open Source', body: currentLanguage === 'zh' ? '项目代码开放，可被学习、审查、定制和继续扩展。' : currentLanguage === 'nl' ? 'De code is open voor leren, beoordeling, aanpassing en verdere uitbreiding.' : 'The code is open for learning, review, customization, and continued extension.', icon: <GithubIcon size={22} /> },
  ];
  const installSteps = [
    currentLanguage === 'zh' ? '下载安装程序' : currentLanguage === 'nl' ? 'Download de installer' : 'Download the installer',
    currentLanguage === 'zh' ? '运行安装文件' : currentLanguage === 'nl' ? 'Voer het installatiebestand uit' : 'Run the installer file',
    currentLanguage === 'zh' ? '按照安装向导操作' : currentLanguage === 'nl' ? 'Volg de installatiewizard' : 'Follow the installation wizard',
    currentLanguage === 'zh' ? '启动 ODE Solver' : currentLanguage === 'nl' ? 'Start ODE Solver' : 'Launch ODE Solver',
  ];
  const privacyItems = [
    { title: currentLanguage === 'zh' ? '无数据收集' : currentLanguage === 'nl' ? 'Geen dataverzameling' : 'No Data Collection', body: currentLanguage === 'zh' ? '不收集个人信息、敏感数据或使用历史。' : currentLanguage === 'nl' ? 'Verzamelt geen persoonlijke informatie, gevoelige data of gebruiksgeschiedenis.' : 'No personal information, sensitive data, or usage history is collected.' },
    { title: currentLanguage === 'zh' ? '仅本地存储' : currentLanguage === 'nl' ? 'Alleen lokale opslag' : 'Local Storage Only', body: currentLanguage === 'zh' ? '设置和结果保存在本地设备中。' : currentLanguage === 'nl' ? 'Instellingen en resultaten blijven op het lokale apparaat.' : 'Settings and results stay on the local device.' },
    { title: currentLanguage === 'zh' ? '无第三方跟踪' : currentLanguage === 'nl' ? 'Geen third-party tracking' : 'No Third-Party Tracking', body: currentLanguage === 'zh' ? '不向外部服务共享求解数据。' : currentLanguage === 'nl' ? 'Deelt geen oplossingsdata met externe diensten.' : 'Solver data is not shared with external services.' },
  ];

  return (
    <>
      <section className="section-shell ode-showcase-hero">
        <div className="ode-showcase-hero__inner">
          <div className="ode-showcase-hero__content">
            <h1 className="ode-showcase-hero__title">ODE <span>Solver</span></h1>
            <p className="ode-showcase-hero__description">{currentLanguage === 'zh' ? '一款强大的应用程序，使用各种数值方法求解常微分方程。适合数学、工程和科学领域的学生、研究人员和专业人士使用。' : currentLanguage === 'nl' ? 'Een krachtige applicatie voor het oplossen van gewone differentiaalvergelijkingen met verschillende numerieke methoden. Perfect voor studenten, onderzoekers en professionals in wiskunde, techniek en wetenschap.' : 'A powerful application for solving ordinary differential equations using various numerical methods. Perfect for students, researchers, and professionals in mathematics, engineering, and science.'}</p>
            <div className="ode-showcase-hero__actions">
              <a href="#ode-download" className={`${neoButtonClass('primary')} ode-showcase-button ode-showcase-button--primary`}><Download size={18} />{currentLanguage === 'zh' ? '立即下载' : currentLanguage === 'nl' ? 'Download nu' : 'Download Now'}</a>
              <a href={project.repoUrl ?? '#'} className={`${neoButtonClass('secondary')} ode-showcase-button`} target="_blank" rel="noreferrer"><GithubIcon size={18} />{currentLanguage === 'zh' ? '了解更多' : currentLanguage === 'nl' ? 'Meer informatie' : 'Learn More'}</a>
            </div>
          </div>
          <div className="ode-showcase-hero__visual" aria-hidden="true"><img src={odeSolverScreenshot} alt="ODE Solver Application" className="ode-showcase-hero__screenshot" /></div>
        </div>
      </section>

      <section className="section-shell ode-showcase-section">
        <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '功能特点' : currentLanguage === 'nl' ? 'Functies' : 'Features'}</h2>
        <div className="ode-showcase-feature-grid">{featureHighlights.map((feature) => <NeoCard key={feature.title} hoverable className="ode-showcase-feature-card"><div className="ode-showcase-feature-card__icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.body}</p></NeoCard>)}</div>
      </section>

      <section id="ode-download" className="section-shell ode-showcase-section">
        <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}</h2>
        <p className="ode-showcase-section__subtitle">{currentLanguage === 'zh' ? '只需点击几下即可开始使用 ODE 求解器。适用于 Windows 系统。' : currentLanguage === 'nl' ? 'Begin met ODE Solver in slechts enkele klikken. Beschikbaar voor Windows.' : 'Get started with ODE Solver in just a few clicks. Available for Windows.'}</p>
        <NeoCard className="ode-showcase-download-card"><div className="ode-showcase-download-card__main"><a href={project.downloadUrl ?? project.repoUrl ?? '#'} className={`${neoButtonClass('primary')} ode-showcase-download-button`} target="_blank" rel="noreferrer"><Download size={24} />{currentLanguage === 'zh' ? 'Windows版下载' : currentLanguage === 'nl' ? 'Download voor Windows' : 'Download for Windows'}</a><p>{currentLanguage === 'zh' ? `版本 ${latestVersion || project.releaseAssets[0]?.version || '1.0.0'} | 稳定版` : currentLanguage === 'nl' ? `Versie ${latestVersion || project.releaseAssets[0]?.version || '1.0.0'} | Stabiele versie` : `Version ${latestVersion || project.releaseAssets[0]?.version || '1.0.0'} | Stable Version`}</p></div><div className="ode-showcase-install"><h3>{currentLanguage === 'zh' ? '安装说明' : currentLanguage === 'nl' ? 'Installatie-instructies' : 'Installation Instructions'}</h3><div className="ode-showcase-install__grid">{installSteps.map((step, index) => <NeoCard key={step} variant="inset" className="ode-showcase-install-step"><span>{index + 1}</span><p>{step}</p></NeoCard>)}</div></div></NeoCard>
      </section>

      <section className="section-shell ode-showcase-section"><h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '版本更新' : currentLanguage === 'nl' ? 'Versie-updates' : 'Version Updates'}</h2><NeoCard className="ode-showcase-updates-card"><div className="ode-showcase-updates-card__current"><h3>{currentLanguage === 'zh' ? '当前版本' : currentLanguage === 'nl' ? 'Huidige versie' : 'Current Version'}: <span>{latestVersion || project.releaseAssets[0]?.version || '1.0.0'}</span></h3></div><div className="ode-showcase-version-list">{versionHistory.map((version: any, index: number) => <div key={version.version} className={`ode-showcase-version ${index !== 0 ? 'ode-showcase-version--divided' : ''}`}><div className="ode-showcase-version__header"><h4>{currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version'} {version.version}</h4><span>{currentLanguage === 'zh' ? `发布日期 ${version.date}` : currentLanguage === 'nl' ? `Uitgebracht op ${version.date}` : `Released on ${version.date}`}</span></div><ul className="ode-showcase-version__changes">{version.changes.map((change: string) => <li key={change}>{change}</li>)}</ul></div>)}</div></NeoCard></section>

      <section className="section-shell ode-showcase-section">
        <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '技术栈' : currentLanguage === 'nl' ? 'Tech Stack' : 'Tech Stack'}</h2>
        <NeoCard className="ode-showcase-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
        </NeoCard>
      </section>

      <section className="section-shell ode-showcase-section ode-showcase-privacy"><div className="ode-showcase-privacy__heading"><ShieldCheck size={46} /><h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '隐私政策' : currentLanguage === 'nl' ? 'Privacybeleid' : 'Privacy Policy'}</h2><p>{currentLanguage === 'zh' ? '您的隐私对我们很重要。以下是 ODE 求解器如何处理您的数据。' : currentLanguage === 'nl' ? 'Uw privacy is belangrijk voor ons. Zo gaat ODE Solver met uw gegevens om.' : 'Your privacy is important to us. Here is how ODE Solver handles your data.'}</p></div><NeoCard variant="inset" className="ode-showcase-privacy-card"><div className="ode-showcase-privacy-grid">{privacyItems.map((item) => <div key={item.title} className="ode-showcase-privacy-item"><ShieldCheck size={30} /><h3>{item.title}</h3><p>{item.body}</p></div>)}</div><div className="ode-showcase-privacy-note"><p><strong>{currentLanguage === 'zh' ? 'ODE求解器不收集、存储、共享或上传任何个人信息、敏感数据或使用历史记录。' : currentLanguage === 'nl' ? 'ODE Solver verzamelt, bewaart, deelt of uploadt geen persoonlijke informatie, gevoelige data of gebruiksgeschiedenis.' : 'ODE Solver does not collect, store, share, or upload any personal information, sensitive data, or usage history.'}</strong></p><p>{currentLanguage === 'zh' ? '所有设置和数据都保存在您的设备本地，仅用于应用程序的个性化设置。' : currentLanguage === 'nl' ? 'Alle instellingen en gegevens blijven lokaal op uw apparaat en worden alleen gebruikt voor personalisatie van de applicatie.' : 'All settings and data are kept locally on your device and used only for personalization of the application.'}</p><p>{currentLanguage === 'zh' ? '最后更新' : currentLanguage === 'nl' ? 'Laatst bijgewerkt' : 'Last updated'}: {new Date().toLocaleDateString()}</p></div></NeoCard></section>
    </>
  );
};

export default OdeSolverShowcase;
