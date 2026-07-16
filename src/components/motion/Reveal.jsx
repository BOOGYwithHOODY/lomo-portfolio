import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { PALMER_EASE } from '../../hooks/animations';

// ── ClipReveal ────────────────────────────────────────────────────────────────
// Slides content up from beneath an overflow-hidden wrapper. The signature
// motion of the whole site — use for headings and display type.
//
// The viewport observer must sit on the WRAPPER, not the translated child:
// at y:108% the child is fully clipped by its own parent, so an
// IntersectionObserver watching the child never reports it in view and the
// reveal never fires. Variants propagate the trigger down instead.
const clipChild = {
  hidden:  { y: '108%' },
  visible: (delay = 0) => ({
    y: '0%',
    transition: { duration: 0.9, ease: PALMER_EASE, delay },
  }),
};

export function ClipReveal({ children, delay = 0, className = '', as: Tag = 'div', once = true }) {
  const MotionTag = motion[Tag] ?? motion.div;
  return (
    <MotionTag
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      className="overflow-hidden"
    >
      <motion.div variants={clipChild} custom={delay} className={className}>
        {children}
      </motion.div>
    </MotionTag>
  );
}

// ── FadeIn ────────────────────────────────────────────────────────────────────
export function FadeIn({ children, delay = 0, y = 16, className = '', once = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: 0.7, ease: PALMER_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── MaskImage ─────────────────────────────────────────────────────────────────
// Image that reveals through an expanding clip-path mask while the image
// itself settles from a slight zoom — the "curtain" reveal.
export function MaskImage({ src, alt = '', className = '', imgClassName = '', delay = 0, aspect = '' }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? { opacity: 0 } : { clipPath: 'inset(0 0 100% 0)' }}
      whileInView={reduced ? { opacity: 1 } : { clipPath: 'inset(0 0 0% 0)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: PALMER_EASE, delay }}
      className={`overflow-hidden ${aspect} ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        initial={reduced ? {} : { scale: 1.15 }}
        whileInView={reduced ? {} : { scale: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.4, ease: PALMER_EASE, delay }}
        className={`w-full h-full object-cover ${imgClassName}`}
        loading="lazy"
        decoding="async"
      />
    </motion.div>
  );
}

// ── ParallaxImage ─────────────────────────────────────────────────────────────
// Slow vertical drift against scroll. The caller controls positioning/size —
// pass e.g. "absolute inset-0" inside an aspect-ratio parent, or "relative h-96".
export function ParallaxImage({ src, alt = '', className = '', strength = 8, imgClassName = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={reduced ? {} : { y, scale: 1.18 }}
        className={`absolute inset-0 w-full h-full object-cover ${imgClassName}`}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}

// ── WordReveal ────────────────────────────────────────────────────────────────
// Splits a line into words, each rising from its own clip. For statements.
// As with ClipReveal, the observer lives on the unclipped outer span.
const wordChild = {
  hidden:  { y: '110%' },
  visible: (delay = 0) => ({
    y: '0%',
    transition: { duration: 0.7, ease: PALMER_EASE, delay },
  }),
};

export function WordReveal({ text, className = '', wordClassName = '', delay = 0, stagger = 0.035 }) {
  const words = String(text).split(' ');
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
      aria-label={text}
      role="text"
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-flex overflow-hidden align-bottom">
          <motion.span
            aria-hidden="true"
            variants={wordChild}
            custom={delay + i * stagger}
            className={`inline-block ${wordClassName}`}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// ── Counter ───────────────────────────────────────────────────────────────────
// Animated number for metric values like "80%", "+340%", "600 / 600".
// Animates the first numeric group and leaves the rest of the string intact.
export function Counter({ value, className = '', duration = 1.4 }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const match = String(value).match(/\d+/);
  if (!match || reduced) {
    return <span className={className}>{value}</span>;
  }

  const target = parseInt(match[0], 10);
  const prefix = String(value).slice(0, match.index);
  const suffix = String(value).slice(match.index + match[0].length);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ '--n': 0 }}
      whileInView={{ '--n': target }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration, ease: 'easeOut' }}
      onUpdate={(latest) => {
        if (ref.current && typeof latest['--n'] === 'number') {
          ref.current.textContent = `${prefix}${Math.round(latest['--n'])}${suffix}`;
        }
      }}
    >
      {value}
    </motion.span>
  );
}
