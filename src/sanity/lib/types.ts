import type { SanityImageSource } from '@sanity/image-url';

export type Species = 'cat' | 'dog';
export type Breed = 'persian-chinchilla' | 'pomeranian';
export type AnimalStatus = 'available' | 'reserved' | 'sold' | 'upcoming';
export type Gender = 'male' | 'female';

export interface SanityImageWithAlt {
  _key?: string;
  alt?: string;
  asset?: { _ref: string; _type: 'reference' };
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface Animal {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  species: Species;
  breed: Breed;
  status: AnimalStatus;
  gender?: Gender;
  birthdate?: string;
  price?: number;
  photos: SanityImageWithAlt[];
  video?: string;
  descriptionRo?: string;
  descriptionEn?: string;
  featured?: boolean;
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

export interface Litter {
  _id: string;
  _createdAt: string;
  title: string;
  species?: Species;
  breed?: Breed;
  birthdate?: string;
  expectedAvailableDate?: string;
  parents?: string;
  photos?: SanityImageWithAlt[];
  notes?: string;
  public?: boolean;
}

export type { SanityImageSource };
