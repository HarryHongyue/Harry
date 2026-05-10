import React from 'react';
import { Link } from 'react-router-dom';
import { categoryLabels, statusLabels } from '../../data/projects';
import type { Project } from '../../types/project';
import DeploymentBadge from './DeploymentBadge';
import ProjectLinks from './ProjectLinks';
import TechStackBadges from './TechStackBadges';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <article className="project-card project-card--system">
    <div className="project-card__meta">
      <span>{categoryLabels[project.category]}</span>
      <span>{statusLabels[project.status]}</span>
    </div>
    <div className="project-card__body">
      <h3>
        <Link to={`/projects/${project.slug}`}>{project.name}</Link>
      </h3>
      <p className="project-card__tagline">{project.tagline}</p>
      <p>{project.description}</p>
    </div>
    <div className="project-card__badges">
      <DeploymentBadge type={project.deploymentType} />
      <span className={`backend-pill ${project.backendRequired ? 'backend-pill--required' : ''}`}>
        {project.backendRequired ? 'Backend required' : 'Static / no backend'}
      </span>
    </div>
    <TechStackBadges techStack={project.techStack.slice(0, 6)} />
    <ProjectLinks links={project.links.slice(0, 3)} compact />
    <Link className="btn small-btn project-card__details" to={`/projects/${project.slug}`}>
      View details
    </Link>
  </article>
);

export default ProjectCard;
