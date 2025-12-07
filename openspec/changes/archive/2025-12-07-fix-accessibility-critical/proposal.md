# Change: Fix Critical Accessibility Issues

## Why

The component library has critical accessibility violations that prevent users with disabilities from using the interface:

1. **Focus visible removed** - ColorPicker has `focus:outline-none` with no alternative, making it unusable for keyboard users
2. **Touch targets too small** - ColorDot is 16-24px vs required 44px minimum
3. **Missing skip links** - No way to bypass navigation for keyboard/screen reader users
4. **Missing ARIA roles** - ColorPicker/VariantSelector lack radiogroup semantics
5. **No keyboard navigation** - ColorPicker, VariantSelector, FilterTabs lack arrow key support

These issues violate WCAG 2.2 AA requirements and must be fixed before any other changes.

## What Changes

- Add focus-visible styles to ColorPicker, Link, CarouselControls, FilterTabs, navigation components
- Increase touch targets to 44px minimum for ColorDot and related components
- Create SkipLink component and integrate into templates
- Add `role="radiogroup"` to ColorPicker and VariantSelector
- Add arrow key navigation to ColorPicker, VariantSelector, FilterTabs
- Add `aria-live` regions for dynamic content announcements
- Increase Modal close button to 44px

## Impact

- **Affected specs**: `accessibility`
- **Affected components**:
    - ColorPicker.svelte, ColorDot.svelte, VariantSelector.svelte
    - Link.svelte, CarouselControls.svelte, FilterTabs.svelte
    - Modal.svelte, Header.svelte
    - NavigationBar.svelte, ChapterNav.svelte, StickyProductNav.svelte
    - LandingPage.svelte, MacPage.svelte (templates)
    - NEW: SkipLink.svelte
- **Risk**: Low to Medium - may affect visual appearance slightly
- **Breaking changes**: None expected; additive improvements
