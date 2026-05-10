import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import DownloadCenter from '../components/downloads/DownloadCenter';

const DownloadsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">{t('downloads')}</div>
          <h1>{t('releaseAssets')}</h1>
          <p className="page-lead">
            {t('downloadsDescription')}
          </p>
        </div>
      </section>
      <section className="site-section">
        <div className="container">
          <DownloadCenter />
        </div>
      </section>
    </>
  );
};

export default DownloadsPage;
