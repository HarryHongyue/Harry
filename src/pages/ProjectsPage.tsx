import React from 'react';
import ProjectGrid from '../components/projects/ProjectGrid';

const ProjectsPage: React.FC = () => (
  <>
    <section className="page-hero">
      <div className="container">
        <div className="page-eyebrow">Project catalog</div>
        <h1>Projects</h1>
        <p className="page-lead">
          A searchable overview of independent repositories connected by the Harry main site.
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

export default ProjectsPage;
