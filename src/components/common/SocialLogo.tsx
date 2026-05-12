import React from 'react';

type SocialLogoName = 'email' | 'whatsapp' | 'telegram' | 'xchat' | 'x' | 'signal';

interface SocialLogoProps {
  name: SocialLogoName;
  size?: number;
}

const SocialLogo: React.FC<SocialLogoProps> = ({ name, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 32 32',
    'aria-hidden': true,
    focusable: false,
  } as const;

  if (name === 'whatsapp') {
    return (
      <svg {...common} className="social-logo social-logo--whatsapp">
        <circle cx="16" cy="16" r="14" />
        <path d="M9.4 24.2l1.1-4A8.1 8.1 0 1 1 13 22.4l-3.6 1.8Z" />
        <path d="M12.7 11.2c.3-.6.5-.6.9-.6h.7c.2 0 .5.1.7.5l1 2.3c.1.3.1.5-.1.8l-.6.7c-.2.2-.2.4-.1.7.5 1.1 1.4 2 2.7 2.7.3.2.5.1.7-.1l.8-1c.2-.2.5-.3.8-.2l2.2 1.1c.4.2.5.4.5.7 0 .9-.7 1.9-1.5 2.2-.7.3-3.3.6-6.4-2.2-2.8-2.5-3.8-5.2-3.6-6.2.2-.7.7-1.6 1.3-2.2Z" />
      </svg>
    );
  }

  if (name === 'telegram') {
    return (
      <svg {...common} className="social-logo social-logo--telegram">
        <circle cx="16" cy="16" r="14" />
        <path d="M24.6 9.2 21.9 23c-.2.9-.8 1.1-1.5.7l-4.2-3.1-2 2c-.2.2-.4.4-.8.4l.3-4.4 8-7.2c.4-.3-.1-.5-.5-.2l-9.9 6.2-4.2-1.3c-.9-.3-.9-.9.2-1.3l16.4-6.3c.8-.3 1.5.2.9.7Z" />
      </svg>
    );
  }

  if (name === 'signal') {
    return (
      <svg {...common} className="social-logo social-logo--signal">
        <circle cx="16" cy="16" r="13" />
        <path d="M10.5 22.8 8.7 26l3.7-1.1a9.4 9.4 0 1 0-1.9-2.1Z" />
        <path d="M11.2 15.8a4.8 4.8 0 1 0 9.6 0 4.8 4.8 0 0 0-9.6 0Z" />
      </svg>
    );
  }

  if (name === 'x' || name === 'xchat') {
    return (
      <svg {...common} className={`social-logo social-logo--${name}`}>
        <circle cx="16" cy="16" r="14" />
        <path d="M9 9h4.4l3.5 4.6L20.8 9H25l-6.1 7 6.4 7H21l-3.9-5.1L12.8 23H8.7l6.4-7.4L9 9Zm3.7 2.2 8.6 9.7h1L13.7 11.2h-1Z" />
        {name === 'xchat' ? <path d="M9.4 25.2c2.8-.2 4.8-.8 6-1.9" /> : null}
      </svg>
    );
  }

  return (
    <svg {...common} className="social-logo social-logo--email">
      <rect x="5" y="8" width="22" height="16" rx="4" />
      <path d="m7.6 11.5 8.4 6.2 8.4-6.2" />
    </svg>
  );
};

export default SocialLogo;
