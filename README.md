# Asha

[![Storybook](https://img.shields.io/badge/storybook-live-ff4785?logo=storybook&logoColor=white)](https://njingabv.github.io/asha/)
[![Deploy Storybook](https://github.com/NjingaBV/asha/actions/workflows/deploy-storybook.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/deploy-storybook.yml)
[![CI](https://github.com/NjingaBV/asha/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/ci.yml)
[![Release](https://github.com/NjingaBV/asha/actions/workflows/create-release-and-tag.yml/badge.svg?branch=main)](https://github.com/NjingaBV/asha/actions/workflows/create-release-and-tag.yml)

[Contributor Guide](./AGENTS.md)

Asha is a library for creating and sharing interactive application. It's built with [SvelteKit](https://kit.svelte.dev/), [Svelte](https://svelte.dev/), [TailwindCSS](https://tailwindcss.com/) and [XState](https://xstate.js.org).
Asha means "The Life" in Swahili . It's also the name of my daughter.

• Live Storybook: https://njingabv.github.io/asha/

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
