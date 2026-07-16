import { motion } from 'framer-motion';
import { pageSlide } from '../hooks/animations';

// Wraps a page in a slide-in/out transition. Used by every route.
export default function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      variants={pageSlide}
      initial="initial"
      animate="animate"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  );
}
