# Accessibility Spec Changes

## MODIFIED Requirements

### Requirement: Touch Target Size

All interactive elements SHALL meet WCAG 2.5.5 Target Size requirements with minimum 44x44 CSS pixels.

#### Scenario: Button touch targets

- **WHEN** a Button component is rendered in any size
- **THEN** the clickable area MUST be at least 44x44 pixels
- **AND** the `sm` size MUST use `h-11` (44px) not `h-8` (32px)
- **AND** the `md` size MUST use `h-11` (44px) minimum
- **AND** the `lg` size MUST use `h-12` (48px) minimum

#### Scenario: Input touch targets

- **WHEN** an Input component is rendered in any size
- **THEN** the input field height MUST be at least 44px
- **AND** the `sm` size MUST use `h-11` (44px) not `h-8` (32px)
- **AND** the `md` size MUST use `h-11` (44px) not `h-10` (40px)
- **AND** the `lg` size MUST use `h-12` (48px) minimum

#### Scenario: Touch target verification

- **WHEN** components are tested for accessibility
- **THEN** automated tools MUST verify touch target sizes
- **AND** manual testing MUST confirm actual clickable areas
- **AND** responsive views MUST maintain minimum sizes
