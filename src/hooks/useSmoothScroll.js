import { useEffect } from 'react';
import Lenis from 'lenis';

const shouldUseSmoothScroll = () => {
  if (typeof window === 'undefined') return false;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;
  const isNarrow = window.matchMedia('(max-width: 768px)').matches;

  return !prefersReduced && !isCoarsePointer && !isNarrow;
};

export const useSmoothScroll = () => {
  useEffect(() => {
    if (!shouldUseSmoothScroll()) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);
};
