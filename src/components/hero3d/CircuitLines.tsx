import React, { useMemo, useRef } from 'react';
import { Line } from '@react-three/drei';
import { Group, Mesh } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS } from './hero3d.config';

interface CircuitLinesProps {
  reducedMotion?: boolean;
}

const CircuitLines: React.FC<CircuitLinesProps> = ({ reducedMotion = false }) => {
  const nodes = useRef<Mesh[]>([]);
  const group = useRef<Group>(null);
  const paths = useMemo(
    () => [
      [
        [-3.6, -1.42, 1.25],
        [-2.7, -1.42, 1.25],
        [-2.25, -1.42, 0.72],
        [-1.55, -1.42, 0.72],
      ],
      [
        [1.65, -1.4, 0.85],
        [2.38, -1.4, 0.85],
        [2.88, -1.4, 0.36],
      ],
      [
        [-2.8, -1.44, -0.45],
        [-1.82, -1.44, -0.45],
        [-1.35, -1.44, -0.92],
      ],
      [
        [0.72, -1.43, -1.25],
        [1.55, -1.43, -1.25],
        [2.05, -1.43, -0.75],
        [2.75, -1.43, -0.75],
      ],
      [
        [-0.95, -1.41, 1.68],
        [0.12, -1.41, 1.68],
        [0.68, -1.41, 1.12],
      ],
    ],
    [],
  );
  const nodePositions = useMemo(() => paths.flatMap((path) => [path[0], path[path.length - 1]]) as [number, number, number][], [paths]);

  useFrame(({ clock }) => {
    if (reducedMotion) return;
    const elapsed = clock.getElapsedTime();
    nodes.current.forEach((node, index) => {
      if (!node) return;
      const pulse = 0.75 + Math.sin(elapsed * 1.6 + index * 0.9) * 0.25;
      node.scale.setScalar(pulse);
    });
    if (group.current) {
      group.current.position.y = Math.sin(elapsed * 0.45) * 0.012;
    }
  });

  return (
    <group ref={group}>
      {paths.map((points, index) => (
        <Line key={index} points={points as [number, number, number][]} color={index % 2 ? HERO3D_COLORS.cyan : HERO3D_COLORS.blue} transparent opacity={0.55} lineWidth={1.2} />
      ))}
      {nodePositions.map((position, index) => (
        <mesh key={`${position.join('-')}-${index}`} ref={(node) => node && (nodes.current[index] = node)} position={position}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color={index % 2 ? HERO3D_COLORS.cyan : HERO3D_COLORS.blue} emissive={index % 2 ? HERO3D_COLORS.cyan : HERO3D_COLORS.blue} emissiveIntensity={1.5} />
        </mesh>
      ))}
    </group>
  );
};

export default CircuitLines;
