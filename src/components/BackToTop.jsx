import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { getLenis } from '../hooks/useLenis';
import { useT } from '../contexts/LanguageContext';
import { PALMER_EASE } from '../hooks/animations';

// Floating back-to-top control. Appears once the visitor is past the hero,
// scrolls home on Lenis when available (smooth), native otherwise.
export default function BackToTop() {
  const { t } = useT();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > window.innerHeight * 1.5);
  });

  const toTop = () => {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo(0, { duration: 1.2 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.35, ease: PALMER_EASE }}
          onClick={toTop}
          aria-label={t('misc.backToTop')}
          className="fixed bottom-6 end-6 z-40 grid h-11 w-11 place-items-center border border-line bg-void/85 backdrop-blur text-bright hover:border-accent hover:text-accent transition-colors"
        >
          <ArrowUp size={16} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
