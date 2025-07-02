import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import LogoImage from '../../assets/images/Logo.png';

/**
 * Professional Footer component inspired by tech industry leaders
 * Horizontal layout with clean sections and modern design
 */
const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          {/* Company/Brand Section */}
          <div className="footer-column">
            <div className="logo">
              <img src={LogoImage} alt="Harry Ji" style={{height: '32px', width: 'auto'}} />
              <span style={{fontSize: '1.5rem', marginLeft: '8px'}}>Harry Ji</span>
            </div>
            <p style={{marginTop: '15px', lineHeight: '1.6', color: '#aaa'}}>
              {t('footerTagline').split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < t('footerTagline').split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <div className="social-links">
              <a href="https://github.com/harryhongyue" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/harryhongyue" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/harryhongyue" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:contact@harryhongyue.dev" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="footer-column">
            <h3>{t('footerNavigation')}</h3>
            <ul className="footer-links">
              <li><a href="#home">{t('home')}</a></li>
              <li><a href="#about">{t('about')}</a></li>
              <li><a href="#projects">{t('projects')}</a></li>
              <li><a href="#skills">{t('skills')}</a></li>
              <li><a href="#contact">{t('contact')}</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/resume">Resume</a></li>
              <li><a href="/case-studies">Case Studies</a></li>
              <li><a href="/testimonials">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Contact & Legal */}
          <div className="footer-column" style={{
            flex: '0 0 auto',
            minWidth: 'max-content',
            whiteSpace: 'nowrap'
          }}>
            <h3>{t('footerConnect')}</h3>
            <ul className="footer-links" style={{whiteSpace: 'nowrap'}}>
              <li style={{display: 'flex', alignItems: 'center', whiteSpace: 'nowrap'}}>
                <i className="fas fa-map-marker-alt" style={{
                  marginRight: '8px', 
                  color: 'var(--primary-color)',
                  flexShrink: 0
                }}></i>
                {t('footerLocation')}
              </li>
              <li style={{display: 'flex', alignItems: 'center', whiteSpace: 'nowrap'}}>
                <i className="fas fa-envelope" style={{
                  marginRight: '8px', 
                  color: 'var(--primary-color)',
                  flexShrink: 0
                }}></i>
                <a href="mailto:contact@harryji.dev" style={{whiteSpace: 'nowrap'}}>
                  {t('footerEmail')}
                </a>
              </li>
              <li style={{display: 'flex', alignItems: 'center', whiteSpace: 'nowrap'}}>
                <i className="fas fa-phone" style={{
                  marginRight: '8px', 
                  color: 'var(--primary-color)',
                  flexShrink: 0
                }}></i>
                <a href="tel:+31612345678" style={{whiteSpace: 'nowrap'}}>
                  +31 6 1234 5678
                </a>
              </li>
            </ul>
            <div style={{marginTop: '20px'}}>
              <ul className="footer-links" style={{
                fontSize: '0.85rem',
                whiteSpace: 'nowrap'
              }}>
                <li><a href="/privacy" style={{whiteSpace: 'nowrap'}}>Privacy Policy</a></li>
                <li><a href="/terms" style={{whiteSpace: 'nowrap'}}>Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px'}}>
            <p>{t('footerCopyright').replace('2024', currentYear.toString())}</p>
            <div style={{display: 'flex', alignItems: 'center', gap: '20px', fontSize: '0.9rem'}}>
              <span style={{color: '#aaa'}}>Made with ❤️ in Amsterdam</span>
              <div style={{display: 'flex', gap: '15px'}}>
                <a href="/sitemap" style={{color: '#aaa', fontSize: '0.85rem'}}>Sitemap</a>
                <a href="/rss" style={{color: '#aaa', fontSize: '0.85rem'}}>RSS</a>
                <span style={{color: '#555'}}>|</span>
                <span style={{color: '#aaa', fontSize: '0.85rem'}}>Status: All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;