# Asha — Svelte Component Library

[![Storybook](https://img.shields.io/badge/storybook-live-ff4785?logo=storybook&logoColor=white)](https://njingabv.github.io/asha/)
[![Deploy Storybook](https://github.com/NjingaBV/asha/actions/workflows/deploy-storybook.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/deploy-storybook.yml)
[![CI](https://github.com/NjingaBV/asha/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/ci.yml)
[![CodeQL](https://github.com/NjingaBV/asha/actions/workflows/codeql.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/codeql.yml)
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

## Component Catalogue (Quick Reference)

Atoms

- Button: CTA with size/color; auto-contrasts text.
- Linkable: Styled anchor wrapper.
- Youtube: 16:9 player via Iframe API (prop: `videoId`).
- PathLine: SVG path line utility.
- Hamburger: Menu toggle icon.

Molecules

- Card: Image + title/subtitle/CTA; configurable colors.
- Tile: Vertical image tiles with parallax-like scroll.
- Hero: Media backdrop + title/overview + CTAs; gradient overlay.
- Player: Smart media player; detects YouTube URLs.
- Nav: Header/aside navigation; computed text color.
- Blob: Decorative colored blob.
- Logo: Brand logo/title block.
- Feature: Highlight with icon/text/details.
- CallToAction: One or more primary CTA buttons.

Organisms

- Header/Footer: Page chrome sections.
- Features: Section rendering a list of Feature items.
- Carousel: Horizontal cards slider; responsive widths.
- Slogan: Short slogans + CTA with background color.
- TextAnimation: Large animated headline sequence.
- AnimatedBlob: Row of Blob decorations.
- HeroTile: Hero section with tiled media.

Templates

- Shelf: Page template composing slices (sections) by name.

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

## CI/CD Pipelines

The project uses comprehensive GitHub Actions workflows that follow industry best practices:

### Continuous Integration (CI)

The CI pipeline runs on every push and pull request to `main`:

- **Linting**: Enforces code style with Prettier and ESLint
- **Type Checking**: Validates TypeScript types with svelte-check
- **Unit Tests**: Runs Vitest tests with Playwright browser support
- **Package Build**: Builds the library package to verify it compiles
- **Storybook Build**: Builds the Storybook documentation

Jobs run in parallel for faster feedback.

### Code Quality & Security

- **CodeQL Analysis**: Automated security scanning for vulnerabilities (runs on pushes, PRs, and weekly)
- **Dependabot**: Automated dependency updates with grouped PRs for easier review
- **Semantic PR Titles**: Enforces conventional commit format on PR titles
- **Commitlint**: Validates commit messages in PRs

### Release & Deployment

- **Semantic Release**: Automatically creates releases, tags, and changelogs based on commit messages
- **Storybook Deployment**: Deploys to GitHub Pages on every push to `main`
- **NPM Publishing**: Publishes to GitHub Packages when a release is created

### Les commits conformes déclenchent la version via semantic-release (tag `vX.Y.Z`, changelog, GitHub Release, publication npm registry GitHub).

Les messages sont vérifiés localement (`.githooks/commit-msg`) et sur PR (job commitlint).
