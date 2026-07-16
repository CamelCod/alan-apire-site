/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Alan Apire Design System — Phase 1 Brand Identity
        brand: {
          50: '#f7f8fa',   // Very light background
          100: '#eef0f3',  // Light background
          200: '#dee2e8',  // Light gray
          300: '#c5cbd3',  // Medium-light gray
          400: '#9aa3af',  // Medium gray
          500: '#6b7480',  // Medium-dark gray
          600: '#4e5763',  // Dark gray
          700: '#383f49',  // Darker gray
          800: '#262b33',  // Very dark gray
          900: '#171a1f',  // Almost black
          950: '#0b1930',  // Navy black (primary dark)
        },
        accent: {
          DEFAULT: '#B08D57',  // Warm gold — Alan Apire signature
          light: '#D9BD8D',    // Lighter gold
          dark: '#8A6B3E',     // Darker gold
        },
        success: '#1E7A4C',    // Muted green
        warning: '#B3261E',    // Muted red
        info: '#345078',       // Muted blue
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans Arabic"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', '"Amiri"', 'Georgia', 'serif'],
        // Luxury consultancy aesthetic
        display: ['"Playfair Display"', '"Amiri"', 'Georgia', 'serif'],
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
