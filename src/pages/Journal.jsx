import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import Magnetic from '../components/motion/Magnetic';
import { ClipReveal, FadeIn, MaskImage } from '../components/motion/Reveal';
import { JOURNAL, pick } from '../data/projects';
import { useT } from '../contexts/LanguageContext';

function formatDate(iso, lang) {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === 'ar' ? 'ar-EG' : 'en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function Journal() {
  const { t, lang } = useT();
  const [featured, ...rest] = JOURNAL;
  const [subscribed, setSubscribed] = useState(false);

  return (
    <PageTransition>
      <Seo title={t('nav.journal')} description={t('journal.body')} />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 pb-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-4">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('journal.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h1" delay={0.08} className="font-display text-[clamp(4rem,12vw,10rem)] text-bright leading-[0.92] tracking-[-0.02em]">
            {t('journal.title')}
          </ClipReveal>
          <FadeIn delay={0.2} className="mt-6 max-w-2xl">
            <p className="font-body text-base text-soft leading-relaxed">
              {t('journal.body')}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ── Featured essay ─────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <article className="group grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <Link to={`/journal/${featured.slug}`} className="lg:col-span-7 block">
              <MaskImage
                src={featured.cover}
                alt={pick(featured, 'title', lang)}
                aspect="aspect-[16/10]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </Link>
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted mb-4">
                  {t('journal.latest')} · {pick(featured, 'category', lang)}
                </p>
                <Link to={`/journal/${featured.slug}`}>
                  <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] text-bright tracking-[-0.01em] leading-[0.98] mb-4 group-hover:text-soft transition-colors">
                    {pick(featured, 'title', lang)}
                  </h2>
                </Link>
                <p className={`font-serif ${lang === 'ar' ? '' : 'italic'} text-lg text-soft mb-4`}>
                  {pick(featured, 'subtitle', lang)}
                </p>
                <p className="font-body text-sm text-soft leading-relaxed mb-6">
                  {pick(featured, 'excerpt', lang)}
                </p>
                <div className="flex items-center gap-4 mb-8 font-mono text-[11px] lg:text-[10px] text-muted uppercase tracking-[0.16em]">
                  <span>{formatDate(featured.date, lang)}</span>
                  <span className="w-1 h-1 bg-muted rounded-full" />
                  <span className="flex items-center gap-1.5"><Clock size={11} /> {pick(featured, 'readingTime', lang)}</span>
                </div>
                <Link
                  to={`/journal/${featured.slug}`}
                  className="group/btn inline-flex items-center gap-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.18em] text-bright border-b border-bright/30 hover:border-bright pb-1 transition-colors"
                >
                  {t('journal.read')}
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </FadeIn>
            </div>
          </article>
        </div>
      </section>

      {/* ── All entries — editorial rows ───────────────────── */}
      <section className="px-6 lg:px-10 py-16 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="mb-8">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">{t('journal.all')}</p>
          </FadeIn>

          <ul className="border-t border-line">
            {rest.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.05}>
                <li>
                  <Link
                    to={`/journal/${post.slug}`}
                    className="group grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline py-7 border-b border-line hover:bg-panel/60 transition-colors px-2"
                  >
                    <span className="md:col-span-2 font-mono text-[11px] lg:text-[10px] tracking-[0.14em] text-muted">
                      {formatDate(post.date, lang)}
                    </span>
                    <div className="md:col-span-6">
                      <h3 className="font-display text-2xl lg:text-3xl tracking-[-0.01em] text-bright group-hover:text-soft transition-colors">
                        {pick(post, 'title', lang)}
                      </h3>
                      <p className="font-body text-sm text-soft mt-1.5">{pick(post, 'subtitle', lang)}</p>
                    </div>
                    <span className="md:col-span-2 font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.16em] text-muted">
                      {pick(post, 'category', lang)}
                    </span>
                    <span className="md:col-span-2 flex items-center md:justify-end gap-1.5 font-mono text-[11px] lg:text-[10px] text-muted uppercase tracking-[0.14em]">
                      <Clock size={11} /> {pick(post, 'readingTime', lang)}
                      <ArrowUpRight size={12} className="ms-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </Link>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Newsletter ─────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn y={10} className="mb-3">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('journal.sub.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h2" className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.98] tracking-[-0.01em] mb-6 whitespace-pre-line">
            {t('journal.sub.title')}
          </ClipReveal>
          <FadeIn delay={0.1} className="mb-8">
            <p className="font-body text-sm text-soft max-w-md mx-auto leading-relaxed">
              {t('journal.sub.body')}
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            {subscribed ? (
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-bright py-4">
                {t('journal.sub.thanks')}
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); setSubscribed(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  required
                  placeholder={t('journal.sub.placeholder')}
                  aria-label={t('journal.sub.placeholder')}
                  className="flex-1 bg-transparent border-b border-line px-0 py-3 font-body text-bright placeholder:text-muted focus:outline-none focus:border-bright transition-colors"
                />
                <Magnetic>
                  <button
                    type="submit"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] bg-bright text-void px-7 py-3.5 hover:opacity-80 transition-opacity"
                  >
                    {t('journal.sub.button')}
                  </button>
                </Magnetic>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
