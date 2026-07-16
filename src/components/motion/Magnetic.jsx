import { useRef, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

// Wraps any element with a subtle magnetic pull toward the cursor.
// Desktop-only by nature (mouse events); no-op for reduced-motion users.
export default function Magnetic({ children, strength = 0.25, className = '' }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 260, damping: 20, mass: 0.6 });

  const onMouseMove = useCallback(
    (e) => {
      if (reduced || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
      y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
    },
    [x, y, strength, reduced]
  );

  const onMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x: springX, y: springY }}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
