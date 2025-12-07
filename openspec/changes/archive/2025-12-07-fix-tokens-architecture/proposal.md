# Change: Fix Token Architecture in base.css

## Why

The design token system has a critical structural bug: typography, spacing, motion, and other non-theme-specific tokens are incorrectly nested inside the `[data-theme='dark']` block in `base.css`. This means these tokens are **only available in dark mode**, breaking light mode styling. Additionally, dark theme values are duplicated between `base.css` and `dark.css` with conflicting values.

## What Changes

- **Move tokens out of dark block**: Typography, spacing, radius, shadow, motion, z-index, opacity, border, and component tokens will be moved to `:root` selector
- **Remove duplicate dark theme**: Delete the inline `[data-theme='dark']` block from `base.css` (keep `dark.css` as single source of truth)
- **Add missing tokens**: Add `--ds-color-secondary-subtle`, `--ds-space-7/9/11/14` for completeness
- **Standardize values**: Reconcile any value differences between files

## Impact

- **Affected specs**: `design-tokens`
- **Affected files**:
    - `src/lib/design-system/tokens/base.css`
    - `src/lib/design-system/themes/dark.css`
    - `tailwind.config.ts` (if token references change)
- **Risk**: Low - fixes existing bug, no API changes
- **Breaking changes**: None expected; this restores intended behavior
