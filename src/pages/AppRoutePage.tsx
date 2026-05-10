import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProjectBySlug } from '../data/projects';
import { getProjectShowcase } from '../data/projectShowcases';

const AppRoutePage: React.FC = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  const showcase = getProjectShowcase(slug);

  if (!project || !showcase) {
    return (
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">App not available</div>
          <h1>This app route is not configured yet.</h1>
          <p className="page-lead">The requested app slug does not have a Harry app shell.</p>
          <Link className="btn primary-btn" to="/projects">Back to projects</Link>
        </div>
      </section>
    );
  }

  const isPlanned = showcase.appStatus !== 'ready';

  return (
    <section className="page-hero page-hero--detail app-route-page">
      <div className="container">
        <div className="app-shell-hero" style={{ '--project-accent': showcase.accent } as React.CSSProperties}>
          <div>
            <div className="page-eyebrow">Protected app route</div>
            <h1>{project.name}</h1>
            <p className="page-lead">{showcase.appSummary}</p>
            <div className="project-detail__badges">
              <span className="backend-pill backend-pill--required">Login required</span>
              <span className="backend-pill">API: {project.reverseProxyPath || 'Not required'}</span>
            </div>
          </div>
          <img src={showcase.logo} alt={`${project.name} logo`} />
        </div>

        <div className="app-preview-grid">
          <section className="content-panel app-preview-card app-preview-card--upload">
            <h2>{isPlanned ? 'Staged app shell' : 'Online workspace'}</h2>
            <p>
              This route is already reserved inside Harry. The production tool should connect to the independent
              backend container only after login, session checks, upload limits, and API rate limits are ready.
            </p>
            <div className="mock-upload-zone">
              <i className="fas fa-cloud-arrow-up" aria-hidden="true"></i>
              <strong>Drop files here</strong>
              <span>Demo shell only. Backend wiring comes next.</span>
            </div>
          </section>

          <section className="content-panel app-preview-card">
            <h2>Workflow</h2>
            <ol className="app-workflow-list">
              {showcase.workflow.map((step) => (
                <li key={step.title}>
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </li>
              ))}
            </ol>
          </section>
        </div>

        <section className="content-panel app-security-note">
          <h2>Security gate</h2>
          <p>
            The visual route exists now, but real uploads should stay disabled until the backend validates session cookies,
            file size, MIME type, file extension, temporary storage, cleanup, and CORS rules.
          </p>
          <div className="page-actions">
            <Link className="btn secondary-btn" to={`/projects/${project.slug}`}>Open project page</Link>
            <Link className="btn primary-btn" to="/deployment">Review deployment</Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AppRoutePage;
