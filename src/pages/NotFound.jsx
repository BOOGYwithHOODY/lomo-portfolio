import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import Magnetic from '../components/motion/Magnetic';
import { ClipReveal, FadeIn } from '../components/motion/Reveal';
import { useT } from '../contexts/LanguageContext';

export default function NotFound() {
  const { t } = useT();
  return (
    <PageTransition>
      <Seo title="404" description={t('nf.body')} />
      <section className="min-h-[90svh] pt-32 pb-20 px-6 lg:px-10 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <FadeIn y={10} className="mb-6">
            <p className="font-mono text-[11px] lg:text-[10px] uppercase tracking-[0.3em] text-muted">
              {t('nf.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h1" delay={0.08} className="font-display text-[clamp(8rem,28vw,18rem)] text-bright leading-none tracking-[-0.02em]">
            4<span className="font-serif italic rtl:not-italic text-muted">0</span>4
          </ClipReveal>
          <FadeIn delay={0.2}>
            <p className="mt-4 font-body text-soft text-lg leading-relaxed">
              {t('nf.body')}
            </p>
          </FadeIn>
          <FadeIn delay={0.3} className="mt-10 flex flex-wrap gap-3 justify-center">
            <Magnetic>
              <Link
                to="/"
                className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-7 py-4 hover:opacity-80 transition-opacity"
              >
                {t('nf.home')}
                <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Magnetic>
            <Link
              to="/work"
              className="inline-flex items-center font-mono text-[11px] uppercase tracking-[0.18em] text-bright border border-bright/20 px-7 py-4 hover:border-bright transition-colors"
            >
              {t('nf.work')}
            </Link>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
