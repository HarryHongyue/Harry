import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { pickText, uiText } from '../../data/siteContent';
import SocialLogo from '../common/SocialLogo';

const Footer: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <footer className="neo-footer">
      <div className="neo-footer__grid">
        <div className="neo-footer__brand">
          <div className="site-logo">
            <span className="site-logo__mark">
              <img src="/project-assets/harry-logo.png" alt="Harry logo" />
            </span>
            <span className="site-logo__copy">
              <strong>{pickText(currentLanguage, uiText.brand)}</strong>
              <small>{pickText(currentLanguage, uiText.brandSub)}</small>
            </span>
          </div>
          <p>{pickText(currentLanguage, uiText.footer.body)}</p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>© 2026 Harry. All rights reserved.</p>
        </div>

        <div>
          <h4>{pickText(currentLanguage, uiText.nav.projects)}</h4>
          <div className="neo-footer__links">
            <Link to="/">{pickText(currentLanguage, uiText.nav.home)}</Link>
            <Link to="/projects">{pickText(currentLanguage, uiText.nav.projects)}</Link>
            <Link to="/downloads">{pickText(currentLanguage, uiText.nav.downloads)}</Link>
            <Link to="/contact">{pickText(currentLanguage, uiText.nav.contact)}</Link>
          </div>
        </div>

        <div>
          <h4>{pickText(currentLanguage, uiText.common.documentation)}</h4>
          <div className="neo-footer__links">
            <Link to="/projects/harry">{currentLanguage === 'zh' ? '主站项目页' : currentLanguage === 'nl' ? 'Hoofdsite-project' : 'Main Site Case Study'}</Link>
            <Link to="/projects/harrys-hub">{currentLanguage === 'zh' ? '资源站项目页' : currentLanguage === 'nl' ? 'Resourcehub-project' : 'Resource Hub Case Study'}</Link>
            <Link to="/projects/future-website-building-platform">{currentLanguage === 'zh' ? '平台架构页' : currentLanguage === 'nl' ? 'Platformarchitectuur' : 'Platform Architecture'}</Link>
          </div>
        </div>

        <div>
          <h4>{pickText(currentLanguage, uiText.nav.contact)}</h4>
          <div className="neo-footer__links">
            <a href="mailto:HarryHongyue@omnigent.nl">HarryHongyue@omnigent.nl</a>
            <a href="https://omnigent.nl" target="_blank" rel="noreferrer">omnigent.nl</a>
            <span>{currentLanguage === 'zh' ? '全球 / 远程合作' : currentLanguage === 'nl' ? 'Global / remote' : 'Global / Remote'}</span>
          </div>
        </div>

        <div>
          <h4>{currentLanguage === 'zh' ? '联系渠道' : currentLanguage === 'nl' ? 'Kanalen' : 'Channels'}</h4>
          <div className="neo-footer__socials">
            <a className="neo-circle-link" href="mailto:HarryHongyue@omnigent.nl" aria-label="Email">
              <SocialLogo name="email" size={20} />
            </a>
            <a className="neo-circle-link" href="https://wa.me/310000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <SocialLogo name="whatsapp" size={22} />
            </a>
            <a className="neo-circle-link" href="https://x.com" target="_blank" rel="noreferrer" aria-label="XChat">
              <SocialLogo name="xchat" size={22} />
            </a>
            <a className="neo-circle-link" href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <SocialLogo name="x" size={22} />
            </a>
            <a className="neo-circle-link" href="https://signal.me/#eu/example" target="_blank" rel="noreferrer" aria-label="Signal">
              <SocialLogo name="signal" size={22} />
            </a>
            <a className="neo-circle-link" href="https://t.me/example" target="_blank" rel="noreferrer" aria-label="Telegram">
              <SocialLogo name="telegram" size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
