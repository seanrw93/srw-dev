# srw-dev

Portfolio and services site for Sean Roennau-Wergen, freelance web developer based in Puteaux, Île-de-France.

## Stack

- **Vite** + **React 18** + **TypeScript** (strict mode)
- **React Router v7** for client-side routing
- **react-icons** for UI icons
- Custom CSS with atomic file structure — no CSS framework
- **Web3Forms** for contact form submissions

## Project structure

```
src/
├── components/
│   ├── layout/         # Navbar, Footer, ServicePage (layout route)
│   ├── sections/       # Homepage sections (Hero, Services, About, Contact…)
│   └── ui/             # Reusable primitives (Reveal, Accordion, ScrollToTop)
├── pages/
│   ├── services/       # One page per service (lazy-loaded)
│   ├── HomePage.tsx
│   ├── FaqPage.tsx
│   └── NotFound.tsx
├── styles/
│   ├── index.css       # Barrel — @import only
│   ├── tokens/         # CSS custom properties
│   ├── base/           # Reset, scrollbar
│   ├── components/     # Reveal, buttons, accordion, process steps
│   ├── layout/         # Nav, sections, footer
│   ├── sections/       # Per-section styles
│   └── responsive.css  # All media queries
└── main.tsx
```

## Routes

| Path | Page |
|------|------|
| `/` | Homepage |
| `/services/creation-site-web` | Création de sites web |
| `/services/boutique-en-ligne` | Boutique en ligne |
| `/services/performance-vitesse` | Performance & vitesse |
| `/services/seo-technique` | SEO technique |
| `/services/maintenance-support` | Maintenance & support |
| `/faq` | Questions fréquentes |

Service pages and the FAQ are lazy-loaded via `React.lazy` with a dark fallback screen.

## Getting started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # TypeScript check + Vite bundle
npm run preview # Preview the production build locally
```

## Images

Service card and page images live in `public/images/services/` as WebP files. To convert source images, use the `sharp` dev dependency:

```js
import sharp from 'sharp'
await sharp('input.jpg').webp({ quality: 82 }).toFile('output.webp')
```

## Contact form

The form posts to [Web3Forms](https://web3forms.com). Replace the `access_key` value in `src/components/sections/Contact.tsx` with your own key before deploying.
