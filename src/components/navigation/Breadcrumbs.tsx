import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getProjectBySlug } from '../../data/projects';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText, uiText } from '../../data/siteContent';
import type { LocalizedText } from '../../types/project';

interface Crumb {
  label: string;
  href?: string;
}

const routeLabelMap: Record<string, LocalizedText> = {
  '/about': { en: 'About', zh: '关于', nl: 'Over' },
  '/projects': uiText.common.breadcrumbProjects,
  '/downloads': { en: 'Downloads', zh: '下载中心', nl: 'Downloads' },
  '/deployment': { en: 'Deployment', zh: '部署说明', nl: 'Deployment' },
  '/security': { en: 'Security', zh: '安全说明', nl: 'Security' },
  '/contact': { en: 'Contact', zh: '联系', nl: 'Contact' },
};

const Breadcrumbs: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const { pathname } = useLocation();

  if (pathname === '/') {
    return null;
  }

  const crumbs: Crumb[] = [{ label: pickText(currentLanguage, uiText.common.home), href: '/' }];

  if (pathname.startsWith('/projects/')) {
    const slug = pathname.split('/')[2];
    const project = getProjectBySlug(slug);
    crumbs.push({ label: pickText(currentLanguage, uiText.common.breadcrumbProjects), href: '/projects' });
    if (project) {
      crumbs.push({ label: project.chineseName && currentLanguage === 'zh' ? project.chineseName : currentLanguage === 'nl' && project.dutchName ? project.dutchName : project.englishName });
    }
  } else {
    const label = routeLabelMap[pathname];
    if (label) {
      crumbs.push({ label: pickText(currentLanguage, label) });
    }
  }

  return (
    <nav className="neo-breadcrumbs" aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => {
        const isCurrent = index === crumbs.length - 1;
        return (
          <React.Fragment key={`${crumb.label}-${index}`}>
            {index === 0 ? <Home size={14} /> : <ChevronRight size={14} className="neo-breadcrumbs__sep" />}
            {crumb.href && !isCurrent ? (
              <Link to={crumb.href} className="neo-breadcrumbs__link">
                {crumb.label}
              </Link>
            ) : (
              <span className={`neo-breadcrumbs__current ${isCurrent ? 'is-current' : ''}`}>{crumb.label}</span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
