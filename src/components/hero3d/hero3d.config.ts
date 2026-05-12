export const HERO3D_COLORS = {
  cyan: '#65d6ff',
  teal: '#46f0d4',
  blue: '#6878ff',
  navy: '#07111f',
  graphite: '#111827',
  panel: 'rgba(10, 20, 35, 0.72)',
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
