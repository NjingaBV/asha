# Change: Standardize Component API

## Why

The component library has inconsistent prop naming across components, making it harder for developers to learn and use. Key inconsistencies include:

- `className` vs `class` for custom CSS classes
- `badgeSize` vs `size` for size variants
- `color` vs `tone` for semantic color schemes
- Hardcoded Tailwind colors instead of design tokens

This creates cognitive overhead and makes components less predictable.

## What Changes

- **BREAKING**: Rename `className` to `class` in Link, Card, Label, Image, NavigationBar
- **BREAKING**: Rename `badgeSize` to `size` in Badge
- **BREAKING**: Rename `color` to `tone` in Badge, Label with semantic values
- Migrate hardcoded colors to design tokens in ~15 components
- Add `propDefs` exports for documentation

## Impact

- **Affected specs**: `component-api`
- **Affected components**:
    - Badge.svelte (rename badgeSize, color)
    - Link.svelte (rename className)
    - Card.svelte (rename className, migrate colors)
    - Label.svelte (rename className, color)
    - Image.svelte (rename className)
    - NavigationBar.svelte (rename className, migrate colors)
    - Hero.svelte (migrate colors)
    - Footer.svelte (migrate colors)
    - Header.svelte (migrate colors)
    - Feature.svelte, Eyebrow.svelte (migrate colors)
    - PromoBadge.svelte, SpecChip.svelte (migrate colors)
    - ColorPicker.svelte, Player.svelte (migrate colors)
    - ColorDot.svelte, Hamburger.svelte (migrate focus ring colors)
- **Breaking changes**: Yes - consumers using renamed props will need to update
- **Migration**: Provide codemod or search/replace instructions
