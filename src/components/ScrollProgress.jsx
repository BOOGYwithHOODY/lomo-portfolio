import { motion, useScroll, useSpring } from 'framer-motion';

// Hairline reading-progress bar pinned above the navbar. Spring-smoothed so
// it glides rather than ticks. Purely informational, so it stays on for
// reduced-motion users too (no decorative movement of its own).
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-accent origin-left rtl:origin-right"
    />
  );
}
