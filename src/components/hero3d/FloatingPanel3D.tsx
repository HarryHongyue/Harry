import React, { ReactNode, useRef } from 'react';
import { Html, RoundedBox } from '@react-three/drei';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import { HERO3D_COLORS } from './hero3d.config';

type PanelVariant = 'code' | 'chart' | 'symbol';

interface FloatingPanel3DProps {
  variant: PanelVariant;
  position: [number, number, number];
  rotation: [number, number, number];
  phase?: number;
  reducedMotion?: boolean;
}

const panelContent: Record<PanelVariant, ReactNode> = {
  code: (
    <div className="floating-ui-panel floating-code-panel">
      <div className="panel-dots"><span /><span /><span /></div>
      <code>
        <span>function harry() {'{'}</span>
        <span>  const future =</span>
        <span>    build("intelligent")</span>
        <span>{'}'}</span>
        <span>return future</span>
        <span>  .connect()</span>
        <span>  .scale()</span>
        <span>  .inspire()</span>
      </code>
    </div>
  ),
  chart: (
    <div className="floating-ui-panel floating-chart-panel">
      <strong>analytics</strong>
      <div className="chart-grid">
        {[34, 48, 72, 44, 86, 58, 74].map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
      <svg viewBox="0 0 180 70" aria-hidden="true">
        <path d="M8 56 C34 32 49 44 71 24 S116 38 137 18 166 22 174 10" />
      </svg>
    </div>
  ),
  symbol: (
    <div className="floating-ui-panel floating-symbol-panel">
      <b>&lt;/&gt;</b>
      <span />
      <span />
      <span />
    </div>
  ),
};

const FloatingPanel3D: React.FC<FloatingPanel3DProps> = ({ variant, position, rotation, phase = 0, reducedMotion = false }) => {
  const group = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!group.current || reducedMotion) return;
    group.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 0.8 + phase) * 0.08;
    group.current.rotation.z = rotation[2] + Math.sin(clock.getElapsedTime() * 0.55 + phase) * 0.014;
  });

  return (
    <group ref={group} position={position} rotation={rotation}>
      <RoundedBox args={[1.9, 1.25, 0.08]} radius={0.08} smoothness={5}>
        <meshStandardMaterial color="#081225" roughness={0.32} metalness={0.2} emissive={HERO3D_COLORS.blue} emissiveIntensity={0.06} transparent opacity={0.82} />
      </RoundedBox>
      <mesh position={[0, 0, 0.052]}>
        <planeGeometry args={[1.74, 1.09]} />
        <meshBasicMaterial color={HERO3D_COLORS.cyan} transparent opacity={0.035} />
      </mesh>
      <Html transform distanceFactor={4.6} position={[0, 0, 0.09]} occlude={false}>
        {panelContent[variant]}
      </Html>
    </group>
  );
};

export default FloatingPanel3D;
