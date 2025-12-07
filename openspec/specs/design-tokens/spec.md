# Specification: Design Tokens

## Overview

The design token system provides the foundational visual language for the Asha design system. Tokens are CSS custom properties that ensure consistency across all components and enable theming.

## Requirements

### Requirement: Token Naming Convention

The system SHALL use a consistent naming pattern for all design tokens following the structure `--ds-{category}-{property}[-{variant}][-{state}]`.

#### Scenario: Color token naming

- **WHEN** defining a color token
- **THEN** it MUST follow the pattern `--ds-color-{semantic-name}[-{variant}]`
- **AND** semantic names MUST be: bg, fg, surface, border, accent, secondary, success, warning, error, info

#### Scenario: Spacing token naming

- **WHEN** defining a spacing token
- **THEN** it MUST follow the pattern `--ds-space-{scale}` where scale is a number on the 4pt grid

#### Scenario: Typography token naming

- **WHEN** defining a typography token
- **THEN** it MUST use category prefixes: `--ds-font-size-`, `--ds-font-weight-`, `--ds-leading-`, `--ds-tracking-`

---

### Requirement: Color Token Architecture

The system SHALL define semantic color tokens for backgrounds, foregrounds, accents, and states that automatically adapt between light and dark themes.

#### Scenario: Background colors defined

- **WHEN** the token system is loaded
- **THEN** the following background tokens MUST be available:
    - `--ds-color-bg` (primary background)
    - `--ds-color-bg-subtle` (secondary background)
    - `--ds-color-bg-muted` (tertiary background)
    - `--ds-color-bg-elevated` (elevated surfaces)
    - `--ds-color-bg-overlay` (overlays)

#### Scenario: Foreground colors defined

- **WHEN** the token system is loaded
- **THEN** the following foreground tokens MUST be available:
    - `--ds-color-fg` (primary text)
    - `--ds-color-fg-muted` (secondary text)
    - `--ds-color-fg-subtle` (tertiary text)
    - `--ds-color-fg-on-accent` (text on accent backgrounds)

#### Scenario: Accent colors with states

- **WHEN** defining accent colors
- **THEN** each accent MUST have: default, hover, active, and subtle variants
- **AND** this applies to both `--ds-color-accent` and `--ds-color-secondary`

#### Scenario: State colors defined

- **WHEN** the token system is loaded
- **THEN** state colors MUST include: success, warning, error, info
- **AND** each state color MUST have a subtle variant for backgrounds

---

### Requirement: Token Placement in CSS

All design tokens SHALL be defined in the `:root` selector for global availability. Theme-specific overrides SHALL be defined in `[data-theme]` selectors.

#### Scenario: Base tokens in root

- **WHEN** tokens are defined in `base.css`
- **THEN** all non-theme-specific tokens (spacing, typography, motion, z-index) MUST be in `:root`
- **AND** they MUST NOT be nested inside theme selectors

#### Scenario: Theme overrides structured

- **WHEN** dark theme tokens are defined
- **THEN** they MUST be in `[data-theme="dark"]` selector
- **AND** they MUST also support `@media (prefers-color-scheme: dark)` with `:not([data-theme="light"])` escape hatch

#### Scenario: No duplicate definitions

- **WHEN** tokens are defined across multiple files
- **THEN** each token MUST have a single source of truth
- **AND** `dark.css` MUST be the authoritative source for dark theme values

---

### Requirement: Spacing Scale

The system SHALL provide a spacing scale based on a 4pt grid system for consistent component spacing.

#### Scenario: Complete spacing scale

- **WHEN** the spacing scale is defined
- **THEN** it MUST include: 0, 1 (4px), 2 (8px), 3 (12px), 4 (16px), 5 (20px), 6 (24px), 8 (32px), 10 (40px), 12 (48px), 16 (64px), 20 (80px), 24 (96px), 32 (128px)

#### Scenario: Touch target spacing

- **WHEN** defining component sizing
- **THEN** `--ds-space-11` (44px) MUST be available for minimum touch target compliance

---

### Requirement: Typography Scale

The system SHALL provide a typography scale with font sizes, weights, line heights, and letter spacing tokens.

#### Scenario: Font size scale

- **WHEN** the typography scale is defined
- **THEN** font sizes MUST include: xs (12px), sm (14px), base (16px), lg (18px), xl (20px), 2xl (24px), 3xl (32px), 4xl (40px), 5xl (56px), 6xl (72px)

#### Scenario: Font weight scale

- **WHEN** the weight scale is defined
- **THEN** weights MUST include: normal (400), medium (500), semibold (600), bold (700)

#### Scenario: Line height scale

- **WHEN** the line height scale is defined
- **THEN** it MUST include: none (1), tight (1.15), snug (1.3), normal (1.5), relaxed (1.625), loose (1.75)

---

### Requirement: Motion Tokens

The system SHALL provide motion tokens for consistent animations that respect user preferences.

#### Scenario: Duration scale

- **WHEN** motion tokens are defined
- **THEN** durations MUST include: instant (0ms), fast (120ms), normal (200ms), slow (280ms), slower (400ms)

#### Scenario: Easing functions

- **WHEN** easing tokens are defined
- **THEN** they MUST include: linear, ease-in, ease-out, ease-in-out, standard, spring

#### Scenario: Reduced motion support

- **WHEN** `prefers-reduced-motion: reduce` is active
- **THEN** all duration tokens MUST resolve to 0ms

---

### Requirement: Z-Index Scale

The system SHALL provide a z-index scale with defined layers for predictable stacking.

#### Scenario: Z-index layers

- **WHEN** the z-index scale is defined
- **THEN** it MUST include in ascending order: base (0), dropdown (100), sticky (200), fixed (300), overlay (400), modal (500), popover (600), tooltip (700), toast (800)

---

### Requirement: Component-Specific Tokens

The system SHALL provide tokens for common component dimensions and behaviors.

#### Scenario: Button tokens

- **WHEN** button tokens are defined
- **THEN** they MUST include heights (sm: 32px, md: 40px, lg: 48px) and horizontal padding

#### Scenario: Input tokens

- **WHEN** input tokens are defined
- **THEN** they MUST include heights matching button scale and consistent padding

#### Scenario: Focus ring tokens

- **WHEN** focus ring tokens are defined
- **THEN** they MUST include: ring width (2px), ring offset (2px), ring color (accent with opacity)

---

### Requirement: Tailwind Integration

All design tokens SHALL be mapped to Tailwind CSS utilities for consistent usage.

#### Scenario: Color utilities

- **WHEN** using Tailwind color utilities
- **THEN** semantic colors MUST be available: `bg-bg`, `text-fg`, `border-border`, `bg-accent`, etc.

#### Scenario: Alpha channel support

- **WHEN** defining color tokens for Tailwind
- **THEN** they MUST use RGB space-separated format to enable opacity modifiers (`bg-accent/50`)
