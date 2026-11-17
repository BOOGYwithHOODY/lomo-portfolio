import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, LayoutGrid, List } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import { ClipReveal, FadeIn } from '../components/motion/Reveal';
import { PROJECTS, pick } from '../data/projects';
import { PALMER_EASE } from '../hooks/animations';
import { useT } from '../contexts/LanguageContext';

// ── Row (list view) ───────────────────────────────────────────────────────────
function Row({ project, index, lang, t, onHoverStart, onHoverEnd }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: PALMER_EASE, delay: index * 0.04 }}
    >
      <Link
        to={`/work/${project.slug}`}
        onMouseEnter={() => { setHovered(true); onHoverStart(project.slug); }}
        onMouseLeave={() => { setHovered(false); onHoverEnd(); }}
        className="group relative flex items-center gap-4 lg:gap-8 py-6 lg:py-8 border-b border-line overflow-hidden"
      >
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: PALMER_EASE }}
          className="absolute inset-0 bg-accent origin-left rtl:origin-right pointer-events-none"
        />

        <span className={`relative font-mono text-[11px] tracking-[0.18em] shrink-0 w-8 transition-colors duration-300 ${hovered ? 'text-void' : 'text-muted'}`}>
          {String(index + 1).padStart(2, '0')}
        </span>

        <div className="relative flex-1 min-w-0 overflow-hidden">
          <div className="overflow-hidden leading-none">
            <motion.p
              animate={{ y: hovered ? '-105%' : '0%' }}
              transition={{ duration: 0.45, ease: PALMER_EASE }}
              className="font-display text-[clamp(1.6rem,4vw,3rem)] tracking-[-0.01em] text-bright whitespace-nowrap"
            >
              {pick(project, 'title', lang)}
            </motion.p>
          </div>
          <div className="absolute inset-0 overflow-hidden leading-none">
            <motion.p
              animate={{ y: hovered ? '0%' : '105%' }}
              transition={{ duration: 0.45, ease: PALMER_EASE }}
              className="font-serif italic text-[clamp(1.6rem,4vw,3rem)] text-void whitespace-nowrap"
            >
              {pick(project, 'title', lang)}
            </motion.p>
          </div>
        </div>

        <span className={`relative hidden sm:block font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] shrink-0 transition-colors duration-300 ${hovered ? 'text-void/70' : 'text-muted'}`}>
          {pick(project, 'category', lang)}
        </span>
        <span className={`relative hidden md:block font-mono text-[11px] lg:text-[10px] tracking-widest shrink-0 transition-colors duration-300 ${hovered ? 'text-void/70' : 'text-muted'}`}>
          {project.year}
        </span>
        <ArrowUpRight
          size={18}
          strokeWidth={1.5}
          className={`relative shrink-0 transition-colors duration-300 ${hovered ? 'text-void' : 'text-muted'}`}
        />
      </Link>
    </motion.li>
  );
}

// ── Card (grid view) ──────────────────────────────────────────────────────────
function Card({ project, index, lang }) {
  return (
    <motion.li
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: PALMER_EASE, delay: index * 0.05 }}
      className={index % 3 === 1 ? 'lg:mt-20' : ''}
    >
      <Link to={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={project.image}
            alt={pick(project, 'title', lang)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="flex items-baseline justify-between gap-4 pt-4">
          <div>
            <h2 className="font-display text-xl lg:text-2xl tracking-[-0.01em] text-bright group-hover:text-soft transition-colors">
              {pick(project, 'title', lang)}
            </h2>
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.16em] text-muted mt-1">
              {pick(project, 'category', lang)}
            </p>
          </div>
          <span className="font-mono text-[11px] lg:text-[10px] tracking-[0.16em] text-muted shrink-0">{project.year}</span>
        </div>
      </Link>
    </motion.li>
  );
}

export default function Work() {
  const { t, lang } = useT();
  const [activeCat, setActiveCat] = useState(null); // null = all
  const [view, setView] = useState('list');
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const categories = useMemo(
    () => Array.from(new Set(PROJECTS.map(p => p.category))).map(c => ({
      en: c,
      label: pick(PROJECTS.find(p => p.category === c), 'category', lang),
    })),
    [lang]
  );

  const filtered = activeCat ? PROJECTS.filter(p => p.category === activeCat) : PROJECTS;

  // Cursor-follow preview for list view
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const springX = useSpring(mouseX, { stiffness: 480, damping: 46 });
  const springY = useSpring(mouseY, { stiffness: 480, damping: 46 });
  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  const activeProject = filtered.find(p => p.slug === hoveredSlug);

  return (
    <PageTransition>
      <Seo title={t('nav.work')} description={t('work.page.body')} />

      {/* Cursor preview */}
      <AnimatePresence>
        {view === 'list' && hoveredSlug && activeProject && (
          <motion.div
            key={hoveredSlug}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.35, ease: PALMER_EASE }}
            style={{ x: springX, y: springY, translateX: '-50%', translateY: '-58%' }}
            className="fixed z-[60] pointer-events-none w-[240px] h-[300px] lg:w-[280px] lg:h-[350px] overflow-hidden shadow-2xl hidden lg:block"
          >
            <img src={activeProject.image} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 pb-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-4">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('work.page.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h1" delay={0.08} className="font-display text-[clamp(4rem,12vw,10rem)] text-bright leading-[0.92] tracking-[-0.02em]">
            {t('work.page.title')}
          </ClipReveal>
          <FadeIn delay={0.2} className="mt-6 max-w-2xl">
            <p className="font-body text-base text-soft leading-relaxed">
              {t('work.page.body')}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ── Filter bar ─────────────────────────────────────── */}
      <div className="px-6 lg:px-10 border-y border-line sticky top-16 lg:top-[72px] z-30 bg-void/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2" role="tablist" aria-label={t('work.filter.all')}>
            <button
              onClick={() => setActiveCat(null)}
              className={`font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] pb-1 border-b transition-colors ${
                activeCat === null ? 'text-bright border-bright' : 'text-muted border-transparent hover:text-bright'
              }`}
            >
              {t('work.filter.all')}
            </button>
            {categories.map(cat => (
              <button
                key={cat.en}
                onClick={() => setActiveCat(cat.en)}
                className={`font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] pb-1 border-b transition-colors ${
                  activeCat === cat.en ? 'text-bright border-bright' : 'text-muted border-transparent hover:text-bright'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <p className="font-mono text-[11px] lg:text-[10px] text-muted tracking-[0.18em]">
              {String(filtered.length).padStart(2, '0')} {filtered.length === 1 ? t('work.count.one') : t('work.count.many')}
            </p>
            <div className="flex items-center border border-line">
              <button
                onClick={() => setView('list')}
                aria-label="List view"
                aria-pressed={view === 'list'}
                className={`p-2 transition-colors ${view === 'list' ? 'bg-bright text-void' : 'text-muted hover:text-bright'}`}
              >
                <List size={13} />
              </button>
              <button
                onClick={() => setView('grid')}
                aria-label="Grid view"
                aria-pressed={view === 'grid'}
                className={`p-2 transition-colors ${view === 'grid' ? 'bg-bright text-void' : 'text-muted hover:text-bright'}`}
              >
                <LayoutGrid size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Index ──────────────────────────────────────────── */}
      <section onMouseMove={handleMouseMove} className="px-6 lg:px-10 py-12 lg:py-16 min-h-[50vh]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            {view === 'list' ? (
              <motion.ul
                key={`list-${activeCat}`}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="flex flex-col"
              >
                {filtered.map((p, i) => (
                  <Row
                    key={p.id}
                    project={p}
                    index={i}
                    lang={lang}
                    t={t}
                    onHoverStart={setHoveredSlug}
                    onHoverEnd={() => setHoveredSlug(null)}
                  />
                ))}
              </motion.ul>
            ) : (
              <motion.ul
                key={`grid-${activeCat}`}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14"
              >
                {filtered.map((p, i) => (
                  <Card key={p.id} project={p} index={i} lang={lang} />
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </section>
    </PageTransition>
  );
}
