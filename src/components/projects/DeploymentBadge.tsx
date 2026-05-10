import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
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

const DeploymentBadge: React.FC<DeploymentBadgeProps> = ({ type }) => {
  const { t } = useLanguage();
  
  return (
    <span className={`deployment-badge deployment-badge--${type}`}>
      {t(`deploymentType_${type.replace(/-/g, '_')}` as any)}
    </span>
  );
};

export default DeploymentBadge;
