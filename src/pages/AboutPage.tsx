import React from 'react';
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Code2, Layers3, Rocket, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoSection from '../components/ui/NeoSection';
import { neoButtonClass } from '../components/ui/NeoButton';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';

const AboutPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const stats = [
    { label: currentLanguage === 'zh' ? '聚焦方向' : currentLanguage === 'nl' ? 'Focus' : 'Focus', value: currentLanguage === 'zh' ? '前端系统 / 架构表达' : currentLanguage === 'nl' ? 'Frontend / architectuur' : 'Frontend / Architecture' },
    { label: currentLanguage === 'zh' ? '工作方式' : currentLanguage === 'nl' ? 'Werkwijze' : 'How I Build', value: currentLanguage === 'zh' ? '结构化 + 可维护' : currentLanguage === 'nl' ? 'Gestructureerd + onderhoudbaar' : 'Structured + Maintainable' },
    { label: currentLanguage === 'zh' ? '项目类型' : currentLanguage === 'nl' ? 'Projecttype' : 'Project Types', value: currentLanguage === 'zh' ? 'Web / 后端 / 桌面' : currentLanguage === 'nl' ? 'Web / backend / desktop' : 'Web / Backend / Desktop' },
    { label: currentLanguage === 'zh' ? '协作模式' : currentLanguage === 'nl' ? 'Samenwerking' : 'Collaboration', value: currentLanguage === 'zh' ? '全球 / 远程' : currentLanguage === 'nl' ? 'Global / remote' : 'Global / Remote' },
  ];

  const timeline = [
    { year: '2023', body: currentLanguage === 'zh' ? '开始把课程练习和个人兴趣转成完整软件项目。' : currentLanguage === 'nl' ? 'Begon oefeningen en interesses om te zetten naar volledige softwareprojecten.' : 'Started turning coursework and personal interests into complete software projects.' },
    { year: '2024', body: currentLanguage === 'zh' ? '逐步进入桌面工具、浏览器扩展和更完整的发布思维。' : currentLanguage === 'nl' ? 'Verschoof naar desktoptools, extensies en vollediger release-denken.' : 'Moved into desktop tools, browser extensions, and fuller release thinking.' },
    { year: '2025', body: currentLanguage === 'zh' ? '更专注于文档工作流、解析系统和真实运行边界。' : currentLanguage === 'nl' ? 'Meer focus op documentworkflows, parsing en operationele grenzen.' : 'Focused more on document workflows, parsing systems, and operational boundaries.' },
    { year: '2026', body: currentLanguage === 'zh' ? '把工程结构、产品感和作品集表达整合成一个统一方向。' : currentLanguage === 'nl' ? 'Brengt engineeringstructuur, productgevoel en portfolioverhaal samen.' : 'Bringing engineering structure, product sense, and portfolio presentation into one direction.' },
  ];

  const skills = [
    { icon: <Code2 size={22} />, title: currentLanguage === 'zh' ? '前端系统' : currentLanguage === 'nl' ? 'Frontend-systemen' : 'Frontend Systems', body: currentLanguage === 'zh' ? 'React、TypeScript、组件架构、设计系统和高可维护界面。' : currentLanguage === 'nl' ? 'React, TypeScript, componentarchitectuur en onderhoudbare interfaces.' : 'React, TypeScript, component architecture, and maintainable interfaces.' },
    { icon: <Layers3 size={22} />, title: currentLanguage === 'zh' ? '系统组织' : currentLanguage === 'nl' ? 'Systeemstructuur' : 'System Structure', body: currentLanguage === 'zh' ? '把项目拆成更清楚的部署层、服务层和产品层。' : currentLanguage === 'nl' ? 'Projecten opdelen in heldere deployment-, service- en productlagen.' : 'Breaking projects into clearer deployment, service, and product layers.' },
    { icon: <BrainCircuit size={22} />, title: currentLanguage === 'zh' ? 'AI / 文档流程' : currentLanguage === 'nl' ? 'AI / documentflows' : 'AI / Document Workflows', body: currentLanguage === 'zh' ? 'OCR、提取、解析、流式结果和文件密集型体验。' : currentLanguage === 'nl' ? 'OCR, extractie, parsing, streaming resultaten en documentgerichte UX.' : 'OCR, extraction, parsing, streamed results, and file-heavy user experiences.' },
    { icon: <ShieldCheck size={22} />, title: currentLanguage === 'zh' ? '安全边界' : currentLanguage === 'nl' ? 'Securitygrenzen' : 'Security Boundaries', body: currentLanguage === 'zh' ? '上传校验、反向代理、会话控制和私有服务暴露策略。' : currentLanguage === 'nl' ? 'Uploadvalidatie, reverse proxy, sessiebeheer en private service-exposure.' : 'Upload validation, reverse proxies, session controls, and private service exposure.' },
  ];

  const principles = [
    currentLanguage === 'zh' ? '先梳理结构，再打磨界面。' : currentLanguage === 'nl' ? 'Eerst structuur, dan polish.' : 'Structure first, polish second.',
    currentLanguage === 'zh' ? '用统一数据模型驱动页面，而不是散落硬编码。' : currentLanguage === 'nl' ? 'Gebruik één gegevensmodel in plaats van verspreide hardcode.' : 'Drive pages from one structured data model instead of scattered hardcoding.',
    currentLanguage === 'zh' ? '把部署和安全当成产品体验的一部分。' : currentLanguage === 'nl' ? 'Zie deployment en security als onderdeel van de productervaring.' : 'Treat deployment and security as part of the product experience.',
    currentLanguage === 'zh' ? '让设计服务于理解，而不是只追求炫技。' : currentLanguage === 'nl' ? 'Laat design begrip ondersteunen, niet alleen flair.' : 'Use design to support understanding, not just spectacle.',
  ];

  return (
    <div className="neo-page">
      <NeoSection eyebrow={pickText(currentLanguage, uiText.about.eyebrow)} title={pickText(currentLanguage, uiText.about.title)} description={pickText(currentLanguage, uiText.about.intro)}>
        <div className="neo-stats-grid">
          {stats.map((stat) => (
            <NeoCard key={stat.label} className="neo-stat">
              <span style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
              <strong>{stat.value}</strong>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection title={pickText(currentLanguage, uiText.about.mission)} description={pickText(currentLanguage, uiText.about.missionBody)}>
        <div className="neo-grid neo-grid--2">
          <NeoCard>
            <div className="neo-project-card__header">
              <NeoIconBox tone="teal" icon={<Rocket size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? '产品导向工程' : currentLanguage === 'nl' ? 'Productgerichte engineering' : 'Product-Oriented Engineering'}</h3>
                <p>{currentLanguage === 'zh' ? '不仅要把功能做出来，还要让人读得懂、用得顺。' : currentLanguage === 'nl' ? 'Niet alleen functionaliteit bouwen, maar ook duidelijk en prettig maken.' : 'Not only building functionality, but making it understandable and usable.'}</p>
              </div>
            </div>
          </NeoCard>
          <NeoCard>
            <div className="neo-project-card__header">
              <NeoIconBox tone="blue" icon={<BriefcaseBusiness size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? '长期可维护' : currentLanguage === 'nl' ? 'Langdurig onderhoudbaar' : 'Maintainability First'}</h3>
                <p>{currentLanguage === 'zh' ? '我倾向于做清楚的边界、统一的组件和结构化的数据层。' : currentLanguage === 'nl' ? 'Ik kies voor duidelijke grenzen, consistente componenten en gestructureerde data.' : 'I bias toward clear boundaries, shared components, and structured data layers.'}</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </NeoSection>

      <NeoSection title={pickText(currentLanguage, uiText.about.journey)}>
        <div className="neo-timeline">
          {timeline.map((item) => (
            <NeoCard key={item.year} className="neo-timeline__item">
              <strong>{item.year}</strong>
              <p>{item.body}</p>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection title={pickText(currentLanguage, uiText.about.skills)}>
        <div className="neo-grid neo-grid--2">
          {skills.map((skill, index) => (
            <NeoCard key={skill.title} hoverable>
              <div className="neo-project-card__header">
                <NeoIconBox tone={index % 2 === 0 ? 'cyan' : 'purple'} icon={skill.icon} />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.body}</p>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection title={pickText(currentLanguage, uiText.about.build)}>
        <NeoCard variant="inset">
          <ul className="neo-list">
            {principles.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </NeoCard>
      </NeoSection>

      <div className="section-shell">
        <NeoCard variant="glowing" className="neo-note-banner">
          <div>
            <h3>{pickText(currentLanguage, uiText.about.cta)}</h3>
            <p>{currentLanguage === 'zh' ? '我把项目细节、下载发布和部署结构都整理进了同一套展示系统。' : currentLanguage === 'nl' ? 'Projectdetails, downloads en deploymentstructuur zijn samengebracht in één systeem.' : 'Project details, downloads, and deployment structure are all organized into the same showcase system.'}</p>
          </div>
          <Link to="/projects" className={neoButtonClass('primary')}>
            {pickText(currentLanguage, uiText.common.viewProjects)}
            <ArrowRight size={18} />
          </Link>
        </NeoCard>
      </div>
    </div>
  );
};

export default AboutPage;
