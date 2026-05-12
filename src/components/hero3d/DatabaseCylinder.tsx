import React, { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS, HERO3D_INTENSITY, type Hero3DIntensity } from './hero3d.config';

interface DatabaseCylinderProps {
  intensity?: Hero3DIntensity;
  reducedMotion?: boolean;
}

const DatabaseCylinder: React.FC<DatabaseCylinderProps> = ({ intensity = 'medium', reducedMotion = false }) => {
  const group = useRef<Group>(null);
  const accent = HERO3D_INTENSITY[intensity];

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    group.current.position.y = -0.47 + Math.sin(clock.getElapsedTime() * 0.92 + 1.1) * 0.04 * accent.motion;
  });

  return (
    <group ref={group} position={[2.92, -0.86, 0.34]} rotation={[0, -0.22, 0]} scale={[0.92, 0.72, 0.92]}>
      {[0, 0.28, 0.56, 0.84].map((y, index) => (
        <group key={y} position={[0, y, 0]}>
          <mesh castShadow receiveShadow>
            <cylinderGeometry args={[0.48, 0.5, 0.22, 64]} />
            <meshStandardMaterial color={index === 3 ? '#13233a' : '#0d1728'} roughness={0.38} metalness={0.38} emissive="#061b35" emissiveIntensity={0.12 * accent.glow} />
          </mesh>
          <mesh position={[0, 0.12, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[0.49, 0.52, 64]} />
            <meshBasicMaterial color={index % 2 ? HERO3D_COLORS.cyan : HERO3D_COLORS.blue} transparent opacity={0.48 * accent.glow} />
          </mesh>
          <mesh position={[0.18, 0.02, 0.49]}>
            <sphereGeometry args={[0.025, 12, 12]} />
            <meshStandardMaterial color={HERO3D_COLORS.cyan} emissive={HERO3D_COLORS.cyan} emissiveIntensity={1.5 * accent.glow} />
          </mesh>
        </group>
      ))}
      <pointLight color={HERO3D_COLORS.cyan} intensity={0.7 * accent.glow} distance={2.2} position={[0, 0.7, 0.4]} />
    </group>
  );
};

export default DatabaseCylinder;
