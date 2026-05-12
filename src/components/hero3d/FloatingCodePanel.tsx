import React from 'react';
import FloatingPanel3D from './FloatingPanel3D';

interface FloatingCodePanelProps {
  reducedMotion?: boolean;
}

const FloatingCodePanel: React.FC<FloatingCodePanelProps> = ({ reducedMotion = false }) => (
  <FloatingPanel3D variant="code" position={[-2.75, 0.9, -0.35]} rotation={[0.08, 0.72, 0.03]} phase={0.2} reducedMotion={reducedMotion} />
);

export default FloatingCodePanel;
