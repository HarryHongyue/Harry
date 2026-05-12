import React, { useMemo, useRef } from 'react';
import { RoundedBox } from '@react-three/drei';
import { MeshStandardMaterial, Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS, HERO3D_INTENSITY, type Hero3DIntensity } from './hero3d.config';

interface PlatformBaseProps {
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
}

const ledPositions = [-1.62, -1.3, -1.02, 1.18, 1.48, 1.74];

const PlatformBase: React.FC<PlatformBaseProps> = ({ intensity = 'medium', reducedMotion = false }) => {
  const ring = useRef<Group>(null);
  const accent = HERO3D_INTENSITY[intensity];
  const bottomMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#111827',
        roughness: 0.32,
        metalness: 0.46,
      }),
    [],
  );
  const middleMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#18243a',
        emissive: '#1a3f72',
        emissiveIntensity: 0.18 * accent.glow,
        roughness: 0.3,
        metalness: 0.48,
      }),
    [accent.glow],
  );
  const glassMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#0e2240',
        emissive: '#123c7c',
        emissiveIntensity: 0.22 * accent.glow,
        roughness: 0.18,
        metalness: 0.22,
        transparent: true,
        opacity: 0.76,
      }),
    [accent.glow],
  );

  useFrame(({ clock }) => {
    if (!ring.current || reducedMotion) return;
    const scale = 1 + Math.sin(clock.getElapsedTime() * 1.25) * 0.018 * accent.motion;
    ring.current.scale.set(scale, scale, scale);
  });

  return (
    <group position={[0, -1.15, 0]} receiveShadow>
      <RoundedBox args={[6.2, 0.34, 4.05]} radius={0.38} smoothness={18} position={[0, -0.55, 0]} material={bottomMaterial} receiveShadow castShadow />
      <RoundedBox args={[5.65, 0.38, 3.55]} radius={0.34} smoothness={18} position={[0, -0.24, 0]} material={middleMaterial} receiveShadow castShadow />
      <RoundedBox args={[4.68, 0.24, 2.72]} radius={0.26} smoothness={18} position={[0, 0.1, 0.02]} material={glassMaterial} receiveShadow castShadow />
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.24, 0.02]}>
        <ringGeometry args={[2.34, 2.42, 128]} />
        <meshBasicMaterial color={HERO3D_COLORS.blue} transparent opacity={0.56 * accent.glow} />
      </mesh>
      <group position={[0, -0.03, 1.86]}>
        <mesh position={[-1.35, 0, 0]}>
          <boxGeometry args={[0.74, 0.045, 0.028]} />
          <meshStandardMaterial color={HERO3D_COLORS.cyan} emissive={HERO3D_COLORS.cyan} emissiveIntensity={1.1 * accent.glow} />
        </mesh>
        <mesh position={[1.42, 0, 0]}>
          <boxGeometry args={[0.5, 0.045, 0.028]} />
          <meshStandardMaterial color={HERO3D_COLORS.teal} emissive={HERO3D_COLORS.teal} emissiveIntensity={1.05 * accent.glow} />
        </mesh>
      </group>

      <group ref={ring} position={[0, 0.29, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <ringGeometry args={[2.42, 2.48, 128]} />
          <meshBasicMaterial color={HERO3D_COLORS.blue} transparent opacity={0.35 * accent.glow} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[2.08, 2.12, 128]} />
          <meshBasicMaterial color={HERO3D_COLORS.cyan} transparent opacity={0.3 * accent.glow} />
        </mesh>
      </group>

      <group position={[0, -0.17, 1.52]}>
        {ledPositions.map((x, index) => (
          <mesh key={x} position={[x, 0, 0]}>
            <sphereGeometry args={[index % 3 === 0 ? 0.075 : 0.052, 18, 18]} />
            <meshStandardMaterial color={index > 2 ? HERO3D_COLORS.teal : '#A4A6FF'} emissive={index > 2 ? HERO3D_COLORS.teal : HERO3D_COLORS.blue} emissiveIntensity={(index > 2 ? 1.25 : 0.7) * accent.glow} />
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
