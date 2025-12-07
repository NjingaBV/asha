<!-- OPENSPEC:START -->

# OpenSpec Instructions

These instructions are for AI assistants working in this project.

Always open `@/openspec/AGENTS.md` when the request:

- Mentions planning or proposals (words like proposal, spec, change, plan)
- Introduces new capabilities, breaking changes, architecture shifts, or big performance/security work
- Sounds ambiguous and you need the authoritative spec before coding

Use `@/openspec/AGENTS.md` to learn:

- How to create and apply change proposals
- Spec format and conventions
- Project structure and guidelines

Keep this managed block so 'openspec update' can refresh the instructions.

<!-- OPENSPEC:END -->

# AGENTS.md - Coding Guidelines for Asha

## Build/Test Commands

- **Build**: `pnpm build` (package) or `pnpm package`
- **Lint**: `pnpm lint` (prettier + eslint)
- **Type Check**: `pnpm check` (svelte-check)
- **Format**: `pnpm format` (prettier)
- **Test All**: `pnpm test:unit` (vitest)
- **Single Test**: `pnpm test:unit -- Button.test.ts` (run specific test file)
- **Storybook**: `pnpm storybook` (dev) or `pnpm build-storybook`

## Code Style Guidelines

### Imports & Structure

- Use `$lib/` for internal component imports
- Use `@/` alias for src directory
- Group imports: external libs, then internal components/types
- Export types explicitly from component files

### Formatting (Prettier)

- Use tabs (not spaces)
- Single quotes for strings
- No trailing commas
- Print width: 100 characters
- Svelte files use prettier-plugin-svelte

### TypeScript

- Strict typing enabled
- Define interfaces for component props
- Export component types for consumers
- Use `satisfies` for type assertions
- Allow `any` type (eslint override)

### Naming Conventions

- **Components**: PascalCase (Button, Card, HeroSection)
- **Files**: kebab-case (button.svelte, hero-section.svelte)
- **Props/Functions**: camelCase (variant, onClick, getSizeClasses)
- **Types**: PascalCase with descriptive names (ButtonVariant, CardProps)

### Svelte 5 Patterns

- Use `$props()` for component props
- Use `$state()` for reactive state
- Use `$derived()` for computed values
- JSDoc comments for component documentation
- Component interactions use XState machines (useMachine, createActor, useActor)
- Atomic Design: atoms → molecules → organisms → templates → pages

### Error Handling

- Use try/catch for async operations
- Validate props at runtime when necessary
- Log errors appropriately (console.error for dev)

### Testing

- Vitest + @testing-library/svelte
- Test structure: describe/it blocks with clear descriptions
- Cover: rendering, interactions, accessibility, variants
- No test files exist yet - create `Component.test.ts` alongside components

### Commits

- Conventional commits: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Scopes: atoms, molecules, organisms, etc.

## AI Agent Instructions

- Always run `pnpm lint` and `pnpm check` after changes
- Follow Atomic Design principles
- Create tests for new components
- Use Tailwind CSS classes over custom CSS
- Ensure accessibility (ARIA labels, keyboard navigation)
