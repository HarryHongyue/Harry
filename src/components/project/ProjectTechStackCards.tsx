import React from 'react';
import type { IconType } from 'react-icons';
import {
  SiApachemaven,
  SiAstro,
  SiCaddy,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFramer,
  SiGithub,
  SiMariadb,
  SiMysql,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPostgresql,
  SiPydantic,
  SiPython,
  SiReact,
  SiRedis,
  SiSpringboot,
  SiSqlite,
  SiTailwindcss,
  SiTauri,
  SiTypescript,
  SiVite,
  SiWoocommerce,
  SiWordpress,
} from 'react-icons/si';
import { techStackById } from '../../data/techStack';

interface ProjectTechStackCardsProps {
  techStackIds: string[];
  locale?: string;
}

interface TechLogoMeta {
  label: string;
  Icon?: IconType;
  color?: string;
}

const logoMeta: Record<string, TechLogoMeta> = {
  react: { label: 'React', Icon: SiReact, color: '#61DAFB' },
  typescript: { label: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  vite: { label: 'Vite', Icon: SiVite, color: '#646CFF' },
  tailwind: { label: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  'framer-motion': { label: 'Framer Motion', Icon: SiFramer, color: '#FFFFFF' },
  nextjs: { label: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
  astro: { label: 'Astro', Icon: SiAstro, color: '#FF5D01' },
  nodejs: { label: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  express: { label: 'Express', Icon: SiExpress, color: '#FFFFFF' },
  fastapi: { label: 'FastAPI', Icon: SiFastapi, color: '#009688' },
  postgresql: { label: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  mysql: { label: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  mariadb: { label: 'MariaDB', Icon: SiMariadb, color: '#003545' },
  redis: { label: 'Redis', Icon: SiRedis, color: '#FF4438' },
  docker: { label: 'Docker', Icon: SiDocker, color: '#2496ED' },
  caddy: { label: 'Caddy', Icon: SiCaddy, color: '#1F88C0' },
  nginx: { label: 'Nginx', Icon: SiNginx, color: '#009639' },
  wordpress: { label: 'WordPress', Icon: SiWordpress, color: '#21759B' },
  woocommerce: { label: 'WooCommerce', Icon: SiWoocommerce, color: '#96588A' },
  python: { label: 'Python', Icon: SiPython, color: '#3776AB' },
  java: { label: 'Java', Icon: SiOpenjdk, color: '#F89820' },
  javafx: { label: 'JavaFX' },
  maven: { label: 'Maven', Icon: SiApachemaven, color: '#C71A36' },
  'spring-boot': { label: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
  php: { label: 'PHP', Icon: SiPhp, color: '#777BB4' },
  sqlite: { label: 'SQLite', Icon: SiSqlite, color: '#003B57' },
  'github-releases': { label: 'GitHub Releases', Icon: SiGithub, color: '#FFFFFF' },
  'browser-extension-api': { label: 'Browser Extension APIs' },
  pdfjs: { label: 'PDF.js' },
  ocr: { label: 'OCR' },
  tesseract: { label: 'Tesseract' },
  edi: { label: 'EDI' },
  'air-cargo': { label: 'Air Cargo Domain' },
  'rest-api': { label: 'REST API' },
  h2: { label: 'H2 Database' },
  pydantic: { label: 'Pydantic', Icon: SiPydantic, color: '#E92063' },
  pymupdf: { label: 'PyMuPDF' },
  tauri: { label: 'Tauri', Icon: SiTauri, color: '#FFC131' },
};

const fallbackLabel = (tech: string) => techStackById[tech]?.name ?? tech.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());

const titleText = (locale?: string) => {
  if (locale === 'zh') {
    return '用到的技术栈';
  }
  if (locale === 'nl') {
    return 'Gebruikte techstack';
  }
  return 'Technologies Used';
};

const ProjectTechStackCards: React.FC<ProjectTechStackCardsProps> = ({ techStackIds, locale }) => (
  <div className="project-tech-stack-cards">
    <h3 className="project-tech-stack-cards__title">{titleText(locale)}</h3>
    <div className="project-tech-stack-cards__grid">
      {techStackIds.map((tech) => {
        const meta = logoMeta[tech];
        const label = meta?.label ?? fallbackLabel(tech);
        const initials = label.split(/\s|-|\./).filter(Boolean).slice(0, 2).map((word) => word[0]).join('');
        const Icon = meta?.Icon;
        return (
          <article className="project-tech-stack-card" key={tech}>
            <div className="project-tech-stack-card__logo">
              {Icon ? (
                <Icon aria-label={`${label} logo`} style={{ color: meta?.color }} />
              ) : (
                <span>{initials}</span>
              )}
            </div>
            <h4>{label}</h4>
          </article>
        );
      })}
    </div>
  </div>
);

export default ProjectTechStackCards;
