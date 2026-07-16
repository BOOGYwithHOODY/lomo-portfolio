/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        heading: ['"Syne"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        body:    ['"DM Sans"', '"IBM Plex Sans Arabic"', 'sans-serif'],
        serif:   ['"Instrument Serif"', '"IBM Plex Sans Arabic"', 'serif'],
        mono:    ['"Space Mono"', 'monospace'],
        arabic:  ['"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      colors: {
        void:         'var(--color-void)',
        surface:      'var(--color-surface)',
        panel:        'var(--color-panel)',
        border:       'var(--color-border)',
        line:         'var(--color-line)',
        muted:        'var(--color-muted)',
        soft:         'var(--color-soft)',
        bright:       'var(--color-bright)',
        accent:       'var(--color-accent)',
        'accent-dim': 'var(--color-accent-dim)',
      },
      fontSize: {
        '10xl': ['10rem',  { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        '9xl':  ['8rem',   { lineHeight: '0.88', letterSpacing: '-0.04em' }],
        '8xl':  ['6rem',   { lineHeight: '0.9',  letterSpacing: '-0.03em' }],
      },
      animation: {
        'marquee':     'marquee 25s linear infinite',
        'marquee-rev': 'marquee-rev 30s linear infinite',
        'spin-slow':   'spin 12s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      gridTemplateColumns: {
        'bento-lg': 'repeat(12, 1fr)',
      },
    },
  },
  plugins: [],
}
