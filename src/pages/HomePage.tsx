import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { featuredProjects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import MainShowcase from '../components/home/MainShowcase';

const HomePage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      <Hero />
      <MainShowcase />
      <section className="site-section site-section--intro">
        <div className="container split-intro">
          <div>
            <div className="page-eyebrow">{t('mainShowcaseShell')}</div>
            <h2>{t('onePersonalSiteManyProjects')}</h2>
            <p>
              {t('mainShowcaseDescription')}
            </p>
          </div>
          <div className="content-panel">
            <h3>{t('whatThisSiteCoordinates')}</h3>
            <ul className="check-list">
              <li>{t('projectCatalogAndDetailPages')}</li>
              <li>{t('githubDemoApiDownloadLinks')}</li>
              <li>{t('oracleVmDeploymentGuidance')}</li>
              <li>{t('securityChecklistForUploadHeavyApis')}</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="container">
          <h2 className="section-title">{t('featuredProjects')}</h2>
          <div className="projects-grid projects-grid--system">
            {featuredProjects.slice(0, 4).map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="page-actions">
            <Link className="btn primary-btn" to="/projects">{t('browseAllProjects')}</Link>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Contact />
    </>
  );
};

export default HomePage;
