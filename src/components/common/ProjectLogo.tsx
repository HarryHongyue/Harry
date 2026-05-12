import React, { useState } from 'react';
import { cn } from '../../lib/cn';

interface ProjectLogoProps {
  src?: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const ProjectLogo: React.FC<ProjectLogoProps> = ({ src, alt, className, imageClassName }) => {
  const [failed, setFailed] = useState(false);

  return (
    <div className={cn('neo-project-logo', className)}>
      {src && !failed ? <img src={src} alt={alt} className={cn('neo-project-logo__image', imageClassName)} onError={() => setFailed(true)} /> : <span className="neo-project-logo__fallback">{alt.slice(0, 1)}</span>}
    </div>
  );
};

export default ProjectLogo;
