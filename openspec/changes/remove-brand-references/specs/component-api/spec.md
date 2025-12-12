# Specification: Component API Standards

## MODIFIED Requirements

### Requirement: Product Component Props

Product components SHALL use generic prop names that work for any brand or product type.

#### Scenario: ProductPage props

- **WHEN** using ProductPage component
- **THEN** it MUST accept these generic props:
    - `product`: Product (required) - Full product configuration
    - `variants`: ProductVariant[] - Available product variants
    - `features`: Feature[] - Product features
    - `specs`: Spec[] - Technical specifications
- **AND** NOT have Mac-specific props like `macModel` or `chipType`

#### Scenario: ProductCard props

- **WHEN** using ProductCard component
- **THEN** it MUST accept generic product data
- **AND** NOT assume Apple product structure
- **AND** render any product type via data props

#### Scenario: ColorPicker props

- **WHEN** using ColorPicker for products
- **THEN** color options MUST be data-driven
- **AND** NOT hardcoded to iPhone/Mac colors
- **AND** accept generic ColorOption[] array

---

### Requirement: Deprecated Component API

Deprecated brand-specific components SHALL maintain backward compatibility with clear migration paths.

#### Scenario: MacPage deprecation

- **WHEN** MacPage component is used
- **THEN** it MUST display a deprecation warning in development
- **AND** internally delegate to ProductPage
- **AND** map old props to new generic props
- **AND** continue to work until removal version

#### Scenario: Deprecation timeline

- **WHEN** components are deprecated
- **THEN** deprecation notice MUST include removal version
- **AND** provide migration guide link
- **AND** suggest alternative component usage
