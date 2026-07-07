import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Update this to the production domain before launch (Phase 7 of the Lean MVP quote).
const SITE = 'https://alanapire.ae';

export default defineConfig({
  site: SITE,
  integrations: [tailwind({ applyBaseStyles: false })],
  build: {
    format: 'directory',
  },
  compressHTML: true,
});
