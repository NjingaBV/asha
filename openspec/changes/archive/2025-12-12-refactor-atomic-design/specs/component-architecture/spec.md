## ADDED Requirements

### Requirement: Standard Atomic Design Structure

The component library SHALL follow a flat directory structure with components organized by atomic design level.

#### Scenario: Directory structure

- **WHEN** a developer explores the component library
- **THEN** they find components organized in `src/lib/{atoms,molecules,organisms,templates,tokens}/`
- **AND** each level has an `index.ts` exporting all components

### Requirement: Generic Component Naming

All components SHALL use generic, brand-agnostic names that describe their function rather than their use case.

#### Scenario: No brand references

- **WHEN** reviewing component names
- **THEN** no component contains brand names like "Mac", "Apple", "iPhone"
- **AND** names describe the component's structure (e.g., `CardCarousel` not `MacProductCarousel`)

### Requirement: Standardized Component Props

All components SHALL follow consistent prop naming conventions.

#### Scenario: Prop consistency

- **WHEN** using any component
- **THEN** similar props use the same names across components:
    - `class` for custom CSS classes
    - `variant` for visual variations
    - `size` for sizing (sm, md, lg)
    - `tone` for semantic colors (primary, neutral, success, warning, danger)
    - `disabled` for disabled state
    - `children` for slot content

### Requirement: Centralized Design Tokens

Design tokens SHALL be organized in a dedicated `tokens/` directory with semantic naming.

#### Scenario: Token organization

- **WHEN** accessing design tokens
- **THEN** they are available in `src/lib/tokens/`
- **AND** split into logical files: `colors.css`, `typography.css`, `spacing.css`
- **AND** support both light and dark themes

### Requirement: Complete Atom Set

The library SHALL provide a complete set of foundational atoms for building UIs.

#### Scenario: Required atoms exist

- **WHEN** building a UI
- **THEN** the following atoms are available:
    - Typography: Heading, Text, Label, Badge, Caption
    - Media: Icon, Image, Video, Avatar, Logo
    - Interactive: Button, Link, IconButton, Chip, Toggle, ColorSwatch
    - Form: Input, Textarea, Select, Checkbox, Radio
    - Layout: Divider, Spacer, Container, Skeleton

### Requirement: Molecule Composition

Molecules SHALL be composed of atoms and provide common UI patterns.

#### Scenario: Required molecules exist

- **WHEN** building common UI patterns
- **THEN** the following molecules are available:
    - Navigation: NavLink, NavItem, Breadcrumb, TabItem
    - Actions: ButtonGroup, CTA, SearchBar
    - Display: ColorPicker, PriceTag, Rating, Stat
    - Content: IconText, MediaCaption, Quote, Alert
    - Form: FormField, InputGroup

### Requirement: Organism Complexity

Organisms SHALL be self-contained, complex UI sections composed of molecules and atoms.

#### Scenario: Required organisms exist

- **WHEN** building page sections
- **THEN** the following organisms are available:
    - Navigation: Navbar, Sidebar, ChapterNav, FilterBar, Pagination
    - Headers: PageHeader, SectionHeader, Hero, HeroBanner
    - Cards: Card, ProductCard, FeatureCard, IconCard, TestimonialCard, PricingCard
    - Grids: ProductGrid, FeatureGrid, IconGrid, CardCarousel, List
    - Sections: FeatureSection, ComparisonSection, CTASection, StatsSection
    - Forms: Form
    - Footer: Footer, FooterLinkGroup
    - Overlays: Modal, Drawer, Toast, Tooltip, Dropdown

### Requirement: Template Layouts

Templates SHALL provide complete page layouts that can be populated with content.

#### Scenario: Required templates exist

- **WHEN** creating pages
- **THEN** the following templates are available:
    - Layouts: LayoutDefault, LayoutSidebar, LayoutDashboard
    - Pages: ProductLanding, ProductDetail, CategoryPage, ArticlePage, AuthPage
