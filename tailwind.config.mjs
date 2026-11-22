/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Restrained Editorial Palette: Warm white, navy text, steel hairlines, single action accent
        surface: {
          DEFAULT: '#faf9f6', // Warm white background
          pure: '#ffffff',    // Card / module background
          subtle: '#f3f2ee',  // Subtle grey-white
        },
        navy: {
          DEFAULT: '#0b1930', // Deep navy primary text
          light: '#1b2a47',
          dark: '#060f1e',
        },
        steel: {
          DEFAULT: '#64748b', // Secondary editorial text
          light: '#e2e5eb',   // Steel-grey hairline divider
          dark: '#334155',
        },
        accent: {
          DEFAULT: '#0b4ea2', // Single accent colour strictly for primary action
          hover: '#083c7d',
        },
        // Keep brand mappings for backward-compatibility with existing templates
        brand: {
          50: '#faf9f6',
          100: '#f0f1f4',
          200: '#e2e5eb', // Hairline
          300: '#cbd2db',
          400: '#94a3b8',
          500: '#64748b', // Steel
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#0b1930', // Navy
        },
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Restrained editorial scale: H1 fluid 36-56px, H2 28-36px, body 17-18px, captions 13-14px
        caption: ['0.84375rem', { lineHeight: '1.4' }], // ~13.5px
        body: ['1.0625rem', { lineHeight: '1.6' }],    // 17px
        'body-lg': ['1.125rem', { lineHeight: '1.6' }], // 18px
        h2: ['2rem', { lineHeight: '1.25' }],           // 32px (28-36 fluid)
        h1: ['3rem', { lineHeight: '1.15' }],           // 48px (36-56 fluid)
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '3rem' },
        screens: { '2xl': '1280px' },
      },
    },
  },
  plugins: [],
};
