import type { SanityImageSource } from '@sanity/image-url';

export type Species = 'cat' | 'dog';
export type Breed = 'persian-chinchilla' | 'pomeranian';
export type AnimalStatus = 'available' | 'reserved' | 'sold' | 'upcoming';
export type Gender = 'male' | 'female';
/** breeding = our adults (Pisicile/Câinii noștri); offspring = kittens/puppies. */
export type AnimalRole = 'breeding' | 'offspring';
export type GalleryCategory = 'dogs' | 'cats' | 'puppies' | 'kittens' | 'shows';

export interface SanityImageWithAlt {
  _key?: string;
  alt?: string;
  asset?: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

/** Compact parent/relative projection (sire/dam on animals and litters). */
export interface AnimalRef {
  name: string;
  slug?: string;
  gender?: Gender;
  color?: string;
  titles?: string;
  birthdate?: string;
  photo?: SanityImageWithAlt;
  /** This parent's own parents (names), resolved from refs or text fallbacks. */
  sireName?: string;
  damName?: string;
}

export interface Animal {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  /** Always set by the query (defaults to 'offspring' for older docs). */
  role: AnimalRole;
  species: Species;
  breed: Breed;
  /** Always set by the query (defaults to 'available'). Meaningless for breeding animals. */
  status: AnimalStatus;
  gender?: Gender;
  birthdate?: string;
  color?: string;
  /** Short title above the name on breeding profiles ("Foundation female"). */
  headlineRo?: string;
  headlineEn?: string;
  price?: number;
  photos: SanityImageWithAlt[];
  video?: string;
  descriptionRo?: string;
  descriptionEn?: string;
  featured?: boolean;
  // Pedigree & health
  pedigreeRegistry?: string;
  pedigreeNumber?: string;
  pedigreeDocument?: SanityImageWithAlt;
  titles?: string;
  healthTests?: string;
  weight?: string;
  coat?: string;
  /** Resolved parents: from the reference if set, else `{ name: sireName }`. Null if unknown. */
  sire?: AnimalRef | null;
  dam?: AnimalRef | null;
  /** Explicit grandparent names typed by the owner (override sire/dam's own parents). */
  grandparents?: { sireSire?: string; sireDam?: string; damSire?: string; damDam?: string } | null;
  litter?: { title: string; slug: string } | null;
}

export interface SiteSettings {
  phone?: string;
  whatsapp?: string;
  email?: string;
  city?: string;
  /** Cat socials (Persană Chinchilla). */
  facebook?: string;
  instagram?: string;
  /** Dog socials (Pomeranian / Kleinspitz). */
  facebookDog?: string;
  instagramDog?: string;
  messenger?: string;
  heroTitleRo?: string;
  heroTitleEn?: string;
  heroSubtitleRo?: string;
  heroSubtitleEn?: string;
  heroImage?: SanityImageWithAlt;
}

export interface Post {
  _id: string;
  _createdAt: string;
  titleRo: string;
  titleEn?: string;
  slug: string;
  species: Species;
  publishedAt: string;
  excerptRo?: string;
  excerptEn?: string;
  coverImage?: SanityImageWithAlt;
  youtubeUrl?: string;
}

/** A post including its Portable Text body (article page). */
export interface PostDetail extends Post {
  // Portable Text blocks; typed loosely to avoid a hard dep on @portabletext/types.
  bodyRo?: unknown[];
  bodyEn?: unknown[];
}

export interface Litter {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  species?: Species;
  breed?: Breed;
  birthdate?: string;
  expectedAvailableDate?: string;
  /** Legacy free-text parents ("Luna × Rex"), used only when sire/dam refs are empty. */
  parents?: string;
  sire?: AnimalRef | null;
  dam?: AnimalRef | null;
  colors?: string;
  priceFrom?: number;
  photos?: SanityImageWithAlt[];
  notes?: string;
  notesEn?: string;
  public?: boolean;
  /** Kittens/puppies whose `litter` points here. */
  young: Animal[];
}

/** Per-species landing content (fixed docs `landing-cat` / `landing-dog`). */
export interface LandingContent {
  heroImage1?: SanityImageWithAlt;
  heroImage2?: SanityImageWithAlt;
  titleRo?: string;
  titleEn?: string;
  traitsRo?: string[];
  traitsEn?: string[];
  eyebrowRo?: string;
  eyebrowEn?: string;
  headlineRo?: string;
  headlineEn?: string;
  bodyRo?: string;
  bodyEn?: string;
  ourIntroRo?: string;
  ourIntroEn?: string;
  youngIntroRo?: string;
  youngIntroEn?: string;
}

export interface GalleryImage extends SanityImageWithAlt {
  _key: string;
  category?: GalleryCategory;
  captionRo?: string;
  captionEn?: string;
}

export type { SanityImageSource };
