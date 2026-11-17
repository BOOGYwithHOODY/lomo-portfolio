import { Link } from 'react-router-dom';
import { ArrowUpRight, Download } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import Testimonials from '../components/Testimonials';
import Magnetic from '../components/motion/Magnetic';
import { ClipReveal, FadeIn, ParallaxImage } from '../components/motion/Reveal';
import { SKILLS, EXPERIENCE, AWARDS, pick } from '../data/projects';
import { useT } from '../contexts/LanguageContext';

const TOOLS_EN = [
  { name: 'Adobe Creative Suite', detail: 'Daily driver — Illustrator, InDesign, Photoshop, After Effects, Premiere' },
  { name: 'Figma',                 detail: 'For digital systems, UI mocks, and team collaboration' },
  { name: 'Cinema 4D + Octane',     detail: 'For 3D-heavy motion work and key visual rendering' },
  { name: 'Glyphs 3',               detail: 'For custom type design and specimen work' },
  { name: 'Riso & screen print',    detail: 'In-house and at a partner studio for limited print runs' },
];

const TOOLS_AR = [
  { name: 'Adobe Creative Suite', detail: 'الأداة اليومية — Illustrator، InDesign، Photoshop، After Effects، Premiere' },
  { name: 'Figma',                 detail: 'للأنظمة الرقمية، نماذج الواجهات، والتعاون مع الفرق' },
  { name: 'Cinema 4D + Octane',     detail: 'لأعمال الموشن ثلاثية الأبعاد وعرض الصور المفتاحية' },
  { name: 'Glyphs 3',               detail: 'لتصميم الخطوط المخصّصة وأعمال النماذج' },
  { name: 'Riso وطباعة شاشة',       detail: 'داخلياً وفي استوديو شريك للطبعات المحدودة' },
];

export default function About() {
  const { t, lang } = useT();
  const TOOLS = lang === 'ar' ? TOOLS_AR : TOOLS_EN;
  const STATS = [
    { value: '6+',   label: t('about.stats.years')    },
    { value: '80+',  label: t('about.stats.projects') },
    { value: '30+',  label: t('about.stats.clients')  },
    { value: '12',   label: t('about.stats.awards')   },
  ];

  return (
    <PageTransition>
      <Seo title={t('nav.about')} description={t('aboutPage.sub')} />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 pb-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-4">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('aboutPage.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h1" delay={0.08} className="font-display text-[clamp(3.4rem,11vw,9rem)] text-bright leading-[0.92] tracking-[-0.02em] whitespace-pre-line">
            {t('aboutPage.title')}
          </ClipReveal>
          <FadeIn delay={0.2} className="mt-6 max-w-2xl">
            <p className={`font-serif ${lang === 'ar' ? '' : 'italic'} text-xl lg:text-2xl text-soft leading-relaxed`}>
              {t('aboutPage.sub')}
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-8 flex flex-wrap gap-2">
            {[t('aboutPage.location'), t('aboutPage.availability'), t('aboutPage.remote')].map((tag) => (
              <span key={tag} className="inline-flex items-center gap-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.16em] text-soft border border-bright/15 px-3 py-1.5">
                {tag}
              </span>
            ))}
          </FadeIn>
        </div>
      </header>

      {/* ── Portrait + bio ─────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 lg:py-24 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <ParallaxImage
              src="/portrait.jpg"
              alt="Mohamad Othman"
              className="relative w-full aspect-[4/5] bg-panel"
              strength={6}
            />
            <p className="mt-4 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] text-muted">
              {t('aboutPage.studioCap')}
            </p>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <FadeIn>
              <p className="font-body text-xl lg:text-2xl text-bright leading-relaxed">{t('aboutPage.bio1')}</p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <p className="font-body text-base text-soft leading-relaxed">{t('aboutPage.bio2')}</p>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="font-body text-base text-soft leading-relaxed">{t('aboutPage.bio3')}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="font-body text-base text-soft leading-relaxed">{t('aboutPage.bio4')}</p>
            </FadeIn>

            <FadeIn delay={0.25} className="flex flex-wrap gap-3 pt-4">
              <Magnetic>
                <a
                  href="/cv.pdf"
                  download
                  className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-6 py-3.5 hover:opacity-80 transition-opacity"
                >
                  <Download size={13} /> {t('aboutPage.downloadCV')}
                </a>
              </Magnetic>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bright border border-bright/20 px-6 py-3.5 hover:border-bright transition-colors"
              >
                {t('aboutPage.getInTouch')} <ArrowUpRight size={12} />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Stats ──────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map(({ value, label }, i) => (
            <FadeIn key={label} delay={i * 0.06} className="group">
              <p className="font-display text-[clamp(3rem,6vw,5rem)] text-bright leading-none tracking-[-0.02em] group-hover:text-muted transition-colors">
                {value}
              </p>
              <p className="font-mono text-[11px] lg:text-[11px] lg:text-[10px] uppercase tracking-[0.2em] text-muted mt-2.5">{label}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── Experience ─────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <FadeIn y={10} className="mb-3">
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
                  {t('aboutPage.experience.eyebrow')}
                </p>
              </FadeIn>
              <ClipReveal className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.95] tracking-[-0.01em] whitespace-pre-line">
                {t('aboutPage.experience.title')}
              </ClipReveal>
            </div>
          </div>

          <ol className="lg:col-span-8">
            {EXPERIENCE.map((e, i) => (
              <FadeIn
                key={e.period}
                delay={i * 0.05}
                className={`grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-3 sm:gap-8 py-8 ${i === 0 ? 'border-t' : ''} border-b border-line`}
              >
                <span className="font-mono text-[11px] lg:text-[10px] tracking-[0.14em] text-muted pt-1.5">{pick(e, 'period', lang)}</span>
                <div>
                  <h3 className="font-heading text-lg lg:text-xl font-semibold text-bright">{pick(e, 'role', lang)}</h3>
                  <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.14em] text-muted mt-1.5 mb-3">{pick(e, 'place', lang)}</p>
                  <p className="font-body text-sm text-soft leading-relaxed max-w-xl">{pick(e, 'note', lang)}</p>
                </div>
              </FadeIn>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Tools & skills ─────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <FadeIn y={10} className="mb-3">
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
                  {t('aboutPage.tools.eyebrow')}
                </p>
              </FadeIn>
              <ClipReveal className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.95] tracking-[-0.01em] whitespace-pre-line mb-6">
                {t('aboutPage.tools.title')}
              </ClipReveal>
              <FadeIn delay={0.1}>
                <p className="font-body text-sm text-soft max-w-sm leading-relaxed">
                  {t('aboutPage.tools.body')}
                </p>
              </FadeIn>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-14">
            <ul>
              {TOOLS.map((tool, i) => (
                <FadeIn
                  key={tool.name}
                  delay={i * 0.04}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 py-6 ${i === 0 ? 'border-t' : ''} border-b border-line`}
                >
                  <p className="font-heading font-semibold text-bright">{tool.name}</p>
                  <p className="md:col-span-2 font-body text-sm text-soft leading-relaxed">{tool.detail}</p>
                </FadeIn>
              ))}
            </ul>

            <FadeIn>
              <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-4">{t('aboutPage.areas')}</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map(s => (
                  <span key={s} className="font-mono text-[11px] lg:text-[11px] lg:text-[10px] uppercase tracking-[0.14em] text-soft border border-bright/10 px-3 py-1.5 hover:text-bright hover:border-bright transition-colors cursor-default">
                    {s}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Recognition ────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-3">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('aboutPage.recognition.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h2" className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.95] tracking-[-0.01em] mb-12">
            {t('aboutPage.recognition.title')}
          </ClipReveal>

          <ul className="border-t border-line">
            {AWARDS.map((a, i) => (
              <FadeIn
                key={a.title + a.project}
                delay={i * 0.04}
                className="grid grid-cols-[64px_1fr] md:grid-cols-[96px_1fr_auto] gap-4 py-6 items-baseline border-b border-line group hover:bg-panel/60 transition-colors px-2"
              >
                <span className="font-mono text-[11px] tracking-[0.14em] text-muted">{a.year}</span>
                <p className="font-heading text-base lg:text-lg font-medium text-bright">
                  {pick(a, 'title', lang)}
                </p>
                <p className="hidden md:block font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.14em] text-muted text-end">
                  {pick(a, 'project', lang)}
                </p>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <Testimonials />

      {/* ── Journal CTA strip ──────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14 border-t border-line">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-2">{t('aboutPage.journalCTA.eyebrow')}</p>
            <p className="font-display text-3xl md:text-4xl text-bright tracking-[-0.01em]">{t('aboutPage.journalCTA.title')}</p>
          </div>
          <Magnetic>
            <Link
              to="/journal"
              className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-7 py-4 hover:opacity-80 transition-opacity"
            >
              {t('aboutPage.journalCTA.button')}
              <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </PageTransition>
  );
}
