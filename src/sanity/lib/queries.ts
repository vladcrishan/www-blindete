import groq from 'groq';
import { sanityClient } from './client';
import type { Animal, SiteSettings, Litter, Species, AnimalStatus } from './types';

const ANIMAL_PROJECTION = groq`{
  _id,
  _createdAt,
  name,
  "slug": slug.current,
  species,
  breed,
  status,
  gender,
  birthdate,
  price,
  photos,
  video,
  descriptionRo,
  descriptionEn,
  featured
}`;

/** All animals, newest first. */
export async function getAllAnimals(): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal"] | order(_createdAt desc) ${ANIMAL_PROJECTION}`,
  );
}

/** Animals of one species (cat/dog), newest first. */
export async function getAnimalsBySpecies(species: Species): Promise<Animal[]> {
  return sanityClient.fetch(
    groq`*[_type == "animal" && species == $species] | order(_createdAt desc) ${ANIMAL_PROJECTION}`,
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

/** All slugs (for getStaticPaths). */
export async function getAnimalSlugs(): Promise<string[]> {
  return sanityClient.fetch(groq`*[_type == "animal" && defined(slug.current)].slug.current`);
}

/** Count of currently available animals. */
export async function getAvailableCount(): Promise<number> {
  return sanityClient.fetch(groq`count(*[_type == "animal" && status == "available"])`);
}

/** Site settings singleton. */
export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch(
    groq`*[_type == "siteSettings"][0]{
      phone, whatsapp, email, city, facebook, instagram, messenger,
      heroTitleRo, heroTitleEn, heroSubtitleRo, heroSubtitleEn, heroImage
    }`,
  );
}

/** Public litters. */
export async function getPublicLitters(): Promise<Litter[]> {
  return sanityClient.fetch(
    groq`*[_type == "litter" && public == true] | order(_createdAt desc){
      _id, _createdAt, title, species, breed, birthdate,
      expectedAvailableDate, parents, photos, notes, public
    }`,
  );
}

export type { Animal, SiteSettings, Litter, AnimalStatus, Species };
