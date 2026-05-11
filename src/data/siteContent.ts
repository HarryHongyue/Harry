import type { LocalizedText, SiteLocale } from '../types/project';

export type { LocalizedText, SiteLocale } from '../types/project';

export const pickText = (locale: string, value: LocalizedText): string => {
  const safeLocale = (locale in value ? locale : 'en') as SiteLocale;
  return value[safeLocale];
};

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });

export const uiText = {
  brand: l('Harry', 'Harry', 'Harry'),
  brandSub: l('personal showcase', '个人主展示站', 'persoonlijke showcase'),
  nav: {
    home: l('Home', '首页', 'Home'),
    about: l('About', '关于', 'Over'),
    projects: l('Projects', '项目', 'Projecten'),
    downloads: l('Downloads', '下载', 'Downloads'),
    deployment: l('Deployment', '部署', 'Deployment'),
    security: l('Security', '安全', 'Security'),
    contact: l('Contact', '联系', 'Contact'),
  },
  common: {
    viewProjects: l('View Projects', '查看项目', 'Bekijk projecten'),
    exploreArchitecture: l('Explore Architecture', '查看架构', 'Bekijk architectuur'),
    searchPlaceholder: l('Search by project, stack, or deployment...', '按项目、技术栈或部署方式搜索...', 'Zoek op project, stack of deployment...'),
    githubReleases: l('GitHub Releases', 'GitHub Releases', 'GitHub Releases'),
    officialMirrors: l('Official Mirrors', '官方镜像', 'Officiële mirrors'),
    verifyChecksum: l('For your security, verify all files using SHA-256 checksums.', '为保证安全，请在下载后校验 SHA-256。', 'Controleer voor je veiligheid alle bestanden met SHA-256-checksums.'),
    latestRelease: l('Latest Release', '最新版本', 'Laatste release'),
    learnMore: l('Learn More', '了解更多', 'Meer info'),
    download: l('Download', '下载', 'Download'),
    documentation: l('Documentation', '文档', 'Documentatie'),
    sendMessage: l('Send Message', '发送消息', 'Bericht verzenden'),
    availability: l('Availability', '可合作性', 'Beschikbaarheid'),
    collaboration: l('Collaboration', '合作方式', 'Samenwerking'),
    responseTime: l('Typical Response Time', '通常回复时间', 'Reactietijd'),
    secureByDesign: l('Secure by Design', '设计即安全', 'Secure by design'),
  },
  home: {
    eyebrow: l('Harry Personal Showcase', 'Harry Personal Showcase', 'Harry Personal Showcase'),
    subtitleEn: 'One Vision. Multiple Projects. Unified Ecosystem.',
    subtitleZh: '一个愿景，多重项目，统一生态。',
    body: l(
      'I build practical software across documents, deployment, data workflows, and polished frontend systems. This site is the unified entry point.',
      '我构建面向真实问题的软件系统，覆盖文档处理、部署架构、数据工作流和精致前端表达。这个网站是它们的统一入口。',
      'Ik bouw praktische software rond documenten, deployment, dataworkflows en verzorgde frontend-systemen. Deze site is de centrale ingang.',
    ),
    featuredTitle: l('Featured Projects', '精选项目', 'Uitgelichte projecten'),
    featuredBody: l('A compact view of the systems that define the portfolio right now.', '当前最能代表整个作品集的几个核心系统。', 'Een compacte blik op de systemen die dit portfolio nu definiëren.'),
    architectureTitle: l('Deployment Architecture', '部署架构', 'Deployment-architectuur'),
    architectureBody: l('A unified ecosystem where the main showcase coordinates routes, downloads, and project delivery.', '统一生态下，主展示站负责连接路由、下载和各个项目的交付方式。', 'Een verenigd ecosysteem waarin de hoofdshowcase routes, downloads en projectlevering coördineert.'),
    downloadsTitle: l('Latest Downloads', '最新下载', 'Nieuwste downloads'),
    downloadsBody: l('Structured release assets, guides, and documentation from across the ecosystem.', '来自整个生态中的安装包、指南和文档资源。', 'Gestructureerde releases, gidsen en documentatie uit het ecosysteem.'),
  },
  about: {
    eyebrow: l('About Harry', '关于 Harry', 'Over Harry'),
    title: l('Builder. Problem Solver. Engineer.', '构建者。问题解决者。工程师。', 'Bouwer. Probleemoplosser. Engineer.'),
    intro: l(
      'I enjoy turning messy product and engineering problems into clean systems that are easier to use, ship, and explain.',
      '我喜欢把复杂甚至混乱的产品和工程问题，整理成更清楚、更易交付、更容易解释的系统。',
      'Ik vind het leuk om rommelige product- en engineeringproblemen om te zetten in schone systemen die makkelijker te gebruiken, leveren en uitleggen zijn.',
    ),
    mission: l('My Mission', '我的目标', 'Mijn missie'),
    missionBody: l(
      'Build software that is practical, maintainable, and presented with enough clarity that people can trust it quickly.',
      '构建真正有用、可维护、并且表达足够清楚的软件，让人能够快速理解并信任它。',
      'Software bouwen die praktisch, onderhoudbaar en duidelijk genoeg gepresenteerd is zodat mensen het snel kunnen vertrouwen.',
    ),
    journey: l('My Journey', '我的成长路径', 'Mijn pad'),
    skills: l('Skills & Expertise', '技能与专长', 'Vaardigheden & expertise'),
    build: l('How I Build', '我如何构建', 'Hoe ik bouw'),
    cta: l('Want to see what I’ve built?', '想看看我做过什么？', 'Wil je zien wat ik heb gebouwd?'),
  },
  projects: {
    eyebrow: l('Projects', '项目', 'Projecten'),
    title: l('Projects shaped as systems.', '把项目当系统来讲。', 'Projecten als systemen.'),
    intro: l(
      'Every project card, download row, and detail page is generated from structured project data.',
      '这里的项目卡片、下载表和详情页都来自统一的结构化项目数据，而不是散落硬编码。',
      'Elke projectkaart, downloadrij en detailpagina wordt gegenereerd uit gestructureerde projectdata.',
    ),
    tableTitle: l('Projects at a Glance', '项目速览', 'Projecten in één oogopslag'),
  },
  downloads: {
    eyebrow: l('Downloads', '下载中心', 'Downloads'),
    title: l('Downloads', '下载中心', 'Downloads'),
    intro: l(
      'Release assets remain independent inside each project, but they are collected here for verification and fast access.',
      '发布资源依然归属于各自项目，但会在这里统一汇总，方便校验与下载。',
      'Release-assets blijven per project onafhankelijk, maar worden hier verzameld voor verificatie en snelle toegang.',
    ),
  },
  deployment: {
    eyebrow: l('Deployment', '部署', 'Deployment'),
    title: l('Built for a Unified Ecosystem', '为统一生态而构建', 'Gebouwd voor een verenigd ecosysteem'),
    intro: l(
      'The showcase, project apps, release assets, and service boundaries are designed to work together without collapsing into one monolith.',
      '主展示站、项目应用、下载资源和服务边界被设计成协同工作，但不会塌缩成一个难以维护的单体。',
      'De showcase, projectapps, release-assets en servicegrenzen zijn ontworpen om samen te werken zonder in één monoliet te vervallen.',
    ),
    componentsTitle: l('Components & Their Role', '组件与职责', 'Componenten en hun rol'),
  },
  security: {
    eyebrow: l('Security', '安全', 'Security'),
    title: l('Security Controls & Best Practices', '安全控制与最佳实践', 'Security controls & best practices'),
    intro: l(
      'Security is not a side note. It shapes routing, uploads, deployment, secrets handling, and how public demos are exposed.',
      '安全不是备注项，它决定路由设计、上传校验、部署结构、密钥管理，以及哪些演示应该公开。',
      'Security is geen voetnoot. Het bepaalt routing, uploads, deployment, secrets-beheer en wat publiek getoond mag worden.',
    ),
  },
  contact: {
    eyebrow: l('Get in Touch', '联系我', 'Neem contact op'),
    title: l('Let’s Build Something Useful', '一起做点真正有用的东西。', 'Laten we iets nuttigs bouwen'),
    intro: l(
      'I am open to meaningful collaborations, product engineering work, and system design discussions.',
      '我愿意参与有实际价值的合作、产品工程项目，以及系统设计讨论。',
      'Ik sta open voor zinvolle samenwerkingen, product engineering en systeemontwerp-gesprekken.',
    ),
  },
  footer: {
    body: l(
      'Building practical software solutions that feel polished, maintainable, and trustworthy.',
      '构建实用、精致、可维护且值得信赖的软件方案。',
      'Praktische softwareoplossingen bouwen die verzorgd, onderhoudbaar en betrouwbaar aanvoelen.',
    ),
  },
} as const;
