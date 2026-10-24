# BMGK.tech

Landing page for **BMGK.tech** - PLC software and industrial automation. Built with Next.js, React, TypeScript and Chakra UI. The page is fully bilingual (English / Polish), includes a downloads section for **VASS6 PLC Creator** and **TIA Project Importer**, and has a contact form backed by Mailjet.

## Tech stack

- Next.js 16 (Pages Router) + React 19
- TypeScript 7
- Chakra UI 3 with a custom theme (`src/theme.ts`, `createSystem`)
- next-i18next 16 on top of Next.js built-in i18n (`/en`, `/pl`)
- node-mailjet 6 for the contact form (`pages/api/contact.ts`)

## Requirements

- **Node.js 22** (see `.nvmrc`). Next.js 16 requires Node.js `>=20.9.0`. Use `nvm use` (or `fnm use`) before installing and running scripts.
- npm 10+

## Getting started

```bash
nvm use          # picks Node 22 from .nvmrc
npm install
cp .env.example .env.local
npm run dev
```

The site is available at [http://localhost:3000](http://localhost:3000) (English, also at `/en`) and [http://localhost:3000/pl](http://localhost:3000/pl) (Polish). The language switcher keeps the current section and path.

## Environment variables

The contact form needs Mailjet credentials. Copy `.env.example` to `.env.local` and fill in:

| Variable | Required | Description |
| --- | --- | --- |
| `API_KEY_EMAIL_1` | yes | Mailjet API key |
| `API_KEY_EMAIL_2` | yes | Mailjet API secret |
| `CONTACT_FROM_EMAIL` | no | Verified sender, defaults to `noreply@bmgk.tech` |
| `CONTACT_TO_EMAIL` | no | Recipient, defaults to `mariusz.kaleta@bmgk.tech` |

Without credentials the API responds with `500`, and the form shows an error toast.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run typecheck` | Run TypeScript without emitting files |

## Project structure

```
pages/
  _app.tsx            Chakra provider, global styles, i18n, toaster
  _document.tsx       <html lang>, fonts, theme color
  index.tsx           Page composition, SEO meta and static i18n props
  api/contact.ts      Contact form endpoint (Mailjet)
src/
  components/         Reusable UI (Reveal, ContactForm, LanguageSelect, ...)
  sections/           Page sections (Hero, AboutUs, Services, CustomSolutions, Downloads, ...)
  utils/hooks/        Scroll spy, carousel, reduced-motion helpers
  theme.ts            Chakra 3 system (brand green / accent purple)
public/
  static/locales/     en/common.json, pl/common.json - all copy
  svg/, img/          Illustrations and logos
styles.css            Global CSS (smooth scroll, reveal animation)
next-i18next.config.js  i18n locales and translation file paths
next.config.js        Next.js config (built-in i18n)
```

## Editing content

All visible text is translated in `public/static/locales/en/common.json` and `public/static/locales/pl/common.json`. Keep both files in sync - the TypeScript code accesses keys through `t()` and missing keys fall back to the key name.

The downloads section lives in `src/sections/Downloads.tsx`. VASS6 PLC Creator links to the live online app; the TIA Project Importer installer is shown as “coming soon” until a download URL is added.

The custom generators and AI premium message lives in `src/sections/CustomSolutions.tsx`. AI-assisted generation is explicitly marked as a premium feature in development; update the badge and copy when it becomes available.

Both calls to action in that section pre-fill the contact form via `src/utils/contactPrefill.ts`, so inquiries arrive already labeled as a custom generator or an AI early-access request. The matching template text is stored under `Custom card1 prefill` / `Custom card2 prefill` in the locale files.

## Deployment

`npm run build && npm start` requires a Node.js host (the contact form uses an API route, so a static export is not enough). Make sure the Node version on the server is 22 (Next.js 16 requires `>=20.9.0`) and the Mailjet variables are configured.
