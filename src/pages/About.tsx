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
    <section className="about-section">
      <div className="container">
        <h2>{t('aboutTitle')}</h2>
        <p>{t('aboutDescription1')}</p>
        <p>{t('aboutDescription2')}</p>
        <p>{t('aboutDescription3')}</p>
        <div className="about-details">
          <p>{t('aboutEducation')}</p>
          <p>{t('aboutLocation')}</p>
          <p>{t('aboutExperience')}</p>
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
