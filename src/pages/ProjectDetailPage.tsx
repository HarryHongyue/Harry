import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectDetail from '../components/projects/ProjectDetail';
import { getProjectBySlug } from '../data/projects';

const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="page-hero">
        <div className="container">
          <div className="page-eyebrow">Project not found</div>
          <h1>That project is not in the catalog yet.</h1>
          <p className="page-lead">
            The slug <code>{slug}</code> does not match any record in <code>src/data/projects.ts</code>.
          </p>
          <Link className="btn primary-btn" to="/projects">Back to projects</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-hero page-hero--detail">
      <div className="container">
        <ProjectDetail project={project} />
      </div>
    </section>
  );
};

export default ProjectDetailPage;
