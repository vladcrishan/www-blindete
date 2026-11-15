// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

// Astro does NOT populate process.env with plain (non-PUBLIC_) .env vars at
// config-evaluation time, so load them explicitly here. "" prefix = load all.
const env = loadEnv(process.env.NODE_ENV ?? 'development', process.cwd(), '');

const SANITY_PROJECT_ID = env.SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID;
const SANITY_DATASET = env.SANITY_DATASET ?? process.env.SANITY_DATASET ?? 'production';
const SANITY_API_VERSION = env.SANITY_API_VERSION ?? process.env.SANITY_API_VERSION ?? '2024-12-01';

if (!SANITY_PROJECT_ID) {
  throw new Error(
    '[astro.config] Missing SANITY_PROJECT_ID — copy .env.example to .env and fill it in.',
  );
}

// https://astro.build/config
export default defineConfig({
  site: 'https://blindete.ro',

  // Static site generation on Vercel. Every page is prerendered (no on-demand routes).
  // Sanity publish webhook -> Vercel deploy hook triggers rebuilds on edits.
  output: 'static',
  adapter: vercel(),

  i18n: {
    defaultLocale: 'ro',
    locales: ['ro', 'en'],
    routing: {
      prefixDefaultLocale: false, // ro = /, en = /en/
    },
  },

  // Old listing URLs -> new breed URLs (301). Keeps existing links/SEO valid.
  redirects: {
    '/pisici': '/persana-chinchilla',
    '/caini': '/pomeranian-kleinspitz',
    '/en/cats': '/en/persian-chinchilla',
    '/en/dogs': '/en/pomeranian-kleinspitz',
  },

  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      apiVersion: SANITY_API_VERSION,
      useCdn: false, // static build: always fetch fresh at build time
      studioBasePath: '/admin', // embed Sanity Studio at /admin
      studioRouterHistory: 'hash', // hash routing -> Studio works on a static host
    }),
    react(), // required to embed Sanity Studio
    sitemap({
      // Keep the Studio out of the public sitemap.
      filter: (page) => !page.includes('/admin'),
      // Inject correct hreflang alternates. The localized slugs differ per
      // locale (persana-chinchilla<->persian-chinchilla, etc.) so we map them
      // explicitly rather than relying on automatic same-path pairing.
      serialize(item) {
        const base = 'https://blindete.ro';
        // Static pages: [ro path, en path]. Dynamic pages: [ro prefix, en prefix]
        // that share the trailing slug across locales.
        const pages = [
          ['/', '/en/'],
          ['/persana-chinchilla/', '/en/persian-chinchilla/'],
          ['/pomeranian-kleinspitz/', '/en/pomeranian-kleinspitz/'],
          ['/persana-chinchilla/pisici/', '/en/persian-chinchilla/kittens/'],
          ['/pomeranian-kleinspitz/caini/', '/en/pomeranian-kleinspitz/puppies/'],
          ['/persana-chinchilla/pisicile-noastre/', '/en/persian-chinchilla/our-cats/'],
          ['/pomeranian-kleinspitz/cainii-nostri/', '/en/pomeranian-kleinspitz/our-dogs/'],
          ['/galerie/', '/en/gallery/'],
          ['/contact/', '/en/contact/'],
        ];
        const prefixes = [
          ['/animal/', '/en/animal/'],
          ['/persana-chinchilla/cuib/', '/en/persian-chinchilla/litter/'],
          ['/pomeranian-kleinspitz/cuib/', '/en/pomeranian-kleinspitz/litter/'],
          ['/persana-chinchilla/noutati/', '/en/persian-chinchilla/news/'],
          ['/pomeranian-kleinspitz/noutati/', '/en/pomeranian-kleinspitz/news/'],
        ];
        const path = new URL(item.url).pathname;
        /** @type {[string, string] | undefined} */
        let match;
        const page = pages.find(([ro, en]) => ro === path || en === path);
        if (page) match = [page[0], page[1]];
        if (!match) {
          for (const [ro, en] of prefixes) {
            const rest = path.startsWith(ro)
              ? path.slice(ro.length)
              : path.startsWith(en)
                ? path.slice(en.length)
                : null;
            if (rest) {
              match = [ro + rest, en + rest];
              break;
            }
          }
        }
        if (match) {
          item.links = [
            { lang: 'ro', url: `${base}${match[0]}` },
            { lang: 'en', url: `${base}${match[1]}` },
            { lang: 'x-default', url: `${base}${match[0]}` },
          ];
        }
        return item;
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
    // The embedded Sanity Studio (/admin) pulls in a huge dependency tree that
    // Vite would otherwise discover lazily on first load, re-running its dep
    // optimizer mid-render and invalidating already-served chunks — which shows
    // up as "504 (Outdated Optimize Dep)" + "Failed to fetch dynamically
    // imported module" and a blank Studio. Pre-bundle the heavy Studio deps up
    // front so the optimizer settles in one pass.
    optimizeDeps: {
      include: [
        'sanity',
        'sanity/structure',
        'sanity-plugin-media',
        'sanity/router',
        '@sanity/vision',
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-dom/client',
        'styled-components',
      ],
    },
  },
});
