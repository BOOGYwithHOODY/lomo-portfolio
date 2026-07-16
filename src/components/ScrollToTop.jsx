import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTop } from '../hooks/useLenis';

// Resets scroll position to top on every route change.
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    scrollToTop();
  }, [pathname]);
  return null;
}
