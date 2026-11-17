/**
 * One-off seed: populate the `siteSettings` singleton with the real contact
 * details from the business's public Facebook page.
 *
 * The Studio addresses this singleton by the fixed id `siteSettings`
 * (see src/sanity/structure.ts), so we createOrReplace with that same id —
 * the Studio then edits the very document we write here.
 *
 * Run once:  SANITY_WRITE_TOKEN must be set (in .env).  `node scripts/seed-site-settings.mjs`
 * The token needs Editor/Write permission. Revoke it afterwards.
 */
import { createClient } from '@sanity/client';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

// Minimal .env loader (no dotenv dependency in this project).
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
for (const line of readFileSync(join(root, '.env'), 'utf8').split('\n')) {
  const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const token = process.env.SANITY_WRITE_TOKEN;
if (!token) {
  console.error('Missing SANITY_WRITE_TOKEN in environment / .env');
  process.exit(1);
}

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET ?? 'production',
  apiVersion: process.env.SANITY_API_VERSION ?? '2024-12-01',
  useCdn: false,
  token,
});

// Contact details from the Facebook page (city-only per design decision —
// no street address field). WhatsApp in international format for wa.me links.
const CONTACT = {
  phone: '0722 352 909',
  whatsapp: '+40722352909',
  email: 'deblindete@gmail.com',
  city: 'Arad',
};

// Patch (merge) so we don't clobber any hero/social fields that may already
// be set; create the doc first if it doesn't exist yet.
await client
  .createIfNotExists({ _id: 'siteSettings', _type: 'siteSettings' })
  .then(() => client.patch('siteSettings').set(CONTACT).commit());

const doc = await client.fetch('*[_id == "siteSettings"][0]{phone, whatsapp, email, city}');
console.log('siteSettings updated:', doc);
