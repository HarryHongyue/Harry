import React from 'react';
import { Code2, Mail, MessageCircleMore, Rocket, Users } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoInput from '../components/ui/NeoInput';
import NeoSelect from '../components/ui/NeoSelect';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import NeoButton from '../components/ui/NeoButton';
import SocialLogo from '../components/common/SocialLogo';
import Breadcrumbs from '../components/navigation/Breadcrumbs';
import contactHeroBackground from '../assets/images/Backgrounds/联系hero部分背景图.png';

const CONTACT_EMAIL = 'HarryHongyue@omnigent.nl';

const ContactPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const cards = [
    {
      icon: <FaGithub size={24} />,
      title: 'GitHub',
      body: 'client/private-example-repo',
      detail:
        currentLanguage === 'zh'
          ? '交付代码会按项目边界整理清楚，便于后续维护、交接和扩展。'
          : currentLanguage === 'nl'
            ? 'Opgeleverde code wordt per project duidelijk gestructureerd voor onderhoud en overdracht.'
            : 'Delivered code is structured around the project boundary so it stays maintainable and easy to hand over.',
    },
    {
      icon: <Users size={24} />,
      title: pickText(currentLanguage, uiText.common.collaboration),
      body: currentLanguage === 'zh' ? '产品、系统、前端、自动化' : currentLanguage === 'nl' ? 'Product, systemen, frontend, automatisering' : 'Product, systems, frontend, automation',
      detail:
        currentLanguage === 'zh'
          ? '适合中长期项目合作，也适合结构梳理、系统重构和从零搭建。'
          : currentLanguage === 'nl'
            ? 'Geschikt voor middellange en langetermijnprojecten, structurering en greenfield-opbouw.'
            : 'Best suited for mid- to long-term collaboration, structure work, refactors, and greenfield builds.',
    },
    {
      icon: <Rocket size={24} />,
      title: pickText(currentLanguage, uiText.common.availability),
      body: currentLanguage === 'zh' ? '全球 / 远程' : currentLanguage === 'nl' ? 'Global / remote' : 'Global / Remote',
      detail:
        currentLanguage === 'zh'
          ? '欢迎新项目、升级项目和需要长期技术判断的合作。'
          : currentLanguage === 'nl'
            ? 'Open voor nieuwe projecten, upgrades en langdurige samenwerking.'
            : 'Open for new projects, upgrades, and long-term collaboration.',
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
    { label: 'WhatsApp', href: 'https://wa.me/310000000000', logo: 'whatsapp' as const },
    { label: 'Telegram', href: 'https://t.me/example', logo: 'telegram' as const },
    { label: 'XChat', href: 'https://x.com', logo: 'xchat' as const },
    { label: 'Signal', href: 'https://signal.me/#eu/example', logo: 'signal' as const },
  ];

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <Breadcrumbs />
      <div className="section-shell">
        <section className="neo-hero neo-hero--contact">
          <div className="neo-hero__copy">
            <h1 className="neo-hero-title neo-hero-title--contact">{pickText(currentLanguage, uiText.contact.title)}</h1>
            <div className="neo-hero__subtitle">
              <strong>{currentLanguage === 'zh' ? '一个愿景。多个项目。统一生态。' : currentLanguage === 'nl' ? 'Eén visie. Meerdere projecten. Eén ecosysteem.' : uiText.home.subtitleEn}</strong>
            </div>
            <p>{pickText(currentLanguage, uiText.contact.intro)}</p>
            <div className="neo-chip-row">
              <NeoBadge tone="teal">{pickText(currentLanguage, uiText.common.secureByDesign)}</NeoBadge>
              <NeoBadge tone="purple">{currentLanguage === 'zh' ? '可扩展且可维护' : currentLanguage === 'nl' ? 'Schaalbaar en onderhoudbaar' : 'Scalable & Maintainable'}</NeoBadge>
              <a href="https://omnigent.nl" target="_blank" rel="noreferrer" className="neo-badge neo-badge--cyan neo-badge--link">
                {currentLanguage === 'zh' ? '直接去 Omnigent 合作' : currentLanguage === 'nl' ? 'Werk direct samen via Omnigent' : 'Work with me through Omnigent'}
              </a>
            </div>
          </div>

          <div className="neo-contact-hero-visual" aria-hidden="true">
            <img src={contactHeroBackground} alt="" />
          </div>
        </section>
      </div>

      <div className="section-shell">
        <div className="neo-contact-grid neo-contact-grid--three">
          {cards.map((card, index) => (
            <NeoCard key={card.title} hoverable className="neo-contact-card neo-project-card--spotlight">
              <div className="neo-contact-card__header">
                <div className={`neo-icon-box ${index % 2 === 0 ? 'neo-icon-box--cyan' : 'neo-icon-box--purple'}`}>{card.icon}</div>
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
          <NeoCard hoverable className="neo-expectation-card">
            <div className="neo-info-card__title">
              <Rocket size={18} />
              <h3>{currentLanguage === 'zh' ? 'What to Expect 你可以期待什么' : currentLanguage === 'nl' ? 'Wat je kunt verwachten' : 'What to Expect'}</h3>
            </div>
            <ul className="neo-list neo-list--spaced">
              {expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard variant="inset" hoverable className="neo-contact-channels-card">
            <div className="neo-info-card__title">
              <MessageCircleMore size={18} />
              <h3>{currentLanguage === 'zh' ? '联系方式' : currentLanguage === 'nl' ? 'Contactkanalen' : 'Contact Channels'}</h3>
            </div>
            <a className="neo-contact-link-block neo-contact-link-block--email" href={`mailto:${CONTACT_EMAIL}`}>
              <span className="neo-contact-link-block__icon">
                <SocialLogo name="email" size={28} />
              </span>
              <span>{CONTACT_EMAIL}</span>
            </a>
            <div className="neo-contact-actions-grid">
              {contactButtons.map((button) => (
                <a key={button.label} href={button.href} target="_blank" rel="noreferrer" className="neo-contact-link-block">
                  <span className="neo-contact-link-block__icon">
                    <SocialLogo name={button.logo} size={28} />
                  </span>
                  <span>{button.label}</span>
                </a>
              ))}
            </div>
          </NeoCard>
        </div>

        <div className="neo-form">
          <h2>{pickText(currentLanguage, uiText.common.sendMessage)}</h2>
          <div className="neo-form__grid neo-form__grid--2">
            <NeoInput label={currentLanguage === 'zh' ? '你的姓名' : currentLanguage === 'nl' ? 'Naam' : 'Your Name'} placeholder={currentLanguage === 'zh' ? '请输入你的姓名' : currentLanguage === 'nl' ? 'Vul je naam in' : 'Enter your full name'} />
            <NeoInput label="Email Address" placeholder={currentLanguage === 'zh' ? '输入你的邮箱地址' : currentLanguage === 'nl' ? 'Vul je e-mailadres in' : 'Enter your email address'} />
          </div>
          <div className="neo-form__grid neo-form__grid--2">
            <NeoSelect
              label={currentLanguage === 'zh' ? '项目类型' : currentLanguage === 'nl' ? 'Projecttype' : 'Project Type'}
              placeholder={currentLanguage === 'zh' ? '选择项目类型' : currentLanguage === 'nl' ? 'Kies een projecttype' : 'Select project type'}
              options={interestList}
            />
            <NeoInput label={currentLanguage === 'zh' ? '最佳联系邮箱' : currentLanguage === 'nl' ? 'Beste contactmail' : 'Best Contact Email'} value={CONTACT_EMAIL} readOnly />
          </div>
          <label className="neo-field">
            <span className="neo-field__label">{currentLanguage === 'zh' ? '项目概要' : currentLanguage === 'nl' ? 'Projectsamenvatting' : 'Project Summary'}</span>
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
            <h3>{currentLanguage === 'zh' ? '我感兴趣的合作' : currentLanguage === 'nl' ? 'Waar ik graag aan werk' : "I'm Interested In"}</h3>
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
              <span className="neo-icon-box neo-icon-box--cyan">
                <Code2 size={22} />
              </span>
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
