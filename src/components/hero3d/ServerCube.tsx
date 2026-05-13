import React, { useRef } from 'react';
import { RoundedBox } from '@react-three/drei';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS, HERO3D_INTENSITY, type Hero3DIntensity } from './hero3d.config';

interface ServerCubeProps {
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
}

const ServerCube: React.FC<ServerCubeProps> = ({ intensity = 'medium', reducedMotion = false }) => {
  const group = useRef<Group>(null);
  const accent = HERO3D_INTENSITY[intensity];

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    group.current.position.y = -0.76 + Math.sin(clock.getElapsedTime() * 0.86 + 2.4) * 0.05 * accent.motion;
  });

  return (
    <group ref={group} position={[-2.45, -0.78, 0.94]} rotation={[0.04, 0.48, 0]} scale={[0.76, 0.76, 0.76]}>
      <RoundedBox args={[0.82, 0.82, 0.82]} radius={0.12} smoothness={10} castShadow receiveShadow>
        <meshStandardMaterial color="#111a2b" roughness={0.4} metalness={0.32} emissive="#061a2d" emissiveIntensity={0.1 * accent.glow} />
      </RoundedBox>
      <mesh position={[0, 0.06, 0.421]}>
        <boxGeometry args={[0.38, 0.07, 0.018]} />
        <meshStandardMaterial color={HERO3D_COLORS.teal} emissive={HERO3D_COLORS.teal} emissiveIntensity={1.2 * accent.glow} />
      </mesh>
      <mesh position={[0, -0.1, 0.421]}>
        <boxGeometry args={[0.38, 0.07, 0.018]} />
        <meshStandardMaterial color={HERO3D_COLORS.blue} emissive={HERO3D_COLORS.blue} emissiveIntensity={0.9 * accent.glow} />
      </mesh>
      <mesh position={[0.421, 0.16, 0.15]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.42, 0.055, 0.018]} />
        <meshStandardMaterial color={HERO3D_COLORS.cyan} emissive={HERO3D_COLORS.cyan} emissiveIntensity={1 * accent.glow} />
      </mesh>
      <mesh position={[0.421, -0.05, 0.15]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[0.42, 0.055, 0.018]} />
        <meshStandardMaterial color={HERO3D_COLORS.blue} emissive={HERO3D_COLORS.blue} emissiveIntensity={0.85 * accent.glow} />
      </mesh>
    </group>
  );
};

export default ServerCube;
