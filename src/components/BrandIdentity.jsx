import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
import { pick } from '../data/projects';
import { ClipReveal, FadeIn } from './motion/Reveal';
import { PALMER_EASE } from '../hooks/animations';
import { BRAND_LOGOS } from './brand/logos';

// Perceived luminance → pick readable ink for a swatch.
function inkFor(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.6 ? '#111111' : '#F6F6F4';
}

/* ── Lockup: mark + wordmark composed per brand spec ─────────────────────── */
function Lockup({ brand, size = 'text-2xl lg:text-3xl', markSize = 72 }) {
  const { Mark, Wordmark, lockup } = BRAND_LOGOS[brand];
  if (lockup === 'row') {
    return (
      <div className={`flex items-center gap-6 ${size}`}>
        <Mark size={markSize} />
        <Wordmark />
      </div>
    );
  }
  return (
    <div className={`flex flex-col items-center gap-6 ${size}`}>
      <Mark size={markSize} />
      <Wordmark />
    </div>
  );
}

/* ── Clearspace board: mark inside a dashed exclusion frame ──────────────── */
function Clearspace({ brand }) {
  const { Mark } = BRAND_LOGOS[brand];
  return (
    <div className="relative grid place-items-center h-full min-h-[220px]">
      <div className="relative border border-dashed border-bright/30 p-10">
        <Mark size={84} />
        {/* measurement ticks */}
        {['top-0 left-1/2 -translate-x-1/2 -translate-y-full pb-1', 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full pt-1'].map((pos) => (
          <span key={pos} className={`absolute ${pos} font-mono text-[9px] text-muted`}>x</span>
        ))}
        <span className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full pe-2 font-mono text-[9px] text-muted">x</span>
        <span className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full ps-2 font-mono text-[9px] text-muted">x</span>
      </div>
    </div>
  );
}

/* ── Colour swatch with click-to-copy ────────────────────────────────────── */
function Swatch({ color, lang, copyLabel, copiedLabel }) {
  const [copied, setCopied] = useState(false);
  const copy = useCallback(() => {
    navigator.clipboard?.writeText(color.hex).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    }).catch(() => {});
  }, [color.hex]);

  const ink = inkFor(color.hex);
  return (
    <motion.button
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3, ease: PALMER_EASE }}
      onClick={copy}
      aria-label={`${pick(color, 'name', lang)} ${color.hex} — ${copyLabel}`}
      className="group text-start"
    >
      <div
        className="aspect-square w-full grid place-items-end p-3 border border-line"
        style={{ backgroundColor: color.hex, color: ink }}
      >
        <span className="font-mono text-[10px] tracking-[0.08em] opacity-0 group-hover:opacity-80 transition-opacity">
          {copied ? copiedLabel : color.hex}
        </span>
      </div>
      <p className="font-heading text-xs font-semibold text-bright mt-2.5">{pick(color, 'name', lang)}</p>
      <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted mt-0.5">{color.hex}</p>
    </motion.button>
  );
}

/* ── Main section ────────────────────────────────────────────────────────── */
export default function BrandIdentity({ project }) {
  const { t, lang } = useT();
  const identity = project.identity;
  if (!identity || !BRAND_LOGOS[identity.brand]) return null;

  const { Mark, Wordmark } = BRAND_LOGOS[identity.brand];
  const [dark, light] = [
    identity.colors.find((c) => inkFor(c.hex) !== '#111111') ?? identity.colors[0],
    identity.colors.find((c) => inkFor(c.hex) === '#111111') ?? identity.colors[1],
  ];

  return (
    <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-line">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 lg:mb-16">
          <FadeIn y={10} className="mb-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('detail.identity.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h2" className="font-display text-[clamp(2.6rem,7vw,5.5rem)] text-bright leading-[0.95] tracking-[-0.01em] whitespace-pre-line">
            {t('detail.identity.title')}
          </ClipReveal>
          <FadeIn delay={0.15}>
            <p className="mt-6 font-body text-base lg:text-lg text-soft leading-relaxed max-w-2xl">
              {pick(identity, 'note', lang)}
            </p>
          </FadeIn>
        </div>

        {/* Logo boards — primary on brand-dark, inverse on brand-light */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          <FadeIn>
            <div
              className="relative grid place-items-center aspect-[4/3] border border-line"
              style={{ backgroundColor: dark.hex, color: light.hex }}
            >
              <Lockup brand={identity.brand} />
              <span className="absolute top-4 start-4 font-mono text-[9px] uppercase tracking-[0.2em] opacity-50">
                {t('detail.identity.primary')}
              </span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div
              className="relative grid place-items-center aspect-[4/3] border border-line"
              style={{ backgroundColor: light.hex, color: dark.hex }}
            >
              <Lockup brand={identity.brand} />
              <span className="absolute top-4 start-4 font-mono text-[9px] uppercase tracking-[0.2em] opacity-50">
                {t('detail.identity.inverse')}
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Clearspace + variations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mt-4 lg:mt-5">
          <FadeIn>
            <div className="relative border border-line bg-surface h-full">
              <span className="absolute top-4 start-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                {t('detail.identity.clearspace')}
              </span>
              <div className="text-bright"><Clearspace brand={identity.brand} /></div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="relative border border-line bg-surface h-full min-h-[220px] p-8 pt-12">
              <span className="absolute top-4 start-4 font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                {t('detail.identity.variations')}
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 h-full text-bright">
                <Mark size={44} />
                <div className="text-base"><Wordmark /></div>
                <div className="text-accent"><Mark size={44} /></div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Colour system */}
        <div className="mt-14 lg:mt-20">
          <FadeIn className="flex items-baseline justify-between mb-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('detail.identity.palette')}
            </p>
            <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted hidden sm:block">
              {t('detail.identity.copy')}
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {identity.colors.map((c) => (
              <Swatch
                key={c.hex}
                color={c}
                lang={lang}
                copyLabel={t('detail.identity.copy')}
                copiedLabel={t('detail.identity.copied')}
              />
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mt-14 lg:mt-20">
          <FadeIn className="mb-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('detail.identity.type')}
            </p>
          </FadeIn>
          <div className="border-t border-line">
            {identity.type.map((face, i) => (
              <FadeIn key={face.family} delay={i * 0.06}>
                <div className="grid grid-cols-[64px_1fr] sm:grid-cols-[96px_1fr_1fr] gap-5 sm:gap-8 items-center py-7 border-b border-line">
                  <span className="text-[2.6rem] sm:text-[3.2rem] leading-none text-bright" style={{ fontFamily: face.css }}>
                    Aa
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-bright">{face.family}</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted mt-1">
                      {pick(face, 'role', lang)}
                    </p>
                  </div>
                  <p
                    className="col-span-2 sm:col-span-1 text-lg sm:text-xl text-soft leading-snug"
                    style={{ fontFamily: face.css }}
                    dir={face.rtl ? 'rtl' : 'ltr'}
                  >
                    {face.sample}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
