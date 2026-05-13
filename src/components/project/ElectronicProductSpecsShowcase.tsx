import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface ElectronicProductSpecsShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const ElectronicProductSpecsShowcase: React.FC<ElectronicProductSpecsShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = project.websiteUrl ?? project.demoUrl ?? '/projects/electronic-product-specifications-analysis';
  const focus = l(`A Next.js technical education website that documents electronic protocol evolution and turns confusing consumer hardware specifications into evidence-based explanations.`, `一个 Next.js 技术科普网站，系统记录电子协议演进，并把混乱的消费电子硬件规格转换成有依据、能理解的解释。`, `Een Next.js technische educatiewebsite die de evolutie van elektronische protocollen documenteert en verwarrende consumentenhardwarespecificaties omzet in onderbouwde uitleg.`);
  const value = l(`The site focuses on Wi-Fi, USB, Thunderbolt, SD cards, HDMI, DisplayPort, charging protocols, display naming, storage classes, and other spec-sheet terms that often confuse buyers.`, `网站聚焦 Wi-Fi、USB、Thunderbolt、SD 卡、HDMI、DisplayPort、充电协议、显示命名、存储等级和其他经常误导消费者的规格表术语。`, `De site focust op Wi-Fi, USB, Thunderbolt, SD-kaarten, HDMI, DisplayPort, laadprotocollen, displaybenaming, storage classes en andere spec-sheet termen die kopers vaak verwarren.`);
  const implementation = l(`The site is built as a multilingual technical content platform with structured pages, reusable interface components, localized routing, CMS and API integration, authentication helpers, pagination, and performance-minded static generation.`, `网站被构建为多语言技术内容平台，包含结构化页面、可复用界面组件、本地化路由、CMS 与 API 集成、认证辅助能力、分页，以及面向性能优化的静态生成。`, `De site is gebouwd als meertalig technisch contentplatform met gestructureerde pagina’s, herbruikbare interfacecomponenten, gelokaliseerde routing, CMS- en API-integratie, auth helpers, paginatie en performancegerichte static generation.`);
  const vision = l(`The vision is a consumer-friendly standards library: when marketing names become vague, the site should explain the real protocol generation, bandwidth, compatibility, charging behavior, and practical buying meaning.`, `愿景是做成面向消费者的技术标准知识库：当营销命名变得模糊时，网站能解释真实协议代际、带宽、兼容性、充电行为和购买时的实际含义。`, `De visie is een consumentvriendelijke standards library: wanneer marketingnamen vaag worden, moet de site echte protocolgeneratie, bandbreedte, compatibiliteit, laadgedrag en praktische koopbetekenis uitleggen.`);
  const structure = ['Protocols', 'Timelines', 'Comparisons'];
  const modules = [{ title: l(`Protocol Categories`, `协议分类`, `Protocolcategorieën`), description: l(`Content categories cover wireless protocols, interface standards, power standards, storage standards, and display standards.`, `内容分类覆盖无线协议、接口标准、电力/充电标准、存储标准和显示标准。`, `Contentcategorieën dekken wireless protocols, interface standards, power standards, storage standards en display standards.`) }, { title: l(`Education Homepage`, `科普首页`, `Educatieve homepage`), description: l(`The home page combines Hero, ProtocolCategories, LatestUpdates, and Newsletter modules inside a localized Layout.`, `首页在本地化 Layout 中组合 Hero、ProtocolCategories、LatestUpdates 和 Newsletter 模块。`, `De homepage combineert Hero, ProtocolCategories, LatestUpdates en Newsletter modules binnen een gelokaliseerde Layout.`) }, { title: l(`API and CMS Layer`, `API 与 CMS 层`, `API- en CMS-laag`), description: l(`Axios clients provide centralized configuration, token injection, 401 handling, 429 retry backoff, WordPress posts/categories/tags/media/search, and custom backend product/category/search/user endpoints.`, `Axios 客户端提供集中配置、token 注入、401 处理、429 退避重试、WordPress posts/categories/tags/media/search，以及自定义后端 product/category/search/user 端点。`, `Axios-clients bieden centrale config, tokeninjectie, 401-handling, 429 retry backoff, WordPress posts/categories/tags/media/search en custom backend product/category/search/user endpoints.`) }, { title: l(`Reusable UI Foundation`, `可复用 UI 基础`, `Herbruikbare UI-basis`), description: l(`The project includes common components, form controls, layout components, UI cards/buttons, pagination, hooks, store structure, utilities, and typed configuration.`, `项目包含 common 组件、表单控件、layout 组件、UI 卡片/按钮、分页、hooks、store 结构、工具函数和类型化配置。`, `Het project bevat common components, form controls, layout components, UI cards/buttons, paginatie, hooks, storestructuur, utilities en getypeerde config.`) }];
  const maintenance = [l(`Expand protocol timelines, visual explainers, speed/compatibility tables, and comparison tools while keeping explanations plain and verifiable.`, `继续扩展协议时间线、图形讲解、速度/兼容性表格和对比工具，同时保持解释通俗且可验证。`, `Protocoltijdlijnen, visuele explainers, speed/compatibility tabellen en vergelijkingstools uitbreiden met duidelijke en verifieerbare uitleg.`), l(`Stabilize WordPress/API integrations, authentication boundaries, retry behavior, and localized content pipelines before adding heavier interactive tools.`, `在加入更重的交互工具前，先稳定 WordPress/API 集成、认证边界、重试行为和本地化内容流水线。`, `WordPress/API-integraties, authgrenzen, retrygedrag en localized content pipelines stabiliseren voordat zwaardere interactieve tools worden toegevoegd.`), l(`Keep the editorial standard high: the site should fight vague marketing claims with sourced, structured, technically accurate explanations.`, `保持高编辑标准：网站应该用有来源、结构化、技术准确的解释对抗模糊营销话术。`, `De redactionele standaard hoog houden: de site moet vage marketingclaims bestrijden met brongebaseerde, gestructureerde en technisch accurate uitleg.`)];

  return (
    <>
      <section className="section-shell epsa-website-hero">
        <div className="epsa-website-hero__inner">
          <div className="epsa-website-hero__content">
            <h1 className="epsa-website-hero__title">Spec <span>Analysis</span></h1>
            <p className="epsa-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="epsa-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} epsa-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="epsa-website-hero__visual" aria-hidden="true">
            <NeoCard className="epsa-website-browser-card">
              <div className="epsa-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="epsa-website-browser-card__hero"><Cpu size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="epsa-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell epsa-website-section">
        <h2 className="epsa-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="epsa-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="epsa-website-focus-grid">
          <NeoCard hoverable className="epsa-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="epsa-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="epsa-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell epsa-website-section">
        <h2 className="epsa-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="epsa-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="epsa-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell epsa-website-section">
        <h2 className="epsa-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="epsa-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="epsa-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default ElectronicProductSpecsShowcase;
