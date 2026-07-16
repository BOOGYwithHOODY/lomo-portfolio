import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { EXPERIENCE, pick } from '../data/projects';
import { palmerStagger, rowReveal } from '../hooks/animations';
import { ClipReveal, FadeIn, ParallaxImage, Counter } from './motion/Reveal';
import Magnetic from './motion/Magnetic';

const CAPABILITIES = [
  'Brand Identity', 'Visual Strategy', 'Motion Design',
  'Editorial Design', 'Typography', 'Art Direction',
  'UI / UX', 'Print Systems', 'Packaging',
];

function Portrait() {
  return (
    <div className="relative w-full aspect-[4/5]">
      <ParallaxImage
        src="/portrait.jpg"
        alt="Mohamad Othman"
        className="absolute inset-0 bg-panel"
        strength={6}
      />
      <div className="absolute bottom-0 end-0 w-10 h-10 border-t border-s border-bright/20" />
    </div>
  );
}

export default function AboutMatrix() {
  const { t, lang } = useT();
  const isAr = lang === 'ar';

  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">

        {/* ── Section eyebrow ──────────────────────────────── */}
        <FadeIn className="mb-16 lg:mb-20">
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
            {t('about.eyebrow')}
          </span>
        </FadeIn>

        {/* ── Two-column split ─────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 xl:gap-32">

          {/* ── Left column: statement + bio ─────────────── */}
          <div className="flex flex-col gap-10">

            {/* Statement heading */}
            <div>
              <ClipReveal delay={0.05} className="font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[0.95] tracking-[-0.01em] text-bright whitespace-pre-line">
                {t('about.title')}
              </ClipReveal>
            </div>

            {/* Portrait — visible only on small screens */}
            <div className="lg:hidden">
              <Portrait />
            </div>

            {/* Bio */}
            <FadeIn delay={0.1} className="space-y-4 max-w-md">
              <p className="font-body text-base text-bright leading-relaxed">
                {t('about.bio1')}
              </p>
              <p className="font-body text-sm text-soft leading-relaxed">
                {t('about.bio2')}
              </p>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.2}>
              <div className="h-px bg-line mb-8" />
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '6+',  label: t('about.stats.years')    },
                  { value: '80+', label: t('about.stats.projects') },
                  { value: '30+', label: t('about.stats.clients')  },
                ].map(({ value, label }) => (
                  <div key={label} className="group">
                    <p className="font-display text-[clamp(2.2rem,5vw,3.5rem)] text-bright leading-none tracking-[-0.02em] group-hover:text-muted transition-colors">
                      <Counter value={value} />
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mt-1.5">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="h-px bg-line mt-8" />
            </FadeIn>

            {/* CTA */}
            <FadeIn delay={0.25} className="flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-6 py-3.5 hover:opacity-80 transition-opacity"
                >
                  {t('about.readFull')}
                  <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </Magnetic>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-soft border border-bright/20 px-6 py-3.5 hover:border-bright hover:text-bright transition-colors"
              >
                Behance
                <ArrowUpRight size={12} strokeWidth={2.5} />
              </a>
            </FadeIn>
          </div>

          {/* ── Right column: portrait + experience ──────── */}
          <div className="flex flex-col gap-10">

            {/* Portrait — desktop only */}
            <div className="hidden lg:block">
              <Portrait />
            </div>

            {/* Experience table — single source of truth in data/projects.js */}
            <FadeIn delay={0.15}>
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  {t('aboutPage.experience.eyebrow')}
                </span>
                <span className="font-mono text-[10px] text-muted">
                  {EXPERIENCE.length}
                </span>
              </div>

              <div className="h-px bg-line" />

              <motion.div
                variants={palmerStagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {EXPERIENCE.map((e) => (
                  <motion.div
                    key={e.period}
                    variants={rowReveal}
                    className="group grid grid-cols-[96px_1fr] gap-3 items-center py-4 border-b border-line hover:bg-panel transition-colors px-0 hover:px-3 rounded-sm"
                  >
                    <span className="font-mono text-[9px] tracking-[0.1em] text-muted whitespace-nowrap">
                      {pick(e, 'period', lang)}
                    </span>
                    <div>
                      <p className="font-heading text-sm font-semibold text-bright leading-tight">
                        {pick(e, 'role', lang)}
                      </p>
                      <p className="font-mono text-[10px] text-muted mt-0.5">{pick(e, 'place', lang)}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </FadeIn>

            {/* Capabilities */}
            <FadeIn delay={0.25}>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
                {isAr ? 'القدرات' : 'Capabilities'}
              </p>
              <div className="flex flex-wrap gap-2">
                {CAPABILITIES.map((cap) => (
                  <span
                    key={cap}
                    className="font-mono text-[9px] uppercase tracking-[0.14em] text-soft border border-bright/10 px-3 py-1.5 hover:border-bright hover:text-bright transition-colors cursor-default"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
