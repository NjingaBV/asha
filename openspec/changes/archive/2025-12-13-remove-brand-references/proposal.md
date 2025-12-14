# Change: Remove Brand-Specific References

## Why

The Asha design system currently contains **150+ hardcoded brand references** (Apple, Mac, iPhone, iPad, etc.) throughout components, stories, and templates. This creates several problems:

1. **Not Generic** - Cannot be used for other brands/projects
2. **Misleading** - Design system appears Apple-specific
3. **Hard to Maintain** - Brand-specific logic embedded in components
4. **Poor Reusability** - Examples hardcoded instead of being data-driven

The goal of Asha is to be a **generic design system** for building product marketing pages, inspired by Apple's design language but not coupled to Apple products.

This change removes all brand-specific references and makes components truly generic and data-driven.

## What Changes

### Categories of Brand References

#### 1. **Component Code** (~50 references)

Files with hardcoded brand logic:

- `MacPage.svelte` (79 references) - Most critical
- `ProductLineup.svelte` (24 references)
- `CTASection.svelte` (11 references)
- `CardCarousel.svelte`, `Showcase.svelte`, `FeatureDiscovery.svelte` (5 each)
- Others: PageHeader, HeroBanner, ProductCard, Modal, ColorPicker, Player

#### 2. **Story Files** (~60 references)

Stories with Apple product examples:

- All product-related stories (ProductCard, ProductGrid, ProductLineup)
- Navigation stories with Mac model names
- Hero/CTA stories with iPhone/iPad imagery
- Comparison stories with MacBook specs

#### 3. **Type Definitions** (~10 references)

- `mac.type.ts` - Mac-specific product types
- `macLineup.machine.ts` - Mac lineup state machine
- `mac.machine.ts` - Mac configuration machine

#### 4. **Template Data** (~30 references)

- Product family landing pages
- Category pages
- Product detail pages

### Breaking Changes

| Component         | Current Behavior          | New Behavior                        |
| ----------------- | ------------------------- | ----------------------------------- |
| **MacPage**       | Hardcoded Mac models      | Generic ProductPage with data props |
| **ProductLineup** | Mac-specific sizing logic | Generic product comparison          |
| **ProductCard**   | Apple product assumptions | Fully data-driven card              |
| **ColorPicker**   | iPhone color names        | Generic color options               |

### Files to Modify

- **1 major refactor**: `MacPage.svelte` → `ProductPage.svelte`
- **3 type files**: Rename/genericize mac.type.ts, mac.machine.ts, macLineup.machine.ts
- **~20 component files**: Remove hardcoded brand strings
- **~60 story files**: Replace examples with generic product data
- **0 deletions**: Keep `MacPage` as deprecated wrapper for backward compatibility

### Migration Strategy

1. **Create generic versions** alongside brand-specific ones
2. **Update examples** to use fictional "Acme" brand or generic products
3. **Deprecate but keep** brand-specific components for 1 version
4. **Document migration** with before/after examples
5. **Update stories** incrementally

### Example Transformations

**Before (MacPage.svelte):**

```svelte
{#if model === 'macbook-air'}
	<p>The new MacBook Air with M2 chip</p>
{/if}
```

**After (ProductPage.svelte):**

```svelte
{#if product.variant === variant}
	<p>{product.headline}</p>
{/if}
```

**Before (Story):**

```typescript
export const Default = {
	args: {
		products: [
			{ name: 'MacBook Pro 14"', chip: 'M3 Pro' },
			{ name: 'MacBook Pro 16"', chip: 'M3 Max' }
		]
	}
};
```

**After (Story):**

```typescript
export const Default = {
	args: {
		products: [
			{ name: 'Laptop Pro 14"', processor: 'Ultra CPU' },
			{ name: 'Laptop Pro 16"', processor: 'Max CPU' }
		]
	}
};
```

## Impact

- **Affected specs**: component-architecture (MacPage → ProductPage), component-api (generic props)
- **Affected code**: 20 components, 60 stories, 3 type files
- **Migration effort**: Medium - Mostly find/replace + data structure updates
- **Breaking changes**: Yes - MacPage props change, type definitions change
- **Time estimate**: 2-3 days for complete implementation

## Dependencies

- ✅ No external dependencies
- ✅ Existing components already work with generic data
- ⚠️ Need to create migration guide for consumers

## Success Criteria

1. ✅ Zero hardcoded brand names in component code
2. ✅ All stories use generic product examples
3. ✅ MacPage deprecated with migration path documented
4. ✅ Type definitions are brand-agnostic
5. ✅ Documentation updated (README, Storybook, guides)
6. ✅ All tests pass with new generic data

## Benefits

1. **True Reusability** - Can be used for any product/brand
2. **Better Examples** - Generic examples are clearer
3. **Simpler Maintenance** - No brand-specific edge cases
4. **Professional** - Design system not tied to specific company
5. **Easier Testing** - Generic test data is more maintainable
