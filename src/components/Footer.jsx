import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Linkedin, Instagram, Mail } from 'lucide-react';
import { useT } from '../contexts/LanguageContext';
import { ClipReveal, FadeIn } from './motion/Reveal';
import Magnetic from './motion/Magnetic';
import LogoMark from './LogoMark';

function BehanceIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-7.712-4H19.5c-.105-1.547-1.136-2.219-2.249-2.219-1.185 0-2.147.714-2.237 2.219zM8 11.586c1.559 0 2.325-.84 2.325-2.001 0-1.081-.74-1.918-2.301-1.918H4v3.919H8zm.202 4.414H4v-2.5h4.202c1.7 0 2.476.865 2.476 1.954 0 1.148-.85 2.546-2.476 2.546zM0 4v16h10.207C15.145 20 16 17.007 16 15.5c0-2.252-1.332-3.646-3.079-4.121 1.413-.545 2.279-1.725 2.279-3.313C15.2 5.457 13.041 4 9.964 4H0z" />
    </svg>
  );
}

const SOCIALS = [
  { label: 'Behance',   href: 'https://www.behance.net/',   Icon: BehanceIcon  },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/',  Icon: Linkedin     },
  { label: 'Instagram', href: 'https://www.instagram.com/', Icon: Instagram    },
];

// Live studio clock — always Riyadh time, regardless of the visitor's zone.
function StudioClock() {
  const { t, lang } = useT();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const time = new Intl.DateTimeFormat(lang === 'ar' ? 'ar-SA' : 'en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Asia/Riyadh',
  }).format(now);

  return (
    <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted tabular-nums">
      {t('footer.city')} · {time}
    </span>
  );
}

export default function Footer() {
  const { t } = useT();
  const year = new Date().getFullYear();

  const NAV = [
    { label: t('nav.work'),     to: '/work'     },
    { label: t('nav.about'),    to: '/about'    },
    { label: t('nav.services'), to: '/services' },
    { label: t('nav.journal'),  to: '/journal'  },
    { label: t('nav.contact'),  to: '/contact'  },
  ];

  return (
    <footer className="border-t border-line bg-void">

      {/* ── CTA section ───────────────────────────────────── */}
      <div className="px-6 lg:px-10 py-20 lg:py-28 border-b border-line">
        <div className="max-w-7xl mx-auto">

          {/* Big heading */}
          <div className="mb-10 lg:mb-14">
            <ClipReveal className="font-display text-[clamp(4rem,12vw,10rem)] tracking-[-0.02em] leading-[0.9] text-bright">
              {t('footer.cta.l1')}
            </ClipReveal>
            <ClipReveal delay={0.12} className="font-serif italic rtl:not-italic text-[clamp(4rem,12vw,10rem)] leading-[1] text-muted">
              {t('footer.cta.l2')}
            </ClipReveal>
          </div>

          {/* Email link */}
          <FadeIn delay={0.25} className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <a
              href="mailto:hello@lomo.studio"
              className="group inline-flex items-center gap-3 font-heading text-lg lg:text-2xl text-bright hover:text-muted transition-colors"
            >
              <Mail size={20} strokeWidth={1.5} className="shrink-0" />
              hello@lomo.studio
              <ArrowUpRight
                size={16}
                strokeWidth={1.5}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>

            <Magnetic>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-7 py-4 hover:opacity-80 transition-opacity"
              >
                {t('nav.contact')}
                <ArrowUpRight size={12} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Magnetic>
          </FadeIn>
        </div>
      </div>

      {/* ── Bottom strip ──────────────────────────────────── */}
      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-start">

            {/* Brand */}
            <div className="flex flex-col gap-3">
              <Link
                to="/"
                dir="ltr"
                className="flex items-center font-display tracking-widest text-2xl text-bright hover:text-muted transition-colors leading-none"
                aria-label="LOMO — home"
              >
                L<LogoMark brand className="h-[0.72em] w-auto me-[0.1em]" />MO
              </Link>
              <p className="font-mono text-[10px] text-muted leading-relaxed max-w-xs">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
              {NAV.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted hover:text-bright transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Socials */}
            <div className="flex items-center gap-4 md:justify-end">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group flex items-center gap-2 text-muted hover:text-bright transition-colors"
                >
                  <Icon size={14} />
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] hidden sm:block">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              © {year} LOMO Studio. {t('footer.rights')}
            </p>
            <div className="flex items-center gap-5">
              <StudioClock />
              <p className="font-mono text-[9px] text-muted">
                {t('footer.built')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
