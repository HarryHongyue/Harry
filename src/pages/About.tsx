import React from 'react';

/**
 * About section component
 * Displays information about the developer
 */
const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <div className="image-placeholder">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <div className="about-text">
            <p>I am a passionate software developer with expertise in creating user-friendly applications and websites. My journey in technology began with a curiosity about how things work, which evolved into a career building digital solutions.</p>
            <p>I enjoy tackling complex problems and turning them into simple, beautiful, and intuitive designs. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the community.</p>
            <div className="about-details">
              <div className="detail">
                <i className="fas fa-graduation-cap"></i>
                <span>Education: Computer Science</span>
              </div>
              <div className="detail">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location: Available for Remote Work</span>
              </div>
              <div className="detail">
                <i className="fas fa-briefcase"></i>
                <span>Experience: Software Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
