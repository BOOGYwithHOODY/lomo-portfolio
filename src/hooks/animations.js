// ─────────────────────────────────────────────────────────────────────────────
//  REUSABLE MOTION VARIANTS
//  Scroll-triggered + route-transition animation primitives.
// ─────────────────────────────────────────────────────────────────────────────

const EASE = [0.25, 0.1, 0.25, 1];

// Palmer easing — aggressive ease-out for premium, fluid feel
export const PALMER_EASE = [0.16, 1, 0.3, 1];

// Text reveal: slide up from a clipping container (overflow-hidden parent required)
export const textReveal = {
  hidden:  { y: '110%' },
  visible: (delay = 0) => ({
    y: '0%',
    transition: { duration: 0.9, ease: PALMER_EASE, delay },
  }),
};

// Row reveal for list items — slides up + fades
export const rowReveal = {
  hidden:  { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: PALMER_EASE },
  },
};

// Stagger tuned for Palmer row lists
export const palmerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: EASE },
  },
};

// ─────────────────────────────────────────────────────────────────────────────
//  PAGE TRANSITIONS — used by routes
// ─────────────────────────────────────────────────────────────────────────────

export const pageSlide = {
  initial: { opacity: 0, x: 60 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    opacity: 0,
    x: -40,
    transition: { duration: 0.35, ease: EASE },
  },
};

export const pageFade = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: { duration: 0.3, ease: EASE },
  },
};

export const heroChar = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.03 },
  }),
};

// Shared viewport settings for all scroll triggers
export const VIEWPORT = { once: true, margin: '-80px' };

export const TRANSITION_EASE = EASE;

// ─────────────────────────────────────────────────────────────────────────────
//  INTERACTIVE MOTION — shared hover/tap props for buttons, cards, controls.
//  Spread onto a motion component: <motion.button {...PRESS}>…
// ─────────────────────────────────────────────────────────────────────────────

// Tap feedback for any pressable control (buttons, toggles, CTAs).
export const PRESS = {
  whileTap: { scale: 0.97 },
  transition: { duration: 0.2, ease: PALMER_EASE },
};

// Card hover: a quiet lift. Pair with PRESS on clickable cards.
export const CARD_HOVER = {
  whileHover: { y: -6 },
  whileTap: { scale: 0.985 },
  transition: { duration: 0.35, ease: PALMER_EASE },
};

// ─────────────────────────────────────────────────────────────────────────────
//  GRID STAGGER — parent/child pair for grids and card collections.
// ─────────────────────────────────────────────────────────────────────────────
export const gridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const gridItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: PALMER_EASE },
  },
};
