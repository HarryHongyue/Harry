import React from 'react';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';
import { featuredProjects } from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';

const HomePage: React.FC = () => (
  <>
    <Hero />
    <section className="site-section site-section--intro">
      <div className="container split-intro">
        <div>
          <div className="page-eyebrow">Main showcase shell</div>
          <h2>One personal site, many independent projects.</h2>
          <p>
            Harry is now the unified entry point for project introductions, demo links,
            release downloads, deployment notes, and security baselines. Each project keeps
            its own repository and deployment lifecycle.
          </p>
        </div>
        <div className="content-panel">
          <h3>What this site coordinates</h3>
          <ul className="check-list">
            <li>Project catalog and detail pages</li>
            <li>GitHub, demo, API, and download links</li>
            <li>Oracle VM reverse proxy deployment guidance</li>
            <li>Security checklist for upload-heavy APIs</li>
          </ul>
        </div>
      </div>
    </section>
    <section className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid projects-grid--system">
          {featuredProjects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="page-actions">
          <Link className="btn primary-btn" to="/projects">Browse all projects</Link>
          <Link className="btn secondary-btn" to="/deployment">Read deployment plan</Link>
        </div>
      </div>
    </section>
    <About />
    <Skills />
    <Contact />
  </>
);

export default HomePage;
