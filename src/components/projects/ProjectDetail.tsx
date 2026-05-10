import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { categoryLabels, statusLabels } from '../../data/projects';
import { getProjectShowcase } from '../../data/projectShowcases';
import type { Project } from '../../types/project';
import DeploymentBadge from './DeploymentBadge';
import ProjectLinks from './ProjectLinks';
import TechStackBadges from './TechStackBadges';

interface ProjectDetailProps {
  project: Project;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  const { t } = useLanguage();
  const showcase = getProjectShowcase(project.slug);

  return (
    <article className="project-detail" style={showcase ? { '--project-accent': showcase.accent } as React.CSSProperties : undefined}>
      <section className="project-showcase-hero">
        <div className="project-showcase-hero__content">
          <div className="page-eyebrow">{showcase?.eyebrow || `${categoryLabels[project.category]} / ${statusLabels[project.status]}`}</div>
          <h1>{project.name}</h1>
          <p className="page-lead">{showcase?.headline || project.tagline}</p>
          <p className="project-showcase-summary">{showcase?.summary || project.longDescription || project.description}</p>
          <div className="project-detail__badges">
            <DeploymentBadge type={project.deploymentType} />
            <span className={`backend-pill ${project.backendRequired ? 'backend-pill--required' : ''}`}>
              {project.backendRequired ? t('backendRequired') : t('noBackendInHarry')}
            </span>
          </div>
        </div>
        {showcase && (
          <div className="project-orb-card">
            <img src={showcase.logo} alt={`${project.name} logo`} />
            <div>
              {showcase.metrics.map((metric) => (
                <span key={metric}>{metric}</span>
              ))}
            </div>
          </div>
        )}
      </section>

      {showcase && (
        <section className="project-feature-strip">
          {showcase.features.map((feature) => (
            <div className="project-feature-card" key={feature.title}>
              <i className={`fas ${feature.icon}`} aria-hidden="true"></i>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>
      )}

      {showcase && (
        <section className="content-panel project-workflow-panel">
          <div>
            <h2>{t('unifiedHarryWorkflow')}</h2>
            <p>
              {t('unifiedHarryWorkflowDescription')}
            </p>
          </div>
          <ol className="project-workflow">
            {showcase.workflow.map((step) => (
              <li key={step.title}>
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </li>
            ))}
          </ol>
        </section>
      )}

    <div className="project-detail__grid">
      <section className="content-panel">
        <h2>{t('overview')}</h2>
        <p>{project.longDescription || project.description}</p>
        <TechStackBadges techStack={project.techStack} />
      </section>

      <aside className="content-panel project-facts">
        <h2>{t('projectFacts')}</h2>
        <dl>
          <dt>{t('repository')}</dt>
          <dd>{project.repo || t('notPublishedYet')}</dd>
          <dt>{t('publicUrl')}</dt>
          <dd>{project.publicUrl || 'TBD'}</dd>
          <dt>{t('apiBase')}</dt>
          <dd>{project.apiBasePath || t('notRequired')}</dd>
          <dt>{t('reverseProxyPath')}</dt>
          <dd>{project.reverseProxyPath || t('notRequired')}</dd>
        </dl>
      </aside>
    </div>

    <section className="content-panel">
      <h2>{t('links')}</h2>
      <ProjectLinks links={project.links} />
    </section>

    {project.releaseAssets && project.releaseAssets.length > 0 && (
      <section className="content-panel">
        <h2>{t('downloads')}</h2>
        <div className="download-table">
          {project.releaseAssets.map((asset) => (
            <div className="download-row" key={`${asset.platform}-${asset.label}`}>
              <div>
                <strong>{asset.label}</strong>
                <span>{asset.platform || 'web'} / {asset.version || 'TBD'}</span>
              </div>
              <div>{asset.size || 'TBD'}</div>
              <code>{asset.sha256 || 'sha256-to-be-added'}</code>
              <a href={asset.href} target="_blank" rel="noreferrer">{t('download')}</a>
            </div>
          ))}
        </div>
      </section>
    )}

    <div className="project-detail__grid">
      <section className="content-panel">
        <h2>{t('deploymentNotes')}</h2>
        <ul className="check-list">
          {(project.deploymentNotes || [t('deploymentNotesPlaceholder')]).map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
      <section className="content-panel">
        <h2>{t('securityNotes')}</h2>
        <ul className="check-list">
          {(project.securityNotes || [t('securityNotesPlaceholder')]).map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>
    </div>

    <div className="page-actions">
      <Link className="btn secondary-btn" to="/projects">{t('backToProjects')}</Link>
      <Link className="btn primary-btn" to="/downloads">{t('openDownloads')}</Link>
      {showcase && showcase.appStatus !== 'external' && (
        <Link className="btn primary-btn" to={`/apps/${project.slug}`}>{t('openAppRoute')}</Link>
      )}
    </div>
  </article>
  );
};

export default ProjectDetail;
