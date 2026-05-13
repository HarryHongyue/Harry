import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import Hero3DCanvas from './Hero3DCanvas';
import CircuitOverlay from './CircuitOverlay';
import { useHeroParallax } from './useHeroParallax';
import type { Hero3DIntensity } from './hero3d.config';
import './hero3d.css';

export interface Hero3DShowcaseProps {
  logoText?: string;
  className?: string;
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
  showPanels?: boolean;
  showCircuit?: boolean;
  showBase?: boolean;
}

const Hero3DShowcase: React.FC<Hero3DShowcaseProps> = ({
  logoText = 'H',
  className = '',
  intensity = 'medium',
  reducedMotion,
  showPanels = true,
  showCircuit = true,
  showBase = true,
}) => {
  const parallaxApi = useHeroParallax(reducedMotion);
  const shouldReduceMotion = Boolean(reducedMotion || parallaxApi.prefersReducedMotion);
  const style = useMemo(() => parallaxApi.style as React.CSSProperties, [parallaxApi.style]);

  return (
    <motion.div
      ref={parallaxApi.containerRef}
      className={`hero-3d-shell ${className}`}
      style={style}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 18, scale: 0.98 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="hero-3d-panel" />
      {showCircuit ? <CircuitOverlay reducedMotion={shouldReduceMotion} /> : null}
      <div className="glow-orb glow-orb--cyan" />
      <div className="glow-orb glow-orb--blue" />
      <Hero3DCanvas logoText={logoText} intensity={intensity} reducedMotion={shouldReduceMotion} showPanels={showPanels} showBase={showBase} parallax={parallaxApi.parallax} />
    </motion.div>
  );
};

export default Hero3DShowcase;
