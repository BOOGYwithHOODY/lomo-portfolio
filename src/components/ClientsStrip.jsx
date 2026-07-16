import { useReducedMotion } from 'framer-motion';
import { CLIENTS } from '../data/projects';
import { useT } from '../contexts/LanguageContext';
import { FadeIn } from './motion/Reveal';

// Infinite marquee of client names. Two counter-scrolling rows; falls back
// to a static wrapped list for reduced-motion users.
function MarqueeRow({ names, reverse = false }) {
  // Duplicate content so the -50% translation loops seamlessly.
  const doubled = [...names, ...names];
  return (
    <div className="group flex overflow-hidden select-none" dir="ltr" aria-hidden="true">
      <div
        className={`flex shrink-0 items-center gap-0 group-hover:[animation-play-state:paused] ${
          reverse ? 'animate-marquee-rev' : 'animate-marquee'
        }`}
      >
        {doubled.map((name, i) => (
          <span key={`${name}-${i}`} className="flex items-center shrink-0">
            <span className="font-display text-[clamp(2.2rem,5vw,4rem)] tracking-[-0.01em] text-soft/60 hover:text-bright transition-colors whitespace-nowrap px-6 lg:px-10">
              {name.toUpperCase()}
            </span>
            <span className="w-2 h-2 rounded-full bg-border shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientsStrip() {
  const { t } = useT();
  const reduced = useReducedMotion();
  const half = Math.ceil(CLIENTS.length / 2);
  const rowA = CLIENTS.slice(0, half);
  const rowB = CLIENTS.slice(half);

  return (
    <section className="py-16 lg:py-20 border-t border-line bg-void overflow-hidden">
      <FadeIn className="px-6 lg:px-10 mb-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted text-center">
          {t('clients.title')}
        </p>
      </FadeIn>

      {reduced ? (
        // Static fallback — no motion, still scannable.
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {CLIENTS.map((name) => (
            <span key={name} className="font-display text-2xl text-soft/60">
              {name.toUpperCase()}
            </span>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <MarqueeRow names={rowA} />
          <MarqueeRow names={rowB} reverse />
        </div>
      )}

      {/* Screen-reader accessible list (marquee rows are aria-hidden) */}
      <ul className="sr-only">
        {CLIENTS.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </section>
  );
}
