import React from 'react';
import { ExternalLink, Layers3, BriefcaseBusiness, Snowflake, ShoppingBag, UserRound, LibraryBig, Cpu, PanelsTopLeft, Route, Sparkles, Wrench, Telescope } from 'lucide-react';
import type { Project, SiteLocale, LocalizedText } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';
import ProjectTechStackCards from './ProjectTechStackCards';

interface FutureWebsitePlatformShowcaseProps {
  project: Project;
}

const l = (en: string, zh: string, nl: string): LocalizedText => ({ en, zh, nl });
const pickLocal = (locale: string, value: LocalizedText) => value[(locale === 'zh' || locale === 'nl' ? locale : 'en') as SiteLocale];

const FutureWebsitePlatformShowcase: React.FC<FutureWebsitePlatformShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const visitUrl = project.websiteUrl ?? project.demoUrl ?? '/projects/future-website-building-platform';
  const focus = l(`A modular SaaS platform concept designed for real multi-tenant operations, combining shared platform services, contract-first delivery, module management, permissions, auditability, background jobs, and AI-assisted workflows.`, `一个面向真实多租户运营的模块化 SaaS 平台方案，融合共享平台服务、契约优先交付、模块管理、权限控制、审计能力、后台任务和 AI 辅助工作流。`, `Een modulair SaaS-platformconcept voor echte multi-tenant operations, met gedeelde platformservices, contract-first delivery, modulebeheer, permissions, auditability, background jobs en AI-ondersteunde workflows.`);
  const value = l(`It presents commerce, support, logistics, education, storefronts, and admin operations as modular product areas supported by shared rules for contracts, permissions, events, audit trails, and future upgrades.`, `它将电商、客服、物流、教育、前台和后台运营呈现为可组合的产品模块，并通过统一的契约、权限、事件、审计和升级规则保持系统一致。`, `Het presenteert commerce, support, logistiek, educatie, storefronts en admin operations als modulaire productgebieden, ondersteund door gedeelde regels voor contracts, permissions, events, audit trails en toekomstige upgrades.`);
  const implementation = l(`The platform design brings together an Admin Portal, Storefront/PWA, authentication, authorization, audit, configuration, events, jobs, webhooks, notifications, analytics, AI enablement, and business domains for commerce, support, and logistics, with adapter paths for systems such as Saleor, Keycloak, and WordPress.`, `平台设计整合了 Admin Portal、Storefront/PWA、认证、授权、审计、配置、事件、任务、Webhook、通知、分析、AI 能力，以及电商、客服、物流等业务领域，并预留 Saleor、Keycloak、WordPress 等系统适配路径。`, `Het platformontwerp brengt Admin Portal, Storefront/PWA, authentication, authorization, audit, configuratie, events, jobs, webhooks, notifications, analytics, AI-enablement en commerce/support/logistics domeinen samen, met adapterpaden voor systemen zoals Saleor, Keycloak en WordPress.`);
  const vision = l(`The vision is to become a reusable operating system for small teams and solo founders: one controlled platform where modules can be enabled per tenant, permissions stay deny-by-default, and AI skills can help deliver features without breaking contracts.`, `愿景是成为小团队和一人公司的可复用业务操作系统：同一个受控平台里，模块可按租户启用，权限默认拒绝，AI Skills 可以辅助交付功能，但不能破坏契约边界。`, `De visie is een herbruikbaar operating system voor kleine teams en solo-founders: één gecontroleerd platform waarin modules per tenant worden ingeschakeld, permissions deny-by-default blijven en AI skills features kunnen leveren zonder contracts te breken.`);
  const structure = ['Admin Portal', 'Module Registry', 'Runtime Gating'];
  const modules = [{ title: l(`Platform Core`, `平台底座`, `Platformkern`), description: l(`AuthN, AuthZ, audit, config, events, jobs, webhooks, notifications, staff, identity, and CMS boundaries are treated as core services rather than optional page features.`, `AuthN、AuthZ、审计、配置、事件、任务、Webhook、通知、员工、身份和 CMS 边界都被定义为核心服务，而不是页面附属功能。`, `AuthN, AuthZ, audit, config, events, jobs, webhooks, notificaties, staff, identity en CMS-grenzen worden behandeld als kernservices, niet als optionele paginafeatures.`) }, { title: l(`Business Surfaces`, `业务表面`, `Businessoppervlakken`), description: l(`Commerce, support, logistics, storefront, and admin cockpit are separated as business modules with their own menus, routes, permissions, events, and configuration needs.`, `电商、客服、物流、前台和管理驾驶舱被拆成独立业务模块，各自拥有菜单、路由、权限、事件和配置需求。`, `Commerce, support, logistiek, storefront en admin cockpit zijn gescheiden businessmodules met eigen menu’s, routes, permissions, events en configuratiebehoeften.`) }, { title: l(`Module Registry & Runtime Gating`, `模块注册与运行时门禁`, `Module registry en runtime gating`), description: l(`Module manifests define APIs, UI routes, events, config fields, permissions, and dependencies so enabled modules can be controlled at UI, route, API, and runtime layers.`, `模块 manifest 定义 API、UI 路由、事件、配置字段、权限和依赖，让模块开关可以贯穿 UI、路由、API 和运行时四层。`, `Module manifests definiëren API’s, UI-routes, events, configvelden, permissions en dependencies zodat modules op UI-, route-, API- en runtime-laag gestuurd kunnen worden.`) }, { title: l(`AI Execution Guardrails`, `AI 执行护栏`, `AI-uitvoeringsrails`), description: l(`The platform-ai direction formalizes MCP and skill workflows: contracts first, SDK synchronization, infra baseline, security baseline, observability, and verifiable output paths.`, `platform-ai 方向把 MCP 与 Skill 工作流制度化：契约先行、SDK 同步、基础设施基线、安全基线、可观测性和可验证产物路径。`, `De platform-ai richting formaliseert MCP- en skill-workflows: contracts first, SDK-synchronisatie, infrabaseline, security baseline, observability en verifieerbare outputs.`) }];
  const maintenance = [l(`Strengthen enterprise readiness through fine-grained RBAC, role templates, module-level access control, payment orchestration, fiscal workflows, and customer self-service.`, `通过细粒度 RBAC、角色模板、模块级访问控制、支付编排、财税流程和客户自助能力，继续提升企业级可用性。`, `Enterprise readiness versterken met fijnmazige RBAC, roltemplates, module-level access control, payment orchestration, fiscale workflows en customer self-service.`), l(`Keep product contracts, service boundaries, and interface behavior aligned so new modules can be added with lower integration risk.`, `持续保持产品契约、服务边界和界面行为一致，让新模块可以以更低的集成风险加入平台。`, `Productcontracts, servicegrenzen en interfacegedrag afgestemd houden zodat nieuwe modules met lager integratierisico kunnen worden toegevoegd.`), l(`Evolve the platform toward production-ready tenant settings, secure operations, audit history, and well-governed third-party integrations.`, `继续推进生产级租户设置、安全运维、审计历史和第三方系统集成治理。`, `Het platform verder ontwikkelen richting production-ready tenant settings, veilige operations, audit history en goed beheerde third-party integrations.`)];

  return (
    <>
      <section className="section-shell future-platform-website-hero">
        <div className="future-platform-website-hero__inner">
          <div className="future-platform-website-hero__content">
            <h1 className="future-platform-website-hero__title">Future <span>Platform</span></h1>
            <p className="future-platform-website-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="future-platform-website-hero__actions">
              <a href={visitUrl} className={`${neoButtonClass('primary')} future-platform-website-button`} target="_blank" rel="noreferrer"><ExternalLink size={18} />{currentLanguage === 'zh' ? '访问网站' : currentLanguage === 'nl' ? 'Website bezoeken' : 'Explore Platform'}</a>
            </div>
          </div>
          <div className="future-platform-website-hero__visual" aria-hidden="true">
            <NeoCard className="future-platform-website-browser-card">
              <div className="future-platform-website-browser-card__bar"><span /><span /><span /><strong>{project.slug}</strong></div>
              <div className="future-platform-website-browser-card__hero"><Layers3 size={42} /><h3>{project.englishName}</h3><p>{pickLocal(currentLanguage, focus)}</p></div>
              <div className="future-platform-website-browser-card__grid">{structure.map((section) => <div key={section}><PanelsTopLeft size={18} /><span>{section}</span></div>)}</div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell future-platform-website-section">
        <h2 className="future-platform-website-section__title">{currentLanguage === 'zh' ? '网站定位与愿景' : currentLanguage === 'nl' ? 'Positionering en visie' : 'Positioning & Vision'}</h2>
        <p className="future-platform-website-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <div className="future-platform-website-focus-grid">
          <NeoCard hoverable className="future-platform-website-focus-card"><Sparkles size={24} /><h3>{currentLanguage === 'zh' ? '核心价值' : currentLanguage === 'nl' ? 'Kernwaarde' : 'Core Value'}</h3><p>{pickLocal(currentLanguage, value)}</p></NeoCard>
          <NeoCard hoverable className="future-platform-website-focus-card"><Wrench size={24} /><h3>{currentLanguage === 'zh' ? '交付亮点' : currentLanguage === 'nl' ? 'Delivery Highlights' : 'Delivery Highlights'}</h3><p>{pickLocal(currentLanguage, implementation)}</p></NeoCard>
          <NeoCard hoverable className="future-platform-website-focus-card"><Telescope size={24} /><h3>{currentLanguage === 'zh' ? '项目愿景' : currentLanguage === 'nl' ? 'Projectvisie' : 'Project Vision'}</h3><p>{pickLocal(currentLanguage, vision)}</p></NeoCard>
        </div>
      </section>

      <section className="section-shell future-platform-website-section">
        <h2 className="future-platform-website-section__title">{currentLanguage === 'zh' ? '功能与内容模块' : currentLanguage === 'nl' ? 'Functies en contentmodules' : 'Features & Content Modules'}</h2>
        <div className="future-platform-website-feature-grid">{modules.map((item) => <NeoCard key={item.title.en} hoverable className="future-platform-website-feature-card"><h3>{pickLocal(currentLanguage, item.title)}</h3><p>{pickLocal(currentLanguage, item.description)}</p></NeoCard>)}</div>
      </section>

      <section className="section-shell future-platform-website-section">
        <h2 className="future-platform-website-section__title">{currentLanguage === 'zh' ? '技术栈与演进方向' : currentLanguage === 'nl' ? 'Techstack en evolutie' : 'Tech Stack & Evolution'}</h2>
        <NeoCard className="future-platform-website-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
          <div className="future-platform-website-roadmap"><h3>{currentLanguage === 'zh' ? '维护与演进方向' : currentLanguage === 'nl' ? 'Onderhoud en evolutie' : 'Maintenance & Evolution'}</h3><ul>{maintenance.map((item) => <li key={item.en}>{pickLocal(currentLanguage, item)}</li>)}</ul></div>
        </NeoCard>
      </section>
    </>
  );
};

export default FutureWebsitePlatformShowcase;
