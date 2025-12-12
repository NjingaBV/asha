## Phase 1: Migration Complete

### 1. Setup New Structure ✅

- [x] 1.1 Create new directory structure: `src/lib/{atoms,molecules,organisms,templates,pages,tokens}`
- [x] 1.2 Create index.ts exports for each level
- [x] 1.3 Copy design tokens to `tokens/`

### 2. Migrate Existing Components ✅

**Atoms migrated (15 components):**

- [x] Heading, Badge, Icon, Image, Button, Link, Input, Label, SkipLink, Linkable
- [x] Paragraph → Text (renamed)
- [x] ColorDot → ColorSwatch (renamed)
- [x] SpecChip → Chip (renamed)
- [x] Eyebrow → Caption (renamed)
- [x] Logo (moved from molecules)

**Molecules migrated (17 components):**

- [x] Card, ColorPicker, Tabs, Player, CarouselControls, Modal
- [x] ComparisonCard, SpecGrid, PromoStrip, NavigationBar, ChapterNav, Tile, Youtube
- [x] CTAGroup → CTA (renamed)
- [x] Feature → IconText (renamed)
- [x] FilterTabs → TabItem (renamed)
- [x] VariantSelector → ButtonGroup (renamed)

**Organisms migrated (21 components):**

- [x] Carousel, Comparison, FeatureGrid, FeatureSection, Footer, Hero
- [x] ProductGrid, ProductLineup, Showcase, FeatureDiscovery, HeroTile, Slogan, TextAnimation
- [x] MacProductCarousel → CardCarousel (renamed)
- [x] WhyAppleSection → CTASection (renamed)
- [x] StickyProductNav → StickyNav (renamed)
- [x] HelpMeChooseSection → ComparisonSection (renamed)
- [x] ProductHeader → PageHeader (renamed)
- [x] Header → Navbar (renamed)
- [x] VideoHero → HeroBanner (renamed)
- [x] ProductCard (moved from molecules)

**Templates migrated (4 templates):**

- [x] LandingPage → ProductLanding (renamed)
- [x] ProductFamilyLanding (kept)
- [x] MacPage (kept for now)
- [x] Shelf (kept)

### 3. Update Imports ✅

- [x] Update all imports in new components
- [x] Update all story imports
- [x] Update main index.ts exports

### 4. Verification ✅

- [x] Run `pnpm check` - 0 errors
- [x] Run `pnpm lint` - 0 errors
- [x] Run `pnpm build` - success

---

## Phase 2: New Components ✅

### New Atoms Created (12 new) ✅

- [x] Avatar, Toggle, Textarea, Select, Checkbox, Radio
- [x] Divider, Spacer, Container, Skeleton, IconButton, Video

### New Molecules Created (13 new) ✅

- [x] NavLink, NavItem, Breadcrumb, SearchBar, PriceTag, Rating
- [x] Stat, Quote, Alert, FormField, InputGroup, MediaCaption, ProductBadge

### Verification ✅

- [x] Run `pnpm check` - 0 errors
- [x] Run `pnpm lint` - 0 errors

---

## Phase 3: New Organisms & Templates ✅

### Organisms Created (16 new) ✅

- [x] Sidebar, FilterBar, Pagination, SectionHeader, IconCard
- [x] TestimonialCard, PricingCard, IconGrid, List, StatsSection
- [x] Form, Toast, Tooltip, Dropdown, Drawer, FooterLinkGroup

### Templates Created (7 new) ✅

- [x] LayoutDefault, LayoutSidebar, LayoutDashboard
- [x] ProductDetail, CategoryPage, ArticlePage, AuthPage

### Verification ✅

- [x] Run `pnpm check` - 0 errors

---

## Phase 4: Cleanup ✅

### Components to Delete (after deprecation period) ✅

- [x] PromoBadge (story removed - component never existed in new structure)
- [x] Blob (story removed - decorative, not migrated)
- [x] PathLine (story removed - decorative, not migrated)
- [x] Hamburger (story removed - merged into IconButton conceptually)
- [x] AnimatedBlob (story removed - decorative, not migrated)
- [x] FeatureCard (story removed - deprecated, use Card)
- [x] FeatureItem (story removed - merged into IconText)
- [x] Feature (story removed - use FeatureSection)
- [x] FeatureGrid (removed - depended on non-existent FeatureCard)

### Directory Cleanup (after migration validated) ✅

- [x] Remove old `src/lib/components/` directory (done in previous session)
- [x] Remove old `src/lib/design-system/` directory (done in previous session)

### Verification ✅

- [x] Run `pnpm check` - 0 errors
- [x] Run `pnpm lint` - 0 errors
- [x] Run `pnpm build` - success

---

## Phase 5: Refinement & Guidelines ✅

### Documentation Audits ✅

- [x] Unify documentation language (Standardized to English for `Badge` and `Card`)
- [x] Audit Core Components for "Design Guidelines"

### Design Guidelines Added ✅

- [x] **Badge**: Added Usage, Do's/Don'ts, standardized docs.
- [x] **Card**: Added Usage, Do's/Don'ts, standardized docs.
- [x] **Select**: Added Usage, Do's/Don'ts.
- [x] **Checkbox**: Added Usage, Do's/Don'ts.
- [x] **Radio**: Added Usage, Do's/Don'ts.

### Missing Stories Created ✅

- [x] **Toggle**: Created `Toggle.stories.ts` with full documentation and guidelines.
