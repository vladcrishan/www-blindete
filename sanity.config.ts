import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './src/sanity/schemaTypes';
import { structure } from './src/sanity/structure';

const projectId =
  import.meta.env.SANITY_STUDIO_PROJECT_ID ??
  import.meta.env.SANITY_PROJECT_ID ??
  'ydsq3umi';
const dataset =
  import.meta.env.SANITY_STUDIO_DATASET ??
  import.meta.env.SANITY_DATASET ??
  'production';

// Document types that should behave as singletons (one instance, no create/delete).
const SINGLETONS = new Set(['siteSettings']);

export default defineConfig({
  name: 'blindete',
  title: 'Blândețe — Administrare',

  projectId,
  dataset,

  // Studio is embedded by @sanity/astro at /admin (see astro.config.mjs).
  basePath: '/admin',

  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    // Hide singleton types from the global "create new" menu.
    templates: (templates) =>
      templates.filter((template) => !SINGLETONS.has(template.schemaType)),
  },

  document: {
    // Remove create / delete / duplicate actions for singleton documents.
    actions: (input, context) =>
      SINGLETONS.has(context.schemaType)
        ? input.filter(
            ({ action }) =>
              action && ['publish', 'discardChanges', 'restore'].includes(action),
          )
        : input,
  },
});
