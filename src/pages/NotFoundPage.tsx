import React from 'react';
import { Link } from 'react-router-dom';
import NeoCard from '../components/ui/NeoCard';
import { useLanguage } from '../contexts/LanguageContext';
import { neoButtonClass } from '../components/ui/NeoButton';
import Breadcrumbs from '../components/navigation/Breadcrumbs';

const NotFoundPage: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="neo-page">
      <div className="section-shell">
        <NeoCard>
          <Breadcrumbs />
          <h1>404</h1>
          <p>{currentLanguage === 'zh' ? '这个页面不存在，或者已经被重新整理到新的结构里。' : currentLanguage === 'nl' ? 'Deze pagina bestaat niet, of is verplaatst naar de nieuwe structuur.' : 'This page does not exist, or it has been reorganized into the new structure.'}</p>
          <Link to="/" className={neoButtonClass('primary')}>
            {currentLanguage === 'zh' ? '回到首页' : currentLanguage === 'nl' ? 'Terug naar home' : 'Back Home'}
          </Link>
        </NeoCard>
      </div>
    </div>
  );
};

export default NotFoundPage;
