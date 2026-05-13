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
const VIEWBOX_HEIGHT = 1040;

const RAIL_PATH_D = `M 80 78 H 1320 Q 1410 78 1410 168 V 238 Q 1410 328 1320 328 H 120 Q 30 328 30 418 V 488 Q 30 578 120 578 H 1320 Q 1410 578 1410 668 V 738 Q 1410 828 1320 828 H 720 H 320 Q 230 828 230 918 V 920`;

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
    id: 'h5-pages',
    year: '2021',
    title: 'H5 Page Development',
    description: 'Started with H5 pages, semantic structure, responsive layouts, and interactive browser UI basics.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    icon: 'monitor',
    card: { x: 80, y: 115, w: 370, h: 170 },
    station: { x: 230, y: 78 },
    pathProgress: 0.06,
  },
  {
    id: 'wordpress',
    year: '2021',
    title: 'WordPress Practice',
    description: 'Used and customized WordPress sites, themes, plugins, hosting, pages, and content structure.',
    tech: ['WordPress', 'Themes', 'Plugins', 'Hosting'],
    icon: 'wordpress',
    card: { x: 535, y: 115, w: 370, h: 170 },
    station: { x: 720, y: 78 },
    pathProgress: 0.18,
  },
  {
    id: 'java',
    year: '2024',
    title: 'Java Learning',
    description: 'Studied Java fundamentals, object-oriented design, Maven workflows, and desktop project structure.',
    tech: ['Java', 'OOP', 'Maven', 'JavaFX'],
    icon: 'java',
    card: { x: 990, y: 115, w: 370, h: 170 },
    station: { x: 1210, y: 78 },
    pathProgress: 0.30,
  },
  {
    id: 'python',
    year: '2024',
    title: 'Python Learning',
    description: 'Built Python scripts and small utilities for automation, parsing, APIs, and practical workflows.',
    tech: ['Python', 'Automation', 'APIs', 'Utilities'],
    icon: 'python',
    card: { x: 990, y: 365, w: 370, h: 170 },
    station: { x: 1210, y: 328 },
    pathProgress: 0.42,
  },
  {
    id: 'independent-projects',
    year: '2024',
    title: 'Independent Projects',
    description: 'Moved from exercises into complete personal projects with clearer structure and delivery goals.',
    tech: ['Project Design', 'Frontend', 'Backend', 'Release'],
    icon: 'layers',
    card: { x: 535, y: 365, w: 370, h: 170 },
    station: { x: 720, y: 328 },
    pathProgress: 0.52,
  },
  {
    id: 'typescript',
    year: '2025',
    title: 'TypeScript Systems',
    description: 'Used TypeScript to make larger projects safer, easier to refactor, and more maintainable.',
    tech: ['TypeScript', 'React', 'Vite', 'Architecture'],
    icon: 'cube',
    card: { x: 80, y: 365, w: 370, h: 170 },
    station: { x: 230, y: 328 },
    pathProgress: 0.62,
  },
  {
    id: 'docker-maven',
    year: '2025',
    title: 'Docker & Maven',
    description: 'Packaged services and Java projects with containers, Maven builds, and repeatable deployment steps.',
    tech: ['Docker', 'Maven', 'Builds', 'Deployment'],
    icon: 'cloud',
    card: { x: 80, y: 615, w: 370, h: 170 },
    station: { x: 230, y: 578 },
    pathProgress: 0.72,
  },
  {
    id: 'sql-graph-theory',
    year: '2025',
    title: 'SQL & Graph Theory',
    description: 'Deepened database thinking, SQL modeling, query structure, and graph algorithm foundations.',
    tech: ['SQL', 'Databases', 'Graphs', 'Algorithms'],
    icon: 'database',
    card: { x: 535, y: 615, w: 370, h: 170 },
    station: { x: 720, y: 578 },
    pathProgress: 0.82,
  },
  {
    id: 'ai-foundations',
    year: '2026',
    title: 'AI Foundations',
    description: 'Focused on AI learning, Transformer concepts, model workflows, and intelligent application patterns.',
    tech: ['Transformer', 'LLMs', 'RAG', 'Prompting'],
    icon: 'brain',
    card: { x: 990, y: 615, w: 370, h: 170 },
    station: { x: 1210, y: 578 },
    pathProgress: 0.92,
  },
  {
    id: 'future',
    year: 'Future',
    title: 'AI Interaction Systems',
    description: 'Continue building practical systems where AI, interaction design, and engineering foundations work together.',
    tech: ['AI Agents', 'Interaction', 'Full Stack', 'Platform Design'],
    icon: 'flag',
    card: { x: 350, y: 865, w: 740, h: 145 },
    station: { x: 720, y: 828 },
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
    train: { x: 120, y: 78, angle: 0 },
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
  const trainGlowLength = 86;
  const trainGlowOffset = -(progress * totalLength - trainGlowLength / 2);

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
                    values="0 0 0 0 0.64 0 0 0 0 0.65 0 0 0 0 1 0 0 0 0.9 0"
                  />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="railGradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#A4A6FF" />
                  <stop offset="46%" stopColor="#7A80E2" />
                  <stop offset="72%" stopColor="#525EB9" />
                  <stop offset="100%" stopColor="#CACEEF" />
                </linearGradient>
              </defs>

              <path className="journey-rail-path journey-rail-path--shadow" d={RAIL_PATH_D} />
              <path ref={basePathRef} id="journeyRailPath" className="journey-rail-path journey-rail-path--base" d={RAIL_PATH_D} />
              <path className="journey-rail-path journey-rail-path--glow" d={RAIL_PATH_D} />
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
                    className={`journey-card ${milestone.id === 'future' ? 'journey-card--future' : ''} ${
                      isActive ? 'is-active' : ''
                    } ${isPassed ? 'is-passed' : ''}`}
                    style={cardStyle}
                  >
                    <div className="journey-card__icon" aria-hidden="true">
                      <Icon size={28} strokeWidth={1.8} />
                    </div>
                    <div className="journey-card__content">
                      <div className="journey-card__body">
                        <span className="journey-card__year">{milestone.year}</span>
                        <h3>{milestone.title}</h3>
                        <p className="journey-card__description">{milestone.description}</p>
                      </div>
                      <div className="journey-card__chips" aria-label={`${milestone.year} technologies`}>
                        {milestone.tech.map((tech) => (
                          <span className="journey-card__chip" key={tech}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <svg className="journey-rail-overlay-svg" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="trainGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#1ff6ff" />
                  <stop offset="58%" stopColor="#3b8cff" />
                  <stop offset="100%" stopColor="#8d70ff" />
                </linearGradient>
              </defs>
              <path
                className="journey-rail-path journey-rail-path--progress"
                d={RAIL_PATH_D}
                style={{
                  strokeDasharray: `${trainGlowLength} ${Math.max(totalLength, 1)}`,
                  strokeDashoffset: trainGlowOffset,
                }}
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
                <path
                  className="journey-train__nose"
                  d="M -46 0 C -38 -16 -18 -22 10 -18 L 36 -12 C 46 -9 52 -4 54 0 C 52 4 46 9 36 12 L 10 18 C -18 22 -38 16 -46 0 Z"
                />
                <path className="journey-train__stripe" d="M -20 -11 H 30 C 37 -11 43 -7 46 -2 H -27 C -25 -6 -23 -9 -20 -11 Z" />
                <rect x="-18" y="-7" width="11" height="8" rx="3" className="journey-train__window" />
                <rect x="-3" y="-8" width="12" height="9" rx="3" className="journey-train__window" />
                <rect x="13" y="-7" width="12" height="8" rx="3" className="journey-train__window" />
                <path className="journey-train__shadow" d="M -32 12 H 25" />
                <circle cx="50" cy="0" r="5" className="journey-train__lamp" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourneyRailMap;
