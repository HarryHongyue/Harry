import React from 'react';
import emailLogo from '../../assets/images/外部应用logo/邮箱.svg';
import signalLogo from '../../assets/images/外部应用logo/Signal-Logo-Ultramarine_(2024).svg.png';
import telegramLogo from '../../assets/images/外部应用logo/Telegram (Telegram).png';
import whatsappLogo from '../../assets/images/外部应用logo/WhatsApp.png';
import xLogo from '../../assets/images/外部应用logo/X-Logo.svg';
import xchatLogo from '../../assets/images/外部应用logo/Xchat-Logo.png';

type SocialLogoName = 'email' | 'whatsapp' | 'telegram' | 'xchat' | 'x' | 'signal';

interface SocialLogoProps {
  name: SocialLogoName;
  size?: number;
}

const logoMap: Record<SocialLogoName, string> = {
  email: emailLogo,
  whatsapp: whatsappLogo,
  telegram: telegramLogo,
  xchat: xchatLogo,
  x: xLogo,
  signal: signalLogo,
};

const SocialLogo: React.FC<SocialLogoProps> = ({ name, size = 24 }) => (
  <img
    className={`social-logo social-logo--${name}`}
    src={logoMap[name]}
    alt=""
    aria-hidden="true"
    style={{ width: size, height: size }}
  />
);

export default SocialLogo;
