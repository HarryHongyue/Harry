import React from 'react';
import { Link } from 'react-router-dom';
import type { ProjectLink } from '../../types/project';

interface ProjectLinksProps {
  links: ProjectLink[];
  compact?: boolean;
}

const iconByType: Record<ProjectLink['type'], string> = {
  repo: 'fab fa-github',
  demo: 'fas fa-arrow-up-right-from-square',
  download: 'fas fa-download',
  docs: 'fas fa-book',
  api: 'fas fa-server',
  release: 'fas fa-box-open',
};

const ProjectLinks: React.FC<ProjectLinksProps> = ({ links, compact = false }) => (
  <div className={`project-link-list ${compact ? 'project-link-list--compact' : ''}`}>
    {links.map((link) => {
      const className = compact ? 'project-link project-link--compact' : 'project-link';
      const content = (
        <>
          <i className={iconByType[link.type]} aria-hidden="true"></i>
          <span>{link.label}</span>
        </>
      );

      if (link.external || link.href.startsWith('http')) {
        return (
          <a key={`${link.type}-${link.href}`} href={link.href} className={className} target="_blank" rel="noreferrer">
            {content}
          </a>
        );
      }

      return (
        <Link key={`${link.type}-${link.href}`} to={link.href} className={className}>
          {content}
        </Link>
      );
    })}
  </div>
);

export default ProjectLinks;
