# Tasks: Add Comprehensive Testing Coverage

## Phase 1: Atoms Testing (28 components) ✅ IN PROGRESS

### Priority 1: Core Interactive Atoms (6 components)

- [ ] 1.1 **Button** - Test all variants (solid/outline/ghost), states (disabled/loading), keyboard activation
- [ ] 1.2 **Input** - Test typing, validation states (error/success), keyboard events, ARIA
- [ ] 1.3 **Checkbox** - Test checked/unchecked, indeterminate, keyboard (Space), ARIA
- [ ] 1.4 **Radio** - Test selection, keyboard (Arrow keys), radio group behavior
- [ ] 1.5 **Select** - Test option selection, keyboard navigation, ARIA combobox
- [ ] 1.6 **Toggle** - Test on/off states, keyboard (Space), ARIA switch

### Priority 2: Form & Input Atoms (7 components)

- [ ] 1.7 **Textarea** - Test multiline input, resize, character count
- [ ] 1.8 **Label** - Test association with inputs (for/id)
- [ ] 1.9 **Link** - Test navigation, variants, external link behavior
- [ ] 1.10 **IconButton** - Test click, hover states, accessible name
- [ ] 1.11 **Badge** - Test rendering, variants (tones/sizes)
- [ ] 1.12 **Chip** - Test rendering, dismissible behavior
- [ ] 1.13 **ColorSwatch** - Test selection, accessible color names

### Priority 3: Display Atoms (15 components)

- [ ] 1.14 **Heading** - Test semantic HTML (h1-h6), hierarchy
- [ ] 1.15 **Text** - Test rendering, variants (sizes/weights)
- [ ] 1.16 **Caption** - Test rendering, styling
- [ ] 1.17 **Icon** - Test rendering, sizes, ARIA hidden
- [ ] 1.18 **Image** - Test src loading, alt text, lazy loading
- [ ] 1.19 **Avatar** - Test rendering, sizes, fallback text
- [ ] 1.20 **Logo** - Test rendering, alt text
- [ ] 1.21 **Video** - Test rendering, controls, accessibility
- [ ] 1.22 **Divider** - Test rendering, orientation (horizontal/vertical)
- [ ] 1.23 **Spacer** - Test rendering, spacing values
- [ ] 1.24 **Container** - Test max-width, padding
- [ ] 1.25 **Skeleton** - Test rendering, loading states
- [ ] 1.26 **SkipLink** - Test focus, visibility, navigation
- [ ] 1.27 **Linkable** - Test wrapper behavior, href passing
- [ ] 1.28 Verify all atoms have tests and pass

---

## Phase 2: Molecules Testing (31 components)

### Priority 1: Form Molecules (5 components)

- [ ] 2.1 **FormField** - Test label+input+error composition, validation display
- [ ] 2.2 **InputGroup** - Test input with icons/buttons, composition
- [ ] 2.3 **SearchBar** - Test search input with icon, submission
- [ ] 2.4 **Alert** - Test variants (success/warning/error), dismissible
- [ ] 2.5 **Rating** - Test star selection, keyboard navigation

### Priority 2: Navigation Molecules (6 components)

- [ ] 2.6 **NavigationBar** - Test nav items, active state
- [ ] 2.7 **NavItem** - Test expandable navigation, keyboard
- [ ] 2.8 **NavLink** - Test link with badge, active state
- [ ] 2.9 **Breadcrumb** - Test navigation path, separators
- [ ] 2.10 **ChapterNav** - Test sticky navigation, scrolling
- [ ] 2.11 **Tabs** - Test tab selection, keyboard (Arrow keys), ARIA tablist

### Priority 3: Content Molecules (10 components)

- [ ] 2.12 **Card** - Test variants, hover states, clickable cards
- [ ] 2.13 **ComparisonCard** - Test product comparison display
- [ ] 2.14 **ProductBadge** - Test badge rendering on products
- [ ] 2.15 **Tile** - Test tile rendering, hover effects
- [ ] 2.16 **Quote** - Test quote rendering, attribution
- [ ] 2.17 **Stat** - Test statistic display, formatting
- [ ] 2.18 **PriceTag** - Test price formatting, currency
- [ ] 2.19 **MediaCaption** - Test caption with media
- [ ] 2.20 **SpecGrid** - Test spec table rendering
- [ ] 2.21 **PromoStrip** - Test promo banner rendering

### Priority 4: Interactive Molecules (10 components)

- [ ] 2.22 **Modal** - Test open/close, focus trap, Escape key, backdrop click
- [ ] 2.23 **ColorPicker** - Test color selection, radio group pattern
- [ ] 2.24 **ButtonGroup** - Test button group, selection state
- [ ] 2.25 **CTA** - Test call-to-action rendering, link/button
- [ ] 2.26 **IconText** - Test icon+text composition
- [ ] 2.27 **Player** - Test video/audio player controls
- [ ] 2.28 **Youtube** - Test YouTube embed, iframe
- [ ] 2.29 **CarouselControls** - Test prev/next buttons, keyboard
- [ ] 2.30 **TabItem** - Test individual tab behavior
- [ ] 2.31 Verify all molecules have tests and pass

---

## Phase 3: Organisms Testing (37 components)

### Priority 1: Navigation Organisms (6 components)

- [ ] 3.1 **Navbar** - Test full navigation bar, mobile menu
- [ ] 3.2 **Footer** - Test footer links, sections
- [ ] 3.3 **FooterLinkGroup** - Test footer link grouping
- [ ] 3.4 **Sidebar** - Test sidebar navigation, collapse
- [ ] 3.5 **StickyNav** - Test sticky behavior, scrolling
- [ ] 3.6 **FilterBar** - Test filter options, selection

### Priority 2: Hero Organisms (5 components)

- [x] 3.7 **Hero** - Test hero variants, CTA buttons
- [x] 3.8 **HeroBanner** - Test banner with video/image
- [x] 3.9 **HeroTile** - Test hero tile layout
- [x] 3.10 **PageHeader** - Test page title, breadcrumbs
- [x] 3.11 **SectionHeader** - Test section title, CTA

### Priority 3: Content Display Organisms (11 components)

- [ ] 3.12 **Carousel** - Test slide navigation, auto-play, keyboard
- [ ] 3.13 **CardCarousel** - Test card carousel, infinite scroll
- [ ] 3.14 **ProductGrid** - Test product grid layout, filtering
- [ ] 3.15 **ProductLineup** - Test product comparison lineup
- [ ] 3.16 **ProductCard** - Test product card, hover effects
- [ ] 3.17 **IconGrid** - Test icon grid layout
- [ ] 3.18 **IconCard** - Test icon card rendering
- [ ] 3.19 **List** - Test list rendering, variants
- [ ] 3.20 **Showcase** - Test showcase layout
- [ ] 3.21 **Slogan** - Test slogan rendering, animation
- [ ] 3.22 **TextAnimation** - Test text animation effects

### Priority 4: Feature Organisms (8 components)

- [x] 3.23 **FeatureSection** - Test feature section layout
- [x] 3.24 **FeatureDiscovery** - Test feature discovery flow
- [x] 3.25 **CTASection** - Test CTA section, multiple CTAs
- [x] 3.26 **Comparison** - Test comparison table
- [x] 3.27 **ComparisonSection** - Test comparison section
- [x] 3.28 **StatsSection** - Test statistics section
- [x] 3.29 **TestimonialCard** - Test testimonial display
- [x] 3.30 **PricingCard** - Test pricing card, features

### Priority 5: Interactive Organisms (7 components)

- [ ] 3.31 **Form** - Test form submission, validation
- [ ] 3.32 **Dropdown** - Test dropdown menu, keyboard navigation
- [ ] 3.33 **Drawer** - Test drawer open/close, focus trap
- [ ] 3.34 **Toast** - Test toast notifications, auto-dismiss
- [ ] 3.35 **Tooltip** - Test tooltip display, hover/focus
- [ ] 3.36 **Pagination** - Test page navigation, keyboard
- [ ] 3.37 Verify all organisms have tests and pass

---

## Phase 4: Templates Testing (12 components)

### Layout Templates (3 components)

- [ ] 4.1 **LayoutDefault** - Test default layout composition
- [ ] 4.2 **LayoutSidebar** - Test sidebar layout, responsive
- [ ] 4.3 **LayoutDashboard** - Test dashboard layout

### Page Templates (8 components)

- [ ] 4.4 **ProductLanding** - Test product landing page flow
- [ ] 4.5 **ProductFamilyLanding** - Test product family page
- [ ] 4.6 **ProductDetail** - Test product detail page
- [ ] 4.7 **CategoryPage** - Test category listing page
- [ ] 4.8 **ArticlePage** - Test article/blog page
- [ ] 4.9 **AuthPage** - Test authentication page
- [ ] 4.10 **MacPage** - Test Mac-specific page (to be genericized)
- [ ] 4.11 **Shelf** - Test shelf layout

### Final Verification (1 task)

- [ ] 4.12 Verify all templates have tests and pass

---

## Phase 5: Infrastructure & CI/CD

### Testing Infrastructure (5 tasks)

- [ ] 5.1 Create shared test utilities (`src/stories/utils/test-helpers.ts`)
- [ ] 5.2 Add accessibility test helper functions
- [ ] 5.3 Configure Storybook test-runner for CI
- [ ] 5.4 Add test coverage reporting
- [ ] 5.5 Document testing patterns in CONTRIBUTING.md

### CI/CD Integration (4 tasks)

- [ ] 5.6 Update GitHub Actions workflow to run Storybook tests
- [ ] 5.7 Add Chromatic for visual regression (optional)
- [ ] 5.8 Add test status badge to README
- [ ] 5.9 Configure pre-commit hooks for tests

---

## Phase 6: Documentation & Training

### Documentation (3 tasks)

- [ ] 6.1 Update TESTING_STRATEGY.md with final patterns
- [ ] 6.2 Create video walkthrough of testing approach
- [ ] 6.3 Add testing examples to component docs

### Team Training (2 tasks)

- [ ] 6.4 Conduct team training session on testing
- [ ] 6.5 Create testing checklist for new components

---

## Final Verification

- [ ] 7.1 Run full test suite and verify 100% pass rate
- [ ] 7.2 Verify accessibility tests cover all interactive components
- [ ] 7.3 Review test coverage report
- [ ] 7.4 Update project documentation with test metrics
- [ ] 7.5 Archive this OpenSpec change
