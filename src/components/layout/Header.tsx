import React, { useState, useEffect, useRef } from 'react';

/**
 * Header component with proper layout:
 * Left: Logo + Site Name
 * Right: Navigation Menu + Language Switcher
 */
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState<boolean>(false);
  const [currentLanguage, setCurrentLanguage] = useState<string>('EN');

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Load saved language - 不使用localStorage，改用内存存储
    setCurrentLanguage('EN');
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsLanguageDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle language dropdown
  const toggleLanguageDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // Handle language change
  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang.toUpperCase());
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false); // Close mobile menu if open
    
    // Trigger language change event
    window.dispatchEvent(new CustomEvent('languageChange', { detail: lang }));
  };

  // Handle navigation click
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 内联样式来确保覆盖所有可能的样式冲突 */}
      <style>{`
        /* 确保导航链接没有边框 */
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

        /* 移除所有可能的默认边框和轮廓 */
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

        /* 语言切换按钮样式修复 */
        .language-btn {
          background-color: transparent !important;
          border: 1px solid var(--primary-color) !important;
          color: var(--primary-color) !important;
        }

        .language-btn:hover {
          background-color: var(--primary-color) !important;
          color: var(--button-text) !important;
        }

        /* 语言下拉菜单修复 */
        .language-dropdown {
          background-color: var(--card-bg) !important;
          border: 1px solid var(--border-color) !important;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .language-dropdown li {
          color: var(--body-text) !important;
          background-color: transparent;
        }

        .language-dropdown li:hover {
          background-color: var(--bg-tertiary) !important;
          color: var(--primary-color) !important;
        }

        .language-dropdown li.active {
          color: var(--primary-color) !important;
          background-color: var(--bg-tertiary) !important;
        }

        /* 语言切换器容器修复 */
        .language-switcher {
          position: relative;
        }

        .language-hover-wrapper .hover-dropdown {
          background-color: var(--card-bg) !important;
          border: 1px solid var(--border-color) !important;
        }

        /* 移动端汉堡菜单 */
        .hamburger .line {
          background-color: var(--text-color) !important;
        }

        /* 移动端导航 */
        .nav-links {
          background-color: var(--header-bg) !important;
          border: 1px solid var(--border-color);
        }

        /* 确保Logo颜色正确应用 */
        .logo-link span {
          color: var(--primary-color) !important;
        }

        /* 确保导航链接颜色正确应用 */
        .nav-links a {
          color: var(--text-color) !important;
        }

        .nav-links a:hover {
          color: var(--primary-color) !important;
        }

        .nav-links a.active {
          color: var(--primary-color) !important;
        }

        /* 确保导航链接下划线使用主题色 */
        .nav-links a::after {
          background-color: var(--primary-color) !important;
        }
      `}</style>

      <header className={`${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav>
            {/* Left side: Logo + Site Name */}
            <div className="logo">
              <a href="#home" className="logo-link">
                <img src="/src/img/Logo.png" alt="Harry Ji Logo" style={{ height: '40px', width: 'auto' }} />
                <span>Harry Ji</span>
              </a>
            </div>

            {/* Right side: Navigation Menu (Desktop) */}
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home" className="active nav-link-no-border" onClick={handleNavClick} style={{border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent'}}>Home</a></li>
              <li><a href="#about" className="nav-link-no-border" onClick={handleNavClick} style={{border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent'}}>About</a></li>
              <li><a href="#projects" className="nav-link-no-border" onClick={handleNavClick} style={{border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent'}}>Projects</a></li>
              <li><a href="#skills" className="nav-link-no-border" onClick={handleNavClick} style={{border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent'}}>Skills</a></li>
              <li><a href="#contact" className="nav-link-no-border" onClick={handleNavClick} style={{border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent'}}>Contact</a></li>
              
              {/* Language Switcher (Mobile - inside menu) */}
              <li className="language-switcher-mobile">
                <div className="language-switcher">
                  <button 
                    className="language-btn"
                    onClick={toggleLanguageDropdown}
                  >
                    {currentLanguage} <i className="fas fa-globe"></i>
                  </button>
                  <ul className={`language-dropdown ${isLanguageDropdownOpen ? 'active' : ''}`}>
                    <li 
                      className={currentLanguage === 'EN' ? 'active' : ''}
                      onClick={() => handleLanguageChange('en')}
                    >
                      English
                    </li>
                    <li 
                      className={currentLanguage === 'ZH' ? 'active' : ''}
                      onClick={() => handleLanguageChange('zh')}
                    >
                      中文
                    </li>
                    <li 
                      className={currentLanguage === 'NL' ? 'active' : ''}
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
                <button className="language-btn">
                  {currentLanguage} <i className="fas fa-globe"></i>
                </button>
                <ul className="language-dropdown hover-dropdown">
                  <li 
                    className={currentLanguage === 'EN' ? 'active' : ''}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </li>
                  <li 
                    className={currentLanguage === 'ZH' ? 'active' : ''}
                    onClick={() => handleLanguageChange('zh')}
                  >
                    中文
                  </li>
                  <li 
                    className={currentLanguage === 'NL' ? 'active' : ''}
                    onClick={() => handleLanguageChange('nl')}
                  >
                    Nederlands
                  </li>
                </ul>
              </div>
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