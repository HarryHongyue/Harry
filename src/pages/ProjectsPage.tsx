import React, { useMemo, useState } from 'react';
import { ArrowRight, Globe, LayoutDashboard, Monitor, Puzzle, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoInput from '../components/ui/NeoInput';
import NeoSection from '../components/ui/NeoSection';
import { categoryLabels, filteredProjects, projectFilters, statusLabels } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import type { ProjectCategory } from '../types/project';
import { neoButtonClass } from '../components/ui/NeoButton';
import ProjectLogo from '../components/common/ProjectLogo';
import { getProjectDisplayName } from '../lib/projectText';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const ProjectsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [query, setQuery] = useState('');

  const visibleProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const seen = new Set<string>();

    return filteredProjects.filter((project) => {
      if (seen.has(project.slug)) return false;
      seen.add(project.slug);

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
      <Breadcrumbs />
      <NeoSection className="neo-projects-hero-section" title={pickText(currentLanguage, uiText.projects.title)} description={pickText(currentLanguage, uiText.projects.intro)}>
        <div className="neo-projects-toolbar">
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
        </div>
      </NeoSection>

      <div className="section-shell">
        <div className="neo-project-grid">
          {visibleProjects.map((project) => (
            <NeoCard
              key={project.slug}
              hoverable
              className="neo-project-card neo-project-card--spotlight"
              onClick={() => {
                const selection = window.getSelection();
                if (selection && selection.toString().trim() === '') {
                  navigate(`/projects/${project.slug}`);
                }
              }}
            >
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
                      {currentLanguage === 'zh' ? '浏览器扩展' : currentLanguage === 'nl' ? 'Browserextensie' : 'Browser Extension'}
                    </>
                  ) : project.desktopApp && project.webVersion ? (
                    <>
                      <Monitor size={14} />
                      <Globe size={14} />
                      {currentLanguage === 'zh' ? '桌面软件 / Web 项目' : currentLanguage === 'nl' ? 'Desktopsoftware / Webproject' : 'Desktop Software / Web Project'}
                    </>
                  ) : project.desktopApp ? (
                    <>
                      <Monitor size={14} />
                      {currentLanguage === 'zh' ? '桌面软件' : currentLanguage === 'nl' ? 'Desktopsoftware' : 'Desktop Software'}
                    </>
                  ) : (
                    <>
                      <Globe size={14} />
                      {currentLanguage === 'zh' ? 'Web 项目' : currentLanguage === 'nl' ? 'Webproject' : 'Web Project'}
                    </>
                  )}
                </span>
                <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')} onClick={(e) => e.stopPropagation()}>
                  {pickText(currentLanguage, uiText.common.learnMore)}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </NeoCard>
          ))}
        </div>
      </div>

      <NeoSection className="neo-project-overview-section">
        <div className="neo-project-overview-card">
          <div className="neo-project-overview-card__title">
            <LayoutDashboard size={30} />
            <h2>
              Projects at a Glance <span>{currentLanguage === 'zh' ? '项目速览' : currentLanguage === 'nl' ? 'Projectenoverzicht' : 'Project Overview'}</span>
            </h2>
          </div>
          <div className="neo-project-overview-table">
            <table>
              <thead>
                <tr>
                  <th>{currentLanguage === 'zh' ? '项目' : currentLanguage === 'nl' ? 'Project' : 'Project'}</th>
                  <th>{currentLanguage === 'zh' ? '类型' : currentLanguage === 'nl' ? 'Type' : 'Type'}</th>
                  <th>{currentLanguage === 'zh' ? '后端' : currentLanguage === 'nl' ? 'Backend' : 'Backend'}</th>
                  <th>{currentLanguage === 'zh' ? '主要技术' : currentLanguage === 'nl' ? 'Primary Tech' : 'Primary Tech'}</th>
                  <th>{currentLanguage === 'zh' ? '状态' : currentLanguage === 'nl' ? 'Status' : 'Status'}</th>
                  <th>{currentLanguage === 'zh' ? '打开' : currentLanguage === 'nl' ? 'Openen' : 'Open'}</th>
                </tr>
              </thead>
              <tbody>
                {[...visibleProjects].sort((a, b) => {
                  const priorityOrder: Record<string, number> = {
                    'future-website-building-platform': 0,
                    'harrys-hub': 1,
                    'pdf-reader': 2,
                    'aircargo-edi': 3,
                    'electronic-product-specifications-analysis': 4,
                  };

                  const priorityA = priorityOrder[a.slug] ?? 999;
                  const priorityB = priorityOrder[b.slug] ?? 999;

                  if (priorityA !== priorityB) {
                    return priorityA - priorityB;
                  }

                  const statusOrder = { 'active': 0, 'featured': 1, 'client-project': 2, 'school-project': 3, 'completed': 4 };
                  const orderA = statusOrder[a.status as keyof typeof statusOrder] ?? 5;
                  const orderB = statusOrder[b.status as keyof typeof statusOrder] ?? 5;
                  return orderA - orderB;
                }).map((project) => {
                  const statusTone = project.status === 'active' || project.status === 'featured' ? 'green' : project.status === 'client-project' || project.status === 'school-project' ? 'yellow' : 'blue';
                  return (
                    <tr key={project.slug}>
                      <td>
                        <strong>{getProjectDisplayName(project, currentLanguage)}</strong>
                      </td>
                      <td>{project.projectType.join(' / ')}</td>
                      <td>
                        {project.backendType === 'light' ? (
                          <span className="neo-status-pill neo-status-pill--purple">
                            <i />
                            {currentLanguage === 'zh' ? '轻量' : currentLanguage === 'nl' ? 'Lichtgewicht' : 'Light'}
                          </span>
                        ) : (
                          <span className={`neo-status-pill neo-status-pill--${project.backendRequired ? 'blue' : 'green'}`}>
                            <i />
                            {project.backendRequired ? (currentLanguage === 'zh' ? '需要' : currentLanguage === 'nl' ? 'Vereist' : 'Required') : currentLanguage === 'zh' ? '不需要' : currentLanguage === 'nl' ? 'Niet nodig' : 'Not Required'}
                          </span>
                        )}
                      </td>
                      <td>{project.techStackIds.slice(0, 3).join(', ')}</td>
                      <td>
                        <span className={`neo-status-pill neo-status-pill--${statusTone}`}>
                          <i />
                          {pickText(currentLanguage, statusLabels[project.status])}
                        </span>
                      </td>
                      <td>
                        <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')}>
                          {pickText(currentLanguage, uiText.common.learnMore)}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </NeoSection>
    </div>
  );
};

export default ProjectsPage;
