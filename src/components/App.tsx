import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import DownloadsPage from '../pages/DownloadsPage';
import DeploymentPage from '../pages/DeploymentPage';
import SecurityPage from '../pages/SecurityPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import SiteBackground from './ui/SiteBackground';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="app-shell">
          <SiteBackground />
          <Header />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/deployment" element={<DeploymentPage />} />
              <Route path="/security" element={<SecurityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <div className="section-shell" style={{ paddingBottom: 32 }}>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
