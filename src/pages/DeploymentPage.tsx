import React from 'react';
import { Cloud, Download, HardDrive, Layers3, Server, ShieldCheck } from 'lucide-react';
import NeoCard from '../components/ui/NeoCard';
import NeoIconBox from '../components/ui/NeoIconBox';
import NeoSection from '../components/ui/NeoSection';
import { useLanguage } from '../contexts/LanguageContext';
import { pickText, uiText } from '../data/siteContent';

const DeploymentPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  const components = [
    {
      icon: <Layers3 size={22} />,
      title: currentLanguage === 'zh' ? 'Main Showcase' : currentLanguage === 'nl' ? 'Main showcase' : 'Main Showcase',
      body: currentLanguage === 'zh' ? '负责导航、内容组织、项目索引和统一品牌表达。' : currentLanguage === 'nl' ? 'Verzorgt navigatie, contentstructuur, projectindex en merklaag.' : 'Owns navigation, content organization, project discovery, and brand expression.',
    },
    {
      icon: <Server size={22} />,
      title: currentLanguage === 'zh' ? 'Project Services' : currentLanguage === 'nl' ? 'Projectservices' : 'Project Services',
      body: currentLanguage === 'zh' ? '各项目可保留独立 API、运行时和处理逻辑。' : currentLanguage === 'nl' ? 'Projecten kunnen eigen API’s, runtimes en verwerkingslogica behouden.' : 'Each project can keep its own API, runtime, and processing logic.',
    },
    {
      icon: <Cloud size={22} />,
      title: currentLanguage === 'zh' ? 'Cloud Infrastructure' : currentLanguage === 'nl' ? 'Cloudinfra' : 'Cloud Infrastructure',
      body: currentLanguage === 'zh' ? '统一承载计算、存储、路由和受控公网入口。' : currentLanguage === 'nl' ? 'Draagt compute, opslag, routing en gecontroleerde publieke toegang.' : 'Provides compute, storage, routing, and controlled public exposure.',
    },
    {
      icon: <Download size={22} />,
      title: currentLanguage === 'zh' ? 'Release Assets' : currentLanguage === 'nl' ? 'Release-assets' : 'Release Assets',
      body: currentLanguage === 'zh' ? '把安装包、指南、文档和版本资源统一汇总。' : currentLanguage === 'nl' ? 'Verzamelt installers, gidsen, documenten en releasebestanden.' : 'Collects installers, guides, documents, and release artifacts in one place.',
    },
  ];

  return (
    <div className="neo-page">
      <NeoSection eyebrow={pickText(currentLanguage, uiText.deployment.eyebrow)} title={pickText(currentLanguage, uiText.deployment.title)} description={pickText(currentLanguage, uiText.deployment.intro)}>
        <div className="neo-architecture-strip">
          <div className="neo-architecture-node">
            <NeoIconBox tone="teal" icon={<Layers3 size={22} />} />
            <strong>{currentLanguage === 'zh' ? 'Main Site' : currentLanguage === 'nl' ? 'Main Site' : 'Main Site'}</strong>
            <p>{currentLanguage === 'zh' ? '项目入口与统一展示' : currentLanguage === 'nl' ? 'Projectingang en centrale presentatie' : 'Project entry and unified presentation'}</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="blue" icon={<Server size={22} />} />
            <strong>API Gateway</strong>
            <p>{currentLanguage === 'zh' ? '路由、鉴权、限流' : currentLanguage === 'nl' ? 'Routing, auth, limits' : 'Routing, auth, rate limits'}</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="cyan" icon={<HardDrive size={22} />} />
            <strong>{currentLanguage === 'zh' ? 'Independent Apps' : currentLanguage === 'nl' ? 'Onafhankelijke apps' : 'Independent Apps'}</strong>
            <p>{currentLanguage === 'zh' ? '各自仓库与运行时' : currentLanguage === 'nl' ? 'Eigen repo en runtime' : 'Own repo and runtime'}</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="purple" icon={<Cloud size={22} />} />
            <strong>Cloud Server</strong>
            <p>{currentLanguage === 'zh' ? '计算、存储、备份' : currentLanguage === 'nl' ? 'Compute, opslag, back-up' : 'Compute, storage, backup'}</p>
          </div>
          <div className="neo-architecture-node">
            <NeoIconBox tone="teal" icon={<Download size={22} />} />
            <strong>{currentLanguage === 'zh' ? 'Downloads' : currentLanguage === 'nl' ? 'Downloads' : 'Downloads'}</strong>
            <p>{currentLanguage === 'zh' ? '文档、安装包、发布' : currentLanguage === 'nl' ? 'Docs, installers, releases' : 'Docs, installers, releases'}</p>
          </div>
        </div>
      </NeoSection>

      <NeoSection title={pickText(currentLanguage, uiText.deployment.componentsTitle)}>
        <div className="neo-grid neo-grid--2">
          {components.map((item, index) => (
            <NeoCard key={item.title} hoverable>
              <div className="neo-project-card__header">
                <NeoIconBox tone={index % 2 === 0 ? 'cyan' : 'blue'} icon={item.icon} />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            </NeoCard>
          ))}
        </div>
      </NeoSection>

      <NeoSection title="Operational Notes">
        <div className="neo-grid neo-grid--2">
          <NeoCard>
            <h3>{currentLanguage === 'zh' ? 'Why this architecture exists' : currentLanguage === 'nl' ? 'Waarom deze architectuur bestaat' : 'Why this architecture exists'}</h3>
            <ul className="neo-list">
              <li>{currentLanguage === 'zh' ? '避免把所有项目塞进一个难维护的单体站。' : currentLanguage === 'nl' ? 'Voorkomt dat alle projecten in één moeilijk te onderhouden monoliet belanden.' : 'Avoids collapsing every project into one hard-to-maintain monolith.'}</li>
              <li>{currentLanguage === 'zh' ? '允许不同项目保留不同交付形态。' : currentLanguage === 'nl' ? 'Laat verschillende projecten hun eigen leveringsvorm behouden.' : 'Lets each project keep its own delivery model.'}</li>
              <li>{currentLanguage === 'zh' ? '让公开展示和真实运行边界保持清楚。' : currentLanguage === 'nl' ? 'Houdt publieke showcase en echte runtimegrenzen duidelijk.' : 'Keeps public showcase and real runtime boundaries separate.'}</li>
            </ul>
          </NeoCard>
          <NeoCard variant="inset">
            <div className="neo-project-card__header">
              <NeoIconBox tone="success" icon={<ShieldCheck size={22} />} />
              <div>
                <h3>{currentLanguage === 'zh' ? 'Deployment discipline' : currentLanguage === 'nl' ? 'Deployment discipline' : 'Deployment discipline'}</h3>
                <p>{currentLanguage === 'zh' ? '统一路由，不统一 runtime；统一入口，不混合边界。' : currentLanguage === 'nl' ? 'Eén toegang, geen samengevoegde runtime; één ingang, geen vervaagde grenzen.' : 'Unified entry point, not unified runtime; one front door, but clean boundaries.'}</p>
              </div>
            </div>
          </NeoCard>
        </div>
      </NeoSection>
    </div>
  );
};

export default DeploymentPage;
