# Change: Fix Accessibility and API Consistency Issues

## Why

Code analysis revealed critical WCAG 2.5.5 violations and API inconsistencies:

1. **Touch Target Violations**: Button sm (32px) and Input sm/md (32px/40px) are below the WCAG 2.5.5 minimum of 44px
2. **API Inconsistency**: Badge uses `size='base'` instead of standard `'md'`
3. **Token Violations**: Badge uses hardcoded `text-white` instead of design tokens

These issues affect accessibility compliance and design system consistency.

## What Changes

### CRITICAL (WCAG Compliance)

- Fix Button sm size: `h-8` (32px) → `h-11` (44px)
- Fix Input sm size: `h-8` (32px) → `h-11` (44px)
- Fix Input md size: `h-10` (40px) → `h-11` (44px)

### API Standardization

- Badge size prop: Rename `'base'` → `'md'` to match Button/Input pattern
- Badge type: Update `BadgeSize = 'sm' | 'md' | 'lg'`

### Design Token Compliance

- Badge: Replace `text-white` with `text-fg-on-accent` token
- Badge: Ensure all colors use design system tokens

## Impact

- **Affected specs**: accessibility, component-api
- **Affected code**:
    - `src/lib/components/atoms/button.svelte` (line 226)
    - `src/lib/components/atoms/input.svelte` (lines 266-269)
    - `src/lib/components/atoms/badge.svelte` (lines 16, 90-113)
- **Breaking changes**:
    - **BREAKING**: Badge `size="base"` must be changed to `size="md"` (affects consumers)
- **Migration**: Simple find/replace in consuming code
