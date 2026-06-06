import { defineField, defineType } from 'sanity';

/**
 * siteSettings — singleton document. Global site config + hero content.
 * Configured as a singleton in the Studio (no create/delete, single instance).
 */
export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Setări site',
  type: 'document',
  groups: [
    { name: 'contact', title: 'Contact', default: true },
    { name: 'social', title: 'Rețele sociale' },
    { name: 'hero', title: 'Prima pagină (Hero)' },
  ],
  fields: [
    defineField({
      name: 'phone',
      title: 'Telefon',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      type: 'string',
      description: 'Format internațional, ex: +40712345678',
      group: 'contact',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      group: 'contact',
    }),
    defineField({
      name: 'city',
      title: 'Oraș',
      type: 'string',
      initialValue: 'Arad',
      group: 'contact',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook (link)',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram (link)',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'messenger',
      title: 'Messenger (link m.me/...)',
      type: 'url',
      description: 'Ex: https://m.me/numele.paginii',
      group: 'social',
    }),
    defineField({
      name: 'heroTitleRo',
      title: 'Titlu hero (Română)',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroTitleEn',
      title: 'Titlu hero (Engleză)',
      type: 'string',
      description: 'Opțional.',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitleRo',
      title: 'Subtitlu hero (Română)',
      type: 'text',
      rows: 2,
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitleEn',
      title: 'Subtitlu hero (Engleză)',
      type: 'text',
      rows: 2,
      description: 'Opțional.',
      group: 'hero',
    }),
    defineField({
      name: 'heroImage',
      title: 'Imagine hero',
      type: 'image',
      options: { hotspot: true },
      group: 'hero',
      fields: [
        defineField({
          name: 'alt',
          title: 'Text alternativ (pentru Google)',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Setări site' };
    },
  },
});
