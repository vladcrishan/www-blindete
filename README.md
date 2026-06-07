# Blîndețe — blindete.ro

Public-facing website for a Persian Chinchilla cat & Pomeranian / Kleinspitz dog
breeding business in Arad, Romania. Content is managed by a non-technical owner
through an embedded Sanity Studio. SEO is the top priority.

- **Romanian** is the primary language (served at `/`).
- **English** is served under `/en/`.
- The CMS (Sanity Studio) is embedded in this same repo at **`/admin`**.

## Tech stack

| Concern         | Choice                                                        |
| --------------- | ------------------------------------------------------------- |
| Framework       | [Astro](https://astro.build) (static output)                  |
| Language        | TypeScript (strict)                                           |
| Styling         | Tailwind CSS v4 (`@tailwindcss/vite`)                         |
| i18n            | Astro native i18n (`ro` default, `en` under `/en/`)           |
| CMS / content   | [Sanity](https://www.sanity.io) (Studio embedded at `/admin`) |
| Hosting         | [Netlify](https://www.netlify.com) (auto-deploy on push)      |
| Contact form    | Netlify Forms (no backend)                                    |
| Rebuild on edit | Sanity publish webhook → Netlify build hook                   |

---

## 1. Prerequisites

- **Node.js 22+** (Netlify is pinned to Node 22 in `netlify.toml`)
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
SANITY_STUDIO_PROJECT_ID=
SANITY_STUDIO_DATASET=
```

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
# add the Netlify preview/site URL too, e.g.:
pnpm dlx sanity cors add https://blindete.netlify.app --credentials
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
```

---

## 5. Deploy to Netlify

The site auto-deploys on every push to `master`.

### First-time Netlify setup

1. **Create the site** from this Git repo in Netlify (New site → Import from Git).
2. Netlify reads `netlify.toml` automatically:
   - Build command: `pnpm run build`
   - Publish directory: `dist`
   - Node version: `22`
3. **Environment variables** (Site settings → Environment variables) — add the
   same values as `.env`:
   - `SANITY_PROJECT_ID` — value from `.env`
   - `SANITY_DATASET = production`
   - `SANITY_API_VERSION = 2024-12-01`
   - `SANITY_STUDIO_PROJECT_ID` — value from `.env`
   - `SANITY_STUDIO_DATASET = production`
4. Add the Netlify domain(s) to Sanity CORS (see step 3 above).
5. Point DNS for `blindete.ro` at Netlify and set it as the primary custom domain.

### Netlify Forms

The contact form (`/contact`, `/en/contact`) uses Netlify Forms. It is detected
automatically at deploy time because the static HTML contains:

- `data-netlify="true"`
- a hidden `form-name` input
- a honeypot field (`netlify-honeypot="bot-field"`)

After the first deploy, submissions appear in **Netlify → Forms → "contact"**.
Set up notifications there (e.g. email to the owner) under
Forms → Settings & notifications.

---

## 6. Sanity publish → Netlify rebuild (so edits go live)

Because the site is statically built, an edit in the Studio must trigger a
rebuild. Wire it up once:

1. **Netlify → Site settings → Build & deploy → Build hooks → Add build hook.**
   Name it `sanity-publish`. Copy the generated URL, e.g.
   `https://api.netlify.com/build_hooks/XXXXXXXX`.

2. **Sanity → <https://www.sanity.io/manage> → your project → API → Webhooks → Create webhook:**
   - **Name:** `Netlify rebuild`
   - **URL:** the Netlify build hook URL from step 1
   - **Dataset:** `production`
   - **Trigger on:** Create, Update, Delete
   - **Filter:** `_type in ["animal", "siteSettings", "litter"]`
   - **HTTP method:** `POST`
   - **API version:** match `SANITY_API_VERSION`
   - Leave the projection/secret empty (the build hook needs no payload).

Now every **Publish** in the Studio triggers a fresh Netlify build, and the
change is live in ~1–2 minutes.

---

## 7. Project structure

```
sanity.config.ts              # Studio config (embedded at /admin), singleton siteSettings
astro.config.mjs              # Astro + i18n + Sanity + Tailwind + sitemap
netlify.toml                  # build + headers + admin SPA redirect
src/
  i18n/ui.ts                  # typed RO/EN strings + locale helpers + localized routes
  sanity/
    schemaTypes/              # animal, siteSettings (singleton), litter
    structure.ts              # Studio desk structure + singleton
    lib/                      # client, image-url builder, GROQ queries, types, seo
  components/
    pages/                    # HomePage, ListingPage, AnimalDetailPage, ContactPage
    SEO.astro JsonLd.astro Header.astro Footer.astro
    AnimalCard.astro StatusBadge.astro Gallery.astro SanityImage.astro
    VideoEmbed.astro ContactButtons.astro
  layouts/BaseLayout.astro
  pages/                      # thin route files (ro at root, en under /en/)
  styles/global.css           # DESIGN TOKENS (@theme) — see "Design" below
public/
  robots.txt                  # allow-all + sitemap reference
  favicon.svg
```

## 8. Content model (Sanity)

- **animal** — a single kitten/puppy: name, slug, species (cat/dog),
  breed (persian-chinchilla / pomeranian), status (available / reserved / sold /
  upcoming), gender, birthdate, price (RON, optional), photos (≥1), video URL,
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
