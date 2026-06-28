import React, { useMemo } from 'react';
import { Code2, Database, Download, Mail, MessageCircleMore, Users } from 'lucide-react';
import ProjectLogo from './ProjectLogo';

interface InteractiveHeroSceneProps {
  variant?: 'home' | 'contact';
}

const InteractiveHeroScene: React.FC<InteractiveHeroSceneProps> = ({ variant = 'home' }) => {
  const floating = useMemo(
    () =>
      variant === 'contact'
        ? [
            { icon: <Mail size={22} />, className: 'is-mail' },
            { icon: <Users size={22} />, className: 'is-users' },
            { icon: <MessageCircleMore size={22} />, className: 'is-chat' },
          ]
        : [
            { icon: <Database size={22} />, className: 'is-database' },
            { icon: <Code2 size={22} />, className: 'is-code' },
            { icon: <Download size={22} />, className: 'is-download' },
          ],
    [variant],
  );

  return (
    <div className={`neo-scene neo-scene--${variant}`}>
      <div className="neo-scene__grid" />
      <div className="neo-scene__platform">
        <div className="neo-scene__platform-ring" />
        <div className="neo-scene__core">
          <ProjectLogo src="/project-assets/omnigent-logo.png" alt="Harry" className="neo-scene__logo" imageClassName="neo-scene__logo-image" />
        </div>
      </div>
      {floating.map((item, index) => (
        <div key={index} className={`neo-scene__float ${item.className}`}>
          {item.icon}
        </div>
      ))}
      <div className="neo-scene__beam neo-scene__beam--one" />
      <div className="neo-scene__beam neo-scene__beam--two" />
      <div className="neo-scene__beam neo-scene__beam--three" />
    </div>
  );
};

export default InteractiveHeroScene;
