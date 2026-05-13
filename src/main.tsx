import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/globals.css';
import './styles/variables.css';
import './styles/base.css';
import './styles/components/sections.css';
import './styles/components/typography.css';
import './styles/components/surfaces.css';
import './styles/components/buttons.css';
import './styles/components/forms.css';
import './styles/components/badges-icons.css';
import './styles/components/navigation.css';
import './styles/components/grids.css';
import './styles/pages/home.css';
import './styles/components/project-cards.css';
import './styles/components/content.css';
import './styles/pages/contact.css';
import './styles/pages/project-detail.css';
import './styles/pages/downloads.css';
import './styles/components/footer.css';
import './styles/pages/home-overrides.css';
import './styles/pages/contact-overrides.css';
import './styles/pages/projects.css';
import './styles/components/scroll-top.css';
import './styles/components/animations-responsive.css';
import './styles/pages/home-selected-work.css';
import './styles/components/project-mockups.css';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the root element
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    // Create a React root and render the App
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
