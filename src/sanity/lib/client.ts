import { createClient } from '@sanity/client';

// These run at build/SSR time in Node. Astro loads plain (non-PUBLIC_) .env
// vars into `process.env`, NOT into `import.meta.env`, so read from there.
// Fall back to import.meta.env so the Netlify build (which injects vars) and
// any PUBLIC_-style overrides still work.
const env = { ...import.meta.env, ...process.env };

export const projectId = env.SANITY_PROJECT_ID;
export const dataset = env.SANITY_DATASET ?? 'production';
export const apiVersion = env.SANITY_API_VERSION ?? '2024-12-01';

if (!projectId) {
  throw new Error(
    'Missing SANITY_PROJECT_ID. Copy .env.example to .env and fill in the Sanity project values.',
  );
}

/**
 * Read-only client used at build time to fetch content for static pages.
 * useCdn: false so a freshly published edit is reflected on the next build.
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
});
