import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => (
  <section className="page-hero">
    <div className="container">
      <div className="page-eyebrow">404</div>
      <h1>Page not found</h1>
      <p className="page-lead">
        This route is not part of the Harry showcase shell yet.
      </p>
      <div className="page-actions">
        <Link className="btn primary-btn" to="/">Home</Link>
        <Link className="btn secondary-btn" to="/projects">Projects</Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
