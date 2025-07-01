import React, { useState } from 'react';

/**
 * Projects section component
 * Displays a filterable grid of projects
 */
const Projects: React.FC = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  // Handle filter change
  const handleFilterChange = (category: string) => {
    setActiveFilter(category);
  };
  
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="project-filters">
          <button 
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} 
            data-filter="all"
            onClick={() => handleFilterChange('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`} 
            data-filter="web"
            onClick={() => handleFilterChange('web')}
          >
            Web
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'mobile' ? 'active' : ''}`} 
            data-filter="mobile"
            onClick={() => handleFilterChange('mobile')}
          >
            Mobile
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'other' ? 'active' : ''}`} 
            data-filter="other"
            onClick={() => handleFilterChange('other')}
          >
            Other
          </button>
        </div>
        
        <div className="projects-grid">
          {/* Project 1 */}
          <div 
            className={`project-card ${activeFilter === 'all' || activeFilter === 'mobile' ? '' : 'hidden'}`} 
            data-category="mobile"
          >
            <div className="project-img">
              <img src="img/project-placeholder.jpg" alt="Music Sharing Platform" />
            </div>
            <div className="project-info">
              <h3>Music Sharing Platform</h3>
              <p>A mobile app where users can register, upload, and share their favorite music. Features include user profiles, music collections, and social interactions.</p>
              <div className="project-tags">
                <span>Mobile App</span>
                <span>Database</span>
                <span>API</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">View Details</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div 
            className={`project-card ${activeFilter === 'all' || activeFilter === 'web' ? '' : 'hidden'}`} 
            data-category="web"
          >
            <div className="project-img">
              <img src="img/project-placeholder.jpg" alt="Personal Blog" />
            </div>
            <div className="project-info">
              <h3>Personal Blog</h3>
              <p>A responsive blog website built with modern web technologies. Features include article categorization, search functionality, and comment system.</p>
              <div className="project-tags">
                <span>Web Development</span>
                <span>Responsive Design</span>
                <span>CMS</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">View Details</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div 
            className={`project-card ${activeFilter === 'all' || activeFilter === 'other' ? '' : 'hidden'}`} 
            data-category="other"
          >
            <div className="project-img">
              <img src="img/project-placeholder.jpg" alt="Data Analysis Tool" />
            </div>
            <div className="project-info">
              <h3>Data Analysis Tool</h3>
              <p>A tool for analyzing and visualizing complex datasets. Provides insights through interactive charts and customizable reports.</p>
              <div className="project-tags">
                <span>Data Science</span>
                <span>Visualization</span>
                <span>Analytics</span>
              </div>
              <div className="project-links">
                <a href="#" className="btn small-btn">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
