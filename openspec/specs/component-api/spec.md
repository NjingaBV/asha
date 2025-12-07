# Specification: Component API Standards

## Overview

This specification defines the standardized props, variants, and API patterns that all Asha components MUST follow for consistency and predictability.

## Requirements

### Requirement: Standardized Prop Names

All components SHALL use consistent prop names for common functionality across the design system.

#### Scenario: CSS class prop naming

- **WHEN** a component accepts custom CSS classes
- **THEN** the prop MUST be named `class` (not `className`)
- **AND** it MUST have type `string` with default `''`

#### Scenario: Size prop naming

- **WHEN** a component has size variants
- **THEN** the prop MUST be named `size` (not `badgeSize`, `buttonSize`, etc.)
- **AND** values MUST be from: `'sm' | 'md' | 'lg'` unless documented otherwise

#### Scenario: Color scheme prop naming

- **WHEN** a component has semantic color variants
- **THEN** the prop MUST be named `tone` (not `color`)
- **AND** values MUST be from: `'primary' | 'secondary' | 'neutral' | 'success' | 'warning' | 'danger'`

#### Scenario: Visual style prop naming

- **WHEN** a component has visual style variants
- **THEN** the prop MUST be named `variant`
- **AND** standard values are: `'solid' | 'outline' | 'ghost'` with component-specific additions documented

---

### Requirement: Button Component API

The Button component SHALL provide a complete API for all common button use cases.

#### Scenario: Button props defined

- **WHEN** using the Button component
- **THEN** the following props MUST be available:
    - `variant`: `'solid' | 'outline' | 'ghost' | 'link'` (default: `'solid'`)
    - `tone`: `'primary' | 'secondary' | 'neutral' | 'danger' | 'success'` (default: `'primary'`)
    - `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
    - `disabled`: `boolean` (default: `false`)
    - `loading`: `boolean` (default: `false`)
    - `fullWidth`: `boolean` (default: `false`)

#### Scenario: Button link mode

- **WHEN** `href` prop is provided to Button
- **THEN** it MUST render as an `<a>` element
- **AND** support `target` prop with proper `rel` attributes for security

#### Scenario: Button slots

- **WHEN** using Button with icons
- **THEN** it MUST support `iconLeft` and `iconRight` snippet props
- **AND** `children` snippet for main content

---

### Requirement: Input Component API

The Input component SHALL provide a complete API for form text inputs with validation states.

#### Scenario: Input props defined

- **WHEN** using the Input component
- **THEN** the following props MUST be available:
    - `type`: standard HTML input types
    - `variant`: `'outline' | 'filled' | 'ghost'` (default: `'outline'`)
    - `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
    - `value`: `string` (bindable)
    - `label`: `string` for accessible labeling
    - `helperText`: `string` for additional context
    - `error`: `string` for error messages
    - `success`: `string` for success messages
    - `disabled`, `readonly`, `required`: `boolean`

#### Scenario: Input validation display

- **WHEN** `error` prop is provided
- **THEN** the input MUST display error styling
- **AND** the error message MUST be announced to screen readers

---

### Requirement: Badge Component API

The Badge component SHALL follow standardized props for consistency with other components.

#### Scenario: Badge props normalized

- **WHEN** using the Badge component
- **THEN** it MUST use `size` prop (not `badgeSize`)
- **AND** it MUST use `tone` prop (not `color`) with semantic values
- **AND** `variant` prop for visual styles: `'solid' | 'outline' | 'ghost'`

---

### Requirement: Link Component API

The Link component SHALL provide consistent navigation with proper accessibility.

#### Scenario: Link props defined

- **WHEN** using the Link component
- **THEN** it MUST use `class` prop (not `className`)
- **AND** `variant` values MUST be: `'default' | 'cta' | 'subtle' | 'nav'`
- **AND** support `ariaLabel` for accessibility

#### Scenario: External link handling

- **WHEN** `target="_blank"` is set
- **THEN** `rel="noopener noreferrer"` MUST be automatically added
- **AND** an external link indicator SHOULD be available

---

### Requirement: Modal Component API

The Modal component SHALL provide a complete dialog API with proper focus management.

#### Scenario: Modal props defined

- **WHEN** using the Modal component
- **THEN** the following props MUST be available:
    - `open`: `boolean` (bindable)
    - `title`: `string` for dialog title
    - `description`: `string` for dialog description
    - `size`: `'sm' | 'md' | 'lg' | 'xl' | 'full'`
    - `closeOnEscape`: `boolean` (default: `true`)
    - `closeOnBackdrop`: `boolean` (default: `true`)
    - `hideCloseButton`: `boolean` (default: `false`)

#### Scenario: Modal slots

- **WHEN** composing Modal content
- **THEN** it MUST support `header`, `children`, and `footer` snippet props

---

### Requirement: Tabs Component API

The Tabs component SHALL provide a complete tabbed interface with keyboard navigation.

#### Scenario: Tabs props defined

- **WHEN** using the Tabs component
- **THEN** the following props MUST be available:
    - `tabs`: `Tab[]` (required)
    - `defaultActiveId`: `string`
    - `variant`: `'underline' | 'pills' | 'enclosed'`
    - `size`: `'sm' | 'md' | 'lg'`
    - `orientation`: `'horizontal' | 'vertical'`
    - `activateOnFocus`: `boolean` (default: `true`)
    - `fullWidth`: `boolean`

#### Scenario: Tab interface

- **WHEN** defining tabs
- **THEN** each Tab MUST have: `id` (string), `label` (string), optional `disabled` (boolean)

---

### Requirement: ColorPicker/ColorDot Component API

Selection components SHALL use radio button patterns with proper accessibility.

#### Scenario: ColorDot props

- **WHEN** using ColorDot
- **THEN** it MUST support:
    - `color`: `string` (required)
    - `selected`: `boolean`
    - `size`: `'sm' | 'md' | 'lg'` or `number`
    - `label`: `string` for accessibility
    - `ariaLabel`: `string` override

#### Scenario: ColorPicker group

- **WHEN** using ColorPicker
- **THEN** it MUST use `role="radiogroup"` pattern
- **AND** support `options`: `string[]` and `onChange` callback

---

### Requirement: Component Events

All interactive components SHALL use consistent event naming and typing.

#### Scenario: Standard event props

- **WHEN** a component emits events
- **THEN** event handlers MUST use `on{eventname}` pattern (Svelte convention)
- **AND** common events include: `onclick`, `onfocus`, `onblur`, `onchange`

#### Scenario: Component-specific events

- **WHEN** a component has custom events
- **THEN** they MUST be named descriptively: `onopen`, `onclose`, `onselect`, `ontoggle`

---

### Requirement: TypeScript Types

All components SHALL export TypeScript interfaces for their props.

#### Scenario: Props interface exported

- **WHEN** a component defines props
- **THEN** a `{ComponentName}Props` interface MUST be exported
- **AND** all prop types MUST be explicitly defined

#### Scenario: Prop definitions

- **WHEN** defining component props
- **THEN** a `propDefs` export SHOULD be available for documentation tools
- **AND** it MUST include type, default value, and description for each prop

---

### Requirement: Component Colors from Tokens

All components SHALL use design system tokens for colors, not hardcoded values.

#### Scenario: No hardcoded colors

- **WHEN** implementing component styles
- **THEN** colors MUST reference design tokens (e.g., `text-fg`, `bg-accent`)
- **AND** hardcoded Tailwind colors (e.g., `text-blue-600`) MUST NOT be used

#### Scenario: Token mapping

- **WHEN** mapping semantic colors
- **THEN** the following mappings MUST apply:
    - Primary/accent: `--ds-color-accent` / `bg-accent`, `text-accent`
    - Secondary: `--ds-color-secondary` / `bg-secondary`
    - Success: `--ds-color-success` / `bg-success`, `text-success`
    - Warning: `--ds-color-warning` / `bg-warning`
    - Danger/Error: `--ds-color-error` / `bg-error`, `text-error`
    - Neutral: `--ds-color-fg-muted` / `text-fg-muted`
