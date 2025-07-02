import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

/**
 * Skills section component
 * Displays skills categorized with proficiency bars
 */
const Skills: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">{t('skillsTitle')}</h2>
        
        <div className="skills-container">
          {/* Programming Languages */}
          <div className="skill-category">
            <h3>{t('skillsProgramming')}</h3>
            <div className="skill-item">
              <div className="skill-name">
                <span>JavaScript</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '90%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Python</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Java</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>HTML/CSS</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '95%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Frameworks & Libraries */}
          <div className="skill-category">
            <h3>{t('skillsFrameworks')}</h3>
            <div className="skill-item">
              <div className="skill-name">
                <span>React</span>
                <span>88%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '88%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Node.js</span>
                <span>82%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '82%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Django</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Flutter</span>
                <span>70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          
          {/* Tools & Technologies */}
          <div className="skill-category">
            <h3>{t('skillsTools')}</h3>
            <div className="skill-item">
              <div className="skill-name">
                <span>Git</span>
                <span>92%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '92%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Docker</span>
                <span>78%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '78%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>AWS</span>
                <span>65%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '65%' }}></div>
              </div>
            </div>
            
            <div className="skill-item">
              <div className="skill-name">
                <span>Database Management</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
