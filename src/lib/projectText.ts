import type { Project, SiteLocale } from '../types/project';

export const getProjectDisplayName = (project: Project, locale: SiteLocale | string): string => {
  if (locale === 'zh' && project.chineseName) {
    return project.chineseName;
  }
  if (locale === 'nl' && project.dutchName) {
    return project.dutchName;
  }
  return project.englishName;
};
