import React from 'react';

/**
 * Hero section component
 * The first section visible when the page loads
 */
const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-r from-white/90 to-white/70 bg-cover bg-center bg-[url('../assets/images/hero-bg.jpg')] relative">
      <div className="w-[90%] max-w-[1200px] mx-auto px-5">
        <div className="max-w-[700px]">
          <h1 className="text-5xl font-bold mb-4">Hello, I'm <span className="text-blue-500">Harry Ji</span></h1>
          <h2 className="text-3xl font-semibold mb-4">Software Developer & Tech Enthusiast</h2>
          <p className="text-lg mb-8">I create innovative solutions and bring ideas to life through code.</p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="inline-block px-6 py-3 rounded-full bg-blue-500 text-white font-semibold transition-all hover:bg-blue-600">View My Work</a>
            <a href="#contact" className="inline-block px-6 py-3 rounded-full border-2 border-blue-500 text-blue-500 font-semibold transition-all hover:bg-blue-500 hover:text-white">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
