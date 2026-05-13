import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface HarrysHubShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const HarrysHubShowcase: React.FC<HarrysHubShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = project.websiteUrl ?? project.demoUrl ?? '/projects/harrys-hub';
  const focus = l(`A multilingual developer resource hub that organizes official software download destinations, tool categories, versions, documentation links, and future learning resources into a navigable knowledge platform.`, `一个多语言开发者资源站，把官方软件下载入口、工具分类、版本、文档链接和未来学习资源组织成可导航的知识平台。`, `Een meertalige developer resource hub die officiële softwaredownloadbestemmingen, toolcategorieën, versies, documentatielinks en toekomstige leerresources ordent in een navigeerbaar kennisplatform.`);
  const value = l(`It does not mirror installers. Its value is trust and organization: developers can move from category to tool to version to official vendor website without guessing which download page is legitimate.`, `它不镜像安装包，价值在于信任和组织：开发者可以从分类到工具到版本再到官方厂商页面，不用猜哪个下载页可信。`, `Het mirrort geen installers. De waarde zit in vertrouwen en ordening: developers gaan van categorie naar tool naar versie naar officiële vendorwebsite zonder te raden welke downloadpagina betrouwbaar is.`);
  const implementation = l(`The platform experience includes routed category pages, nested navigation, breadcrumbs, software detail pages with version tabs, official website actions, dark and light themes, multilingual content, and organized data sections for development tools, applications, storage, cloud operations, quality, security, and design resources.`, `平台体验包含分类路由、嵌套导航、面包屑、带版本标签的软件详情页、官方网站操作入口、深浅色主题、多语言内容，以及开发工具、应用、存储、云运维、质量、安全和设计资源等结构化数据区域。`, `De platformervaring bevat routed categoriepagina’s, nested navigation, breadcrumbs, softwaredetailpagina’s met version tabs, officiële websiteacties, dark/light themes, meertalige content en georganiseerde datasecties voor development tools, applications, storage, cloud operations, quality, security en design resources.`);
  const vision = l(`The vision is to grow from a download navigation site into a broader learning and tooling hub: official links first, then structured notes, AI learning resources, tutorials, and version-aware guidance.`, `愿景是从下载导航站成长为更完整的学习与工具资源中心：先确保官方链接，再扩展结构化笔记、AI 学习资源、教程和版本感知指导。`, `De visie is groeien van downloadnavigatiesite naar bredere leer- en toolinghub: officiële links eerst, daarna gestructureerde notes, AI-leerresources, tutorials en version-aware guidance.`);
  const structure = ['Categories', 'Software Detail', 'Official Links'];
  const modules = [{ title: l(`Hierarchical Category Model`, `层级分类模型`, `Hiërarchisch categoriemodel`), description: l(`Category factories generate main categories, categories, subcategories, sub-subcategories, and tool items for programming languages, build tools, IDEs, terminals, databases, cloud tools, and more.`, `分类工厂生成主分类、分类、子分类、子子分类和工具项，覆盖编程语言、构建工具、IDE、终端、数据库、云工具等。`, `Category factories genereren hoofdcategorieën, categorieën, subcategorieën, sub-subcategorieën en toolitems voor programmeertalen, build tools, IDE’s, terminals, databases, cloud tools en meer.`) }, { title: l(`Route Data Finder`, `路由数据解析`, `Routedata-finder`), description: l(`A route resolver maps URL segments to category, subcategory, or tool data and builds breadcrumbs plus related items for deep navigation.`, `路由解析器把 URL segments 映射到分类、子分类或工具数据，并生成面包屑和相关项，支撑深层导航。`, `Een route resolver mappt URL-segmenten naar category-, subcategory- of tooldata en bouwt breadcrumbs plus related items voor diepe navigatie.`) }, { title: l(`Software Detail Pages`, `软件详情页`, `Softwaredetailpagina’s`), description: l(`Software records include vendor, category, icon, official website, tags, versions, LTS/latest flags, release notes, documentation, and platform-specific download data.`, `软件记录包含厂商、分类、图标、官方网站、标签、版本、LTS/latest 标记、发布说明、文档和平台专属下载数据。`, `Softwarerecords bevatten vendor, categorie, icon, officiële website, tags, versies, LTS/latest flags, release notes, documentatie en platformspecifieke downloaddata.`) }, { title: l(`Update Monitoring Direction`, `更新监控方向`, `Update monitoring richting`), description: l(`The roadmap points toward update monitoring and freshness checks so the hub can evolve from a static directory into a maintained software guidance platform.`, `后续方向将加入更新监控与版本新鲜度检查，让平台从静态目录进一步成长为持续维护的软件指导平台。`, `De roadmap wijst naar update monitoring en freshness checks zodat de hub kan groeien van statische directory naar onderhouden software guidance platform.`) }];
  const maintenance = [l(`Keep official vendor links accurate and avoid any wording that implies Harry’s Hub hosts or redistributes installers.`, `保持官方厂商链接准确，避免任何让人误以为 Harry’s Hub 托管或二次分发安装包的表述。`, `Officiële vendorlinks accuraat houden en vermijden dat tekst suggereert dat Harry’s Hub installers host of herdistribueert.`), l(`Expand software metadata with version lifecycle, platform support, release notes, documentation, and safer download guidance.`, `扩展软件元数据，包括版本生命周期、平台支持、发布说明、文档和更安全的下载指导。`, `Softwaremetadata uitbreiden met version lifecycle, platform support, release notes, documentatie en veiligere download guidance.`), l(`Add AI learning resources, tutorials, search improvements, and backend update monitoring as the resource ecosystem matures.`, `随着资源生态成熟，加入 AI 学习资源、教程、搜索改进和后端更新监控。`, `AI-leerresources, tutorials, zoekverbeteringen en backend update monitoring toevoegen naarmate het resource-ecosysteem groeit.`)];

  return (
    <>
      <section className="section-shell harryhub-website-hero">
        <div className="harryhub-website-hero__inner">
          <div className="harryhub-website-hero__content">
            <h1 className="harryhub-website-hero__title">Harry's <span>Hub</span></h1>
            <p className="harryhub-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="harryhub-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} harryhub-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="harryhub-website-hero__visual" aria-hidden="true">
            <NeoCard className="harryhub-website-browser-card">
              <div className="harryhub-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="harryhub-website-browser-card__hero"><LibraryBig size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="harryhub-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell harryhub-website-section">
        <h2 className="harryhub-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="harryhub-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="harryhub-website-focus-grid">
          <NeoCard hoverable className="harryhub-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="harryhub-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="harryhub-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell harryhub-website-section">
        <h2 className="harryhub-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="harryhub-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="harryhub-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell harryhub-website-section">
        <h2 className="harryhub-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="harryhub-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="harryhub-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default HarrysHubShowcase;
