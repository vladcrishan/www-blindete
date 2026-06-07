import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

// The Studio runs in the BROWSER, where Astro only exposes PUBLIC_-prefixed env
// vars on import.meta.env. projectId/dataset are public values (already shipped
// in the client), so we read the PUBLIC_ copies here. See .env / .env.example.
const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET ?? 'production';

// Document types that should behave as singletons (one instance, no create/delete).
const SINGLETONS = new Set(['siteSettings']);

export default defineConfig({
  name: 'blindete',
  title: 'Blîndețe — Administrare',

  projectId,
  dataset,

  // Studio is embedded by @sanity/astro at /admin (see astro.config.mjs).
  basePath: '/admin',

  plugins: [structureTool({ structure }), visionTool()],

  schema: {
    types: schemaTypes,
    // Hide singleton types from the global "create new" menu.
    templates: (templates) => templates.filter((template) => !SINGLETONS.has(template.schemaType)),
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
