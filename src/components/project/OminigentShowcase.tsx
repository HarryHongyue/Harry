import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface OminigentShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const OminigentShowcase: React.FC<OminigentShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = project.websiteUrl ?? project.demoUrl ?? '/projects/ominigent';
  const focus = l(`A founder-led B2B company website that turns practical engineering, warehouse delivery, process optimisation, and operations automation into a clear commercial service surface.`, `一个创始人驱动的 B2B 公司官网，把工程能力、仓库交付、流程优化和运营自动化重新组织成清晰的商业服务表面。`, `Een founder-led B2B-bedrijfswebsite die praktische engineering, warehouse delivery, procesoptimalisatie en operationsautomatisering omzet in een helder commercieel serviceoppervlak.`);
  const value = l(`The website presents Ominigent as a practical partner for companies that need clearer systems, better operational visibility, and a structured path from first enquiry to scoped delivery.`, `网站将 Ominigent 呈现为务实的企业合作伙伴，帮助客户获得更清晰的系统、更好的运营可视化，以及从初次咨询到明确交付范围的完整路径。`, `De website positioneert Ominigent als praktische partner voor bedrijven die duidelijkere systemen, betere operationele zichtbaarheid en een gestructureerd pad van aanvraag naar scoped delivery nodig hebben.`);
  const implementation = l(`The delivered experience includes multilingual content, a service overview, detailed service pages, pricing guidance, case highlights, an about page, and a contact flow that captures service type and project stage for better-qualified enquiries.`, `交付体验包含多语言内容、服务总览、详细服务页、定价说明、案例展示、关于页面，以及可收集服务类型和项目阶段的联系流程，让咨询更容易进入有效沟通。`, `De geleverde ervaring bevat meertalige content, serviceoverzicht, gedetailleerde servicepagina’s, pricing guidance, case highlights, een aboutpagina en een contactflow die servicetype en projectfase vastlegt voor beter gekwalificeerde aanvragen.`);
  const vision = l(`The vision is to make Ominigent a credible bridge between software and real operations: a site that can sell custom systems, logistics digitisation, warehouse implementation support, and Excel-to-system transformation without sounding like a generic agency.`, `愿景是让 Ominigent 成为软件与真实运营之间可信的桥梁：它能销售定制系统、物流数字化、仓库实施支持和 Excel 到系统的转型，但不显得像泛泛的软件外包公司。`, `De visie is Ominigent positioneren als geloofwaardige brug tussen software en echte operations: custom systems, logistieke digitalisering, warehouse implementation support en Excel-to-system transformatie verkopen zonder generiek agencygevoel.`);
  const structure = ['Services', 'Pricing', 'Contact'];
  const modules = [{ title: l(`Service Catalogue`, `服务目录`, `Servicecatalogus`), description: l(`Six service lines cover custom software, enterprise systems, warehouse design/build/automation, process improvement, Excel/data automation, and logistics digital transformation.`, `6 条服务线覆盖定制软件、企业系统、仓库设计建设自动化、流程改进、Excel/数据自动化和物流数字化转型。`, `Zes servicelijnen dekken custom software, enterprise systems, warehouse design/build/automation, procesverbetering, Excel/data automation en logistieke digitalisering.`) }, { title: l(`Pricing & Engagement`, `定价与合作方式`, `Pricing en samenwerking`), description: l(`Pricing pages explain hourly, daily, fixed project, retainer, hybrid models, starting anchors, separately quoted costs, and unified pricing rules.`, `定价页解释按小时、按天、固定项目、维护订阅、混合模式、起步价锚点、单独报价项和统一定价规则。`, `Pricingpagina’s leggen hourly, daily, fixed project, retainer, hybrid modellen, startankers, apart geoffreerde kosten en uniforme pricingregels uit.`) }, { title: l(`Cases & Trust Layer`, `案例与信任层`, `Cases en trustlaag`), description: l(`Case cards translate systems delivery into business outcomes such as fewer handovers, stronger visibility, workflow redesign, and operational control.`, `案例卡片把系统交付翻译成业务结果，例如减少人工交接、增强可视化、重构流程和提升运营控制力。`, `Casekaarten vertalen systems delivery naar businessresultaten zoals minder overdrachten, meer zichtbaarheid, workflow redesign en operationele controle.`) }, { title: l(`Lead Conversion`, `线索转化`, `Leadconversie`), description: l(`The contact page collects project stage, service type, subject, and message through Formspree so enquiries arrive with enough scoping context.`, `联系页通过 Formspree 收集项目阶段、服务类型、主题和消息，让咨询进入时就带有初步范围信息。`, `De contactpagina verzamelt projectfase, servicetype, onderwerp en bericht via Formspree zodat aanvragen met scopecontext binnenkomen.`) }];
  const maintenance = [l(`Continue sharpening the service pages around business outcomes, operational clarity, and industry-specific delivery value.`, `持续围绕业务结果、运营清晰度和行业交付价值打磨服务页面。`, `Servicepagina’s blijven aanscherpen rond business outcomes, operationele duidelijkheid en sectorspecifieke deliverywaarde.`), l(`Refine case studies with concrete logistics, warehouse, software, and Excel automation examples as real proof accumulates.`, `随着真实证明积累，继续用物流、仓库、软件和 Excel 自动化案例补强 case studies。`, `Case studies verfijnen met concrete logistiek-, warehouse-, software- en Excel-automation voorbeelden zodra bewijs groeit.`), l(`Improve contact workflow, analytics, SEO pages, and service-specific conversion paths around high-intent B2B searches.`, `围绕高意图 B2B 搜索持续优化联系流程、分析、SEO 页面和服务专属转化路径。`, `Contactflow, analytics, SEO-pagina’s en servicespecifieke conversiepaden rond high-intent B2B searches verbeteren.`)];

  return (
    <>
      <section className="section-shell ominigent-website-hero">
        <div className="ominigent-website-hero__inner">
          <div className="ominigent-website-hero__content">
            <h1 className="ominigent-website-hero__title">Omini<span>gent</span></h1>
            <p className="ominigent-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="ominigent-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} ominigent-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="ominigent-website-hero__visual" aria-hidden="true">
            <NeoCard className="ominigent-website-browser-card">
              <div className="ominigent-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="ominigent-website-browser-card__hero"><BriefcaseBusiness size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="ominigent-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell ominigent-website-section">
        <h2 className="ominigent-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="ominigent-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="ominigent-website-focus-grid">
          <NeoCard hoverable className="ominigent-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="ominigent-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="ominigent-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell ominigent-website-section">
        <h2 className="ominigent-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="ominigent-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="ominigent-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell ominigent-website-section">
        <h2 className="ominigent-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="ominigent-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="ominigent-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default OminigentShowcase;
