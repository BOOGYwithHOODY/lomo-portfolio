import './index.css';
import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';

import useLenis       from './hooks/useLenis';
import Navbar         from './components/Navbar';
import Footer         from './components/Footer';
import ScrollToTop    from './components/ScrollToTop';
import Loader         from './components/Loader';
import Cursor         from './components/Cursor';
import ScrollProgress from './components/ScrollProgress';
import BackToTop      from './components/BackToTop';
import ErrorBoundary  from './components/ErrorBoundary';

import Home from './pages/Home';

// Route-level code splitting — Home ships eagerly, the rest load on demand.
const Work          = lazy(() => import('./pages/Work'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Services      = lazy(() => import('./pages/Services'));
const About         = lazy(() => import('./pages/About'));
const Journal       = lazy(() => import('./pages/Journal'));
const JournalEntry  = lazy(() => import('./pages/JournalEntry'));
const Contact       = lazy(() => import('./pages/Contact'));
const NotFound      = lazy(() => import('./pages/NotFound'));

export default function App() {
  const location = useLocation();
  useLenis();

  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-void text-bright min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to content</a>
        <Loader />
        <Cursor />
        <ScrollToTop />
        <ScrollProgress />
        <Navbar />
        <BackToTop />

        <main id="main" className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={null}>
              <AnimatePresence mode="wait" initial={false}>
                <Routes location={location} key={location.pathname}>
                  <Route path="/"                element={<Home />} />
                  <Route path="/work"            element={<Work />} />
                  <Route path="/work/:slug"      element={<ProjectDetail />} />
                  <Route path="/services"        element={<Services />} />
                  <Route path="/about"           element={<About />} />
                  <Route path="/journal"         element={<Journal />} />
                  <Route path="/journal/:slug"   element={<JournalEntry />} />
                  <Route path="/contact"         element={<Contact />} />
                  <Route path="*"                element={<NotFound />} />
                </Routes>
              </AnimatePresence>
            </Suspense>
          </ErrorBoundary>
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
