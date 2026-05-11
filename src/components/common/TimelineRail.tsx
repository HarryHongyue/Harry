import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { l, pickText } from '../../data/siteContent';

const steps = [
  {
    year: '2019',
    title: l('Java Foundations', 'Java 基础', 'Java-basis'),
    body: l('Started from Java and structured programming exercises.', '从 Java 和结构化编程练习开始。', 'Begon met Java en gestructureerde programmeeroefeningen.'),
  },
  {
    year: '2020',
    title: l('Databases & Persistence', '数据库与持久化', 'Databases en persistentie'),
    body: l('Learned how data models, storage, and CRUD systems fit together.', '逐步理解数据模型、存储与 CRUD 系统是如何连接的。', 'Leerde hoe datamodellen, opslag en CRUD-systemen samenhangen.'),
  },
  {
    year: '2021',
    title: l('Python Workflows', 'Python 工作流', 'Python-workflows'),
    body: l('Moved deeper into Python for parsing, automation, and workflow logic.', '进一步用 Python 处理解析、自动化和工作流逻辑。', 'Ging dieper met Python aan de slag voor parsing, automatisering en workflowlogica.'),
  },
  {
    year: '2022',
    title: l('Frontend Systems', '前端系统', 'Frontendsystemen'),
    body: l('Focused on React, UI systems, multilingual structure, and interaction polish.', '开始深入 React、UI 系统、多语言结构和交互打磨。', 'Richtte zich op React, UI-systemen, meertalige structuur en interaction polish.'),
  },
  {
    year: '2024',
    title: l('Deployment & Real Projects', '部署与真实项目', 'Deployment en echte projecten'),
    body: l('Shipped websites, tools, installers, and private service workflows.', '开始交付网站、桌面工具、安装包和私有服务工作流。', 'Leverde websites, desktoptools, installers en private serviceworkflows op.'),
  },
  {
    year: '2025+',
    title: l('AI + Product Direction', 'AI 与产品方向', 'AI en productrichting'),
    body: l('Now focused on combining engineering structure, product clarity, and AI-assisted execution.', '现在重点放在把工程结构、产品表达和 AI 辅助执行结合起来。', 'Richt zich nu op het combineren van engineeringstructuur, producthelderheid en AI-ondersteunde uitvoering.'),
  },
];

const TimelineRail: React.FC = () => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="neo-rail">
      {steps.map((step) => (
        <article key={step.year} className="neo-rail__item">
          <span className="neo-rail__year">{step.year}</span>
          <h3>{pickText(currentLanguage, step.title)}</h3>
          <p>{pickText(currentLanguage, step.body)}</p>
        </article>
      ))}
    </div>
  );
};

export default TimelineRail;
