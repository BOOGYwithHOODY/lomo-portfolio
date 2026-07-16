import { useEffect } from 'react';
import Lenis from 'lenis';

// Module-level singleton so ScrollToTop (and anything else) can command
// the same instance that drives the page.
let lenis = null;

export function getLenis() {
  return lenis;
}

// Jump to top instantly (used on route change).
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true });
  else window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
}

export default function useLenis() {
  useEffect(() => {
    // Respect reduced-motion users and skip smoothing entirely.
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return undefined;

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    // Handy for debugging and external tooling.
    window.lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenis = null;
    };
  }, []);
}
