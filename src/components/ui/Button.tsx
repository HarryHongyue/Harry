import React, { useState, useEffect } from 'react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, variant = 'primary', className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  // 监听主题变化事件
  useEffect(() => {
    const handleThemeChange = () => {
      // 主题变化时强制重新渲染
      setIsHovered(false);
    };
    
    window.addEventListener('themeChange', handleThemeChange);
    return () => window.removeEventListener('themeChange', handleThemeChange);
  }, []);

  const baseStyles: React.CSSProperties = {
    display: 'inline-block',
    padding: '16px 32px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    outline: 'none',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
  };

  const primaryStyles: React.CSSProperties = {
    ...baseStyles,
    background: isHovered 
      ? `linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%)`
      : `linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)`,
    color: '#ffffff',
    border: '2px solid var(--primary-color)',
    boxShadow: isHovered 
      ? '0 12px 25px rgba(0, 0, 0, 0.2)' 
      : '0 8px 20px rgba(0, 0, 0, 0.15)',
    fontWeight: '800',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
  };

  const secondaryStyles: React.CSSProperties = {
    ...baseStyles,
    backgroundColor: isHovered 
      ? 'var(--primary-color)'
      : '#ffffff',
    background: isHovered 
      ? 'var(--primary-color)'
      : '#ffffff',
    color: isHovered 
      ? '#ffffff'
      : 'var(--body-text)',
    border: '2px solid var(--primary-color)',
    boxShadow: isHovered 
      ? '0 12px 25px rgba(0, 0, 0, 0.2)' 
      : '0 8px 20px rgba(0, 0, 0, 0.15)',
    fontWeight: isHovered ? '800' : 'bold',
    backgroundImage: 'none',
    opacity: 1,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <a
      href={href}
      style={variant === 'primary' ? primaryStyles : secondaryStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <span style={{ 
        color: variant === 'primary' 
          ? 'white' 
          : isHovered 
            ? 'white' 
            : 'inherit',
        fontWeight: 'inherit'
      }}>
        {children}
      </span>
    </a>
  );
};

export default Button;