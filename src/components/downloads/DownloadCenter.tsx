import React from 'react';
import { projects } from '../../data/projects';

const DownloadCenter: React.FC = () => {
  const assets = projects.flatMap((project) =>
    (project.releaseAssets || []).map((asset) => ({ project, asset })),
  );

  if (assets.length === 0) {
    return (
      <section className="content-panel">
        <h2>No release assets yet</h2>
        <p>Download entries will appear here once projects publish installers, extension packages, or release files.</p>
      </section>
    );
  }

  return (
    <div className="download-center">
      <div className="download-table download-table--header">
        <div className="download-row download-row--head">
          <strong>Project / Asset</strong>
          <strong>Platform</strong>
          <strong>Version</strong>
          <strong>Size</strong>
          <strong>Checksum</strong>
          <strong>Link</strong>
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
            <a href={asset.href} target="_blank" rel="noreferrer">Open</a>
          </div>
        ))}
      </div>

      <section className="content-panel">
        <h2>Download Policy</h2>
        <p>
          Installers and extension packages should be published through GitHub Releases or the
          first-party downloads route. Harry stores metadata and links only, not long-lived binary packages.
        </p>
      </section>
    </div>
  );
};

export default DownloadCenter;
