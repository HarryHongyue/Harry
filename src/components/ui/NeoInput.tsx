import React from 'react';
import { cn } from '../../lib/cn';

interface NeoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  hint?: string;
}

const NeoInput = React.forwardRef<HTMLInputElement, NeoInputProps>(({ label, hint, className, ...props }, ref) => {
  return (
    <label className="neo-field">
      {label ? <span className="neo-field__label">{label}</span> : null}
      <input ref={ref} className={cn('neo-input', className)} {...props} />
      {hint ? <span className="neo-field__hint">{hint}</span> : null}
    </label>
  );
});

NeoInput.displayName = 'NeoInput';

export default NeoInput;
