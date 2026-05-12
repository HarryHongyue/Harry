import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Group } from 'three';
import HLogoMesh from './HLogoMesh';
import PlatformBase from './PlatformBase';
import DatabaseCylinder from './DatabaseCylinder';
import ServerCube from './ServerCube';
import CircuitLines from './CircuitLines';
import FloatingAnalyticsPanel from './FloatingAnalyticsPanel';
import FloatingCodeIconPanel from './FloatingCodeIconPanel';
import FloatingCodePanel from './FloatingCodePanel';
import { HERO3D_COLORS, type Hero3DIntensity } from './hero3d.config';
import type { HeroParallaxValue } from './useHeroParallax';

interface SceneContentProps {
  logoText?: string;
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
  showPanels?: boolean;
  parallax: React.MutableRefObject<HeroParallaxValue>;
}

const SceneContent: React.FC<SceneContentProps> = ({ logoText, intensity = 'medium', reducedMotion = false, showPanels = true, parallax }) => {
  const root = useRef<Group>(null);

  useFrame(() => {
    if (!root.current || reducedMotion) return;
    root.current.rotation.y += (parallax.current.x * 0.14 - root.current.rotation.y) * 0.06;
    root.current.rotation.x += (-parallax.current.y * 0.08 - root.current.rotation.x) * 0.06;
    root.current.position.y += (0.04 + Math.sin(Date.now() * 0.00045) * 0.035 - root.current.position.y) * 0.035;
  });

  return (
    <group ref={root} position={[-0.18, 0.04, 0]}>
      <ambientLight intensity={0.4} />
      <directionalLight color="#d9f7ff" intensity={1.15} position={[-4, 6, 5]} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
      <pointLight color={HERO3D_COLORS.cyan} intensity={2.2} distance={6} position={[0, 1.4, 2.4]} />
      <pointLight color={HERO3D_COLORS.blue} intensity={1.35} distance={6} position={[2.6, -0.55, 1.7]} />
      <rectAreaLight color={HERO3D_COLORS.cyan} intensity={1.2} width={4} height={2.5} position={[-2.5, 3.2, 2.2]} rotation={[-0.6, -0.35, 0.2]} />

      <CircuitLines reducedMotion={reducedMotion} />
      <PlatformBase intensity={intensity} reducedMotion={reducedMotion} />
      <HLogoMesh logoText={logoText} intensity={intensity} reducedMotion={reducedMotion} parallax={parallax} />
      <DatabaseCylinder intensity={intensity} reducedMotion={reducedMotion} />
      <ServerCube intensity={intensity} reducedMotion={reducedMotion} />

      {showPanels ? (
        <>
          <FloatingCodePanel reducedMotion={reducedMotion} />
          <FloatingAnalyticsPanel reducedMotion={reducedMotion} />
          <FloatingCodeIconPanel reducedMotion={reducedMotion} />
        </>
      ) : null}

      <Environment preset="city" />
      <EffectComposer multisampling={0}>
        <Bloom intensity={1.05} luminanceThreshold={0.22} luminanceSmoothing={0.62} mipmapBlur />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </group>
  );
};

interface Hero3DCanvasProps extends SceneContentProps {}

const Hero3DCanvas: React.FC<Hero3DCanvasProps> = (props) => (
  <Canvas
    className="hero-3d-canvas"
    camera={{ position: [6, 5, 8], fov: 35 }}
    dpr={[1, 1.6]}
    gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    shadows
  >
    <Suspense fallback={null}>
      <SceneContent {...props} />
    </Suspense>
  </Canvas>
);

export default Hero3DCanvas;
