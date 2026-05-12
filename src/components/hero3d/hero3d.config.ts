export const HERO3D_COLORS = {
  cyan: '#A4A6FF',
  teal: '#CACEEF',
  blue: '#7A80E2',
  navy: '#263D91',
  graphite: '#414BA3',
  panel: 'rgba(38, 61, 145, 0.72)',
};

export const HERO3D_INTENSITY = {
  low: {
    glow: 0.68,
    motion: 0.55,
  },
  medium: {
    glow: 1,
    motion: 1,
  },
  high: {
    glow: 1.24,
    motion: 1.18,
  },
} as const;

export type Hero3DIntensity = keyof typeof HERO3D_INTENSITY;
