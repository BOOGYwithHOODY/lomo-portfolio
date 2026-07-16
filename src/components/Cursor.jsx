import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Subtle custom cursor: a small dot that trails the pointer and swells
// over interactive elements. Renders only on fine-pointer devices and
// never for reduced-motion users. The native cursor stays visible —
// this is an accent, not a replacement.
export default function Cursor() {
  const reduced = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.5 });

  useEffect(() => {
    if (reduced) return undefined;
    const fine = window.matchMedia('(pointer: fine)');
    if (!fine.matches) return undefined;
    setEnabled(true);

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      setHovering(Boolean(target));
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, [reduced, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
      animate={{
        width: hovering ? 44 : 10,
        height: hovering ? 44 : 10,
        opacity: hovering ? 0.35 : 0.6,
      }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 z-[90] pointer-events-none rounded-full bg-bright mix-blend-difference hidden lg:block"
    />
  );
}
