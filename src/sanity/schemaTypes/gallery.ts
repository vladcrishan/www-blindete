import { defineField, defineType } from 'sanity';
import { altField, lowResWarning } from './fields';

/**
 * gallery — singleton holding every gallery photo in one list, so the owner
 * can drag many photos in at once and reorder them by dragging.
 */
export const gallery = defineType({
  name: 'gallery',
  title: 'Galerie',
  type: 'document',
  fields: [
    defineField({
      name: 'images',
      title: 'Poze',
      type: 'array',
      description:
        'Trage mai multe poze deodată aici. Apoi apasă pe fiecare ca să alegi categoria și să scrii o descriere.',
      options: { layout: 'grid' },
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          validation: lowResWarning,
          preview: {
            select: { media: 'asset', title: 'captionRo', category: 'category' },
            prepare: ({ media, title, category }: { media?: unknown; title?: string; category?: string }) => {
              const labels: Record<string, string> = {
                dogs: 'Câini',
                cats: 'Pisici',
                puppies: 'Căței',
                kittens: 'Pisoi',
                shows: 'Expoziții',
              };
              return {
                title: title || 'Fără descriere',
                subtitle: category ? labels[category] : 'Fără categorie',
                media: media as never,
              };
            },
          },
          fields: [
            defineField({
              name: 'category',
              title: 'Categorie',
              type: 'string',
              options: {
                layout: 'radio',
                list: [
                  { title: 'Câini', value: 'dogs' },
                  { title: 'Pisici', value: 'cats' },
                  { title: 'Căței (pui)', value: 'puppies' },
                  { title: 'Pisoi (pui)', value: 'kittens' },
                  { title: 'Expoziții', value: 'shows' },
                ],
              },
              validation: (Rule) => Rule.required().warning('Alege o categorie'),
            }),
            defineField({
              name: 'captionRo',
              title: 'Descriere (Română)',
              type: 'string',
              description: 'Ex: „Luna, 8 săptămâni".',
            }),
            defineField({ name: 'captionEn', title: 'Descriere (Engleză)', type: 'string' }),
            altField,
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Galerie' }),
  },
});
