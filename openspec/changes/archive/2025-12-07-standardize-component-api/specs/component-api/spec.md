## MODIFIED Requirements

### Requirement: Standardized Prop Names

All components SHALL use consistent prop names for common functionality across the design system.

#### Scenario: CSS class prop naming

- **WHEN** a component accepts custom CSS classes
- **THEN** the prop MUST be named `class` (not `className`)
- **AND** it MUST have type `string` with default `''`
- **AND** the following components MUST be updated: Link, Card, Label, Image, NavigationBar

#### Scenario: Size prop naming

- **WHEN** a component has size variants
- **THEN** the prop MUST be named `size` (not `badgeSize`, `buttonSize`, etc.)
- **AND** values MUST be from: `'sm' | 'md' | 'lg'` unless documented otherwise
- **AND** Badge component MUST rename `badgeSize` to `size`

#### Scenario: Color scheme prop naming

- **WHEN** a component has semantic color variants
- **THEN** the prop MUST be named `tone` (not `color`)
- **AND** values MUST be from: `'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger'`
- **AND** the following components MUST be updated: Badge, Label

---

### Requirement: Badge Component API

The Badge component SHALL follow standardized props for consistency with other components.

#### Scenario: Badge props normalized

- **WHEN** using the Badge component
- **THEN** it MUST use `size` prop (not `badgeSize`) with values `'sm' | 'md' | 'lg'`
- **AND** it MUST use `tone` prop (not `color`) with semantic values
- **AND** `variant` prop for visual styles: `'solid' | 'outline' | 'ghost'`
- **AND** it MUST export `BadgeProps` TypeScript interface

#### Scenario: Badge color mapping

- **WHEN** migrating from old `color` values
- **THEN** the mapping MUST be:
    - `blue` -> `primary`
    - `slate` -> `neutral`
    - `emerald`, `green` -> `success`
    - `amber`, `orange` -> `warning`
    - `red` -> `danger`
    - `purple` -> `secondary`

---

### Requirement: Link Component API

The Link component SHALL provide consistent navigation with proper accessibility.

#### Scenario: Link props defined

- **WHEN** using the Link component
- **THEN** it MUST use `class` prop (not `className`)
- **AND** `variant` values MUST be: `'default' | 'cta' | 'subtle' | 'nav'`
- **AND** support `ariaLabel` for accessibility
- **AND** it MUST export `LinkProps` TypeScript interface

#### Scenario: Link focus visible

- **WHEN** Link receives keyboard focus
- **THEN** it MUST display a visible focus ring using `focus-visible:ring-2 focus-visible:ring-accent`

---

### Requirement: Component Colors from Tokens

All components SHALL use design system tokens for colors, not hardcoded values.

#### Scenario: No hardcoded colors

- **WHEN** implementing component styles
- **THEN** colors MUST reference design tokens (e.g., `text-fg`, `bg-accent`)
- **AND** hardcoded Tailwind colors (e.g., `text-blue-600`, `bg-slate-600`) MUST NOT be used
- **AND** the following components MUST be migrated: Badge, Link, Label, Card, Hero, Footer, Header, Feature, Eyebrow, PromoBadge, SpecChip, ColorPicker, Player, NavigationBar, ColorDot, Hamburger

#### Scenario: Token mapping

- **WHEN** mapping semantic colors
- **THEN** the following mappings MUST apply:
    - `text-blue-600` -> `text-accent`
    - `text-slate-600`, `text-gray-600` -> `text-fg-muted`
    - `text-slate-900` -> `text-fg`
    - `bg-white` -> `bg-bg`
    - `bg-gray-100`, `bg-slate-50` -> `bg-bg-subtle`
    - `border-gray-200` -> `border-border`
    - `ring-blue-500` -> `ring-accent`
