// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

const site = (process.env.PUBLIC_SITE_URL || 'https://www.wayealleaktest.com').replace(/\/+$/, '');
const isPlaceholderSite = /^https?:\/\/(www\.)?example\.com$/i.test(site);
const sitemapExcludedPaths = [/\/contact\/success\/?$/, /\/news\/tag\/[^/]+\/?$/];

if (process.env.NODE_ENV === 'production' && isPlaceholderSite) {
  throw new Error('Set PUBLIC_SITE_URL to the real production domain before building for deployment.');
}

export default defineConfig({
  site,
  output: 'static',

  integrations: [
    sitemap({
      filter: (page) => !sitemapExcludedPaths.some((pattern) => pattern.test(new URL(page).pathname)),
    }),
    robotsTxt(),
  ],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Oswald',
      cssVariable: '--font-display',
      weights: ['400', '600', '700'],
      styles: ['normal'],
    },
    {
      provider: fontProviders.google(),
      name: 'Inter',
      cssVariable: '--font-body',
      weights: ['400', '500', '700'],
      styles: ['normal'],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
    },
  },
});
