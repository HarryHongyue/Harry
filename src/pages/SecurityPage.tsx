import React from 'react';
import SecurityChecklist from '../components/security/SecurityChecklist';

const SecurityPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="page-eyebrow">Security baseline</div>
        <h1>Security</h1>
        <p className="page-lead">
          A practical baseline for the personal site, reverse proxy, Docker services,
          downloads, secrets, and PDF upload APIs.
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

export default SecurityPage;
