import React from 'react';
import { cn } from '../../lib/cn';

export type NeoCardVariant = 'raised' | 'inset' | 'glowing';

interface NeoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: NeoCardVariant;
  hoverable?: boolean;
}

const NeoCard: React.FC<NeoCardProps> = ({ variant = 'raised', hoverable = false, className, children, ...props }) => {
  return (
    <div
      className={cn(
        'neo-card',
        variant === 'raised' && 'neo-card--raised',
        variant === 'inset' && 'neo-card-inset',
        variant === 'glowing' && 'neo-card neo-glow-cyan',
        hoverable && 'neo-card--hoverable',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default NeoCard;
