import { defineConfig } from '@astrojs/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://stonebot404.github.io/borisgangue-astro-portfolio/', // Your GitHub Pages URL
  base: '/borisgangue-astro-portfolio', // Repository subpath
});
