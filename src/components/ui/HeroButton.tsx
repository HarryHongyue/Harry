import React, { useState } from 'react';

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

const HeroButton: React.FC<HeroButtonProps> = ({ href, children, variant = 'primary' }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '16px 32px',
    fontSize: '18px',
    fontWeight: '800',
    textDecoration: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    backgroundImage: `linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%)`,
    color: '#ffffff',
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
    transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
  };

  const secondaryButtonStyle: React.CSSProperties = {
    display: 'inline-block',
    padding: '16px 32px',
    fontSize: '18px',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none',
    // 使用CSS变量跟随主题变化
    backgroundColor: isHovered ? 'var(--primary-color)' : '#ffffff',
    backgroundImage: 'none',
    color: isHovered ? '#ffffff' : '#374151',
    boxShadow: isHovered 
      ? '0 12px 25px rgba(0, 0, 0, 0.2)' 
      : '0 8px 20px rgba(0, 0, 0, 0.15)',
    transform: isHovered ? 'translateY(-2px) scale(1.02)' : 'translateY(0) scale(1)',
  };

  return (
    <div
      style={variant === 'primary' ? primaryButtonStyle : secondaryButtonStyle}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // 使用 data 属性避免全局CSS选择器
      data-hero-button="true"
      data-variant={variant}
    >
      {children}
    </div>
  );
};

export default HeroButton;