import React from 'react';
import HeroButton from '../components/ui/HeroButton';

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
            Hello, I'm <span className="highlight">Harry</span>
          </h1>
          <h2 className="text-3xl font-semibold mb-4 text-left">
            Software Developer & Tech Enthusiast
          </h2>
          <p className="text-lg mb-8 text-left opacity-90">
            I create innovative solutions and bring ideas to life through code.
          </p>
          
          <div className="flex flex-row flex-wrap gap-4 md:gap-6 mt-8 justify-start">
            <HeroButton 
              href="#projects" 
              variant="primary"
            >
              View My Work
            </HeroButton>
            <HeroButton 
              href="#contact" 
              variant="secondary"
            >
              Contact Me
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
