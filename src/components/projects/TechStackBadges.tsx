import React from 'react';

interface TechStackBadgesProps {
  techStack: string[];
}

const TechStackBadges: React.FC<TechStackBadgesProps> = ({ techStack }) => (
  <div className="tech-stack-badges" aria-label="Technology stack">
    {techStack.map((tech) => (
      <span key={tech} className="tech-stack-badge">
        {tech}
      </span>
    ))}
  </div>
);

export default TechStackBadges;
