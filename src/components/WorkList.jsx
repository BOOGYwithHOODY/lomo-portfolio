import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS, pick } from '../data/projects';
import { useT } from '../contexts/LanguageContext';
import { PALMER_EASE, palmerStagger, rowReveal, gridStagger, gridItem } from '../hooks/animations';
import { ClipReveal, FadeIn } from './motion/Reveal';

// ── Large editorial card for featured projects ───────────────────────────────
function FeaturedCard({ project, lang, t, index }) {
  return (
    <motion.div variants={gridItem}>
      <motion.div whileHover={{ y: -6 }} whileTap={{ scale: 0.985 }} transition={{ duration: 0.35, ease: PALMER_EASE }}>
      <Link to={`/work/${project.slug}`} className="group block">
        <div className="relative overflow-hidden aspect-[4/3] bg-panel">
          <img
            src={project.cover}
            alt={pick(project, 'title', lang)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            loading={index < 2 ? 'eager' : 'lazy'}
            decoding="async"
          />
          {/* Hover veil + view label */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
            <span className="inline-flex items-center gap-2 bg-void text-bright font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] px-5 py-3">
              {t('work.viewProject')}
              <ArrowUpRight size={12} strokeWidth={2} />
            </span>
          </div>
        </div>

        {/* Caption row */}
        <div className="flex items-baseline justify-between gap-4 pt-4">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.01em] text-bright group-hover:text-soft transition-colors">
              {pick(project, 'title', lang)}
            </h3>
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] text-muted mt-1.5">
              {pick(project, 'category', lang)}
            </p>
          </div>
          <span className="font-mono text-[11px] lg:text-[10px] tracking-[0.18em] text-muted shrink-0">
            {project.year}
          </span>
        </div>
      </Link>
      </motion.div>
    </motion.div>
  );
}

// ── Single project row (list below the featured cards) ───────────────────────
function ProjectRow({ project, index, lang, onHoverStart, onHoverEnd }) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => { setHovered(true);  onHoverStart(project.slug); };
  const handleLeave = () => { setHovered(false); onHoverEnd();               };

  return (
    <motion.div variants={rowReveal}>
      <Link
        to={`/work/${project.slug}`}
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="group relative flex items-center gap-4 lg:gap-8 py-6 lg:py-8 border-b border-line overflow-hidden"
        aria-label={pick(project, 'title', lang)}
      >
        {/* Hover fill — slides in from the start edge */}
        <motion.div
          animate={{ scaleX: hovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: PALMER_EASE }}
          className="absolute inset-0 bg-bright origin-left rtl:origin-right pointer-events-none"
        />

        <span
          className={`relative font-mono text-[11px] tracking-[0.18em] shrink-0 w-12 tabular-nums transition-colors duration-300 ${
            hovered ? 'text-void' : 'text-muted'
          }`}
        >
          {project.year}
        </span>

        {/* Title flips to an italic serif echo on hover */}
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

        <span
          className={`relative hidden sm:block font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] shrink-0 transition-colors duration-300 ${
            hovered ? 'text-void/70' : 'text-muted'
          }`}
        >
          {pick(project, 'category', lang)}
        </span>


        <motion.div
          animate={{
            x:     hovered ? 0    : -4,
            y:     hovered ? 0    :  4,
            color: hovered ? 'var(--color-void)' : 'var(--color-muted)',
          }}
          transition={{ duration: 0.3 }}
          className="relative shrink-0"
        >
          <ArrowUpRight size={18} strokeWidth={1.5} />
        </motion.div>
      </Link>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function WorkList({ limit }) {
  const { t, lang } = useT();
  const [hoveredSlug, setHoveredSlug] = useState(null);

  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS;
  // Grid of 4: featured-flagged projects first, topped up in data order.
  const flagged = items.filter((p) => p.featured);
  const featured = [...flagged, ...items.filter((p) => !flagged.includes(p))].slice(0, 4);
  const rest = items.filter((p) => !featured.includes(p));

  // Spring-following cursor preview (shared for all rows)
  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  const springX = useSpring(mouseX, { stiffness: 480, damping: 46 });
  const springY = useSpring(mouseY, { stiffness: 480, damping: 46 });

  const handleMouseMove = useCallback(
    (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY]
  );

  const activeProject = rest.find((p) => p.slug === hoveredSlug);

  return (
    <>
      {/* ── Cursor-following image preview */}
      <AnimatePresence>
        {hoveredSlug && activeProject && (
          <motion.div
            key={hoveredSlug}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1    }}
            exit={{    opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.35, ease: PALMER_EASE }}
            style={{
              x: springX,
              y: springY,
              translateX: '-50%',
              translateY: '-58%',
            }}
            className="fixed z-[60] pointer-events-none w-[240px] h-[300px] lg:w-[280px] lg:h-[350px] overflow-hidden shadow-2xl hidden lg:block"
          >
            <img src={activeProject.image} alt="" className="w-full h-full object-cover" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Section ───────────────────────────────────────────────────────── */}
      <section onMouseMove={handleMouseMove} className="px-6 lg:px-10 border-t border-line">
        <div className="max-w-7xl mx-auto">

          {/* Section header */}
          <div className="flex items-end justify-between gap-4 py-10 lg:py-14">
            <div>
              <FadeIn y={12} className="mb-3">
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
                  {t('work.eyebrow')}
                </p>
              </FadeIn>
              <ClipReveal delay={0.08} className="font-display text-[clamp(3rem,8vw,6rem)] text-bright tracking-[-0.01em] leading-none">
                {t('work.title')}
              </ClipReveal>
            </div>

            <FadeIn delay={0.2} className="hidden md:block">
              <p className="font-mono text-[11px] lg:text-[10px] text-muted uppercase tracking-[0.18em]">
                {items.length} {t('work.count.many')}
              </p>
            </FadeIn>
          </div>

          {/* Featured cards — asymmetric editorial pair */}
          {featured.length > 0 && (
            <motion.div
              variants={gridStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-x-14 lg:gap-y-16 pb-16 lg:pb-24"
            >
              {featured.map((p, i) => (
                <FeaturedCard
                  key={p.id}
                  project={p}
                  lang={lang}
                  t={t}
                  index={i}
                />
              ))}
            </motion.div>
          )}

          {/* Thin rule */}
          <div className="h-px bg-line" />

          {/* Project rows */}
          <motion.div
            variants={palmerStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {rest.map((project, i) => (
              <ProjectRow
                key={project.id}
                project={project}
                index={i + 1}
                lang={lang}
                onHoverStart={(slug) => setHoveredSlug(slug)}
                onHoverEnd={() => setHoveredSlug(null)}
              />
            ))}
          </motion.div>

          {/* View all link */}
          {limit && (
            <FadeIn delay={0.15} className="py-10">
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted border-b border-line pb-1.5 hover:text-bright hover:border-bright transition-colors"
              >
                {t('work.archive')}
                <ArrowUpRight
                  size={13}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </Link>
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
