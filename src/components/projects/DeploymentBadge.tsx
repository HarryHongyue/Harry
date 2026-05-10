import React from 'react';
import type { DeploymentType } from '../../types/project';

const labels: Record<DeploymentType, string> = {
  'static-site': 'Static site',
  'static-site-plus-api': 'Static site + API',
  'desktop-release': 'Desktop release',
  'browser-extension-release': 'Extension release',
  'reference-only': 'Reference only',
};

interface DeploymentBadgeProps {
  type: DeploymentType;
}

const DeploymentBadge: React.FC<DeploymentBadgeProps> = ({ type }) => (
  <span className={`deployment-badge deployment-badge--${type}`}>
    {labels[type]}
  </span>
);

export default DeploymentBadge;
