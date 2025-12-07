## 1. Focus Visible Fixes (Critical)

- [x] 1.1 ColorPicker.svelte: Replace `focus:outline-none` with proper focus ring
- [x] 1.2 Link.svelte: Add `focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`
- [x] 1.3 CarouselControls.svelte: Add focus visible styles to prev/next buttons
- [x] 1.4 FilterTabs.svelte: Add focus visible styles to tab buttons
- [x] 1.5 NavigationBar.svelte: Add focus visible styles to navigation links
- [x] 1.6 ChapterNav.svelte: Add focus visible styles to chapter links
- [x] 1.7 StickyProductNav.svelte: Add focus visible styles to nav links
- [x] 1.8 Card.svelte: Add focus visible styles to interactive cards

## 2. Touch Target Fixes (Critical)

- [x] 2.1 ColorDot.svelte: Wrap in container with min 44px hit area (consumers handle this)
- [x] 2.2 ColorPicker.svelte: Ensure color buttons meet 44px requirement
- [x] 2.3 VariantSelector.svelte: Ensure variant buttons meet 44px requirement
- [x] 2.4 Modal.svelte: Increase close button from 32px to 44px
- [x] 2.5 CarouselControls.svelte: Increase button size from 40px to 44px
- [x] 2.6 FilterTabs.svelte: Increase min height to 44px

## 3. Skip Link Component (High)

- [x] 3.1 Create new SkipLink.svelte in atoms
- [x] 3.2 Implement sr-only + focus:not-sr-only pattern
- [x] 3.3 Add high contrast visible state when focused
- [x] 3.4 Position fixed at top-left of viewport
- [x] 3.5 Add to LandingPage.svelte template
- [x] 3.6 Add to MacPage.svelte template
- [x] 3.7 Add id="main-content" to main content areas
- [x] 3.8 Add SkipLink story to Storybook

## 4. ARIA Roles for Selection Components (High)

- [x] 4.1 ColorPicker.svelte: Add `role="radiogroup"` to container
- [x] 4.2 ColorPicker.svelte: Add `aria-label` describing the selection
- [x] 4.3 ColorDot.svelte: Change from button to `role="radio"` with `aria-checked`
- [x] 4.4 VariantSelector.svelte: Add `role="radiogroup"` to container
- [x] 4.5 VariantSelector.svelte: Add `aria-label` for the group
- [x] 4.6 FilterTabs.svelte: Add `role="tablist"` to container
- [x] 4.7 FilterTabs.svelte: Add `role="tab"` and `aria-selected` to each tab

## 5. Keyboard Navigation (High)

### 5.1 ColorPicker

- [x] 5.1.1 Add focusedIndex state tracking
- [x] 5.1.2 Implement Arrow key navigation (Left/Right)
- [x] 5.1.3 Implement Home/End key navigation
- [x] 5.1.4 Implement Enter/Space to select focused color
- [x] 5.1.5 Update machine or add local keyboard handler

### 5.2 VariantSelector

- [x] 5.2.1 Add focusedIndex state tracking
- [x] 5.2.2 Implement Arrow key navigation
- [x] 5.2.3 Implement roving tabindex pattern

### 5.3 FilterTabs

- [x] 5.3.1 Add keyboard handler for arrow keys
- [x] 5.3.2 Implement Home/End navigation
- [x] 5.3.3 Implement roving tabindex

## 6. Live Regions (Medium)

- [x] 6.1 ColorPicker.svelte: Add `aria-live="polite"` for selection announcements
- [x] 6.2 Carousel.svelte: Add live region for slide change announcements
- [x] 6.3 Create sr-only announcement text for selections

## 7. Additional Fixes (Medium)

- [x] 7.1 Header.svelte: Add Escape key to close mobile navigation
- [x] 7.2 Icon.svelte: Add `aria-hidden="true"` by default
- [x] 7.3 Carousel.svelte: Add `role="region"` with `aria-label`

## 8. Verification

- [x] 8.1 Run `pnpm check` - no TypeScript errors
- [x] 8.2 Run `pnpm lint` - no new linting errors
- [ ] 8.3 Test all components with keyboard only (Tab, Enter, Space, Arrows, Escape)
- [ ] 8.4 Test skip link functionality
- [ ] 8.5 Test with screen reader (VoiceOver on Mac)
- [ ] 8.6 Verify all touch targets are 44px+ using browser DevTools
- [ ] 8.7 Run Lighthouse accessibility audit, target score >= 95
- [ ] 8.8 Test in both light and dark modes
