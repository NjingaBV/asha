# Change: Refactor Component Library to Standard Atomic Design

## Why

The current component library has grown organically with brand-specific naming (e.g., `MacProductCarousel`, `WhyAppleSection`) and inconsistent categorization. This refactoring will:

1. **Remove brand references** - Make components generic and reusable across projects
2. **Standardize naming** - Follow industry-standard Atomic Design nomenclature
3. **Improve discoverability** - Clearer component names and organization
4. **Enable scaling** - Add missing foundational components for a complete design system

## What Changes

### BREAKING Changes

- **67 components** will be renamed, merged, or relocated
- **Import paths** will change from `$lib/components/[level]/` to `$lib/[level]/`
- **Props renamed** on some components for consistency

### Component Mapping Summary

| Current Count | New Count    | Action                          |
| ------------- | ------------ | ------------------------------- |
| 18 atoms      | 25 atoms     | +7 new, 5 renamed, 2 merged     |
| 22 molecules  | 20 molecules | 8 renamed, 6 merged, 2 promoted |
| 22 organisms  | 30 organisms | 12 renamed, 5 merged, 8 new     |
| 4 templates   | 8 templates  | 2 renamed, 4 new                |
| 1 page        | 0 pages      | Moved to routes                 |

### Key Renames

| Current              | New              | Reason                 |
| -------------------- | ---------------- | ---------------------- |
| `Paragraph`          | `Text`           | More generic           |
| `ColorDot`           | `ColorSwatch`    | Industry standard      |
| `SpecChip`           | `Chip`           | Remove brand reference |
| `Eyebrow`            | `Caption`        | More generic           |
| `NavigationBar`      | `Navbar`         | Shorter, standard      |
| `MacProductCarousel` | `CardCarousel`   | Remove brand reference |
| `WhyAppleSection`    | `FeatureSection` | Remove brand reference |
| `StickyProductNav`   | `ChapterNav`     | More generic           |

### Components to Delete

| Component                 | Reason                             |
| ------------------------- | ---------------------------------- |
| `FeatureCard` (molecules) | Duplicate of `Card` with icon slot |
| `HeroTile`                | Merge into `Hero` variant          |
| `Features`                | Redundant with `FeatureGrid`       |

### New Components to Add

| Component         | Level    | Purpose                       |
| ----------------- | -------- | ----------------------------- |
| `Avatar`          | atom     | User/product circular image   |
| `Toggle`          | atom     | Switch on/off                 |
| `Textarea`        | atom     | Multiline input               |
| `Select`          | atom     | Dropdown select               |
| `Checkbox`        | atom     | Checkbox input                |
| `Radio`           | atom     | Radio button                  |
| `Divider`         | atom     | Horizontal/vertical separator |
| `Spacer`          | atom     | Configurable spacing          |
| `Container`       | atom     | Max-width wrapper             |
| `Skeleton`        | atom     | Loading placeholder           |
| `NavLink`         | molecule | Nav item with badge           |
| `NavItem`         | molecule | Expandable nav item           |
| `Breadcrumb`      | molecule | Path breadcrumbs              |
| `SearchBar`       | molecule | Search input with icon        |
| `PriceTag`        | molecule | Price display                 |
| `Rating`          | molecule | Star rating                   |
| `Stat`            | molecule | Statistic display             |
| `Quote`           | molecule | Testimonial quote             |
| `Alert`           | molecule | Alert/notification            |
| `FormField`       | molecule | Label + input + error         |
| `Sidebar`         | organism | Sidebar navigation            |
| `FilterBar`       | organism | Filter/sort bar               |
| `Pagination`      | organism | Page navigation               |
| `PageHeader`      | organism | Page title + actions          |
| `SectionHeader`   | organism | Section title + CTA           |
| `IconCard`        | organism | Icon + text card              |
| `TestimonialCard` | organism | Quote card                    |
| `PricingCard`     | organism | Pricing tier card             |
| `IconGrid`        | organism | Grid of icon cards            |
| `List`            | organism | Generic list                  |
| `StatsSection`    | organism | Statistics section            |
| `Form`            | organism | Form wrapper                  |
| `Toast`           | organism | Toast notification            |
| `Tooltip`         | organism | Tooltip overlay               |
| `Dropdown`        | organism | Dropdown menu                 |
| `Drawer`          | organism | Slide-out panel               |
| `LayoutDefault`   | template | Standard layout               |
| `LayoutSidebar`   | template | Sidebar layout                |
| `LayoutDashboard` | template | Dashboard layout              |
| `ProductDetail`   | template | Product detail page           |
| `CategoryPage`    | template | Category listing              |
| `ArticlePage`     | template | Article/blog page             |
| `AuthPage`        | template | Auth form page                |

## Impact

- **Affected specs**: component-api, design-tokens, accessibility
- **Affected code**: All imports in stories, routes, templates
- **Migration effort**: High - requires updating all consumers
- **Breaking changes**: Yes - import paths and component names change

## Migration Strategy

1. Create new folder structure alongside existing
2. Migrate components one level at a time (atoms → molecules → organisms → templates)
3. Update stories incrementally
4. Provide migration script for import path updates
5. Remove old structure after verification
