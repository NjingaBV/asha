# Specification: Component Architecture

## MODIFIED Requirements

### Requirement: Generic Product Components

Product-related components SHALL be brand-agnostic and data-driven, not hardcoded to specific brands or products.

#### Scenario: No hardcoded brand names

- **WHEN** implementing product components
- **THEN** component code MUST NOT contain hardcoded brand names (Apple, Mac, iPhone, etc.)
- **AND** all product data MUST be passed via props
- **AND** examples in stories MUST use generic fictional products

#### Scenario: Data-driven product pages

- **WHEN** creating product page templates
- **THEN** templates MUST accept product data as props
- **AND** NOT have brand-specific conditional logic
- **AND** work with any product type (laptop, phone, tablet, etc.)

#### Scenario: Generic type definitions

- **WHEN** defining product types
- **THEN** types MUST use generic names (Product, ProductModel, ProductVariant)
- **AND** NOT use brand-specific names (Mac, iPhone, MacBookPro)
- **AND** be flexible enough for any product category

---

### Requirement: Template Generalization

Page templates SHALL be reusable across different brands and product types.

#### Scenario: ProductPage template

- **WHEN** using ProductPage template
- **THEN** it MUST replace the deprecated MacPage component
- **AND** accept generic product configuration
- **AND** support all product types via data props
- **AND** have no Apple-specific logic

#### Scenario: Product comparison templates

- **WHEN** building product comparison pages
- **THEN** ProductLineup/Comparison components MUST accept any products
- **AND** NOT assume Mac-specific sizing or attributes
- **AND** render based on product data structure

---

### Requirement: Example Data

Stories and documentation SHALL use generic example data, not real brand products.

#### Scenario: Fictional brand examples

- **WHEN** creating story examples
- **THEN** use fictional "Acme" brand or generic product names
- **AND** avoid using real product names (MacBook Pro, iPhone 15, etc.)
- **AND** create realistic but generic product catalogs

#### Scenario: Generic product attributes

- **WHEN** defining example products
- **THEN** use generic attributes (processor, storage, display size)
- **AND** avoid brand-specific attributes (M3 chip, A17 Bionic, etc.)
- **AND** maintain realistic product configurations
