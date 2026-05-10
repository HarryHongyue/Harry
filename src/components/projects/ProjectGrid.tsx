import React, { useMemo, useState } from 'react';
import { categoryLabels, projects, statusLabels } from '../../data/projects';
import type { ProjectCategory, ProjectStatus } from '../../types/project';
import { filterProjects, getAllCategories, getAllStatuses } from '../../utils/projectFilters';
import ProjectCard from './ProjectCard';

const ProjectGrid: React.FC = () => {
  const [category, setCategory] = useState<ProjectCategory | 'all'>('all');
  const [status, setStatus] = useState<ProjectStatus | 'all'>('all');
  const [query, setQuery] = useState('');

  const categories = useMemo(() => getAllCategories(projects), []);
  const statuses = useMemo(() => getAllStatuses(projects), []);
  const filteredProjects = useMemo(
    () => filterProjects(projects, { category, status, query }),
    [category, status, query],
  );

  return (
    <div className="project-grid-shell">
      <div className="project-controls" aria-label="Project filters">
        <label className="project-search">
          <span>Search</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search name, description, or tech stack"
            type="search"
          />
        </label>
        <label>
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value as ProjectCategory | 'all')}>
            <option value="all">All categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {categoryLabels[item]}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Status</span>
          <select value={status} onChange={(event) => setStatus(event.target.value as ProjectStatus | 'all')}>
            <option value="all">All statuses</option>
            {statuses.map((item) => (
              <option key={item} value={item}>
                {statusLabels[item]}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="project-result-count">
        {filteredProjects.length} project{filteredProjects.length === 1 ? '' : 's'} found
      </div>

      <div className="projects-grid projects-grid--system">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;
