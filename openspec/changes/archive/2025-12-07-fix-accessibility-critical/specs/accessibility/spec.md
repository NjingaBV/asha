## ADDED Requirements

### Requirement: SkipLink Component

The design system SHALL provide a SkipLink component for bypassing navigation.

#### Scenario: SkipLink available

- **WHEN** building a page with navigation
- **THEN** a SkipLink component MUST be available in atoms
- **AND** it MUST accept `href` (default: `#main-content`), `label` (default: "Skip to main content"), and `class` props

#### Scenario: SkipLink behavior

- **WHEN** SkipLink is rendered
- **THEN** it MUST be visually hidden by default using `sr-only` class
- **AND** it MUST become visible when focused using `focus:not-sr-only`
- **AND** it MUST be positioned at top of viewport with high contrast
- **AND** activating it MUST move focus to the target element

#### Scenario: SkipLink in templates

- **WHEN** using page templates (LandingPage, MacPage)
- **THEN** SkipLink MUST be the first focusable element
- **AND** main content MUST have `id="main-content"`

---

### Requirement: ColorPicker Accessibility

ColorPicker and ColorDot components SHALL follow radio button accessibility patterns.

#### Scenario: ColorPicker ARIA structure

- **WHEN** rendering ColorPicker
- **THEN** the container MUST have `role="radiogroup"`
- **AND** it MUST have `aria-label` describing the selection purpose
- **AND** each ColorDot MUST have `role="radio"` with `aria-checked`

#### Scenario: ColorPicker keyboard navigation

- **WHEN** ColorPicker has focus
- **THEN** Arrow Left/Right MUST move focus between options
- **AND** Home MUST move focus to first option
- **AND** End MUST move focus to last option
- **AND** Enter/Space MUST select the focused option
- **AND** roving tabindex pattern MUST be used (only focused item has tabindex=0)

#### Scenario: ColorPicker announcements

- **WHEN** a color is selected
- **THEN** the selection MUST be announced via `aria-live="polite"` region
- **AND** the announcement MUST include the color name

---

### Requirement: Touch Target Compliance

All interactive elements SHALL meet WCAG 2.5.5 Target Size requirements.

#### Scenario: ColorDot touch target

- **WHEN** rendering ColorDot
- **THEN** the clickable area MUST be at least 44x44 pixels
- **AND** the visual dot MAY be smaller
- **AND** padding or wrapper MUST extend hit area to 44px

#### Scenario: Modal close button touch target

- **WHEN** rendering Modal close button
- **THEN** it MUST be at least 44x44 pixels (previously 32x32)

#### Scenario: CarouselControls touch target

- **WHEN** rendering Carousel prev/next buttons
- **THEN** they MUST be at least 44x44 pixels (previously 40x40)

---

## MODIFIED Requirements

### Requirement: Focus Visibility

All interactive elements SHALL have visible focus indicators that meet WCAG 2.4.7 Focus Visible requirements.

#### Scenario: Focus ring on interactive elements

- **WHEN** an interactive element receives keyboard focus
- **THEN** a visible focus ring MUST appear
- **AND** the focus ring MUST use `focus-visible:` (not `focus:`) to avoid showing on mouse clicks
- **AND** the ring MUST have minimum 2px width with contrast ratio >= 3:1

#### Scenario: Focus ring styling

- **WHEN** implementing focus styles
- **THEN** components MUST use: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2`
- **AND** the ring color MUST use design tokens (`ring-accent`)
- **AND** the following components MUST have this styling: ColorPicker, Link, CarouselControls, FilterTabs, NavigationBar, ChapterNav, StickyProductNav, Card

#### Scenario: No focus suppression

- **WHEN** implementing interactive elements
- **THEN** `focus:outline-none` without alternative focus indicator MUST NOT be used
- **AND** `outline: none` MUST always be paired with visible ring styles
- **AND** ColorPicker.svelte MUST be fixed to comply with this requirement

---

### Requirement: Selection Groups ARIA

Selection components SHALL use radio button patterns with proper accessibility.

#### Scenario: Selection groups ARIA

- **WHEN** implementing ColorPicker or VariantSelector
- **THEN** the container MUST have `role="radiogroup"` with `aria-label`
- **AND** each option MUST have `role="radio"` with `aria-checked`
- **AND** the currently selected option MUST have `aria-checked="true"`

#### Scenario: FilterTabs ARIA

- **WHEN** implementing FilterTabs
- **THEN** the container MUST have `role="tablist"`
- **AND** each tab MUST have `role="tab"` with `aria-selected`
- **AND** keyboard navigation MUST use arrow keys

---

### Requirement: Keyboard Navigation for Groups

Interactive groups SHALL support full keyboard navigation.

#### Scenario: Arrow key navigation for groups

- **WHEN** navigating within a group (tabs, radio group, menu)
- **THEN** Arrow keys MUST move focus within the group
- **AND** Tab MUST exit the group to the next focusable element
- **AND** Home/End MUST move to first/last item
- **AND** this applies to: ColorPicker, VariantSelector, FilterTabs

#### Scenario: Escape key behavior

- **WHEN** an overlay is open (modal, dropdown, tooltip)
- **THEN** Escape key MUST close the overlay
- **AND** focus MUST return to the triggering element
- **AND** Header mobile navigation MUST support Escape to close
