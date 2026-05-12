import React from 'react';
import FloatingPanel3D from './FloatingPanel3D';

interface FloatingAnalyticsPanelProps {
  reducedMotion?: boolean;
}

const FloatingAnalyticsPanel: React.FC<FloatingAnalyticsPanelProps> = ({ reducedMotion = false }) => (
  <FloatingPanel3D variant="chart" position={[1.95, 1.55, -0.45]} rotation={[0.05, -0.52, 0.02]} phase={1.4} reducedMotion={reducedMotion} />
);

export default FloatingAnalyticsPanel;
