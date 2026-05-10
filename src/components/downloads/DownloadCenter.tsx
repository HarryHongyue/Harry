import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { projects } from '../../data/projects';

const DownloadCenter: React.FC = () => {
  const { t } = useLanguage();
  const assets = projects.flatMap((project) =>
    (project.releaseAssets || []).map((asset) => ({ project, asset })),
  );

  if (assets.length === 0) {
    return (
      <section className="content-panel">
        <h2>{t('noReleaseAssetsYet')}</h2>
        <p>{t('noReleaseAssetsDescription')}</p>
      </section>
    );
  }

  return (
    <div className="download-center">
      <div className="download-table download-table--header">
        <div className="download-row download-row--head">
          <strong>{t('projectAsset')}</strong>
          <strong>{t('platform')}</strong>
          <strong>{t('version')}</strong>
          <strong>{t('size')}</strong>
          <strong>{t('checksum')}</strong>
          <strong>{t('link')}</strong>
        </div>
        {assets.map(({ project, asset }) => (
          <div className="download-row" key={`${project.slug}-${asset.platform}-${asset.label}`}>
            <div>
              <strong>{project.name}</strong>
              <span>{asset.label}</span>
            </div>
            <span>{asset.platform || 'web'}</span>
            <span>{asset.version || 'TBD'}</span>
            <span>{asset.size || 'TBD'}</span>
            <code>{asset.sha256 || 'sha256-to-be-added'}</code>
            <a href={asset.href} target="_blank" rel="noreferrer">{t('open')}</a>
          </div>
        ))}
      </div>

      <section className="content-panel">
        <h2>{t('downloadPolicy')}</h2>
        <p>
          {t('downloadPolicyDescription')}
        </p>
      </section>
    </div>
  );
};

export default DownloadCenter;
