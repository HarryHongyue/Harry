import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import PersonalImage from '../assets/images/Personal/IMG-20241113-WA0000.jpg';

/**
 * About section component
 * Displays information about the developer
 */
const About: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">{t('aboutTitle')}</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={PersonalImage} alt="Harry Hongyue" />
          </div>
          <div className="about-text">
            <p>{t('aboutDescription1')}</p>
            <p>{t('aboutDescription2')}</p>
            <p>
              This site now focuses on project clarity: what each repository does, how it is
              deployed, where users can download releases, and which security guardrails matter.
            </p>
            <div className="about-details">
              <div className="detail">
                <i className="fas fa-graduation-cap"></i>
                <span>{t('aboutEducation')}</span>
              </div>
              <div className="detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>{t('aboutLocation')}</span>
              </div>
              <div className="detail">
                <i className="fas fa-briefcase"></i>
                <span>{t('aboutExperience')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
