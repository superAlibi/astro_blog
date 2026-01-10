import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import astroMermaid from 'astro-mermaid';
// https://astro.build/config
export default defineConfig({
  site: 'https://luchador.dev',
  integrations: [mdx(), sitemap(), astroMermaid()],
  adapter: cloudflare(),
  vite: {
    plugins: [tailwindcss()],
  },
});