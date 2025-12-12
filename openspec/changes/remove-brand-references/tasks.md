# Tasks: Remove Brand-Specific References

## Phase 1: Audit & Planning

- [ ] 1.1 Complete audit of all brand references in codebase
- [ ] 1.2 Categorize references by severity (hardcoded logic vs examples)
- [ ] 1.3 Create mapping of brand-specific → generic terminology
- [ ] 1.4 Design generic product data structure
- [ ] 1.5 Plan backward compatibility strategy

---

## Phase 2: Type Definitions & Machines

### Refactor Brand-Specific Types

- [ ] 2.1 Rename `mac.type.ts` → `product.type.ts` with generic ProductModel interface
- [ ] 2.2 Rename `mac.machine.ts` → `product.machine.ts` with generic states
- [ ] 2.3 Rename `macLineup.machine.ts` → `productLineup.machine.ts`
- [ ] 2.4 Update all type imports across codebase
- [ ] 2.5 Verify type checking passes (`pnpm check`)

---

## Phase 3: Critical Component Refactors

### MacPage → ProductPage

- [ ] 3.1 Create new `ProductPage.svelte` template with generic props
- [ ] 3.2 Extract hardcoded Mac data to example JSON
- [ ] 3.3 Replace Mac-specific logic with data-driven rendering
- [ ] 3.4 Update ProductPage story with generic examples
- [ ] 3.5 Create deprecated `MacPage.svelte` wrapper pointing to ProductPage
- [ ] 3.6 Add deprecation warning to MacPage story

### ProductLineup Component

- [ ] 3.7 Remove Mac-specific sizing logic from ProductLineup
- [ ] 3.8 Make product comparison fully data-driven
- [ ] 3.9 Update ProductLineup story with generic laptop examples
- [ ] 3.10 Test with various product types (phones, tablets, laptops)

### ProductCard Component

- [ ] 3.11 Remove Apple product assumptions from ProductCard
- [ ] 3.12 Make all product attributes configurable via props
- [ ] 3.13 Update ProductCard story with generic products
- [ ] 3.14 Test with fictional "Acme" brand examples

---

## Phase 4: Organism Components

### Navigation & Layout

- [ ] 4.1 **PageHeader** - Remove Mac-specific breadcrumb examples
- [ ] 4.2 **StickyNav** - Genericize navigation links
- [ ] 4.3 **ProductGrid** - Update with generic product data

### Hero & CTA Components

- [ ] 4.4 **HeroBanner** - Replace iPhone/iPad imagery references
- [ ] 4.5 **CTASection** - Remove "Why Apple" hardcoded text (11 occurrences)
- [ ] 4.6 **FeatureSection** - Genericize feature descriptions

### Product Display

- [ ] 4.7 **CardCarousel** - Remove Mac product carousel data (5 references)
- [ ] 4.8 **Showcase** - Genericize showcase content (5 references)
- [ ] 4.9 **FeatureDiscovery** - Remove Apple-specific features (5 references)
- [ ] 4.10 **Comparison** - Update comparison data to generic products
- [ ] 4.11 **ComparisonSection** - Remove Mac comparison examples

---

## Phase 5: Molecule Components

### Interactive Components

- [ ] 5.1 **ColorPicker** - Replace iPhone color names with generic options
- [ ] 5.2 **ButtonGroup** - Remove Mac model selector examples
- [ ] 5.3 **Modal** - Update example content (3 references)
- [ ] 5.4 **Player** - Genericize video player examples (3 references)

### Display Components

- [ ] 5.5 **ComparisonCard** - Update comparison examples
- [ ] 5.6 **Tabs** - Remove Mac-specific tab content

---

## Phase 6: Atom Components

- [ ] 6.1 **Link** - Update example links (1 reference)
- [ ] 6.2 **Input** - Genericize placeholder examples
- [ ] 6.3 Verify all atoms are brand-agnostic

---

## Phase 7: Story Files Update

### Product Stories (High Priority)

- [ ] 7.1 **ProductCard.stories.ts** - Replace with Acme Laptop Pro example
- [ ] 7.2 **ProductGrid.stories.ts** - Replace with generic product grid
- [ ] 7.3 **ProductLineup.stories.ts** - Replace Mac lineup with generic comparison
- [ ] 7.4 **ProductDetail.stories.ts** - Create generic product detail example
- [ ] 7.5 **ProductFamilyLanding.stories.ts** - Genericize family landing (3 references)

### Navigation Stories

- [ ] 7.6 **NavigationBar.stories.ts** - Remove Mac model names from nav
- [ ] 7.7 **StickyNav.stories.ts** - Generic navigation examples
- [ ] 7.8 **ChapterNav.stories.ts** - Generic chapter titles

### Hero & CTA Stories

- [ ] 7.9 **Hero.stories.ts** - Replace Apple product heroes
- [ ] 7.10 **HeroBanner.stories.ts** - Generic banner examples
- [ ] 7.11 **HeroTile.stories.ts** - Generic tile content
- [ ] 7.12 **CTASection.stories.ts** - Replace "Why Apple" with "Why Choose"
- [ ] 7.13 **CTA.stories.ts** - Generic call-to-action text

### Feature Stories

- [ ] 7.14 **FeatureSection.stories.ts** - Generic feature highlights
- [ ] 7.15 **FeatureDiscovery.stories.ts** - Generic feature discovery
- [ ] 7.16 **IconText.stories.ts** - Generic icon+text examples
- [ ] 7.17 **FeatureGrid.stories.ts** - Generic feature grid

### Comparison Stories

- [ ] 7.18 **Comparison.stories.ts** - Generic product comparison table
- [ ] 7.19 **ComparisonCard.stories.ts** - Generic comparison cards
- [ ] 7.20 **ComparisonSection.stories.ts** - Generic comparison section

### Other Stories

- [ ] 7.21 **Carousel.stories.ts** - Generic carousel content
- [ ] 7.22 **CardCarousel.stories.ts** - Generic card carousel
- [ ] 7.23 **ColorPicker.stories.ts** - Generic color options
- [ ] 7.24 **Player.stories.ts** - Generic video examples
- [ ] 7.25 **Showcase.stories.ts** - Generic showcase content

---

## Phase 8: Template Stories

- [ ] 8.1 **MacPage.stories.ts** - Add deprecation notice, point to ProductPage
- [ ] 8.2 **ProductLanding.stories.ts** - Genericize product landing
- [ ] 8.3 **ProductFamilyLanding.stories.ts** - Replace Apple products
- [ ] 8.4 **ProductDetail.stories.ts** - Generic product detail
- [ ] 8.5 **CategoryPage.stories.ts** - Generic category examples

---

## Phase 9: Example Data Creation

### Create Generic Product Catalog

- [ ] 9.1 Create `src/lib/fixtures/products.ts` with generic product data
- [ ] 9.2 Define "Acme" brand as example company
- [ ] 9.3 Create generic product categories (Laptops, Tablets, Phones, Audio)
- [ ] 9.4 Create generic product models with specs
- [ ] 9.5 Create generic color palettes
- [ ] 9.6 Create generic feature lists

### Example Products

- [ ] 9.7 **Laptop Pro 14"** - Flagship laptop example
- [ ] 9.8 **Laptop Pro 16"** - Large laptop example
- [ ] 9.9 **Laptop Air** - Thin & light laptop
- [ ] 9.10 **Tablet Pro** - Professional tablet
- [ ] 9.11 **Tablet** - Standard tablet
- [ ] 9.12 **Phone Pro** - Flagship phone
- [ ] 9.13 **Phone** - Standard phone
- [ ] 9.14 **Buds Pro** - Wireless earbuds

---

## Phase 10: Documentation & Migration

### Migration Guide

- [ ] 10.1 Create `MIGRATION_BRAND_REMOVAL.md`
- [ ] 10.2 Document MacPage → ProductPage migration
- [ ] 10.3 Document type definition changes
- [ ] 10.4 Provide before/after code examples
- [ ] 10.5 List all deprecated components

### Update Documentation

- [ ] 10.6 Update README.md - Remove "Apple-inspired" language if too specific
- [ ] 10.7 Update Storybook docs - Add generic product examples
- [ ] 10.8 Update component JSDoc comments - Remove brand references
- [ ] 10.9 Update DESIGN_SYSTEM_SPEC.md - Genericize terminology
- [ ] 10.10 Update project.md - Clarify "inspired by Apple design" vs "Apple-specific"

---

## Phase 11: Testing & Verification

### Component Tests

- [ ] 11.1 Run `pnpm check` - Verify no type errors
- [ ] 11.2 Run `pnpm lint` - Verify no linting errors
- [ ] 11.3 Run `pnpm build` - Verify build succeeds
- [ ] 11.4 Run Storybook - Verify all stories render correctly

### Manual Testing

- [ ] 11.5 Test ProductPage with various generic products
- [ ] 11.6 Test ProductLineup with 2-4 product comparison
- [ ] 11.7 Test ColorPicker with generic color options
- [ ] 11.8 Test all updated stories in Storybook
- [ ] 11.9 Verify no console errors

### Automated Checks

- [ ] 11.10 Run `rg "Apple|Mac|iPhone|iPad" src/lib/components` - Should find 0 results
- [ ] 11.11 Run `rg "Apple|Mac|iPhone|iPad" src/stories` - Check for unwanted references
- [ ] 11.12 Verify deprecated components still work (backward compatibility)

---

## Phase 12: Cleanup & Polish

### Code Cleanup

- [ ] 12.1 Remove commented-out brand-specific code
- [ ] 12.2 Remove unused brand-specific assets (if any)
- [ ] 12.3 Update import statements to reflect renamed files
- [ ] 12.4 Format all modified files (`pnpm format`)

### Deprecation Handling

- [ ] 12.5 Add deprecation warnings to MacPage component
- [ ] 12.6 Add migration hints in type definitions
- [ ] 12.7 Update CHANGELOG.md with deprecations list
- [ ] 12.8 Set deprecation removal timeline (e.g., v1.0.0)

---

## Final Verification

- [ ] 13.1 Verify 0 brand references in component code
- [ ] 13.2 Verify all stories use generic examples
- [ ] 13.3 Verify documentation is brand-agnostic
- [ ] 13.4 Verify backward compatibility for deprecated components
- [ ] 13.5 Review and merge all changes
- [ ] 13.6 Archive this OpenSpec change
