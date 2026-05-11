import React from 'react';

const SiteBackground: React.FC = () => {
  return (
    <div className="site-background" aria-hidden="true">
      <div className="site-background__mesh" />
      <div className="site-background__orb site-background__orb--cyan" />
      <div className="site-background__orb site-background__orb--blue" />
      <div className="site-background__orb site-background__orb--teal" />
    </div>
  );
};

export default SiteBackground;
