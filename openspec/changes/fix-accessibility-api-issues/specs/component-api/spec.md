# Component API Spec Changes

## MODIFIED Requirements

### Requirement: Standardized Prop Names

All components SHALL use consistent prop names for common functionality across the design system.

#### Scenario: Size prop values consistency

- **WHEN** a component has size variants
- **THEN** the prop MUST be named `size` (not `badgeSize`, `buttonSize`, etc.)
- **AND** values MUST be from: `'sm' | 'md' | 'lg'` (not `'base'`)
- **AND** the default MUST be `'md'` for consistency

#### Scenario: Badge size standardization

- **WHEN** using the Badge component
- **THEN** size prop MUST accept `'sm' | 'md' | 'lg'`
- **AND** `size="base"` MUST NOT be accepted (removed)
- **AND** default value MUST be `'md'`

### Requirement: Component Colors from Tokens

All components SHALL use design system tokens for colors, not hardcoded values.

#### Scenario: Badge color tokens

- **WHEN** Badge renders in any tone/variant
- **THEN** all colors MUST reference design tokens
- **AND** `text-white` MUST be replaced with `text-fg-on-accent`
- **AND** background colors MUST use semantic tokens (`bg-accent`, `bg-success`, etc.)

#### Scenario: Token usage validation

- **WHEN** reviewing component implementations
- **THEN** hardcoded Tailwind colors (e.g., `text-white`, `bg-blue-600`) MUST NOT be present
- **AND** all colors MUST use design system semantic tokens
