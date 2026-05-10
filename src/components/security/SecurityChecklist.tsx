import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const SecurityChecklist: React.FC = () => {
  const { t } = useLanguage();

  const groups = [
    {
      title: t('serverSecurity'),
      items: [
        t('serverSecurity1'),
        t('serverSecurity2'),
        t('serverSecurity3'),
        t('serverSecurity4'),
        t('serverSecurity5'),
      ],
    },
    {
      title: t('reverseProxySecurity'),
      items: [
        t('reverseProxySecurity1'),
        t('reverseProxySecurity2'),
        t('reverseProxySecurity3'),
        t('reverseProxySecurity4'),
        t('reverseProxySecurity5'),
      ],
    },
    {
      title: t('uploadApiSecurity'),
      items: [
        t('uploadApiSecurity1'),
        t('uploadApiSecurity2'),
        t('uploadApiSecurity3'),
        t('uploadApiSecurity4'),
        t('uploadApiSecurity5'),
        t('uploadApiSecurity6'),
        t('uploadApiSecurity7'),
        t('uploadApiSecurity8'),
        t('uploadApiSecurity9'),
      ],
    },
    {
      title: t('secrets'),
      items: [
        t('secrets1'),
        t('secrets2'),
        t('secrets3'),
      ],
    },
    {
      title: t('downloadSafety'),
      items: [
        t('downloadSafety1'),
        t('downloadSafety2'),
        t('downloadSafety3'),
      ],
    },
  ];

  return (
    <div className="security-checklist">
      {groups.map((group) => (
        <section className="content-panel" key={group.title}>
          <h2>{group.title}</h2>
          <ul className="check-list">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default SecurityChecklist;
