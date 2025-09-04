# Repository Guidelines

## Project Structure & Module Organization

- Source: `src/` (SvelteKit).
    - UI: `src/lib/components/{atoms,molecules,organisms,templates,pages}/`
    - State machines: `src/lib/machines/`
    - Types/Models: `src/lib/models/`
    - App shell/routes for local dev: `src/routes/`
- Storybook: `.storybook/` (config), stories live next to components as `*.stories.svelte`.
- Static assets: `static/`
- CI/Release: `.github/workflows/`

## Build, Test, and Development Commands

- `pnpm storybook`: Run Storybook on port 6006.
- `pnpm build-storybook`: Produce static Storybook at `storybook-static/`.
- `pnpm test:unit`: Run unit tests (Vitest).
- `pnpm check`: Type-check (svelte-check + TS).
- `pnpm lint` / `pnpm format`: ESLint/Prettier.

## Coding Style & Naming Conventions

- Language: TypeScript + Svelte 5, Tailwind CSS v4.
- Style: Prettier (project config), ESLint v9 (flat) with Svelte rules.
- Components:Use atomic design. PascalCase filenames (`Button.svelte`), stories `Button.stories.svelte`.
- Keep props typed; prefer explicit keys in `{#each}` blocks.

## Testing Guidelines

- Framework: Vitest; XState models tested via `@xstate/graph`.
- Location: `*.spec.ts` alongside related modules.
- Run locally: `pnpm test:unit`; ensure `pnpm check` passes before PR.

## Commit & Pull Request Guidelines

- Conventional Commits (enforced): `feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, etc.
    - Example: `feat(atoms): add Button loading state`
- Hooks: enable once with `git config core.hookspath .githooks`.
    - `commit-msg` runs commitlint; `pre-commit` formats; `pre-push` runs install+lint+check.
- PRs: title must be semantic; include purpose, screenshots for UI, and linked issues.
- CI must pass (lint, type-check, build Storybook).

## Release & CI

- Releases are automated via semantic-release on `main` (tags `vX.Y.Z`, changelog, GitHub Release, publish to GitHub Packages).
- Storybook is deployed to GitHub Pages from `main`.

## Security & Configuration Tips

- Use Node LTS (`corepack enable && corepack prepare pnpm@8.6.12 --activate`).
- Do not commit secrets; tokens are managed via GitHub/1Password in workflows.
