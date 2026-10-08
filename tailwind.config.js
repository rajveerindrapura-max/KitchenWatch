/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Stripe Meets Apple Neutrals
        bg: '#FBFBFD',
        'section-alt': '#F5F5F7',
        surface: '#FFFFFF',
        border: '#E4E7EC',
        hairline: '#EDEFF3',

        ink: {
          DEFAULT: '#1D1D1F',
          secondary: '#4B5563',
          muted: '#6B7280',
        },
        secondary: '#4B5563',
        muted: '#6B7280',

        // Dark section
        dark: {
          DEFAULT: '#101218',
          text: '#F5F5F7',
          secondary: '#A7AEBB',
        },

        // Brand
        blue: {
          DEFAULT: '#2F6BFF',
          hover: '#1F55E0',
          tint: '#EEF3FF',
        },
        navy: '#0B2A66',

        // Meaning colors (Product mockups, ledger, status)
        green: {
          DEFAULT: '#15803D',
          tint: '#E8F6EC',
        },
        amber: {
          DEFAULT: '#B45309',
          tint: '#FEF3DC',
        },
        red: {
          DEFAULT: '#B91C1C',
          tint: '#FDECEC',
        },
        teal: {
          DEFAULT: '#0F766E',
          tint: '#E0F5F2',
        },
        violet: {
          DEFAULT: '#6D4AE0',
          tint: '#F1EDFE',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        pill: '9999px',
        card: '14px',
        panel: '24px',
      },
      boxShadow: {
        // Apple & Stripe soft layered depth for floating mockups
        float: '0 30px 60px -24px rgba(16, 18, 24, 0.22), 0 8px 20px -8px rgba(16, 18, 24, 0.08)',
        subtle: '0 1px 3px 0 rgba(16, 18, 24, 0.04), 0 1px 2px -1px rgba(16, 18, 24, 0.04)',
        card: '0 4px 12px 0 rgba(16, 18, 24, 0.05)',
      },
    },
  },
  plugins: [],
};