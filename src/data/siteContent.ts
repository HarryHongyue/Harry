import type { LocalizedText, SiteLocale } from '../types/project';

export type { LocalizedText, SiteLocale } from '../types/project';

export const pickText = (locale: string, value: LocalizedText): string => {
  const safeLocale = (locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale;
  return value[safeLocale];
};

export const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });

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
    home: l('Home', '首页', 'Home'),
    viewProjects: l('View Projects', '查看项目', 'Bekijk projecten'),
    contactMe: l('Contact Me', '联系我', 'Neem contact op'),
    exploreArchitecture: l('Explore Architecture', '查看架构', 'Bekijk architectuur'),
    searchPlaceholder: l('Search projects, categories, or tech stack...', '搜索项目、分类或技术栈', 'Zoek projecten, categorieën of tech stack'),
    githubReleases: l('GitHub Releases', 'GitHub Releases', 'GitHub Releases'),
    officialMirrors: l('Official Mirrors', '官方镜像', 'Officiële mirrors'),
    verifyChecksum: l('Verify every downloadable file with SHA-256 before installing it.', '下载安装前请先核验 SHA-256', 'Controleer elk downloadbaar bestand met SHA-256 voordat je het installeert.'),
    latestRelease: l('Latest Release', '最新版本', 'Laatste release'),
    learnMore: l('Learn More', '了解更多', 'Meer info'),
    download: l('Download', '下载', 'Download'),
    documentation: l('Documentation', '文档', 'Documentatie'),
    sendMessage: l('Send Message', '发送消息', 'Bericht verzenden'),
    availability: l('Availability', '可合作状态', 'Beschikbaarheid'),
    collaboration: l('Collaboration', '合作方式', 'Samenwerking'),
    responseTime: l('Typical Response Time', '通常回复时间', 'Reactietijd'),
    secureByDesign: l('Secure by Design', '设计即安全', 'Secure by design'),
    projectOverview: l('Projects at a Glance', '项目速览', 'Projecten in één oogopslag'),
    breadcrumbProjects: l('Projects', '项目', 'Projecten'),
    backToHome: l('Back Home', '返回首页', 'Terug naar home'),
  },
  home: {
    title: {
      en: 'Harry Personal Showcase',
      zh: 'Harry 个人主站',
      nl: 'Harry Persoonlijke Showcase',
    },
    subtitleEn: 'One Vision. Multiple Projects. Unified Ecosystem.',
    subtitleZh: '一个愿景 多重项目 统一生态',
    subtitleNl: 'Eén visie. Meerdere projecten. Eén ecosysteem.',
    body: l(
      'I build systems, tools, and product surfaces that are easier to use, ship, and trust. This site brings together the projects, releases, and engineering decisions behind that work.',
      '我做的不是单纯网页，而是可交付、可维护、能被人快速理解和信任的系统、工具与产品界面。这个网站把这些项目、发布资源和背后的工程思考集中到了一起。',
      'Ik bouw systemen, tools en productoppervlakken die makkelijker te gebruiken, leveren en vertrouwen zijn. Deze site brengt de projecten, releases en engineeringkeuzes daarachter samen.',
    ),
    featuredTitle: l('Selected Work', '重点项目', 'Geselecteerd werk'),
    featuredBody: l('The projects below define the current shape of Harry’s portfolio and long-term direction.', '下面这些项目决定了 Harry 当前作品集的核心轮廓和长期方向。', 'De onderstaande projecten bepalen de huidige vorm en langetermijnrichting van Harry’s portfolio.'),
    storyTitle: l('How I Built My Path', '我的学习与成长路径', 'Hoe ik mijn pad heb opgebouwd'),
    storyBody: l('A continuous route from H5 pages and WordPress practice into Java, Python, independent projects, TypeScript, Docker, Maven, SQL, graph theory, and AI systems.', '这条路径从 H5 页面和 WordPress 实践开始，逐步进入 Java、Python、独立项目开发、TypeScript、Docker、Maven、SQL、图论与 AI 系统。', 'Dit pad loopt van H5-pagina’s en WordPress-praktijk naar Java, Python, zelfstandige projecten, TypeScript, Docker, Maven, SQL, grafentheorie en AI-systemen.'),
    aboutTitle: l('About Harry', '关于 Harry', 'Over Harry'),
    aboutBody: l('Builder. Problem Solver. Engineer.', '构建者 问题解决者 工程师', 'Bouwer Probleemoplosser Engineer'),
  },
  projects: {
    title: l('Projects', '项目', 'Projecten'),
    intro: l('A structured project catalog with real logos, real delivery modes, and clearer categories.', '一个带真实 logo、真实交付方式和更清晰分类的项目目录。', 'Een gestructureerde projectcatalogus met echte logo’s, echte leveringsvormen en duidelijkere categorieën.'),
    tableTitle: l('Projects at a Glance', '项目速览', 'Projecten in één oogopslag'),
  },
  downloads: {
    title: l('Downloads', '下载中心', 'Downloads'),
    intro: l('Structured release assets, official links, and project-specific resources collected in one place.', '把安装包、官方链接和项目资源整理到一个地方，方便核验和快速访问。', 'Gestructureerde release-assets, officiële links en projectspecifieke resources verzameld op één plek.'),
  },
  contact: {
    title: l('Let’s Build Something Useful', '一起做点真正有用的东西', 'Laten we iets nuttigs bouwen'),
    intro: l(
      'I’m open to meaningful software work, product engineering, and collaboration around systems that need clarity, structure, and strong execution.',
      '我愿意参与真正有价值的软件项目、产品工程合作，以及那些需要更清晰结构与更强执行力的系统建设。',
      'Ik sta open voor zinvol softwarewerk, product engineering en samenwerking rond systemen die helderheid, structuur en sterke uitvoering nodig hebben.',
    ),
  },
  footer: {
    body: l('Building practical software systems with clarity, polish, and long-term maintainability.', '构建清晰、耐用、可维护的软件系统。', 'Praktische softwaresystemen bouwen met helderheid, afwerking en onderhoudbaarheid op lange termijn.'),
  },
} as const;
