import { Sun, Moon, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { useT } from '../contexts/LanguageContext';
import { PRESS } from '../hooks/animations';

export function ThemeToggle({ compact = false }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      {...PRESS}
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`group relative flex items-center justify-center border border-border hover:border-accent transition-colors text-soft hover:text-accent ${
        compact ? 'w-9 h-9' : 'w-10 h-10'
      }`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -45, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 45, scale: 0.6 }}
          transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {isDark ? <Sun size={15} /> : <Moon size={15} />}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}

export function LangToggle({ compact = false }) {
  const { lang, toggle } = useT();
  return (
    <motion.button
      {...PRESS}
      onClick={toggle}
      aria-label="Toggle language"
      className={`group relative flex items-center gap-2 border border-border hover:border-accent transition-colors text-soft hover:text-accent px-3 ${
        compact ? 'h-9' : 'h-10'
      }`}
    >
      <Languages size={14} />
      <span className="font-heading text-xs uppercase tracking-widest">
        {lang === 'en' ? 'AR' : 'EN'}
      </span>
    </motion.button>
  );
}
