import React from 'react';
import { ArrowRight, Calculator, ChartLine, Download, ExternalLink, GitCompareArrows, Globe2, Lock, Palette, Puzzle, ShieldCheck } from 'lucide-react';
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

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

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
  const isSurpriseMe = project.slug === 'surpriseme';
  const pdfArchitectureNodes = [
    { title: currentLanguage === 'zh' ? '前端' : currentLanguage === 'nl' ? 'Frontend' : 'Frontend', body: currentLanguage === 'zh' ? '上传、状态反馈和结果查看界面。' : currentLanguage === 'nl' ? 'Uploads, status en resultaatweergave.' : 'Uploads, status feedback, and results review.' },
    { title: 'API Gateway', body: currentLanguage === 'zh' ? '负责路由、边界控制和请求限制。' : currentLanguage === 'nl' ? 'Verzorgt routing, grenzen en request-limieten.' : 'Handles routing, boundary control, and request limits.' },
    { title: currentLanguage === 'zh' ? '后端 API' : currentLanguage === 'nl' ? 'Backend API' : 'Backend API', body: currentLanguage === 'zh' ? '组织解析任务、模式选择和结果校验。' : currentLanguage === 'nl' ? 'Orkestreert parsing, modi en validatie.' : 'Coordinates parsing jobs, modes, and validation.' },
    { title: currentLanguage === 'zh' ? 'OCR / 提取管线' : currentLanguage === 'nl' ? 'OCR / extractiepijplijn' : 'OCR / Extraction Pipeline', body: currentLanguage === 'zh' ? '执行文字、表格和坐标驱动的提取流程。' : currentLanguage === 'nl' ? 'Voert tekst-, tabel- en coördinaatextractie uit.' : 'Runs text, table, and coordinate-aware extraction.' },
    { title: currentLanguage === 'zh' ? '存储层' : currentLanguage === 'nl' ? 'Opslaglaag' : 'Storage', body: currentLanguage === 'zh' ? '管理临时文件、派生输出和处理日志。' : currentLanguage === 'nl' ? 'Beheert tijdelijke bestanden, output en logs.' : 'Manages temporary files, derived outputs, and processing logs.' },
  ];
  const odeFeatureHighlights = [
    {
      title: currentLanguage === 'zh' ? '自定义方程输入' : currentLanguage === 'nl' ? 'Aangepaste vergelijking invoer' : 'Custom Equation Input',
      body: currentLanguage === 'zh' ? '使用直观的方程编辑器自由输入常微分方程，支持多种形式和阶数。' : currentLanguage === 'nl' ? 'Voer gewone differentiaalvergelijkingen vrij in met een intuïtieve editor, met ondersteuning voor meerdere vormen en ordes.' : 'Freely input ordinary differential equations with an intuitive equation editor, supporting multiple forms and orders.',
      icon: <GithubIcon size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '多种求解方法' : currentLanguage === 'nl' ? 'Meerdere oplossingsmethoden' : 'Multiple Solving Methods',
      body: currentLanguage === 'zh' ? '选择 Euler、Runge-Kutta、Adams-Bashforth 等数值方法求解方程。' : currentLanguage === 'nl' ? 'Kies uit numerieke methoden zoals Euler, Runge-Kutta en Adams-Bashforth.' : 'Choose from numerical methods including Euler, Runge-Kutta, Adams-Bashforth, and more.',
      icon: <Calculator size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '结果可视化' : currentLanguage === 'nl' ? 'Resultaatvisualisatie' : 'Result Visualization',
      body: currentLanguage === 'zh' ? '通过图表和绘图查看解曲线，适合学习、演示和结果分析。' : currentLanguage === 'nl' ? 'Bekijk oplossingscurves via grafieken voor leren, demonstratie en analyse.' : 'Use graphs and plots to inspect solution curves for learning, presentation, and analysis.',
      icon: <ChartLine size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '结果对比' : currentLanguage === 'nl' ? 'Resultaatvergelijking' : 'Result Comparison',
      body: currentLanguage === 'zh' ? '并排比较不同求解方法的结果，用于分析精度和性能差异。' : currentLanguage === 'nl' ? 'Vergelijk resultaten van verschillende methoden naast elkaar om nauwkeurigheid en prestaties te analyseren.' : 'Compare results from different methods side by side to analyze accuracy and performance differences.',
      icon: <GitCompareArrows size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '数据导出' : currentLanguage === 'nl' ? 'Data-export' : 'Data Export',
      body: currentLanguage === 'zh' ? '将结果导出为 CSV、PNG 等格式，方便后续分析或报告。' : currentLanguage === 'nl' ? 'Exporteer resultaten als CSV, PNG en andere formaten voor analyse of rapportage.' : 'Export results as CSV, PNG, and other formats for further analysis or reporting.',
      icon: <Download size={22} />,
    },
    {
      title: currentLanguage === 'zh' ? '开源软件' : currentLanguage === 'nl' ? 'Open source' : 'Open Source',
      body: currentLanguage === 'zh' ? '项目代码开放，可被学习、审查、定制和继续扩展。' : currentLanguage === 'nl' ? 'De code is open voor leren, beoordeling, aanpassing en verdere uitbreiding.' : 'The code is open for learning, review, customization, and continued extension.',
      icon: <GithubIcon size={22} />,
    },
  ];
  const odeInstallSteps = [
    currentLanguage === 'zh' ? '下载安装程序' : currentLanguage === 'nl' ? 'Download de installer' : 'Download the installer',
    currentLanguage === 'zh' ? '运行安装文件' : currentLanguage === 'nl' ? 'Voer het installatiebestand uit' : 'Run the installer file',
    currentLanguage === 'zh' ? '按照安装向导操作' : currentLanguage === 'nl' ? 'Volg de installatiewizard' : 'Follow the installation wizard',
    currentLanguage === 'zh' ? '启动 ODE Solver' : currentLanguage === 'nl' ? 'Start ODE Solver' : 'Launch ODE Solver',
  ];
  const odeVersionChanges = [
    currentLanguage === 'zh' ? 'ODE Solver 初始版本发布。' : currentLanguage === 'nl' ? 'Eerste release van ODE Solver.' : 'Initial release of ODE Solver.',
    currentLanguage === 'zh' ? '支持 Euler、Runge-Kutta 等求解方法。' : currentLanguage === 'nl' ? 'Ondersteuning voor Euler-, Runge-Kutta- en andere methoden.' : 'Support for Euler, Runge-Kutta, and related methods.',
    currentLanguage === 'zh' ? '提供解曲线的交互式可视化。' : currentLanguage === 'nl' ? 'Interactieve visualisatie van oplossingscurves.' : 'Interactive visualization of solution curves.',
    currentLanguage === 'zh' ? '支持将结果导出为 CSV 和 PNG 等格式。' : currentLanguage === 'nl' ? 'Export van resultaten naar CSV, PNG en vergelijkbare formaten.' : 'Export results to CSV, PNG, and similar formats.',
  ];
  const odeVersionHistory = [
    {
      version: '1.0.0',
      date: project.releaseAssets[0]?.releaseDate ?? '2025-07-05',
      changes: odeVersionChanges,
    },
    {
      version: '0.9.0',
      date: '2025-06-20',
      changes: [
        currentLanguage === 'zh' ? '用于测试的 Beta 版本发布。' : currentLanguage === 'nl' ? 'Bètarelease voor testen.' : 'Beta release for testing.',
        currentLanguage === 'zh' ? '提供基础 ODE 求解能力。' : currentLanguage === 'nl' ? 'Basisfunctionaliteit voor ODE-oplossing.' : 'Basic ODE solving capabilities.',
        currentLanguage === 'zh' ? '提供用于方程输入的简单界面。' : currentLanguage === 'nl' ? 'Eenvoudige UI voor vergelijkingsinvoer.' : 'Simple UI for equation input.',
      ],
    },
  ];
  const odePrivacyItems = [
    {
      title: currentLanguage === 'zh' ? '无数据收集' : currentLanguage === 'nl' ? 'Geen dataverzameling' : 'No Data Collection',
      body: currentLanguage === 'zh' ? '不收集个人信息、敏感数据或使用历史。' : currentLanguage === 'nl' ? 'Verzamelt geen persoonlijke informatie, gevoelige data of gebruiksgeschiedenis.' : 'No personal information, sensitive data, or usage history is collected.',
    },
    {
      title: currentLanguage === 'zh' ? '仅本地存储' : currentLanguage === 'nl' ? 'Alleen lokale opslag' : 'Local Storage Only',
      body: currentLanguage === 'zh' ? '设置和结果保存在本地设备中。' : currentLanguage === 'nl' ? 'Instellingen en resultaten blijven op het lokale apparaat.' : 'Settings and results stay on the local device.',
    },
    {
      title: currentLanguage === 'zh' ? '无第三方跟踪' : currentLanguage === 'nl' ? 'Geen third-party tracking' : 'No Third-Party Tracking',
      body: currentLanguage === 'zh' ? '不向外部服务共享求解数据。' : currentLanguage === 'nl' ? 'Deelt geen oplossingsdata met externe diensten.' : 'Solver data is not shared with external services.',
    },
  ];

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <Breadcrumbs />
      {!isOde ? (
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

      {isOde ? (
        <>
          <section className="section-shell ode-showcase-hero">
            <div className="ode-showcase-hero__inner">
              <h1 className="ode-showcase-hero__title">
                ODE <span>Solver</span>
              </h1>
              <p className="ode-showcase-hero__description">
                {currentLanguage === 'zh' ? '一款强大的应用程序，使用各种数值方法求解常微分方程。适合数学、工程和科学领域的学生、研究人员和专业人士使用。' : currentLanguage === 'nl' ? 'Een krachtige applicatie voor het oplossen van gewone differentiaalvergelijkingen met verschillende numerieke methoden. Perfect voor studenten, onderzoekers en professionals in wiskunde, techniek en wetenschap.' : 'A powerful application for solving ordinary differential equations using various numerical methods. Perfect for students, researchers, and professionals in mathematics, engineering, and science.'}
              </p>
              <div className="ode-showcase-hero__actions">
                <a href="#ode-download" className={`${neoButtonClass('primary')} ode-showcase-button ode-showcase-button--primary`}>
                  <Download size={18} />
                  {currentLanguage === 'zh' ? '立即下载' : currentLanguage === 'nl' ? 'Download nu' : 'Download Now'}
                </a>
                <a href={project.repoUrl ?? '#'} className={`${neoButtonClass('secondary')} ode-showcase-button`} target="_blank" rel="noreferrer">
                  <GithubIcon size={18} />
                  {currentLanguage === 'zh' ? '了解更多' : currentLanguage === 'nl' ? 'Meer informatie' : 'Learn More'}
                </a>
              </div>
            </div>
          </section>

          <section className="section-shell ode-showcase-section">
            <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '功能特点' : currentLanguage === 'nl' ? 'Functies' : 'Features'}</h2>
            <div className="ode-showcase-feature-grid">
              {odeFeatureHighlights.map((feature) => (
                <NeoCard key={feature.title} hoverable className="ode-showcase-feature-card">
                  <div className="ode-showcase-feature-card__icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </NeoCard>
              ))}
            </div>
          </section>

          <section id="ode-download" className="section-shell ode-showcase-section">
            <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}</h2>
            <p className="ode-showcase-section__subtitle">
              {currentLanguage === 'zh' ? '只需点击几下即可开始使用 ODE 求解器。适用于 Windows 系统。' : currentLanguage === 'nl' ? 'Begin met ODE Solver in slechts enkele klikken. Beschikbaar voor Windows.' : 'Get started with ODE Solver in just a few clicks. Available for Windows.'}
            </p>
            <NeoCard className="ode-showcase-download-card">
              <div className="ode-showcase-download-card__main">
                <a href={project.downloadUrl ?? project.repoUrl ?? '#'} className={`${neoButtonClass('primary')} ode-showcase-download-button`} target="_blank" rel="noreferrer">
                  <Download size={24} />
                  {currentLanguage === 'zh' ? 'Windows版下载' : currentLanguage === 'nl' ? 'Download voor Windows' : 'Download for Windows'}
                </a>
                <p>
                  {currentLanguage === 'zh' ? `版本 ${project.releaseAssets[0]?.version ?? '1.0.0'} | 稳定版` : currentLanguage === 'nl' ? `Versie ${project.releaseAssets[0]?.version ?? '1.0.0'} | Stabiele versie` : `Version ${project.releaseAssets[0]?.version ?? '1.0.0'} | Stable Version`}
                </p>
              </div>
              <div className="ode-showcase-install">
                <h3>{currentLanguage === 'zh' ? '安装说明' : currentLanguage === 'nl' ? 'Installatie-instructies' : 'Installation Instructions'}</h3>
                <div className="ode-showcase-install__grid">
                {odeInstallSteps.map((step, index) => (
                  <NeoCard key={step} variant="inset" className="ode-showcase-install-step">
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </NeoCard>
                ))}
                </div>
              </div>
            </NeoCard>
          </section>

          <section className="section-shell ode-showcase-section">
            <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '版本更新' : currentLanguage === 'nl' ? 'Versie-updates' : 'Version Updates'}</h2>
            <NeoCard className="ode-showcase-updates-card">
              <div className="ode-showcase-updates-card__current">
                <h3>{currentLanguage === 'zh' ? '当前版本' : currentLanguage === 'nl' ? 'Huidige versie' : 'Current Version'}: <span>{project.releaseAssets[0]?.version ?? '1.0.0'}</span></h3>
              </div>
              <div className="ode-showcase-version-list">
                {odeVersionHistory.map((version, index) => (
                  <div key={version.version} className={`ode-showcase-version ${index !== 0 ? 'ode-showcase-version--divided' : ''}`}>
                    <div className="ode-showcase-version__header">
                      <h4>{currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version'} {version.version}</h4>
                      <span>{currentLanguage === 'zh' ? `发布日期 ${version.date}` : currentLanguage === 'nl' ? `Uitgebracht op ${version.date}` : `Released on ${version.date}`}</span>
                    </div>
                    <ul className="ode-showcase-version__changes">
                      {version.changes.map((change) => (
                        <li key={change}>{change}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NeoCard>
          </section>

          <section className="section-shell ode-showcase-section ode-showcase-privacy">
            <div className="ode-showcase-privacy__heading">
              <ShieldCheck size={46} />
              <h2 className="ode-showcase-section__title">{currentLanguage === 'zh' ? '隐私政策' : currentLanguage === 'nl' ? 'Privacybeleid' : 'Privacy Policy'}</h2>
              <p>{currentLanguage === 'zh' ? '您的隐私对我们很重要。以下是 ODE 求解器如何处理您的数据。' : currentLanguage === 'nl' ? 'Uw privacy is belangrijk voor ons. Zo gaat ODE Solver met uw gegevens om.' : 'Your privacy is important to us. Here is how ODE Solver handles your data.'}</p>
            </div>
            <NeoCard variant="inset" className="ode-showcase-privacy-card">
              <div className="ode-showcase-privacy-grid">
                {odePrivacyItems.map((item) => (
                  <div key={item.title} className="ode-showcase-privacy-item">
                    <ShieldCheck size={30} />
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                ))}
              </div>
              <div className="ode-showcase-privacy-note">
                <p><strong>{currentLanguage === 'zh' ? 'ODE求解器不收集、存储、共享或上传任何个人信息、敏感数据或使用历史记录。' : currentLanguage === 'nl' ? 'ODE Solver verzamelt, bewaart, deelt of uploadt geen persoonlijke informatie, gevoelige data of gebruiksgeschiedenis.' : 'ODE Solver does not collect, store, share, or upload any personal information, sensitive data, or usage history.'}</strong></p>
                <p>{currentLanguage === 'zh' ? '所有设置和数据都保存在您的设备本地，仅用于应用程序的个性化设置。' : currentLanguage === 'nl' ? 'Alle instellingen en gegevens blijven lokaal op uw apparaat en worden alleen gebruikt voor personalisatie van de applicatie.' : 'All settings and data are kept locally on your device and used only for personalization of the application.'}</p>
                <p>{currentLanguage === 'zh' ? '最后更新' : currentLanguage === 'nl' ? 'Laatst bijgewerkt' : 'Last updated'}: {new Date().toLocaleDateString()}</p>
              </div>
            </NeoCard>
          </section>
        </>
      ) : null}

      {!isOde ? (
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

      {!isOde ? (
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
      ) : null}
    </div>
  );
};

export default ProjectDetailPage;
