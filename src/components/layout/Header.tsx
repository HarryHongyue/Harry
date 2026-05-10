import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import type { Translations } from '../../utils/translations';
import LogoImage from '../../assets/images/Logo.png';
import './Header.css';

const navItems = [
  { to: '/', labelKey: 'home' },
  { to: '/about', labelKey: 'about' },
  { to: '/projects', labelKey: 'projects' },
  { to: '/downloads', labelKey: 'downloads' },
  { to: '/security', labelKey: 'security' },
  { to: '/contact', labelKey: 'contact' },
] satisfies Array<{ to: string; labelKey: keyof Translations }>;

const languages = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'nl', label: 'Nederlands' },
];

const Header: React.FC = () => {
  const { t, currentLanguage, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const savedMode = localStorage.getItem('preferredMode');
    const bodyClasses = document.body.classList;
    if (!bodyClasses.contains('dark-mode') && !bodyClasses.contains('light-mode')) {
      bodyClasses.add(savedMode === 'dark' ? 'dark-mode' : 'light-mode');
    }
    if (!Array.from(bodyClasses).some((className) => className.endsWith('-theme'))) {
      bodyClasses.add('indigo-theme');
    }
    setIsDarkMode(bodyClasses.contains('dark-mode') || savedMode === 'dark');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applyThemeMode = (darkMode: boolean) => {
    const bodyClasses = document.body.classList;
    bodyClasses.remove('light-mode', 'dark-mode');
    bodyClasses.add(darkMode ? 'dark-mode' : 'light-mode');

    const currentColorTheme = Array.from(bodyClasses).find((className) => className.endsWith('-theme'));
    const colorId = currentColorTheme ? currentColorTheme.replace('-theme', '') : 'indigo';
    if (!currentColorTheme) {
      bodyClasses.add('indigo-theme');
    }

    localStorage.setItem('preferredMode', darkMode ? 'dark' : 'light');
    window.dispatchEvent(new CustomEvent('modeChange', { detail: { isDarkMode: darkMode, colorId } }));
    window.dispatchEvent(new CustomEvent('applyTheme', { detail: { colorId, isDarkMode: darkMode } }));
  };

  const toggleDarkMode = () => {
    const nextMode = !isDarkMode;
    setIsDarkMode(nextMode);
    applyThemeMode(nextMode);
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <div className="container">
        <nav>
          <div className="logo">
            <Link to="/" className="logo-link" onClick={closeMobileMenu}>
              <img src={LogoImage} alt="Harry Hongyue Logo" style={{ height: '40px', width: 'auto' }} />
              <span>Harry Hongyue</span>
            </Link>
          </div>

          <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) => `nav-link-no-border ${isActive ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {t(item.labelKey)}
                </NavLink>
              </li>
            ))}
            <li className="language-switcher-mobile">
              <div className="language-switcher">
                <button className="language-btn" onClick={() => setIsLanguageDropdownOpen((open) => !open)} type="button">
                  {currentLanguage.toUpperCase()} <i className="fas fa-globe"></i>
                </button>
                <ul className={`language-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}>
                  {languages.map((language) => (
                    <li
                      key={language.code}
                      className={currentLanguage === language.code ? 'active' : ''}
                      onClick={() => handleLanguageChange(language.code)}
                    >
                      {language.label}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>

          <div className="header-actions desktop-only">
            <div className="language-switcher">
              <button className="language-btn" onClick={() => setIsLanguageDropdownOpen((open) => !open)} type="button">
                {currentLanguage.toUpperCase()} <i className="fas fa-globe"></i>
              </button>
              <ul className={`language-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}>
                {languages.map((language) => (
                  <li
                    key={language.code}
                    className={currentLanguage === language.code ? 'active' : ''}
                    onClick={() => handleLanguageChange(language.code)}
                  >
                    {language.label}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mode-toggle-btn ${isDarkMode ? 'dark' : 'light'}`}
              onClick={toggleDarkMode}
              title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              type="button"
            >
              <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
            </button>
          </div>

          <button className="hamburger" onClick={() => setIsMobileMenuOpen((open) => !open)} type="button" aria-label="Toggle navigation">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
