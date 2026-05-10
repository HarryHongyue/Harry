import React from 'react';
import DownloadCenter from '../components/downloads/DownloadCenter';

const DownloadsPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="page-eyebrow">Release assets</div>
        <h1>Downloads</h1>
        <p className="page-lead">
          Aggregated installers, extension packages, version placeholders, and checksum slots from the project data layer.
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

export default DownloadsPage;
