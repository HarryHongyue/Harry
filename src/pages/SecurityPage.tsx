import React from 'react';
import NeoCard from '../components/ui/NeoCard';
import NeoSection from '../components/ui/NeoSection';
import { useLanguage } from '../contexts/LanguageContext';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const SecurityPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const controls = [
    'HTTPS Everywhere',
    'Reverse Proxy',
    'SSH Keys Only',
    'No Root Login',
    'CORS Whitelist',
    'File Size Limits',
    'Upload Validation',
    'Docker Isolation',
    'Secrets Management',
    'Backups & Recovery',
    'Monitoring & Alerts',
    'Regular Updates',
  ];

  return (
    <div className="neo-page">
      <NeoSection eyebrow={<Breadcrumbs />} title={currentLanguage === 'zh' ? '安全说明已下沉到各项目' : currentLanguage === 'nl' ? 'Security is nu projectspecifiek' : 'Security is now handled per project'}>
        <div className="neo-grid neo-grid--2">
          <NeoCard>
            <h3>{currentLanguage === 'zh' ? '为什么不再单独做主导航页' : currentLanguage === 'nl' ? 'Waarom dit geen hoofdnav-pagina meer is' : 'Why this is no longer a main-nav page'}</h3>
            <p>{currentLanguage === 'zh' ? '因为这是个人展示网站，不是单一 SaaS 产品官网。安全内容更适合跟着项目类型走，而不是独立悬空。' : currentLanguage === 'nl' ? 'Omdat dit een persoonlijke showcasesite is en geen enkel SaaS-product. Security past beter per projecttype dan als losstaande hoofdpagina.' : 'Because this is a personal showcase site, not one single SaaS product. Security makes more sense attached to each project type than floating as a separate main page.'}</p>
          </NeoCard>
          <NeoCard variant="inset">
            <h3>{currentLanguage === 'zh' ? '依然遵循的通用控制' : currentLanguage === 'nl' ? 'Algemene controls die nog steeds gelden' : 'Shared controls still followed'}</h3>
            <ul className="neo-list">
              {controls.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </NeoCard>
        </div>
      </NeoSection>
    </div>
  );
};

export default SecurityPage;
