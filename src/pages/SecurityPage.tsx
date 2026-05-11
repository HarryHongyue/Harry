import React from 'react';
import { Lock, ShieldCheck } from 'lucide-react';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoSection from '../components/ui/NeoSection';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';

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
      <NeoSection eyebrow={pickText(currentLanguage, uiText.security.eyebrow)} title={pickText(currentLanguage, uiText.security.title)} description={pickText(currentLanguage, uiText.security.intro)}>
        <div className="neo-grid neo-grid--3">
          {controls.map((control, index) => (
            <NeoCard key={control} hoverable>
              <div className="neo-project-card__header">
                <NeoIconBox tone={index % 3 === 0 ? 'cyan' : index % 3 === 1 ? 'teal' : 'blue'} icon={<ShieldCheck size={20} />} />
                <div>
                  <h3>{control}</h3>
                  <p>
                    {currentLanguage === 'zh'
                      ? '把这项控制落实到公开路由、项目服务和下载分发中。'
                      : currentLanguage === 'nl'
                        ? 'Pas deze controle toe op publieke routes, projectservices en distributie.'
                        : 'Apply this control across public routes, project services, and release distribution.'}
                  </p>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection title={currentLanguage === 'zh' ? 'Best practices in this ecosystem' : currentLanguage === 'nl' ? 'Best practices in dit ecosysteem' : 'Best practices in this ecosystem'}>
        <div className="neo-grid neo-grid--2">
          <NeoCard>
            <div className="neo-project-card__header">
              <NeoIconBox tone="teal" icon={<Lock size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? 'Public showcase, private runtime' : currentLanguage === 'nl' ? 'Publieke showcase, private runtime' : 'Public showcase, private runtime'}</h3>
                <p>{currentLanguage === 'zh' ? '主站展示项目，但不应暴露真实处理服务的原始入口。' : currentLanguage === 'nl' ? 'De hoofdsite toont projecten, maar mag ruwe service-ingangen niet blootstellen.' : 'The main site showcases projects without exposing raw runtime entry points.'}</p>
              </div>
            </div>
          </NeoCard>
          <NeoCard variant="inset">
            <div className="neo-project-card__header">
              <NeoIconBox tone="blue" icon={<ShieldCheck size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? 'Documented controls' : currentLanguage === 'nl' ? 'Gedocumenteerde controles' : 'Documented controls'}</h3>
                <p>{currentLanguage === 'zh' ? '上传校验、校验值、部署说明和发布渠道都需要写进公开文档。' : currentLanguage === 'nl' ? 'Uploadvalidatie, checksums, deployment-notes en releasekanalen horen in publieke documentatie.' : 'Upload validation, checksums, deployment notes, and release channels should be documented publicly.'}</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </NeoSection>
    </div>
  );
};

export default SecurityPage;
