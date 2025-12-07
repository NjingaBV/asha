## 1. Preparation

- [x] 1.1 Document all current prop usages in Storybook stories
- [x] 1.2 Create migration guide document
- [x] 1.3 Identify all consumer usages (stories, tests, pages)

## 2. Rename className to class

- [x] 2.1 Update Link.svelte: rename `className` prop to `class`
- [x] 2.2 Update Card.svelte: rename `className` prop to `class`
- [x] 2.3 Update Label.svelte: rename `className` prop to `class`
- [x] 2.4 Update Image.svelte: rename `className` prop to `class`
- [x] 2.5 Update NavigationBar.svelte: rename `className` prop to `class`
- [x] 2.6 Update all related stories to use new prop name
- [x] 2.7 Update all tests to use new prop name (no tests exist yet)

## 3. Rename badgeSize to size

- [x] 3.1 Update Badge.svelte: rename `badgeSize` prop to `size`
- [x] 3.2 Update Badge.stories.ts to use `size`
- [x] 3.3 Update any tests using Badge (no tests exist yet)

## 4. Standardize color to tone

- [x] 4.1 Update Badge.svelte: rename `color` to `tone`, change values to semantic
- [x] 4.2 Create mapping: blue->primary, slate->neutral, emerald/green->success, amber/orange->warning, red->danger
- [x] 4.3 Update Label.svelte: rename `color` to `tone` with semantic values
- [x] 4.4 Update PromoBadge.svelte: ensure `tone` prop uses semantic values
- [x] 4.5 Update all related stories

## 5. Migrate Hardcoded Colors to Tokens

### 5.1 Atoms

- [x] 5.1.1 Badge.svelte: replace `bg-blue-600`, `text-blue-600`, etc. with token classes
- [x] 5.1.2 Link.svelte: replace `text-blue-600` with `text-accent`
- [x] 5.1.3 Label.svelte: replace color-specific classes with token classes
- [x] 5.1.4 Eyebrow.svelte: replace `text-slate-600` with `text-fg-muted`
- [x] 5.1.5 ColorDot.svelte: replace `ring-blue-500` with `ring-accent`
- [x] 5.1.6 Hamburger.svelte: replace `ring-blue-500` with `ring-accent`
- [x] 5.1.7 Heading.svelte: change default color from `text-slate-900` to `text-fg`

### 5.2 Molecules

- [x] 5.2.1 Card.svelte: replace all hardcoded colors
- [x] 5.2.2 ColorPicker.svelte: replace `text-brand-gray` etc.
- [x] 5.2.3 Player.svelte: replace `text-slate-700`, `text-blue-600`
- [x] 5.2.4 NavigationBar.svelte: replace `bg-white/95`, `border-gray-200`
- [x] 5.2.5 PromoBadge.svelte: replace orange-specific colors
- [x] 5.2.6 SpecChip.svelte: replace `bg-slate-50`, `text-slate-900`
- [x] 5.2.7 Feature.svelte: replace `text-slate-600`

### 5.3 Organisms

- [x] 5.3.1 Hero.svelte: audit and replace hardcoded colors
- [x] 5.3.2 Footer.svelte: replace `bg-gray-100`, `text-gray-500`
- [x] 5.3.3 Header.svelte: replace `bg-white/80`

## 6. Add Focus Visible to Link

- [x] 6.1 Add focus-visible ring styles to Link.svelte
- [x] 6.2 Ensure focus ring uses token colors

## 7. Export TypeScript Types

- [x] 7.1 Add `BadgeProps` export to Badge.svelte
- [x] 7.2 Add `LinkProps` export to Link.svelte
- [x] 7.3 Add `CardProps` export to Card.svelte
- [x] 7.4 Add `LabelProps` export to Label.svelte
- [x] 7.5 Add `propDefs` object to key components

## 8. Verification

- [x] 8.1 Run `pnpm check` - no TypeScript errors
- [x] 8.2 Run `pnpm lint` - no new linting errors
- [ ] 8.3 Verify all Storybook stories render correctly
- [ ] 8.4 Verify components look correct in light mode
- [ ] 8.5 Verify components look correct in dark mode
- [ ] 8.6 Run any existing tests
- [x] 8.7 Update CHANGELOG with breaking changes (added to migration guide)
