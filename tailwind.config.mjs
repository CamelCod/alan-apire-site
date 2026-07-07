/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand tokens — replace with final palette from Phase 1 (Discovery & Brand).
        brand: {
          50: '#f3f6fa',
          100: '#e2e9f1',
          200: '#c5d3e3',
          300: '#9bb5cd',
          400: '#6a8fb1',
          500: '#476c95',
          600: '#365479',
          700: '#2c4462',
          800: '#273a53',
          900: '#233247',
          950: '#18212f',
        },
        accent: {
          DEFAULT: '#c9a24b', // muted gold — consultancies often favor this; swap on approval
          dark: '#a8842f',
        },
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Arabic"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', '"Amiri"', 'Georgia', 'serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1rem', sm: '1.5rem', lg: '2rem' },
        screens: { '2xl': '1200px' },
      },
    },
  },
  plugins: [],
};
