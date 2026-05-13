import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../lib/cn';

interface NeoSelectProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

const NeoSelect: React.FC<NeoSelectProps> = ({ label, value, onChange, options, placeholder, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <label className="neo-field">
      {label ? <span className="neo-field__label">{label}</span> : null}
      <div className="neo-select-wrapper" ref={dropdownRef}>
        <div
          className={cn('neo-select-trigger', isOpen && 'is-open')}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={cn('neo-select-value', !selectedValue && 'neo-select-value--placeholder')}>
            {selectedValue || placeholder}
          </span>
          <ChevronDown size={16} className="neo-select-arrow" />
        </div>
        {isOpen && (
          <div className="neo-select-dropdown">
            {options.map((option, index) => (
              <div
                key={`${option}-${index}`}
                className={cn('neo-select-option', selectedValue === option && 'is-selected')}
                onClick={() => handleSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </label>
  );
};

export default NeoSelect;
