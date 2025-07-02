import React, { useEffect } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from '../pages/Hero';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Skills from '../pages/Skills';
import Contact from '../pages/Contact';
import ThemeSwitcher from './ui/ThemeSwitcher';

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
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <ThemeSwitcher />
        <Footer />      
      </div>
    </LanguageProvider>
  );
};

export default App;
