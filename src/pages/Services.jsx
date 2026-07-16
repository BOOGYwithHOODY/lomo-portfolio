import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plus } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import Magnetic from '../components/motion/Magnetic';
import { ClipReveal, FadeIn } from '../components/motion/Reveal';
import { SERVICES, pick } from '../data/projects';
import { PALMER_EASE } from '../hooks/animations';
import { useT } from '../contexts/LanguageContext';

const PRINCIPLES_EN = [
  { title: 'Strategy first', body: 'Every visual decision answers a positioning question. If we can\'t name the why, we don\'t ship the what.' },
  { title: 'Restraint',      body: 'Reduce until removing the next thing breaks the idea. Then stop.' },
  { title: 'Systems',         body: 'Identities should be usable by future designers without losing the thread.' },
  { title: 'Craft',           body: 'The unglamorous details — kerning, alignment, print spec — are where the work becomes real.' },
];

const PRINCIPLES_AR = [
  { title: 'الاستراتيجية أوّلاً', body: 'كلّ قرار بصري يجيب عن سؤال تموضع. إن لم نستطع تسمية «لماذا»، لا نشحن «ماذا».' },
  { title: 'الاقتضاب',             body: 'قلّل حتى يصبح حذف الشيء التالي يكسر الفكرة. ثمّ توقّف.' },
  { title: 'الأنظمة',               body: 'ينبغي أن تكون الهويّات قابلة للاستخدام من المصمّمين اللاحقين دون فقدان الخيط.' },
  { title: 'الحرفية',               body: 'التفاصيل غير اللامعة — الكيرنينج، المحاذاة، مواصفات الطباعة — هي حيث يصبح العمل حقيقياً.' },
];

const FAQ_EN = [
  { q: 'How do projects usually start?',
    a: 'A short intro call to make sure we\'re a fit, followed by a written proposal with scope, timeline, and price. No surprises after that document is signed.' },
  { q: 'Do you work with agencies?',
    a: 'Yes — both as a lead and as part of a wider team. I\'ve white-labelled work for three agencies and can sign NDAs as needed.' },
  { q: "What's the smallest engagement you take?",
    a: 'I take small pieces of work (a poster, an album sleeve, a one-page identity refresh) when the brief is interesting. Drop me a note even if it\'s small.' },
  { q: 'Do you handle production?',
    a: 'For print, yes — I\'ll specify, supply files, and sit on press if the run warrants it. For motion and web, I work with trusted producers and developers.' },
  { q: 'Where are you based, and do you travel?',
    a: 'Riyadh, KSA. I travel for press checks, kickoffs, and major launches. Most projects run remotely with one or two in-person touchpoints.' },
];

const FAQ_AR = [
  { q: 'كيف تبدأ المشاريع عادةً؟',
    a: 'مكالمة تعارف قصيرة لنتأكّد من التناسب، تليها مقترح مكتوب يتضمّن النطاق والجدول الزمني والسعر. لا مفاجآت بعد توقيع الوثيقة.' },
  { q: 'هل تعمل مع الوكالات؟',
    a: 'نعم — كرئيس وكجزء من فريق أوسع. عملتُ بعلامات بيضاء لثلاث وكالات وأستطيع توقيع اتفاقيات سرّية عند الحاجة.' },
  { q: 'ما أصغر التزام تأخذه؟',
    a: 'آخذ أعمالاً صغيرة (ملصق، غلاف ألبوم، تحديث هويّة بصفحة واحدة) حين يكون البرّيف مثيراً للاهتمام. راسلني حتى لو كان صغيراً.' },
  { q: 'هل تتولّى الإنتاج؟',
    a: 'للمطبوعات نعم — أكتب المواصفات، أقدّم الملفّات، وأحضر على الطابعة إن استحقّت الطبعة ذلك. للموشن والويب، أعمل مع منتجين ومطوّرين موثوقين.' },
  { q: 'أين مقرّك، وهل تسافر؟',
    a: 'الرياض، السعودية. أسافر للتدقيق الطباعي، الانطلاقات، والإطلاقات الكبرى. معظم المشاريع تجري عن بُعد مع نقطة أو نقطتَي تواصل حضوري.' },
];

// ── Expanding service row ─────────────────────────────────────────────────────
function ServiceRow({ service, lang, t, open, onToggle }) {
  return (
    <FadeIn className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group w-full flex items-center gap-5 lg:gap-10 py-8 lg:py-10 text-start"
      >
        <span className="font-mono text-[11px] tracking-[0.18em] text-muted shrink-0 w-8">
          {service.number}
        </span>
        <span className="flex-1 min-w-0">
          <span className="block font-display text-[clamp(1.8rem,5vw,3.6rem)] leading-none tracking-[-0.01em] text-bright group-hover:text-soft transition-colors">
            {pick(service, 'title', lang)}
          </span>
          <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-muted mt-2.5">
            {pick(service, 'tagline', lang)}
          </span>
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.35, ease: PALMER_EASE }}
          className="shrink-0 text-muted group-hover:text-bright transition-colors"
        >
          <Plus size={22} strokeWidth={1.5} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: PALMER_EASE }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 lg:ps-[72px] pe-2">

              {/* Description */}
              <div className="lg:col-span-6 space-y-5">
                <p className="font-body text-base lg:text-lg text-bright leading-relaxed">
                  {pick(service, 'description', lang)}
                </p>
                <p className="font-body text-sm text-soft leading-relaxed">
                  {pick(service, 'longDescription', lang)}
                </p>
                <Link
                  to="/contact"
                  className="group/btn inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-bright border-b border-bright/30 hover:border-bright pb-1 transition-colors"
                >
                  {t('services.enquire')} {pick(service, 'title', lang)}
                  <ArrowUpRight size={12} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Deliverables */}
              <div className="lg:col-span-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-4">
                  {t('services.whatYouGet')}
                </p>
                <ul className="space-y-2.5">
                  {pick(service, 'deliverables', lang).map(d => (
                    <li key={d} className="flex items-start gap-2.5 font-body text-sm text-soft">
                      <span className="w-1 h-1 mt-2 rounded-full bg-bright shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Meta */}
              <div className="lg:col-span-3 space-y-6">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-1.5">{t('services.from')}</p>
                  <p className="font-display text-2xl text-bright">{service.startingFrom}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-1.5">{t('contact.form.timeline')}</p>
                  <p className="font-body text-sm text-bright">{pick(service, 'timeline', lang)}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted mb-1.5">Best for</p>
                  <p className="font-body text-sm text-soft leading-relaxed">{pick(service, 'bestFor', lang)}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </FadeIn>
  );
}

// ── FAQ accordion item ────────────────────────────────────────────────────────
function FaqItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group w-full flex items-center justify-between gap-6 py-6 text-start"
      >
        <span className="font-heading text-base lg:text-lg font-medium text-bright group-hover:text-soft transition-colors">
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: PALMER_EASE }}
          className="shrink-0 text-muted"
        >
          <Plus size={18} strokeWidth={1.5} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: PALMER_EASE }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm lg:text-base text-soft leading-relaxed pb-7 max-w-2xl">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  const { t, lang } = useT();
  const PRINCIPLES = lang === 'ar' ? PRINCIPLES_AR : PRINCIPLES_EN;
  const FAQ = lang === 'ar' ? FAQ_AR : FAQ_EN;
  const [openService, setOpenService] = useState(SERVICES[0]?.id ?? null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <PageTransition>
      <Seo title={t('nav.services')} description={t('services.page.body')} />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 pb-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('services.page.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h1" delay={0.08} className="font-display text-[clamp(3.4rem,11vw,9rem)] text-bright leading-[0.92] tracking-[-0.02em] whitespace-pre-line">
            {t('services.page.title')}
          </ClipReveal>
          <FadeIn delay={0.2} className="mt-6 max-w-2xl">
            <p className="font-body text-base text-soft leading-relaxed">
              {t('services.page.body')}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ── Service rows ───────────────────────────────────── */}
      <section className="px-6 lg:px-10 pb-20">
        <div className="max-w-7xl mx-auto border-t border-line">
          {SERVICES.map((s) => (
            <ServiceRow
              key={s.id}
              service={s}
              lang={lang}
              t={t}
              open={openService === s.id}
              onToggle={() => setOpenService(openService === s.id ? null : s.id)}
            />
          ))}
        </div>
      </section>

      {/* ── Principles ─────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <FadeIn y={10} className="mb-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
                  {t('services.principles.eyebrow')}
                </p>
              </FadeIn>
              <ClipReveal className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.95] tracking-[-0.01em] whitespace-pre-line">
                {t('services.principles.title')}
              </ClipReveal>
            </div>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {PRINCIPLES.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.06} className="py-8 border-b border-line">
                <p className="font-display text-3xl text-muted/40 mb-4 select-none">{String(i + 1).padStart(2, '0')}</p>
                <h3 className="font-heading text-lg font-semibold text-bright mb-2.5">{p.title}</h3>
                <p className="font-body text-sm text-soft leading-relaxed">{p.body}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-20 lg:py-28 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <FadeIn y={10} className="mb-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('services.faq.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h2" className="font-display text-[clamp(2.4rem,5vw,4rem)] text-bright leading-[0.95] tracking-[-0.01em] mb-12">
            {t('services.faq.title')}
          </ClipReveal>

          <div className="border-t border-line">
            {FAQ.map((f, i) => (
              <FaqItem
                key={f.q}
                item={f}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ──────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-14 border-t border-line">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted mb-2">{t('services.ready.eyebrow')}</p>
            <p className="font-display text-3xl md:text-4xl text-bright tracking-[-0.01em]">{t('services.ready.title')}</p>
          </div>
          <Magnetic>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-7 py-4 hover:opacity-80 transition-opacity"
            >
              {t('services.ready.button')}
              <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Magnetic>
        </div>
      </section>
    </PageTransition>
  );
}
