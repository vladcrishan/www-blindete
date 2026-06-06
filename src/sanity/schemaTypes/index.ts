import type { SchemaTypeDefinition } from 'sanity';

import { animal } from './animal';
import { siteSettings } from './siteSettings';
import { litter } from './litter';

export const schemaTypes: SchemaTypeDefinition[] = [animal, siteSettings, litter];
