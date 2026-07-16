import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { ThemeToggle, LangToggle } from './Toggles';
import LogoMark from './LogoMark';
import Magnetic from './motion/Magnetic';
import { useT } from '../contexts/LanguageContext';
import { PALMER_EASE, PRESS } from '../hooks/animations';

const NAV_LINKS = [
  { key: 'nav.work',     to: '/work'     },
  { key: 'nav.about',    to: '/about'    },
  { key: 'nav.services', to: '/services' },
  { key: 'nav.journal',  to: '/journal'  },
];

export default function Navbar() {
  const { t } = useT();
  const location = useLocation();
  const [scrolled,  setScrolled]  = useState(false);
  const [hidden,    setHidden]    = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  // Recede when scrolling down, return on the first upward scroll.
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    setHidden(y > prev && y > 220 && !menuOpen);
  });

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: hidden ? '-105%' : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: PALMER_EASE }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-void/85 backdrop-blur-md' : 'bg-void'}`}
      >
        <div className={`px-6 lg:px-10 transition-all duration-300 ${scrolled ? 'border-b border-line' : 'border-b border-transparent'}`}>
          <div className="flex items-center justify-between h-16 lg:h-[72px]">

            {/* Logo */}
            <Link
              to="/"
              dir="ltr"
              className="flex items-center font-display tracking-widest text-[1.6rem] text-bright leading-none hover:opacity-70 transition-opacity"
              aria-label="LOMO — home"
            >
              L<LogoMark brand className="h-[0.72em] w-auto me-[0.1em]" />MO
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Primary">
              {NAV_LINKS.map(({ key, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                      isActive ? 'text-bright' : 'text-muted hover:text-bright'
                    }`
                  }
                >
                  {t(key)}
                </NavLink>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-3">
              <div className="hidden lg:flex items-center gap-2">
                <ThemeToggle compact />
                <LangToggle  compact />
              </div>

              <Magnetic className="hidden lg:inline-block">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-5 py-2.5 hover:opacity-80 transition-opacity"
                >
                  {t('nav.contact')}
                  <ArrowUpRight size={12} strokeWidth={2.5} />
                </Link>
              </Magnetic>

              {/* Mobile hamburger */}
              <motion.button
                {...PRESS}
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
                className="lg:hidden flex items-center justify-center w-9 h-9 text-bright"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={menuOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: -45, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0,   scale: 1   }}
                    exit={{    opacity: 0, rotate:  45, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                    className="flex"
                  >
                    {menuOpen ? <X size={20} /> : <Menu size={20} />}
                  </motion.span>
                </AnimatePresence>
              </motion.button>
            </div>

          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0   }}
            exit={{    opacity: 0, y: -8  }}
            transition={{ duration: 0.35, ease: PALMER_EASE }}
            className="fixed inset-0 z-40 bg-void pt-[72px] flex flex-col px-6 pb-10"
          >
            <div className="flex-1 flex flex-col justify-center gap-1 border-t border-line">
              {NAV_LINKS.map(({ key, to }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0   }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.5, ease: PALMER_EASE }}
                >
                  <Link
                    to={to}
                    className="block py-5 border-b border-line font-display text-[clamp(2.5rem,10vw,4rem)] tracking-widest text-bright hover:text-muted transition-colors leading-none"
                  >
                    {t(key)}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-6 py-3"
                >
                  {t('nav.contact')} <ArrowUpRight size={12} />
                </Link>
                <ThemeToggle compact />
                <LangToggle  compact />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
