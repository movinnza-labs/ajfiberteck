# AJ Fibertek India — Next.js rebuild

A rebuild of [ajfibertek.co.in](https://ajfibertek.co.in/) on Next.js, React, TypeScript and
Tailwind CSS. **All page copy is reproduced verbatim from the existing WordPress site.**
Only the visual presentation, markup and technical SEO have changed.

## Stack

| | |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-based `@theme` config) |
| Fonts | Poppins (display) + DM Sans (body), via `next/font` — same pair as the original |
| Images | `next/image` with AVIF/WebP |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project layout

```text
src/
  app/                     one folder per existing URL
    layout.tsx             header, footer, fonts, Organization JSON-LD
    page.tsx               home
    about-us/              contact-us/            products/
    thermal-acoustic-insulation/
    medical-implant/       sinteredtooling/
    hamat-std/  hamat-adv/  hamat-super/  hamat-ultra/
    not-found.tsx          404
    robots.ts              -> /robots.txt
    sitemap.ts             -> /sitemap.xml
    globals.css            design tokens + base layer
  components/
    layout/                Header, MobileNav, Footer
    sections/              page sections (hero, stats, process, CTA, …)
    ui/                    Button, Container, SectionHeading, Breadcrumbs,
                           ProductCard, ListingCard, SpecTable, ImagePlaceholder
    seo/                   OrganizationJsonLd
  data/
    site.ts                nav, contact details, company constants
    content.ts             ALL page copy, verbatim
  lib/
    seo.ts                 metadata / canonical / OG builder
public/
  media/                   88 images + videos copied from the original site
  llms.txt
```

### Where the content lives

Every visible string is in [`src/data/content.ts`](src/data/content.ts) and
[`src/data/site.ts`](src/data/site.ts). Components contain layout only. To change wording,
edit the data file — do not inline copy into components.

## URLs

Trailing slashes are preserved (`trailingSlash: true`) so every indexed URL still resolves.

| URL | Notes |
| --- | --- |
| `/` | |
| `/about-us/` | |
| `/thermal-acoustic-insulation/` | links through to the four HAMAT pages |
| `/medical-implant/` | |
| `/sinteredtooling/` | |
| `/hamat-std/` `/hamat-adv/` `/hamat-super/` `/hamat-ultra/` | now reachable from the menu |
| `/contact-us/` | |
| `/products/` | reproduced verbatim, served `noindex` (see below) |

Permanent redirects (308), configured in [`next.config.ts`](next.config.ts):

| From | To |
| --- | --- |
| any path without a trailing slash | the same path with one |
| `/hello-world/` | `/` |
| `/category/uncategorized/`, `/category/:slug` | `/` |
| `/sitemap_index.xml` | `/sitemap.xml` |

`/hello-world/` and the category archive were the default WordPress sample post and its
empty category. They have no equivalent page here, so they redirect home rather than 404.

## SEO / AEO / GEO

- Per-page title, description, canonical, Open Graph and Twitter card via the Metadata API.
  All 11 pages have unique titles and descriptions.
- JSON-LD: `Organization` + `WebSite` site-wide; `BreadcrumbList` on every inner page;
  `Product` on the HAMAT pages and the insulation page; `ItemList` for product divisions,
  implant categories and tooling components; `ContactPage` + `LocalBusiness` on contact;
  `AboutPage` on about.
- `/robots.txt`, `/sitemap.xml` and `/llms.txt` are all served.
- Structured data asserts only facts that appear on the visible pages. No invented awards,
  ratings, reviews or prices.

## Known issues inherited from the existing site

These were found during the audit and are **reproduced as-is** rather than silently fixed,
except where noted.

1. **`/products/` is placeholder content.** The live page still contains the original
   WordPress theme's car-rental demo copy ("Our Cars", "911 Carrera GTS", "$50/day",
   lorem ipsum). It is reproduced verbatim at its existing URL, but served with
   `noindex, follow` and excluded from the sitemap so the placeholder text does not
   enter search results. Removing `robots` in
   [`src/app/products/page.tsx`](src/app/products/page.tsx) re-enables indexing.

2. **The HAMAT pages carry theme residue.** Below the genuine product specification, each
   page shows a sidebar with placeholder contact details (`234 567 8912`,
   `Info@domain.com`), a car-rental service list, a lorem ipsum "Additional Information"
   block, and an "Explore Our Other Cars" listing. All reproduced verbatim.

3. **The medical implant gallery has car-rental captions.** Real implant photographs are
   labelled `$50 /day`, `Book`, `2024`, `BMW`, `2 Person`, `Manual`. Reproduced verbatim.

4. **Eight media files 404 on the origin server.** `car-showroom.webp`,
   `red-smart-car.png`, `Sedan-car-min.png`, `Sedan-Family-min.png`,
   `Car-transparent-1-min.png` and three `elementor/thumbs` files are referenced by the
   live pages but have been deleted from its media library, so they are broken there too.
   - The home page slot that used `car-showroom.webp` now uses
     `industrial-background-68344821a0cf5.webp`, another image already in AJ Fibertek's
     own library. This is the only image substitution in the project.
   - The rest render a neutral branded placeholder
     ([`ImagePlaceholder`](src/components/ui/ImagePlaceholder.tsx)) instead of a broken image.

5. **The hero background video is ~27 MB.** It is kept, but never blocks rendering: a
   poster image paints first and the video attaches after `load`, only on screens ≥1024px,
   and never under reduced-motion or data-saver. Re-encoding it would materially improve
   mobile performance.

6. **Duplicate industry lists.** On the home page, the "Automotive" and "Non-Automotive"
   columns contain identical bullet text on the live site. Reproduced as-is.

7. **The contact form has no backend.** The original posts to a WordPress Metform
   endpoint. This build opens the visitor's mail client instead. Point the handler in
   [`src/components/sections/ContactForm.tsx`](src/components/sections/ContactForm.tsx)
   at a real endpoint before launch.

8. **Privacy Policy and Terms & Conditions** link to `#` on the live site. Unchanged.

## Deliberate changes

Everything here is presentation or plumbing. No page copy was altered.

- **The four HAMAT pages are now in the menu.** They exist on the live site and are in its
  sitemap, but nothing links to them. They now sit under
  Divisions and Products → Thermal & Acoustic Insulation, and each product on the
  insulation page links through to its detail page.
- **`car-showroom.webp` was substituted** — see note 4 above.
- **Contrast was raised on muted text.** Body-muted copy uses a solid `--color-muted`
  token instead of an opacity of the ink colour, so every text/background pair clears
  WCAG AA. The words are unchanged.
- **Visible labels were added to the contact form fields.** The original relies on
  placeholders alone, which screen readers do not treat as labels. The label text is the
  form's own placeholder text.
- **Process step numbers moved into the timeline markers.** "01. Raw Material Receipt"
  renders as a numbered marker plus the step name, so the number is not printed twice.
  The full string is still in the accessible name.

## Verification performed

| Check | Result |
| --- | --- |
| Content parity vs live site | 545 / 545 text assertions present across 11 pages |
| Production build | passes |
| TypeScript | no errors |
| ESLint | no errors or warnings |
| Internal links | 0 broken |
| Assets | 846 requests, 0 broken |
| Headings | exactly one `<h1>` per page |
| Metadata | 11 unique titles, 11 unique descriptions |
| Responsive | 12 routes × 9 widths (320 → 1920px), no horizontal overflow |
| Accessibility | axe-core WCAG 2.1 A/AA, no violations |
| Mobile menu | 12 behavioural checks (open, nested menus, Escape, backdrop, navigation) |
| JSON-LD | 31 blocks, all valid JSON |
| Redirects | legacy WordPress URLs and missing trailing slashes 308 correctly |

## Before deploying

- Set the production domain in `SITE_URL` ([`src/data/site.ts`](src/data/site.ts)) if it
  ever differs from `https://ajfibertek.co.in`.
- Wire the contact form to a real endpoint.
- Re-encode the hero and about videos (see note 5).
- Decide whether `/products/` should keep the placeholder content (see note 1).
