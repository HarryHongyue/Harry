import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SecurityChecklist from '../components/security/SecurityChecklist';

const SecurityPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">{t('security')}</div>
          <h1>{t('securityBaseline')}</h1>
          <p className="page-lead">
            {t('securityDescription')}
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="container">
          <SecurityChecklist />
        </div>
      </section>
    </>
  );
};

export default SecurityPage;
