import React from 'react';
import { Link } from 'react-router-dom';
import ProjectMiniMockup from './ProjectMiniMockup';
import ProjectLogo from '../common/ProjectLogo';
import type { Project } from '../../types/project';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText } from '../../data/siteContent';

interface ProjectPreviewCardProps {
  project: Project;
}

const ProjectPreviewCard: React.FC<ProjectPreviewCardProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  
  const getDisplayTags = (): string[] => {
    if (project.displayTags) {
      return project.displayTags;
    }
    
    const tags: string[] = [];
    if (project.desktopApp) tags.push('Desktop App');
    if (project.webVersion) tags.push('Web App');
    if (project.browserExtension) tags.push('Extension');
    if (project.backendRequired) tags.push('Backend');
    
    if (tags.length === 0 && project.techStackIds.length > 0) {
      const techStack = project.techStackIds.slice(0, 2).join(' / ');
      if (techStack) tags.push(techStack);
    }
    
    return tags;
  };

  const getShortDescription = () => {
    const desc = pickText(currentLanguage, project.description);
    return desc.length > 120 ? desc.substring(0, 120) + '...' : desc;
  };

  return (
    <Link to={`/projects/${project.slug}`} className="project-preview-card">
      <div className="project-preview-card__mockup">
        {project.previewImage ? (
          <img
            src={project.previewImage}
            alt={`${project.englishName} preview`}
            className="project-preview-card__image"
          />
        ) : (
          <ProjectMiniMockup variant={project.previewVariant || 'harry-website'} />
        )}
        <div className="project-preview-card__mockup-overlay" />
      </div>

      <div className="project-preview-card__body">
        <div className="project-preview-card__icon">
          {project.logo ? (
            <ProjectLogo src={project.logo} alt={project.englishName} />
          ) : (
            <span className="project-preview-card__icon-placeholder">{project.englishName.charAt(0)}</span>
          )}
        </div>

        <div className="project-preview-card__content">
          <h3 className="project-preview-card__title">
            {pickText(currentLanguage, {
              en: project.englishName,
              zh: project.chineseName || project.englishName,
              nl: project.dutchName || project.englishName,
            })}
          </h3>
          <p className="project-preview-card__description">{getShortDescription()}</p>

          <div className="project-preview-card__tags">
            {getDisplayTags().map((tag: string, index: number) => (
              <span key={index} className="project-preview-card__tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectPreviewCard;
