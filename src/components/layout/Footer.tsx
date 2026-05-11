import React from 'react';
import { BriefcaseBusiness, Globe2, Mail, Radio, Rss } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText, uiText } from '../../data/siteContent';

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <footer className="neo-footer">
      <div className="neo-footer__grid">
        <div className="neo-footer__brand">
          <div className="site-logo">
            <span className="site-logo__mark">H</span>
            <span className="site-logo__copy">
              <strong>{pickText(currentLanguage, uiText.brand)}</strong>
              <small>{pickText(currentLanguage, uiText.brandSub)}</small>
            </span>
          </div>
          <p>{pickText(currentLanguage, uiText.footer.body)}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© 2026 Harry. All rights reserved.</p>
        </div>

        <div>
          <h4>{pickText(currentLanguage, uiText.nav.home)}</h4>
          <div className="neo-footer__links">
            <Link to="/">{pickText(currentLanguage, uiText.nav.home)}</Link>
            <Link to="/about">{pickText(currentLanguage, uiText.nav.about)}</Link>
            <Link to="/projects">{pickText(currentLanguage, uiText.nav.projects)}</Link>
            <Link to="/downloads">{pickText(currentLanguage, uiText.nav.downloads)}</Link>
          </div>
        </div>

        <div>
          <h4>{pickText(currentLanguage, uiText.common.documentation)}</h4>
          <div className="neo-footer__links">
            <Link to="/deployment">{pickText(currentLanguage, uiText.nav.deployment)}</Link>
            <Link to="/security">{pickText(currentLanguage, uiText.nav.security)}</Link>
            <Link to="/downloads">{pickText(currentLanguage, uiText.nav.downloads)}</Link>
          </div>
        </div>

        <div>
          <h4>{pickText(currentLanguage, uiText.nav.contact)}</h4>
          <div className="neo-footer__links">
            <a href="mailto:hello@harry.dev">hello@harry.dev</a>
            <span>Global / Remote</span>
            <span>{pickText(currentLanguage, uiText.common.availability)}</span>
          </div>
        </div>

        <div>
          <h4>Follow Me</h4>
          <div className="neo-footer__socials">
            <a className="neo-circle-link" href="https://github.com/HarryHongyue" target="_blank" rel="noreferrer">
              <Globe2 size={18} />
            </a>
            <a className="neo-circle-link" href="https://linkedin.com/in/harryhongyue" target="_blank" rel="noreferrer">
              <BriefcaseBusiness size={18} />
            </a>
            <a className="neo-circle-link" href="https://x.com" target="_blank" rel="noreferrer">
              <Radio size={18} />
            </a>
            <a className="neo-circle-link" href="mailto:hello@harry.dev">
              <Mail size={18} />
            </a>
            <a className="neo-circle-link" href="/downloads">
              <Rss size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
