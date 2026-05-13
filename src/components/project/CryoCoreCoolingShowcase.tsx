import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface CryoCoreCoolingShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const CryoCoreCoolingShowcase: React.FC<CryoCoreCoolingShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = project.websiteUrl ?? project.demoUrl ?? '/projects/cryocore-cooling';
  const focus = l(`A technical B2B liquid-cooling company website for AI factories, HPC, and data center infrastructure, combining product storytelling with CMS-backed product data and lead-generation flows.`, `一个面向 AI 工厂、HPC 和数据中心基础设施的技术型 B2B 液冷企业站，把产品叙事、CMS 产品数据和线索转化流程结合起来。`, `Een technische B2B-website voor vloeistofkoeling in AI-fabrieken, HPC en datacenterinfrastructuur, met productstorytelling, CMS-productdata en leadgeneratieflows.`);
  const value = l(`The site is structured for buyers who need to understand CDU series, air-water heat exchangers, cooling sources, components, direct-to-chip cooling, resources, case studies, support, and quote requests.`, `网站面向需要理解 CDU 系列、气水换热器、冷源、组件、冷板直连液冷、资源、案例、支持和报价请求的技术采购与企业客户。`, `De site is opgezet voor kopers die CDU-series, air-water heat exchangers, cooling sources, componenten, direct-to-chip cooling, resources, cases, support en offerteaanvragen moeten begrijpen.`);
  const implementation = l(`The project delivers a modern multilingual frontend with structured product routes, WordPress-powered product and content integration, quote and support flows, technical resources, case-study pages, and a deployment direction suitable for a growing B2B product catalogue.`, `项目交付了现代多语言前端、结构化产品路由、基于 WordPress 的产品与内容集成、报价与支持流程、技术资源、案例页面，以及适合 B2B 产品目录持续增长的部署方向。`, `Het project levert een moderne meertalige frontend met gestructureerde productroutes, WordPress-gedreven product- en contentintegratie, quote- en supportflows, technische resources, case-study pagina’s en een deploymentrichting die past bij een groeiende B2B-productcatalogus.`);
  const vision = l(`The vision is to make a serious technical sales platform for advanced cooling products: not a one-page brochure, but a maintainable B2B product system where engineering content, product records, resources, and quote intent can grow together.`, `愿景是把它做成先进冷却产品的严肃技术销售平台：不是单页宣传册，而是工程内容、产品记录、资源中心和报价意向可以一起增长的可维护 B2B 产品系统。`, `De visie is een serieus technisch salesplatform voor advanced cooling products: geen one-page brochure, maar een onderhoudbaar B2B-productsysteem waarin engineering content, productrecords, resources en quote intent samen groeien.`);
  const structure = ['Products', 'Solutions', 'Quote'];
  const modules = [{ title: l(`Product System`, `产品系统`, `Productsysteem`), description: l(`Product pages cover CDU Series, Air-Water Heat Exchangers, Cooling Sources, and Components, with WordPress product endpoints transformed into typed liquid-cooling product cards and details.`, `产品页覆盖 CDU Series、Air-Water Heat Exchangers、Cooling Sources 和 Components，并把 WordPress 产品端点转换为类型化的液冷产品卡片和详情。`, `Productpagina’s dekken CDU Series, Air-Water Heat Exchangers, Cooling Sources en Components, waarbij WordPress-productendpoints worden omgezet naar getypeerde cooling-productkaarten en details.`) }, { title: l(`CMS Integration`, `CMS 集成`, `CMS-integratie`), description: l(`Axios service layers connect to WordPress REST endpoints, handle embedded media, ACF-like metadata, authentication tokens, debug logging, and API error handling.`, `Axios 服务层连接 WordPress REST 端点，处理嵌入媒体、类似 ACF 的元数据、认证 token、调试日志和 API 错误。`, `Axios-servicelagen verbinden met WordPress REST-endpoints en verwerken embedded media, ACF-achtige metadata, auth tokens, debug logging en API-fouten.`) }, { title: l(`Technical Sales Pages`, `技术销售页面`, `Technische salespagina’s`), description: l(`Solutions, resources, support, quote, blog, and case-study routes create a full buying journey for enterprise liquid-cooling research and enquiry.`, `Solutions、Resources、Support、Quote、Blog 和 Case Studies 路由形成完整的企业液冷采购研究与询盘路径。`, `Solutions-, resources-, support-, quote-, blog- en case-study-routes vormen een volledige buyer journey voor enterprise liquid-cooling research en aanvragen.`) }, { title: l(`Multilingual Operations`, `多语言运营`, `Meertalige operatie`), description: l(`The i18n setup imports page-level namespaces for hero, products, support, contact, quote, about, solutions, resources, header, footer, search, legal, and more.`, `i18n 结构按页面命名空间导入 hero、products、support、contact、quote、about、solutions、resources、header、footer、search、legal 等内容。`, `De i18n-setup importeert paginanamespaces voor hero, products, support, contact, quote, about, solutions, resources, header, footer, search, legal en meer.`) }];
  const maintenance = [l(`Further strengthen product data reliability, media handling, custom fields, and fallback presentation for a more resilient catalogue experience.`, `继续强化产品数据可靠性、媒体处理、自定义字段和备用展示能力，让产品目录体验更稳健。`, `Productdata, mediamapping, custom fields en fallback-presentatie verder versterken voor een veerkrachtigere cataloguservaring.`), l(`Continue separating frontend, API, CMS, and database responsibilities in Docker/Nginx/SiteGround-style deployment paths.`, `继续在 Docker/Nginx/SiteGround 式部署路径中清晰分离前端、API、CMS 和数据库职责。`, `Frontend, API, CMS en databaseverantwoordelijkheden blijven scheiden in Docker/Nginx/SiteGround-achtige deploymentpaden.`), l(`Expand product resources, engineering notes, case studies, and quote workflow so technical buyers can move from research to contact with less friction.`, `扩展产品资源、工程说明、案例和报价流程，让技术采购从研究到联系的路径更顺畅。`, `Productresources, engineering notes, cases en quote workflow uitbreiden zodat technische kopers makkelijker van research naar contact gaan.`)];

  return (
    <>
      <section className="section-shell cryocore-website-hero">
        <div className="cryocore-website-hero__inner">
          <div className="cryocore-website-hero__content">
            <h1 className="cryocore-website-hero__title">CryoCore <span>Cooling</span></h1>
            <p className="cryocore-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="cryocore-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} cryocore-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="cryocore-website-hero__visual" aria-hidden="true">
            <NeoCard className="cryocore-website-browser-card">
              <div className="cryocore-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="cryocore-website-browser-card__hero"><Snowflake size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="cryocore-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell cryocore-website-section">
        <h2 className="cryocore-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="cryocore-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="cryocore-website-focus-grid">
          <NeoCard hoverable className="cryocore-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="cryocore-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="cryocore-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell cryocore-website-section">
        <h2 className="cryocore-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="cryocore-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="cryocore-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell cryocore-website-section">
        <h2 className="cryocore-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="cryocore-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="cryocore-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default CryoCoreCoolingShowcase;
