import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Production URL: set ASTRO_SITE in Cloudflare Pages build env (falls back to the live domain).
const SITE = process.env.ASTRO_SITE || 'https://alanapire.ae';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
