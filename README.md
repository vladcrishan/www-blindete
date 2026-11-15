# Blîndețe — blindete.ro

Public-facing website for a Persian Chinchilla cat & Pomeranian / Kleinspitz dog
breeding business in Arad, Romania. Content is managed by a non-technical owner
through an embedded Sanity Studio. SEO is the top priority.

- **Romanian** is the primary language (served at `/`).
- **English** is served under `/en/`.
- The CMS (Sanity Studio) is embedded in this same repo at **`/admin`**.

## Tech stack

| Concern         | Choice                                                                            |
| --------------- | --------------------------------------------------------------------------------- |
| Framework       | [Astro](https://astro.build) (static output)                                      |
| Language        | TypeScript (strict)                                                               |
| Styling         | Tailwind CSS v4 (`@tailwindcss/vite`)                                             |
| i18n            | Astro native i18n (`ro` default, `en` under `/en/`)                               |
| CMS / content   | [Sanity](https://www.sanity.io) (Studio embedded at `/admin`)                     |
| Hosting         | [Vercel](https://vercel.com) (`@astrojs/vercel` adapter, Git auto-deploy on push) |
| Contact form    | No backend: opens the visitor's email app (`mailto:`) to the address from Sanity  |
| Rebuild on edit | Sanity publish webhook → Vercel Deploy Hook                                       |

---

## 1. Prerequisites

- **Node.js 22+**
- **pnpm** (this repo uses pnpm — the version is pinned in `package.json` via
  `packageManager`). Install with `npm i -g pnpm` or `corepack enable`.
- A Sanity project. This repo is wired to:
  - **Project ID:** see `SANITY_PROJECT_ID` in `.env`
  - **Dataset:** `production`

## 2. Setup

```bash
git clone git@github.com:vladcrishan/www-blindete.git
cd www-blindete
pnpm install
cp .env.example .env   # then fill in the Sanity project values
```

> First `pnpm install` approves native build scripts for `sharp` (image
> optimization) and `esbuild`, declared under `pnpm.onlyBuiltDependencies` in
> `package.json` — no manual `pnpm approve-builds` step needed.

> **Harmless build warnings:** under pnpm's strict `node_modules`, the build
> prints `[vite] Failed to resolve dependency: react-is / react-compiler-runtime
/ lodash/startCase.js`. These are dev-server pre-bundling hints for the
> embedded Sanity Studio only; the production build bundles them correctly
> (verified in `dist/_astro/`), so they do not affect the deployed site.

`.env` (gitignored) holds:

```
SANITY_PROJECT_ID=
SANITY_DATASET=
SANITY_API_VERSION=
PUBLIC_SANITY_PROJECT_ID=
PUBLIC_SANITY_DATASET=
```

(The `PUBLIC_` ones are read by the embedded Studio in the browser and must
match the values above.)

## 3. Run in development

```bash
pnpm dev
```

This single command runs **both** the website and the embedded Sanity Studio:

- Website: <http://localhost:4321/>
- English: <http://localhost:4321/en/>
- **Studio (CMS):** <http://localhost:4321/admin>

> The Studio is mounted by `@sanity/astro` (see `astro.config.mjs` →
> `studioBasePath: '/admin'`). There is **no separate Studio server** — it is
> part of the same Astro app, so it deploys with the site.

### One-time Sanity access (CORS + dataset visibility)

The Studio talks to Sanity's API from the browser, so the dev and production
origins must be allowed:

```bash
pnpm dlx sanity login          # log in with the account that owns the project
pnpm dlx sanity cors add http://localhost:4321 --credentials
pnpm dlx sanity cors add https://blindete.ro --credentials
pnpm dlx sanity cors add https://www.blindete.ro --credentials
# and the Vercel production URL (shown in Vercel → Project → Domains), e.g.:
pnpm dlx sanity cors add https://www-blindete.vercel.app --credentials
```

Invite the owner (mom) as an editor so she can log in at `/admin`:

```bash
# or do this in the Sanity dashboard: https://www.sanity.io/manage
pnpm dlx sanity invite
```

Login methods enabled: **Google** and **email/password**.

## 4. Other scripts

```bash
pnpm build      # production build into dist/ (also generates sitemap)
pnpm preview    # preview the production build locally
pnpm typecheck  # astro check (strict TypeScript)
pnpm format     # prettier --write .
```

There is no deploy script — Vercel deploys from Git.

---

## 5. Deploy to Vercel

The site is a fully prerendered static Astro build (`output: 'static'`) deployed
on **Vercel** through the `@astrojs/vercel` adapter (`adapter: vercel()` in
`astro.config.mjs`). The adapter emits real 301 redirects for the old URLs and
long immutable cache headers for `/_astro/*`, so no `vercel.json` is needed.
The project is Git-connected: pushing to `master` deploys to production, and
every other branch / PR gets a preview deployment.

### First-time Vercel setup

1. **Vercel → Add New → Project →** import the GitHub repo
   `vladcrishan/www-blindete`.
   - Framework preset: **Astro** (auto-detected)
   - Install command: `pnpm install`; build command: `pnpm run build` (defaults are fine)
2. **Environment variables** (Project → Settings → Environment Variables, all
   environments; same values as `.env`):
   - `SANITY_PROJECT_ID`, `SANITY_DATASET = production`, `SANITY_API_VERSION = 2024-12-01`
   - `PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET = production`
3. **Node.js version:** Project → Settings → General → **Node.js Version** → `22.x`.
4. Click **Deploy**.
5. Add the `*.vercel.app` production URL and `https://blindete.ro` /
   `https://www.blindete.ro` to Sanity CORS (see step 3 above).

### Custom domain (blindete.ro)

DNS for `blindete.ro` is on Cloudflare (nameservers already switched).

1. Vercel → Project → Settings → **Domains** → add `blindete.ro` and
   `www.blindete.ro`. Pick one as primary; Vercel redirects the other to it.
2. Cloudflare → `blindete.ro` → **DNS**: delete the 4 existing `A` records
   (2× `blindete.ro`, 2× `www`) — they point at the old Netlify site.
3. Add the records Vercel shows for the project (use the values Vercel shows;
   they may differ per project). Typically:
   - `A` `blindete.ro` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com`

   Set both to **DNS only (grey cloud)**, as Vercel recommends. With DNS only,
   Cloudflare's SSL mode does not matter.

4. Wait until Vercel shows the domains as valid (and issues the certificate).
5. Once it works, **remove the domain from the old Netlify site**.

### Contact form (mailto)

There is no backend and no email service. Submitting the form opens the
visitor's own email app with a pre-filled email to the owner. The address comes
from Sanity → **Setări site** (`siteSettings`) → **email**. If that field is
empty, the form is hidden. The Phone / WhatsApp / Messenger buttons are always
shown.

---

## 6. Sanity publish → Vercel rebuild (so edits go live)

Because the site is statically built, an edit in the Studio must trigger a
rebuild. Wire it up once:

1. **Vercel → Project → Settings → Git → Deploy Hooks → Create.**
   Name it `sanity-publish`, branch `master`. Copy the URL, e.g.
   `https://api.vercel.com/v1/integrations/deploy/prj_xxx/yyy`.

2. **Sanity → <https://www.sanity.io/manage> → your project → API → Webhooks → Create webhook:**
   - **Name:** `Vercel rebuild`
   - **URL:** the deploy hook URL from step 1
   - **Dataset:** `production`
   - **Trigger on:** Create, Update, Delete
   - **Filter:** `_type in ["animal", "litter", "gallery", "landing", "post", "siteSettings"]`
   - **HTTP method:** `POST`
   - **API version:** match `SANITY_API_VERSION`
   - Leave the projection/secret empty (the deploy hook needs no payload).

Now every **Publish** in the Studio triggers a fresh build, and the change is
live in ~1–2 minutes.

---

## 7. Project structure

```
sanity.config.ts              # Studio config (embedded at /admin), singleton siteSettings
astro.config.mjs              # Astro + Vercel adapter + i18n + Sanity + Tailwind + sitemap
src/
  i18n/ui.ts                  # typed RO/EN strings + locale helpers + localized routes
  sanity/
    schemaTypes/              # animal, litter, gallery, landing, post, siteSettings (singleton)
    structure.ts              # Studio desk structure + singleton
    lib/                      # client, image-url builder, GROQ queries, types, seo
  components/
    pages/                    # HomePage, ListingPage, AnimalDetailPage, ContactPage, ...
    SEO.astro JsonLd.astro Header.astro Footer.astro
    AnimalCard.astro StatusBadge.astro Gallery.astro SanityImage.astro
    VideoEmbed.astro ContactButtons.astro
  layouts/BaseLayout.astro
  pages/                      # thin route files (ro at root, en under /en/)
  styles/global.css           # DESIGN TOKENS (@theme) — see "Design" below
public/
  robots.txt                  # allow-all + sitemap reference
  favicon.svg
  map-arad.png
scripts/
  seed-site-settings.mjs      # seeds siteSettings in Sanity
```

## 8. Content model (Sanity)

- **animal** — a single kitten/puppy: name, slug, species (cat/dog),
  breed (persian-chinchilla / pomeranian), status (available / reserved / sold /
  upcoming), gender, birthdate, price (EUR, optional), photos (≥1), video URL,
  RO/EN descriptions, `featured` (home page). Ordered newest-first.
- **siteSettings** — singleton: contact (phone, whatsapp, email, city),
  socials (facebook, instagram, messenger), hero (title/subtitle RO+EN, image).
- **litter** — "born / available soon" events (lightly used for now).

All field labels are in **Romanian** (the editor is the owner). EN content fields
fall back to RO when empty.

## 9. SEO

- Per-page `<title>`, meta description, canonical.
- `hreflang` alternates (ro ↔ en, plus `x-default` → ro) in HTML **and** sitemap.
- Open Graph + Twitter cards (og:image from animal photo / hero).
- JSON-LD: `PetStore` + `LocalBusiness` on home, `Product` (with `Offer`,
  price + availability) on animal pages.
- `sitemap-index.xml` via `@astrojs/sitemap`; `robots.txt` allows all crawlers.

## 10. Design tokens

All colors, fonts and radii live in **`src/styles/global.css`** under the
Tailwind v4 `@theme` block. The current values are **placeholders** marked
`TODO(figma)`. To apply the real Figma design, edit only that file — every
component reads from these CSS variables.

---

For the owner's day-to-day guide (in Romanian), see **[GHID.md](./GHID.md)**.
