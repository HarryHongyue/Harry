import React from 'react';

interface ProjectMiniMockupProps {
  variant: 'pdf-reader' | 'aircargo-edi' | 'ode-solver' | 'surpriseme' | 'harry-website' | 'future-platform';
}

const ProjectMiniMockup: React.FC<ProjectMiniMockupProps> = ({ variant }) => {
  const renderContent = () => {
    switch (variant) {
      case 'pdf-reader':
        return (
          <div className="mockup-pdf-reader">
            <div className="mockup-pdf-reader__toolbar">
              <div className="mockup-pdf-reader__toolbar-btn" />
              <div className="mockup-pdf-reader__toolbar-btn" />
              <div className="mockup-pdf-reader__toolbar-btn" />
            </div>
            <div className="mockup-pdf-reader__content">
              <div className="mockup-pdf-reader__sidebar">
                <div className="mockup-pdf-reader__sidebar-item" />
                <div className="mockup-pdf-reader__sidebar-item" />
                <div className="mockup-pdf-reader__sidebar-item" />
              </div>
              <div className="mockup-pdf-reader__main">
                <div className="mockup-pdf-reader__pdf-text">PDF</div>
                <div className="mockup-pdf-reader__pdf-sub">Reader</div>
                <div className="mockup-pdf-reader__lines">
                  <div className="mockup-pdf-reader__line" />
                  <div className="mockup-pdf-reader__line" />
                  <div className="mockup-pdf-reader__line" />
                  <div className="mockup-pdf-reader__line" />
                </div>
              </div>
              <div className="mockup-pdf-reader__recent">
                <div className="mockup-pdf-reader__recent-item" />
                <div className="mockup-pdf-reader__recent-item" />
              </div>
            </div>
          </div>
        );

      case 'aircargo-edi':
        return (
          <div className="mockup-aircargo">
            <div className="mockup-aircargo__sidebar">
              <div className="mockup-aircargo__sidebar-item" />
              <div className="mockup-aircargo__sidebar-item" />
              <div className="mockup-aircargo__sidebar-item" />
            </div>
            <div className="mockup-aircargo__main">
              <div className="mockup-aircargo__cards">
                <div className="mockup-aircargo__card" />
                <div className="mockup-aircargo__card" />
              </div>
              <div className="mockup-aircargo__chart">
                <svg viewBox="0 0 100 60" className="mockup-aircargo__chart-svg">
                  <path d="M0,50 L20,40 L40,45 L60,30 L80,35 L100,20" fill="none" stroke="rgba(164, 166, 255, 0.6)" strokeWidth="2" />
                  <path d="M0,50 L20,40 L40,45 L60,30 L80,35 L100,20 L100,60 L0,60 Z" fill="rgba(164, 166, 255, 0.1)" />
                </svg>
              </div>
              <div className="mockup-aircargo__stats">
                <div className="mockup-aircargo__stat" />
                <div className="mockup-aircargo__stat" />
              </div>
            </div>
          </div>
        );

      case 'ode-solver':
        return (
          <div className="mockup-ode">
            <div className="mockup-ode__sidebar">
              <div className="mockup-ode__sidebar-item" />
              <div className="mockup-ode__sidebar-item" />
              <div className="mockup-ode__sidebar-item" />
            </div>
            <div className="mockup-ode__main">
              <div className="mockup-ode__header">3D Surface Plot</div>
              <div className="mockup-ode__surface">
                <svg viewBox="0 0 100 60" className="mockup-ode__surface-svg">
                  <path d="M10,50 Q30,20 50,30 T90,40" fill="none" stroke="rgba(164, 166, 255, 0.6)" strokeWidth="2" />
                  <path d="M10,45 Q30,15 50,25 T90,35" fill="none" stroke="rgba(202, 206, 239, 0.4)" strokeWidth="1.5" />
                  <path d="M10,40 Q30,10 50,20 T90,30" fill="none" stroke="rgba(202, 206, 239, 0.3)" strokeWidth="1" />
                  <line x1="10" y1="50" x2="90" y2="40" stroke="rgba(202, 206, 239, 0.2)" strokeWidth="0.5" />
                  <line x1="10" y1="45" x2="90" y2="35" stroke="rgba(202, 206, 239, 0.2)" strokeWidth="0.5" />
                  <line x1="10" y1="40" x2="90" y2="30" stroke="rgba(202, 206, 239, 0.2)" strokeWidth="0.5" />
                </svg>
              </div>
              <div className="mockup-ode__controls">
                <div className="mockup-ode__control" />
                <div className="mockup-ode__control" />
                <div className="mockup-ode__control" />
              </div>
            </div>
          </div>
        );

      case 'surpriseme':
        return (
          <div className="mockup-surpriseme">
            <div className="mockup-surpriseme__wheel">
              <div className="mockup-surpriseme__wheel-inner">
                <div className="mockup-surpriseme__wheel-segment" />
                <div className="mockup-surpriseme__wheel-segment" />
                <div className="mockup-surpriseme__wheel-segment" />
                <div className="mockup-surpriseme__wheel-segment" />
              </div>
            </div>
            <div className="mockup-surpriseme__buttons">
              <div className="mockup-surpriseme__button" />
              <div className="mockup-surpriseme__button" />
            </div>
            <div className="mockup-surpriseme__tags">
              <div className="mockup-surpriseme__tag" />
              <div className="mockup-surpriseme__tag" />
            </div>
          </div>
        );

      case 'harry-website':
        return (
          <div className="mockup-harry">
            <div className="mockup-harry__left">
              <div className="mockup-harry__title">Harry</div>
              <div className="mockup-harry__subtitle">Personal Showcase</div>
              <div className="mockup-harry__button" />
            </div>
            <div className="mockup-harry__right">
              <div className="mockup-harry__cards">
                <div className="mockup-harry__card" />
                <div className="mockup-harry__card" />
                <div className="mockup-harry__card" />
              </div>
            </div>
          </div>
        );

      case 'future-platform':
        return (
          <div className="mockup-future">
            <div className="mockup-future__sidebar">
              <div className="mockup-future__sidebar-item" />
              <div className="mockup-future__sidebar-item" />
              <div className="mockup-future__sidebar-item" />
            </div>
            <div className="mockup-future__main">
              <div className="mockup-future__header">Build Ahead</div>
              <div className="mockup-future__subheader">Deliver Tomorrow</div>
              <div className="mockup-future__projects">
                <div className="mockup-future__project" />
                <div className="mockup-future__project" />
              </div>
              <div className="mockup-future__button" />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return <div className="project-mini-mockup">{renderContent()}</div>;
};

export default ProjectMiniMockup;
