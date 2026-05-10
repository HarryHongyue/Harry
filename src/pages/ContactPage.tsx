import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Contact from './Contact';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">{t('contact')}</div>
          <h1>{t('contactPageTitle')}</h1>
          <p className="page-lead">
            {t('contactPageDescription')}
          </p>
        </div>
      </section>
      <Contact />
    </>
  );
};

export default ContactPage;
