// ─────────────────────────────────────────────────────────────────────────────
//  BRAND LOGO SYSTEMS
//  Original marks drawn for each case-study brand. Marks are pure SVG paths
//  (currentColor), wordmarks are set in each brand's licensed face — both
//  compose into lockups exactly as a real identity system would.
// ─────────────────────────────────────────────────────────────────────────────

/* ── NOIR COLLECTIVE — brutalist fashion ─────────────────────────────────────
   Mark: a solid square sliced by a single diagonal cut — tailoring as gesture.
   The accent square sits once, like a stitched label. */
export function NoirMark({ size = 64, accent = '#FF6B00', className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M0 0h64v64H0Z M10 17.5 46.5 54l7.5-7.5L17.5 10Z"
      />
      <rect x="55" y="55" width="9" height="9" fill={accent} />
    </svg>
  );
}

export function NoirWordmark({ className = '', bilingual = false }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} dir="ltr">
      <span className="font-display tracking-[0.32em] indent-[0.32em] text-[2.2em]">NOIR</span>
      {bilingual && (
        <span className="font-arabic text-[0.95em] tracking-[0.12em] mt-[0.5em] opacity-80">نـوار</span>
      )}
    </span>
  );
}

/* ── VÉRA BEAUTÉ — luxury cosmetics ──────────────────────────────────────────
   Mark: two thin symmetric arcs meeting in a soft V — a petal opening —
   crowned by the é dot. Drawn at hairline weight for print foiling. */
export function VeraMark({ size = 64, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <circle cx="32" cy="7" r="2.6" fill="currentColor" />
      <path
        d="M13 16 C13 40 24 51 32 56 C40 51 51 40 51 16"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M22 16 C22 34 27 44 32 48 C37 44 42 34 42 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function VeraWordmark({ className = '' }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} dir="ltr">
      <span className="font-serif italic text-[2.6em] tracking-[0.02em]">Véra</span>
      <span className="font-body text-[0.62em] tracking-[0.55em] indent-[0.55em] uppercase mt-[0.55em] opacity-70">
        Beauté
      </span>
    </span>
  );
}

/* ── HELIO COFFEE — specialty roaster ────────────────────────────────────────
   Mark: sun-as-symbol. Soft geometric core with eight rounded rays that hold
   at any size — reads on a 12mm bag stamp or a fascia sign. */
export function HelioMark({ size = 64, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="11.5" fill="currentColor" />
      <g fill="currentColor">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
          <rect
            key={deg}
            x="30.2"
            y="3.5"
            width="3.6"
            height="10.5"
            rx="1.8"
            transform={`rotate(${deg} 32 32)`}
          />
        ))}
      </g>
    </svg>
  );
}

export function HelioWordmark({ className = '' }) {
  return (
    <span className={`inline-flex flex-col items-center leading-none ${className}`} dir="ltr">
      <span className="font-body font-bold text-[1.75em] tracking-[0.34em] indent-[0.34em] uppercase">
        Helio
      </span>
      <span className="font-mono text-[0.55em] tracking-[0.4em] indent-[0.4em] uppercase mt-[0.6em] opacity-60">
        Roasters
      </span>
    </span>
  );
}

/* ── FORMA STUDIO — architecture & interiors ─────────────────────────────────
   Mark: the three primitives of the system — mass (solid), void (frame),
   line (rule) — set on a quarter grid. The empty cell is deliberate. */
export function FormaMark({ size = 64, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="0" y="0" width="28" height="28" fill="currentColor" />
      <rect x="37.25" y="1.25" width="25.5" height="25.5" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <rect x="0" y="48.5" width="28" height="3" fill="currentColor" />
    </svg>
  );
}

export function FormaWordmark({ className = '' }) {
  return (
    <span className={`inline-flex flex-col items-start leading-none ${className}`} dir="ltr">
      <span className="font-heading font-bold text-[1.9em] tracking-[0.08em] uppercase">Forma</span>
      <span className="font-mono text-[0.55em] tracking-[0.3em] uppercase mt-[0.5em] opacity-60">
        Architecture · Interiors
      </span>
    </span>
  );
}

/* ── Registry ────────────────────────────────────────────────────────────────
   Lookup used by the BrandIdentity section: mark + wordmark + lockup layout. */
export const BRAND_LOGOS = {
  noir: {
    Mark: NoirMark,
    Wordmark: (props) => <NoirWordmark bilingual {...props} />,
    lockup: 'stack', // mark above wordmark
  },
  vera: {
    Mark: VeraMark,
    Wordmark: VeraWordmark,
    lockup: 'stack',
  },
  helio: {
    Mark: HelioMark,
    Wordmark: HelioWordmark,
    lockup: 'stack',
  },
  forma: {
    Mark: FormaMark,
    Wordmark: FormaWordmark,
    lockup: 'row', // mark beside wordmark
  },
};
