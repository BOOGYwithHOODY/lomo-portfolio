import { useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import BrandIdentity from '../components/BrandIdentity';
import Magnetic from '../components/motion/Magnetic';
import { ClipReveal, FadeIn, MaskImage, ParallaxImage, Counter } from '../components/motion/Reveal';
import { PROJECTS, pick } from '../data/projects';
import { useT } from '../contexts/LanguageContext';

function MetaItem({ label, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-[11px] lg:text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">{label}</span>
      <span className="font-body text-sm text-bright font-medium leading-snug">{value}</span>
    </div>
  );
}

// Numbered story chapter: sticky label column + large body copy.
function Chapter({ index, label, body }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 lg:py-20 border-t border-line">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28 flex items-baseline gap-4">
          <span className="font-display text-[clamp(2.4rem,5vw,3.6rem)] leading-none text-muted/40 select-none">
            {String(index).padStart(2, '0')}
          </span>
          <span className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted pb-1">
            {label}
          </span>
        </div>
      </div>
      <FadeIn className="lg:col-span-8">
        <p className="font-body text-lg lg:text-2xl text-bright leading-relaxed lg:leading-relaxed max-w-3xl">
          {body}
        </p>
      </FadeIn>
    </div>
  );
}

// Full-width next-project footer with image reveal on hover.
function NextProject({ project, lang, t, dir }) {
  const NextIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group relative block overflow-hidden border-t border-line"
    >
      {/* Background image — fades in on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out">
        <img
          src={project.cover}
          alt=""
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      <div className="relative px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto">
          <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted group-hover:text-white/70 transition-colors mb-5">
            {t('detail.next')}
          </p>
          <div className="flex items-center justify-between gap-6">
            <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] leading-none tracking-[-0.01em] text-bright group-hover:text-white transition-colors">
              {pick(project, 'title', lang)}
            </h2>
            <NextIcon
              size={44}
              strokeWidth={1.25}
              className="shrink-0 text-muted group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all"
            />
          </div>
          <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] text-muted group-hover:text-white/70 transition-colors mt-4">
            {pick(project, 'category', lang)} · {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, lang, dir } = useT();
  const project = PROJECTS.find(p => p.slug === slug);

  const coverRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: coverRef,
    offset: ['start end', 'end start'],
  });
  const coverY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  if (!project) return <Navigate to="/work" replace />;

  const index = PROJECTS.findIndex(p => p.slug === slug);
  const next  = PROJECTS[(index + 1) % PROJECTS.length];
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const chapters = [
    { label: t('detail.brief'),     body: pick(project.story, 'brief', lang)     },
    { label: t('detail.challenge'), body: pick(project.story, 'challenge', lang) },
    { label: t('detail.approach'),  body: pick(project.story, 'approach', lang)  },
    { label: t('detail.outcome'),   body: pick(project.story, 'outcome', lang)   },
  ];

  return (
    <PageTransition>
      <Seo
        title={pick(project, 'title', lang)}
        description={pick(project, 'description', lang)}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={8}>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted hover:text-bright transition-colors mb-10"
            >
              <BackIcon size={12} /> {t('detail.back')}
            </Link>
          </FadeIn>

          <FadeIn y={10} delay={0.05}>
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
              {pick(project, 'category', lang)} · {project.year}
            </p>
          </FadeIn>

          <ClipReveal as="h1" delay={0.1} className="font-display text-[clamp(3.4rem,11vw,9.5rem)] text-bright leading-[0.95] tracking-[-0.02em]">
            {pick(project, 'title', lang)}
          </ClipReveal>

          <FadeIn delay={0.25} className="mt-8 max-w-2xl">
            <p className={`font-serif ${lang === 'ar' ? '' : 'italic'} text-xl lg:text-2xl text-soft leading-relaxed`}>
              {pick(project, 'description', lang)}
            </p>
          </FadeIn>

          {/* Meta grid */}
          <FadeIn delay={0.35}>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-line pt-8 pb-12">
              <MetaItem label={t('detail.client')}   value={pick(project, 'client', lang)} />
              <MetaItem label={t('detail.role')}     value={pick(project, 'role', lang)} />
              <MetaItem label={t('detail.duration')} value={pick(project, 'duration', lang)} />
              <MetaItem label={t('detail.year')}     value={project.year} />
            </div>
          </FadeIn>
        </div>
      </header>

      {/* ── COVER — full-bleed parallax ──────────────────────── */}
      <div ref={coverRef} className="relative overflow-hidden h-[60vh] lg:h-[85vh]">
        <motion.img
          src={project.cover}
          alt={pick(project, 'title', lang)}
          style={{ y: coverY }}
          className="absolute inset-0 w-full h-[120%] object-cover"
          decoding="async"
        />
      </div>

      {/* ── STORY CHAPTERS ───────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 lg:mb-20">
            <FadeIn y={10} className="mb-3">
              <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
                {t('detail.story.eyebrow')}
              </p>
            </FadeIn>
            <ClipReveal as="h2" className="font-display text-[clamp(2.6rem,7vw,5.5rem)] text-bright leading-[0.95] tracking-[-0.01em] whitespace-pre-line">
              {t('detail.story.title')}
            </ClipReveal>
          </div>

          {chapters.map((c, i) => (
            <Chapter key={c.label} index={i + 1} label={c.label} body={c.body} />
          ))}
        </div>
      </section>

      {/* ── BRAND IDENTITY — logo, palette, type guidelines ──── */}
      <BrandIdentity project={project} />

      {/* ── GALLERY — editorial rhythm ───────────────────────── */}
      <section className="pb-16 lg:pb-24">
        {/* First image full-bleed */}
        {project.gallery[0] && (
          <MaskImage
            src={project.gallery[0]}
            alt={`${pick(project, 'title', lang)} — 1`}
            className="w-full"
            aspect="aspect-[16/9]"
          />
        )}

        {/* Pair */}
        {project.gallery.length > 2 && (
          <div className="px-6 lg:px-10 mt-4 lg:mt-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <MaskImage
                src={project.gallery[1]}
                alt={`${pick(project, 'title', lang)} — 2`}
                aspect="aspect-[4/5]"
              />
              <MaskImage
                src={project.gallery[2]}
                alt={`${pick(project, 'title', lang)} — 3`}
                aspect="aspect-[4/5]"
                delay={0.12}
              />
            </div>
          </div>
        )}

        {/* Inset parallax closer */}
        {project.gallery[3] && (
          <div className="px-6 lg:px-10 mt-4 lg:mt-6">
            <div className="max-w-5xl mx-auto">
              <ParallaxImage
                src={project.gallery[3]}
                alt={`${pick(project, 'title', lang)} — 4`}
                className="relative aspect-[16/10]"
                strength={7}
              />
            </div>
          </div>
        )}
      </section>

      {/* ── PROCESS + SIDEBAR ────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* Timeline */}
          <div className="lg:col-span-7">
            <FadeIn y={10} className="mb-3">
              <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
                {t('detail.process.eyebrow')}
              </p>
            </FadeIn>
            <ClipReveal as="h2" className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.95] tracking-[-0.01em] mb-12 whitespace-pre-line">
              {t('detail.process.title')}
            </ClipReveal>

            <div>
              {project.process.map((step, i) => (
                <FadeIn key={step.phase} delay={i * 0.06} className={`grid grid-cols-[56px_1fr] sm:grid-cols-[80px_1fr] gap-5 py-8 ${i === 0 ? 'border-t' : ''} border-b border-line`}>
                  <span className="font-display text-3xl sm:text-4xl leading-none text-muted/40 select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-bright mb-2">{pick(step, 'phase', lang)}</h3>
                    <p className="font-body text-sm lg:text-base text-soft leading-relaxed max-w-xl">{pick(step, 'detail', lang)}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Sticky sidebar */}
          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28 space-y-12">
              <FadeIn>
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-4">{t('detail.services')}</p>
                <ul className="flex flex-wrap gap-2">
                  {pick(project, 'services', lang).map(s => (
                    <li key={s} className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.14em] text-bright border border-bright/15 px-3 py-1.5">
                      {s}
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={0.08}>
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-4">{t('detail.deliverables')}</p>
                <ul>
                  {pick(project, 'deliverables', lang).map(d => (
                    <li key={d} className="flex items-start gap-3 font-body text-sm text-soft py-2.5 border-b border-line last:border-b-0">
                      <span className="w-1 h-1 mt-2 rounded-full bg-bright shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </aside>
        </div>
      </section>

      {/* ── METRICS ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-12">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('detail.metrics')}
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-line border border-line">
            {project.metrics.map((m, i) => (
              <FadeIn key={m.label} delay={i * 0.08} className="bg-void p-8 lg:p-10">
                <Counter
                  value={m.value}
                  className="font-display text-[clamp(2.4rem,5vw,4rem)] leading-none text-bright tracking-[-0.01em] block"
                />
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.16em] text-muted mt-4 leading-relaxed">
                  {pick(m, 'label', lang)}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      {project.testimonial && (
        <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <blockquote>
                <p className={`font-serif ${lang === 'ar' ? '' : 'italic'} text-[clamp(1.5rem,3.6vw,2.8rem)] text-bright leading-[1.2]`}>
                  “{pick(project.testimonial, 'quote', lang)}”
                </p>
                <footer className="mt-10 flex items-center gap-4">
                  <div className="w-10 h-px bg-bright" aria-hidden="true" />
                  <div>
                    <p className="font-body text-sm font-medium text-bright">
                      {pick(project.testimonial, 'author', lang)}
                    </p>
                    <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.16em] text-muted mt-1">
                      {pick(project.testimonial, 'role', lang)}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </section>
      )}

      {/* ── CTA strip ────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14 border-t border-line">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="font-body text-base text-soft">
            {t('detail.cta.eyebrow')}
          </p>
          <Magnetic>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-7 py-4 hover:opacity-80 transition-opacity"
            >
              {t('detail.cta.button')}
              <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Magnetic>
        </div>
      </section>

      {/* ── NEXT PROJECT ─────────────────────────────────────── */}
      <NextProject project={next} lang={lang} t={t} dir={dir} />
    </PageTransition>
  );
}
