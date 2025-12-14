# Brand References Audit Report

**Date:** 2025-12-13  
**OpenSpec Change:** `remove-brand-references`

---

## Executive Summary

Total brand references found: **~280 occurrences** across components and stories

| Category   | Files | Occurrences | Priority    |
| ---------- | ----- | ----------- | ----------- |
| Components | 13    | ~120        | 🔴 Critical |
| Stories    | 29    | ~160        | 🟡 High     |
| Types      | 3     | ~10         | 🔴 Critical |

---

## Detailed Breakdown

### 🔴 Critical: Component Files (13 files, ~120 references)

| File                        | Count | Severity    | Notes                        |
| --------------------------- | ----- | ----------- | ---------------------------- |
| **MacPage.svelte**          | 67    | 🔴 CRITICAL | Entire template Mac-specific |
| **ProductLineup.svelte**    | 14    | 🔴 HIGH     | Mac-specific sizing logic    |
| **CTASection.svelte**       | 12    | 🟡 MEDIUM   | "Why Apple" hardcoded        |
| ColorSwatch.svelte          | 7     | 🟡 MEDIUM   | iPhone color names           |
| FeatureDiscovery.svelte     | 6     | 🟡 MEDIUM   | Apple feature examples       |
| ProductFamilyLanding.svelte | 3     | 🟢 LOW      | Example data                 |
| ProductCard.svelte          | 2     | 🟡 MEDIUM   | Apple product assumptions    |
| CardCarousel.svelte         | 2     | 🟢 LOW      | Example data                 |
| StickyNav.svelte            | 1     | 🟢 LOW      | Example data                 |
| FeatureSection.svelte       | 1     | 🟢 LOW      | Example data                 |
| Tabs.svelte                 | 1     | 🟢 LOW      | Example data                 |
| Link.svelte                 | 1     | 🟢 LOW      | Example data                 |
| Image.svelte                | 1     | 🟢 LOW      | Example data                 |

**Actions Required:**

- 🔴 **MacPage.svelte** → Refactor to ProductPage.svelte (67 refs)
- 🔴 **ProductLineup.svelte** → Remove Mac-specific logic (14 refs)
- 🟡 **CTASection.svelte** → Replace "Why Apple" text (12 refs)
- 🟡 **ColorSwatch.svelte** → Generic color names (7 refs)
- 🟡 **FeatureDiscovery.svelte** → Generic features (6 refs)
- 🟢 **Others** → Update example data (11 refs total)

---

### 🟡 High Priority: Story Files (29 files, ~160 references)

#### Top 10 Files by Reference Count

| File                            | Count | Type     |
| ------------------------------- | ----- | -------- |
| ProductFamilyLanding.stories.ts | 33    | Template |
| Showcase.stories.ts             | 31    | Organism |
| ColorSwatch.stories.ts          | 30    | Atom     |
| CardCarousel.stories.ts         | 18    | Organism |
| ProductDetail.stories.ts        | 14    | Template |
| ChapterNav.stories.ts           | 9     | Molecule |
| ProductGrid.stories.ts          | 8     | Organism |
| Comparison.stories.ts           | 7     | Organism |
| ComparisonCard.stories.ts       | 7     | Molecule |
| Hero.stories.ts                 | 5     | Organism |

**Remaining 19 files:** 1-5 references each

**Actions Required:**

- Replace all Apple product examples with generic "Acme" brand
- Update product specs (M3 chip → Ultra CPU, etc.)
- Change model names (MacBook Pro → Laptop Pro)
- Generic color names (Midnight → Dark Blue)

---

### 🔴 Critical: Type Definitions (3 files, ~10 references)

| File                   | Issue                     | Action                              |
| ---------------------- | ------------------------- | ----------------------------------- |
| `mac.type.ts`          | Mac-specific types        | Rename → `product.type.ts`          |
| `mac.machine.ts`       | Mac configuration machine | Rename → `product.machine.ts`       |
| `macLineup.machine.ts` | Mac lineup machine        | Rename → `productLineup.machine.ts` |

---

## Brand Terms Inventory

### Terms to Replace

| Brand Term            | Generic Replacement   | Count |
| --------------------- | --------------------- | ----- |
| MacBook Pro           | Laptop Pro            | ~40   |
| MacBook Air           | Laptop Air            | ~30   |
| iPhone                | Phone Pro / Phone     | ~25   |
| iPad                  | Tablet Pro / Tablet   | ~20   |
| AirPods               | Buds Pro / Earbuds    | ~10   |
| Apple                 | Acme / [Brand]        | ~50   |
| M3 / M3 Pro / M3 Max  | Ultra / Max / Pro CPU | ~30   |
| Space Gray / Midnight | Dark Gray / Dark Blue | ~20   |
| Retina Display        | HD Display            | ~10   |
| ProMotion             | High Refresh Display  | ~8    |

---

## Categorization by Severity

### 🔴 Critical (Hardcoded Logic) - ~100 references

Files where brand names are embedded in component logic:

1. **MacPage.svelte** (67) - Entire template
2. **ProductLineup.svelte** (14) - Sizing calculations
3. **CTASection.svelte** (12) - "Why Apple" section
4. **ColorSwatch.svelte** (7) - Color name mapping

**Impact:** These require code refactoring, not just string replacement

### 🟡 High (Example Data) - ~150 references

Story files and component examples:

- All product stories (ProductCard, ProductGrid, ProductDetail, etc.)
- Navigation examples (Mac model names in navbars)
- Comparison tables (Mac specs)
- Color pickers (iPhone colors)

**Impact:** These can be fixed with data replacement

### 🟢 Low (Comments/Docs) - ~30 references

Comments, documentation strings, or non-critical examples:

- JSDoc comments mentioning "inspired by Apple"
- README examples
- Storybook documentation

**Impact:** These are informational only

---

## Generic Data Structure Design

### Proposed Product Interface

```typescript
/**
 * Generic Product Model
 * Replaces Mac-specific types
 */
export interface Product {
	// Identity
	id: string;
	name: string;
	slug: string;
	category: ProductCategory;

	// Variants
	variant?: string; // e.g., "Pro", "Air", "Standard"
	sizes?: ProductSize[]; // e.g., "14-inch", "16-inch"

	// Specifications
	processor?: string; // Generic CPU name
	memory?: string[];
	storage?: string[];
	display?: DisplaySpec;

	// Appearance
	colors?: ColorOption[];
	images?: ProductImage[];

	// Marketing
	headline?: string;
	tagline?: string;
	features?: Feature[];
	startingPrice?: number;

	// Metadata
	releaseDate?: string;
	discontinued?: boolean;
}

export type ProductCategory = 'laptop' | 'tablet' | 'phone' | 'audio' | 'accessory';

export interface ColorOption {
	id: string;
	name: string; // Generic name: "Dark Gray", "Silver"
	hex: string;
	image?: string;
}

export interface DisplaySpec {
	size: string; // "14-inch", "16-inch"
	resolution: string;
	technology?: string; // "HD", "High Refresh"
}
```

### Generic Brand/Company

Use "**Acme**" as the fictional brand for all examples:

```typescript
export const ACME_PRODUCTS = {
	laptops: [
		{
			name: 'Laptop Pro 14"',
			processor: 'Ultra CPU',
			colors: ['Space Gray', 'Silver']
		},
		{
			name: 'Laptop Air',
			processor: 'Pro CPU',
			colors: ['Midnight Blue', 'Starlight']
		}
	]
};
```

---

## Migration Strategy

### Phase 1: Types (Low Risk)

1. Create `product.type.ts` with generic interfaces
2. Create `product.machine.ts` and `productLineup.machine.ts`
3. Keep `mac.*` files as deprecated wrappers
4. Update all imports incrementally

### Phase 2: Critical Components (High Risk)

1. **MacPage → ProductPage**
    - Create ProductPage.svelte (new file)
    - Extract hardcoded data to fixtures
    - Keep MacPage as wrapper (deprecated)
2. **ProductLineup**
    - Remove Mac-specific sizing
    - Make fully data-driven
3. **CTASection**
    - Replace "Why Apple" with configurable prop

### Phase 3: Stories (Low Risk)

1. Create `fixtures/products.ts` with Acme brand data
2. Update all stories to import from fixtures
3. Replace Apple terminology systematically

### Phase 4: Cleanup

1. Mark deprecated files
2. Update documentation
3. Create migration guide

---

## Backward Compatibility

### Deprecated Components (Keep for 1 major version)

```typescript
// MacPage.svelte (deprecated wrapper)
<script>
  import ProductPage from './ProductPage.svelte';
  console.warn('MacPage is deprecated. Use ProductPage instead.');
</script>

<ProductPage {...$$props}>
  <slot />
</ProductPage>
```

### Type Aliases

```typescript
// mac.type.ts (deprecated)
export type { Product as MacModel } from './product.type';
export type { ProductConfig as MacConfig } from './product.type';
```

---

## Risk Assessment

| Risk                   | Likelihood | Impact | Mitigation                    |
| ---------------------- | ---------- | ------ | ----------------------------- |
| Breaking existing code | High       | High   | Keep deprecated wrappers      |
| Story regressions      | Medium     | Low    | Visual testing with Chromatic |
| Type errors            | Medium     | Medium | Incremental migration         |
| Missed references      | Low        | Low    | Comprehensive grep/search     |

---

## Estimated Effort

| Phase               | Files  | Estimated Time           |
| ------------------- | ------ | ------------------------ |
| Phase 1: Types      | 3      | 2 hours                  |
| Phase 2: Components | 13     | 8 hours                  |
| Phase 3: Stories    | 29     | 6 hours                  |
| Phase 4: Cleanup    | -      | 2 hours                  |
| **Total**           | **45** | **~18 hours (2-3 days)** |

---

## Next Steps

1. ✅ Complete this audit ← **DONE**
2. ⏭️ Create terminology mapping
3. ⏭️ Design generic product fixtures
4. ⏭️ Start Phase 2: Type refactoring

---

## Appendix: Full File List

### Components to Update (13)

- MacPage.svelte (67)
- ProductLineup.svelte (14)
- CTASection.svelte (12)
- ColorSwatch.svelte (7)
- FeatureDiscovery.svelte (6)
- ProductFamilyLanding.svelte (3)
- ProductCard.svelte (2)
- CardCarousel.svelte (2)
- StickyNav.svelte (1)
- FeatureSection.svelte (1)
- Tabs.svelte (1)
- Link.svelte (1)
- Image.svelte (1)

### Stories to Update (29)

- ProductFamilyLanding.stories.ts (33)
- Showcase.stories.ts (31)
- ColorSwatch.stories.ts (30)
- CardCarousel.stories.ts (18)
- ProductDetail.stories.ts (14)
- ChapterNav.stories.ts (9)
- ProductGrid.stories.ts (8)
- Comparison.stories.ts (7)
- ComparisonCard.stories.ts (7)
- Hero.stories.ts (5)
- NavigationBar.stories.ts (5)
- Link.stories.ts (5)
- ProductLanding.stories.ts (4)
- PageHeader.stories.ts (4)
- SearchBar.stories.ts (4)
- Image.stories.ts (4)
- ArticlePage.stories.ts (3)
- StickyNav.stories.ts (3)
- Card.stories.ts (3)
- Breadcrumb.stories.ts (3)
- MacPage.stories.ts (2)
- CTASection.stories.ts (2)
- SpecGrid.stories.ts (2)
- ButtonGroup.stories.ts (2)
- Caption.stories.ts (2)
- FeatureDiscovery.stories.ts (1)
- Label.stories.ts (1)
- Heading.stories.ts (1)
- Button.stories.ts (1)

### Type Files (3)

- mac.type.ts → product.type.ts
- mac.machine.ts → product.machine.ts
- macLineup.machine.ts → productLineup.machine.ts
