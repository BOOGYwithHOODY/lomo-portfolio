import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Instagram, Check, AlertCircle, ArrowUpRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Seo from '../components/Seo';
import Magnetic from '../components/motion/Magnetic';
import { ClipReveal, FadeIn } from '../components/motion/Reveal';
import { useT } from '../contexts/LanguageContext';

const BUDGETS   = ['< $5k', '$5k — $15k', '$15k — $40k', '$40k +', 'Unsure'];
const BUDGETS_AR = ['< 5 آلاف', '5 — 15 ألف', '15 — 40 ألف', '40 ألف +', 'غير محدّد'];

const TIMELINES   = ['ASAP', '< 1 month', '1 — 3 months', '3 — 6 months', 'Flexible'];
const TIMELINES_AR = ['فوراً', '< شهر', '1 — 3 أشهر', '3 — 6 أشهر', 'مرن'];

const SERVICES   = ['Brand Identity', 'Print & Editorial', 'Digital & Motion', 'Art Direction', 'Something else'];
const SERVICES_AR = ['هويّة بصرية', 'مطبوعات وتحرير', 'رقمي وموشن', 'توجيه فنّي', 'شيء آخر'];

function BehanceIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.712-4H19.5c-.105-1.547-1.136-2.219-2.249-2.219-1.185 0-2.147.714-2.237 2.219zM8 11.586c1.559 0 2.325-.84 2.325-2.001 0-1.081-.74-1.918-2.301-1.918H4v3.919H8zm.202 4.414H4v-2.5h4.202c1.7 0 2.476.865 2.476 1.954 0 1.148-.85 2.546-2.476 2.546zM0 4v16h10.207C15.145 20 16 17.007 16 15.5c0-2.252-1.332-3.646-3.079-4.121 1.413-.545 2.279-1.725 2.279-3.313C15.2 5.457 13.041 4 9.964 4H0z" />
    </svg>
  );
}

function Label({ children }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-3">{children}</p>;
}

function Field({ label, error, children }) {
  return (
    <div>
      <Label>{label}</Label>
      {children}
      {error && (
        <p className="mt-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-bright">
          <AlertCircle size={12} /> {error}
        </p>
      )}
    </div>
  );
}

function Chip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`font-mono text-[10px] uppercase tracking-[0.14em] px-3 py-2 border transition-colors ${
        selected
          ? 'bg-bright text-void border-bright'
          : 'bg-transparent text-soft border-bright/15 hover:text-bright hover:border-bright'
      }`}
    >
      {children}
    </button>
  );
}

const inputClass =
  'w-full bg-transparent border-b border-line px-0 py-3 font-body text-lg text-bright placeholder:text-muted focus:outline-none focus:border-bright transition-colors';

export default function Contact() {
  const { t, lang } = useT();
  const services  = lang === 'ar' ? SERVICES_AR  : SERVICES;
  const budgets   = lang === 'ar' ? BUDGETS_AR   : BUDGETS;
  const timelines = lang === 'ar' ? TIMELINES_AR : TIMELINES;

  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service:  services[0],
    budget:   budgets[1],
    timeline: timelines[2],
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function update(field, value) {
    setForm(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }

  function validate() {
    const e = {};
    if (!form.name.trim())                       e.name    = t('contact.error.name');
    if (!/^\S+@\S+\.\S+$/.test(form.email))      e.email   = t('contact.error.email');
    if (form.message.trim().length < 12)         e.message = t('contact.error.message');
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('sending');
    setTimeout(() => setStatus('success'), 900);
  }

  return (
    <PageTransition>
      <Seo title={t('nav.contact')} description={t('contact.body')} />

      {/* ── Header ─────────────────────────────────────────── */}
      <header className="pt-28 lg:pt-36 pb-14 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn y={10} className="mb-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted">
              {t('contact.eyebrow')}
            </p>
          </FadeIn>
          <ClipReveal as="h1" delay={0.08} className="font-display text-[clamp(4rem,12vw,10rem)] text-bright leading-[0.92] tracking-[-0.02em] whitespace-pre-line">
            {t('contact.title')}
          </ClipReveal>
          <FadeIn delay={0.2} className="mt-6 max-w-2xl">
            <p className="font-body text-base text-soft leading-relaxed">
              {t('contact.body')}
            </p>
          </FadeIn>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────── */}
      <section className="px-6 lg:px-10 py-16 border-t border-line">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14">

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-10">
            <FadeIn>
              <Label>{t('contact.direct')}</Label>
              <a href="mailto:hello@lomo.studio" className="group inline-flex items-center gap-2 font-heading text-xl lg:text-2xl text-bright hover:text-muted transition-colors">
                <Mail size={18} /> hello@lomo.studio
              </a>
            </FadeIn>

            <FadeIn delay={0.06}>
              <Label>{t('contact.studio')}</Label>
              <p className="font-body text-bright">{t('aboutPage.location')}</p>
              <p className="font-body text-soft text-sm mt-1">{t('contact.tz')}</p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <Label>{t('contact.response')}</Label>
              <p className="font-body text-bright">{t('contact.responseBody')}</p>
              <p className="font-body text-soft text-sm mt-1">{t('contact.responseSub')}</p>
            </FadeIn>

            <FadeIn delay={0.18}>
              <Label>{t('contact.elsewhere')}</Label>
              <div className="flex flex-col gap-2.5">
                {[
                  { label: 'Behance', href: 'https://www.behance.net/', Icon: BehanceIcon },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
                  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: Instagram },
                ].map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-soft hover:text-bright transition-colors"
                  >
                    <Icon size={14} /> {label}
                    <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </aside>

          {/* Form */}
          <FadeIn delay={0.1} className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {status !== 'success' ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  onSubmit={handleSubmit}
                  className="space-y-10"
                  noValidate
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Field label={t('contact.form.name')} error={errors.name}>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        className={inputClass}
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </Field>
                    <Field label={t('contact.form.email')} error={errors.email}>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        className={inputClass}
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </Field>
                  </div>

                  <Field label={t('contact.form.company')}>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => update('company', e.target.value)}
                      className={inputClass}
                      placeholder={t('contact.form.companyPlaceholder')}
                    />
                  </Field>

                  <div>
                    <Label>{t('contact.form.service')}</Label>
                    <div className="flex flex-wrap gap-2">
                      {services.map(s => (
                        <Chip key={s} selected={form.service === s} onClick={() => update('service', s)}>
                          {s}
                        </Chip>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <Label>{t('contact.form.budget')}</Label>
                      <div className="flex flex-wrap gap-2">
                        {budgets.map(b => (
                          <Chip key={b} selected={form.budget === b} onClick={() => update('budget', b)}>
                            {b}
                          </Chip>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label>{t('contact.form.timeline')}</Label>
                      <div className="flex flex-wrap gap-2">
                        {timelines.map(tl => (
                          <Chip key={tl} selected={form.timeline === tl} onClick={() => update('timeline', tl)}>
                            {tl}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Field label={t('contact.form.message')} error={errors.message}>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={5}
                      className={`${inputClass} resize-none`}
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </Field>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
                    <p className="font-body text-xs text-muted max-w-xs">
                      {t('contact.form.privacy')}
                    </p>
                    <Magnetic>
                      <button
                        type="submit"
                        disabled={status === 'sending'}
                        className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-8 py-4 hover:opacity-80 transition-opacity disabled:opacity-50"
                      >
                        {status === 'sending' ? t('contact.form.sending') : t('contact.form.send')}
                        <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>
                    </Magnetic>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="py-16"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-bright text-void mb-8">
                    <Check size={24} strokeWidth={2.5} />
                  </div>
                  <h2 className="font-display text-4xl lg:text-5xl text-bright tracking-[-0.01em] mb-4">
                    {t('contact.success.title')}
                  </h2>
                  <p className="font-body text-soft max-w-md leading-relaxed">
                    {t('contact.success.body', { name: form.name.split(' ')[0] || (lang === 'ar' ? 'صديقي' : 'friend') })}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>
        </div>
      </section>
    </PageTransition>
  );
}
