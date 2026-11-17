import type { SchemaTypeDefinition } from 'sanity';

import { animal } from './animal';
import { gallery } from './gallery';
import { landing } from './landing';
import { litter } from './litter';
import { post } from './post';
import { siteSettings } from './siteSettings';

export const schemaTypes: SchemaTypeDefinition[] = [
  animal,
  siteSettings,
  landing,
  gallery,
  litter,
  post,
];
