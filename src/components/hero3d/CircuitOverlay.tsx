import React from 'react';

interface CircuitOverlayProps {
  reducedMotion?: boolean;
}

const CircuitOverlay: React.FC<CircuitOverlayProps> = ({ reducedMotion = false }) => (
  <svg className={`circuit-overlay ${reducedMotion ? 'is-static' : ''}`} viewBox="0 0 900 640" aria-hidden="true" focusable="false">
    <defs>
      <filter id="hero3dCircuitGlow">
        <feGaussianBlur stdDeviation="3.5" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <linearGradient id="hero3dCircuitStroke" x1="0" x2="1">
        <stop offset="0%" stopColor="rgba(122, 128, 226, 0.10)" />
        <stop offset="48%" stopColor="rgba(164, 166, 255, 0.72)" />
        <stop offset="100%" stopColor="rgba(122, 128, 226, 0.20)" />
      </linearGradient>
    </defs>

    <g className="circuit-lines" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M76 489 H184 L226 441 H352" />
      <path d="M112 173 H252 L314 111 H435 L514 154 H655 L712 103 H835" />
      <path d="M596 486 H697 L758 423 H872" />
      <path d="M456 332 H553 L612 273 H784" />
      <path d="M229 309 H330 L391 246 H515" />
      <path d="M702 178 L758 228 H846" />
      <path d="M164 555 H316 L377 494" />
      <path d="M42 251 H153 L203 289" />
    </g>

    <g filter="url(#hero3dCircuitGlow)">
      {[
        [76, 489],
        [184, 489],
        [352, 441],
        [112, 173],
        [314, 111],
        [514, 154],
        [712, 103],
        [835, 103],
        [596, 486],
        [758, 423],
        [872, 423],
        [456, 332],
        [612, 273],
        [784, 273],
        [229, 309],
        [42, 251],
        [164, 555],
        [377, 494],
      ].map(([cx, cy], index) => (
        <circle key={`${cx}-${cy}`} className={`circuit-node circuit-node--${index % 4}`} cx={cx} cy={cy} r={index % 3 === 0 ? 5 : 3.7} />
      ))}
    </g>
  </svg>
);

export default CircuitOverlay;
