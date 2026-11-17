import type { StructureResolver } from 'sanity/structure';

/**
 * Custom Studio desk structure.
 * - siteSettings, the two species pages and the gallery are singletons
 *   (one fixed document each).
 * - Animals are split into breeding adults vs kittens/puppies so the owner
 *   finds things quickly; the full list stays available too.
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
      S.listItem()
        .title('Pagina Pisici (poze & texte)')
        .icon(() => '🐈')
        .child(S.document().schemaType('landing').documentId('landing-cat').title('Pagina Pisici')),
      S.listItem()
        .title('Pagina Câini (poze & texte)')
        .icon(() => '🐕')
        .child(S.document().schemaType('landing').documentId('landing-dog').title('Pagina Câini')),
      S.listItem()
        .title('Galerie')
        .icon(() => '🖼️')
        .child(S.document().schemaType('gallery').documentId('gallery').title('Galerie')),
      S.divider(),
      S.listItem()
        .title('Reproducători (ai noștri)')
        .icon(() => '👑')
        .child(
          S.documentTypeList('animal')
            .title('Reproducători')
            .filter('_type == "animal" && role == "breeding"')
            .initialValueTemplates([S.initialValueTemplateItem('animal-breeding')]),
        ),
      S.listItem()
        .title('Pui de vânzare')
        .icon(() => '🐣')
        .child(
          S.documentTypeList('animal')
            .title('Pui de vânzare')
            .filter('_type == "animal" && role != "breeding"'),
        ),
      S.documentTypeListItem('litter')
        .title('Cuiburi')
        .icon(() => '🧺'),
      S.documentTypeListItem('post')
        .title('Știri')
        .icon(() => '📰'),
      S.divider(),
      S.documentTypeListItem('animal')
        .title('Toate animalele')
        .icon(() => '🐾'),
    ]);
