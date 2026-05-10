import React from 'react';
import { Link } from 'react-router-dom';
import { categoryLabels, statusLabels } from '../../data/projects';
import type { Project } from '../../types/project';
import DeploymentBadge from './DeploymentBadge';
import ProjectLinks from './ProjectLinks';
import TechStackBadges from './TechStackBadges';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => (
  <article className="project-detail">
    <div className="page-eyebrow">{categoryLabels[project.category]} / {statusLabels[project.status]}</div>
    <h1>{project.name}</h1>
    <p className="page-lead">{project.tagline}</p>
    <div className="project-detail__badges">
      <DeploymentBadge type={project.deploymentType} />
      <span className={`backend-pill ${project.backendRequired ? 'backend-pill--required' : ''}`}>
        {project.backendRequired ? 'Backend required' : 'No backend in Harry'}
      </span>
    </div>

    <div className="project-detail__grid">
      <section className="content-panel">
        <h2>Overview</h2>
        <p>{project.longDescription || project.description}</p>
        <TechStackBadges techStack={project.techStack} />
      </section>

      <aside className="content-panel project-facts">
        <h2>Project Facts</h2>
        <dl>
          <dt>Repository</dt>
          <dd>{project.repo || 'Not published yet'}</dd>
          <dt>Public URL</dt>
          <dd>{project.publicUrl || 'TBD'}</dd>
          <dt>API base</dt>
          <dd>{project.apiBasePath || 'Not required'}</dd>
          <dt>Reverse proxy path</dt>
          <dd>{project.reverseProxyPath || 'Not required'}</dd>
        </dl>
      </aside>
    </div>

    <section className="content-panel">
      <h2>Links</h2>
      <ProjectLinks links={project.links} />
    </section>

    {project.releaseAssets && project.releaseAssets.length > 0 && (
      <section className="content-panel">
        <h2>Downloads</h2>
        <div className="download-table">
          {project.releaseAssets.map((asset) => (
            <div className="download-row" key={`${asset.platform}-${asset.label}`}>
              <div>
                <strong>{asset.label}</strong>
                <span>{asset.platform || 'web'} / {asset.version || 'TBD'}</span>
              </div>
              <div>{asset.size || 'TBD'}</div>
              <code>{asset.sha256 || 'sha256-to-be-added'}</code>
              <a href={asset.href} target="_blank" rel="noreferrer">Download</a>
            </div>
          ))}
        </div>
      </section>
    )}

    <div className="project-detail__grid">
      <section className="content-panel">
        <h2>Deployment Notes</h2>
        <ul className="check-list">
          {(project.deploymentNotes || ['Deployment notes will be added as the project matures.']).map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
      <section className="content-panel">
        <h2>Security Notes</h2>
        <ul className="check-list">
          {(project.securityNotes || ['Follow the shared security baseline for public deployment.']).map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </div>

    <div className="page-actions">
      <Link className="btn secondary-btn" to="/projects">Back to projects</Link>
      <Link className="btn primary-btn" to="/downloads">Open downloads</Link>
    </div>
  </article>
);

export default ProjectDetail;
