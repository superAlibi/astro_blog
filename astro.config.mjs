import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import astroMermaid from 'astro-mermaid';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: 'https://luchador.dev',
  markdown: {

    shikiConfig: {
      theme: 'dracula',
      // themes: {
      //   light: 'github-light',
      //   dark: 'github-dark',
      // },
    },

  },
  integrations: [mdx(), sitemap({
    filter: (page) => {
      return !page.includes('/test')
    },
  }), astroMermaid()],
  adapter: cloudflare({
    imageService: 'compile',
  }),
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});