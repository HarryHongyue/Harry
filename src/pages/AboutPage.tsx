import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import About from './About';
import Skills from './Skills';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">{t('about')}</div>
          <h1>{t('aboutName')}</h1>
          <p className="page-lead">
            {t('aboutPageDescription')}
          </p>
        </div>
      </section>
      <About />
      <Skills />
    </>
  );
};

export default AboutPage;
