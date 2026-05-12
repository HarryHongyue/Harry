import React, { useMemo, useState } from 'react';
import { ArrowRight, Download, Search, Globe, Monitor, Puzzle } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoInput from '../components/ui/NeoInput';
import NeoSection from '../components/ui/NeoSection';
import NeoTable from '../components/ui/NeoTable';
import { categoryLabels, filteredProjects, projectFilters, statusLabels } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import type { Project, ProjectCategory } from '../types/project';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import { getProjectDisplayName } from '../lib/projectText';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const ProjectsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [query, setQuery] = useState('');

  const visibleProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return filteredProjects.filter((project) => {
      const matchesFilter = activeFilter === 'all' || project.category.includes(activeFilter);
      const haystack = [
        project.englishName,
        project.chineseName ?? '',
        project.dutchName ?? '',
        pickText(currentLanguage, project.tagline),
        pickText(currentLanguage, project.description),
        ...project.techStackIds,
      ]
        .join(' ')
        .toLowerCase();
      return matchesFilter && (!normalized || haystack.includes(normalized));
    });
  }, [activeFilter, currentLanguage, query]);

  return (
    <div className="neo-page" data-lang={currentLanguage}>
      <NeoSection eyebrow={<Breadcrumbs />} title={pickText(currentLanguage, uiText.projects.title)} description={pickText(currentLanguage, uiText.projects.intro)}>
        <div className="neo-filter-bar">
          {projectFilters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`neo-badge neo-filter-chip ${activeFilter === filter.key ? 'is-active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {pickText(currentLanguage, filter.label)}
            </button>
          ))}
        </div>
        <div className="neo-search-shell neo-search-shell--icon">
          <Search size={18} />
          <NeoInput value={query} onChange={(event) => setQuery(event.target.value)} placeholder={pickText(currentLanguage, uiText.common.searchPlaceholder)} />
        </div>
      </NeoSection>

      <div className="section-shell">
        <div className="neo-project-grid">
          {visibleProjects.map((project) => (
            <NeoCard key={project.slug} hoverable className="neo-project-card neo-project-card--spotlight">
              <div className="neo-project-card__header">
                <ProjectLogo src={project.logo} alt={project.englishName} />
                <div>
                  <h3>{getProjectDisplayName(project, currentLanguage)}</h3>
                  <p>{pickText(currentLanguage, project.tagline)}</p>
                </div>
              </div>
              <div className="neo-chip-row">
                <NeoBadge tone="cyan">{pickText(currentLanguage, categoryLabels[project.category[0]])}</NeoBadge>
                <NeoBadge tone="teal">{pickText(currentLanguage, statusLabels[project.status])}</NeoBadge>
              </div>
              <p>{pickText(currentLanguage, project.description)}</p>
              <div className="neo-chip-row">
                {project.techStackIds.slice(0, 4).map((stack) => (
                  <NeoBadge key={stack}>{stack.replace(/-/g, ' ')}</NeoBadge>
                ))}
              </div>
              <div className="neo-project-card__actions">
                <span className="neo-card__hint">
                  {project.browserExtension ? (
                    <>
                      <Puzzle size={14} />
                      {currentLanguage === 'zh'
                        ? '浏览器扩展'
                        : currentLanguage === 'nl'
                          ? 'Browserextensie'
                          : 'Browser Extension'}
                    </>
                  ) : project.desktopApp && project.webVersion ? (
                    <>
                      <Monitor size={14} />
                      <Globe size={14} />
                      {currentLanguage === 'zh'
                        ? '桌面软件 / Web 项目'
                        : currentLanguage === 'nl'
                          ? 'Desktopsoftware / Webproject'
                          : 'Desktop Software / Web Project'}
                    </>
                  ) : project.desktopApp ? (
                    <>
                      <Monitor size={14} />
                      {currentLanguage === 'zh'
                        ? '桌面软件'
                        : currentLanguage === 'nl'
                          ? 'Desktopsoftware'
                          : 'Desktop Software'}
                    </>
                  ) : (
                    <>
                      <Globe size={14} />
                      {currentLanguage === 'zh'
                        ? 'Web 项目'
                        : currentLanguage === 'nl'
                          ? 'Webproject'
                          : 'Web Project'}
                    </>
                  )}
                </span>
                <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')}>
                  {pickText(currentLanguage, uiText.common.learnMore)}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>

      <NeoSection title={pickText(currentLanguage, uiText.projects.tableTitle)}>
        <NeoTable<Project>
          rowKey={(project) => project.slug}
          rows={visibleProjects}
          columns={[
            { key: 'name', header: currentLanguage === 'zh' ? '项目' : currentLanguage === 'nl' ? 'Project' : 'Project', render: (project) => getProjectDisplayName(project, currentLanguage) },
            { key: 'category', header: currentLanguage === 'zh' ? '分类' : currentLanguage === 'nl' ? 'Categorie' : 'Category', render: (project) => pickText(currentLanguage, categoryLabels[project.category[0]]) },
            { key: 'types', header: currentLanguage === 'zh' ? '类型' : currentLanguage === 'nl' ? 'Type' : 'Type', render: (project) => project.projectType.join(' / ') },
            { key: 'backend', header: currentLanguage === 'zh' ? '后端' : currentLanguage === 'nl' ? 'Backend' : 'Backend', render: (project) => (project.backendRequired ? 'Yes' : 'No') },
            { key: 'stack', header: currentLanguage === 'zh' ? '技术栈' : currentLanguage === 'nl' ? 'Stack' : 'Stack', render: (project) => project.techStackIds.slice(0, 3).join(', ') },
            {
              key: 'open',
              header: currentLanguage === 'zh' ? '打开' : currentLanguage === 'nl' ? 'Openen' : 'Open',
              render: (project) => (
                <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')}>
                  {pickText(currentLanguage, uiText.common.learnMore)}
                </Link>
              ),
            },
          ]}
        />
      </NeoSection>
    </div>
  );
};

export default ProjectsPage;
