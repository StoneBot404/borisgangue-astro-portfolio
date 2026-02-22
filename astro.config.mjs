import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    // Example configuration
    // appliesTailwindCSS: true
  })],
  site: 'https://stonebot404.github.io/', // Your GitHub Pages URL
  base: '/borisgangue-astro-portfolio', // Repository subpath
});
