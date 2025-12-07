## 1. Audit and Preparation

- [x] 1.1 Document current state of base.css token structure
- [x] 1.2 Document current dark.css values
- [x] 1.3 Identify all value discrepancies between files
- [x] 1.4 Create backup of current files

## 2. Fix Token Placement

- [x] 2.1 Move typography tokens (font-size, font-weight, leading, tracking) to `:root`
- [x] 2.2 Move spacing tokens (space-\*) to `:root`
- [x] 2.3 Move radius tokens to `:root`
- [x] 2.4 Move shadow tokens (base values) to `:root`
- [x] 2.5 Move motion tokens (duration, ease) to `:root`
- [x] 2.6 Move z-index tokens to `:root`
- [x] 2.7 Move opacity tokens to `:root`
- [x] 2.8 Move border-width tokens to `:root`
- [x] 2.9 Move component tokens (button, input heights) to `:root`
- [x] 2.10 Move focus ring tokens to `:root`

## 3. Consolidate Dark Theme

- [x] 3.1 Remove duplicate `[data-theme='dark']` block from base.css
- [x] 3.2 Verify dark.css has all required dark theme overrides
- [x] 3.3 Ensure shadow tokens have dark variants in dark.css
- [x] 3.4 Verify overlay opacity values in dark.css

## 4. Add Missing Tokens

- [x] 4.1 Add `--ds-color-secondary-subtle` to both light and dark
- [x] 4.2 Add `--ds-space-7` (1.75rem / 28px)
- [x] 4.3 Add `--ds-space-9` (2.25rem / 36px)
- [x] 4.4 Add `--ds-space-11` (2.75rem / 44px) for touch targets
- [x] 4.5 Add `--ds-space-14` (3.5rem / 56px)
- [x] 4.6 Add `--ds-touch-target-min: 44px` token

## 5. Tailwind Integration

- [x] 5.1 Update tailwind.config.ts if any token names changed
- [x] 5.2 Add `min-w-touch` and `min-h-touch` utilities
- [x] 5.3 Verify all color utilities work in both themes

## 6. Verification

- [x] 6.1 Run `pnpm check` - no TypeScript errors
- [x] 6.2 Run `pnpm lint` - no NEW linting errors (pre-existing errors remain)
- [ ] 6.3 Verify Storybook renders correctly in light mode
- [ ] 6.4 Verify Storybook renders correctly in dark mode
- [ ] 6.5 Check that all token values are accessible in browser DevTools
- [ ] 6.6 Run visual regression tests if available
