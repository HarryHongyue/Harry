import React from 'react';
import NeoCard from '../components/ui/NeoCard';
import NeoSection from '../components/ui/NeoSection';
import { useLanguage } from '../contexts/LanguageContext';

const DeploymentPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="neo-page">
      <NeoSection title={currentLanguage === 'zh' ? '部署说明已并入项目详情' : currentLanguage === 'nl' ? 'Deployment-notities zitten nu in de projectpagina’s' : 'Deployment notes now live inside project pages'}>
        <div className="neo-grid neo-grid--2">
          <NeoCard>
            <h3>{currentLanguage === 'zh' ? '为什么保留这个路由' : currentLanguage === 'nl' ? 'Waarom deze route blijft bestaan' : 'Why this route still exists'}</h3>
            <p>{currentLanguage === 'zh' ? '你前面要求主导航里删掉部署页，这里我已经把它从导航和首页中移除，但为了兼容旧入口和深链接，这个路由仍然保留。' : currentLanguage === 'nl' ? 'Je wilde deployment uit de hoofdnav verwijderen. Dat is gebeurd, maar voor oude links en compatibiliteit blijft deze route bestaan.' : 'You asked to remove deployment from the main navigation. That is done, but this route stays alive for backward compatibility and direct links.'}</p>
          </NeoCard>
          <NeoCard variant="inset">
            <h3>{currentLanguage === 'zh' ? '现在看哪里' : currentLanguage === 'nl' ? 'Waar je nu moet kijken' : 'Where to look now'}</h3>
            <p>{currentLanguage === 'zh' ? '具体部署方式已经回归到各自项目详情页里，特别是 PDF Reader、ODE、Aircargo EDI、CryoCore Cooling 和 Song Yan。' : currentLanguage === 'nl' ? 'Concrete deployment-informatie staat nu in de afzonderlijke projectdetailpagina’s, vooral voor PDF Reader, ODE, Aircargo EDI, CryoCore Cooling en Song Yan.' : 'Concrete deployment information now lives inside each project detail page, especially PDF Reader, ODE, Aircargo EDI, CryoCore Cooling, and Song Yan.'}</p>
          </NeoCard>
        </div>
      </NeoSection>
    </div>
  );
};

export default DeploymentPage;
