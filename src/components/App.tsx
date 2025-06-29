import React, { useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';
import ThemeSwitcher from './common/ThemeSwitcher';

/**
 * Main App component
 * Combines all sections and layout components
 */
const App: React.FC = () => {
  // Handle scroll animations
  useEffect(() => {
    const checkFade = () => {
      const fadeElements = document.querySelectorAll('.fade-in');
      
      fadeElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
          element.classList.add('active');
        }
      });
    };
    
    // Initial check
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    return () => {
      window.removeEventListener('scroll', checkFade);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ThemeSwitcher />
      <Footer />      
    </div>
  );
};

export default App;
