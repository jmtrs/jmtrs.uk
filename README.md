# jmtrs.uk

Bilingual personal site for `https://jmtrs.uk`, built as a content-driven Astro project and deployed to Cloudflare Pages.

The v1 site is intentionally not a PDF CV replica. It turns the existing EN/ES resume into a modern personal website with:

- explicit locale routes at `/en` and `/es`
- dark mode by default and a complete light theme
- responsive editorial layout inspired by the GitHub Copilot rollout deck
- accessible motion, strong SEO foundations, and downloadable CV PDFs

## Stack

- Astro + TypeScript
- Localized content in versioned TypeScript files
- CSS design tokens and handcrafted responsive layout
- Cloudflare Pages static deployment

## Local development

```bash
pnpm install
pnpm dev
```

The app runs locally at `http://localhost:4321`.

## Commands

```bash
pnpm lint
pnpm typecheck
pnpm build
pnpm preview
```

## Project documents

- `PLAN.md`: living project checklist
- `ARCHITECTURE.md`: technical decisions and public interfaces
- `CONTENT_MODEL.md`: content structure and localization source of truth
- `DESIGN_SYSTEM.md`: visual tokens, layout, and motion rules
- `DEPLOYMENT.md`: GitHub and Cloudflare Pages setup
- `SEO.md`: metadata, canonical strategy, and indexing rules

## Structure

```text
.
├── public/
│   ├── cv/
│   ├── favicon.svg
│   ├── social-preview.svg
│   ├── robots.txt
│   └── _headers
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── .github/workflows/ci.yml
└── *.md
```

## Deployment summary

- GitHub hosts the source repository and pull requests
- Cloudflare Pages builds the site from the default branch
- Production domain: `https://jmtrs.uk`
- Canonical locale routes: `https://jmtrs.uk/en` and `https://jmtrs.uk/es`
