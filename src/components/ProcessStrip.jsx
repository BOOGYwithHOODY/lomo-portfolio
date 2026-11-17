import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
import { ClipReveal, FadeIn } from './motion/Reveal';

const STEPS = ['01', '02', '03', '04'];

function StepRow({ number, title, blurb, detail, isLast }) {
  return (
    <FadeIn y={28} className={`grid grid-cols-[64px_1fr] sm:grid-cols-[110px_1fr] gap-5 sm:gap-8 py-10 lg:py-14 ${isLast ? '' : 'border-b border-line'}`}>
      <span className="font-display text-[clamp(2.6rem,6vw,4.5rem)] leading-none text-muted/50 select-none">
        {number}
      </span>
      <div className="pt-1">
        <h3 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] leading-none text-bright tracking-[-0.01em]">
          {title}
        </h3>
        <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted mt-2.5">
          {blurb}
        </p>
        <p className="font-body text-sm lg:text-base text-soft leading-relaxed max-w-lg mt-4">
          {detail}
        </p>
      </div>
    </FadeIn>
  );
}

// Pinned storytelling section: the intro stays fixed while the four
// phases scroll past it, traced by a growing progress line.
export default function ProcessStrip() {
  const { t, lang } = useT();
  const isAr = lang === 'ar';
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ['start 0.75', 'end 0.6'],
  });

  return (
    <section className="px-6 lg:px-10 py-24 lg:py-32 border-t border-line">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">

        {/* Sticky intro */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <FadeIn y={12} className="mb-4">
              <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
                {t('process.eyebrow')}
              </p>
            </FadeIn>

            <ClipReveal className="font-display text-[clamp(2.8rem,6vw,5rem)] leading-[0.95] tracking-[-0.01em] text-bright">
              {t('process.title1')}
            </ClipReveal>
            <ClipReveal delay={0.12} className={`font-serif ${isAr ? '' : 'italic'} text-[clamp(2.8rem,6vw,5rem)] leading-[1.05] text-muted`}>
              {t('process.title2')}
            </ClipReveal>

            <FadeIn delay={0.15} className="mt-8 max-w-sm">
              <p className="font-body text-sm lg:text-base text-soft leading-relaxed">
                {t('process.body')}
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Steps with scroll-traced progress line */}
        <div className="lg:col-span-7 relative" ref={listRef}>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute top-0 bottom-0 start-0 w-px bg-bright origin-top hidden lg:block"
            aria-hidden="true"
          />
          <div className="lg:ps-10">
            {STEPS.map((n, i) => (
              <StepRow
                key={n}
                number={n}
                title={t(`about.process.${n}`)}
                blurb={t(`about.processDesc.${n}`)}
                detail={t(`process.long.${n}`)}
                isLast={i === STEPS.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
