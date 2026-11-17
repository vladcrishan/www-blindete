import { defineField, defineType, type ConditionalPropertyCallbackContext } from 'sanity';
import { breedField, photoMember, speciesField } from './fields';

/**
 * Animal document — either a breeding adult ("Pisicile / Câinii noștri", with
 * pedigree + family tree) or a kitten/puppy for sale.
 * All field titles/descriptions are in Romanian (the editor is the owner).
 */
const isBreeding = ({ document }: ConditionalPropertyCallbackContext) =>
  (document as { role?: string } | undefined)?.role === 'breeding';

export const animal = defineType({
  name: 'animal',
  title: 'Animal',
  type: 'document',
  groups: [
    { name: 'main', title: 'De bază', default: true },
    { name: 'photos', title: 'Poze & video' },
    { name: 'pedigree', title: 'Pedigree & sănătate' },
    { name: 'sale', title: 'Vânzare' },
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Nume',
      type: 'string',
      group: 'main',
      validation: (Rule) => Rule.required().error('Numele este obligatoriu'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (link)',
      type: 'slug',
      group: 'main',
      description: 'Se generează automat din nume. Apasă „Generate".',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Slug-ul este obligatoriu'),
    }),
    defineField({
      name: 'role',
      title: 'Tip',
      type: 'string',
      group: 'main',
      initialValue: 'offspring',
      description:
        '„Reproducător" apare la Pisicile / Câinii noștri, cu pedigree. „Pui" apare la pui de vânzare.',
      options: {
        layout: 'radio',
        list: [
          { title: '👑 Reproducător (al nostru)', value: 'breeding' },
          { title: '🐣 Pui (de vânzare)', value: 'offspring' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    { ...speciesField, group: 'main' },
    defineField({
      ...breedField,
      group: 'main',
      validation: (Rule) => Rule.required().error('Alege rasa'),
    }),
    defineField({
      name: 'gender',
      title: 'Sex',
      type: 'string',
      group: 'main',
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
      group: 'main',
      options: { dateFormat: 'DD-MM-YYYY' },
    }),
    defineField({
      name: 'color',
      title: 'Culoare',
      type: 'string',
      group: 'main',
      description: 'Ex: „Silver Chinchilla, ochi verzi" sau „Alb, ochi aramii".',
    }),
    defineField({
      name: 'headlineRo',
      title: 'Titlu scurt (Română)',
      type: 'string',
      group: 'main',
      description: 'Apare deasupra numelui. Ex: „Regina fondatoare", „Campion FIFe".',
      hidden: (ctx) => !isBreeding(ctx),
    }),
    defineField({
      name: 'headlineEn',
      title: 'Titlu scurt (Engleză)',
      type: 'string',
      group: 'main',
      description: 'Ex: „Foundation female".',
      hidden: (ctx) => !isBreeding(ctx),
    }),
    defineField({
      name: 'descriptionRo',
      title: 'Descriere (Română)',
      type: 'text',
      group: 'main',
      rows: 4,
    }),
    defineField({
      name: 'descriptionEn',
      title: 'Descriere (Engleză)',
      type: 'text',
      group: 'main',
      rows: 4,
      description: 'Opțional.',
    }),

    // ---------- Photos ----------
    defineField({
      name: 'photos',
      title: 'Poze',
      type: 'array',
      group: 'photos',
      description:
        'Trage mai multe poze deodată aici. Prima poză este cea principală — o poți muta trăgând de ea.',
      of: [photoMember],
      options: { layout: 'grid' },
      validation: (Rule) => Rule.required().min(1).error('Adaugă cel puțin o poză'),
    }),
    defineField({
      name: 'video',
      title: 'Video (link)',
      type: 'url',
      group: 'photos',
      description: 'Link YouTube / Facebook / Instagram. Opțional.',
      validation: (Rule) =>
        Rule.uri({ scheme: ['http', 'https'] }).error('Trebuie să fie un link valid'),
    }),

    // ---------- Pedigree & health ----------
    defineField({
      name: 'pedigreeRegistry',
      title: 'Registru pedigree',
      type: 'string',
      group: 'pedigree',
      description: 'Ex: „FIFe", „FCI", „WCF".',
    }),
    defineField({
      name: 'pedigreeNumber',
      title: 'Număr pedigree',
      type: 'string',
      group: 'pedigree',
      description: 'Ex: „RO-FFH PER 2021/0912".',
    }),
    defineField({
      name: 'pedigreeDocument',
      title: 'Poză / scan pedigree',
      type: 'image',
      group: 'pedigree',
      description: 'Opțional. Apare la „Vezi pedigree".',
    }),
    defineField({
      name: 'titles',
      title: 'Titluri / premii',
      type: 'string',
      group: 'pedigree',
      description: 'Ex: „Campion FIFe", „Best in Show 2023".',
    }),
    defineField({
      name: 'healthTests',
      title: 'Teste de sănătate',
      type: 'string',
      group: 'pedigree',
      description: 'Ex: „PKD negativ, HCM negativ".',
    }),
    defineField({
      name: 'weight',
      title: 'Greutate',
      type: 'string',
      group: 'pedigree',
      description: 'Ex: „3,8 kg".',
    }),
    defineField({
      name: 'coat',
      title: 'Blană',
      type: 'string',
      group: 'pedigree',
      description: 'Ex: „Lungă, dublă".',
    }),
    defineField({
      name: 'sire',
      title: 'Tatăl (din site)',
      type: 'reference',
      group: 'pedigree',
      to: [{ type: 'animal' }],
      description: 'Alege tatăl dacă e pe site. Altfel scrie numele mai jos.',
      options: { filter: 'gender == "male"' },
    }),
    defineField({
      name: 'sireName',
      title: 'Tatăl (nume, dacă nu e pe site)',
      type: 'string',
      group: 'pedigree',
      hidden: ({ document }) => Boolean((document as { sire?: unknown })?.sire),
    }),
    defineField({
      name: 'dam',
      title: 'Mama (din site)',
      type: 'reference',
      group: 'pedigree',
      to: [{ type: 'animal' }],
      description: 'Alege mama dacă e pe site. Altfel scrie numele mai jos.',
      options: { filter: 'gender == "female"' },
    }),
    defineField({
      name: 'damName',
      title: 'Mama (nume, dacă nu e pe site)',
      type: 'string',
      group: 'pedigree',
      hidden: ({ document }) => Boolean((document as { dam?: unknown })?.dam),
    }),
    defineField({
      name: 'grandparents',
      title: 'Bunici (pentru arborele genealogic)',
      type: 'object',
      group: 'pedigree',
      description: 'Opțional. Completează doar ce știi.',
      options: { collapsible: true, collapsed: true },
      fields: [
        defineField({ name: 'sireSire', title: 'Bunicul (tata tatălui)', type: 'string' }),
        defineField({ name: 'sireDam', title: 'Bunica (mama tatălui)', type: 'string' }),
        defineField({ name: 'damSire', title: 'Bunicul (tata mamei)', type: 'string' }),
        defineField({ name: 'damDam', title: 'Bunica (mama mamei)', type: 'string' }),
      ],
    }),

    // ---------- Sale (offspring only) ----------
    defineField({
      name: 'status',
      title: 'Stare',
      type: 'string',
      group: 'sale',
      initialValue: 'available',
      hidden: isBreeding,
      options: {
        layout: 'radio',
        list: [
          { title: '🟢 Disponibil', value: 'available' },
          { title: '🟡 Rezervat', value: 'reserved' },
          { title: '🔴 Vândut', value: 'sold' },
          { title: '🐣 În curând', value: 'upcoming' },
        ],
      },
    }),
    defineField({
      name: 'litter',
      title: 'Cuib',
      type: 'reference',
      group: 'sale',
      to: [{ type: 'litter' }],
      description: 'Din ce cuib face parte puiul. Apare pe pagina cuibului.',
      hidden: isBreeding,
    }),
    defineField({
      name: 'price',
      title: 'Preț (€)',
      type: 'number',
      group: 'sale',
      description: 'Lasă gol dacă nu vrei să afișezi prețul.',
      hidden: isBreeding,
    }),
    defineField({
      name: 'featured',
      title: 'Afișează pe prima pagină',
      type: 'boolean',
      group: 'sale',
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
      role: 'role',
      media: 'photos.0',
    },
    prepare({ title, status, role, media }) {
      const labels: Record<string, string> = {
        available: '🟢 Disponibil',
        reserved: '🟡 Rezervat',
        sold: '🔴 Vândut',
        upcoming: '🐣 În curând',
      };
      return {
        title,
        subtitle:
          role === 'breeding' ? '👑 Reproducător' : status ? (labels[status] ?? status) : '',
        media,
      };
    },
  },
});
