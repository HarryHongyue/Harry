import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface SongYanShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const SongYanShowcase: React.FC<SongYanShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = 'https://songyan.nl';
  const focus = l(`A high-end fragrance independent store architecture built around a custom frontend, WordPress/WooCommerce backend, multilingual routing, containerized infrastructure, and commerce operations.`, `一个高端香薰独立站架构，围绕定制前端、WordPress/WooCommerce 后端、多语言路由、容器化基础设施和电商运营来构建。`, `Een high-end fragrance independent store-architectuur rond een custom frontend, WordPress/WooCommerce backend, meertalige routing, containerized infrastructure en commerce operations.`);
  const value = l(`SongYan is presented as a premium ecommerce foundation where brand storytelling, product discovery, multilingual shopping, checkout readiness, customer policies, wholesale potential, SEO, and operations are treated as one coherent store experience.`, `SongYan 被呈现为高端电商基础设施，将品牌叙事、产品发现、多语言购物、结账准备、客户政策、批发潜力、SEO 和运营组织成统一的店铺体验。`, `SongYan wordt gepresenteerd als premium ecommercefundament waarin brand storytelling, product discovery, meertalig shoppen, checkout readiness, klantbeleid, wholesale potential, SEO en operations één coherente winkelervaring vormen.`);
  const implementation = l(`The system combines a custom storefront with WordPress and WooCommerce, multilingual product content, enriched product fields, cart and checkout capabilities, containerized infrastructure, caching, privacy-aware checkout messaging, and operational backup practices.`, `系统结合了定制店面、WordPress 与 WooCommerce、多语言产品内容、增强产品字段、购物车与结账能力、容器化基础设施、缓存、隐私友好的结账提示和运营备份实践。`, `Het systeem combineert een custom storefront met WordPress en WooCommerce, meertalige productcontent, verrijkte productvelden, cart- en checkoutmogelijkheden, containerized infrastructure, caching, privacy-aware checkout messaging en operationele backuppraktijken.`);
  const vision = l(`The vision is a self-hosted European-ready ecommerce foundation: multilingual, SEO-aware, payment-ready, privacy-conscious, easy to migrate, and expandable from consumer storefront to future B2B or wholesale surfaces.`, `愿景是打造一个适合欧洲市场的自托管电商底座：多语言、重视 SEO、可接支付、尊重隐私、易迁移，并能从消费者店面扩展到 B2B 或批发表面。`, `De visie is een self-hosted ecommercefundament voor Europa: meertalig, SEO-aware, payment-ready, privacy-conscious, migreerbaar en uitbreidbaar van consumentenstorefront naar B2B/wholesale oppervlakken.`);
  const structure = ['Storefront', 'WooCommerce', 'i18n'];
  const modules = [{ title: l(`Headless Commerce Frontend`, `Headless 电商前端`, `Headless commerce frontend`), description: l(`Locale-aware layouts, navigation, product discovery, category browsing, cart access, and checkout paths create a focused storefront experience.`, `本地化布局、导航、产品发现、分类浏览、购物车入口和结账路径共同形成专注的店面体验。`, `Locale-aware layouts, navigatie, product discovery, category browsing, cart access en checkoutpaden vormen een gerichte storefront experience.`) }, { title: l(`WooCommerce Data Layer`, `WooCommerce 数据层`, `WooCommerce datalaag`), description: l(`Product images, prices, stock status, categories, attributes, and reviews are normalized into a clean shopping experience powered by WooCommerce data.`, `产品图片、价格、库存、分类、属性和评价被整理成清晰的购物体验，并由 WooCommerce 数据支撑。`, `Productbeelden, prijzen, voorraadstatus, categorieën, attributen en reviews worden genormaliseerd tot een heldere winkelervaring op WooCommerce-data.`) }, { title: l(`WordPress Customization`, `WordPress 定制`, `WordPress customization`), description: l(`Fragrance-specific product information such as scent notes, mood tags, burn time, ingredients, safety guidance, origin, and usage instructions enriches each product page.`, `香调、情绪标签、燃烧时间、成分、安全说明、产地和使用方式等香薰专属信息，让每个产品页更完整。`, `Fragrance-specifieke productinformatie zoals scent notes, mood tags, burn time, ingrediënten, veiligheidsadvies, herkomst en gebruiksinstructies verrijkt elke productpagina.`) }, { title: l(`Infrastructure & Governance`, `基础设施与治理`, `Infrastructuur en governance`), description: l(`The deployment approach separates storefront, WordPress, database, cache, reverse proxy, backups, environment settings, and media governance for safer operations.`, `部署方式清晰分离店面、WordPress、数据库、缓存、反向代理、备份、环境配置和媒体治理，让运营更安全。`, `De deploymentaanpak scheidt storefront, WordPress, database, cache, reverse proxy, backups, environment settings en mediagovernance voor veiligere operations.`) }];
  const maintenance = [l(`Deepen the shopping journey across product discovery, cart, checkout, payment readiness, and editorial content.`, `继续深化从产品发现、购物车、结账、支付准备到内容运营的完整购物路径。`, `De shopping journey verdiepen over product discovery, cart, checkout, payment readiness en redactionele content.`), l(`Strengthen WordPress, WooCommerce, media handling, API exposure, email delivery, payment configuration, backups, cache management, and privacy-facing checkout text.`, `持续强化 WordPress、WooCommerce、媒体处理、API 暴露、邮件发送、支付配置、备份、缓存管理和隐私相关结账文案。`, `WordPress, WooCommerce, media handling, API exposure, email delivery, payment configuration, backups, cache management en privacy-facing checkouttekst versterken.`), l(`Expand multilingual SEO, product storytelling, blog content, wholesale flow, and a future B2B storefront without weakening the self-hosted foundation.`, `扩展多语言 SEO、产品叙事、博客内容、批发流程和未来 B2B 店面，同时保持自托管底座清晰稳定。`, `Meertalige SEO, productstorytelling, blogcontent, wholesale flow en toekomstige B2B storefront uitbreiden zonder de self-hosted basis te verzwakken.`)];

  return (
    <>
      <section className="section-shell songyan-website-hero">
        <div className="songyan-website-hero__inner">
          <div className="songyan-website-hero__content">
            <h1 className="songyan-website-hero__title">Song <span>Yan</span></h1>
            <p className="songyan-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="songyan-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} songyan-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="songyan-website-hero__visual" aria-hidden="true">
            <NeoCard className="songyan-website-browser-card">
              <div className="songyan-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="songyan-website-browser-card__hero"><ShoppingBag size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="songyan-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell songyan-website-section">
        <h2 className="songyan-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="songyan-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="songyan-website-focus-grid">
          <NeoCard hoverable className="songyan-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="songyan-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="songyan-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell songyan-website-section">
        <h2 className="songyan-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="songyan-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="songyan-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell songyan-website-section">
        <h2 className="songyan-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="songyan-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="songyan-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default SongYanShowcase;
