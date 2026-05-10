// 导入页面翻译文件
import homeTranslationsEn from '../locales/home/en.json';
import homeTranslationsZh from '../locales/home/zh.json';
import homeTranslationsNl from '../locales/home/nl.json';

import downloadsTranslationsEn from '../locales/downloads/en.json';
import downloadsTranslationsZh from '../locales/downloads/zh.json';
import downloadsTranslationsNl from '../locales/downloads/nl.json';

import securityTranslationsEn from '../locales/security/en.json';
import securityTranslationsZh from '../locales/security/zh.json';
import securityTranslationsNl from '../locales/security/nl.json';

import aboutTranslationsEn from '../locales/about/en.json';
import aboutTranslationsZh from '../locales/about/zh.json';
import aboutTranslationsNl from '../locales/about/nl.json';

import projectsTranslationsEn from '../locales/projects/en.json';
import projectsTranslationsZh from '../locales/projects/zh.json';
import projectsTranslationsNl from '../locales/projects/nl.json';

import contactTranslationsEn from '../locales/contact/en.json';
import contactTranslationsZh from '../locales/contact/zh.json';
import contactTranslationsNl from '../locales/contact/nl.json';

// 合并所有页面的翻译
const pageTranslations = {
  en: {
    ...homeTranslationsEn,
    ...downloadsTranslationsEn,
    ...securityTranslationsEn,
    ...aboutTranslationsEn,
    ...projectsTranslationsEn,
    ...contactTranslationsEn,
  },
  zh: {
    ...homeTranslationsZh,
    ...downloadsTranslationsZh,
    ...securityTranslationsZh,
    ...aboutTranslationsZh,
    ...projectsTranslationsZh,
    ...contactTranslationsZh,
  },
  nl: {
    ...homeTranslationsNl,
    ...downloadsTranslationsNl,
    ...securityTranslationsNl,
    ...aboutTranslationsNl,
    ...projectsTranslationsNl,
    ...contactTranslationsNl,
  },
};

export interface Translations {
  // 导航
  home: string;
  about: string;
  projects: string;
  downloads: string;
  security: string;
  skills: string;
  contact: string;
  
  // HomePage
  mainShowcaseShell: string;
  onePersonalSiteManyProjects: string;
  mainShowcaseDescription: string;
  whatThisSiteCoordinates: string;
  projectCatalogAndDetailPages: string;
  githubDemoApiDownloadLinks: string;
  oracleVmDeploymentGuidance: string;
  securityChecklistForUploadHeavyApis: string;
  featuredProjects: string;
  browseAllProjects: string;
  
  // DownloadsPage
  releaseAssets: string;
  downloadsDescription: string;
  noReleaseAssetsYet: string;
  noReleaseAssetsDescription: string;
  projectAsset: string;
  platform: string;
  version: string;
  size: string;
  checksum: string;
  link: string;
  open: string;
  downloadPolicy: string;
  downloadPolicyDescription: string;
  
  // SecurityPage
  securityBaseline: string;
  securityDescription: string;
  serverSecurity: string;
  serverSecurity1: string;
  serverSecurity2: string;
  serverSecurity3: string;
  serverSecurity4: string;
  serverSecurity5: string;
  reverseProxySecurity: string;
  reverseProxySecurity1: string;
  reverseProxySecurity2: string;
  reverseProxySecurity3: string;
  reverseProxySecurity4: string;
  reverseProxySecurity5: string;
  uploadApiSecurity: string;
  uploadApiSecurity1: string;
  uploadApiSecurity2: string;
  uploadApiSecurity3: string;
  uploadApiSecurity4: string;
  uploadApiSecurity5: string;
  uploadApiSecurity6: string;
  uploadApiSecurity7: string;
  uploadApiSecurity8: string;
  uploadApiSecurity9: string;
  secrets: string;
  secrets1: string;
  secrets2: string;
  secrets3: string;
  downloadSafety: string;
  downloadSafety1: string;
  downloadSafety2: string;
  downloadSafety3: string;
  
  // AboutPage
  aboutName: string;
  aboutPageDescription: string;
  
  // ProjectsPage
  projectCatalog: string;
  projectsPageDescription: string;
  
  // ContactPage
  contactPageTitle: string;
  contactPageDescription: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  heroDescription: string;
  heroHighlight: string;
  viewMyWork: string;
  contactMe: string;
  exploreProjects: string;
  openDownloads: string;
  
  // About
  aboutTitle: string;
  aboutDescription1: string;
  aboutDescription2: string;
  aboutDescription3: string;
  aboutEducation: string;
  aboutLocation: string;
  aboutExperience: string;
  
  // Projects
  projectsTitle: string;
  projectsDescription: string;
  projectsAll: string;
  projectsWeb: string;
  projectsMobile: string;
  projectsOther: string;
  viewDetails: string;
  backendRequired: string;
  staticNoBackend: string;
  search: string;
  searchPlaceholder: string;
  category: string;
  allCategories: string;
  status: string;
  allStatuses: string;
  projectFound: string;
  projectsFound: string;
  noBackendInHarry: string;
  unifiedHarryWorkflow: string;
  unifiedHarryWorkflowDescription: string;
  overview: string;
  projectFacts: string;
  repository: string;
  publicUrl: string;
  apiBase: string;
  reverseProxyPath: string;
  notPublishedYet: string;
  notRequired: string;
  links: string;
  download: string;
  deploymentNotes: string;
  deploymentNotesPlaceholder: string;
  securityNotes: string;
  securityNotesPlaceholder: string;
  backToProjects: string;
  openAppRoute: string;
  
  // Deployment types
  deploymentType_static_site: string;
  deploymentType_static_site_plus_api: string;
  deploymentType_desktop_release: string;
  deploymentType_browser_extension_release: string;
  deploymentType_reference_only: string;
  
  // Skills
  skillsTitle: string;
  skillsDescription: string;
  skillsProgramming: string;
  skillsFrameworks: string;
  skillsTools: string;
  
  // Contact
  contactTitle: string;
  contactDescription: string;
  contactEmail: string;
  contactPhone: string;
  contactLocation: string;
  contactSocial: string;
  contactName: string;
  contactSubject: string;
  contactMessage: string;
  contactSend: string;
  contactSending: string;
  contactSuccess: string;
  contactEmailValue: string;
  contactPhoneValue: string;
  contactLocationValue: string;
  
  // Footer
  footerTagline: string;
  footerNavigation: string;
  footerConnect: string;
  footerLocation: string;
  footerEmail: string;
  footerCopyright: string;
  footerResources: string;
  footerProjectOverview: string;
  footerProjectLinks: string;
  footerHarryRepo: string;
  footerPdfReader: string;
  footerOdeSolver: string;
  footerSurpriseMe: string;
  footerIndependentProjects: string;
}

export const translations: Record<string, Translations> = {
  en: {
    ...pageTranslations.en,
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    downloads: 'Downloads',
    security: 'Security',
    skills: 'Skills',
    contact: 'Contact',
    mainShowcaseShell: 'Main showcase shell',
    onePersonalSiteManyProjects: 'One personal site, many independent projects.',
    mainShowcaseDescription: 'Harry is now the unified entry point for project introductions, demo links, release downloads, deployment notes, and security baselines. Each project keeps its own repository and deployment lifecycle.',
    whatThisSiteCoordinates: 'What this site coordinates',
    projectCatalogAndDetailPages: 'Project catalog and detail pages',
    githubDemoApiDownloadLinks: 'GitHub, demo, API, and download links',
    oracleVmDeploymentGuidance: 'Oracle VM reverse proxy deployment guidance',
    securityChecklistForUploadHeavyApis: 'Security checklist for upload-heavy APIs',
    featuredProjects: 'Featured Projects',
    browseAllProjects: 'Browse all projects',
    releaseAssets: 'Release assets',
    downloadsDescription: 'Aggregated installers, extension packages, version placeholders, and checksum slots from the project data layer.',
    noReleaseAssetsYet: 'No release assets yet',
    noReleaseAssetsDescription: 'Download entries will appear here once projects publish installers, extension packages, or release files.',
    projectAsset: 'Project / Asset',
    platform: 'Platform',
    version: 'Version',
    size: 'Size',
    checksum: 'Checksum',
    link: 'Link',
    open: 'Open',
    downloadPolicy: 'Download Policy',
    downloadPolicyDescription: 'Installers and extension packages should be published through GitHub Releases or the first-party downloads route. Harry stores metadata and links only, not long-lived binary packages.',
    securityBaseline: 'Security baseline',
    securityDescription: 'A practical baseline for the personal site, reverse proxy, Docker services, downloads, secrets, and PDF upload APIs.',
    serverSecurity: 'Server Security',
    serverSecurity1: 'Open only ports 22, 80, and 443.',
    serverSecurity2: 'Use SSH keys only; disable password login.',
    serverSecurity3: 'Disable root SSH login and deploy with a normal user.',
    serverSecurity4: 'Enable a firewall such as ufw.',
    serverSecurity5: 'Apply system updates regularly.',
    reverseProxySecurity: 'Reverse Proxy Security',
    reverseProxySecurity1: 'Route all public traffic through HTTPS.',
    reverseProxySecurity2: 'Keep backend containers off public ports.',
    reverseProxySecurity3: 'Use Caddy or Nginx as the only public entry point.',
    reverseProxySecurity4: 'Set upload size limits before requests reach APIs.',
    reverseProxySecurity5: 'Add basic rate limiting for public API paths.',
    uploadApiSecurity: 'Upload API Security',
    uploadApiSecurity1: 'Limit PDF upload size for PDF Reader and Aircargo EDI.',
    uploadApiSecurity2: 'Validate extension and MIME type.',
    uploadApiSecurity3: 'Never trust user-supplied filenames.',
    uploadApiSecurity4: 'Use UUID or session-isolated temporary directories.',
    uploadApiSecurity5: 'Clean temporary files after each request.',
    uploadApiSecurity6: 'Use production CORS allowlists, not wildcard origins.',
    uploadApiSecurity7: 'Do not leak internal paths or stack traces in errors.',
    uploadApiSecurity8: 'Do not log sensitive file contents.',
    uploadApiSecurity9: 'Run containers as non-root when practical.',
    secrets: 'Secrets',
    secrets1: 'Do not commit .env files.',
    secrets2: 'Keep GitHub tokens, API keys, and database passwords out of code.',
    secrets3: 'Provide .env.example for required variables.',
    downloadSafety: 'Download Safety',
    downloadSafety1: 'Publish installers through GitHub Releases or object storage.',
    downloadSafety2: 'Show version, platform, file size, and sha256 on download pages.',
    downloadSafety3: 'Do not keep exe, zip, or dmg files as long-lived Git assets in Harry.',
    aboutName: 'Harry Hongyue',
    aboutPageDescription: 'Software developer focused on practical web apps, document processing, desktop tools, and maintainable deployment workflows.',
    projectCatalog: 'Project catalog',
    projectsPageDescription: 'A searchable overview of independent repositories connected by the Harry main site.',
    contactPageTitle: 'Get in touch',
    contactPageDescription: 'For project collaboration, deployment questions, or release planning, use the contact links below.',
    heroTitle: "Hello, I'm Harry Ji",
    heroSubtitle: 'Personal site, project catalog, downloads, and deployment notes',
    heroDescription: 'A lightweight main shell for Harry Hongyue\'s independent projects: PDF processing, logistics EDI, desktop software, browser extensions, and architecture references.',
    heroHighlight: 'Project Showcase',
    viewMyWork: 'View My Work',
    contactMe: 'Contact Me',
    exploreProjects: 'Explore projects',
    openDownloads: 'Open downloads',
    aboutTitle: 'About Me',
    aboutDescription1: 'I build practical software across web apps, document processing, desktop tools, and browser extensions.',
    aboutDescription2: 'My current focus is turning independent repositories into a clear product ecosystem with understandable deployment and security boundaries.',
    aboutDescription3: 'This site now focuses on project clarity: what each repository does, how it is deployed, where users can download releases, and which security guardrails matter.',
    aboutEducation: 'Education: Computer Science',
    aboutLocation: 'Location: Maastricht, NL / Remote',
    aboutExperience: 'Experience: Full-stack and product-oriented development',
    projectsTitle: 'Projects',
    projectsDescription: 'Independent repositories presented through one lightweight showcase.',
    projectsAll: 'All',
    projectsWeb: 'Web',
    projectsMobile: 'Mobile',
    projectsOther: 'Other',
    viewDetails: 'View Details',
    backendRequired: 'Backend required',
    staticNoBackend: 'Static / no backend',
    search: 'Search',
    searchPlaceholder: 'Search name, description, or tech stack',
    category: 'Category',
    allCategories: 'All categories',
    status: 'Status',
    allStatuses: 'All statuses',
    projectFound: 'project found',
    projectsFound: 'projects found',
    noBackendInHarry: 'No backend in Harry',
    unifiedHarryWorkflow: 'Unified Harry workflow',
    unifiedHarryWorkflowDescription: 'This page borrows the original product direction while using Harry\'s shared shell, theme, routing, and release metadata.',
    overview: 'Overview',
    projectFacts: 'Project Facts',
    repository: 'Repository',
    publicUrl: 'Public URL',
    apiBase: 'API base',
    reverseProxyPath: 'Reverse proxy path',
    notPublishedYet: 'Not published yet',
    notRequired: 'Not required',
    links: 'Links',
    download: 'Download',
    deploymentNotes: 'Deployment Notes',
    deploymentNotesPlaceholder: 'Deployment notes will be added as the project matures.',
    securityNotes: 'Security Notes',
    securityNotesPlaceholder: 'Follow the shared security baseline for public deployment.',
    backToProjects: 'Back to projects',
    openAppRoute: 'Open app route',
    deploymentType_static_site: 'Static site',
    deploymentType_static_site_plus_api: 'Static site + API',
    deploymentType_desktop_release: 'Desktop release',
    deploymentType_browser_extension_release: 'Extension release',
    deploymentType_reference_only: 'Reference only',
    skillsTitle: 'Technical Direction',
    skillsDescription: 'Technologies and practices used across the project ecosystem.',
    skillsProgramming: 'Languages & Runtime',
    skillsFrameworks: 'Frameworks & UI',
    skillsTools: 'Tools & Deployment',
    contactTitle: 'Get In Touch',
    contactDescription: 'Let us discuss projects, deployment, or collaboration.',
    contactEmail: 'Email',
    contactPhone: 'Phone',
    contactLocation: 'Location',
    contactSocial: 'Social Links',
    contactName: 'Name',
    contactSubject: 'Subject',
    contactMessage: 'Message',
    contactSend: 'Send Message',
    contactSending: 'Sending...',
    contactSuccess: 'Thank you. This demo form does not send mail yet, but the interaction works.',
    contactEmailValue: 'contact@harryji.dev',
    contactPhoneValue: 'Available on request',
    contactLocationValue: 'Maastricht, NL / Remote',
    footerTagline: 'Personal showcase, project catalog, downloads, deployment notes, and security baseline.',
    footerNavigation: 'Navigation',
    footerConnect: 'Connect',
    footerLocation: 'Maastricht, NL',
    footerEmail: 'contact@harryji.dev',
    footerCopyright: 'Copyright {year} Harry Ji. All rights reserved.',
    footerResources: 'Resources',
    footerProjectOverview: 'Project Overview',
    footerProjectLinks: 'Project Links',
    footerHarryRepo: 'Harry Repository',
    footerPdfReader: 'PDF Reader',
    footerOdeSolver: 'ODE Solver',
    footerSurpriseMe: 'SurpriseMe',
    footerIndependentProjects: 'Independent projects, unified showcase.',
  },
  zh: {
    ...pageTranslations.zh,
    home: '首页',
    about: '关于',
    projects: '项目',
    downloads: '下载',
    security: '安全',
    skills: '技术',
    contact: '联系',
    mainShowcaseShell: '主要展示壳',
    onePersonalSiteManyProjects: '一个个人站点，多个独立项目。',
    mainShowcaseDescription: 'Harry 现在是项目介绍、演示链接、发布下载、部署说明和安全基线的统一入口。每个项目保留自己的仓库和部署生命周期。',
    whatThisSiteCoordinates: '本站点协调的内容',
    projectCatalogAndDetailPages: '项目目录和详情页面',
    githubDemoApiDownloadLinks: 'GitHub、演示、API 和下载链接',
    oracleVmDeploymentGuidance: 'Oracle VM 反向代理部署指南',
    securityChecklistForUploadHeavyApis: '上传密集型 API 的安全清单',
    featuredProjects: '精选项目',
    browseAllProjects: '浏览所有项目',
    releaseAssets: '发布资产',
    downloadsDescription: '来自项目数据层的安装程序、扩展包、版本占位符和校验和槽位的聚合。',
    noReleaseAssetsYet: '暂无发布资产',
    noReleaseAssetsDescription: '一旦项目发布安装程序、扩展包或发布文件，下载条目将在此处显示。',
    projectAsset: '项目/资产',
    platform: '平台',
    version: '版本',
    size: '大小',
    checksum: '校验和',
    link: '链接',
    open: '打开',
    downloadPolicy: '下载策略',
    downloadPolicyDescription: '安装程序和扩展包应通过 GitHub Releases 或第一方下载路由发布。Harry 仅存储元数据和链接，不存储长期二进制包。',
    securityBaseline: '安全基线',
    securityDescription: '个人站点、反向代理、Docker 服务、下载、密钥和 PDF 上传 API 的实用基线。',
    serverSecurity: '服务器安全',
    serverSecurity1: '仅开放端口 22、80 和 443。',
    serverSecurity2: '仅使用 SSH 密钥；禁用密码登录。',
    serverSecurity3: '禁用 root SSH 登录并使用普通用户部署。',
    serverSecurity4: '启用防火墙，如 ufw。',
    serverSecurity5: '定期应用系统更新。',
    reverseProxySecurity: '反向代理安全',
    reverseProxySecurity1: '通过 HTTPS 路由所有公共流量。',
    reverseProxySecurity2: '将后端容器保持在公共端口之外。',
    reverseProxySecurity3: '使用 Caddy 或 Nginx 作为唯一的公共入口点。',
    reverseProxySecurity4: '在请求到达 API 之前设置上传大小限制。',
    reverseProxySecurity5: '为公共 API 路径添加基本速率限制。',
    uploadApiSecurity: '上传 API 安全',
    uploadApiSecurity1: '限制 PDF Reader 和 Aircargo EDI 的 PDF 上传大小。',
    uploadApiSecurity2: '验证扩展名和 MIME 类型。',
    uploadApiSecurity3: '永远不要信任用户提供的文件名。',
    uploadApiSecurity4: '使用 UUID 或会话隔离的临时目录。',
    uploadApiSecurity5: '每次请求后清理临时文件。',
    uploadApiSecurity6: '使用生产环境 CORS 允许列表，而不是通配符来源。',
    uploadApiSecurity7: '不要在错误中泄露内部路径或堆栈跟踪。',
    uploadApiSecurity8: '不要记录敏感文件内容。',
    uploadApiSecurity9: '在实际可行时以非 root 身份运行容器。',
    secrets: '密钥',
    secrets1: '不要提交 .env 文件。',
    secrets2: '将 GitHub 令牌、API 密钥和数据库密码排除在代码之外。',
    secrets3: '为必需变量提供 .env.example。',
    downloadSafety: '下载安全',
    downloadSafety1: '通过 GitHub Releases 或对象存储发布安装程序。',
    downloadSafety2: '在下载页面上显示版本、平台、文件大小和 sha256。',
    downloadSafety3: '不要在 Harry 中将 exe、zip 或 dmg 文件作为长期 Git 资产保留。',
    aboutName: 'Harry Hongyue',
    aboutPageDescription: '专注于实用 Web 应用、文档处理、桌面工具和可维护部署工作流的软件开发者。',
    projectCatalog: '项目目录',
    projectsPageDescription: '由 Harry 主站连接的独立仓库的可搜索概览。',
    contactPageTitle: '联系我',
    contactPageDescription: '如需项目合作、部署问题或发布计划，请使用下方的联系方式。',
    heroTitle: '你好，我是 Harry Ji',
    heroSubtitle: '个人站点、项目目录、下载和部署说明',
    heroDescription: 'Harry Hongyue 独立项目的轻量主站外壳：PDF 处理、物流 EDI、桌面软件、浏览器扩展和架构参考。',
    heroHighlight: '项目展示',
    viewMyWork: '查看项目',
    contactMe: '联系我',
    exploreProjects: '探索项目',
    openDownloads: '打开下载',
    aboutTitle: '关于我',
    aboutDescription1: '我关注 Web 应用、文档处理、桌面工具和浏览器扩展等实用软件方向。',
    aboutDescription2: '当前重点是把多个独立仓库整理成清晰的项目生态，同时保留部署和安全边界。',
    aboutDescription3: '本站点现在专注于项目清晰度：每个仓库的作用、如何部署、用户可以在哪里下载版本，以及哪些安全护栏很重要。',
    aboutEducation: '教育背景：计算机科学',
    aboutLocation: '位置：Maastricht, NL / 远程',
    aboutExperience: '经验：全栈与产品导向开发',
    projectsTitle: '项目',
    projectsDescription: '多个独立仓库，通过一个轻量主站统一展示。',
    projectsAll: '全部',
    projectsWeb: '网页',
    projectsMobile: '移动端',
    projectsOther: '其他',
    viewDetails: '查看详情',
    backendRequired: '需要后端',
    staticNoBackend: '静态/无后端',
    search: '搜索',
    searchPlaceholder: '搜索名称、描述或技术栈',
    category: '分类',
    allCategories: '所有分类',
    status: '状态',
    allStatuses: '所有状态',
    projectFound: '个项目找到',
    projectsFound: '个项目找到',
    noBackendInHarry: 'Harry 中无后端',
    unifiedHarryWorkflow: '统一 Harry 工作流',
    unifiedHarryWorkflowDescription: '此页面借用原有的产品方向，同时使用 Harry 的共享外壳、主题、路由和发布元数据。',
    overview: '概览',
    projectFacts: '项目事实',
    repository: '仓库',
    publicUrl: '公共 URL',
    apiBase: 'API 基础',
    reverseProxyPath: '反向代理路径',
    notPublishedYet: '尚未发布',
    notRequired: '不需要',
    links: '链接',
    download: '下载',
    deploymentNotes: '部署说明',
    deploymentNotesPlaceholder: '随着项目的成熟，将添加部署说明。',
    securityNotes: '安全说明',
    securityNotesPlaceholder: '遵循共享的安全基线进行公共部署。',
    backToProjects: '返回项目',
    openAppRoute: '打开应用路由',
    deploymentType_static_site: '静态站点',
    deploymentType_static_site_plus_api: '静态站点 + API',
    deploymentType_desktop_release: '桌面发布',
    deploymentType_browser_extension_release: '扩展发布',
    deploymentType_reference_only: '仅参考',
    skillsTitle: '技术方向',
    skillsDescription: '项目生态中使用的技术和工程实践。',
    skillsProgramming: '语言与运行时',
    skillsFrameworks: '框架与界面',
    skillsTools: '工具与部署',
    contactTitle: '联系',
    contactDescription: '欢迎讨论项目、部署或协作。',
    contactEmail: '邮箱',
    contactPhone: '电话',
    contactLocation: '位置',
    contactSocial: '社交链接',
    contactName: '姓名',
    contactSubject: '主题',
    contactMessage: '消息',
    contactSend: '发送消息',
    contactSending: '发送中...',
    contactSuccess: '谢谢。这个演示表单暂不发送邮件，但交互已生效。',
    contactEmailValue: 'contact@harryji.dev',
    contactPhoneValue: '可按要求提供',
    contactLocationValue: 'Maastricht, NL / 远程',
    footerTagline: '个人展示、项目目录、下载入口、部署说明和安全基线。',
    footerNavigation: '导航',
    footerConnect: '联系',
    footerLocation: 'Maastricht, NL',
    footerEmail: 'contact@harryji.dev',
    footerCopyright: 'Copyright {year} Harry Ji. All rights reserved.',
    footerResources: '资源',
    footerProjectOverview: '项目概览',
    footerProjectLinks: '项目链接',
    footerHarryRepo: 'Harry 仓库',
    footerPdfReader: 'PDF Reader',
    footerOdeSolver: 'ODE Solver',
    footerSurpriseMe: 'SurpriseMe',
    footerIndependentProjects: '独立项目，统一展示。',
  },
  nl: {
    ...pageTranslations.nl,
    home: 'Home',
    about: 'Over mij',
    projects: 'Projecten',
    downloads: 'Downloads',
    security: 'Security',
    skills: 'Techniek',
    contact: 'Contact',
    mainShowcaseShell: 'Hoofd showcase shell',
    onePersonalSiteManyProjects: 'Eén persoonlijke site, veel onafhankelijke projecten.',
    mainShowcaseDescription: 'Harry is nu de centrale ingang voor projectintroducties, demo-links, release-downloads, deployment-notities en security-baselines. Elk project behoudt zijn eigen repository en deployment-levenscyclus.',
    whatThisSiteCoordinates: 'Wat deze site coördineert',
    projectCatalogAndDetailPages: 'Projectcatalogus en detailpagina\'s',
    githubDemoApiDownloadLinks: 'GitHub-, demo-, API- en download-links',
    oracleVmDeploymentGuidance: 'Oracle VM reverse proxy deployment-gids',
    securityChecklistForUploadHeavyApis: 'Security-checklist voor upload-zware API\'s',
    featuredProjects: 'Uitgelichte projecten',
    browseAllProjects: 'Alle projecten bekijken',
    releaseAssets: 'Release-assets',
    downloadsDescription: 'Geaggregeerde installers, uitbreidingspakketten, versieplaatsaanduidingen en checksum-slots uit de projectdatalaag.',
    noReleaseAssetsYet: 'Nog geen release-assets',
    noReleaseAssetsDescription: 'Download-items verschijnen hier zodra projecten installers, uitbreidingspakketten of releasebestanden publiceren.',
    projectAsset: 'Project / Asset',
    platform: 'Platform',
    version: 'Versie',
    size: 'Grootte',
    checksum: 'Checksum',
    link: 'Link',
    open: 'Open',
    downloadPolicy: 'Downloadbeleid',
    downloadPolicyDescription: 'Installers en uitbreidingspakketten moeten via GitHub Releases of de first-party downloadroute worden gepubliceerd. Harry slaat alleen metadata en links op, geen langdurige binaire pakketten.',
    securityBaseline: 'Security-baseline',
    securityDescription: 'Een praktische baseline voor de persoonlijke site, reverse proxy, Docker-services, downloads, secrets en PDF-upload API\'s.',
    serverSecurity: 'Server Security',
    serverSecurity1: 'Open alleen poorten 22, 80 en 443.',
    serverSecurity2: 'Gebruik alleen SSH-sleutels; schakel wachtwoordlogin uit.',
    serverSecurity3: 'Schakel root SSH-login uit en deploy met een normale gebruiker.',
    serverSecurity4: 'Schakel een firewall in zoals ufw.',
    serverSecurity5: 'Pas systeemupdates regelmatig toe.',
    reverseProxySecurity: 'Reverse Proxy Security',
    reverseProxySecurity1: 'Routeer al het openbare verkeer via HTTPS.',
    reverseProxySecurity2: 'Houd backend-containers buiten openbare poorten.',
    reverseProxySecurity3: 'Gebruik Caddy of Nginx als enige openbare ingangspunt.',
    reverseProxySecurity4: 'Stel upload-groottebeperkingen in voordat verzoeken API\'s bereiken.',
    reverseProxySecurity5: 'Voeg basis rate limiting toe voor openbare API-paden.',
    uploadApiSecurity: 'Upload API Security',
    uploadApiSecurity1: 'Beperk PDF-uploadgrootte voor PDF Reader en Aircargo EDI.',
    uploadApiSecurity2: 'Valideer extensie en MIME-type.',
    uploadApiSecurity3: 'Vertrouw nooit door gebruikers opgegeven bestandsnamen.',
    uploadApiSecurity4: 'Gebruik UUID- of sessie-geïsoleerde tijdelijke mappen.',
    uploadApiSecurity5: 'Ruim tijdelijke bestanden op na elk verzoek.',
    uploadApiSecurity6: 'Gebruik productie CORS-allowlists, geen wildcard-origins.',
    uploadApiSecurity7: 'Lek geen interne paden of stack traces in fouten.',
    uploadApiSecurity8: 'Log geen gevoelige bestandsinhoud.',
    uploadApiSecurity9: 'Draai containers als non-root waar praktisch.',
    secrets: 'Secrets',
    secrets1: 'Commit geen .env-bestanden.',
    secrets2: 'Houd GitHub-tokens, API-sleutels en databasewachtwoorden buiten code.',
    secrets3: 'Bied .env.example voor vereiste variabelen.',
    downloadSafety: 'Download Safety',
    downloadSafety1: 'Publiceer installers via GitHub Releases of objectopslag.',
    downloadSafety2: 'Toon versie, platform, bestandsgrootte en sha256 op downloadpagina\'s.',
    downloadSafety3: 'Bewaar geen exe-, zip- of dmg-bestanden als langlevende Git-assets in Harry.',
    aboutName: 'Harry Hongyue',
    aboutPageDescription: 'Softwareontwikkelaar gericht op praktische webapps, documentverwerking, desktoptools en onderhoudbare deployment-workflows.',
    projectCatalog: 'Projectcatalogus',
    projectsPageDescription: 'Een doorzoekbaar overzicht van onafhankelijke repositories verbonden door de Harry-hoofdsite.',
    contactPageTitle: 'Neem contact op',
    contactPageDescription: 'Voor projectcollaboratie, deployment-vragen of release-planning, gebruik de contactlinks hieronder.',
    heroTitle: 'Hallo, ik ben Harry Ji',
    heroSubtitle: 'Persoonlijke site, projectcatalogus, downloads en deployment-notities',
    heroDescription: 'Een lichte hoofdsite voor Harry Hongyue\'s onafhankelijke projecten: PDF-verwerking, logistiek EDI, desktopsoftware, browserextensies en architectuurreferenties.',
    heroHighlight: 'Project Showcase',
    viewMyWork: 'Bekijk projecten',
    contactMe: 'Contact',
    exploreProjects: 'Projecten verkennen',
    openDownloads: 'Downloads openen',
    aboutTitle: 'Over mij',
    aboutDescription1: 'Ik werk aan webapps, documentverwerking, desktoptools en browserextensies.',
    aboutDescription2: 'Mijn focus is een duidelijke projectervaring met behoud van onafhankelijke repositories en deploymentgrenzen.',
    aboutDescription3: 'Deze site richt zich nu op projecthelderheid: wat elke repository doet, hoe het wordt gedeployed, waar gebruikers releases kunnen downloaden, en welke security-guardrails belangrijk zijn.',
    aboutEducation: 'Opleiding: Informatica',
    aboutLocation: 'Locatie: Maastricht, NL / Remote',
    aboutExperience: 'Ervaring: Full-stack en productgerichte ontwikkeling',
    projectsTitle: 'Projecten',
    projectsDescription: 'Onafhankelijke repositories gepresenteerd via een lichte hoofdsite.',
    projectsAll: 'Alle',
    projectsWeb: 'Web',
    projectsMobile: 'Mobiel',
    projectsOther: 'Overig',
    viewDetails: 'Details',
    backendRequired: 'Backend vereist',
    staticNoBackend: 'Statisch / geen backend',
    search: 'Zoeken',
    searchPlaceholder: 'Zoek naam, beschrijving of tech stack',
    category: 'Categorie',
    allCategories: 'Alle categorieën',
    status: 'Status',
    allStatuses: 'Alle statussen',
    projectFound: 'project gevonden',
    projectsFound: 'projecten gevonden',
    noBackendInHarry: 'Geen backend in Harry',
    unifiedHarryWorkflow: 'Gedeelde Harry workflow',
    unifiedHarryWorkflowDescription: 'Deze pagina leent de oorspronkelijke productrichting terwijl het Harry\'s gedeelde shell, thema, routing en release-metadata gebruikt.',
    overview: 'Overzicht',
    projectFacts: 'Projectfeiten',
    repository: 'Repository',
    publicUrl: 'Openbare URL',
    apiBase: 'API-basis',
    reverseProxyPath: 'Reverse proxy pad',
    notPublishedYet: 'Nog niet gepubliceerd',
    notRequired: 'Niet vereist',
    links: 'Links',
    download: 'Downloaden',
    deploymentNotes: 'Deployment-notities',
    deploymentNotesPlaceholder: 'Deployment-notities worden toegevoegd naarmate het project volwassener wordt.',
    securityNotes: 'Security-notities',
    securityNotesPlaceholder: 'Volg de gedeelde security-baseline voor openbare deployment.',
    backToProjects: 'Terug naar projecten',
    openAppRoute: 'Open app route',
    deploymentType_static_site: 'Statische site',
    deploymentType_static_site_plus_api: 'Statische site + API',
    deploymentType_desktop_release: 'Desktop release',
    deploymentType_browser_extension_release: 'Extension release',
    deploymentType_reference_only: 'Alleen referentie',
    skillsTitle: 'Technische richting',
    skillsDescription: 'Technologie en werkwijzen binnen het projectecosysteem.',
    skillsProgramming: 'Talen & runtime',
    skillsFrameworks: 'Frameworks & UI',
    skillsTools: 'Tools & deployment',
    contactTitle: 'Neem contact op',
    contactDescription: 'Laten we projecten, deployment of samenwerking bespreken.',
    contactEmail: 'E-mail',
    contactPhone: 'Telefoon',
    contactLocation: 'Locatie',
    contactSocial: 'Sociale links',
    contactName: 'Naam',
    contactSubject: 'Onderwerp',
    contactMessage: 'Bericht',
    contactSend: 'Versturen',
    contactSending: 'Verzenden...',
    contactSuccess: 'Dank je. Dit demoformulier verstuurt nog geen e-mail, maar de interactie werkt.',
    contactEmailValue: 'contact@harryji.dev',
    contactPhoneValue: 'Op aanvraag beschikbaar',
    contactLocationValue: 'Maastricht, NL / Remote',
    footerTagline: 'Persoonlijke showcase, projectcatalogus, downloads, deploymentnotities en security baseline.',
    footerNavigation: 'Navigatie',
    footerConnect: 'Contact',
    footerLocation: 'Maastricht, NL',
    footerEmail: 'contact@harryji.dev',
    footerCopyright: 'Copyright {year} Harry Ji. Alle rechten voorbehouden.',
    footerResources: 'Bronnen',
    footerProjectOverview: 'Projectoverzicht',
    footerProjectLinks: 'Projectlinks',
    footerHarryRepo: 'Harry Repository',
    footerPdfReader: 'PDF Reader',
    footerOdeSolver: 'ODE Solver',
    footerSurpriseMe: 'SurpriseMe',
    footerIndependentProjects: 'Onafhankelijke projecten, uniforme showcase.',
  },
};

// Translation helper function
export const t = (key: keyof Translations): string => {
  const language = localStorage.getItem('language') || 'en';
  return translations[language]?.[key] || translations.en[key] || key;
};
