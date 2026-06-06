import { defineField, defineType } from 'sanity';

/**
 * Animal document — a single kitten or puppy for sale.
 * All field titles/descriptions are in Romanian (the editor is the owner).
 */
export const animal = defineType({
  name: 'animal',
  title: 'Animal',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nume',
      type: 'string',
      validation: (Rule) => Rule.required().error('Numele este obligatoriu'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (link)',
      type: 'slug',
      description: 'Se generează automat din nume. Apasă „Generate".',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug-ul este obligatoriu'),
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
      validation: (Rule) => Rule.required().error('Alege specia'),
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
      validation: (Rule) => Rule.required().error('Alege rasa'),
    }),
    defineField({
      name: 'status',
      title: 'Stare',
      type: 'string',
      initialValue: 'available',
      options: {
        layout: 'radio',
        list: [
          { title: '🟢 Disponibil', value: 'available' },
          { title: '🟡 Rezervat', value: 'reserved' },
          { title: '🔴 Vândut', value: 'sold' },
          { title: '🐣 În curând', value: 'upcoming' },
        ],
      },
      validation: (Rule) => Rule.required().error('Alege starea'),
    }),
    defineField({
      name: 'gender',
      title: 'Sex',
      type: 'string',
      options: {
        layout: 'radio',
        list: [
          { title: 'Mascul', value: 'male' },
          { title: 'Femelă', value: 'female' },
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
      name: 'price',
      title: 'Preț (RON)',
      type: 'number',
      description: 'Lasă gol dacă nu vrei să afișezi prețul.',
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
              title: 'Text alternativ (pentru Google)',
              type: 'string',
              description: 'Scurtă descriere a pozei. Bun pentru SEO.',
            }),
          ],
        },
      ],
      options: { layout: 'grid' },
      validation: (Rule) => Rule.required().min(1).error('Adaugă cel puțin o poză'),
    }),
    defineField({
      name: 'video',
      title: 'Video (link)',
      type: 'url',
      description: 'Link YouTube / Facebook / Instagram. Opțional.',
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'] }).error('Trebuie să fie un link valid'),
    }),
    defineField({
      name: 'descriptionRo',
      title: 'Descriere (Română)',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Descriere (Engleză)',
      type: 'text',
      rows: 4,
      description: 'Opțional.',
    }),
    defineField({
      name: 'featured',
      title: 'Afișează pe prima pagină',
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
      title: 'name',
      status: 'status',
      media: 'photos.0',
    },
    prepare({ title, status, media }) {
      const labels: Record<string, string> = {
        available: '🟢 Disponibil',
        reserved: '🟡 Rezervat',
        sold: '🔴 Vândut',
        upcoming: '🐣 În curând',
      };
      return {
        title,
        subtitle: status ? labels[status] ?? status : '',
        media,
      };
    },
  },
});
