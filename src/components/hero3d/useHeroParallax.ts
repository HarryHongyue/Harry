import { MutableRefObject, RefObject, useEffect, useMemo, useRef, useState } from 'react';

export interface HeroParallaxValue {
  x: number;
  y: number;
}

export interface HeroParallaxApi {
  containerRef: RefObject<HTMLDivElement>;
  parallax: MutableRefObject<HeroParallaxValue>;
  style: {
    '--hero-parallax-x': string;
    '--hero-parallax-y': string;
    '--hero-scroll-y': string;
  };
  prefersReducedMotion: boolean;
}

export function useHeroParallax(disabled = false): HeroParallaxApi {
  const containerRef = useRef<HTMLDivElement>(null);
  const parallax = useRef<HeroParallaxValue>({ x: 0, y: 0 });
  const target = useRef<HeroParallaxValue>({ x: 0, y: 0 });
  const frame = useRef<number>();
  const [styleValue, setStyleValue] = useState({ x: 0, y: 0, scroll: 0 });
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(media.matches);

    updatePreference();
    media.addEventListener('change', updatePreference);
    return () => media.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || disabled || prefersReducedMotion) {
      target.current = { x: 0, y: 0 };
      parallax.current = { x: 0, y: 0 };
      setStyleValue({ x: 0, y: 0, scroll: 0 });
      return undefined;
    }

    const animate = () => {
      parallax.current.x += (target.current.x - parallax.current.x) * 0.1;
      parallax.current.y += (target.current.y - parallax.current.y) * 0.1;
      setStyleValue((current) => ({ ...current, ...parallax.current }));
      frame.current = window.requestAnimationFrame(animate);
    };

    const handleMove = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

      target.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    };

    const handleLeave = () => {
      target.current = { x: 0, y: 0 };
    };

    element.addEventListener('mousemove', handleMove);
    element.addEventListener('mouseleave', handleLeave);
    frame.current = window.requestAnimationFrame(animate);

    return () => {
      element.removeEventListener('mousemove', handleMove);
      element.removeEventListener('mouseleave', handleLeave);
      if (frame.current) {
        window.cancelAnimationFrame(frame.current);
      }
    };
  }, [disabled, prefersReducedMotion]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element || disabled || prefersReducedMotion) {
      setStyleValue((current) => ({ ...current, scroll: 0 }));
      return undefined;
    }

    let scrollFrame: number | undefined;
    const handleScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight || 1;
        const progress = Math.max(-1, Math.min(1, (viewportHeight * 0.5 - (rect.top + rect.height * 0.5)) / viewportHeight));
        setStyleValue((current) => ({ ...current, scroll: progress }));
        scrollFrame = undefined;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame);
      }
    };
  }, [disabled, prefersReducedMotion]);

  const style = useMemo(
    () => ({
      '--hero-parallax-x': styleValue.x.toFixed(4),
      '--hero-parallax-y': styleValue.y.toFixed(4),
      '--hero-scroll-y': styleValue.scroll.toFixed(4),
    }),
    [styleValue],
  );

  return { containerRef, parallax, style, prefersReducedMotion };
}
