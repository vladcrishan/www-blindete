import type { SchemaTypeDefinition } from 'sanity';

import { animal } from './animal';
import { litter } from './litter';
import { post } from './post';
import { siteSettings } from './siteSettings';

export const schemaTypes: SchemaTypeDefinition[] = [animal, siteSettings, litter, post];
