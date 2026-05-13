import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface HarryPersonalShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const HarryPersonalShowcase: React.FC<HarryPersonalShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = project.websiteUrl ?? project.demoUrl ?? '/projects/harry';
  const focus = l(`A polished portfolio platform that presents Harry’s projects through structured case studies, multilingual content, download access, deployment context, security notes, and a consistent dark-neumorphic visual system.`, `一个精致的作品集平台，通过结构化案例、多语言内容、下载入口、部署背景、安全说明和统一的深色新拟态视觉系统展示 Harry 的项目能力。`, `Een verfijnd portfolioplatform dat Harry’s projecten presenteert via gestructureerde case studies, meertalige content, downloadtoegang, deploymentcontext, security notes en een consistent dark-neumorphic visueel systeem.`);
  const value = l(`Its role is to turn many separate projects into one understandable product ecosystem: users can browse projects, filter categories, inspect release assets, read security/deployment baselines, and open specialized case pages.`, `它的作用是把多个分散项目变成一个容易理解的产品生态：用户可以浏览项目、筛选分类、查看发布资源、阅读安全/部署基线，并打开专属案例页。`, `De rol is losse projecten omzetten in één begrijpelijk productecosysteem: gebruikers browsen projecten, filteren categorieën, bekijken releases, lezen security/deployment baselines en openen gespecialiseerde casepages.`);
  const implementation = l(`The experience is built with routed project pages, multilingual presentation, structured project data, category and status filtering, release-aware downloads, specialized case-study layouts, and a carefully separated styling system for long-term maintainability.`, `这个体验由项目路由、多语言展示、结构化项目数据、分类与状态筛选、发布版本下载、专属案例布局和清晰分层的样式系统共同支撑，便于长期维护。`, `De ervaring is gebouwd met routed project pages, meertalige presentatie, gestructureerde projectdata, category/status filtering, release-aware downloads, gespecialiseerde case-study layouts en een zorgvuldig gescheiden stylingsysteem voor langdurige onderhoudbaarheid.`);
  const vision = l(`The vision is to make Harry the reliable front door for all work: not just a résumé, but a living catalogue that explains what each system does, why it matters, how it is delivered, and how it can be trusted.`, `愿景是让 Harry 成为所有作品可靠的总入口：它不只是简历，而是一个持续更新的目录，解释每个系统做什么、为什么重要、如何交付、为什么可信。`, `De visie is Harry de betrouwbare voordeur voor al het werk maken: geen cv, maar een levende catalogus die uitlegt wat elk systeem doet, waarom het telt, hoe het wordt geleverd en waarom het te vertrouwen is.`);
  const structure = ['Projects', 'Downloads', 'Security'];
  const modules = [{ title: l(`Project Catalogue`, `项目目录`, `Projectcatalogus`), description: l(`Each project is presented with clear positioning, category, status, technology choices, release access, security notes, deployment context, use cases, and future direction.`, `每个项目都以清晰的定位、分类、状态、技术选择、发布入口、安全说明、部署背景、使用场景和后续方向进行展示。`, `Elk project wordt gepresenteerd met heldere positionering, categorie, status, technologiekeuzes, release-toegang, security notes, deploymentcontext, use cases en toekomstige richting.`) }, { title: l(`Tailored Case Studies`, `定制案例展示`, `Case studies op maat`), description: l(`Different project types receive dedicated layouts, allowing websites, desktop tools, and product platforms to show their strengths in the most relevant format.`, `不同项目类型使用专属展示布局，让网站、桌面工具和产品平台都能以最适合的形式呈现优势。`, `Verschillende projecttypen krijgen eigen layouts, zodat websites, desktoptools en productplatforms hun sterke punten in het juiste format tonen.`) }, { title: l(`Downloads & Safety`, `下载与安全`, `Downloads en veiligheid`), description: l(`Download pages highlight version, size, SHA-256, release date, and access links, while security content explains how delivery and server operations are handled responsibly.`, `下载页展示版本、大小、SHA-256、发布日期和访问链接；安全内容说明交付与服务器运维如何被负责任地处理。`, `Downloadpagina’s tonen versie, grootte, SHA-256, releasedatum en links, terwijl securitycontent uitlegt hoe delivery en server operations verantwoord worden aangepakt.`) }, { title: l(`Multilingual Site Shell`, `多语言站点壳层`, `Meertalige siteschil`), description: l(`English, Chinese, and Dutch content are aligned across the home page, project catalogue, downloads, contact page, and project detail experiences.`, `英文、中文和荷兰语内容在首页、项目目录、下载、联系页面和项目详情体验中保持一致。`, `Engelse, Chinese en Nederlandse content blijft consistent over home, projectcatalogus, downloads, contactpagina en projectdetailervaringen.`) }];
  const maintenance = [l(`Keep every case study clear, specific, and outcome-focused so visitors can quickly understand both the product value and the engineering depth.`, `持续让每个案例页保持清晰、具体、结果导向，让访客快速理解产品价值和工程深度。`, `Elke case study helder, specifiek en outcome-focused houden zodat bezoekers snel zowel productwaarde als engineeringdiepte begrijpen.`), l(`Improve release metadata, screenshots, preview assets, dedicated showcase layouts, and download verification practices as projects mature.`, `随着项目成熟，继续补强发布元数据、截图、预览资源、专属展示布局和下载校验实践。`, `Release metadata, screenshots, preview assets, dedicated showcase layouts en downloadverificatie verbeteren naarmate projecten groeien.`), l(`Maintain a consistent design system so the portfolio remains polished, readable, and easy to extend as more projects are added.`, `持续维护统一设计系统，让作品集在加入更多项目后仍然精致、易读、容易扩展。`, `Een consistent designsysteem onderhouden zodat het portfolio verfijnd, leesbaar en uitbreidbaar blijft wanneer meer projecten worden toegevoegd.`)];

  return (
    <>
      <section className="section-shell harrysite-website-hero">
        <div className="harrysite-website-hero__inner">
          <div className="harrysite-website-hero__content">
            <h1 className="harrysite-website-hero__title">Harry <span>Showcase</span></h1>
            <p className="harrysite-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="harrysite-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} harrysite-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Visit Website'}</a>
            </div>
          </div>
          <div className="harrysite-website-hero__visual" aria-hidden="true">
            <NeoCard className="harrysite-website-browser-card">
              <div className="harrysite-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="harrysite-website-browser-card__hero"><UserRound size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="harrysite-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell harrysite-website-section">
        <h2 className="harrysite-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="harrysite-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="harrysite-website-focus-grid">
          <NeoCard hoverable className="harrysite-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="harrysite-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="harrysite-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell harrysite-website-section">
        <h2 className="harrysite-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="harrysite-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="harrysite-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell harrysite-website-section">
        <h2 className="harrysite-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="harrysite-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="harrysite-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default HarryPersonalShowcase;
