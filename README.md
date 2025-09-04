# Asha — Svelte Component Library

[![Storybook](https://img.shields.io/badge/storybook-live-ff4785?logo=storybook&logoColor=white)](https://njingabv.github.io/asha/)
[![Deploy Storybook](https://github.com/NjingaBV/asha/actions/workflows/deploy-storybook.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/deploy-storybook.yml)
[![CI](https://github.com/NjingaBV/asha/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/ci.yml)
[![Release](https://github.com/NjingaBV/asha/actions/workflows/create-release-and-tag.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/create-release-and-tag.yml)

[Contributor Guide](./AGENTS.md)

Overview

Asha is a reusable UI component library for Svelte/SvelteKit. It provides typed, composable components (atoms → molecules → organisms → templates) styled with Tailwind CSS and documented in Storybook. State-rich parts use XState for predictable behavior.

- Live Storybook: https://njingabv.github.io/asha/
- Tech: Svelte 5, SvelteKit, Tailwind v4, XState, Storybook

Install

This package is published to GitHub Packages under `@njingabv/asha`.

```bash
pnpm add @njingabv/asha
# ensure your project is authenticated to GitHub Packages
```

Usage (Quick Start)

```svelte
<!-- Example.svelte -->
<script lang="ts">
  import { Button } from '@njingabv/asha';
  // styles
  import '@njingabv/asha/dist/asha.css';
</script>

<Button color="#6c00e2" size="large">Get Started</Button>
```

Component Organization

- Atoms: low-level primitives (Button, Linkable, Youtube, PathLine, Hamburger)
- Molecules: combined atoms (Card, Tile, Hero, Player, Nav, Blob)
- Organisms: sections (Header, Footer, Features, Carousel, Slogan, TextAnimation, AnimatedBlob, HeroTile)
- Templates/Pages: page-level assembly (Shelf, Home)

## Features

## Contributing

See the Contributor Guide in AGENTS.md for repository structure, commands, coding style, tests, and CI/release details.

- Read: [AGENTS.md](./AGENTS.md)
- Before PRs: run `pnpm lint` and `pnpm check`
- Use Conventional Commits for messages and semantic PR titles

## Githooks

To use the git hooks in the repo, which will save you waiting for CI to tell you that you forgot to lint, run this:

```bash
git config core.hookspath .githooks
```

## Conventional Commits

- Format: `<type>(<scope>): <subject>`
- Types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `build`, `ci`.
- Breaking change: ajouter `!` après le type/scope ou un paragraphe `BREAKING CHANGE:` dans le corps.
- Scopes suggérés: `atoms`, `molecules`, `organisms`, `templates`, `pages`, `machines`, `storybook`, `build`.

Exemples

- `feat(atoms): add Button loading state`
- `fix(machines): prevent player deadlock on END`
- `docs: link live Storybook`
- `refactor!: drop deprecated Hero prop\n\nBREAKING CHANGE: Hero no longer accepts 'detailsHtml'`

CI/Release

- Les commits conformes déclenchent la version via semantic-release (tag `vX.Y.Z`, changelog, GitHub Release, publication npm registry GitHub).
- Les messages sont vérifiés localement (`.githooks/commit-msg`) et sur PR (job commitlint).
