import { urlFor } from './image';
import type { Animal, SiteSettings } from './types';
import { ui, type Lang } from '../../i18n/ui';

/** Localized brand name (blîndețe / blindete). */
const brandName = (lang: Lang): string => ui[lang]['brand.name'];

/** 1200x630 OG image from a Sanity image source. */
export function ogImageUrl(image: Parameters<typeof urlFor>[0]): string {
  return urlFor(image).width(1200).height(630).fit('crop').auto('format').quality(80).url();
}

const STATUS_TO_SCHEMA: Record<Animal['status'], string> = {
  available: 'https://schema.org/InStock',
  reserved: 'https://schema.org/PreOrder',
  upcoming: 'https://schema.org/PreOrder',
  sold: 'https://schema.org/SoldOut',
};

/** schema.org Product JSON-LD for an animal detail page. */
export function animalProductSchema(
  animal: Animal,
  opts: { url: string; description: string; images: string[]; lang: Lang },
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: animal.name,
    description: opts.description,
    image: opts.images,
    url: opts.url,
    category: animal.species === 'cat' ? 'Pet / Cat' : 'Pet / Dog',
    brand: { '@type': 'Brand', name: brandName(opts.lang) },
  };

  const offer: Record<string, unknown> = {
    '@type': 'Offer',
    url: opts.url,
    availability: STATUS_TO_SCHEMA[animal.status],
    priceCurrency: 'RON',
    itemCondition: 'https://schema.org/NewCondition',
  };
  if (typeof animal.price === 'number') {
    offer.price = animal.price;
  }
  schema.offers = offer;

  return schema;
}

/** schema.org PetStore / LocalBusiness JSON-LD for the home page. */
export function petStoreSchema(
  settings: SiteSettings | null,
  opts: { url: string; lang: Lang; image?: string },
): Record<string, unknown> {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['PetStore', 'LocalBusiness'],
    name: brandName(opts.lang),
    url: opts.url,
    description:
      opts.lang === 'en'
        ? 'Breeder of Persian Chinchilla cats and Pomeranian / Kleinspitz dogs in Arad, Romania.'
        : 'Crescătorie de pisici Persane Chinchilla și câini Pomeranian / Kleinspitz în Arad, România.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: settings?.city ?? 'Arad',
      addressCountry: 'RO',
    },
  };
  if (opts.image) schema.image = opts.image;
  if (settings?.phone) schema.telephone = settings.phone;
  if (settings?.email) schema.email = settings.email;
  const sameAs = [settings?.facebook, settings?.instagram].filter(Boolean);
  if (sameAs.length) schema.sameAs = sameAs;
  return schema;
}
