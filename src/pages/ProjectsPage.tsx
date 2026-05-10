import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import ProjectGrid from '../components/projects/ProjectGrid';

const ProjectsPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">{t('projects')}</div>
          <h1>{t('projectsTitle')}</h1>
          <p className="page-lead">
            {t('projectsDescription')}
          </p>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <ProjectGrid />
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
