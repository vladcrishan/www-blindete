import { createClient } from '@sanity/client';

export const projectId = import.meta.env.SANITY_PROJECT_ID ?? 'ydsq3umi';
export const dataset = import.meta.env.SANITY_DATASET ?? 'production';
export const apiVersion = import.meta.env.SANITY_API_VERSION ?? '2024-12-01';

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
