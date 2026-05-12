# AI Agents

Shared operating guide for AI coding agents working in this repository.

## Workflow

- Prefer `rtk <command>` for shell commands when `rtk` is available in the environment. If it is not available, run the raw command.
- Default validation is `pnpm typecheck` plus targeted Prettier checks on touched docs or config files.
- Do not use `pnpm build` as a routine check. It can install or use Playwright Chromium and regenerates committed PDFs in `public/cv/`.
- Treat `public/cv/*.pdf` as generated artifacts. Only update them when intentionally validating or regenerating CV output.
- No dedicated test suite exists. Formatting and type checking are the main quality gates.
- Shared guardrails must live in versioned repo automation such as `package.json` scripts, `.githooks/`, and CI. Do not rely on provider-specific AI hooks as the source of truth.

## Commands

```bash
pnpm dev          # Dev server at http://127.0.0.1:4321
pnpm build        # Full production build; regenerates SEO artifacts and CV PDFs
pnpm hooks:install # Configure this clone to use the repo's shared git hooks
pnpm lint         # Prettier check across the repo
pnpm format       # Prettier write
pnpm typecheck    # astro check
pnpm validate:staged # Pre-commit validation for staged files only
pnpm validate:push # Pre-push validation
pnpm preview      # Preview the production build
```

## Build Caveat

`pnpm build` runs these steps in sequence:

1. `node scripts/ensure-playwright-browser.mjs`
2. `astro build`
3. `node scripts/inline-css.mjs`
4. `node scripts/generate-seo-artifacts.mjs`
5. `node scripts/generate-cv-pdfs.mjs`

Step 5 writes PDFs to both `dist/cv/` and `public/cv/`. Because the files in `public/cv/` are committed, routine validation should stop at `pnpm typecheck` and targeted formatting checks unless the task explicitly requires build output verification.

## Architecture Snapshot

- Astro + TypeScript static site, deployed to Cloudflare Pages.
- Localized routes live at `/en` and `/es`.
- Print-oriented CV routes live at `/cv/en` and `/cv/es`.
- Shared page shell is in `src/layouts/BaseLayout.astro`.
- Home page content comes from `src/content/en.ts` and `src/content/es.ts`.

## Content Rules

- Keep `src/content/en.ts` and `src/content/es.ts` structurally identical.
- When content shape changes, update `src/content/types.ts` first, then both locale files.
- CV PDFs in `public/cv/` are generated from `src/pages/cv/[locale].astro`; do not hand-edit the PDFs.

## Shared Git Hooks

- `.githooks/pre-commit` runs `pnpm validate:staged`.
- `.githooks/pre-push` runs `pnpm validate:push`.
- `pnpm hooks:install` and `pnpm prepare` configure `core.hooksPath=.githooks` for the local clone.

## Claude Project Settings

- Shared Claude project settings live in `.claude/settings.json` only as an adapter for Claude-specific capabilities.
- Personal Claude overrides belong in `.claude/settings.local.json` and should stay untracked.
