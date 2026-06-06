import type { StructureResolver } from 'sanity/structure';

/**
 * Custom Studio desk structure.
 * - siteSettings is rendered as a single editable document (singleton).
 * - animal & litter are normal lists.
 */
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Conținut')
    .items([
      S.listItem()
        .title('Setări site')
        .icon(() => '⚙️')
        .child(
          S.document().schemaType('siteSettings').documentId('siteSettings').title('Setări site'),
        ),
      S.divider(),
      S.documentTypeListItem('animal')
        .title('Animale')
        .icon(() => '🐾'),
      S.documentTypeListItem('litter')
        .title('Cuiburi (pui)')
        .icon(() => '🐣'),
    ]);
