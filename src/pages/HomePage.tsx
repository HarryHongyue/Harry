import React from 'react';
import { ArrowRight, BriefcaseBusiness, Download, Layers3, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoSection from '../components/ui/NeoSection';
import { featuredProjects, filteredProjects } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import { MyJourneyRailMap } from '../components/journey/MyJourneyRailMap';
import { getProjectDisplayName } from '../lib/projectText';
import personalHeroPhoto from '../assets/images/Personal/个人首页展示照片.jpg';

const HomePage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const homeProject = filteredProjects.find((project) => project.slug === 'harry');
  const displayFeatured = featuredProjects.filter((project) => project.slug !== 'song-yan').slice(0, 3);

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <div className="section-shell">
        <section className="neo-hero neo-hero--home">
          <div className="neo-hero__copy">
            <h1 className="neo-hero-title">{pickText(currentLanguage, uiText.home.title)}</h1>
            <div className="neo-hero__subtitle">
              <strong>{uiText.home.subtitleEn}</strong>
              <span>{currentLanguage === 'zh' ? uiText.home.subtitleZh : currentLanguage === 'nl' ? uiText.home.subtitleNl : uiText.home.subtitleZh}</span>
            </div>
            <p>{pickText(currentLanguage, uiText.home.body)}</p>
            <div className="neo-hero__actions">
              <Link to="/projects" className={neoButtonClass('primary')}>
                {pickText(currentLanguage, uiText.common.viewProjects)}
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className={neoButtonClass('secondary')}>
                {pickText(currentLanguage, uiText.common.contactMe)}
              </Link>
            </div>
            <div className="neo-chip-row">
              {[
                currentLanguage === 'zh' ? '独立项目' : currentLanguage === 'nl' ? 'Onafhankelijke projecten' : 'Independent Projects',
                currentLanguage === 'zh' ? '统一生态视角' : currentLanguage === 'nl' ? 'Eén ecosysteem' : 'Unified Ecosystem',
                currentLanguage === 'zh' ? '安全边界清晰' : currentLanguage === 'nl' ? 'Heldere securitygrenzen' : 'Secure by Design',
              ].map((chip, index) => (
                <NeoBadge key={chip} tone={index === 2 ? 'purple' : 'cyan'}>
                  {chip}
                </NeoBadge>
              ))}
              <a href="https://omnigent.nl" target="_blank" rel="noreferrer" className="neo-badge neo-badge--teal neo-badge--link">
                {currentLanguage === 'zh' ? '去 Ominigent 合作' : currentLanguage === 'nl' ? 'Werk samen via Ominigent' : 'Collaborate via Ominigent'}
              </a>
            </div>
          </div>

          <div className="neo-home-photo-showcase" aria-label="Harry portrait">
            <div className="neo-home-photo-showcase__frame">
              <img src={personalHeroPhoto} alt="Harry" />
            </div>
            <div className="neo-home-photo-showcase__plate">
              <span>{currentLanguage === 'zh' ? '个人主站' : currentLanguage === 'nl' ? 'Hoofdsite' : 'Main Site'}</span>
              <strong>Harry</strong>
            </div>
          </div>
        </section>
      </div>

      <NeoSection title={pickText(currentLanguage, uiText.home.featuredTitle)} description={pickText(currentLanguage, uiText.home.featuredBody)}>
        <div className="neo-project-grid neo-project-grid--featured">
          {displayFeatured.map((project) => (
            <NeoCard key={project.slug} hoverable className="neo-project-card neo-project-card--spotlight">
              <div className="neo-project-card__header">
                <ProjectLogo src={project.logo} alt={project.englishName} />
                <div>
                  <h3>{getProjectDisplayName(project, currentLanguage)}</h3>
                  <p>{pickText(currentLanguage, project.tagline)}</p>
                </div>
              </div>
              <div className="neo-chip-row">
                {(project.chips ?? []).slice(0, 2).map((chip) => (
                  <NeoBadge key={chip.en}>{pickText(currentLanguage, chip)}</NeoBadge>
                ))}
              </div>
              <p>{pickText(currentLanguage, project.description)}</p>
              <div className="neo-chip-row">
                {project.techStackIds.slice(0, 4).map((stack) => (
                  <NeoBadge key={stack} tone="teal">
                    {stack.replace(/-/g, ' ')}
                  </NeoBadge>
                ))}
              </div>
              <div className="neo-project-card__actions">
                <span className="neo-card__hint">{project.backendRequired ? (currentLanguage === 'zh' ? '包含后端能力' : currentLanguage === 'nl' ? 'Met backend' : 'Backend included') : currentLanguage === 'zh' ? '以前端展示为主' : currentLanguage === 'nl' ? 'Frontend-first' : 'Frontend-first'}</span>
                <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')}>
                  {pickText(currentLanguage, uiText.common.learnMore)}
                </Link>
              </div>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection className="neo-section--journey" title={pickText(currentLanguage, uiText.home.storyTitle)} description={pickText(currentLanguage, uiText.home.storyBody)}>
        <MyJourneyRailMap />
      </NeoSection>

      <NeoSection title={pickText(currentLanguage, uiText.home.aboutTitle)} description={pickText(currentLanguage, uiText.home.aboutBody)}>
        <div className="neo-grid neo-grid--3">
          <NeoCard hoverable className="neo-info-card">
            <div className="neo-info-card__title">
              <Sparkles size={18} />
              <h3>{currentLanguage === 'zh' ? '我做什么' : currentLanguage === 'nl' ? 'Wat ik bouw' : 'What I Build'}</h3>
            </div>
            <p>{currentLanguage === 'zh' ? '我喜欢把复杂、混乱、难以交付的软件问题，整理成更清楚、更稳定、更容易解释的系统。' : currentLanguage === 'nl' ? 'Ik zet complexe, rommelige softwareproblemen om in duidelijkere, stabielere en beter uitlegbare systemen.' : 'I like turning messy software problems into systems that are clearer, steadier, and easier to explain.'}</p>
          </NeoCard>
          <NeoCard hoverable className="neo-info-card">
            <div className="neo-info-card__title">
              <BriefcaseBusiness size={18} />
              <h3>{currentLanguage === 'zh' ? '聚焦方向' : currentLanguage === 'nl' ? 'Focus' : 'Current Focus'}</h3>
            </div>
            <p>{currentLanguage === 'zh' ? '前端系统、文档智能、桌面工具、结构化数据模型，以及多项目统一表达。' : currentLanguage === 'nl' ? 'Frontendsystemen, document intelligence, desktoptools, gestructureerde datamodellen en uniforme presentatie van meerdere projecten.' : 'Frontend systems, document intelligence, desktop tools, structured data models, and unified presentation across projects.'}</p>
          </NeoCard>
          <NeoCard hoverable className="neo-info-card neo-glow-cyan">
            <div className="neo-info-card__title">
              <Download size={18} />
              <h3>{currentLanguage === 'zh' ? '为什么做这个主站' : currentLanguage === 'nl' ? 'Waarom deze hoofdsite' : 'Why This Main Site'}</h3>
            </div>
            <p>{currentLanguage === 'zh' ? '因为我的项目不止一个，它们的交付形态也不同。这个主站的价值，就是把这些成果整理成一个可信、统一、易浏览的入口。' : currentLanguage === 'nl' ? 'Omdat mijn projecten niet uit één ding bestaan en ook niet allemaal hetzelfde worden geleverd. De waarde van deze site is om ze te ordenen tot één geloofwaardige, samenhangende ingang.' : 'Because my work is not one project and not one delivery format. This site exists to organize those outputs into one coherent, trustworthy entrance.'}</p>
          </NeoCard>
        </div>
      </NeoSection>

      {homeProject ? (
        <div className="section-shell">
          <NeoCard variant="glowing" className="neo-home-cta">
            <div>
              <h3>{getProjectDisplayName(homeProject, currentLanguage)}</h3>
              <p>{pickText(currentLanguage, homeProject.longDescription)}</p>
            </div>
            <div className="neo-inline-actions">
              <Link to="/projects/harry" className={neoButtonClass('secondary')}>
                {currentLanguage === 'zh' ? '查看主站案例页' : currentLanguage === 'nl' ? 'Bekijk hoofdsite case' : 'View Main Site Case'}
              </Link>
              <Link to="/contact" className={neoButtonClass('primary')}>
                {pickText(currentLanguage, uiText.common.contactMe)}
                <ArrowRight size={18} />
              </Link>
            </div>
          </NeoCard>
        </div>
      ) : null}
    </div>
  );
};

export default HomePage;
