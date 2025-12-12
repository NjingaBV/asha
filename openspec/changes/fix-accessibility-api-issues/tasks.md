# Implementation Tasks

## 1. WCAG Touch Target Fixes (CRITICAL)

- [ ] 1.1 Fix Button sm size (button.svelte:226)
    - Change `h-8 min-h-11` to `h-11 min-h-touch`
    - Verify visual appearance in Storybook
    - Update Button.stories.ts if needed

- [ ] 1.2 Fix Input sm size (input.svelte:266)
    - Change `h-8 min-h-11` to `h-11 min-h-touch`
    - Ensure consistency with Button height

- [ ] 1.3 Fix Input md size (input.svelte:268)
    - Change `h-10` to `h-11`
    - Verify form alignment

## 2. Badge API Standardization (BREAKING)

- [ ] 2.1 Update Badge type definition (badge.svelte:16)
    - Change `BadgeSize = 'sm' | 'base' | 'lg'` to `'sm' | 'md' | 'lg'`

- [ ] 2.2 Update Badge default value (badge.svelte:72)
    - Change `size = 'base'` to `size = 'md'`

- [ ] 2.3 Update Badge size classes (badge.svelte:117-123)
    - Change condition from `size === 'base'` to `size === 'md'`

- [ ] 2.4 Update Badge propDefs (badge.svelte:53-57)
    - Change options array to `['sm', 'md', 'lg']`
    - Change default to `'md'`

## 3. Badge Design Token Compliance

- [ ] 3.1 Replace hardcoded colors (badge.svelte:90-113)
    - Replace all `text-white` with `text-fg-on-accent`
    - Verify color contrast in all variants

## 4. Testing & Validation

- [ ] 4.1 Test Button in Storybook
    - Verify all sizes render correctly
    - Check touch target sizes in responsive view
    - Verify accessibility with axe-core

- [ ] 4.2 Test Input in Storybook
    - Verify all sizes render correctly
    - Check alignment with Button heights
    - Test form field integration

- [ ] 4.3 Test Badge in Storybook
    - Update stories to use `size="md"`
    - Verify all tone/variant combinations
    - Check color contrast

- [ ] 4.4 Run accessibility audit
    - `pnpm test:a11y` (if available)
    - Manual touch target verification
    - Screen reader testing

## 5. Documentation

- [ ] 5.1 Update MIGRATION_GUIDE.md
    - Document Badge size prop breaking change
    - Provide migration example

- [ ] 5.2 Update component docs
    - Ensure propDefs are complete
    - Add JSDoc examples

## 6. Update Consuming Code

- [ ] 6.1 Find all Badge usages
    - Search: `size="base"`
    - Replace with: `size="md"`

- [ ] 6.2 Verify stories
    - Badge.stories.ts
    - Any other stories using Badge

## 7. Validation

- [ ] 7.1 Run lint and type checks
    - `pnpm lint`
    - `pnpm check`

- [ ] 7.2 Build Storybook
    - `pnpm build-storybook`
    - Verify no errors

- [ ] 7.3 Validate with OpenSpec
    - `openspec validate fix-accessibility-api-issues --strict`
