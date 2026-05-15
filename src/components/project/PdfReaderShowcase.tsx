import React, { useState, useEffect } from 'react';
import { BookOpen, Download, FileSearch, FileText, Globe, Layers, Lock, Scan, ScanText, ShieldCheck, Table2 } from 'lucide-react';
import type { Project } from '../../types/project';
import NeoCard from '../ui/NeoCard';
import { neoButtonClass } from '../ui/NeoButton';
import { useLanguage } from '../../contexts/LanguageContext';
import ProjectTechStackCards from './ProjectTechStackCards';
import { fetchReleaseManifest, getProjectVersionHistory, getLatestVersion, getLatestReleaseDate } from '../../utils/releaseManifest';

const pdfReaderScreenshot = new URL('../../assets/images/PDF Reader/PDF reader.PNG', import.meta.url).href;

const GithubIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

interface PdfReaderShowcaseProps {
  project: Project;
}

const PdfReaderShowcase: React.FC<PdfReaderShowcaseProps> = ({ project }) => {
  const { currentLanguage } = useLanguage();
  const [versionHistory, setVersionHistory] = useState<any[]>([]);
  const [latestVersion, setLatestVersion] = useState('');
  const [latestReleaseDate, setLatestReleaseDate] = useState('');

  useEffect(() => {
    fetchReleaseManifest().then(manifest => {
      setVersionHistory(getProjectVersionHistory(manifest, 'pdf-reader'));
      setLatestVersion(getLatestVersion(manifest, 'pdf-reader'));
      setLatestReleaseDate(getLatestReleaseDate(manifest, 'pdf-reader'));
    });
  }, []);
  const features = [
    { title: currentLanguage === 'zh' ? 'OCR 文档识别' : currentLanguage === 'nl' ? 'OCR-documentherkenning' : 'OCR Document Reading', body: currentLanguage === 'zh' ? '读取扫描版 PDF，把图片中的文字转换成可复制、可处理的结构化内容。' : currentLanguage === 'nl' ? 'Leest gescande PDF-bestanden en zet tekst in afbeeldingen om naar bruikbare gestructureerde inhoud.' : 'Reads scanned PDFs and turns text inside images into copyable, structured content.', icon: <ScanText size={22} /> },
    { title: currentLanguage === 'zh' ? '文本与表格提取' : currentLanguage === 'nl' ? 'Tekst- en tabel-extractie' : 'Text and Table Extraction', body: currentLanguage === 'zh' ? '从结构化 PDF 中提取文本、表格和业务字段，减少重复复制粘贴。' : currentLanguage === 'nl' ? 'Extraheert tekst, tabellen en bedrijfsvelden uit gestructureerde PDF-documenten.' : 'Extracts text, tables, and business fields from structured PDFs to reduce repetitive copy-paste work.', icon: <Table2 size={22} /> },
    { title: currentLanguage === 'zh' ? '坐标感知解析' : currentLanguage === 'nl' ? 'Coördinaatbewuste parsing' : 'Coordinate-Aware Parsing', body: currentLanguage === 'zh' ? '通过页面坐标定位关键字段，适合发票、表单和固定格式文档。' : currentLanguage === 'nl' ? 'Gebruikt paginacoördinaten om belangrijke velden te vinden in facturen, formulieren en vaste layouts.' : 'Uses page coordinates to capture key fields in invoices, forms, and fixed-layout documents.', icon: <Layers size={22} /> },
    { title: currentLanguage === 'zh' ? '多模式处理' : currentLanguage === 'nl' ? 'Meerdere verwerkingsmodi' : 'Multiple Processing Modes', body: currentLanguage === 'zh' ? '根据不同 PDF 类型切换解析模式，让文档处理像选择工具一样清晰。' : currentLanguage === 'nl' ? 'Schakelt tussen extractiemodi voor verschillende PDF-typen en workflows.' : 'Switch between extraction modes for different PDF shapes and document workflows.', icon: <FileSearch size={22} /> },
    { title: currentLanguage === 'zh' ? '导出友好结果' : currentLanguage === 'nl' ? 'Exportvriendelijke resultaten' : 'Export-Friendly Output', body: currentLanguage === 'zh' ? '将提取结果整理为适合复制、CSV 或后续表格处理的干净数据。' : currentLanguage === 'nl' ? 'Maakt nette output voor kopiëren, CSV-export en verdere spreadsheetverwerking.' : 'Prepares clean results for copying, CSV export, and downstream spreadsheet work.', icon: <Download size={22} /> },
    { title: currentLanguage === 'zh' ? '隐私优先边界' : currentLanguage === 'nl' ? 'Privacy-first grens' : 'Privacy-First Boundary', body: currentLanguage === 'zh' ? '上传校验、临时文件清理和私有 API 边界是系统设计的一部分。' : currentLanguage === 'nl' ? 'Uploadvalidatie, tijdelijke bestandsopschoning en private API-grenzen horen bij het ontwerp.' : 'Upload validation, temporary-file cleanup, and private API boundaries are part of the design.', icon: <ShieldCheck size={22} /> },
  ];
  const installSteps = [
    currentLanguage === 'zh' ? '下载安装程序' : currentLanguage === 'nl' ? 'Download de installer' : 'Download the installer',
    currentLanguage === 'zh' ? '运行本地应用或打开 Web 入口' : currentLanguage === 'nl' ? 'Start de lokale app of open de webingang' : 'Run the local app or open the web entry',
    currentLanguage === 'zh' ? '上传 PDF 并选择解析模式' : currentLanguage === 'nl' ? 'Upload een PDF en kies een extractiemodus' : 'Upload a PDF and choose an extraction mode',
    currentLanguage === 'zh' ? '查看、复制或导出结果' : currentLanguage === 'nl' ? 'Bekijk, kopieer of exporteer resultaten' : 'Review, copy, or export results',
  ];
  const privacyItems = [
    { title: currentLanguage === 'zh' ? '文件校验' : currentLanguage === 'nl' ? 'Bestandsvalidatie' : 'File Validation', body: currentLanguage === 'zh' ? 'PDF 进入识别流程前应经过类型、大小和模式校验。' : currentLanguage === 'nl' ? 'PDF-bestanden worden gevalideerd op type, grootte en modus voordat extractie start.' : 'PDFs should be validated by type, size, and mode before processing begins.' },
    { title: currentLanguage === 'zh' ? '临时处理' : currentLanguage === 'nl' ? 'Tijdelijke verwerking' : 'Temporary Processing', body: currentLanguage === 'zh' ? '解析产物和临时文件应围绕任务生命周期进行清理。' : currentLanguage === 'nl' ? 'Afgeleide uitvoer en tijdelijke bestanden horen bij de taaklevenscyclus te worden opgeschoond.' : 'Derived output and temporary files should be cleaned around the job lifecycle.' },
    { title: currentLanguage === 'zh' ? '私有 API' : currentLanguage === 'nl' ? 'Private API' : 'Private API', body: currentLanguage === 'zh' ? '较重的 OCR 与解析能力应留在受控 API 边界之后。' : currentLanguage === 'nl' ? 'Zwaardere OCR- en parsinglogica blijft achter gecontroleerde API-grenzen.' : 'Heavier OCR and parsing logic stays behind controlled API boundaries.' },
  ];
  const version = latestVersion || project.releaseAssets[0]?.version || 'v1.2.3';
  const releaseDate = latestReleaseDate || project.releaseAssets[0]?.releaseDate || '2026-05-11';

  return (
    <>
      <section className="section-shell pdf-showcase-hero">
        <div className="pdf-showcase-hero__inner">
          <div className="pdf-showcase-hero__content">
            <h1 className="pdf-showcase-hero__title">PDF <span>Reader</span></h1>
            <p className="pdf-showcase-hero__description">
              {currentLanguage === 'zh' ? '一个面向文档密集型工作流的 PDF 分析工具，聚焦 OCR、文本表格提取、坐标感知解析和隐私优先的处理边界。它不只是打开 PDF，而是把文档里的信息像整理文件柜一样变成可处理的数据。' : currentLanguage === 'nl' ? 'Een PDF-analysetool voor documentintensieve workflows met OCR, tekst- en tabelextractie, coördinaatbewuste parsing en privacy-first verwerking.' : 'A PDF analysis tool for document-heavy workflows, focused on OCR, text and table extraction, coordinate-aware parsing, and privacy-first processing boundaries.'}
            </p>
            <div className="pdf-showcase-hero__actions">
              <a href="#pdf-download" className={`${neoButtonClass('primary')} pdf-showcase-button pdf-showcase-button--primary`}><Download size={18} />{currentLanguage === 'zh' ? '立即下载' : currentLanguage === 'nl' ? 'Download nu' : 'Download Now'}</a>
              <a href="#" className={`${neoButtonClass('secondary')} pdf-showcase-button`}><Globe size={18} />{currentLanguage === 'zh' ? '查看web端应用' : currentLanguage === 'nl' ? 'Bekijk webapp' : 'View Web App'}</a>
              <a href="https://github.com/HarryHongyue/PDF-Reader" className={`${neoButtonClass('secondary')} pdf-showcase-button`} target="_blank" rel="noreferrer"><GithubIcon size={18} />{currentLanguage === 'zh' ? '了解更多' : currentLanguage === 'nl' ? 'Meer informatie' : 'Learn More'}</a>
            </div>
          </div>
          <div className="pdf-showcase-hero__visual" aria-hidden="true">
            <img src={pdfReaderScreenshot} alt="PDF Reader Application" className="pdf-showcase-hero__screenshot" />
          </div>
        </div>
      </section>

      <section className="section-shell pdf-showcase-section">
        <h2 className="pdf-showcase-section__title">{currentLanguage === 'zh' ? '功能特点' : currentLanguage === 'nl' ? 'Functies' : 'Features'}</h2>
        <div className="pdf-showcase-feature-grid">
          {features.map((feature) => (
            <NeoCard key={feature.title} hoverable className="pdf-showcase-feature-card">
              <div className="pdf-showcase-feature-card__icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </NeoCard>
          ))}
        </div>
      </section>

      <section id="pdf-download" className="section-shell pdf-showcase-section">
        <h2 className="pdf-showcase-section__title">{currentLanguage === 'zh' ? '下载' : currentLanguage === 'nl' ? 'Download' : 'Download'}</h2>
        <p className="pdf-showcase-section__subtitle">{currentLanguage === 'zh' ? '只需几步即可开始使用 PDF Reader。适用于 Windows 和 macOS。' : currentLanguage === 'nl' ? 'Begin met PDF Reader in slechts enkele stappen. Beschikbaar voor Windows en macOS.' : 'Get started with PDF Reader in just a few steps. Available for Windows and macOS.'}</p>
        <NeoCard className="pdf-showcase-download-card">
          <div className="pdf-showcase-download-card__main">
            <a href="/downloads" className={`${neoButtonClass('primary')} pdf-showcase-download-button`}><Download size={24} />{currentLanguage === 'zh' ? 'Windows版下载' : currentLanguage === 'nl' ? 'Download voor Windows' : 'Download for Windows'}</a>
            <p>{currentLanguage === 'zh' ? `版本 ${version} | 稳定版` : currentLanguage === 'nl' ? `Versie ${version} | Stabiele versie` : `Version ${version} | Stable Version`}</p>
          </div>
          <div className="pdf-showcase-install">
            <h3>{currentLanguage === 'zh' ? '使用说明' : currentLanguage === 'nl' ? 'Gebruiksinstructies' : 'Usage Instructions'}</h3>
            <div className="pdf-showcase-install__grid">
              {installSteps.map((step, index) => (
                <NeoCard key={step} variant="inset" className="pdf-showcase-install-step">
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </NeoCard>
              ))}
            </div>
          </div>
        </NeoCard>
      </section>

      <section className="section-shell pdf-showcase-section">
        <h2 className="pdf-showcase-section__title">{currentLanguage === 'zh' ? '版本更新' : currentLanguage === 'nl' ? 'Versie-updates' : 'Version Updates'}</h2>
        <NeoCard className="pdf-showcase-updates-card">
          <div className="pdf-showcase-updates-card__current">
            <h3>{currentLanguage === 'zh' ? '当前版本' : currentLanguage === 'nl' ? 'Huidige versie' : 'Current Version'}: <span>{version}</span></h3>
          </div>
          <div className="pdf-showcase-version-list">
            <div className="pdf-showcase-version">
              <div className="pdf-showcase-version__header">
                <h4>{currentLanguage === 'zh' ? '版本' : currentLanguage === 'nl' ? 'Versie' : 'Version'} {version}</h4>
                <span>{currentLanguage === 'zh' ? `发布日期 ${releaseDate}` : currentLanguage === 'nl' ? `Uitgebracht op ${releaseDate}` : `Released on ${releaseDate}`}</span>
              </div>
              <ul className="pdf-showcase-version__changes">
                {versionHistory[0]?.changes.map((change: string) => <li key={change}>{change}</li>)}
              </ul>
            </div>
          </div>
        </NeoCard>
      </section>

      <section className="section-shell pdf-showcase-section">
        <h2 className="pdf-showcase-section__title">{currentLanguage === 'zh' ? '技术栈' : currentLanguage === 'nl' ? 'Tech Stack' : 'Tech Stack'}</h2>
        <NeoCard className="pdf-showcase-tech-card">
          <ProjectTechStackCards techStackIds={project.techStackIds} locale={currentLanguage} />
        </NeoCard>
      </section>

      <section className="section-shell pdf-showcase-section pdf-showcase-privacy">
        <div className="pdf-showcase-privacy__heading">
          <ShieldCheck size={46} />
          <h2 className="pdf-showcase-section__title">{currentLanguage === 'zh' ? '隐私政策' : currentLanguage === 'nl' ? 'Privacybeleid' : 'Privacy Policy'}</h2>
          <p>{currentLanguage === 'zh' ? 'PDF Reader 的设计重点是让文档处理能力保持在清晰、可控的边界内。' : currentLanguage === 'nl' ? 'PDF Reader is ontworpen om documentverwerking binnen duidelijke en controleerbare grenzen te houden.' : 'PDF Reader is designed to keep document processing inside clear and controlled boundaries.'}</p>
        </div>
        <NeoCard variant="inset" className="pdf-showcase-privacy-card">
          <div className="pdf-showcase-privacy-grid">
            {privacyItems.map((item) => (
              <div key={item.title} className="pdf-showcase-privacy-item">
                <ShieldCheck size={30} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <div className="pdf-showcase-privacy-note">
            <p><strong>{currentLanguage === 'zh' ? 'PDF Reader 不应把文档内容暴露给不受控的公网处理链路。上传、OCR、解析和临时文件清理都应留在明确的产品边界内。' : currentLanguage === 'nl' ? 'PDF Reader hoort documentinhoud niet bloot te stellen aan ongecontroleerde publieke verwerkingsketens. Upload, OCR, parsing en tijdelijke opschoning blijven binnen duidelijke productgrenzen.' : 'PDF Reader should not expose document content to uncontrolled public processing pipelines. Upload, OCR, parsing, and temporary cleanup stay within clear product boundaries.'}</strong></p>
            <p>{currentLanguage === 'zh' ? '所有识别结果都围绕当前处理任务使用，适合后续复制、导出或进入内部工作流。' : currentLanguage === 'nl' ? 'Extractieresultaten worden rond de huidige taak gebruikt voor kopiëren, export of interne workflows.' : 'Extraction results are used around the current processing task for copying, export, or internal workflows.'}</p>
            <p>{currentLanguage === 'zh' ? '最后更新' : currentLanguage === 'nl' ? 'Laatst bijgewerkt' : 'Last updated'}: {new Date().toLocaleDateString()}</p>
          </div>
        </NeoCard>
      </section>
    </>
  );
};

export default PdfReaderShowcase;
