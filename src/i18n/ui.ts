/**
 * Tiny typed i18n layer for static UI strings + URL/locale helpers.
 * Astro native i18n: defaultLocale 'ro' (no prefix), 'en' under /en/.
 */

export const languages = {
  ro: 'Română',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'ro';

/** Logo wordmark, identical in every language (with diacritics and the dot). */
export const LOGO = 'blîndețe.';

/** Static UI strings. RO is the source of truth; EN mirrors every key. */
export const ui = {
  ro: {
    'brand.name': 'blîndețe',

    'nav.home': 'Acasă',
    'nav.cats': 'Pisici',
    'nav.dogs': 'Câini',
    'nav.contact': 'Contact',
    'nav.admin': 'Administrare',
    'nav.news': 'Noutăți',
    'nav.kittens': 'Pisoi',
    'nav.puppies': 'Căței',
    'nav.gallery': 'Galerie',
    'nav.ourCats': 'Pisicile noastre',
    'nav.ourDogs': 'Câinii noștri',

    'home.availableNow': 'Disponibili acum',
    'home.available.one': 'animal disponibil',
    'home.available.many': 'animale disponibile',
    'home.featured': 'Recomandate',
    'home.viewAll': 'Vezi toate',
    'home.contactCta': 'Contactează-ne',
    'home.followUs': 'Urmărește-ne',

    'news.title': 'Noutăți',
    'news.readMore': 'Citește mai mult',
    'news.empty': 'Nu sunt noutăți momentan.',
    'news.video': 'Video YouTube',

    'list.cats.title': 'Pisici · Persană Chinchilla',
    'list.dogs.title': 'Câini · Pomeranian / Kleinspitz',
    'list.empty': 'Momentan nu sunt animale de afișat aici.',
    'list.filter.all': 'Toate',

    'status.available': 'Disponibil',
    'status.reserved': 'Rezervat',
    'status.sold': 'Vândut',
    'status.upcoming': 'În curând',

    'animal.gender': 'Sex',
    'animal.gender.male': 'Mascul',
    'animal.gender.female': 'Femelă',
    'animal.breed': 'Rasă',
    'animal.birthdate': 'Data nașterii',
    'animal.price': 'Preț',
    'animal.priceOnRequest': 'Preț la cerere',
    'animal.backToList': 'Înapoi la listă',
    'animal.video': 'Video',

    'breed.persian-chinchilla': 'Persană Chinchilla',
    'breed.pomeranian': 'Pomeranian / Kleinspitz',

    'cta.call': 'Sună',
    'cta.whatsapp': 'WhatsApp',
    'cta.messenger': 'Messenger',
    'cta.email': 'Email',
    'cta.message': 'Mesaj',
    'cta.viewMap': 'Vezi pe hartă',

    'contact.title': 'Contact',
    'contact.intro': 'Scrie-ne și îți răspundem cât mai repede.',
    'contact.name': 'Nume',
    'contact.email': 'Email',
    'contact.phone': 'Telefon',
    'contact.message': 'Mesaj',
    'contact.send': 'Trimite mesajul',
    'contact.city': 'Oraș',
    'contact.orReachUs': 'Sau contactează-ne direct:',

    'footer.rights': 'Toate drepturile rezervate.',
    'footer.photos':
      'Toate fotografiile sunt proprietatea blîndețe și sunt protejate de drepturile de autor. Folosirea lor fără acord scris este interzisă.',
    'footer.tagline':
      'Crescătorie de pisici Persane Chinchilla și câini Pomeranian / Kleinspitz în Arad, România.',

    'lang.switchTo': 'English',
  },
  en: {
    'brand.name': 'blindete',

    'nav.home': 'Home',
    'nav.cats': 'Cats',
    'nav.dogs': 'Dogs',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    'nav.news': 'News',
    'nav.kittens': 'Kittens',
    'nav.puppies': 'Puppies',
    'nav.gallery': 'Gallery',
    'nav.ourCats': 'Our cats',
    'nav.ourDogs': 'Our dogs',

    'home.availableNow': 'Available now',
    'home.available.one': 'animal available',
    'home.available.many': 'animals available',
    'home.featured': 'Featured',
    'home.viewAll': 'View all',
    'home.contactCta': 'Contact us',
    'home.followUs': 'Follow us',

    'news.title': 'News',
    'news.readMore': 'Read more',
    'news.empty': 'No news right now.',
    'news.video': 'YouTube video',

    'list.cats.title': 'Cats · Persian Chinchilla',
    'list.dogs.title': 'Dogs · Pomeranian / Kleinspitz',
    'list.empty': 'No animals to show here right now.',
    'list.filter.all': 'All',

    'status.available': 'Available',
    'status.reserved': 'Reserved',
    'status.sold': 'Sold',
    'status.upcoming': 'Coming soon',

    'animal.gender': 'Sex',
    'animal.gender.male': 'Male',
    'animal.gender.female': 'Female',
    'animal.breed': 'Breed',
    'animal.birthdate': 'Date of birth',
    'animal.price': 'Price',
    'animal.priceOnRequest': 'Price on request',
    'animal.backToList': 'Back to list',
    'animal.video': 'Video',

    'breed.persian-chinchilla': 'Persian Chinchilla',
    'breed.pomeranian': 'Pomeranian / Kleinspitz',

    'cta.call': 'Call',
    'cta.whatsapp': 'WhatsApp',
    'cta.messenger': 'Messenger',
    'cta.email': 'Email',
    'cta.message': 'Message',
    'cta.viewMap': 'View on map',

    'contact.title': 'Contact',
    'contact.intro': "Write to us and we'll get back to you as soon as possible.",
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Message',
    'contact.send': 'Send message',
    'contact.city': 'City',
    'contact.orReachUs': 'Or reach us directly:',

    'footer.rights': 'All rights reserved.',
    'footer.photos':
      'All photos are the property of blindete and protected by copyright. Use without written permission is prohibited.',
    'footer.tagline':
      'Breeder of Persian Chinchilla cats and Pomeranian / Kleinspitz dogs in Arad, Romania.',

    'lang.switchTo': 'Română',
  },
} as const;

export type UIKey = keyof (typeof ui)['ro'];

/**
 * Localized route segments. Keyed by an abstract page id.
 * `ro` paths have no /ro prefix; `en` paths are prefixed with /en.
 */
export const routes = {
  home: { ro: '/', en: '/en/' },
  // Sub-site landings (hero + news). The two species FB/IG accounts link here.
  cats: { ro: '/persana-chinchilla', en: '/en/persian-chinchilla' },
  dogs: { ro: '/pomeranian-kleinspitz', en: '/en/pomeranian-kleinspitz' },
  // Kittens/puppies (litters + offspring), nested under each sub-site landing.
  catsListing: { ro: '/persana-chinchilla/pisici', en: '/en/persian-chinchilla/kittens' },
  dogsListing: { ro: '/pomeranian-kleinspitz/caini', en: '/en/pomeranian-kleinspitz/puppies' },
  // Breeding adults ("Our cats / Our dogs").
  catsOurs: { ro: '/persana-chinchilla/pisicile-noastre', en: '/en/persian-chinchilla/our-cats' },
  dogsOurs: {
    ro: '/pomeranian-kleinspitz/cainii-nostri',
    en: '/en/pomeranian-kleinspitz/our-dogs',
  },
  gallery: { ro: '/galerie', en: '/en/gallery' },
  contact: { ro: '/contact', en: '/en/contact' },
} as const;

/**
 * Per-species dynamic route bases (slug appended).
 * - litter: /persana-chinchilla/cuib/<slug>  <->  /en/persian-chinchilla/litter/<slug>
 * - news:   /persana-chinchilla/noutati/<slug> <-> /en/persian-chinchilla/news/<slug>
 */
export const litterBase = {
  cat: { ro: '/persana-chinchilla/cuib', en: '/en/persian-chinchilla/litter' },
  dog: { ro: '/pomeranian-kleinspitz/cuib', en: '/en/pomeranian-kleinspitz/litter' },
} as const;
export const newsBase = {
  cat: { ro: '/persana-chinchilla/noutati', en: '/en/persian-chinchilla/news' },
  dog: { ro: '/pomeranian-kleinspitz/noutati', en: '/en/pomeranian-kleinspitz/news' },
} as const;

type SpeciesKey = keyof typeof litterBase;

/** Localized litter page URL. */
/** Price in euro, formatted for the page language: „1.200 €" (RO), „€1,200" (EN). */
export function formatPrice(amount: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'en' ? 'en-GB' : 'ro-RO', {
    style: 'currency',
    currency: 'EUR',
    currencyDisplay: 'narrowSymbol',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function litterPath(species: SpeciesKey, slug: string, lang: Lang): string {
  return `${litterBase[species][lang]}/${slug}`;
}

/** Localized news article URL. */
export function postPath(species: SpeciesKey, slug: string, lang: Lang): string {
  return `${newsBase[species][lang]}/${slug}`;
}

export type RouteId = keyof typeof routes;

/** Animal detail base path per locale (slug appended). */
export const animalBase = { ro: '/animal', en: '/en/animal' } as const;

/** Extract the active locale from a URL pathname. */
export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'en') return 'en';
  return defaultLang;
}

/** Translator bound to a locale, for static UI strings. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Build a localized route URL by page id. */
export function localizedRoute(id: RouteId, lang: Lang): string {
  return routes[id][lang];
}

/** Build a localized animal detail URL. */
export function animalPath(slug: string, lang: Lang): string {
  return `${animalBase[lang]}/${slug}`;
}

/**
 * Given the current URL and a target locale, return the equivalent path in
 * that locale (used by the language switcher to preserve the current page).
 */
export function switchLocalePath(url: URL, target: Lang): string {
  const path = url.pathname;
  const current: Lang = getLangFromUrl(url);
  if (current === target) return path;

  // Match against known localized routes first.
  for (const id of Object.keys(routes) as RouteId[]) {
    if (routes[id][current] === path || routes[id][current] === stripTrailing(path)) {
      return routes[id][target];
    }
  }

  // Litter / news detail: swap the per-species base, keep the slug.
  for (const bases of [litterBase, newsBase]) {
    for (const sp of Object.keys(bases) as SpeciesKey[]) {
      const from = bases[sp][current];
      if (path.startsWith(from + '/')) return bases[sp][target] + path.slice(from.length);
    }
  }

  // Animal detail: /animal/<slug> <-> /en/animal/<slug>
  const animalMatch = path.match(/^\/(?:en\/)?animal\/(.+?)\/?$/);
  if (animalMatch) {
    return `${animalBase[target]}/${animalMatch[1]}`;
  }

  // Fallback: naive prefix swap.
  if (target === 'en') return path === '/' ? '/en/' : `/en${path}`;
  return path.replace(/^\/en(\/|$)/, '/');
}

function stripTrailing(p: string): string {
  return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
}

/** Localized field fallback: prefer the locale value, fall back to RO. */
export function localized<T>(
  ro: T | undefined | null,
  en: T | undefined | null,
  lang: Lang,
): T | undefined {
  if (lang === 'en') return en ?? ro ?? undefined;
  return ro ?? undefined;
}
