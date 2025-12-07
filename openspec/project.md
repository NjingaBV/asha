# Project Context

## Purpose

Asha is a design system and component library for building Apple-inspired product marketing pages. It provides a comprehensive set of reusable UI components following Atomic Design principles (atoms, molecules, organisms, templates, pages) with built-in accessibility, theming, and state management.

## Tech Stack

- **Framework**: SvelteKit 2.x with Svelte 5 (runes: `$props()`, `$state()`, `$derived()`)
- **Styling**: Tailwind CSS 3.x with CSS custom properties for design tokens
- **State Management**: XState 5.x for complex component interactions
- **Build**: Vite, TypeScript (strict mode)
- **Testing**: Vitest + @testing-library/svelte
- **Documentation**: Storybook 8.x

## Project Conventions

### Code Style

- Use tabs (not spaces), single quotes, no trailing commas
- Print width: 100 characters
- Svelte files use prettier-plugin-svelte
- Component names: PascalCase (Button, HeroSection)
- Files: kebab-case for general, PascalCase.svelte for components
- Props/functions: camelCase

### Architecture Patterns

- **Atomic Design**: atoms -> molecules -> organisms -> templates -> pages
- **Design Tokens**: CSS custom properties with `--ds-` prefix
- **State Machines**: XState for interactive components (Button, Modal, Tabs, Input)
- **Slots**: Use Svelte 5 Snippets for composition

### Testing Strategy

- Unit tests alongside components: `Component.test.ts`
- Integration tests for XState machines: `machine.spec.ts`
- Accessibility tests with @testing-library/svelte
- Visual regression via Storybook

### Git Workflow

- Conventional commits: `type(scope): description`
- Types: feat, fix, docs, style, refactor, test, chore
- Scopes: atoms, molecules, organisms, tokens, machines

## Domain Context

### Design Tokens

Tokens follow the pattern: `--ds-{category}-{property}[-{variant}][-{state}]`

- Categories: color, space, font, radius, shadow, z, duration, ease
- Themes: light (default), dark (via `[data-theme="dark"]` or `@media prefers-color-scheme`)

### Component States

Standard interactive states managed by XState:

- idle, hovered, focused, pressed, loading, disabled
- Modal: closed, opening, open, closing
- Tabs: context-driven with roving tabindex

### Accessibility Requirements

- WCAG 2.2 AA compliance
- Minimum touch targets: 44x44px
- Focus visible on all interactive elements
- Full keyboard navigation
- Screen reader support with proper ARIA

## Important Constraints

- Zero regression on accessibility
- Preserve branding consistency
- Support both light and dark themes
- SSR-safe (no window/document in module scope)
- Tree-shakeable exports

## External Dependencies

- **Tailwind CSS**: Utility-first styling integrated with design tokens
- **XState**: State machines for complex interactions
- **Storybook**: Component documentation and visual testing
