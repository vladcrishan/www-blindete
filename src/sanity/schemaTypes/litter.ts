import { defineField, defineType } from 'sanity';
import { breedField, photoMember, speciesField } from './fields';

/**
 * litter — a cuib (litter): parents, facts, and the kittens/puppies in it.
 * Kittens/puppies link to their litter from the Animal document (field „Cuib").
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
      description: 'Ex: „Cuibul B · Primăvară 2026".',
      validation: (Rule) => Rule.required().error('Titlul este obligatoriu'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (link)',
      type: 'slug',
      description: 'Se generează automat din titlu. Apasă „Generate".',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Slug-ul este obligatoriu'),
    }),
    speciesField,
    breedField,
    defineField({
      name: 'sire',
      title: 'Tatăl',
      type: 'reference',
      to: [{ type: 'animal' }],
      options: { filter: 'role == "breeding" && gender == "male"' },
    }),
    defineField({
      name: 'dam',
      title: 'Mama',
      type: 'reference',
      to: [{ type: 'animal' }],
      options: { filter: 'role == "breeding" && gender == "female"' },
    }),
    defineField({
      name: 'parents',
      title: 'Părinți (text, vechi)',
      type: 'string',
      description: 'Folosit doar dacă nu ai ales tatăl/mama mai sus. Ex: „Luna × Rex".',
      hidden: ({ document }) => Boolean(document?.sire || document?.dam) && !document?.parents,
    }),
    defineField({
      name: 'birthdate',
      title: 'Data nașterii',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'expectedAvailableDate',
      title: 'Pleacă acasă din',
      type: 'date',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'colors',
      title: 'Culori',
      type: 'string',
      description: 'Ex: „Silver, Golden".',
    }),
    defineField({
      name: 'priceFrom',
      title: 'Preț de la (€)',
      type: 'number',
      description: 'Lasă gol pentru „Preț la cerere".',
    }),
    defineField({
      name: 'photos',
      title: 'Poze',
      type: 'array',
      of: [photoMember],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'notes',
      title: 'Descriere (Română)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'notesEn',
      title: 'Descriere (Engleză)',
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
