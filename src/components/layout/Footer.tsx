import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import LogoImage from '../../assets/images/Logo.png';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content footer-content--shell">
          <div className="footer-column">
            <div className="logo">
              <img src={LogoImage} alt="Harry Hongyue" style={{ height: '32px', width: 'auto' }} />
              <span style={{ fontSize: '1.5rem', marginLeft: '8px' }}>Harry Hongyue</span>
            </div>
            <p style={{ marginTop: '15px', lineHeight: '1.6', color: '#aaa' }}>
              {t('footerTagline')}
            </p>
            <div className="social-links">
              <a href="https://github.com/HarryHongyue" target="_blank" rel="noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/harryhongyue" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:contact@harryji.dev" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>{t('footerNavigation')}</h3>
            <ul className="footer-links">
              <li><Link to="/">{t('home')}</Link></li>
              <li><Link to="/about">{t('about')}</Link></li>
              <li><Link to="/projects">{t('projects')}</Link></li>
              <li><Link to="/contact">{t('contact')}</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>{t('footerResources')}</h3>
            <ul className="footer-links">
              <li><Link to="/projects">{t('footerProjectOverview')}</Link></li>
              <li><Link to="/downloads">{t('downloads')}</Link></li>
              <li><Link to="/security">{t('security')}</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>{t('footerProjectLinks')}</h3>
            <ul className="footer-links">
              <li><a href="https://github.com/HarryHongyue/Harry" target="_blank" rel="noreferrer">{t('footerHarryRepo')}</a></li>
              <li><a href="https://github.com/HarryHongyue/PDF-Reader" target="_blank" rel="noreferrer">{t('footerPdfReader')}</a></li>
              <li><a href="https://github.com/HarryHongyue/ODE-All-In-One-Solver" target="_blank" rel="noreferrer">{t('footerOdeSolver')}</a></li>
              <li><a href="https://github.com/HarryHongyue/SurpriseMe" target="_blank" rel="noreferrer">{t('footerSurpriseMe')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <p>{t('footerCopyright').replace('{year}', currentYear.toString())}</p>
            <div>
              <span style={{ color: '#aaa' }}>{t('footerIndependentProjects')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
