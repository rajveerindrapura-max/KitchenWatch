/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        border: 'var(--border)',
        ink: {
          DEFAULT: 'var(--ink)',
          2: 'var(--ink-2)',
        },
        muted: 'var(--muted)',
        cream: 'var(--cream)',
        dark: 'var(--dark)',
        blue: {
          DEFAULT: 'var(--blue)',
          hover: 'var(--blue-hover)',
          tint: 'var(--blue-tint)',
        },
        sky: {
          DEFAULT: 'var(--sky)',
          tint: 'var(--sky-tint)',
        },
        teal: {
          DEFAULT: 'var(--teal)',
          tint: 'var(--teal-tint)',
        },
        emerald: {
          DEFAULT: 'var(--emerald)',
          tint: 'var(--emerald-tint)',
        },
        amber: {
          DEFAULT: 'var(--amber)',
          tint: 'var(--amber-tint)',
        },
        coral: {
          DEFAULT: 'var(--coral)',
          tint: 'var(--coral-tint)',
        },
        violet: {
          DEFAULT: 'var(--violet)',
          tint: 'var(--violet-tint)',
        },
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
      },
      fontSize: {
        'hero-mobile': ['40px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero': ['clamp(56px, 6vw, 88px)', { lineHeight: '1.0', letterSpacing: '-0.025em' }],
        'section': ['clamp(36px, 4vw, 56px)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'xl-body': ['18px', { lineHeight: '1.65' }],
        'body': ['17px', { lineHeight: '1.7' }],
      },
      borderRadius: {
        card: '24px',
        panel: '20px',
        pill: '999px',
      },
      spacing: {
        'section': '140px',
        'section-mobile': '80px',
      },
      boxShadow: {
        'float': '0 20px 60px -10px rgba(11,18,32,0.12), 0 8px 20px -8px rgba(11,18,32,0.08)',
        'card': '0 1px 3px rgba(11,18,32,0.06), 0 4px 12px rgba(11,18,32,0.04)',
        'blue-glow': '0 8px 40px -8px rgba(37,99,235,0.3)',
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(56,189,248,0.08) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};