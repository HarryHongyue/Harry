import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import NeoCard from '../components/ui/NeoCard';
import { useLanguage } from '../contexts/LanguageContext';
import { neoButtonClass } from '../components/ui/NeoButton';

const NotFoundPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="neo-page">
      <div className="section-shell">
        <NeoCard>
          <div className="neo-section__header">
            <div className="neo-eyebrow">404</div>
            <h1>{currentLanguage === 'zh' ? '这个页面不存在。' : currentLanguage === 'nl' ? 'Deze pagina bestaat niet.' : 'This page does not exist.'}</h1>
            <p>{currentLanguage === 'zh' ? '你访问的路由不在当前主展示网站结构中。' : currentLanguage === 'nl' ? 'Deze route valt buiten de huidige structuur van de showcase.' : 'The route you requested is outside the current showcase structure.'}</p>
            <div className="neo-inline-actions">
              <Link to="/" className={neoButtonClass('primary')}>
                <ArrowLeft size={18} />
                {currentLanguage === 'zh' ? '返回首页' : currentLanguage === 'nl' ? 'Terug naar home' : 'Back Home'}
              </Link>
              <Link to="/projects" className={neoButtonClass('secondary')}>
                {currentLanguage === 'zh' ? '查看项目' : currentLanguage === 'nl' ? 'Bekijk projecten' : 'View Projects'}
              </Link>
            </div>
          </div>
        </NeoCard>
      </div>
    </div>
  );
};

export default NotFoundPage;
