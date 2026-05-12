import React from 'react';
import { Code2, Mail, MessageCircleMore, Radio, Rocket, Send, Shield, Users } from 'lucide-react';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoInput from '../components/ui/NeoInput';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import NeoButton from '../components/ui/NeoButton';
import InteractiveHeroScene from '../components/common/InteractiveHeroScene';
import ProjectLogo from '../components/common/ProjectLogo';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const ContactPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const cards = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      body: 'HarryHongyue@omnigent.nl',
      detail: currentLanguage === 'zh' ? '直接给我发邮件，适合项目沟通和正式合作。' : currentLanguage === 'nl' ? 'Mail mij direct voor projecten en formele samenwerking.' : 'Email me directly for project discussions and formal collaboration.',
    },
    {
      icon: <Code2 size={24} />,
      title: 'GitHub',
      body: 'client/private-example-repo',
      detail: currentLanguage === 'zh' ? '您获得所有代码的所有权。这里展示的是客户代码库类型的例子，而不是我的个人仓库。' : currentLanguage === 'nl' ? 'U krijgt het eigendom van alle code. Dit toont een voorbeeld van een klantrepository, niet mijn persoonlijke repo.' : 'You retain ownership of the delivered code. This shows the kind of client repository I work in, not my personal repo.',
    },
    {
      icon: <Users size={24} />,
      title: currentLanguage === 'zh' ? '合作方式' : currentLanguage === 'nl' ? 'Samenwerking' : 'Collaboration',
      body: currentLanguage === 'zh' ? '产品、系统、前端、自动化' : currentLanguage === 'nl' ? 'Product, systemen, frontend, automatisering' : 'Product, systems, frontend, automation',
      detail: currentLanguage === 'zh' ? '适合中长期项目合作，也适合结构梳理和从零到一搭建。' : currentLanguage === 'nl' ? 'Geschikt voor middellange en langetermijnprojecten, maar ook voor structurering en greenfield-opbouw.' : 'Best suited for mid- to long-term collaboration, but also good for structure work and greenfield builds.',
    },
    {
      icon: <Rocket size={24} />,
      title: currentLanguage === 'zh' ? '可合作状态' : currentLanguage === 'nl' ? 'Beschikbaarheid' : 'Availability',
      body: currentLanguage === 'zh' ? '全球 / 远程' : currentLanguage === 'nl' ? 'Global / remote' : 'Global / Remote',
      detail: currentLanguage === 'zh' ? '欢迎新项目、升级项目和深度长期合作。' : currentLanguage === 'nl' ? 'Open voor nieuwe projecten, upgrades en langdurige samenwerking.' : 'Open for new projects, upgrades, and long-term collaboration.',
    },
  ];

  const expectations = [
    currentLanguage === 'zh' ? '你会直接得到我本人回复，而不是自动回复。' : currentLanguage === 'nl' ? 'Je hoort rechtstreeks van mij, niet van een auto-reply.' : 'You will hear directly from me, not from an auto-reply.',
    currentLanguage === 'zh' ? '我会先理解项目目标、边界和时间预期。' : currentLanguage === 'nl' ? 'Ik probeer eerst doelen, grenzen en timing scherp te krijgen.' : 'I will first understand the project goal, constraints, and timeline.',
    currentLanguage === 'zh' ? '如果项目涉及现有系统，我也会一起看部署、架构和可维护性。' : currentLanguage === 'nl' ? 'Als het werk een bestaand systeem raakt, kijk ik ook naar deployment, architectuur en onderhoudbaarheid.' : 'If the project touches an existing system, I also look at deployment, architecture, and maintainability.',
  ];

  const interestList = [
    currentLanguage === 'zh' ? '开源协作' : currentLanguage === 'nl' ? 'Open source-samenwerking' : 'Open Source Collaboration',
    currentLanguage === 'zh' ? '定制软件方案' : currentLanguage === 'nl' ? 'Maatwerksoftware' : 'Custom Software Solutions',
    currentLanguage === 'zh' ? 'DevOps 与基础设施' : currentLanguage === 'nl' ? 'DevOps en infrastructuur' : 'DevOps & Infrastructure',
    currentLanguage === 'zh' ? '技术咨询' : currentLanguage === 'nl' ? 'Technisch advies' : 'Technical Consulting',
  ];

  const collaborationList = [
    currentLanguage === 'zh' ? '目标清晰' : currentLanguage === 'nl' ? 'Heldere doelen' : 'Clear Goals',
    currentLanguage === 'zh' ? '沟通直接' : currentLanguage === 'nl' ? 'Directe communicatie' : 'Open Communication',
    currentLanguage === 'zh' ? '迭代推进' : currentLanguage === 'nl' ? 'Iteratieve uitvoering' : 'Agile & Iterative',
    currentLanguage === 'zh' ? '长期价值' : currentLanguage === 'nl' ? 'Lange termijn impact' : 'Long-term Impact',
  ];

  const contactButtons = [
    { label: 'WhatsApp', href: 'https://wa.me/310000000000', icon: <MessageCircleMore size={18} /> },
    { label: 'Telegram', href: 'https://t.me/example', icon: <Send size={18} /> },
    { label: 'XChat', href: 'https://x.com', icon: <Radio size={18} /> },
    { label: 'Signal', href: 'https://signal.me/#eu/example', icon: <Shield size={18} /> },
  ];

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <div className="section-shell">
        <section className="neo-hero neo-hero--contact">
          <div className="neo-hero__copy">
            <Breadcrumbs />
            <h1 className="neo-hero-title neo-hero-title--contact">{pickText(currentLanguage, uiText.contact.title)}</h1>
            <div className="neo-hero__subtitle">
              <strong>{uiText.home.subtitleEn}</strong>
              <span>{currentLanguage === 'zh' ? uiText.home.subtitleZh : currentLanguage === 'nl' ? uiText.home.subtitleNl : uiText.home.subtitleZh}</span>
            </div>
            <p>{pickText(currentLanguage, uiText.contact.intro)}</p>
            <div className="neo-chip-row">
              <NeoBadge tone="teal">{pickText(currentLanguage, uiText.common.secureByDesign)}</NeoBadge>
              <NeoBadge tone="purple">{currentLanguage === 'zh' ? '可扩展且可维护' : currentLanguage === 'nl' ? 'Schaalbaar en onderhoudbaar' : 'Scalable & Maintainable'}</NeoBadge>
              <a href="https://omnigent.nl" target="_blank" rel="noreferrer" className="neo-badge neo-badge--cyan neo-badge--link">
                {currentLanguage === 'zh' ? '直接去 Ominigent 合作' : currentLanguage === 'nl' ? 'Werk direct samen via Ominigent' : 'Work with me through Ominigent'}
              </a>
            </div>
          </div>

          <InteractiveHeroScene variant="contact" />
        </section>
      </div>

      <div className="section-shell">
        <div className="neo-contact-grid">
          {cards.map((card, index) => (
            <NeoCard key={card.title} hoverable className="neo-contact-card neo-project-card--spotlight">
              <div className="neo-contact-card__header">
                {card.title === 'GitHub' ? (
                  <ProjectLogo src="/project-assets/harry-logo.png" alt="GitHub style" className="neo-project-logo--icon" imageClassName="neo-project-logo__githubish" />
                ) : (
                  <div className={`neo-icon-box ${index % 2 === 0 ? 'neo-icon-box--cyan' : 'neo-icon-box--purple'}`}>{card.icon}</div>
                )}
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              </div>
              <p>{card.detail}</p>
            </NeoCard>
          ))}
        </div>
      </div>

      <div className="section-shell neo-contact-row neo-contact-row--swapped">
        <div className="neo-info-stack">
          <NeoCard hoverable>
            <div className="neo-info-card__title">
              <Rocket size={18} />
              <h3>{currentLanguage === 'zh' ? 'What to Expect' : currentLanguage === 'nl' ? 'Wat je kunt verwachten' : 'What to Expect'}</h3>
            </div>
            <ul className="neo-list neo-list--spaced">
              {expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard variant="inset" hoverable>
            <div className="neo-info-card__title">
              <MessageCircleMore size={18} />
              <h3>{currentLanguage === 'zh' ? '联系方式' : currentLanguage === 'nl' ? 'Contactkanalen' : 'Contact Channels'}</h3>
            </div>
            <div className="neo-contact-actions-grid">
              {contactButtons.map((button) => (
                <a key={button.label} href={button.href} target="_blank" rel="noreferrer" className="neo-contact-link-block">
                  <span className="neo-contact-link-block__icon">{button.icon}</span>
                  <span>{button.label}</span>
                </a>
              ))}
            </div>
          </NeoCard>
        </div>

        <div className="neo-form">
          <h2>{pickText(currentLanguage, uiText.common.sendMessage)}</h2>
          <div className="neo-form__grid neo-form__grid--2">
            <NeoInput label={currentLanguage === 'zh' ? 'Your Name' : currentLanguage === 'nl' ? 'Naam' : 'Your Name'} placeholder={currentLanguage === 'zh' ? '请输入你的姓名' : currentLanguage === 'nl' ? 'Vul je naam in' : 'Enter your full name'} />
            <NeoInput label="Email Address" placeholder={currentLanguage === 'zh' ? '输入你的邮箱地址' : currentLanguage === 'nl' ? 'Vul je e-mailadres in' : 'Enter your email address'} />
          </div>
          <div className="neo-form__grid neo-form__grid--2">
            <label className="neo-field">
              <span className="neo-field__label">{currentLanguage === 'zh' ? 'Project Type' : currentLanguage === 'nl' ? 'Projecttype' : 'Project Type'}</span>
              <select className="neo-input" defaultValue="">
                <option value="" disabled>
                  {currentLanguage === 'zh' ? '选择项目类型' : currentLanguage === 'nl' ? 'Kies een projecttype' : 'Select project type'}
                </option>
                {interestList.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <NeoInput label={currentLanguage === 'zh' ? 'Best Contact Email' : currentLanguage === 'nl' ? 'Beste contactmail' : 'Best Contact Email'} value="HarryHongyue@omnigent.nl" readOnly />
          </div>
          <label className="neo-field">
            <span className="neo-field__label">{currentLanguage === 'zh' ? 'Project Summary' : currentLanguage === 'nl' ? 'Projectsamenvatting' : 'Project Summary'}</span>
            <textarea className="neo-input" rows={7} placeholder={currentLanguage === 'zh' ? '告诉我你的目标、边界、时间预期，以及我可以怎样帮你。' : currentLanguage === 'nl' ? 'Vertel me over je doelen, grenzen, timing en hoe ik kan helpen.' : 'Tell me about your goals, constraints, timing, and how I can help.'} />
          </label>
          <NeoButton variant="primary" iconLeft={<Mail size={18} />}>
            {pickText(currentLanguage, uiText.common.sendMessage)}
          </NeoButton>
          <p style={{ color: 'var(--text-muted)' }}>{currentLanguage === 'zh' ? '你的信息只用于沟通，不会用于其他用途。' : currentLanguage === 'nl' ? 'Je informatie wordt alleen voor contact gebruikt.' : 'Your information is only used for communication.'}</p>
        </div>
      </div>

      <div className="section-shell">
        <div className="neo-grid neo-grid--3">
          <NeoCard hoverable>
            <h3>{currentLanguage === 'zh' ? '我感兴趣的合作' : currentLanguage === 'nl' ? 'Waar ik graag aan werk' : 'I’m Interested In'}</h3>
            <ul className="neo-list">
              {interestList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard hoverable>
            <h3>{currentLanguage === 'zh' ? '偏好的合作方式' : currentLanguage === 'nl' ? 'Voorkeursmanier van samenwerken' : 'Preferred Collaboration'}</h3>
            <ul className="neo-list">
              {collaborationList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard variant="glowing" hoverable>
            <div className="neo-info-card__title">
              <ProjectLogo src="/project-assets/harry-logo.png" alt="Harry" className="neo-project-logo--icon" />
              <h3>{currentLanguage === 'zh' ? '下一步' : currentLanguage === 'nl' ? 'Volgende stap' : 'Next Steps'}</h3>
            </div>
            <p>{currentLanguage === 'zh' ? '你把项目背景、现状和目标发给我，我会先快速帮你判断路径、结构和优先级。' : currentLanguage === 'nl' ? 'Stuur me context, huidige situatie en doelen. Ik help eerst snel met richting, structuur en prioriteiten.' : 'Send me the project context, current state, and goal. I will first help shape the direction, structure, and priorities.'}</p>
          </NeoCard>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
