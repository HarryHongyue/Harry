import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText, uiText } from '../../data/siteContent';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { currentLanguage, setLanguage } = useLanguage();

  const navItems = [
    { to: '/', label: pickText(currentLanguage, uiText.nav.home) },
    { to: '/about', label: pickText(currentLanguage, uiText.nav.about) },
    { to: '/projects', label: pickText(currentLanguage, uiText.nav.projects) },
    { to: '/downloads', label: pickText(currentLanguage, uiText.nav.downloads) },
    { to: '/deployment', label: pickText(currentLanguage, uiText.nav.deployment) },
    { to: '/security', label: pickText(currentLanguage, uiText.nav.security) },
    { to: '/contact', label: pickText(currentLanguage, uiText.nav.contact) },
  ];

  return (
    <header className="neo-navbar">
      <div className="neo-navbar__inner">
        <div className="site-header__left">
          <Link to="/" className="site-logo" onClick={() => setIsOpen(false)}>
            <span className="site-logo__mark">H</span>
            <span className="site-logo__copy">
              <strong>{pickText(currentLanguage, uiText.brand)}</strong>
              <small>{pickText(currentLanguage, uiText.brandSub)}</small>
            </span>
          </Link>
        </div>

        <nav className={`site-nav ${isOpen ? 'site-nav--open' : ''}`}>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setIsOpen(false)}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__right">
          <div className="lang-switcher">
            <button type="button" className="lang-switcher__button" onClick={() => setIsLangOpen((value) => !value)}>
              {currentLanguage.toUpperCase()}
            </button>
            {isLangOpen ? (
              <div className="lang-switcher__menu">
                {(['en', 'zh', 'nl'] as const).map((lang) => (
                  <button
                    key={lang}
                    type="button"
                    className={lang === currentLanguage ? 'is-active' : ''}
                    onClick={() => {
                      setLanguage(lang);
                      setIsLangOpen(false);
                    }}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
          <button type="button" className="site-header__menu" onClick={() => setIsOpen((value) => !value)} aria-label="Toggle navigation">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
