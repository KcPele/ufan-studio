# Ufan Studio website

Marketing site for Ufan Studio (comics, illustration, animation; Abuja, Nigeria). Its one job: a cold-email recipient lands here and within ~8 seconds believes Ufan is a real, registered production company. Audiences in priority order: indie comic creators/publishers, NGO and development-sector comms officers (need CAC number, address, named team), animation studios outsourcing work.

## Rules

- Never say "co-authored by Claude Code" (or add any Claude co-author line) in commit messages.
- **No hardcoded colours.** Raw colour values live only in `styles/tokens.css`. Everywhere else use `var(--color-…)`. Same for spacing and type scale where a token exists. Re-theming = editing tokens only.
- **Content lives in `content/`, not in components.** Copy, prices, case studies, team, contact details are data. Components render props.
- **One component per file**, with a co-located `*.module.css`. No global class soup; `app/globals.css` is reset + base only.
- Pages in `app/` compose components; keep them thin.
- Design: DARK theme (owner decision, overrides the brief's light palette): near-black background, off-white text, ONE accent colour (orange). Artwork carries the page, one sans-serif (Inter). No sliders, parallax, autoplay video, loading animations, decorative textures or comic/display fonts.
- Mobile first. Nothing may break or scroll horizontally under 400px wide.
- Fast: always use `next/image` with real `width`/`height` (or `fill` + `sizes`). Minimal client JS; only add `"use client"` when state is needed.
- Images must never be cropped into small uniform thumbnails. Home featured case studies, each case study's images and the Work gallery all use `components/ui/StripGallery` (one open panel showing the whole artwork + narrow greyscale strips with vertical names, optional link in the open panel); keep each row to about 5–10 pieces and strip names short. Opening animates `flex-basis` between two exact lengths; do not switch to `flex-grow`/`flex: auto` (it jumps instead of animating).

## Stack

Next.js 16 (App Router, Turbopack), React 19, TypeScript, CSS Modules, pnpm. Contact form uses a Server Action + nodemailer (SMTP). Deployed as a Docker `standalone` build (`Dockerfile`, `compose.yaml`).

Next 16 docs ship in `node_modules/next/dist/docs/`; read them before using unfamiliar Next APIs (e.g. `next/image` `preload` replaced `priority`; `images.qualities` defaults to `[75]`).

## Commands

- `pnpm dev` – dev server on :3000
- `pnpm build` – production build (also type-checks)
- `docker compose up --build` – production container

## Structure

```
app/                    Routes (6 pages) + layout, sitemap, robots
  page.tsx              Home
  work/                 Case studies + gallery
  services/             Four services with prices
  about/                Story, founder, team, credentials
  contact/              Form page + actions.ts (server action)
  privacy/              Privacy notice and terms
components/
  layout/               SiteHeader (client, mobile menu), SiteFooter
  ui/                   Container, Section, SectionHeading, Button, TextLink, CallToAction
  home/ work/ services/ about/ contact/   Page-specific components
content/                ALL editable copy and data
  site.ts               Name, email, Instagram, CAC number, address, nav
  services.ts           Services, prices, turnarounds
  case-studies.ts       Case studies + gallery rows
  studio.ts             Home headline, trust strip stats, About story, team
  contact.ts            Form dropdown options
  images.ts             Image helper + intrinsic dimensions, hero images
lib/mail.ts             SMTP transport (server-only)
styles/tokens.css       Design tokens (colours, type, spacing)
public/images/          ufan/ (hero PNGs), ufan-archive/ (portfolio webp)
```

## Common edits

- **Prices / turnaround:** `content/services.ts`.
- **Add a case study:** copy an entry in `content/case-studies.ts`, unique `slug`, 6–10 images. It renders on `/work` (anchor `#slug`); the first four also appear as Home strips (strip name = `category`, image = first image).
- **New image:** drop it in `public/images/`, then reference it with its real width/height (`archive(n, alt)` for archive files; add new archive dimensions to `archiveSizes`).
- **Team photo:** put file in `public/images/team/`, set `photo` on the member in `content/studio.ts` (otherwise initials placeholder shows).
- **Theme:** `styles/tokens.css`.
- **Gallery pieces:** `galleryRows` in `content/case-studies.ts` (each inner array is one row; `title` is the strip name).

## SEO

- Every page except Home exports `metadata = pageMetadata({ title, description, path })` from `lib/seo.ts` (title, canonical, og/twitter tags incl. share image). New pages must do the same and be added to `nav` or `app/sitemap.ts`.
- Site-wide defaults, JSON-LD Organization schema: `app/layout.tsx`. Sitemap/robots read `site.url`.
- Share image: `app/opengraph-image.jpg` + `app/twitter-image.jpg` (1200×630, keep under ~300KB so WhatsApp shows previews). Favicon: `app/icon.svg` (temporary until a logo exists).
- In `pnpm dev` the og:image URL shows localhost; production uses `site.url`. Check tags against `pnpm build && pnpm start`.

## Environment

See `.env.example`. Contact form needs `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (mailbox hosting studio@ufanstudio.com). Optional `SMTP_FROM`, `CONTACT_TO`, `NEXT_PUBLIC_SITE_URL` (defaults to https://ufanstudio.com). Without SMTP the form shows an error telling the visitor to email directly. The brief requires the form to be tested end-to-end and shown working before launch.

## Content still to replace (marked `PLACEHOLDER` in `content/`)

CAC registration number, street address, Instagram handle, founding year, trust-strip figures, all prices/turnarounds, case-study clients/numbers/outcomes, About story copy, team members and photos, real hero/case-study images, CAFCI logo (once permission confirmed).
