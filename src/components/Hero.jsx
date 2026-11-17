import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { PALMER_EASE } from '../hooks/animations';
import Magnetic from './motion/Magnetic';

// ─────────────────────────────────────────────────────────────────────────────
//  PINNED ZOOM HERO
//  A small media window sits between two display lines. Scrolling expands the
//  window to full bleed (clip-path inset → 0) while the headline exits upward
//  and the bottom aside fades. Scroll progress is spring-smoothed so motion
//  keeps settling briefly after the wheel stops.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {
  runwayVh: 190,                   // total scroll runway (vh) — shorter = faster zoom
  zoomEnd: 0.52,                   // progress where the mark reaches max scale
  textExitEnd: 0.36,               // progress where the headline finishes exiting
  textExitVh: -75,                 // headline travel while exiting (vh)
  scrollSpring: { stiffness: 80, damping: 24, mass: 0.5, restDelta: 0.001 },
  asideFade: [0.08, 0.26],         // progress range over which the aside fades
};

// Hero media aspect ratio (1600 × 872 source).
const MEDIA_AR = 1600 / 872;

// Media geometry: rest size (sits small between the headline lines) and the
// fitted end size — the largest that still fits the viewport once zoomed.
function markSizes() {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return {
    rest: Math.min(Math.max(150, vw * 0.17), 280),
    // width-limited on wide screens, height-limited on tall ones (~86vh cap)
    fitted: Math.min(vw * 0.92, vh * 0.86 * MEDIA_AR),
  };
}

// The hero media card at a given rendered width (px). Laid out at its target
// size and scaled by the caller's transform. object-cover + fixed aspect keeps
// the whole image framed with no distortion.
function MaskedMark({ width }) {
  return (
    <div
      style={{ width, aspectRatio: MEDIA_AR }}
      className="shrink-0 overflow-hidden rounded-2xl shadow-2xl"
    >
      <img
        src="/hero-media.jpg"
        alt="Creative design services — elevate your brand"
        className="h-full w-full object-cover"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}

// Load-in reveal: line rises from beneath a clipping wrapper.
function TextReveal({ children, delay = 0, className = '' }) {
  return (
    <div className="overflow-hidden leading-none">
      <motion.div
        initial={{ y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 1, ease: PALMER_EASE, delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}

function HeadlineBlock({ t, isAr }) {
  const display = `font-display text-[clamp(3.6rem,14vw,12rem)] text-bright leading-none ${
    isAr ? 'tracking-normal' : 'tracking-[-0.01em]'
  }`;
  return (
    <div className="text-center px-4">
      <TextReveal delay={0.3} className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.3em] text-muted mb-4">
        {t('hero.available')}
      </TextReveal>
      <TextReveal delay={0.4} className={display}>
        {t('hero.line1')} {t('hero.line2')}
      </TextReveal>
      {/* spacer the media window shows through at rest */}
      <div style={{ height: 'clamp(56px, 13vh, 140px)' }} aria-hidden="true" />
      <TextReveal delay={0.55} className={display}>
        {t('hero.line3')}
      </TextReveal>
      <TextReveal delay={0.7} className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.3em] text-muted mt-4">
        {t('hero.line4')} {t('hero.line5')} {t('hero.line6')}
      </TextReveal>
    </div>
  );
}

function AsideBlock({ t }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 px-6 lg:px-10 w-full">
      {/* Stats */}
      <div className="hidden sm:block space-y-1.5 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] text-muted">
        <p><b className="text-bright me-3 font-bold">6+</b>{t('about.stats.years')}</p>
        <p><b className="text-bright me-3 font-bold">80+</b>{t('about.stats.projects')}</p>
        <p><b className="text-bright me-3 font-bold">30+</b>{t('about.stats.clients')}</p>
      </div>

      {/* Statement + CTAs */}
      <div className="flex flex-col items-start sm:items-end gap-5">
        <p className="font-body text-sm text-soft leading-relaxed max-w-xs sm:text-end whitespace-pre-line">
          {t('hero.body')}
        </p>
        <div className="flex items-center gap-3">
          <Magnetic>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-6 py-3.5 hover:opacity-80 transition-opacity"
            >
              {t('hero.cta.work')}
              <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Magnetic>
          <Magnetic>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bright border border-bright/20 px-6 py-3.5 hover:border-bright transition-colors"
            >
              {t('hero.cta.contact')}
            </Link>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t, lang } = useT();
  const isAr = lang === 'ar';
  const ref = useRef(null);
  const reduced = useReducedMotion();

  // Rest + fitted mark sizes, kept in sync with the viewport.
  const [sizes, setSizes] = useState(markSizes);
  useEffect(() => {
    const onResize = () => setSizes(markSizes());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const p = useSpring(scrollYProgress, CONFIG.scrollSpring);

  // The mark grows with scroll — pure GPU scale transform. It is laid out at
  // its FITTED size (whole logo visible inside the viewport, bottom curve
  // intact) and starts scaled down, so the SVG rasterizes large & stays crisp.
  const markScale = useTransform(p, [0, CONFIG.zoomEnd], [sizes.rest / sizes.fitted, 1]);

  const textY = useTransform(p, [0, CONFIG.textExitEnd], ['0vh', `${CONFIG.textExitVh}vh`]);
  const asideOpacity = useTransform(p, CONFIG.asideFade, [1, 0]);

  // Reduced motion: static composition, no pin, no zoom.
  if (reduced) {
    return (
      <section className="relative min-h-[100svh] flex flex-col justify-center gap-12 bg-void pt-[72px] pb-10 overflow-hidden">
        <HeadlineBlock t={t} isAr={isAr} />
        <div className="mx-auto flex justify-center">
          <MaskedMark width={sizes.rest * 2.2} />
        </div>
        <AsideBlock t={t} />
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-void" style={{ height: `${typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : CONFIG.runwayVh}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">


        {/* The mark — sits small between the headline lines at rest, then
            scales up continuously as you scroll (transform only). */}
        <motion.div
          style={{ scale: markScale }}
          className="absolute inset-0 z-10 flex items-center justify-center will-change-transform"
        >
          <MaskedMark width={sizes.fitted} />
        </motion.div>

        {/* Headline — exits upward faster than the scroll. No top padding:
            the spacer gap must stay viewport-centered so the mark sits
            exactly between the two lines. */}
        <motion.div
          style={{ y: textY }}
          className="absolute inset-0 z-20 flex items-center justify-center"
        >
          <HeadlineBlock t={t} isAr={isAr} />
        </motion.div>

        {/* Bottom aside — stats, statement, CTAs; fades early in the zoom */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: PALMER_EASE, delay: 1 }}
          className="absolute inset-x-0 bottom-8 z-20"
        >
          <motion.div style={{ opacity: asideOpacity }}>
            <AsideBlock t={t} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
