import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { TESTIMONIALS, pick } from '../data/projects';
import { PALMER_EASE, PRESS } from '../hooks/animations';
import { useT } from '../contexts/LanguageContext';
import { FadeIn } from './motion/Reveal';

export default function Testimonials() {
  const { t, lang, dir } = useT();
  const [i, setI] = useState(0);
  const item = TESTIMONIALS[i];
  const isAr = lang === 'ar';

  const next = () => setI((i + 1) % TESTIMONIALS.length);
  const prev = () => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const PrevIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;
  const NextIcon = dir === 'rtl' ? ArrowLeft  : ArrowRight;

  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto">

        {/* Eyebrow row */}
        <FadeIn className="flex items-center justify-between mb-14 lg:mb-20">
          <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
            {t('testimonials.eyebrow')}
          </p>
          <p className="font-mono text-[11px] lg:text-[10px] tracking-[0.18em] text-muted" aria-live="polite">
            {String(i + 1).padStart(2, '0')} — {String(TESTIMONIALS.length).padStart(2, '0')}
          </p>
        </FadeIn>

        {/* Rotating quote */}
        <div className="min-h-[260px] lg:min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={item.author + lang}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: PALMER_EASE }}
            >
              <p className={`font-serif ${isAr ? '' : 'italic'} text-[clamp(1.6rem,4.2vw,3.4rem)] text-bright leading-[1.15] max-w-5xl`}>
                “{pick(item, 'quote', lang)}”
              </p>
              <footer className="mt-10 flex items-center gap-4">
                <div className="w-10 h-px bg-bright" aria-hidden="true" />
                <div>
                  <p className="font-body text-sm font-medium text-bright">
                    {pick(item, 'author', lang)}
                  </p>
                  <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.16em] text-muted mt-1">
                    {pick(item, 'role', lang)} · {pick(item, 'project', lang)}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-12 flex items-center gap-3">
          <motion.button
            {...PRESS}
            onClick={prev}
            aria-label={t('testimonials.prev')}
            className="w-12 h-12 border border-bright/15 flex items-center justify-center text-soft hover:text-bright hover:border-bright transition-colors"
          >
            <PrevIcon size={16} />
          </motion.button>
          <motion.button
            {...PRESS}
            onClick={next}
            aria-label={t('testimonials.next')}
            className="w-12 h-12 border border-bright/15 flex items-center justify-center text-soft hover:text-bright hover:border-bright transition-colors"
          >
            <NextIcon size={16} />
          </motion.button>

          {/* Progress dots */}
          <div className="ms-4 flex items-center gap-2" aria-hidden="true">
            {TESTIMONIALS.map((_, d) => (
              <button
                key={d}
                onClick={() => setI(d)}
                tabIndex={-1}
                className={`h-1 transition-all duration-400 ${
                  d === i ? 'w-8 bg-bright' : 'w-3 bg-border hover:bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
