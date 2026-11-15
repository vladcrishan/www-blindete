import { defineField, defineType } from 'sanity';
import { photoField } from './fields';

/**
 * landing — per-species page content (photos + texts for the home-page hero
 * and the Pisicile/Câinii noștri + Pui intros). Two fixed documents:
 * `landing-cat` and `landing-dog` (singletons, see sanity.config.ts).
 */
export const landing = defineType({
  name: 'landing',
  title: 'Pagină specie',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Prima pagină', default: true },
    { name: 'pages', title: 'Texte pagini' },
  ],
  fields: [
    {
      ...photoField(
        'heroImage1',
        'Poza mare',
        'Poza principală de pe prima pagină. Apasă pe poză → „Crop" ca să alegi ce rămâne vizibil.',
      ),
      group: 'hero',
    },
    { ...photoField('heroImage2', 'Poza mică', 'A doua poză de pe prima pagină.'), group: 'hero' },
    defineField({
      name: 'titleRo',
      title: 'Titlu mare (Română)',
      type: 'string',
      group: 'hero',
      description: 'Ex: „Pisici Persane".',
    }),
    defineField({ name: 'titleEn', title: 'Titlu mare (Engleză)', type: 'string', group: 'hero' }),
    defineField({
      name: 'traitsRo',
      title: 'Etichete verticale (Română)',
      type: 'array',
      group: 'hero',
      of: [{ type: 'string' }],
      description: 'Ex: Chinchilla / Golden / Silver. Maxim 3.',
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'traitsEn',
      title: 'Etichete verticale (Engleză)',
      type: 'array',
      group: 'hero',
      of: [{ type: 'string' }],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'eyebrowRo',
      title: 'Text mic deasupra (Română)',
      type: 'string',
      group: 'hero',
      description: 'Ex: „Calitate superioară".',
    }),
    defineField({ name: 'eyebrowEn', title: 'Text mic deasupra (Engleză)', type: 'string', group: 'hero' }),
    defineField({
      name: 'headlineRo',
      title: 'Subtitlu (Română)',
      type: 'string',
      group: 'hero',
      description: 'Ex: „Rasă pură".',
    }),
    defineField({ name: 'headlineEn', title: 'Subtitlu (Engleză)', type: 'string', group: 'hero' }),
    defineField({ name: 'bodyRo', title: 'Text (Română)', type: 'text', rows: 3, group: 'hero' }),
    defineField({ name: 'bodyEn', title: 'Text (Engleză)', type: 'text', rows: 3, group: 'hero' }),

    defineField({
      name: 'ourIntroRo',
      title: 'Intro „Pisicile / Câinii noștri" (Română)',
      type: 'text',
      rows: 3,
      group: 'pages',
    }),
    defineField({
      name: 'ourIntroEn',
      title: 'Intro „Our cats / dogs" (Engleză)',
      type: 'text',
      rows: 3,
      group: 'pages',
    }),
    defineField({
      name: 'youngIntroRo',
      title: 'Intro „Pui" (Română)',
      type: 'text',
      rows: 3,
      group: 'pages',
    }),
    defineField({
      name: 'youngIntroEn',
      title: 'Intro „Kittens / Puppies" (Engleză)',
      type: 'text',
      rows: 3,
      group: 'pages',
    }),
  ],
  preview: {
    select: { id: '_id', media: 'heroImage1' },
    prepare({ id, media }) {
      return { title: String(id).endsWith('dog') ? 'Pagina Câini' : 'Pagina Pisici', media };
    },
  },
});
