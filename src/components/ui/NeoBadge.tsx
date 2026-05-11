import React from 'react';
import { cn } from '../../lib/cn';

interface NeoBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'default' | 'cyan' | 'teal' | 'blue' | 'purple' | 'success' | 'warning';
}

const NeoBadge: React.FC<NeoBadgeProps> = ({ tone = 'default', className, children, ...props }) => {
  return (
    <span className={cn('neo-badge', tone !== 'default' && `neo-badge--${tone}`, className)} {...props}>
      {children}
    </span>
  );
};

export default NeoBadge;
