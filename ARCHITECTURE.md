# Architecture

## Goal

Build `jmtrs.uk` as a fast static site that presents José Miguel Torres Hernández as a senior software engineer with a clear positioning across product engineering, secure delivery, and practical AI enablement.

## Technical decisions

- Framework: Astro with static output
- Language: TypeScript
- Styling: project-owned CSS with design tokens
- Fonts: Geist Mono for display, Manrope for body copy
- Deployment: Cloudflare Pages
- Content source: versioned localized TypeScript objects

## Public interfaces

### Routes

- `/`
  - lightweight resolver page
  - reads stored locale preference from `localStorage`
  - redirects to `/en` by default when no preference exists
- `/en`
  - English homepage
- `/es`
  - Spanish homepage

### User controls

- Theme switcher
  - dark mode by default
  - persists in `localStorage`
  - initializes in `<head>` to avoid theme flash
- Language switcher
  - toggles between `/en` and `/es`
  - persists the chosen locale

### Downloadable assets

- `/cv/jose-miguel-torres-hernandez-cv-en.pdf`
- `/cv/jose-miguel-torres-hernandez-cv-es.pdf`

## Content architecture

Each locale provides the same semantic structure:

1. Hero
2. About
3. Selected experience
4. Key projects
5. Technical strengths
6. Working style
7. Contact and downloads

The source of truth lives in `src/content/site.ts`.

## Rendering model

- Single localized route template generates `/en` and `/es`
- Shared `BaseLayout.astro` injects metadata, structured data, theme bootstrap, and UI scripts
- The site remains fully static and does not depend on a CMS or server runtime

## Accessibility and motion

- semantic landmark structure
- keyboard-accessible skip link
- clear focus states
- reduced motion fallback through `prefers-reduced-motion`
- both themes designed to preserve contrast

## Tradeoffs

- The root locale resolver is client-side because the site is static and must remember user preference without server logic
- The website uses structured content instead of markdown collections because v1 has one canonical page shape per locale and benefits from typed data
