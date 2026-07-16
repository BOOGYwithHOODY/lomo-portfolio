import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useT } from '../contexts/LanguageContext';
import LogoMark from './LogoMark';

const DURATION = 1400;

export default function Loader() {
  const { t } = useT();
  const [progress, setProgress] = useState(0);
  // Already seen this session → never mount (avoids a flash + exit animation).
  const [done, setDone] = useState(() => Boolean(sessionStorage.getItem('mo:loaded')));

  useEffect(() => {
    if (done) return undefined;

    // Interval + elapsed time instead of rAF: keeps working (and finishing)
    // even in throttled background tabs, where rAF never fires.
    const start = Date.now();
    const interval = setInterval(() => {
      const p = Math.min(1, (Date.now() - start) / DURATION);
      setProgress(Math.floor(p * 100));
      if (p >= 1) {
        clearInterval(interval);
        sessionStorage.setItem('mo:loaded', '1');
        setTimeout(() => setDone(true), 300);
      }
    }, 40);

    // Hard failsafe — never trap the visitor behind the loader.
    const failsafe = setTimeout(() => {
      sessionStorage.setItem('mo:loaded', '1');
      setDone(true);
    }, DURATION + 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(failsafe);
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[80] bg-void flex flex-col items-center justify-center"
          aria-hidden="true"
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <span dir="ltr" className="flex items-center font-display text-6xl md:text-7xl tracking-[0.2em] text-bright">
              L<LogoMark brand className="h-[0.72em] w-auto me-[0.2em]" />MO
            </span>
            <span className="font-heading text-xs text-muted uppercase tracking-[0.4em]">
              {t('loader.subtitle')}
            </span>
          </motion.div>

          <div className="absolute bottom-10 left-6 right-6 lg:left-10 lg:right-10 flex items-end justify-between">
            <span className="font-display text-[clamp(4rem,12vw,8rem)] leading-none text-bright">
              {String(progress).padStart(3, '0')}
            </span>
            <span className="font-heading text-xs text-muted uppercase tracking-[0.4em] pb-4">
              {t('loader.loading')}
            </span>
          </div>

          <motion.div
            className="absolute bottom-0 start-0 h-px bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: 'linear', duration: 0.05 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
