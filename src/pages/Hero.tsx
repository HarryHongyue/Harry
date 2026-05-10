import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import LogoImage from '../assets/images/Logo.png';

/**
 * The first section visible when the page loads
 * Uses CSS variables from ThemeSwitcher for theme adaptation
 */
const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section 
      id="home" 
      className="hero min-h-screen flex items-center relative transition-colors duration-300"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <div className="max-w-[700px]">
          <div className="hero-image">
            <img src={LogoImage} alt="Harry Hongyue" />
          </div>
          <div className="hero-text">
            <h1 className="text-5xl font-bold mb-4 text-left">
              Harry <span className="highlight">{t('heroHighlight')}</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-4 text-left">
              {t('heroSubtitle')}
            </h2>
            <p className="text-lg mb-8 text-left opacity-90">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-row flex-wrap gap-4 md:gap-6 mt-8 justify-start">
              <Link to="/projects" className="btn primary-btn">{t('exploreProjects')}</Link>
              <Link to="/downloads" className="btn secondary-btn">{t('openDownloads')}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
