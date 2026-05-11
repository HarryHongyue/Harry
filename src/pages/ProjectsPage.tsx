import React, { useMemo, useState } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoBadge from '../components/ui/NeoBadge';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoInput from '../components/ui/NeoInput';
import NeoSection from '../components/ui/NeoSection';
import NeoTable from '../components/ui/NeoTable';
import { categoryLabels, projectFilters, projects, statusLabels } from '../data/projects';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';
import type { Project, ProjectCategory } from '../types/project';
import { neoButtonClass } from '../components/ui/NeoButton';

const ProjectsPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | ProjectCategory>('all');
  const [query, setQuery] = useState('');

  const filteredProjects = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
      const haystack = [
        pickText(currentLanguage, project.name),
        pickText(currentLanguage, project.tagline),
        pickText(currentLanguage, project.description),
        ...project.techStack,
      ]
        .join(' ')
        .toLowerCase();
      const matchesQuery = !normalized || haystack.includes(normalized);
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, currentLanguage, query]);

  return (
    <div className="neo-page">
      <NeoSection eyebrow={pickText(currentLanguage, uiText.projects.eyebrow)} title={pickText(currentLanguage, uiText.projects.title)} description={pickText(currentLanguage, uiText.projects.intro)}>
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
        <div className="neo-search-shell">
          <NeoInput
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={pickText(currentLanguage, uiText.common.searchPlaceholder)}
          />
        </div>
      </NeoSection>

      <div className="section-shell">
        <div className="neo-project-grid">
          {filteredProjects.map((project) => (
            <NeoCard key={project.slug} hoverable className="neo-project-card">
              <div className="neo-project-card__header">
                <NeoIconBox tone="cyan" icon={<Search size={24} />} />
                <div>
                  <h3>{pickText(currentLanguage, project.name)}</h3>
                  <p>{pickText(currentLanguage, project.tagline)}</p>
                </div>
              </div>
              <div className="neo-chip-row">
                <NeoBadge tone="cyan">{pickText(currentLanguage, categoryLabels[project.category])}</NeoBadge>
                <NeoBadge tone="teal">{pickText(currentLanguage, statusLabels[project.status])}</NeoBadge>
              </div>
              <p>{pickText(currentLanguage, project.description)}</p>
              <div className="neo-chip-row">
                {project.techStack.slice(0, 4).map((item) => (
                  <NeoBadge key={item}>{item}</NeoBadge>
                ))}
              </div>
              <div className="neo-project-card__actions">
                <span style={{ color: 'var(--text-muted)' }}>{project.backendRequired ? 'Backend Required' : 'Static / Client Surface'}</span>
                <Link to={`/projects/${project.slug}`} className={neoButtonClass('secondary')}>
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
          rows={filteredProjects}
          columns={[
            { key: 'name', header: currentLanguage === 'zh' ? '项目' : currentLanguage === 'nl' ? 'Project' : 'Project', render: (project) => pickText(currentLanguage, project.name) },
            { key: 'category', header: currentLanguage === 'zh' ? '分类' : currentLanguage === 'nl' ? 'Categorie' : 'Category', render: (project) => pickText(currentLanguage, categoryLabels[project.category]) },
            { key: 'deploymentType', header: currentLanguage === 'zh' ? '交付方式' : currentLanguage === 'nl' ? 'Delivery' : 'Delivery', render: (project) => project.deploymentType },
            { key: 'backendRequired', header: currentLanguage === 'zh' ? '后端' : currentLanguage === 'nl' ? 'Backend' : 'Backend', render: (project) => (project.backendRequired ? 'Yes' : 'No') },
            { key: 'stack', header: currentLanguage === 'zh' ? '技术栈' : currentLanguage === 'nl' ? 'Stack' : 'Stack', render: (project) => project.techStack.slice(0, 3).join(', ') },
            { key: 'open', header: '', render: (project) => <Link to={`/projects/${project.slug}`} className={neoButtonClass('ghost')}>{pickText(currentLanguage, uiText.common.learnMore)}</Link> },
          ]}
        />
      </NeoSection>
    </div>
  );
};

export default ProjectsPage;
