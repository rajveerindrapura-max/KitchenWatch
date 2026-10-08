/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base Warm Palette
        ivory: '#FFFEF2',
        paper: '#F7F5E4',
        'card-warm': '#FFFDF5',
        ink: {
          DEFAULT: '#1C1B18',
          secondary: '#4B4A44',
          muted: '#6B6A62',
        },
        'deep-green': '#1F4D47',
        cream: '#F6F3E4',

        // Pastel Accents (Flat fills) + Ink Shades (Text & Icons)
        lavender: {
          DEFAULT: '#E9D8FD',
          ink: '#5B3FA0',
        },
        sage: {
          DEFAULT: '#D9EAD3',
          ink: '#2F6B3A',
        },
        butter: {
          DEFAULT: '#FBEFB4',
          ink: '#8A5A00',
        },
        peach: {
          DEFAULT: '#FAD9C8',
          ink: '#B3412A',
        },
        'soft-sky': {
          DEFAULT: '#D6E8F5',
          ink: '#1F5C8A',
        },

        // Backward compatibility mappings directed to the warm palette
        bg: '#FFFEF2',
        surface: '#FFFDF5',
        border: '#1C1B18',
        secondary: '#4B4A44',
        muted: '#6B6A62',
        dark: '#1F4D47',
        blue: {
          DEFAULT: '#5B3FA0', // lavender ink for actions
          tint: '#E9D8FD',
        },
        emerald: {
          DEFAULT: '#2F6B3A',
          tint: '#D9EAD3',
        },
        amber: {
          DEFAULT: '#8A5A00',
          tint: '#FBEFB4',
        },
        coral: {
          DEFAULT: '#B3412A',
          tint: '#FAD9C8',
        },
        sky: {
          DEFAULT: '#1F5C8A',
          tint: '#D6E8F5',
        },
        violet: {
          DEFAULT: '#5B3FA0',
          tint: '#E9D8FD',
        },
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
        figtree: ['Figtree', 'system-ui', 'sans-serif'],
        jakarta: ['Figtree', 'system-ui', 'sans-serif'], // fallback mapping
      },
      fontSize: {
        'hero-mobile': ['44px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'hero': ['clamp(64px, 7vw, 104px)', { lineHeight: '0.98', letterSpacing: '-0.03em' }],
        'section': ['clamp(36px, 4.5vw, 64px)', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'xl-body': ['18px', { lineHeight: '1.6' }],
        'body': ['17px', { lineHeight: '1.6' }],
      },
      borderRadius: {
        btn: '12px',
        card: '22px',
        panel: '24px',
        pill: '999px',
      },
      boxShadow: {
        'hard': '3px 3px 0px #1C1B18',
        'hard-sm': '2px 2px 0px #1C1B18',
        'hard-lg': '4px 4px 0px #1C1B18',
      },
    },
  },
  plugins: [],
};