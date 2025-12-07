# Specification: Accessibility

## Overview

This specification defines the accessibility requirements for all Asha components, ensuring WCAG 2.2 AA compliance. All interactive components MUST be usable by keyboard, screen readers, and assistive technologies.

## Requirements

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

#### Scenario: No focus suppression

- **WHEN** implementing interactive elements
- **THEN** `focus:outline-none` without alternative focus indicator MUST NOT be used
- **AND** `outline: none` MUST always be paired with visible ring styles

---

### Requirement: Touch Target Size

All interactive elements SHALL meet WCAG 2.5.5 Target Size requirements with minimum 44x44 CSS pixels.

#### Scenario: Minimum touch target

- **WHEN** an element is clickable/tappable
- **THEN** the clickable area MUST be at least 44x44 pixels
- **AND** if visual size is smaller, padding or pseudo-elements MUST extend the hit area

#### Scenario: Small visual elements

- **WHEN** a visual element (icon, color dot) is smaller than 44px
- **THEN** the interactive wrapper MUST be at least 44px
- **AND** `min-w-touch min-h-touch` (or equivalent) MUST be applied

#### Scenario: Touch target spacing

- **WHEN** multiple touch targets are adjacent
- **THEN** there MUST be at least 8px spacing between targets
- **OR** each target MUST individually meet the 44px requirement

---

### Requirement: Keyboard Navigation

All interactive components SHALL be fully operable via keyboard alone.

#### Scenario: Button keyboard interaction

- **WHEN** a button has focus
- **THEN** Enter and Space keys MUST activate the button
- **AND** Space MUST NOT scroll the page

#### Scenario: Tab navigation

- **WHEN** using Tab key
- **THEN** focus MUST move to the next interactive element in DOM order
- **AND** Shift+Tab MUST move to the previous element
- **AND** disabled elements MUST be skipped

#### Scenario: Arrow key navigation for groups

- **WHEN** navigating within a group (tabs, radio group, menu)
- **THEN** Arrow keys MUST move focus within the group
- **AND** Tab MUST exit the group to the next focusable element
- **AND** Home/End MUST move to first/last item

#### Scenario: Escape key behavior

- **WHEN** an overlay is open (modal, dropdown, tooltip)
- **THEN** Escape key MUST close the overlay
- **AND** focus MUST return to the triggering element

---

### Requirement: ARIA Attributes

Components SHALL use appropriate ARIA attributes to communicate state and structure to assistive technologies.

#### Scenario: Button ARIA

- **WHEN** a button is in loading state
- **THEN** it MUST have `aria-busy="true"`
- **AND** loading text MUST be announced to screen readers

#### Scenario: Input ARIA

- **WHEN** an input has an error
- **THEN** it MUST have `aria-invalid="true"`
- **AND** `aria-describedby` MUST reference the error message element
- **AND** the error message MUST have `role="alert"`

#### Scenario: Modal ARIA

- **WHEN** a modal is open
- **THEN** it MUST have `role="dialog"` and `aria-modal="true"`
- **AND** `aria-labelledby` MUST reference the title
- **AND** `aria-describedby` MUST reference the description (if present)

#### Scenario: Tabs ARIA

- **WHEN** implementing tabs
- **THEN** the tab list MUST have `role="tablist"` with `aria-orientation`
- **AND** each tab MUST have `role="tab"` with `aria-selected` and `aria-controls`
- **AND** each panel MUST have `role="tabpanel"` with `aria-labelledby`

#### Scenario: Selection groups ARIA

- **WHEN** implementing ColorPicker or VariantSelector
- **THEN** the container MUST have `role="radiogroup"` with `aria-label`
- **AND** each option MUST have `role="radio"` with `aria-checked`

#### Scenario: Carousel ARIA

- **WHEN** implementing a carousel
- **THEN** it MUST have `role="region"` with `aria-roledescription="carousel"`
- **AND** `aria-label` MUST describe the carousel content
- **AND** slide changes MUST be announced via `aria-live="polite"`

---

### Requirement: Skip Links

Page templates SHALL provide skip links to bypass repetitive navigation.

#### Scenario: Skip to main content

- **WHEN** a page loads
- **THEN** the first focusable element MUST be a skip link
- **AND** the skip link MUST be visually hidden until focused
- **AND** activating it MUST move focus to main content

#### Scenario: Skip link styling

- **WHEN** skip link receives focus
- **THEN** it MUST become visible with high contrast
- **AND** it MUST be positioned at the top of the viewport

---

### Requirement: Focus Management

Components with overlays or dynamic content SHALL properly manage focus.

#### Scenario: Modal focus trap

- **WHEN** a modal opens
- **THEN** focus MUST move to the modal (first focusable element or close button)
- **AND** Tab MUST cycle within the modal (focus trap)
- **AND** focus MUST NOT escape to background content

#### Scenario: Focus restoration

- **WHEN** a modal/overlay closes
- **THEN** focus MUST return to the element that triggered the opening
- **AND** the previous focus target MUST be stored before opening

#### Scenario: Dynamic content focus

- **WHEN** new content appears (accordion, disclosure)
- **THEN** focus SHOULD move to the new content if it's the result of user action
- **OR** the new content MUST be announced via `aria-live`

---

### Requirement: Color Contrast

All text and UI components SHALL meet WCAG 2.1 contrast requirements.

#### Scenario: Text contrast ratios

- **WHEN** displaying text
- **THEN** normal text (< 18px) MUST have contrast ratio >= 4.5:1
- **AND** large text (>= 18px bold or >= 24px) MUST have contrast ratio >= 3:1

#### Scenario: UI component contrast

- **WHEN** displaying interactive UI components
- **THEN** the component boundary MUST have contrast ratio >= 3:1 against adjacent colors
- **AND** focus indicators MUST have contrast ratio >= 3:1

#### Scenario: Dynamic backgrounds

- **WHEN** text is displayed over dynamic/variable backgrounds (Hero, Card)
- **THEN** contrast MUST be verified programmatically
- **OR** a semi-transparent overlay MUST ensure minimum contrast

---

### Requirement: Reduced Motion

Components with animations SHALL respect user motion preferences.

#### Scenario: Motion preference detection

- **WHEN** `prefers-reduced-motion: reduce` is set
- **THEN** all animations MUST be disabled or significantly reduced
- **AND** essential motion (progress indicators) MAY continue with reduced intensity

#### Scenario: Motion token behavior

- **WHEN** reduced motion is preferred
- **THEN** all `--ds-duration-*` tokens MUST resolve to `0ms`

---

### Requirement: Screen Reader Announcements

Dynamic content changes SHALL be announced to screen readers appropriately.

#### Scenario: Live regions

- **WHEN** content updates without page reload
- **THEN** updates MUST be announced via `aria-live` regions
- **AND** use `aria-live="polite"` for non-critical updates
- **AND** use `aria-live="assertive"` only for critical alerts

#### Scenario: Loading states

- **WHEN** content is loading
- **THEN** loading state MUST be announced
- **AND** completion MUST be announced

#### Scenario: Error announcements

- **WHEN** a validation error occurs
- **THEN** the error message MUST be announced immediately
- **AND** the error container MUST have `role="alert"` or `aria-live="assertive"`

---

### Requirement: Form Accessibility

All form elements SHALL be properly labeled and described.

#### Scenario: Label association

- **WHEN** a form input has a visible label
- **THEN** the label MUST be associated via `for`/`id` attributes
- **AND** clicking the label MUST focus the input

#### Scenario: Required field indication

- **WHEN** a field is required
- **THEN** `aria-required="true"` MUST be set
- **AND** a visual indicator MUST be present
- **AND** the indicator MUST have `aria-hidden="true"` if decorative

#### Scenario: Error association

- **WHEN** a field has an error
- **THEN** `aria-describedby` MUST reference the error message
- **AND** `aria-invalid="true"` MUST be set

---

### Requirement: Image Accessibility

All images SHALL have appropriate text alternatives.

#### Scenario: Informative images

- **WHEN** an image conveys information
- **THEN** `alt` text MUST describe the image content
- **AND** the description MUST be concise but complete

#### Scenario: Decorative images

- **WHEN** an image is purely decorative
- **THEN** `alt=""` MUST be used (empty string)
- **OR** the image MUST be in CSS as background-image
- **OR** `aria-hidden="true"` MUST be set

#### Scenario: Icon accessibility

- **WHEN** an icon is used
- **THEN** if decorative, it MUST have `aria-hidden="true"`
- **AND** if meaningful, it MUST have `role="img"` with `aria-label`
