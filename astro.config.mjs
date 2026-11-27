import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Production URL: set ASTRO_SITE in Cloudflare Pages build env (falls back to the live domain).
const SITE = process.env.ASTRO_SITE || 'https://alanpire.ae';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  vite: { plugins: [tailwindcss()] },
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
