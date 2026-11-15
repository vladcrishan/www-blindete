import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { media } from 'sanity-plugin-media';

import { schemaTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

// The Studio runs in the BROWSER, where Astro only exposes PUBLIC_-prefixed env
// vars on import.meta.env. projectId/dataset are public values (already shipped
// in the client), so we read the PUBLIC_ copies here. See .env / .env.example.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

// Document types that behave as singletons (fixed documents, no create/delete).
// `landing` has two fixed ids (landing-cat / landing-dog), see structure.ts.
const SINGLETONS = new Set(['siteSettings', 'landing', 'gallery']);

export default defineConfig({
  name: 'blindete',
  title: 'Blîndețe — Administrare',

  projectId,
  dataset,

  // Studio is embedded by @sanity/astro at /admin (see astro.config.mjs).
  basePath: '/admin',

  plugins: [
    structureTool({ structure }),
    // "Media" tab: browse every uploaded photo, search, tag, replace, and see
    // where each one is used.
    media(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) => [
      // Hide singleton types from the global "create new" menu.
      ...templates.filter((template) => !SINGLETONS.has(template.schemaType)),
      // "New breeding animal" pre-sets role so it lands in the right list.
      {
        id: 'animal-breeding',
        title: 'Reproducător',
        schemaType: 'animal',
        value: { role: 'breeding' },
      },
    ],
  },

  document: {
    // Remove create / delete / duplicate actions for singleton documents.
    actions: (input, context) =>
      SINGLETONS.has(context.schemaType)
        ? input.filter(
            ({ action }) => action && ['publish', 'discardChanges', 'restore'].includes(action),
          )
        : input,
  },
});
