# CLAUDE.md

This file is the repository entrypoint for Claude Code. Shared operating guidance lives in `AI_AGENTS.md`, but the rules below are the minimum required context for safe work in this repo.

## Critical Rules

- Prefer `rtk <command>` for shell commands when `rtk` is available in the environment. If it is not available, run the raw command.
- Default validation is `pnpm typecheck` plus targeted Prettier checks on touched docs or config files.
- Do not use `pnpm build` as a routine check. It can install or use Playwright Chromium and regenerates committed PDFs in `public/cv/`.
- Treat `public/cv/*.pdf` as generated artifacts. Only update them when intentionally validating or regenerating CV output.
- Keep `src/content/en.ts` and `src/content/es.ts` structurally identical. Update `src/content/types.ts` first when the shape changes.
- Shared workflow enforcement lives in versioned repo scripts, `.githooks/`, and CI, not in Claude-specific hooks.

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

## Claude-Specific Notes

- Shared Claude project settings live in `.claude/settings.json` only as an adapter for Claude-specific capabilities.
- Personal Claude overrides belong in `.claude/settings.local.json` and should stay untracked.

See `AI_AGENTS.md` for the shared workflow, architecture summary, and the Claude/Codex compatibility conventions used in this repository.
