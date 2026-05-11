import React from 'react';
import { cn } from '../../lib/cn';

interface NeoIconBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'cyan' | 'teal' | 'blue' | 'purple' | 'warning' | 'success';
  icon: React.ReactNode;
}

const NeoIconBox: React.FC<NeoIconBoxProps> = ({ tone = 'cyan', icon, className, ...props }) => {
  return (
    <div className={cn('neo-icon-box', `neo-icon-box--${tone}`, className)} {...props}>
      {icon}
    </div>
  );
};

export default NeoIconBox;
