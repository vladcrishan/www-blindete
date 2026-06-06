import { defineField, defineType } from 'sanity';

/**
 * litter — "born / available soon" events. Lightly used for now.
 */
export const litter = defineType({
  name: 'litter',
  title: 'Cuib (pui)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titlu',
      type: 'string',
      validation: (Rule) => Rule.required().error('Titlul este obligatoriu'),
    }),
    defineField({
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
    }),
    defineField({
      name: 'breed',
      title: 'Rasă',
      type: 'string',
      options: {
        list: [
          { title: 'Persană Chinchilla', value: 'persian-chinchilla' },
          { title: 'Pomeranian / Kleinspitz', value: 'pomeranian' },
        ],
      },
    }),
    defineField({
      name: 'birthdate',
      title: 'Data nașterii',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'expectedAvailableDate',
      title: 'Disponibil aproximativ din',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'parents',
      title: 'Părinți',
      type: 'string',
      description: 'Ex: „Mama: Luna × Tata: Rex"',
    }),
    defineField({
      name: 'photos',
      title: 'Poze',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Text alternativ',
              type: 'string',
            }),
          ],
        },
      ],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'notes',
      title: 'Note',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'public',
      title: 'Public (afișează pe site)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: 'Cele mai noi',
      name: 'createdDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      isPublic: 'public',
      media: 'photos.0',
    },
    prepare({ title, isPublic, media }) {
      return {
        title,
        subtitle: isPublic ? 'Public' : 'Ascuns',
        media,
      };
    },
  },
});
