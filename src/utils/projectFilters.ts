import type { Project, ProjectCategory, ProjectStatus } from '../types/project';

export interface ProjectFilterState {
  category: ProjectCategory | 'all';
  status: ProjectStatus | 'all';
  query: string;
}

export const filterProjects = (projects: Project[], filters: ProjectFilterState): Project[] => {
  const normalizedQuery = filters.query.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory = filters.category === 'all' || project.category === filters.category;
    const matchesStatus = filters.status === 'all' || project.status === filters.status;
    const searchableText = [
      project.name,
      project.shortName,
      project.tagline,
      project.description,
      project.longDescription,
      project.category,
      project.status,
      project.deploymentType,
      ...project.techStack,
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();

    const matchesQuery = !normalizedQuery || searchableText.includes(normalizedQuery);
    return matchesCategory && matchesStatus && matchesQuery;
  });
};

export const getAllCategories = (projects: Project[]) =>
  Array.from(new Set(projects.map((project) => project.category))).sort();

export const getAllStatuses = (projects: Project[]) =>
  Array.from(new Set(projects.map((project) => project.status))).sort();
