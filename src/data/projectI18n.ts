import type { LocalizedText, SiteLocale } from './siteContent';

type LocalizedProjectCopy = {
  name?: LocalizedText;
  summary?: LocalizedText;
  tagline?: LocalizedText;
  role?: LocalizedText;
  highlights?: LocalizedText[];
  problem?: LocalizedText;
  solution?: LocalizedText;
  learnings?: LocalizedText[];
  architectureTitles?: LocalizedText[];
  architectureDescriptions?: LocalizedText[];
  storyStepLabels?: LocalizedText[];
  storyStepTitles?: LocalizedText[];
  storyStepBodies?: LocalizedText[];
  storyStepPoints?: LocalizedText[][];
  outcomeLabels?: LocalizedText[];
  outcomeContexts?: LocalizedText[];
};

export const projectI18n: Record<string, LocalizedProjectCopy> = {
  harry: {
    name: { en: 'HarryOS', zh: 'HarryOS', nl: 'HarryOS' },
    summary: {
      en: 'My personal site rebuilt as a clearer software portfolio with stronger project storytelling.',
      zh: '我把个人网站重构成了一个更像软件产品展示的作品集，用更清楚的方式讲项目和实现能力。',
      nl: 'Mijn persoonlijke site herbouwd als duidelijker softwareportfolio met sterkere projectverhalen.',
    },
    tagline: {
      en: 'A portfolio site built to present software work more clearly.',
      zh: '一个专门用来更清楚展示软件作品的个人网站。',
      nl: 'Een portfoliosite gebouwd om softwarewerk duidelijker te presenteren.',
    },
    role: {
      en: 'Interface design, frontend implementation, content structure',
      zh: '界面设计、前端实现、内容结构',
      nl: 'Interfacedesign, frontend-implementatie, contentstructuur',
    },
    highlights: [
      {
        en: 'Rebuilt the site around projects, architecture, and delivery instead of generic profile sections.',
        zh: '把网站重心从泛泛的个人介绍改成以项目、架构和交付方式为核心。',
        nl: 'De site opnieuw opgebouwd rond projecten, architectuur en delivery in plaats van generieke profielblokken.',
      },
      {
        en: 'Added a reusable case-study structure so future project pages can stay consistent.',
        zh: '补上可复用的案例页结构，让后续项目页可以持续保持一致。',
        nl: 'Een herbruikbare case-study structuur toegevoegd zodat toekomstige projectpagina’s consistent blijven.',
      },
      {
        en: 'Improved language switching, page density, and the presentation of software work.',
        zh: '补强了语言切换、页面密度和整站的软件作品展示方式。',
        nl: 'Taalwissel, paginadichtheid en de presentatie van softwarewerk verbeterd.',
      },
    ],
    problem: {
      en: 'The old site listed projects, but it did not explain the work clearly enough or leave a strong impression.',
      zh: '旧站虽然列出了项目，但没有把工作内容讲清楚，也没有形成足够鲜明的整体记忆点。',
      nl: 'De oude site noemde projecten, maar legde het werk niet duidelijk genoeg uit en bleef visueel te zwak hangen.',
    },
    solution: {
      en: 'The new version separates first impression from project proof: the homepage creates identity, and project pages explain systems in detail.',
      zh: '新版把“第一印象”和“项目证明”拆开：首页负责建立识别度，项目页负责把系统和实现讲明白。',
      nl: 'De nieuwe versie scheidt eerste indruk van projectbewijs: home bouwt identiteit op en projectpagina’s leggen systemen helder uit.',
    },
    learnings: [
      {
        en: 'A stronger portfolio explains software decisions instead of only listing technologies.',
        zh: '更有说服力的作品集，重点在解释软件决策，而不是只堆技术名词。',
        nl: 'Een sterker portfolio legt softwarekeuzes uit in plaats van alleen technologieën op te sommen.',
      },
      {
        en: 'Language switching has to be part of the content system from the beginning.',
        zh: '语言切换必须从内容结构一开始就纳入设计，而不是最后补上。',
        nl: 'Taalwisseling moet vanaf het begin onderdeel zijn van het contentsysteem.',
      },
      {
        en: 'Portfolio pages should feel like product pages, not stitched profile blocks.',
        zh: '作品集页面应该更像产品页，而不是几块个人资料模块拼起来。',
        nl: 'Portfolio’s moeten meer als productpagina’s voelen en minder als losse profielblokken.',
      },
    ],
    architectureTitles: [
      { en: 'Content Model', zh: '内容模型', nl: 'Contentmodel' },
      { en: 'Shared Shell', zh: '共享壳层', nl: 'Gedeelde shell' },
      { en: 'Case Study Modules', zh: '案例模块', nl: 'Case-study modules' },
    ],
    architectureDescriptions: [
      { en: 'One project data layer feeds the homepage, project index, and detail pages.', zh: '统一的项目数据层同时服务首页、项目索引和详情页。', nl: 'Eén projectdatalaag voedt home, projectindex en detailpagina’s.' },
      { en: 'Header, layout rhythm, and surface styling keep the site visually coherent.', zh: 'Header、页面节奏和面板风格共同维持整站一致性。', nl: 'Header, layoutritme en surface-styling houden de site visueel coherent.' },
      { en: 'Reusable sections make it easier to present future work without rebuilding the whole site.', zh: '可复用的案例模块让后续项目接入更容易，不需要重做整站。', nl: 'Herbruikbare secties maken het eenvoudiger om toekomstig werk toe te voegen zonder de hele site te herbouwen.' },
    ],
    storyStepLabels: [
      { en: 'Identity', zh: '定位', nl: 'Identiteit' },
      { en: 'Preview', zh: '展示', nl: 'Preview' },
      { en: 'System', zh: '结构', nl: 'Systeem' },
    ],
    storyStepTitles: [
      { en: 'The homepage now opens like a software product instead of a generic personal banner.', zh: '首页现在更像一个软件产品入口，而不是普通的个人介绍横幅。', nl: 'De homepagina opent nu als softwareproduct in plaats van als generieke persoonlijke banner.' },
      { en: 'Featured sections summarize what kind of work is actually here.', zh: '精选区先把这里到底展示什么项目讲清楚，再引导进入详情页。', nl: 'Uitgelichte secties vatten samen welk soort werk hier echt te zien is.' },
      { en: 'A shared structure keeps future case studies consistent.', zh: '统一结构让未来的案例页可以继续保持同一套表达方式。', nl: 'Een gedeelde structuur houdt toekomstige case studies consistent.' },
    ],
    storyStepBodies: [
      { en: 'The first screen uses product framing, navigation, and project entry points to establish identity quickly.', zh: '第一屏通过产品化布局、导航和项目入口快速建立这个网站的识别度。', nl: 'Het eerste scherm gebruikt productframing, navigatie en projecttoegang om snel identiteit op te bouwen.' },
      { en: 'The homepage gives each highlighted project enough context before the visitor opens a detail page.', zh: '首页会先给每个重点项目足够的上下文，而不是只放一张模板卡片。', nl: 'De homepagina geeft elk hoofdproject genoeg context voordat een bezoeker de detailpagina opent.' },
      { en: 'Future project pages can follow the same model without inventing a new layout each time.', zh: '后续项目页可以沿用这套模型，不需要每次都重新发明一种版式。', nl: 'Toekomstige projectpagina’s kunnen hetzelfde model volgen zonder telkens een nieuwe layout uit te vinden.' },
    ],
    storyStepPoints: [
      [
        { en: 'Shorter first-screen copy', zh: '首屏文案更短', nl: 'Kortere eerste-schermcopy' },
        { en: 'Clearer navigation', zh: '导航更清楚', nl: 'Duidelijkere navigatie' },
        { en: 'Less empty space', zh: '空白更克制', nl: 'Minder loze ruimte' },
      ],
      [
        { en: 'Project-first previews', zh: '先讲项目', nl: 'Project-first previews' },
        { en: 'Less template feeling', zh: '减少模板感', nl: 'Minder templategevoel' },
        { en: 'Better context for visitors', zh: '访客更容易理解', nl: 'Betere context voor bezoekers' },
      ],
      [
        { en: 'Reusable sections', zh: '模块可复用', nl: 'Herbruikbare secties' },
        { en: 'Cleaner project growth path', zh: '后续扩展更清楚', nl: 'Schonere groeistructuur' },
        { en: 'Consistent case-study format', zh: '案例页格式更统一', nl: 'Consistenter case-study formaat' },
      ],
    ],
    outcomeLabels: [
      { en: 'Identity', zh: '定位', nl: 'Identiteit' },
      { en: 'Structure', zh: '结构', nl: 'Structuur' },
      { en: 'Reuse', zh: '复用', nl: 'Herbruikbaarheid' },
    ],
    outcomeContexts: [
      { en: 'The site now has a clearer software-focused presentation style.', zh: '整站现在有了更清楚的软件导向展示风格。', nl: 'De site heeft nu een duidelijkere softwaregerichte presentatiestijl.' },
      { en: 'Homepage, project index, and project detail now connect more coherently.', zh: '首页、项目索引和项目详情之间的关系现在更连贯了。', nl: 'Home, projectindex en projectdetail sluiten nu coherenter op elkaar aan.' },
      { en: 'Future project pages can follow the same model more easily.', zh: '后续项目页可以更容易沿用同一套案例模型。', nl: 'Toekomstige projectpagina’s kunnen makkelijker hetzelfde model volgen.' },
    ],
  },
  'pdf-reader': {
    name: { en: 'PDF Reader', zh: 'PDF Reader', nl: 'PDF Reader' },
    summary: {
      en: 'A document workflow combining upload, OCR, parsing, and structured reading.',
      zh: '一个把上传、OCR、解析和结构化阅读串起来的文档处理工作流。',
      nl: 'Een documentworkflow die upload, OCR, parsing en gestructureerd lezen combineert.',
    },
    tagline: {
      en: 'Turning raw PDFs into readable, searchable, and structured information.',
      zh: '把原始 PDF 变成可读、可检索、可继续处理的信息。',
      nl: 'Ruwe pdf’s omzetten naar leesbare, doorzoekbare en gestructureerde informatie.',
    },
    role: {
      en: 'Workflow design, frontend shell, OCR system framing',
      zh: '工作流设计、前端壳层、OCR 系统呈现',
      nl: 'Workflowdesign, frontend-shell, OCR-systeemframing',
    },
    highlights: [
      { en: 'Mapped heavy document processing into a clearer user flow.', zh: '把较重的文档处理流程整理成更清楚的用户路径。', nl: 'Zware documentverwerking vertaald naar een duidelijker gebruikerspad.' },
      { en: 'Made deployment and security part of the project explanation.', zh: '把部署和安全边界纳入项目说明本身。', nl: 'Deployment en security onderdeel gemaakt van de projectuitleg.' },
      { en: 'Separated product presentation from backend processing concerns.', zh: '把产品展示层和后端处理职责明确拆开。', nl: 'Productpresentatie gescheiden van backend-verwerking.' },
    ],
    problem: {
      en: 'PDF tools often feel like thin upload forms wrapped around a confusing backend process.',
      zh: '很多 PDF 工具看起来只是一层上传表单，背后的处理过程对用户并不透明。',
      nl: 'Veel pdf-tools voelen als dunne uploadformulieren rond een verwarrend backendproces.',
    },
    solution: {
      en: 'This project frames OCR and parsing as a guided workflow with clearer frontend steps and better deployment boundaries.',
      zh: '这个项目把 OCR 和解析组织成一条有引导感的工作流，并且清楚划分前端步骤和部署边界。',
      nl: 'Dit project kadert OCR en parsing als een begeleide workflow met duidelijkere frontend-stappen en betere deploymentgrenzen.',
    },
    architectureTitles: [
      { en: 'Frontend Shell', zh: '前端壳层', nl: 'Frontend-shell' },
      { en: 'OCR Pipeline', zh: 'OCR 流水线', nl: 'OCR-pipeline' },
      { en: 'Reverse Proxy Layer', zh: '反向代理层', nl: 'Reverse-proxylaag' },
    ],
    architectureDescriptions: [
      { en: 'Handles uploads, user guidance, and progressive result presentation.', zh: '负责上传流程、用户引导和结果的渐进式展示。', nl: 'Verzorgt uploads, gebruikersbegeleiding en progressieve resultaatweergave.' },
      { en: 'Performs extraction and OCR with backend-only workloads and temporary files.', zh: '在后端完成提取和 OCR，并处理临时文件与重负载任务。', nl: 'Voert extractie en OCR uit met backend-only workloads en tijdelijke bestanden.' },
      { en: 'Keeps the processing API private behind controlled public routes.', zh: '把处理 API 放在受控的公开路由之后，而不是直接暴露服务端口。', nl: 'Houdt de verwerkings-API privé achter gecontroleerde publieke routes.' },
    ],
    outcomeLabels: [
      { en: 'Workflow', zh: '工作流', nl: 'Workflow' },
      { en: 'Architecture', zh: '架构', nl: 'Architectuur' },
      { en: 'Safety', zh: '安全', nl: 'Veiligheid' },
    ],
    outcomeContexts: [
      { en: 'Upload, OCR, parsing, and review are explained as one connected product flow.', zh: '上传、OCR、解析和结果查看被组织成一条连贯的产品流程。', nl: 'Upload, OCR, parsing en review worden uitgelegd als één verbonden productflow.' },
      { en: 'The frontend and processing backend have clearer responsibilities.', zh: '前端和处理后端的职责划分更清楚。', nl: 'Frontend en verwerkende backend hebben duidelijkere verantwoordelijkheden.' },
      { en: 'Operational constraints are treated as part of the product design.', zh: '运维约束被当成产品设计的一部分来处理。', nl: 'Operationele beperkingen worden behandeld als onderdeel van het productontwerp.' },
    ],
    learnings: [
      { en: 'AI-adjacent products need operational clarity as much as interface polish.', zh: '这类 AI 相关产品需要的不只是界面打磨，更需要运行边界说清楚。', nl: 'AI-gerelateerde producten hebben net zoveel operationele helderheid nodig als interfacepolish.' },
      { en: 'Heavy backend workflows benefit from stronger frontend narrative scaffolding.', zh: '后端较重的工作流，更需要前端把路径和状态讲明白。', nl: 'Zware backendworkflows profiteren van sterkere frontend-verhaallijnen.' },
      { en: 'Security notes become easier to communicate when tied to user flows.', zh: '当安全说明和用户路径绑定时，会更容易解释清楚。', nl: 'Security-notes zijn makkelijker uit te leggen wanneer ze aan gebruikersflows zijn gekoppeld.' },
    ],
  },
  'aircargo-edi': {
    name: { en: 'Aircargo EDI', zh: 'Aircargo EDI', nl: 'Aircargo EDI' },
    summary: {
      en: 'A domain-heavy cargo system for extracting AWB data and generating structured outputs.',
      zh: '一个把航空货运文档、领域模型和结构化输出串起来的系统。',
      nl: 'Een domeinrijk cargosysteem voor het extraheren van AWB-data en het genereren van gestructureerde output.',
    },
    tagline: {
      en: 'Domain-heavy cargo workflows translated into structured software flows.',
      zh: '把航空货运领域流程转成结构化的软件工作流。',
      nl: 'Domeinrijke cargoworkflows vertaald naar gestructureerde softwareflows.',
    },
    role: {
      en: 'Domain modeling, parsing workflow, system design',
      zh: '领域建模、解析流程、系统设计',
      nl: 'Domeinmodellering, parsingworkflow, systeemontwerp',
    },
    highlights: [
      { en: 'Focused on real cargo workflow structure instead of generic CRUD framing.', zh: '以真实货运流程为核心，而不是套一层通用 CRUD。', nl: 'Gefocust op echte cargoworkflowstructuur in plaats van generieke CRUD-framing.' },
      { en: 'Designed one core that can support multiple delivery surfaces.', zh: '围绕一套核心逻辑支持多种交付形态。', nl: 'Ontworpen rond één kern die meerdere delivery-oppervlakken ondersteunt.' },
      { en: 'Framed a specialized domain in a way that is easier to understand from the outside.', zh: '把专业领域系统整理成外部也更容易理解的表达方式。', nl: 'Een gespecialiseerd domein zo gepresenteerd dat het van buitenaf beter te begrijpen is.' },
    ],
    problem: {
      en: 'Air cargo documents are structured but messy, and the workflows around them are operationally strict.',
      zh: '航空货运单据既有严格结构，又充满真实世界里的复杂输入和业务约束。',
      nl: 'Luchtvrachtdocumenten zijn gestructureerd maar rommelig, en de workflows eromheen zijn operationeel streng.',
    },
    solution: {
      en: 'The project is organized around domain models, parsing services, and multiple delivery surfaces so the same cargo logic can support different ways of working.',
      zh: '项目围绕领域模型、解析服务和多种交付入口来组织，让同一套货运逻辑可以支撑不同使用方式。',
      nl: 'Het project is opgebouwd rond domeinmodellen, parsingservices en meerdere delivery-oppervlakken zodat dezelfde cargologica verschillende werkvormen ondersteunt.',
    },
    architectureTitles: [
      { en: 'Domain Core', zh: '领域核心', nl: 'Domeinkern' },
      { en: 'Parsing Layer', zh: '解析层', nl: 'Parsinglaag' },
      { en: 'Delivery Surfaces', zh: '交付层', nl: 'Delivery-oppervlakken' },
    ],
    architectureDescriptions: [
      { en: 'Cargo concepts and document structures are modeled independently from delivery surfaces.', zh: '把货运概念和单据结构从展示层里独立出来建模。', nl: 'Cargoconcepten en documentstructuren worden los van delivery-oppervlakken gemodelleerd.' },
      { en: 'Extracts and validates cargo information from PDFs and other structured inputs.', zh: '负责从 PDF 和其他结构化输入中提取并校验货运信息。', nl: 'Extraheert en valideert cargo-informatie uit pdf’s en andere gestructureerde invoer.' },
      { en: 'Web, desktop, and CLI experiences can all build on the same core logic.', zh: 'Web、桌面端和 CLI 都可以复用同一套核心逻辑。', nl: 'Web-, desktop- en CLI-ervaringen kunnen allemaal op dezelfde kernlogica bouwen.' },
    ],
    outcomeLabels: [
      { en: 'Domain Focus', zh: '领域聚焦', nl: 'Domeinfocus' },
      { en: 'Reuse', zh: '复用', nl: 'Herbruikbaarheid' },
      { en: 'Clarity', zh: '清晰度', nl: 'Duidelijkheid' },
    ],
    outcomeContexts: [
      { en: 'The product story is anchored in actual cargo workflow needs.', zh: '整个产品叙事都围绕真实的货运工作流展开。', nl: 'Het productverhaal is verankerd in echte cargoworkflowbehoeften.' },
      { en: 'One logic core can support multiple entry surfaces.', zh: '同一套核心逻辑可以支持多种入口形态。', nl: 'Eén logische kern kan meerdere toegangsvormen ondersteunen.' },
      { en: 'The system is easier to understand from outside the domain.', zh: '即使不熟悉这个领域，也更容易理解系统在做什么。', nl: 'Het systeem is ook van buiten het domein beter te begrijpen.' },
    ],
    learnings: [
      { en: 'Specialized workflow software should start from domain nouns, not UI metaphors.', zh: '专业工作流软件应该先从领域名词出发，而不是先套界面套路。', nl: 'Gespecialiseerde workflowsoftware moet starten vanuit domeintermen, niet UI-metaforen.' },
      { en: 'The more specific the domain, the more important a clean architecture narrative becomes.', zh: '领域越专业，越需要把架构叙事讲得干净。', nl: 'Hoe specifieker het domein, hoe belangrijker een schoon architectuurverhaal wordt.' },
      { en: 'Complex systems should explain boundaries as clearly as features.', zh: '复杂系统不仅要讲功能，也要把边界讲清楚。', nl: 'Complexe systemen moeten grenzen net zo helder uitleggen als features.' },
    ],
  },
};

export const getProjectText = (
  slug: string,
  locale: string,
  field: keyof LocalizedProjectCopy,
  fallback: string,
  index?: number,
): string => {
  const copy = projectI18n[slug];
  if (!copy) return fallback;
  const value = copy[field];
  if (!value) return fallback;
  if (Array.isArray(value)) {
    if (field === 'storyStepPoints') {
      const pointGroups = value as LocalizedText[][];
      if (typeof index !== 'number') return fallback;
      const groupIndex = Math.floor(index / 3);
      const pointIndex = index % 3;
      const localizedPoint = pointGroups[groupIndex]?.[pointIndex];
      if (!localizedPoint) return fallback;
      const lang = (locale in localizedPoint ? locale : 'en') as SiteLocale;
      return localizedPoint[lang];
    }

    const localizedArray = value as LocalizedText[];
    if (typeof index !== 'number' || !localizedArray[index]) return fallback;
    const lang = (locale in localizedArray[index] ? locale : 'en') as SiteLocale;
    return localizedArray[index][lang];
  }
  const localizedValue = value as LocalizedText;
  const lang = (locale in localizedValue ? locale : 'en') as SiteLocale;
  return localizedValue[lang];
};
