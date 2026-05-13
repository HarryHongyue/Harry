import React from 'react';
import { Download, FileCheck2, FileText, Globe, PlaneTakeoff, Route, ShieldCheck, Warehouse } from 'lucide-react';
import type { Project } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface AircargoEdiShowcaseProps {
  project: Project;
}

const AircargoEdiShowcase: React.FC<AircargoEdiShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const primaryAsset = project.releaseAssets[0];
  const featureHighlights = [
    { title: currentLanguage === 'zh' ? 'AWB / HAWB 解析' : currentLanguage === 'nl' ? 'AWB / HAWB parsing' : 'AWB / HAWB Parsing', body: currentLanguage === 'zh' ? '把主单、分单和货运单据中的关键字段整理成稳定的结构化数据。' : currentLanguage === 'nl' ? 'Zet AWB-, HAWB- en cargodocumentvelden om naar stabiele gestructureerde data.' : 'Transform AWB, HAWB, and cargo document fields into stable structured data.', icon: <FileText size={22} /> },
    { title: currentLanguage === 'zh' ? '货运字段校验' : currentLanguage === 'nl' ? 'Cargoveld-validatie' : 'Cargo Field Validation', body: currentLanguage === 'zh' ? '围绕件数、重量、航线、收发货人和报文要求执行领域校验。' : currentLanguage === 'nl' ? 'Valideert pieces, weight, routing, partijen en berichtvereisten rond het cargodomein.' : 'Validate pieces, weight, routing, parties, and message requirements around the cargo domain.', icon: <FileCheck2 size={22} /> },
    { title: currentLanguage === 'zh' ? '报文生成方向' : currentLanguage === 'nl' ? 'Berichtgeneratie richting' : 'Message Generation Direction', body: currentLanguage === 'zh' ? '为后续 FWB / FHL 等 Cargo-IMP 报文生成保留清晰的数据路径。' : currentLanguage === 'nl' ? 'Bewaart een duidelijke dataroute richting toekomstige FWB / FHL Cargo-IMP berichten.' : 'Keep a clear data path toward future FWB / FHL Cargo-IMP message generation.', icon: <Route size={22} /> },
    { title: currentLanguage === 'zh' ? '桌面与 Web 共核' : currentLanguage === 'nl' ? 'Gedeelde desktop- en webkern' : 'Shared Desktop & Web Core', body: currentLanguage === 'zh' ? '让本地桌面包和私有 Web 工作流共用同一套货运领域核心。' : currentLanguage === 'nl' ? 'Laat lokale desktoppakketten en private webworkflows dezelfde cargokern delen.' : 'Let local desktop packages and private web workflows share the same cargo domain core.', icon: <Warehouse size={22} /> },
    { title: currentLanguage === 'zh' ? '受控导出' : currentLanguage === 'nl' ? 'Gecontroleerde export' : 'Controlled Export', body: currentLanguage === 'zh' ? '把真实单据输入转换成可复查、可交付、可追踪的空运输出。' : currentLanguage === 'nl' ? 'Zet echte documentinvoer om naar controleerbare, leverbare en traceerbare luchtvrachtoutput.' : 'Turn real document inputs into reviewable, deliverable, and traceable air cargo outputs.', icon: <Download size={22} /> },
    { title: currentLanguage === 'zh' ? '私有流程边界' : currentLanguage === 'nl' ? 'Private procesgrenzen' : 'Private Workflow Boundary', body: currentLanguage === 'zh' ? '客户映射、私有流程和货运资料默认按非公开业务数据处理。' : currentLanguage === 'nl' ? 'Klantmappings, private processen en cargodata worden standaard als niet-publieke bedrijfsdata behandeld.' : 'Customer mappings, private workflows, and cargo data are treated as non-public business data by default.', icon: <ShieldCheck size={22} /> },
  ];
  const workflowSteps = [
    currentLanguage === 'zh' ? '收集 AWB / HAWB 单据' : currentLanguage === 'nl' ? 'Verzamel AWB / HAWB documenten' : 'Collect AWB / HAWB documents',
    currentLanguage === 'zh' ? '解析货运字段' : currentLanguage === 'nl' ? 'Parse cargovelden' : 'Parse cargo fields',
    currentLanguage === 'zh' ? '执行领域校验' : currentLanguage === 'nl' ? 'Voer domeinvalidatie uit' : 'Run domain validation',
    currentLanguage === 'zh' ? '生成受控报文输出' : currentLanguage === 'nl' ? 'Genereer gecontroleerde berichten' : 'Generate controlled message output',
  ];
  const versionChanges = [
    currentLanguage === 'zh' ? '建立 AWB / HAWB 文档到结构化货运数据的核心流程。' : currentLanguage === 'nl' ? 'Legt de kernflow vast van AWB / HAWB documenten naar gestructureerde cargodata.' : 'Established the core flow from AWB / HAWB documents to structured cargo data.',
    currentLanguage === 'zh' ? '明确桌面交付和 Web 工作流共用同一领域核心的架构方向。' : currentLanguage === 'nl' ? 'Verduidelijkt de architectuurrichting voor een gedeelde domeinkern tussen desktop en web.' : 'Clarified the architecture direction for sharing one domain core across desktop and web workflows.',
    currentLanguage === 'zh' ? '补充围绕货运报文生成、字段校验和导出边界的业务说明。' : currentLanguage === 'nl' ? 'Vult bedrijfsnotities aan rond berichtgeneratie, veldvalidatie en exportgrenzen.' : 'Added business notes around message generation, field validation, and export boundaries.',
  ];
  const privacyItems = [
    { title: currentLanguage === 'zh' ? '货运资料保护' : currentLanguage === 'nl' ? 'Bescherming van cargodata' : 'Cargo Data Protection', body: currentLanguage === 'zh' ? 'AWB、HAWB、客户映射和货运字段都应视为受保护的业务资料。' : currentLanguage === 'nl' ? 'AWB, HAWB, klantmappings en cargovelden worden als beschermde bedrijfsdata behandeld.' : 'AWB, HAWB, customer mappings, and cargo fields are treated as protected business data.' },
    { title: currentLanguage === 'zh' ? '输入不可信' : currentLanguage === 'nl' ? 'Input is onbetrouwbaar' : 'Untrusted Inputs', body: currentLanguage === 'zh' ? '单据上传和解析结果必须经过校验后才能进入报文生成流程。' : currentLanguage === 'nl' ? 'Uploads en parseresultaten moeten worden gevalideerd vóór berichtgeneratie.' : 'Document uploads and parsed results must be validated before message generation.' },
    { title: currentLanguage === 'zh' ? '私有映射规则' : currentLanguage === 'nl' ? 'Private mappingregels' : 'Private Mapping Rules', body: currentLanguage === 'zh' ? '客户流程、字段映射和报文规则不应暴露在公共页面或前端包中。' : currentLanguage === 'nl' ? 'Klantprocessen, veldmappings en berichtregels horen niet in publieke pagina’s of frontendbundels.' : 'Customer workflows, field mappings, and message rules should not be exposed in public pages or frontend bundles.' },
  ];

  return (
    <>
      <section className="section-shell aircargo-showcase-hero">
        <div className="aircargo-showcase-hero__inner">
          <div className="aircargo-showcase-hero__content">
            <h1 className="aircargo-showcase-hero__title">Aircargo <span>EDI</span></h1>
            <p className="aircargo-showcase-hero__description">{pickText(currentLanguage, project.longDescription)}</p>
            <div className="aircargo-showcase-hero__actions">
              <a href="#aircargo-download" className={`${neoButtonClass('primary')} aircargo-showcase-button aircargo-showcase-button--primary`}><Download size={18} />{currentLanguage === 'zh' ? '立即下载' : currentLanguage === 'nl' ? 'Download nu' : 'Download Now'}</a>
              <a href="#" className={`${neoButtonClass('secondary')} aircargo-showcase-button`}><Globe size={18} />{currentLanguage === 'zh' ? '查看web端应用' : currentLanguage === 'nl' ? 'Bekijk webapp' : 'View Web App'}</a>
              <a href={project.repoUrl ?? '/downloads'} className={`${neoButtonClass('secondary')} aircargo-showcase-button`} target={project.repoUrl ? '_blank' : undefined} rel={project.repoUrl ? 'noreferrer' : undefined}><GithubIcon size={18} />{currentLanguage === 'zh' ? '了解更多' : currentLanguage === 'nl' ? 'Meer informatie' : 'Learn More'}</a>
            </div>
          </div>
          <div className="aircargo-showcase-hero__visual" aria-hidden="true">
            <NeoCard className="aircargo-showcase-visual-card">
              <div className="aircargo-showcase-visual-card__header"><span>AWB 160-12345675</span><PlaneTakeoff size={24} /></div>
              <div className="aircargo-showcase-awb-content">
                <div className="aircargo-showcase-awb-section">
                  <div className="aircargo-showcase-awb-label">ROUTE</div>
                  <div className="aircargo-showcase-awb-value">AMS → PVG → HKG</div>
                </div>
                <div className="aircargo-showcase-awb-section">
                  <div className="aircargo-showcase-awb-label">SHIPPER</div>
                  <div className="aircargo-showcase-awb-value">EXAMPLE COMPANY LTD</div>
                </div>
                <div className="aircargo-showcase-awb-section">
                  <div className="aircargo-showcase-awb-label">CONSIGNEE</div>
                  <div className="aircargo-showcase-awb-value">EXAMPLE LOGISTICS INC</div>
                </div>
                <div className="aircargo-showcase-awb-section">
                  <div className="aircargo-showcase-awb-label">PIECES/WEIGHT</div>
                  <div className="aircargo-showcase-awb-value">3 PCS / 1250.5 KG</div>
                </div>
                <div className="aircargo-showcase-awb-section">
                  <div className="aircargo-showcase-awb-label">GOODS DESCRIPTION</div>
                  <div className="aircargo-showcase-awb-value">ELECTRONIC COMPONENTS</div>
                </div>
                <div className="aircargo-showcase-awb-section">
                  <div className="aircargo-showcase-awb-label">CHARGEABLE WEIGHT</div>
                  <div className="aircargo-showcase-awb-value">1250.5 KG</div>
                </div>
              </div>
            </NeoCard>
          </div>
        </div>
      </section>

      <section className="section-shell aircargo-showcase-section">
        <h2 className="aircargo-showcase-section__title">{currentLanguage === 'zh' ? '功能特点' : currentLanguage === 'nl' ? 'Functies' : 'Features'}</h2>
        <div className="aircargo-showcase-feature-grid">{featureHighlights.map((feature) => <NeoCard key={feature.title} hoverable className="aircargo-showcase-feature-card"><div className="aircargo-showcase-feature-card__icon">{feature.icon}</div><h3>{feature.title}</h3><p>{feature.body}</p></NeoCard>)}</div>
      </section>

      <section id="aircargo-download" className="section-shell aircargo-showcase-section">
        <h2 className="aircargo-showcase-section__title">{currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}</h2>
        <p className="aircargo-showcase-section__subtitle">{pickText(currentLanguage, project.description)}</p>
        <NeoCard className="aircargo-showcase-download-card"><div className="aircargo-showcase-download-card__main"><a href={primaryAsset?.href ?? '/downloads'} className={`${neoButtonClass('primary')} aircargo-showcase-download-button`}><Download size={24} />{currentLanguage === 'zh' ? 'Windows版下载' : currentLanguage === 'nl' ? 'Download voor Windows' : 'Download for Windows'}</a><p>{currentLanguage === 'zh' ? `当前版本 ${primaryAsset?.version ?? 'v0.9.0'} | 空运报文工作流` : currentLanguage === 'nl' ? `Huidige versie ${primaryAsset?.version ?? 'v0.9.0'} | luchtvrachtberichten-workflow` : `Current version ${primaryAsset?.version ?? 'v0.9.0'} | air cargo messaging workflow`}</p></div><div className="aircargo-showcase-install"><h3>{currentLanguage === 'zh' ? '业务处理步骤' : currentLanguage === 'nl' ? 'Processtappen' : 'Processing Steps'}</h3><div className="aircargo-showcase-install__grid">{workflowSteps.map((step, index) => <NeoCard key={step} variant="inset" className="aircargo-showcase-install-step"><span>{index + 1}</span><p>{step}</p></NeoCard>)}</div></div></NeoCard>
      </section>

      <section className="section-shell aircargo-showcase-section"><h2 className="aircargo-showcase-section__title">{currentLanguage === 'zh' ? '版本更新' : currentLanguage === 'nl' ? 'Versie-updates' : 'Version Updates'}</h2><NeoCard className="aircargo-showcase-updates-card"><div className="aircargo-showcase-updates-card__current"><h3>{currentLanguage === 'zh' ? '当前版本' : currentLanguage === 'nl' ? 'Huidige versie' : 'Current Version'}: <span>{primaryAsset?.version ?? 'v0.9.0'}</span></h3></div><div className="aircargo-showcase-version-list"><div className="aircargo-showcase-version"><div className="aircargo-showcase-version__header"><h4>{currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version'} {primaryAsset?.version ?? 'v0.9.0'}</h4><span>{currentLanguage === 'zh' ? `发布日期 ${primaryAsset?.releaseDate ?? '2026-05-11'}` : currentLanguage === 'nl' ? `Uitgebracht op ${primaryAsset?.releaseDate ?? '2026-05-11'}` : `Released on ${primaryAsset?.releaseDate ?? '2026-05-11'}`}</span></div><ul className="aircargo-showcase-version__changes">{versionChanges.map((change) => <li key={change}>{change}</li>)}</ul></div></div></NeoCard></section>

      <section className="section-shell aircargo-showcase-section aircargo-showcase-privacy"><div className="aircargo-showcase-privacy__heading"><ShieldCheck size={46} /><h2 className="aircargo-showcase-section__title">{currentLanguage === 'zh' ? '安全与隐私' : currentLanguage === 'nl' ? 'Security en privacy' : 'Security & Privacy'}</h2><p>{currentLanguage === 'zh' ? '空运报文系统处理的是业务单据和客户流程，因此边界设计必须比普通展示页面更严格。' : currentLanguage === 'nl' ? 'Aircargo EDI verwerkt zakelijke documenten en klantprocessen, dus de grenzen moeten strenger zijn dan bij een gewone showcase.' : 'Aircargo EDI handles business documents and customer workflows, so its boundaries must be stricter than a normal showcase page.'}</p></div><NeoCard variant="inset" className="aircargo-showcase-privacy-card"><div className="aircargo-showcase-privacy-grid">{privacyItems.map((item) => <div key={item.title} className="aircargo-showcase-privacy-item"><ShieldCheck size={30} /><h3>{item.title}</h3><p>{item.body}</p></div>)}</div><div className="aircargo-showcase-privacy-note"><p><strong>{currentLanguage === 'zh' ? '私有货运流程、客户映射和报文规则不应公开暴露。' : currentLanguage === 'nl' ? 'Private cargoworkflows, klantmappings en berichtregels mogen niet publiek worden blootgesteld.' : 'Private cargo workflows, customer mappings, and message rules should not be publicly exposed.'}</strong></p><p>{currentLanguage === 'zh' ? '输入单据会被视作不可信资料，必须先经过解析、校验和边界控制，再进入报文生成阶段。' : currentLanguage === 'nl' ? 'Invoerdocumenten worden als onbetrouwbare data behandeld en moeten eerst parsing, validatie en grenscontrole doorlopen.' : 'Input documents are treated as untrusted data and must pass parsing, validation, and boundary control before message generation.'}</p><p>{currentLanguage === 'zh' ? '最后更新' : currentLanguage === 'nl' ? 'Laatst bijgewerkt' : 'Last updated'}: 2026/5/13</p></div></NeoCard></section>
    </>
  );
};

export default AircargoEdiShowcase;
