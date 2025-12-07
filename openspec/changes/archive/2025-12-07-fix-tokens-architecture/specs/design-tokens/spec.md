## MODIFIED Requirements

### Requirement: Token Placement in CSS

All design tokens SHALL be defined in the `:root` selector for global availability. Theme-specific overrides SHALL be defined in `[data-theme]` selectors.

#### Scenario: Base tokens in root

- **WHEN** tokens are defined in `base.css`
- **THEN** all non-theme-specific tokens (spacing, typography, motion, z-index, radius, opacity, border-width, component sizes) MUST be in `:root`
- **AND** they MUST NOT be nested inside theme selectors
- **AND** the file structure MUST be: `:root` for base tokens, then theme overrides for color-only changes

#### Scenario: Theme overrides structured

- **WHEN** dark theme tokens are defined
- **THEN** they MUST be in `[data-theme="dark"]` selector in `dark.css`
- **AND** they MUST also support `@media (prefers-color-scheme: dark)` with `:not([data-theme="light"])` escape hatch
- **AND** base.css MUST NOT contain any `[data-theme="dark"]` blocks

#### Scenario: No duplicate definitions

- **WHEN** tokens are defined across multiple files
- **THEN** each token MUST have a single source of truth
- **AND** `dark.css` MUST be the authoritative source for dark theme color values
- **AND** `base.css` MUST be the authoritative source for non-color tokens

---

## ADDED Requirements

### Requirement: Touch Target Token

The system SHALL provide a dedicated token for minimum touch target size to ensure WCAG 2.5.5 compliance.

#### Scenario: Touch target token defined

- **WHEN** the token system is loaded
- **THEN** `--ds-touch-target-min: 44px` MUST be available
- **AND** Tailwind utilities `min-w-touch` and `min-h-touch` MUST reference this token

#### Scenario: Touch target usage

- **WHEN** implementing interactive elements smaller than 44px visually
- **THEN** the clickable area MUST use `min-w-touch min-h-touch` to meet accessibility requirements

---

### Requirement: Secondary Subtle Color

The secondary accent color SHALL have a subtle variant for consistent background usage.

#### Scenario: Secondary subtle defined

- **WHEN** using secondary color for subtle backgrounds
- **THEN** `--ds-color-secondary-subtle` MUST be available
- **AND** light mode value: subtle teal background
- **AND** dark mode value: dark teal background

---

### Requirement: Extended Spacing Scale

The spacing scale SHALL include additional values for edge cases and accessibility compliance.

#### Scenario: Extended spacing values

- **WHEN** the spacing scale is defined
- **THEN** it MUST additionally include:
    - `--ds-space-7`: 1.75rem (28px)
    - `--ds-space-9`: 2.25rem (36px)
    - `--ds-space-11`: 2.75rem (44px) - matches touch target
    - `--ds-space-14`: 3.5rem (56px)
