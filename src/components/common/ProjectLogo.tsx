import React from 'react';
import { cn } from '../../lib/cn';

interface ProjectLogoProps {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const ProjectLogo: React.FC<ProjectLogoProps> = ({ src, alt, className, imageClassName }) => {
  return (
    <div className={cn('neo-project-logo', className)}>
      {src ? <img src={src} alt={alt} className={cn('neo-project-logo__image', imageClassName)} /> : <span className="neo-project-logo__fallback">{alt.slice(0, 1)}</span>}
    </div>
  );
};

export default ProjectLogo;
