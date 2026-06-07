import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { projectId, dataset } from './client';

const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Build a Sanity image URL. Returns a chainable builder so callers can
 * append .width().format() etc. Format defaults to auto (webp/avif) elsewhere.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type { SanityImageSource };
