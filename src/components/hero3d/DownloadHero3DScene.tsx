import React, { useMemo } from 'react';
import Hero3DShowcase, { type Hero3DShowcaseProps } from './Hero3DShowcase';
import fallbackHero from '../../assets/hero/Hero新拟态3D元素参考图.png';
import './hero3d.css';

export type DownloadHero3DSceneProps = Hero3DShowcaseProps;

class DownloadHero3DErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="hero-3d-shell hero-3d-fallback" aria-hidden="true">
          <img src={fallbackHero} alt="" />
        </div>
      );
    }

    return this.props.children;
  }
}

function hasWebGLSupport() {
  if (typeof document === 'undefined') return true;

  const canvas = document.createElement('canvas');
  return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
}

const DownloadHero3DScene: React.FC<DownloadHero3DSceneProps> = (props) => {
  const webglSupported = useMemo(() => hasWebGLSupport(), []);

  if (!webglSupported) {
    return (
      <div className="hero-3d-shell hero-3d-fallback" aria-hidden="true">
        <img src={fallbackHero} alt="" />
      </div>
    );
  }

  return (
    <DownloadHero3DErrorBoundary>
      <Hero3DShowcase {...props} />
    </DownloadHero3DErrorBoundary>
  );
};

export default DownloadHero3DScene;
