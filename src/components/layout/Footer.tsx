import React from 'react';
import LogoImage from '../../img/Logo.png';

/**
 * Professional Footer component inspired by tech industry leaders
 * Horizontal layout with clean sections and modern design
 */
const Footer: React.FC = () => {
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
              Building the future with code.<br />
              Full-stack developer creating innovative<br />
              digital experiences and solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com/harryji" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/harryji" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/harryji" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:contact@harryji.dev" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="footer-column">
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          {/* Services/Technologies */}
          <div className="footer-column">
            <h3>Technologies</h3>
            <ul className="footer-links">
              <li><a href="#react">React Development</a></li>
              <li><a href="#nodejs">Node.js Backend</a></li>
              <li><a href="#mobile">Mobile Apps</a></li>
              <li><a href="#cloud">Cloud Solutions</a></li>
              <li><a href="#consulting">Tech Consulting</a></li>
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
          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="footer-links">
              <li>
                <i className="fas fa-map-marker-alt" style={{marginRight: '8px', color: 'var(--primary-color)'}}></i>
                Amsterdam, NL
              </li>
              <li>
                <i className="fas fa-envelope" style={{marginRight: '8px', color: 'var(--primary-color)'}}></i>
                <a href="mailto:contact@harryji.dev">contact@harryji.dev</a>
              </li>
              <li>
                <i className="fas fa-phone" style={{marginRight: '8px', color: 'var(--primary-color)'}}></i>
                <a href="tel:+31612345678">+31 6 1234 5678</a>
              </li>
            </ul>
            <div style={{marginTop: '20px'}}>
              <ul className="footer-links" style={{fontSize: '0.85rem'}}>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px'}}>
            <p>&copy; {currentYear} Harry Ji. All rights reserved.</p>
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