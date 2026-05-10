import React from 'react';
import DeploymentArchitecture from '../components/deployment/DeploymentArchitecture';

const DeploymentPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="page-eyebrow">Self-hosting plan</div>
        <h1>Deployment</h1>
        <p className="page-lead">
          Deploy Harry as the unified static shell and connect independent projects through first-party
          routes, API gateway paths, downloads, and reverse proxy rules.
        </p>
      </div>
    </section>
    <section className="site-section">
      <div className="container">
        <DeploymentArchitecture />
      </div>
    </section>
  </>
);

export default DeploymentPage;
