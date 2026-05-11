import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../components/ui/NeoCard';
import { useLanguage } from '../contexts/LanguageContext';
import { neoButtonClass } from '../components/ui/NeoButton';

const AboutPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="neo-page">
      <div className="section-shell">
        <NeoCard>
          <h1>{currentLanguage === 'zh' ? '关于内容已经并入首页' : currentLanguage === 'nl' ? 'De about-inhoud is nu opgenomen op de homepage' : 'About content now lives on the homepage'}</h1>
          <p>
            {currentLanguage === 'zh'
              ? '为了让个人主站更集中，原本独立的 About 页面内容已经合并到首页中。你仍然可以从首页直接查看我的定位、成长路径和合作方向。'
              : currentLanguage === 'nl'
                ? 'Om de hoofdsite compacter te maken, is de zelfstandige About-inhoud samengevoegd met de homepage. Daar zie je direct mijn positionering, groeipad en samenwerkingsrichting.'
                : 'To keep the main site more focused, the standalone About content has been merged into the homepage. You can still find my positioning, journey, and collaboration direction there.'}
          </p>
          <Link to="/" className={neoButtonClass('primary')}>
            {currentLanguage === 'zh' ? '回到首页' : currentLanguage === 'nl' ? 'Terug naar home' : 'Back Home'}
          </Link>
        </NeoCard>
      </div>
    </div>
  );
};

export default AboutPage;
