import React from 'react';
import FloatingPanel3D from './FloatingPanel3D';

interface FloatingCodeIconPanelProps {
  reducedMotion?: boolean;
}

const FloatingCodeIconPanel: React.FC<FloatingCodeIconPanelProps> = ({ reducedMotion = false }) => (
  <FloatingPanel3D variant="symbol" position={[3.25, 0.85, 0.08]} rotation={[0.02, -0.7, 0]} phase={2.1} reducedMotion={reducedMotion} />
);

export default FloatingCodeIconPanel;
