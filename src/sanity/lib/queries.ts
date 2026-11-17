import groq from 'groq';
import { sanityClient } from './client';
import type {
  Animal,
  AnimalStatus,
  GalleryImage,
  LandingContent,
  Litter,
  Post,
  PostDetail,
  SiteSettings,
  Species,
} from './types';

/**
 * Compact parent projection. Used inside `select(defined(ref) => ref->..., ...)`
 * so a referenced animal and a typed-in name produce the same shape.
 */
const REF_PROJECTION = groq`{
  name,
  "slug": slug.current,
  gender,
  color,
  titles,
  birthdate,
  "photo": photos[0],
  "sireName": coalesce(sire->name, sireName),
  "damName": coalesce(dam->name, damName)
}`;

const ANIMAL_PROJECTION = groq`{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  "role": coalesce(role, "offspring"),
  species,
  breed,
  "status": coalesce(status, "available"),
  gender,
  birthdate,
  color,
  headlineRo,
  headlineEn,
  price,
  photos,
  video,
  descriptionRo,
  descriptionEn,
  featured,
  pedigreeRegistry,
  pedigreeNumber,
  pedigreeDocument,
  titles,
  healthTests,
  weight,
  coat,
  "sire": select(
    defined(sire) => sire->${REF_PROJECTION},
    defined(sireName) => { "name": sireName },
    null
  ),
  "dam": select(
    defined(dam) => dam->${REF_PROJECTION},
    defined(damName) => { "name": damName },
    null
  ),
  grandparents,
  "litter": litter->{ title, "slug": slug.current }
}`;

const IS_BREEDING = groq`role == "breeding"`;
const IS_OFFSPRING = groq`(!defined(role) || role != "breeding")`;

/** All animals (breeding + offspring), newest first. Used for detail static paths. */
export async function getAllAnimals(): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && defined(slug.current)] | order(_createdAt desc) ${ANIMAL_PROJECTION}`,
  );
}

/** Kittens/puppies (not breeding adults) of one species, newest first. */
export async function getOffspringBySpecies(species: Species): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && species == $species && ${IS_OFFSPRING}] | order(_createdAt desc) ${ANIMAL_PROJECTION}`,
    { species },
  );
}

/** @deprecated use getOffspringBySpecies — kept so existing pages keep working. */
export const getAnimalsBySpecies = getOffspringBySpecies;

/** Breeding adults ("Pisicile / Câinii noștri") of one species, oldest first (founders lead). */
export async function getBreedingAnimals(species: Species): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && species == $species && ${IS_BREEDING}] | order(_createdAt asc) ${ANIMAL_PROJECTION}`,
    { species },
  );
}

/** Featured animals for the home page. */
export async function getFeaturedAnimals(): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && featured == true] | order(_createdAt desc) ${ANIMAL_PROJECTION}`,
  );
}

/** Single animal by slug. */
export async function getAnimalBySlug(slug: string): Promise<Animal | null> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && slug.current == $slug][0] ${ANIMAL_PROJECTION}`,
    { slug },
  );
}

/** Offspring of a breeding animal (as sire or dam), newest first. */
export async function getOffspringOf(animalId: string): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && (sire._ref == $id || dam._ref == $id)] | order(_createdAt desc) ${ANIMAL_PROJECTION}`,
    { id: animalId },
  );
}

/** All slugs (for getStaticPaths). */
export async function getAnimalSlugs(): Promise<string[]> {
  return sanityClient.fetch(groq`*[_type == "animal" && defined(slug.current)].slug.current`);
}

/** Count of currently available kittens/puppies. */
export async function getAvailableCount(): Promise<number> {
  return sanityClient.fetch(
    groq`count(*[_type == "animal" && ${IS_OFFSPRING} && coalesce(status, "available") == "available"])`,
  );
}

/** Site settings singleton. */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(
    groq`*[_type == "siteSettings"][0]{
      phone, whatsapp, email, city,
      facebook, instagram, facebookDog, instagramDog, messenger,
      heroTitleRo, heroTitleEn, heroSubtitleRo, heroSubtitleEn, heroImage
    }`,
  );
}

/** Per-species landing content (hero photos + copy). Null until the owner publishes it. */
export async function getLanding(species: Species): Promise<LandingContent | null> {
  return sanityClient.fetch(groq`*[_id == $id][0]`, { id: `landing-${species}` });
}

/** Gallery photos in the owner's order. Empty array until published. */
export async function getGallery(): Promise<GalleryImage[]> {
  const images = await sanityClient.fetch<GalleryImage[] | null>(
    groq`*[_id == "gallery"][0].images[defined(asset)]`,
  );
  return images ?? [];
}

const POST_PROJECTION = groq`{
  _id,
  _createdAt,
  titleRo,
  titleEn,
  "slug": slug.current,
  species,
  publishedAt,
  excerptRo,
  excerptEn,
  coverImage,
  youtubeUrl
}`;

/** News posts for one sub-site (cat/dog), newest first. Optional limit. */
export async function getPostsBySpecies(species: Species, limit?: number): Promise<Post[]> {
  const slice = typeof limit === 'number' ? groq`[0...$limit]` : groq``;
  return sanityClient.fetch(
    groq`*[_type == "post" && species == $species] | order(publishedAt desc) ${POST_PROJECTION} ${slice}`,
    { species, limit },
  );
}

/** All posts of a species with body (article static paths). */
export async function getPostDetailsBySpecies(species: Species): Promise<PostDetail[]> {
  return sanityClient.fetch(
    groq`*[_type == "post" && species == $species && defined(slug.current)] | order(publishedAt desc){
      ...${POST_PROJECTION},
      bodyRo,
      bodyEn
    }`,
    { species },
  );
}

const LITTER_PROJECTION = groq`{
  _id,
  _createdAt,
  title,
  "slug": slug.current,
  species,
  breed,
  birthdate,
  expectedAvailableDate,
  parents,
  "sire": sire->${REF_PROJECTION},
  "dam": dam->${REF_PROJECTION},
  colors,
  priceFrom,
  photos,
  notes,
  notesEn,
  public,
  "young": *[_type == "animal" && litter._ref == ^._id] | order(name asc) ${ANIMAL_PROJECTION}
}`;

/** Public litters of one species, newest first (by birthdate, then creation). */
export async function getLittersBySpecies(species: Species): Promise<Litter[]> {
  return sanityClient.fetch(
    groq`*[_type == "litter" && public == true && species == $species && defined(slug.current)]
      | order(coalesce(birthdate, _createdAt) desc) ${LITTER_PROJECTION}`,
    { species },
  );
}

/** Public litters (all species). */
export async function getPublicLitters(): Promise<Litter[]> {
  return sanityClient.fetch(
    groq`*[_type == "litter" && public == true] | order(_createdAt desc) ${LITTER_PROJECTION}`,
  );
}

export type {
  Animal,
  AnimalStatus,
  GalleryImage,
  LandingContent,
  Litter,
  Post,
  PostDetail,
  SiteSettings,
  Species,
};
