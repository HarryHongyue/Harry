import React from 'react';
import { projects } from '../../data/projects';

const DeploymentArchitecture: React.FC = () => (
  <div className="deployment-architecture">
    <section className="content-panel">
      <h2>How the Main Site Fits</h2>
      <p>
        Harry is the public shell. Independent projects keep their own repositories, build pipelines,
        and release pipelines. The unified experience comes from first-party routes, API gateway paths,
        downloads, and reverse proxy routing.
      </p>
    </section>

    <div className="architecture-map" aria-label="Deployment architecture">
      <div className="architecture-node architecture-node--main">
        <strong>Harry main site</strong>
        <span>your-domain.com</span>
      </div>
      <div className="architecture-node">
        <strong>Project pages</strong>
        <span>/projects/* inside Harry</span>
      </div>
      <div className="architecture-node">
        <strong>API gateway</strong>
        <span>/api/project/*</span>
      </div>
      <div className="architecture-node">
        <strong>Downloads</strong>
        <span>/downloads/* + release manifest</span>
      </div>
      <div className="architecture-node">
        <strong>Oracle VM</strong>
        <span>Caddy or Nginx + Docker Compose</span>
      </div>
    </div>

    <section className="content-panel">
      <h2>Project Routing Plan</h2>
      <div className="deployment-list">
        {projects.map((project) => (
          <div className="deployment-item" key={project.slug}>
            <div>
              <strong>{project.name}</strong>
              <span>{project.deploymentType}</span>
            </div>
            <p>{project.publicUrl || project.apiBasePath || 'Reference-only project'}</p>
            <p>{project.reverseProxyPath || 'No API path required'}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
);

export default DeploymentArchitecture;
