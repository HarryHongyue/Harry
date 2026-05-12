import React, { useEffect, useMemo, useRef, useState, useLayoutEffect, useCallback } from 'react';
import {
  Brain,
  Cloud,
  Code2,
  Cuboid,
  Database,
  Flag,
  Layers3,
  Monitor,
  PanelsTopLeft,
  TerminalSquare,
} from 'lucide-react';
import './MyJourneyRailMap.css';

const VIEWBOX_WIDTH = 1440;
const VIEWBOX_HEIGHT = 880;

const RAIL_PATH_D = `M 120 62 H 1285 Q 1375 62 1375 152 V 222 Q 1375 302 1295 302 H 145 Q 65 302 65 382 V 462 Q 65 542 145 542 H 1295 Q 1375 542 1375 622 V 725 Q 1375 812 1288 812 H 720`;

type JourneyIconName =
  | 'wordpress'
  | 'monitor'
  | 'java'
  | 'python'
  | 'database'
  | 'layers'
  | 'cloud'
  | 'cube'
  | 'brain'
  | 'flag';

interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
  tech: string[];
  icon: JourneyIconName;
  card: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  station: {
    x: number;
    y: number;
  };
  pathProgress: number;
}

const milestoneIcons = {
  wordpress: PanelsTopLeft,
  monitor: Monitor,
  java: Code2,
  python: TerminalSquare,
  database: Database,
  layers: Layers3,
  cloud: Cloud,
  cube: Cuboid,
  brain: Brain,
  flag: Flag,
};

const journeyMilestones: JourneyMilestone[] = [
  {
    id: 'wordpress',
    year: '2014',
    title: 'WordPress Foundations',
    description: 'Built early websites with WordPress, themes, plugins, hosting, domains, and content structure.',
    tech: ['WordPress', 'HTML', 'CSS', 'cPanel'],
    icon: 'wordpress',
    card: { x: 45, y: 95, w: 365, h: 155 },
    station: { x: 225, y: 62 },
    pathProgress: 0.06,
  },
  {
    id: 'frontend',
    year: '2016',
    title: 'Frontend Curiosity',
    description: 'Explored how web pages really work and learned responsive UI design.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    icon: 'monitor',
    card: { x: 535, y: 95, w: 365, h: 155 },
    station: { x: 718, y: 62 },
    pathProgress: 0.18,
  },
  {
    id: 'java',
    year: '2018',
    title: 'Java Programming',
    description: 'Learned Java concepts, OOP, data structures, and desktop application fundamentals.',
    tech: ['Java', 'OOP', 'Maven', 'JavaFX'],
    icon: 'java',
    card: { x: 1025, y: 95, w: 365, h: 155 },
    station: { x: 1208, y: 62 },
    pathProgress: 0.30,
  },
  {
    id: 'fullstack',
    year: '2021',
    title: 'Full-Stack Growth',
    description: 'Connected frontend, backend, and databases into complete real-world applications.',
    tech: ['Node.js', 'Express', 'REST API', 'React'],
    icon: 'layers',
    card: { x: 1025, y: 335, w: 365, h: 155 },
    station: { x: 1208, y: 302 },
    pathProgress: 0.42,
  },
  {
    id: 'database',
    year: '2020',
    title: 'Database Thinking',
    description: 'Learned data modeling, SQL queries, persistence, schema design, and optimization.',
    tech: ['MySQL', 'PostgreSQL', 'SQL', 'Schema Design'],
    icon: 'database',
    card: { x: 535, y: 335, w: 365, h: 155 },
    station: { x: 718, y: 302 },
    pathProgress: 0.52,
  },
  {
    id: 'python',
    year: '2019',
    title: 'Python Exploration',
    description: 'Discovered Python scripting, automation, backend utilities, and data processing.',
    tech: ['Python', 'Flask', 'Automation', 'APIs'],
    icon: 'python',
    card: { x: 45, y: 335, w: 365, h: 155 },
    station: { x: 225, y: 302 },
    pathProgress: 0.62,
  },
  {
    id: 'cloud',
    year: '2022',
    title: 'Cloud & Deployment',
    description: 'Deployed apps on Linux servers using reverse proxies, containers, CI/CD, and cloud infrastructure.',
    tech: ['Ubuntu', 'Nginx', 'Docker', 'Oracle Cloud'],
    icon: 'cloud',
    card: { x: 45, y: 575, w: 365, h: 155 },
    station: { x: 225, y: 542 },
    pathProgress: 0.72,
  },
  {
    id: 'product',
    year: '2023',
    title: 'Product Engineering',
    description: 'Focused on architecture, maintainability, testing, modular systems, and product thinking.',
    tech: ['TypeScript', 'Next.js', 'Tailwind', 'Architecture'],
    icon: 'cube',
    card: { x: 535, y: 575, w: 365, h: 155 },
    station: { x: 718, y: 542 },
    pathProgress: 0.82,
  },
  {
    id: 'ai',
    year: '2024',
    title: 'AI & LLM Era',
    description: 'Built with AI tools, prompt workflows, model integration, and intelligent applications.',
    tech: ['LLMs', 'OpenAI API', 'RAG', 'Prompt Engineering'],
    icon: 'brain',
    card: { x: 1025, y: 575, w: 365, h: 155 },
    station: { x: 1208, y: 542 },
    pathProgress: 0.92,
  },
  {
    id: 'future',
    year: 'Future',
    title: 'Intelligent Systems',
    description: 'Continue building practical, secure, scalable systems powered by AI and strong engineering foundations.',
    tech: ['AI Agents', 'Full Stack', 'Security', 'Platform Design'],
    icon: 'flag',
    card: { x: 420, y: 765, w: 600, h: 105 },
    station: { x: 720, y: 812 },
    pathProgress: 1,
  },
];

const clamp = (value: number, min = 0, max = 1) => Math.min(max, Math.max(min, value));

const getReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function useRailScrollProgress(
  sectionRef: React.RefObject<HTMLElement>,
  pathRef: React.RefObject<SVGPathElement>,
) {
  const [state, setState] = useState({
    progress: 0,
    activeIndex: 0,
    train: { x: 120, y: 62, angle: 0 },
    totalLength: 0,
  });
  const reducedMotion = useMemo(getReducedMotion, []);
  
  const metricsRef = useRef({
    startScrollY: 0,
    endScrollY: 1,
  });

  const calculateMetrics = useCallback(() => {
    const section = sectionRef.current;
    if (!section) return;

    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;

    const triggerY = viewportHeight * 0.33;
    const startScrollY = sectionTop - triggerY;
    const endScrollY = sectionTop + sectionHeight - viewportHeight * 0.75;

    metricsRef.current = {
      startScrollY,
      endScrollY: Math.max(startScrollY + 1, endScrollY),
    };
  }, [sectionRef]);

  const update = useCallback(() => {
    const path = pathRef.current;
    if (!path) return;

    const { startScrollY, endScrollY } = metricsRef.current;
    const scrollY = window.scrollY;
    const maxScrollY = document.documentElement.scrollHeight - window.innerHeight;

    let progress = clamp(
      (scrollY - startScrollY) / Math.max(1, endScrollY - startScrollY),
      0,
      1
    );

    if (scrollY >= maxScrollY - 4) {
      progress = 1;
    }

    if (reducedMotion) {
      progress = 1;
    }

    const totalLength = path.getTotalLength();
    const length = progress * totalLength;
    const point = path.getPointAtLength(length);
    const nextPoint = path.getPointAtLength(Math.min(length + 6, totalLength));
    const prevPoint = path.getPointAtLength(Math.max(length - 6, 0));

    const angle =
      progress >= 0.999
        ? (Math.atan2(point.y - prevPoint.y, point.x - prevPoint.x) * 180) / Math.PI
        : (Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180) / Math.PI;

    let activeIndex = 0;
    let minDistance = Infinity;
    journeyMilestones.forEach((milestone, index) => {
      const distance = Math.abs(progress - milestone.pathProgress);
      if (distance < minDistance) {
        minDistance = distance;
        activeIndex = index;
      }
    });

    setState({
      progress,
      activeIndex,
      train: { x: point.x, y: point.y, angle },
      totalLength,
    });
  }, [pathRef, reducedMotion]);

  useLayoutEffect(() => {
    calculateMetrics();
    update();

    let rafId = 0;

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(update);
    };

    const onResize = () => {
      calculateMetrics();
      update();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    const resizeObserver = new ResizeObserver(() => {
      calculateMetrics();
      update();
    });

    if (sectionRef.current) resizeObserver.observe(sectionRef.current);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      resizeObserver.disconnect();
    };
  }, [calculateMetrics, update]);

  return { ...state, reducedMotion };
}

export const MyJourneyRailMap: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const basePathRef = useRef<SVGPathElement>(null);
  const { progress, train, activeIndex, totalLength, reducedMotion } = useRailScrollProgress(sectionRef, basePathRef);
  const progressOffset = totalLength * (1 - progress);

  return (
    <section ref={sectionRef} className="journey-section" aria-label="My Journey rail map">
      <div className="journey-shell">
        <div className="journey-map-frame">
          <div className="journey-map-canvas">
            <svg className="journey-rail-base-svg" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <filter id="railGlow" x="-20%" y="-40%" width="140%" height="180%">
                  <feGaussianBlur stdDeviation="7" result="blur" />
                  <feColorMatrix
                    in="blur"
                    type="matrix"
                    values="0 0 0 0 0.05 0 0 0 0 0.82 0 0 0 0 1 0 0 0 0.9 0"
                  />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="railGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#19f7ff" />
                  <stop offset="46%" stopColor="#3c8dff" />
                  <stop offset="72%" stopColor="#7b5cff" />
                  <stop offset="100%" stopColor="#20f0c8" />
                </linearGradient>
                <linearGradient id="trainGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1ff6ff" />
                  <stop offset="58%" stopColor="#3b8cff" />
                  <stop offset="100%" stopColor="#8d70ff" />
                </linearGradient>
              </defs>

              <path className="journey-rail-path journey-rail-path--shadow" d={RAIL_PATH_D} />
              <path ref={basePathRef} id="journeyRailPath" className="journey-rail-path journey-rail-path--base" d={RAIL_PATH_D} />
              <path className="journey-rail-path journey-rail-path--dashes" d={RAIL_PATH_D} />
            </svg>

            <div className="journey-card-layer">
              {journeyMilestones.map((milestone, index) => {
                const Icon = milestoneIcons[milestone.icon];
                const isActive = index === activeIndex;
                const isPassed = reducedMotion || progress + 0.012 >= milestone.pathProgress;
                const milestoneKey = `${milestone.id}`;

                const cardStyle = {
                  left: `${(milestone.card.x / VIEWBOX_WIDTH) * 100}%`,
                  top: `${(milestone.card.y / VIEWBOX_HEIGHT) * 100}%`,
                  width: `${(milestone.card.w / VIEWBOX_WIDTH) * 100}%`,
                  height: `${(milestone.card.h / VIEWBOX_HEIGHT) * 100}%`,
                };

                return (
                  <article
                    key={milestoneKey}
                    className={`journey-card ${isActive ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                    style={cardStyle}
                  >
                    <div className="journey-card__icon" aria-hidden="true">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <div className="journey-card__content">
                      <div className="journey-card__body">
                        <span className="journey-card__year">{milestone.year}</span>
                        <h3>{milestone.title}</h3>
                        <p>{milestone.description}</p>
                      </div>
                      <div className="journey-card__chips" aria-label={`${milestone.year} technologies`}>
                        {milestone.tech.map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <svg className="journey-rail-overlay-svg" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
              <path
                className="journey-rail-path journey-rail-path--glow"
                d={RAIL_PATH_D}
              />
              <path
                className="journey-rail-path journey-rail-path--progress"
                d={RAIL_PATH_D}
                style={{ strokeDasharray: totalLength, strokeDashoffset: progressOffset }}
              />

              {journeyMilestones.map((milestone, index) => {
                const isPassed = progress + 0.012 >= milestone.pathProgress;
                const milestoneKey = `${milestone.id}`;
                return (
                  <g
                    key={`${milestoneKey}-station`}
                    className={`journey-station ${isPassed ? 'is-passed' : ''} ${index === activeIndex ? 'is-active' : ''}`}
                    transform={`translate(${milestone.station.x} ${milestone.station.y})`}
                  >
                    <circle r="17" className="journey-station__halo" />
                    <circle r="9" className="journey-station__ring" />
                    <circle r="4.5" className="journey-station__core" />
                  </g>
                );
              })}

              <g
                className="journey-train"
                transform={`translate(${train.x} ${train.y}) rotate(${train.angle})`}
              >
                <rect x="-33" y="-13" width="43" height="26" rx="10" fill="url(#trainGradient)" />
                <rect x="13" y="-10" width="25" height="20" rx="8" className="journey-train__car" />
                <rect x="-23" y="-7" width="10" height="8" rx="3" className="journey-train__window" />
                <rect x="-8" y="-7" width="10" height="8" rx="3" className="journey-train__window" />
                <circle cx="-22" cy="14" r="4" className="journey-train__wheel" />
                <circle cx="20" cy="13" r="3.5" className="journey-train__wheel" />
                <circle cx="-38" cy="0" r="6" className="journey-train__lamp" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourneyRailMap;
