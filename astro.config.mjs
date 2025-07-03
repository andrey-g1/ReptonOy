import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.repton.fi', // Required for sitemap.xml
    integrations: [
        tailwind(),
        sitemap(), // Generates sitemap.xml automatically in dist/
    ],
});

