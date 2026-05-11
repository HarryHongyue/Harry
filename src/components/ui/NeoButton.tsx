import React from 'react';
import { cn } from '../../lib/cn';

export type NeoButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';

export const neoButtonClass = (variant: NeoButtonVariant = 'secondary', className?: string) =>
  cn(
    'neo-button',
    variant === 'primary' && 'neo-button-primary',
    variant === 'secondary' && 'neo-button-secondary',
    variant === 'ghost' && 'neo-button-ghost',
    variant === 'danger' && 'neo-button-danger',
    className,
  );

type BaseProps = {
  variant?: NeoButtonVariant;
  className?: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children: React.ReactNode;
};

type ButtonProps = BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>;

const NeoButton: React.FC<ButtonProps> = ({
  variant = 'secondary',
  className,
  iconLeft,
  iconRight,
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button type={type} className={neoButtonClass(variant, className)} {...props}>
      {iconLeft ? <span className="neo-button__icon">{iconLeft}</span> : null}
      <span>{children}</span>
      {iconRight ? <span className="neo-button__icon">{iconRight}</span> : null}
    </button>
  );
};

export default NeoButton;
