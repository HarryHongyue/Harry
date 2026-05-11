import React from 'react';
import { CalendarRange, Globe2, Mail, MessageSquare, Rocket, ShieldCheck, Users } from 'lucide-react';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoInput from '../components/ui/NeoInput';
import NeoSection from '../components/ui/NeoSection';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import NeoButton from '../components/ui/NeoButton';

const ContactPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const cards = [
    { icon: <Mail size={24} />, title: 'Email', body: 'hello@harry.dev', detail: currentLanguage === 'zh' ? '我通常会在 24-48 小时内回复。' : currentLanguage === 'nl' ? 'Ik reageer meestal binnen 24-48 uur.' : 'I usually reply within 24–48 hours.' },
    { icon: <Globe2 size={24} />, title: 'GitHub', body: 'github.com/HarryHongyue', detail: currentLanguage === 'zh' ? '可以直接看项目和代码。' : currentLanguage === 'nl' ? 'Bekijk projecten en code direct.' : 'See projects and source code directly.' },
    { icon: <Users size={24} />, title: pickText(currentLanguage, uiText.common.collaboration), body: currentLanguage === 'zh' ? '开放合作' : currentLanguage === 'nl' ? 'Open voor samenwerking' : 'Open for collaboration', detail: currentLanguage === 'zh' ? '适合产品工程、前端系统和架构整理。' : currentLanguage === 'nl' ? 'Past goed bij product engineering, frontend en architectuur.' : 'Best fit for product engineering, frontend systems, and architecture.' },
    { icon: <CalendarRange size={24} />, title: pickText(currentLanguage, uiText.common.availability), body: currentLanguage === 'zh' ? '全球 / 远程' : currentLanguage === 'nl' ? 'Global / remote' : 'Global / Remote', detail: currentLanguage === 'zh' ? '欢迎中长期合作与高质量项目。' : currentLanguage === 'nl' ? 'Open voor langdurige samenwerkingen en kwaliteitsprojecten.' : 'Open to long-term collaborations and meaningful projects.' },
  ];

  const expectations = [
    currentLanguage === 'zh' ? '你会直接得到我本人回复，而不是自动回复。' : currentLanguage === 'nl' ? 'Je hoort rechtstreeks van mij, geen auto-reply.' : 'You will hear directly from me, not from an auto-reply.',
    currentLanguage === 'zh' ? '我会优先理解项目目标、边界和时间预期。' : currentLanguage === 'nl' ? 'Ik probeer eerst doelen, grenzen en timing goed te begrijpen.' : 'I will first try to understand the goal, constraints, and timing of the work.',
    currentLanguage === 'zh' ? '如果问题和现有系统有关，我也可以从部署和架构角度一起看。' : currentLanguage === 'nl' ? 'Als het werk een bestaand systeem raakt, kijk ik ook naar deployment en architectuur.' : 'If the work touches an existing system, I can also review deployment and architecture concerns.',
  ];

  const interests = [
    currentLanguage === 'zh' ? 'Open Source Collaboration' : currentLanguage === 'nl' ? 'Open source-samenwerking' : 'Open Source Collaboration',
    currentLanguage === 'zh' ? 'Custom Software Solutions' : currentLanguage === 'nl' ? 'Maatwerksoftware' : 'Custom Software Solutions',
    currentLanguage === 'zh' ? 'DevOps & Infrastructure' : currentLanguage === 'nl' ? 'DevOps & infrastructuur' : 'DevOps & Infrastructure',
    currentLanguage === 'zh' ? 'Technical Consulting' : currentLanguage === 'nl' ? 'Technisch advies' : 'Technical Consulting',
  ];

  const collaboration = [
    currentLanguage === 'zh' ? 'Clear Goals' : currentLanguage === 'nl' ? 'Duidelijke doelen' : 'Clear Goals',
    currentLanguage === 'zh' ? 'Open Communication' : currentLanguage === 'nl' ? 'Open communicatie' : 'Open Communication',
    currentLanguage === 'zh' ? 'Agile & Iterative' : currentLanguage === 'nl' ? 'Agile & iteratief' : 'Agile & Iterative',
    currentLanguage === 'zh' ? 'Long-term Impact' : currentLanguage === 'nl' ? 'Langetermijnimpact' : 'Long-term Impact',
  ];

  return (
    <div className="neo-page">
      <div className="section-shell">
        <section className="neo-hero">
          <div className="neo-hero__copy">
            <div className="neo-eyebrow">{pickText(currentLanguage, uiText.contact.eyebrow)}</div>
            <h1>{pickText(currentLanguage, uiText.contact.title)}</h1>
            <div className="neo-hero__subtitle">
              <strong>{uiText.home.subtitleEn}</strong>
              <span>{uiText.home.subtitleZh}</span>
            </div>
            <p>{pickText(currentLanguage, uiText.contact.intro)}</p>
            <div className="neo-chip-row">
              <NeoBadge tone="teal">{pickText(currentLanguage, uiText.common.secureByDesign)}</NeoBadge>
              <NeoBadge tone="purple">{currentLanguage === 'zh' ? 'Scalable & Maintainable' : currentLanguage === 'nl' ? 'Schaalbaar & onderhoudbaar' : 'Scalable & Maintainable'}</NeoBadge>
              <NeoBadge tone="blue">{currentLanguage === 'zh' ? 'Built for Modularity' : currentLanguage === 'nl' ? 'Gebouwd voor modulariteit' : 'Built for Modularity'}</NeoBadge>
            </div>
          </div>

          <div className="neo-hero__visual">
            <div className="neo-hero__mini neo-hero__mini--top-left">
              <Mail size={28} color="var(--accent-cyan)" />
            </div>
            <div className="neo-hero__mini neo-hero__mini--top-right">
              <Users size={28} color="var(--accent-blue)" />
            </div>
            <div className="neo-hero__mini neo-hero__mini--bottom-right">
              <MessageSquare size={28} color="var(--accent-teal)" />
            </div>
            <div className="neo-hero__glyph">H</div>
          </div>
        </section>
      </div>

      <div className="section-shell">
        <div className="neo-contact-grid">
          {cards.map((card, index) => (
            <NeoCard key={card.title} hoverable className="neo-contact-card">
              <div className="neo-contact-card__header">
                <NeoIconBox tone={index % 2 === 0 ? 'cyan' : 'purple'} icon={card.icon} />
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

      <div className="section-shell neo-contact-row">
        <div className="neo-form">
          <h2>{pickText(currentLanguage, uiText.common.sendMessage)}</h2>
          <div className="neo-form__grid neo-form__grid--2">
            <NeoInput label={currentLanguage === 'zh' ? 'Your Name' : currentLanguage === 'nl' ? 'Naam' : 'Your Name'} placeholder={currentLanguage === 'zh' ? '请输入你的姓名' : currentLanguage === 'nl' ? 'Vul je naam in' : 'Enter your full name'} />
            <NeoInput label="Email Address" placeholder="Enter your email address" />
          </div>
          <div className="neo-form__grid neo-form__grid--2">
            <label className="neo-field">
              <span className="neo-field__label">{currentLanguage === 'zh' ? 'Project Type' : currentLanguage === 'nl' ? 'Projecttype' : 'Project Type'}</span>
              <select className="neo-input" defaultValue="">
                <option value="" disabled>
                  {currentLanguage === 'zh' ? '选择项目类型' : currentLanguage === 'nl' ? 'Kies een projecttype' : 'Select project type'}
                </option>
                <option>{interests[0]}</option>
                <option>{interests[1]}</option>
                <option>{interests[2]}</option>
                <option>{interests[3]}</option>
              </select>
            </label>
            <NeoInput label={currentLanguage === 'zh' ? 'Typical Response Time' : currentLanguage === 'nl' ? 'Reactietijd' : 'Typical Response Time'} value="24–48 Hours" readOnly />
          </div>
          <label className="neo-field">
            <span className="neo-field__label">{currentLanguage === 'zh' ? 'Project Summary' : currentLanguage === 'nl' ? 'Projectsamenvatting' : 'Project Summary'}</span>
            <textarea className="neo-input" rows={7} placeholder={currentLanguage === 'zh' ? '告诉我你的目标、约束，以及我可以怎样帮你。' : currentLanguage === 'nl' ? 'Vertel me over je doelen, beperkingen en hoe ik kan helpen.' : 'Tell me about your goals, constraints, and how I can help.'} />
          </label>
          <NeoButton variant="primary" iconLeft={<Mail size={18} />}>
            {pickText(currentLanguage, uiText.common.sendMessage)}
          </NeoButton>
          <p style={{ color: 'var(--text-muted)' }}>{currentLanguage === 'zh' ? '你的信息只用于沟通，不会用于其他用途。' : currentLanguage === 'nl' ? 'Je informatie wordt alleen gebruikt voor contact.' : 'Your information is only used for communication.'}</p>
        </div>

        <div className="neo-info-stack">
          <NeoCard>
            <div className="neo-project-card__header">
              <NeoIconBox tone="blue" icon={<Rocket size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? 'What to Expect' : currentLanguage === 'nl' ? 'Wat je kunt verwachten' : 'What to Expect'}</h3>
              </div>
            </div>
            <ul className="neo-list">
              {expectations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard variant="inset">
            <div className="neo-project-card__header">
              <NeoIconBox tone="teal" icon={<ShieldCheck size={22} />} />
              <div>
                <h3>{pickText(currentLanguage, uiText.common.responseTime)}</h3>
                <p style={{ color: 'var(--accent-cyan)', fontSize: '1.6rem' }}>24–48 Hours</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </div>

      <div className="section-shell">
        <div className="neo-grid neo-grid--3">
          <NeoCard>
            <h3>{currentLanguage === 'zh' ? 'I’m Interested In' : currentLanguage === 'nl' ? 'Ik ben geïnteresseerd in' : 'I’m Interested In'}</h3>
            <ul className="neo-list">
              {interests.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard>
            <h3>{currentLanguage === 'zh' ? 'Preferred Collaboration' : currentLanguage === 'nl' ? 'Voorkeurssamenwerking' : 'Preferred Collaboration'}</h3>
            <ul className="neo-list">
              {collaboration.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
          <NeoCard variant="glowing">
            <div className="neo-project-card__header">
              <NeoIconBox tone="cyan" icon={<Rocket size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? 'Next Steps' : currentLanguage === 'nl' ? 'Volgende stappen' : 'Next Steps'}</h3>
                <p>{currentLanguage === 'zh' ? '发来项目背景、目标和时间预期，我会先快速判断路径。' : currentLanguage === 'nl' ? 'Stuur context, doelen en timing; ik geef eerst snel richting.' : 'Send the project context, goals, and timing, and I will help shape the next move.'}</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
