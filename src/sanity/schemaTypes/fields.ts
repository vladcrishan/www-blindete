import { defineField, type Rule } from 'sanity';

/** Minimum long-edge width (px) below which the Studio warns about a photo. */
export const MIN_PHOTO_WIDTH = 1200;

/**
 * Warn (not block) when an uploaded photo is too small to look sharp on the
 * site. Reads the asset's metadata through the Studio client.
 */
export const lowResWarning = (Rule: Rule) =>
  Rule.custom(async (value, context) => {
    const ref = (value as { asset?: { _ref?: string } } | undefined)?.asset?._ref;
    if (!ref) return true;
    const client = context.getClient({ apiVersion: '2024-12-01' });
    const dims = await client.fetch<{ width: number; height: number } | null>(
      `*[_id == $id][0].metadata.dimensions{width, height}`,
      { id: ref },
    );
    if (!dims) return true;
    const longEdge = Math.max(dims.width, dims.height);
    return longEdge >= MIN_PHOTO_WIDTH
      ? true
      : `Poza este mică (${dims.width}×${dims.height}px). Pe site va arăta neclar — încarcă una de cel puțin ${MIN_PHOTO_WIDTH}px.`;
  }).warning();

/** Alt-text sub-field shared by every photo. Warning so it never blocks publishing. */
export const altField = defineField({
  name: 'alt',
  title: 'Descriere scurtă a pozei',
  type: 'string',
  description: 'Ex: „Pisică albă Chinchilla pe canapea". Ajută Google și persoanele nevăzătoare.',
  validation: (Rule) => Rule.required().warning('Adaugă o scurtă descriere a pozei'),
});

/**
 * Inline image member for photo arrays (`of: [photoMember]`).
 * Hotspot on, alt text, low-resolution warning.
 */
export const photoMember = {
  type: 'image' as const,
  options: { hotspot: true },
  fields: [altField],
  validation: lowResWarning,
};

/** A single photo field with alt + low-res warning. */
export const photoField = (name: string, title: string, description?: string) =>
  defineField({
    name,
    title,
    type: 'image',
    description,
    options: { hotspot: true },
    fields: [altField],
    validation: (R) => lowResWarning(R as unknown as Rule),
  });

export const speciesField = defineField({
  name: 'species',
  title: 'Specie',
  type: 'string',
  options: {
    layout: 'radio',
    list: [
      { title: 'Pisică', value: 'cat' },
      { title: 'Câine', value: 'dog' },
    ],
  },
  validation: (Rule) => Rule.required().error('Alege specia'),
});

export const breedField = defineField({
  name: 'breed',
  title: 'Rasă',
  type: 'string',
  options: {
    list: [
      { title: 'Persană Chinchilla', value: 'persian-chinchilla' },
      { title: 'Pomeranian / Kleinspitz', value: 'pomeranian' },
    ],
  },
});
