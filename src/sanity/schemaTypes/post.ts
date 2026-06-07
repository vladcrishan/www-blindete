import { defineField, defineType } from 'sanity';

/**
 * post — a news entry. Each post belongs to one sub-site (cat or dog) via
 * `species`, so the cats landing shows only cat news and dogs only dog news.
 * RO is the source of truth; EN fields are optional (fall back to RO on the
 * site). An optional YouTube URL renders the "video" news card from the design.
 */
export const post = defineType({
  name: 'post',
  title: 'Știre',
  type: 'document',
  fields: [
    defineField({
      name: 'titleRo',
      title: 'Titlu (Română)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Titlul este obligatoriu'),
    }),
    defineField({
      name: 'titleEn',
      title: 'Titlu (Engleză)',
      type: 'string',
      description: 'Opțional. Dacă lipsește, se afișează titlul în română.',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (link)',
      type: 'slug',
      description: 'Se generează automat din titlu. Apasă „Generate".',
      options: { source: 'titleRo', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Slug-ul este obligatoriu'),
    }),
    defineField({
      name: 'species',
      title: 'Sub-site',
      type: 'string',
      description: 'Pe ce sub-site apare știrea.',
      options: {
        layout: 'radio',
        list: [
          { title: 'Pisici (Persană Chinchilla)', value: 'cat' },
          { title: 'Câini (Pomeranian / Kleinspitz)', value: 'dog' },
        ],
      },
      validation: (Rule) => Rule.required().error('Alege sub-site-ul'),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data publicării',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required().error('Data este obligatorie'),
    }),
    defineField({
      name: 'excerptRo',
      title: 'Rezumat (Română)',
      type: 'text',
      rows: 3,
      description: 'Textul scurt afișat în lista de știri.',
    }),
    defineField({
      name: 'excerptEn',
      title: 'Rezumat (Engleză)',
      type: 'text',
      rows: 3,
      description: 'Opțional.',
    }),
    defineField({
      name: 'bodyRo',
      title: 'Conținut (Română)',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'bodyEn',
      title: 'Conținut (Engleză)',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Opțional.',
    }),
    defineField({
      name: 'coverImage',
      title: 'Imagine',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Text alternativ (pentru Google)',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Video YouTube (link)',
      type: 'url',
      description: 'Opțional. Afișează un card video în loc de imagine.',
    }),
  ],
  orderings: [
    {
      title: 'Cele mai noi',
      name: 'publishedDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'titleRo',
      species: 'species',
      publishedAt: 'publishedAt',
      media: 'coverImage',
    },
    prepare({ title, species, publishedAt, media }) {
      const site = species === 'dog' ? 'Câini' : 'Pisici';
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('ro-RO', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })
        : '';
      return { title, subtitle: [site, date].filter(Boolean).join(' · '), media };
    },
  },
});
