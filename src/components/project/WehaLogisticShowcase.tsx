import React from 'react';
import { ExternalLink, Truck, Warehouse, Package, Globe, ShieldCheck, Users, BarChart3, Route, Clock, FileText, ArrowRight } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface WehaLogisticShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const WehaLogisticShowcase: React.FC<WehaLogisticShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = 'https://wehalogistic.nl';
  const focus = l(`A professional logistics and warehousing company website built for enterprise clients, featuring comprehensive service catalogs, warehouse capabilities, cargo tracking, and B2B contact surfaces.`, `一个面向企业客户的专业物流与仓储公司网站，包含全面的服务目录、仓储能力、货运跟踪和 B2B 联系界面。`, `Een professionele logistieke en opslagbedrijfswebsite voor enterprise klanten, met uitgebreide servicecatalogi, opslagcapaciteiten, vrachttracking en B2B contactoppervlakken.`);
  const value = l(`WEHA Logistic establishes trust with enterprise clients through clear service presentation, operational transparency, and professional B2B workflows that convert inquiries into long-term partnerships.`, `WEHA Logistic 通过清晰的服务展示、运营透明度和专业的 B2B 工作流，为企业客户建立信任，将询盘转化为长期合作伙伴关系。`, `WEHA Logistic bouwt vertrouwen bij enterprise klanten door duidelijke servicepresentatie, operationele transparantie en professionele B2B workflows die aanvragen omzetten in langdurige partnerschappen.`);
  const implementation = l(`The website features multi-page service navigation, warehouse capability showcases, cargo tracking integration, supply chain solution presentations, and professional inquiry handling with proper validation and rate limiting.`, `网站包含多页服务导航、仓储能力展示、货运跟踪集成、供应链解决方案展示，以及带验证和速率限制的专业询盘处理。`, `De website beschikt over multipage service navigatie, opslagcapaciteit showcases, vrachttracking integratie, supply chain oplossing presentaties en professionele klantaanvraag afhandeling met validatie en rate limiting.`);
  const vision = l(`The vision is to become a trusted logistics partner for European enterprises by providing transparent, reliable, and comprehensive warehousing and supply chain services through a professional digital presence.`, `愿景是通过专业的数字形象，为欧洲企业提供透明、可靠、全面的仓储和供应链服务，成为值得信赖的物流合作伙伴。`, `De visie is om een vertrouwde logistieke partner te worden voor Europese enterprises door transparante, betrouwbare en uitgebreide opslag- en supply chain services aan te bieden via een professionele digitale aanwezigheid.`);
  const structure = ['Services', 'Warehouse', 'Tracking', 'Contact'];
  const modules = [
    { 
      title: l(`Service Catalog`, `服务目录`, `Servicecatalogus`), 
      description: l(`Comprehensive logistics services including freight forwarding, warehousing, distribution, and supply chain solutions are clearly presented for enterprise clients.`, `包括货运代理、仓储、配送和供应链解决方案的全面物流服务，为企业客户清晰展示。`, `Uitgebreide logistieke services waaronder freight forwarding, warehousing, distributie en supply chain oplossingen worden duidelijk gepresenteerd voor enterprise klanten.`) 
    },
    { 
      title: l(`Warehouse Capabilities`, `仓储能力`, `Opslagcapaciteiten`), 
      description: l(`Detailed warehouse information including storage capacity, handling capabilities, security measures, and operational workflows help clients understand service quality.`, `详细的仓库信息，包括存储容量、处理能力、安全措施和运营流程，帮助客户了解服务质量。`, `Gedetailleerde magazijninformatie waaronder opslagcapaciteit, verwerkingsmogelijkheden, veiligheidsmaatregelen en operationele workflows helpen klanten de servicekwaliteit te begrijpen.`) 
    },
    { 
      title: l(`Cargo Tracking`, `货运跟踪`, `Vrachttracking`), 
      description: l(`Real-time cargo tracking and shipment status updates provide transparency and peace of mind for clients throughout the logistics process.`, `实时货运跟踪和货物状态更新，在整个物流过程中为客户提供透明度和安心感。`, `Real-time vrachttracking en zendingstatus updates bieden transparantie en gemoedsrust voor klanten gedurende het logistieke proces.`) 
    },
    { 
      title: l(`B2B Contact & Inquiry`, `B2B 联系与询盘`, `B2B Contact & Aanvraag`), 
      description: l(`Professional contact surfaces with inquiry forms, validation, and rate limiting ensure secure and efficient communication with potential clients.`, `带询盘表单、验证和速率限制的专业联系界面，确保与潜在客户的安全高效沟通。`, `Professionele contactoppervlakken met aanvraagformulieren, validatie en rate limiting zorgen voor veilige en efficiënte communicatie met potentiële klanten.`) 
    }
  ];
  const maintenance = [
    l(`Continue expanding service details, warehouse capabilities, and case studies to strengthen client trust.`, `继续扩展服务详情、仓储能力和案例研究，加强客户信任。`, `Service details, opslagcapaciteiten en case studies verder uitbreiden om klantvertrouwen te versterken.`),
    l(`Enhance cargo tracking features and integrate with logistics systems for real-time updates.`, `增强货运跟踪功能，与物流系统集成实现实时更新。`, `Vrachttracking functies verbeteren en integreren met logistieke systemen voor real-time updates.`),
    l(`Optimize B2B inquiry workflows and improve conversion rates through better user experience.`, `优化 B2B 询盘工作流，通过更好的用户体验提高转化率。`, `B2B aanvraag workflows optimaliseren en conversierates verbeteren door betere gebruikerservaring.`)
  ];

  return (
    <>
      <section className="section-shell weha-logistic-hero">
        <div className="weha-logistic-hero__inner">
          <div className="weha-logistic-hero__content">
            <h1 className="weha-logistic-hero__title">WEHA <span>Logistic</span></h1>
            <p className="weha-logistic-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="weha-logistic-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} weha-logistic-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="weha-logistic-hero__visual" aria-hidden="true">
            <NeoCard className="weha-logistic-browser-card">
              <div className="weha-logistic-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="weha-logistic-browser-card__hero"><Truck size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="weha-logistic-browser-card__grid">{structure.map((section) => <div key={section}><Route size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell weha-logistic-section">
        <h2 className="weha-logistic-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="weha-logistic-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="weha-logistic-focus-grid">
          <NeoCard hoverable className="weha-logistic-focus-card"><ShieldCheck size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="weha-logistic-focus-card"><Package size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="weha-logistic-focus-card"><Globe size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell weha-logistic-section">
        <h2 className="weha-logistic-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="weha-logistic-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="weha-logistic-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell weha-logistic-section">
        <h2 className="weha-logistic-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="weha-logistic-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="weha-logistic-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default WehaLogisticShowcase;
