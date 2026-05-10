import React from 'react';
import { Link } from 'react-router-dom';

/**
 * The first section visible when the page loads
 * Uses CSS variables from ThemeSwitcher for theme adaptation
 */
const Hero: React.FC = () => {

  return (
    <section 
      id="home" 
      className="hero min-h-screen flex items-center relative transition-colors duration-300"
    >
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <div className="max-w-[700px]">
          <h1 className="text-5xl font-bold mb-4 text-left">
            Harry <span className="highlight">Project Showcase</span>
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-left">
            Personal site, project catalog, downloads, and deployment notes
          </h2>
          <p className="text-lg mb-8 text-left opacity-90">
            A lightweight main shell for Harry Hongyue's independent projects: PDF processing,
            logistics EDI, desktop software, browser extensions, and architecture references.
          </p>
          
          <div className="flex flex-row flex-wrap gap-4 md:gap-6 mt-8 justify-start">
            <Link to="/projects" className="btn primary-btn">Explore projects</Link>
            <Link to="/downloads" className="btn secondary-btn">Open downloads</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
