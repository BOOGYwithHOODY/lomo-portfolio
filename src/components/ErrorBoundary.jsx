import { Component } from 'react';

// Route-level error boundary: a crash in any page renders a branded fallback
// instead of a white screen. Copy is intentionally bilingual-static since the
// boundary must work even if contexts themselves throw.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // Surface in console for debugging; a real deployment could report here.
    console.error('[LOMO] Uncaught render error:', error, info?.componentStack);
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-8 px-6 text-center bg-void">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">500</p>
        <h1 className="font-display text-[clamp(2.6rem,8vw,6rem)] leading-none text-bright">
          Something broke.
        </h1>
        <p className="font-body text-sm text-soft max-w-sm">
          An unexpected error interrupted the page. Reloading usually fixes it.
          <span className="block mt-1" dir="rtl">حدث خطأ غير متوقّع — أعد تحميل الصفحة.</span>
        </p>
        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-void bg-accent px-7 py-4 hover:opacity-80 transition-opacity"
        >
          Reload · إعادة تحميل
        </button>
      </div>
    );
  }
}
