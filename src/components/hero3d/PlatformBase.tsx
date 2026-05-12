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
        color: '#0b1220',
        roughness: 0.46,
        metalness: 0.28,
      }),
    [],
  );
  const middleMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#101a2d',
        emissive: '#071f3d',
        emissiveIntensity: 0.16 * accent.glow,
        roughness: 0.42,
        metalness: 0.34,
      }),
    [accent.glow],
  );
  const glassMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: '#10233c',
        emissive: '#0a4b73',
        emissiveIntensity: 0.18 * accent.glow,
        roughness: 0.22,
        metalness: 0.12,
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
      <RoundedBox args={[5.75, 0.22, 3.75]} radius={0.34} smoothness={12} position={[-0.1, -0.46, 0]} material={bottomMaterial} receiveShadow castShadow />
      <RoundedBox args={[4.65, 0.28, 2.92]} radius={0.3} smoothness={12} position={[0.02, -0.2, 0]} material={middleMaterial} receiveShadow castShadow />
      <RoundedBox args={[3.42, 0.34, 2.18]} radius={0.22} smoothness={12} position={[0, 0.14, 0.02]} material={glassMaterial} receiveShadow castShadow />

      <group ref={ring} position={[0, 0.29, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <ringGeometry args={[1.92, 2.03, 112]} />
          <meshBasicMaterial color={HERO3D_COLORS.blue} transparent opacity={0.4 * accent.glow} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.54, 1.58, 112]} />
          <meshBasicMaterial color={HERO3D_COLORS.cyan} transparent opacity={0.24 * accent.glow} />
        </mesh>
      </group>

      <group position={[0, -0.17, 1.52]}>
        {ledPositions.map((x, index) => (
          <mesh key={x} position={[x, 0, 0]}>
            <sphereGeometry args={[index % 3 === 0 ? 0.075 : 0.052, 18, 18]} />
            <meshStandardMaterial color={index > 2 ? HERO3D_COLORS.teal : '#8fb8ff'} emissive={index > 2 ? HERO3D_COLORS.teal : HERO3D_COLORS.blue} emissiveIntensity={(index > 2 ? 1.25 : 0.7) * accent.glow} />
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
