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

### Automated CI Pipeline

The project uses a comprehensive CI/CD pipeline with the following workflows:

**CI Workflow** (`.github/workflows/ci.yml`):

- Runs on every push to `main` and on all pull requests
- Parallel jobs for: commitlint (PR only), lint, typecheck, test, build-package, build-storybook
- Uses Playwright for browser-based tests
- Includes concurrency controls to cancel outdated runs

**Security Scanning** (`.github/workflows/codeql.yml`):

- CodeQL analysis for JavaScript/TypeScript
- Runs on pushes, pull requests, and weekly schedule
- Detects security vulnerabilities and code quality issues

**Dependency Management** (`.github/dependabot.yml`):

- Automated dependency updates grouped by type (dev, production, framework)
- Weekly schedule on Mondays at 09:00 CET
- Groups updates for Storybook, Svelte, TypeScript, Vitest, Tailwind, and XState

**Release & Deployment**:

- Releases are automated via semantic-release on `main` (tags `vX.Y.Z`, changelog, GitHub Release, publish to GitHub Packages)
- Storybook is deployed to GitHub Pages from `main`
- Semantic PR titles are enforced via GitHub Actions

### Running CI Locally

Before pushing, ensure your changes pass all checks:

```bash
pnpm run lint      # Prettier & ESLint
pnpm run check     # TypeScript type checking
pnpm run test:unit -- --run  # Unit tests (requires Playwright browsers)
pnpm run build     # Build the package
pnpm run build-storybook  # Build Storybook
```

## Security & Configuration Tips

- Use Node LTS (`corepack enable && corepack prepare pnpm@8.6.12 --activate`).
- Do not commit secrets; tokens are managed via GitHub/1Password in workflows.
- CodeQL scans run automatically on PRs and weekly to detect security vulnerabilities.
- Dependabot creates automated PRs for dependency updates with grouped changes.
