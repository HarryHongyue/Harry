import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../../assets/images/Logo.png';

const Footer: React.FC = () => {
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
              Personal showcase, project catalog, downloads, deployment notes, and security baseline.
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
            <h3>Navigation</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li><Link to="/projects">Project Overview</Link></li>
              <li><Link to="/downloads">Download Center</Link></li>
              <li><Link to="/deployment">Deployment Guide</Link></li>
              <li><Link to="/security">Security Baseline</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Project Links</h3>
            <ul className="footer-links">
              <li><a href="https://github.com/HarryHongyue/Harry" target="_blank" rel="noreferrer">Harry Repository</a></li>
              <li><a href="https://github.com/HarryHongyue/PDF-Reader" target="_blank" rel="noreferrer">PDF Reader</a></li>
              <li><a href="https://github.com/HarryHongyue/ODE-All-In-One-Solver" target="_blank" rel="noreferrer">ODE Solver</a></li>
              <li><a href="https://github.com/HarryHongyue/SurpriseMe" target="_blank" rel="noreferrer">SurpriseMe</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            <p>Copyright {currentYear} Harry Hongyue. All rights reserved.</p>
            <div>
              <span style={{ color: '#aaa' }}>Independent projects, unified showcase.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
