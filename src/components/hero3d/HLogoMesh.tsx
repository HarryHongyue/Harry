import React, { useMemo, useRef } from 'react';
import { RoundedBox } from '@react-three/drei';
import { Group, MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS, HERO3D_INTENSITY, type Hero3DIntensity } from './hero3d.config';
import type { HeroParallaxValue } from './useHeroParallax';

interface HLogoMeshProps {
  logoText?: string;
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
  parallax: React.MutableRefObject<HeroParallaxValue>;
}

const HLogoMesh: React.FC<HLogoMeshProps> = ({ logoText = 'H', intensity = 'medium', reducedMotion = false, parallax }) => {
  const group = useRef<Group>(null);
  const accent = HERO3D_INTENSITY[intensity];
  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#14e6d2',
        emissive: '#00f5ff',
        emissiveIntensity: 0.82 * accent.glow,
        roughness: 0.28,
        metalness: 0.24,
        toneMapped: false,
      }),
    [accent.glow],
  );

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    const elapsed = clock.getElapsedTime();
    const pulse = 0.78 + Math.sin(elapsed * 1.8) * 0.18;

    group.current.position.y = 0.5 + Math.sin(elapsed * 0.8) * 0.06 * accent.motion + parallax.current.y * -0.08;
    group.current.position.x = parallax.current.x * 0.16;
    group.current.rotation.x = -0.08 + Math.sin(elapsed * 0.55) * 0.02 + parallax.current.y * 0.08;
    group.current.rotation.y = Math.sin(elapsed * 0.48) * 0.05 + parallax.current.x * 0.12;
    material.emissiveIntensity = pulse * accent.glow;
  });

  return (
    <group ref={group} position={[0, 0.5, 0]} scale={[0.82, 0.82, 0.82]} castShadow>
      <RoundedBox args={[0.5, 2.34, 0.5]} radius={0.15} smoothness={16} position={[-0.5, 0.28, 0]} material={material} />
      <RoundedBox args={[0.5, 2.34, 0.5]} radius={0.15} smoothness={16} position={[0.5, 0.28, 0]} material={material} />
      <RoundedBox args={[1.14, 0.46, 0.5]} radius={0.14} smoothness={16} position={[0, 0.12, 0]} material={material} />
      <pointLight color={HERO3D_COLORS.teal} intensity={1.8 * accent.glow} distance={4.6} position={[0, 0.6, 1.4]} />
      <mesh position={[0, -1.9, 0.43]}>
        <ringGeometry args={[1.15, 1.21, 96]} />
        <meshBasicMaterial color={HERO3D_COLORS.cyan} transparent opacity={0.34 * accent.glow} />
      </mesh>
      <group position={[0, 1.86, 0.4]}>
        <mesh>
          <planeGeometry args={[0.5, 0.2]} />
          <meshBasicMaterial color={HERO3D_COLORS.teal} transparent opacity={logoText === 'H' ? 0 : 0.18} />
        </mesh>
      </group>
    </group>
  );
};

export default HLogoMesh;
