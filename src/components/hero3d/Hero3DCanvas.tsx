import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei';
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
  showBase?: boolean;
  parallax: React.MutableRefObject<HeroParallaxValue>;
}

const SceneContent: React.FC<SceneContentProps> = ({ logoText, intensity = 'medium', reducedMotion = false, showPanels = true, showBase = true, parallax }) => {
  const root = useRef<Group>(null);

  useFrame(() => {
    if (!root.current || reducedMotion) return;
    root.current.rotation.y += (parallax.current.x * 0.14 - root.current.rotation.y) * 0.06;
    root.current.rotation.x += (-parallax.current.y * 0.08 - root.current.rotation.x) * 0.06;
    root.current.position.y += (0.04 + Math.sin(Date.now() * 0.00045) * 0.035 - root.current.position.y) * 0.035;
  });

  return (
    <group ref={root} position={[showBase ? 0.02 : 0.18, showBase ? -0.08 : -0.04, 0]} scale={showBase ? [0.92, 0.92, 0.92] : [1, 1, 1]}>
      <ambientLight intensity={0.52} />
      <directionalLight color="#eef2ff" intensity={1.75} position={[-4.8, 7.2, 5.6]} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <pointLight color={HERO3D_COLORS.cyan} intensity={2.8} distance={7.2} position={[0, 1.7, 2.6]} />
      <pointLight color={HERO3D_COLORS.blue} intensity={1.9} distance={7} position={[2.8, -0.45, 1.9]} />
      <pointLight color="#CACEEF" intensity={1.15} distance={5.4} position={[-2.7, 1.1, 1.6]} />
      <rectAreaLight color={HERO3D_COLORS.cyan} intensity={1.65} width={5.4} height={3.2} position={[-2.8, 3.5, 2.8]} rotation={[-0.62, -0.38, 0.2]} />

      <CircuitLines reducedMotion={reducedMotion} />
      {showBase ? <PlatformBase intensity={intensity} reducedMotion={reducedMotion} /> : null}
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
      {showBase ? <ContactShadows position={[0, -1.92, 0]} opacity={0.36} scale={8.5} blur={2.6} far={4.2} color="#263D91" /> : null}
      <EffectComposer multisampling={0}>
        <Bloom intensity={1.24} luminanceThreshold={0.2} luminanceSmoothing={0.66} mipmapBlur />
      </EffectComposer>
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </group>
  );
};

interface Hero3DCanvasProps extends SceneContentProps {}

const Hero3DCanvas: React.FC<Hero3DCanvasProps> = (props) => (
  <Canvas
    className="hero-3d-canvas"
    camera={{ position: [6.4, 5.2, 8.1], fov: 32 }}
    dpr={[1.5, 2.25]}
    gl={{ alpha: true, antialias: true, powerPreference: 'high-performance' }}
    shadows
  >
    <Suspense fallback={null}>
      <SceneContent {...props} />
    </Suspense>
  </Canvas>
);

export default Hero3DCanvas;
