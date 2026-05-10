# Project Plan — jmtrs.uk

## Phase 0 — Foundation

- [x] Create a dedicated repository workspace at `jmtrs.uk`
- [x] Define the project stack and deployment target
- [x] Add decision-complete project documentation
- [x] Initialize Git inside the new repo

## Phase 1 — Architecture and content model

- [x] Lock canonical locale routes to `/en` and `/es`
- [x] Define the root locale resolver behavior
- [x] Define theme persistence with dark mode as default
- [x] Establish the content source of truth from the current EN/ES CV files
- [x] Define the v1 section map for the website

## Phase 2 — Site implementation

- [x] Scaffold Astro + TypeScript project structure
- [x] Implement global layout, metadata, and JSON-LD
- [x] Implement localized homepage rendering
- [x] Implement language switcher and theme toggle
- [x] Build responsive editorial UI with dark and light themes
- [x] Add downloadable CV PDF assets

## Phase 3 — Delivery and quality

- [x] Add `robots.txt`, sitemap support, security headers, and web manifest
- [x] Add GitHub Actions CI for `lint`, `typecheck`, and `build`
- [x] Install dependencies
- [x] Run `pnpm lint`
- [x] Run `pnpm typecheck`
- [x] Run `pnpm build`
- [x] Validate the UI locally in a browser

## Phase 4 — Publishing

- [ ] Create the remote GitHub repository
- [ ] Push the initial codebase
- [ ] Connect the repository to Cloudflare Pages
- [ ] Attach `jmtrs.uk` as the production domain
- [ ] Validate production SEO and locale routing
