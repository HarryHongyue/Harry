import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LogoImage from '../../assets/images/Logo.png';
import './Header.css';

/**
 * Header component with proper layout:
 * Left: Logo + Site Name
 * Right: Navigation Menu + Language Switcher
 */
const Header: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState<boolean>(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState<boolean>(false);
  const [displayLanguage, setDisplayLanguage] = useState<string>('EN');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const projectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const languageDropdownRef = useRef<HTMLUListElement | null>(null);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    // Theme mode
    const bodyClasses = document.body.classList;
    const initialDarkMode = bodyClasses.contains('dark-mode');
    setIsDarkMode(initialDarkMode);
    if (!bodyClasses.contains('dark-mode') && !bodyClasses.contains('light-mode')) {
      bodyClasses.add('light-mode');
    }
    setDisplayLanguage(currentLanguage.toUpperCase());
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentLanguage]);

  // Listen for color change events and initialize theme from localStorage
  useEffect(() => {
    const handleColorChange = (event: Event) => {
      // Just for debug
      // console.log('Header received colorChange event:', event);
    };
    const savedMode = localStorage.getItem('preferredMode');
    if (savedMode) {
      const shouldBeDark = savedMode === 'dark';
      if (shouldBeDark !== isDarkMode) {
        setIsDarkMode(shouldBeDark);
        applyThemeMode(shouldBeDark);
      }
    }
    window.addEventListener('colorChange', handleColorChange);
    return () => {
      window.removeEventListener('colorChange', handleColorChange);
    };
  }, [isDarkMode]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    };
    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };
  // Toggle dark/light mode
  const toggleDarkMode = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    applyThemeMode(newDarkMode);
  };

  // Apply theme mode (light/dark)
  const applyThemeMode = (darkMode: boolean) => {
    try {
      const bodyClasses = document.body.classList;
      bodyClasses.remove('light-mode', 'dark-mode');
      bodyClasses.add(darkMode ? 'dark-mode' : 'light-mode');
      // Get color theme
      const currentColorTheme = Array.from(bodyClasses).find(cls => cls.endsWith('-theme'));
      const colorId = currentColorTheme ? currentColorTheme.replace('-theme', '') : 'indigo';
      if (!currentColorTheme) {
        bodyClasses.add('indigo-theme');
      }
      localStorage.setItem('preferredMode', darkMode ? 'dark' : 'light');
      window.dispatchEvent(new CustomEvent('modeChange', {
        detail: { isDarkMode: darkMode, colorId }
      }));
      window.dispatchEvent(new CustomEvent('applyTheme', {
        detail: { colorId, isDarkMode: darkMode }
      }));
      // (No need to dispatch twice)
      // console.log(`Requested theme application for ${colorId} in ${darkMode ? 'dark' : 'light'} mode`);
    } catch (error) {
      console.error('Failed to apply theme:', error);
    }
  };

  // Toggle language dropdown
  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageDropdownOpen((prev) => !prev);
  };
  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setDisplayLanguage(lang.toUpperCase());
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };
  // Handle project dropdown
  const handleProjectMouseEnter = () => {
    if (projectTimeoutRef.current) {
      clearTimeout(projectTimeoutRef.current);
    }
    setIsProjectDropdownOpen(true);
  };
  const handleProjectMouseLeave = () => {
    projectTimeoutRef.current = setTimeout(() => {
      setIsProjectDropdownOpen(false);
    }, 300);
  };
  // Handle navigation click
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .nav-links a,
        .nav-links a:hover,
        .nav-links a:focus,
        .nav-links a:active,
        .nav-links a:visited {
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          text-decoration: none !important;
        }
        *:focus {
          outline: none !important;
        }
        a:focus,
        button:focus,
        input:focus,
        textarea:focus,
        select:focus {
          outline: none !important;
          box-shadow: 0 0 0 2px var(--primary-color) !important;
        }
        .language-btn {
          background-color: transparent !important;
          border: 1px solid var(--primary-color) !important;
          color: var(--primary-color) !important;
        }
        .language-btn:hover {
          background-color: var(--primary-color) !important;
          color: var(--button-text) !important;
        }
        .language-dropdown {
          background-color: var(--card-bg) !important;
          border: 1px solid var(--border-color) !important;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          display: none;
          position: absolute;
          z-index: 1001;
          min-width: 120px;
        }
        .language-dropdown.active,
        .language-hover-wrapper:hover .language-dropdown {
          display: block;
        }
        .language-dropdown li {
          color: var(--body-text) !important;
          background-color: transparent;
          cursor: pointer;
          padding: 8px 16px;
        }
        .language-dropdown li:hover {
          background-color: var(--bg-tertiary) !important;
          color: var(--primary-color) !important;
        }
        .language-dropdown li.active {
          color: var(--primary-color) !important;
          background-color: var(--bg-tertiary) !important;
        }
        .theme-mode-switcher {
          margin-left: 15px;
          z-index: 100;
        }
        .mode-toggle-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background-color: var(--bg-primary);
          color: var(--primary-color);
          box-shadow: none;
          position: relative;
          overflow: hidden;
        }
        .mode-toggle-btn:hover {
          transform: rotate(15deg) scale(1.1);
          color: #ffffff;
          background-color: var(--primary-color);
        }
        .mode-toggle-btn.light {
          background-color: #ffffff;
          color: #6366f1;
          border-color: #6366f1;
        }
        .mode-toggle-btn.dark {
          background-color: #1e293b;
          color: #f8fafc;
          border-color: #f8fafc;
        }
        .mode-toggle-btn:active {
          transform: scale(0.95);
        }
        .mode-toggle-btn i {
          font-size: 1.2rem;
        }
        @media (max-width: 768px) {
          .theme-mode-switcher {
            margin-left: 10px;
          }
          .mode-toggle-btn {
            width: 32px;
            height: 32px;
          }
        }
        .nav-links a {
          position: relative;
          text-decoration: none;
          color: var(--primary-color) !important;
          padding-bottom: 5px;
          transition: color 0.3s ease;
        }
        .nav-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: var(--primary-color) !important;
          transition: width 0.3s ease;
        }
        .nav-links a:hover::after {
          width: 100%;
        }
      `}</style>
      <header className={`${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav>
            {/* Left: Logo + Site Name */}
            <div className="logo">
              <a href="#home" className="logo-link">
                <img src={LogoImage} alt="Harry Ji Logo" style={{ height: '40px', width: 'auto' }} />
                <span>Harry Hongyue</span>
              </a>
            </div>
            {/* Right: Nav Menu (Desktop) */}
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="active nav-link-no-border" onClick={handleNavClick}>{t('home')}</a></li>
              <li><a href="#about" className="nav-link-no-border" onClick={handleNavClick}>{t('about')}</a></li>
              <li className="project-switcher">
                <div 
                  className="project-hover-wrapper"
                  onMouseEnter={handleProjectMouseEnter}
                  onMouseLeave={handleProjectMouseLeave}
                >
                  <a href="#projects" className="nav-link-no-border" onClick={handleNavClick}>
                    {t('projects')}
                  </a>
                  <ul className={`project-dropdown ${isProjectDropdownOpen ? 'show' : ''}`}
                      style={{ display: isProjectDropdownOpen ? 'block' : 'none', position: 'absolute', zIndex: 1001, background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}>
                    <li>
                      <a 
                        href="https://odesolver.harryhongyue.site/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        ODE Solver
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://surpriseme.harryhongyue.site/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Surprise Me
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li><a href="#skills" className="nav-link-no-border" onClick={handleNavClick}>{t('skills')}</a></li>
              <li><a href="#contact" className="nav-link-no-border" onClick={handleNavClick}>{t('contact')}</a></li>
              {/* Language Switcher (Mobile) */}
              <li className="language-switcher-mobile">
                <div className="language-switcher">
                  <button 
                    className="language-btn"
                    onClick={toggleLanguageDropdown}
                  >
                    {displayLanguage} <i className="fas fa-globe"></i>
                  </button>
                  <ul ref={languageDropdownRef} className={`language-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}
                    style={{ position: 'absolute', zIndex: 1001, minWidth: '120px' }}>
                    <li 
                      className={currentLanguage === 'en' ? 'active' : ''} 
                      onClick={() => handleLanguageChange('en')}
                    >
                      English
                    </li>
                    <li 
                      className={currentLanguage === 'zh' ? 'active' : ''} 
                      onClick={() => handleLanguageChange('zh')}
                    >
                      中文
                    </li>
                    <li 
                      className={currentLanguage === 'nl' ? 'active' : ''} 
                      onClick={() => handleLanguageChange('nl')}
                    >
                      Nederlands
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* Language Switcher (Desktop) - hover effect */}
            <div className="language-switcher desktop-only">
              <div className="language-hover-wrapper">
                <button className="language-btn" onClick={toggleLanguageDropdown}>
                  {displayLanguage} <i className="fas fa-globe"></i>
                </button>
                <ul ref={languageDropdownRef} className={`language-dropdown hover-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}
                  style={{ position: 'absolute', zIndex: 1001, minWidth: '120px' }}>
                  <li 
                    className={currentLanguage === 'en' ? 'active' : ''}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </li>
                  <li 
                    className={currentLanguage === 'zh' ? 'active' : ''}
                    onClick={() => handleLanguageChange('zh')}
                  >
                    中文
                  </li>
                  <li 
                    className={currentLanguage === 'nl' ? 'active' : ''}
                    onClick={() => handleLanguageChange('nl')}
                  >
                    Nederlands
                  </li>
                </ul>
              </div>
            </div>
            {/* Theme Mode Switcher (Desktop) */}
            <div className="theme-mode-switcher desktop-only">
              <button 
                className={`mode-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
                onClick={toggleDarkMode}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                type="button"
              >
                {isDarkMode ? (
                  <i className="fas fa-sun"></i>
                ) : (
                  <i className="fas fa-moon" style={{ color: '#111' }}></i>
                )}
              </button>
            </div>
            {/* Mobile Hamburger Menu */}
            <div className="hamburger" onClick={toggleMobileMenu}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
