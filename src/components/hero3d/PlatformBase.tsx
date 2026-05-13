import React, { useMemo, useRef } from 'react';
import { RoundedBox } from '@react-three/drei';
import { MeshStandardMaterial, Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS, HERO3D_INTENSITY, type Hero3DIntensity } from './hero3d.config';

interface PlatformBaseProps {
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
}

const ledPositions = [-1.64, -1.34, -1.04, 1.02, 1.32, 1.62];

const PlatformBase: React.FC<PlatformBaseProps> = ({ intensity = 'medium', reducedMotion = false }) => {
  const ring = useRef<Group>(null);
  const accent = HERO3D_INTENSITY[intensity];
  const middleMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#7A80E2',
        emissive: '#525EB9',
        emissiveIntensity: 0.12 * accent.glow,
        roughness: 0.3,
        metalness: 0.38,
      }),
    [accent.glow],
  );
  const glassMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#CACEEF',
        emissive: '#A4A6FF',
        emissiveIntensity: 0.08 * accent.glow,
        roughness: 0.2,
        metalness: 0.18,
        transparent: true,
        opacity: 0.22,
      }),
    [accent.glow],
  );

  useFrame(({ clock }) => {
    if (!ring.current || reducedMotion) return;
    const scale = 1 + Math.sin(clock.getElapsedTime() * 1.25) * 0.018 * accent.motion;
    ring.current.scale.set(scale, scale, scale);
  });

  return (
    <group position={[0, -1.18, 0]} receiveShadow>
      <RoundedBox args={[5.08, 0.18, 3.1]} radius={0.28} smoothness={30} position={[0, -0.22, 0]} material={middleMaterial} receiveShadow castShadow />
      <RoundedBox args={[4.54, 0.055, 2.62]} radius={0.22} smoothness={24} position={[0, -0.09, 0.02]} material={glassMaterial} receiveShadow castShadow />
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.24, 0.02]}>
        <ringGeometry args={[1.86, 1.94, 144]} />
        <meshBasicMaterial color={HERO3D_COLORS.blue} transparent opacity={0.38 * accent.glow} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.27, 0.02]}>
        <torusGeometry args={[1.54, 0.012, 10, 144]} />
        <meshBasicMaterial color="#CACEEF" transparent opacity={0.28 * accent.glow} />
      </mesh>
      <group position={[0, -0.12, 1.54]}>
        <mesh position={[-1.35, 0, 0]}>
          <boxGeometry args={[0.74, 0.045, 0.028]} />
          <meshStandardMaterial color={HERO3D_COLORS.cyan} emissive={HERO3D_COLORS.cyan} emissiveIntensity={1.1 * accent.glow} />
        </mesh>
        <mesh position={[1.42, 0, 0]}>
          <boxGeometry args={[0.5, 0.045, 0.028]} />
          <meshStandardMaterial color={HERO3D_COLORS.teal} emissive={HERO3D_COLORS.teal} emissiveIntensity={1.05 * accent.glow} />
        </mesh>
      </group>

      <group ref={ring} position={[0, -0.03, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.06, 0]}>
          <ringGeometry args={[1.74, 1.8, 128]} />
          <meshBasicMaterial color={HERO3D_COLORS.blue} transparent opacity={0.24 * accent.glow} />
        </mesh>
        {ledPositions.map((x, index) => (
          <mesh key={x} position={[x, -0.02, -1.58]}>
            <boxGeometry args={[0.1, 0.032, 0.028]} />
            <meshStandardMaterial color={index % 2 ? HERO3D_COLORS.cyan : HERO3D_COLORS.blue} emissive={index % 2 ? HERO3D_COLORS.cyan : HERO3D_COLORS.blue} emissiveIntensity={(0.8 + index * 0.08) * accent.glow} />
          </mesh>
        ))}
      </group>
      <group position={[0.02, 0.02, 1.12]}>
        <mesh position={[-0.55, 0, 0]}>
          <boxGeometry args={[0.62, 0.035, 0.018]} />
          <meshStandardMaterial color={HERO3D_COLORS.blue} emissive={HERO3D_COLORS.blue} emissiveIntensity={0.9 * accent.glow} />
        </mesh>
        <mesh position={[0.45, 0, 0]}>
          <boxGeometry args={[0.36, 0.035, 0.018]} />
          <meshStandardMaterial color={HERO3D_COLORS.cyan} emissive={HERO3D_COLORS.cyan} emissiveIntensity={0.8 * accent.glow} />
        </mesh>
      </group>
      <pointLight color={HERO3D_COLORS.blue} intensity={1.6 * accent.glow} distance={5.8} position={[0, 0.2, 1.6]} />
    </group>
  );
};

export default PlatformBase;
