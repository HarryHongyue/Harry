import type { LocalizedText } from './project';

export type TechStackCategory =
  | 'frontend'
  | 'backend'
  | 'desktop'
  | 'database'
  | 'deployment'
  | 'cms'
  | 'platform'
  | 'domain'
  | 'tooling';

export interface TechStackItem {
  id: string;
  name: string;
  category: TechStackCategory;
  description: LocalizedText;
  iconName?: string;
  color: string;
  officialUrl?: string;
}
