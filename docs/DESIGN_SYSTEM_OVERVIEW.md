# Asha Design System - Overview

**Version:** 0.3.1  
**Status:** In Development (Design System Refactor)  
**Inspiration:** Apple.com Design Principles

---

## 🎯 Vision

Asha is a premium, Apple-inspired design system built with Svelte 5, Tailwind CSS 4, and XState. Our goal is to provide a comprehensive component library that embodies:

- **Minimal aesthetics** - Clean, spacious, uncluttered interfaces
- **High quality** - Premium feel with subtle animations and polish
- **Accessibility first** - WCAG 2.2 AA compliance minimum
- **Performance** - SSR-friendly, optimized, fast
- **Developer experience** - Predictable APIs, TypeScript, comprehensive docs

---

## 🏗️ Architecture

### Design Tokens

All visual design decisions are captured as CSS custom properties (design tokens) in:

- `src/lib/design-system/tokens/base.css` - Core token definitions
- `src/lib/design-system/themes/light.css` - Light theme overrides
- `src/lib/design-system/themes/dark.css` - Dark theme overrides

**Token Categories:**

- Colors (semantic and palette)
- Typography (font families, sizes, weights, leading, tracking)
- Spacing (4pt grid system: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128)
- Border Radius (6px, 12px, 18px, 24px, 32px)
- Shadows (subtle, layered depth)
- Motion (easing curves, durations: 120ms, 200ms, 280ms, 400ms)
- Z-index layers
- Opacity levels

### Tailwind CSS 4 Integration

All design tokens are mapped to Tailwind utilities in `tailwind.config.ts`, enabling:

- Consistent usage across components
- Easy theme switching
- Maintainable design system
- Type-safe token references

**Example:**

```svelte
<button class="bg-primary text-bg px-4 py-2 rounded-md shadow-md"> Button </button>
```

### Atomic Design Structure

Components are organized following Brad Frost's Atomic Design methodology:

1. **Atoms** - Basic building blocks
    - Button, Input, Link, Badge, Icon, Heading, Paragraph, Divider
2. **Molecules** - Simple component groups
    - Card, Hero, ProductCard, FeatureCard, FormField
3. **Organisms** - Complex component sections
    - Header, Footer, Carousel, Features, HeroBanner
4. **Templates** - Page-level layouts
    - WatchLanding, Shelf
5. **Pages** - Specific instances
    - Home

---

## 🎨 Design Principles

### 1. Apple-Inspired Aesthetics

**Typography:**

- SF Pro-like system font stack
- Generous line heights (1.5 default)
- Minimal letter spacing
- Clear hierarchy

**Colors:**

- Deep blacks (#0A0A0A) for dark mode
- Off-whites (#F5F5F7) for light mode
- Accent blues and teals
- High contrast (minimum 4.5:1 for text, 3:1 for UI)

**Spacing:**

- Generous whitespace
- 4pt grid system
- Breathing room between elements
- Max container widths: 1280px-1440px

**Motion:**

- Subtle, purposeful animations
- Standard easing: cubic-bezier(0.25, 0.1, 0.25, 1)
- Durations: 120-400ms
- Respects prefers-reduced-motion

### 2. Component API Standards

All components follow consistent naming conventions:

**Props:**

- `variant` - Visual style (solid, outline, ghost, soft)
- `tone` - Semantic color (default, primary, neutral, success, warning, danger, info)
- `size` - Dimensions (sm, md, lg)
- `disabled` - Disabled state
- `loading` - Loading state (async operations)
- `class` - Custom CSS classes

**Events:**

- `onClick`, `onChange`, `onInput`, `onFocus`, `onBlur`
- Always use `on` prefix

**Slots (Svelte 5 Snippets):**

- `children` - Default content
- `iconLeft`, `iconRight` - Icon placement
- `header`, `footer` - Section content

See `docs/COMPONENT_API_GUIDELINES.md` for complete details.

### 3. Accessibility

Every component is built with accessibility in mind:

**Keyboard Navigation:**

- Tab for focus management
- Enter/Space for activation
- Escape for closing modals/dropdowns
- Arrow keys for list navigation

**ARIA:**

- Proper roles (`button`, `dialog`, `tab`, etc.)
- Labels (`aria-label`, `aria-labelledby`)
- States (`aria-disabled`, `aria-expanded`, `aria-selected`)
- Relationships (`aria-controls`, `aria-describedby`)
- Live regions (`role="status"`, `aria-live`)

**Visual:**

- Focus rings on all interactive elements
- Color contrast ratios meeting WCAG 2.2 AA
- States visible beyond color alone
- Clear visual hierarchy

---

## 🤖 State Management with XState

Complex UI interactions are managed with XState state machines:

### Current Machines

**ButtonMachine** (`src/lib/machines/button.machine.ts`)

- States: idle → hover → pressed → loading → success/error
- Handles click interactions, async operations
- Auto-reset after success (2s)

**ModalMachine** (`src/lib/machines/modal.machine.ts`)

- States: closed → opening → open → closing → closed
- Focus trap management
- Backdrop/Escape key handling
- Body scroll locking

**Benefits:**

- Predictable state transitions
- Easier testing (full test coverage)
- Visual state diagrams
- No impossible states
- Clear debugging

---

## 📦 Component Library

### Atoms (Basic Building Blocks)

#### Button

**Status:** ✅ Existing (needs XState integration)  
**Props:** variant, tone, size, disabled, loading, href, type  
**Features:** Multiple variants, loading states, can render as link

#### Input

**Status:** ✅ Complete  
**Props:** type, size, disabled, readonly, invalid, error, hint, label  
**Features:** All input types, validation states, icon support, accessibility

#### Link

**Status:** ✅ Complete  
**Props:** variant, size, external, disabled, download  
**Features:** External link detection, variants, accessibility

#### Divider

**Status:** ✅ Complete  
**Props:** orientation, variant, label, spacing  
**Features:** Horizontal/vertical, optional labels, style variants

#### Badge

**Status:** 🔄 Needs normalization  
**Props:** variant, color, size, rounded  
**Todo:** Align with standard API (variant/tone/size)

#### Heading

**Status:** ✅ Existing  
**Props:** level, size, weight, color, align, leading, tracking  
**Features:** h1-h6, flexible typography

#### Icon

**Status:** ✅ Existing  
**Props:** name, size, color  
**Todo:** Enhance with icon library integration

### Molecules (Component Groups)

#### Card

**Status:** 🔄 Needs refactoring  
**Todo:** Apply new tokens, normalize API

#### Hero

**Status:** 🔄 Needs refactoring  
**Todo:** Apply new tokens, add variants

#### ProductCard, FeatureCard

**Status:** ✅ Existing  
**Todo:** Minor refinements

### Organisms (Complex Sections)

#### Header, Footer

**Status:** ✅ Existing  
**Todo:** Accessibility audit

#### Carousel

**Status:** 🔄 Needs XState  
**Todo:** Keyboard navigation, auto-play controls

#### Features, HeroBanner, HeroSection

**Status:** ✅ Existing  
**Todo:** Minor refinements

### Templates & Pages

#### WatchLanding, Shelf, Home

**Status:** ✅ Existing  
**Todo:** Update with new components

---

## 📚 Documentation

### For Developers

1. **COMPONENT_API_GUIDELINES.md** - Complete API standards
2. **AGENTS.md** - Project architecture and AI agent recommendations
3. **TESTING\_\*.md** - Testing strategy and examples
4. **README.md** - Quick start and installation

### For Designers

1. **Design Tokens** - See `src/lib/design-system/tokens/base.css`
2. **Storybook** - Visual component documentation at `http://localhost:6006`
3. **This Document** - High-level overview

### Storybook

Run locally:

```bash
pnpm storybook
```

View all components with:

- Live props editing (Controls)
- Dark/light theme toggle
- Accessibility checks (a11y addon)
- Responsive viewports
- Usage documentation

---

## 🧪 Testing

### Unit Tests (Vitest)

- All XState machines have full test coverage
- Component tests coming soon
- Run: `pnpm test:unit`

### Visual Tests (Storybook)

- Comprehensive stories for each component
- Multiple variants, states, sizes
- Dark mode examples
- Accessibility examples

### Manual Testing

- Keyboard navigation
- Screen reader testing
- Cross-browser verification
- Mobile responsive testing

---

## 🚀 Development

### Setup

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Run tests
pnpm test:unit

# Type check
pnpm check

# Lint
pnpm lint

# Format
pnpm format
```

### Creating New Components

1. Choose appropriate atomic level (atom, molecule, organism)
2. Follow naming conventions from COMPONENT_API_GUIDELINES.md
3. Use design tokens (no hardcoded values)
4. Add TypeScript types
5. Consider XState for complex interactions
6. Write comprehensive Storybook stories
7. Add unit tests
8. Document accessibility features

### Component Checklist

- [ ] TypeScript props interface
- [ ] Standard props (variant, tone, size)
- [ ] Design token usage (no hardcoded colors/sizes)
- [ ] Accessibility (ARIA, keyboard, focus)
- [ ] Responsive design
- [ ] Dark mode support
- [ ] Loading/disabled states
- [ ] Error states (if applicable)
- [ ] Storybook stories (all variants)
- [ ] Unit tests
- [ ] SSR compatibility

---

## 📈 Roadmap

### Phase 1: Foundation ✅

- [x] Design tokens
- [x] Tailwind configuration
- [x] Theme system
- [x] XState machines (Button, Modal)
- [x] Component API guidelines

### Phase 2: Core Components 🔄

- [x] Input, Link, Divider
- [ ] Button (XState integration)
- [ ] Badge (normalize)
- [ ] Textarea, Select, Checkbox, Radio, Switch
- [ ] FormField wrapper

### Phase 3: Interactive Components 📅

- [ ] Modal (with XState)
- [ ] Drawer
- [ ] Toast/Notification
- [ ] Tabs
- [ ] Accordion
- [ ] Tooltip
- [ ] Dropdown

### Phase 4: Complex Components 📅

- [ ] Card (refactor)
- [ ] Skeleton
- [ ] Progress
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Stepper
- [ ] Avatar

### Phase 5: Marketing Components 📅

- [ ] Navbar
- [ ] MegaMenu
- [ ] Hero (enhanced)
- [ ] Carousel (XState)
- [ ] ProductTile
- [ ] Footer (enhanced)

### Phase 6: Polish 📅

- [ ] Comprehensive testing
- [ ] Accessibility audit
- [ ] Performance optimization
- [ ] Bundle size optimization
- [ ] Documentation completion

---

## 🎯 Quality Metrics

### Current Status

**Token Coverage:** 100%  
**Component API Consistency:** 30% (3/10 core components)  
**Test Coverage:** XState machines - 100%, Components - TBD  
**Storybook Coverage:** 60% (existing + 3 new)  
**Accessibility:** Target WCAG 2.2 AA  
**TypeScript:** 100% typed

### Goals

- All components follow standard API
- 80%+ test coverage
- 100% Storybook coverage
- WCAG 2.2 AA compliance
- LCP < 2.5s, CLS < 0.1

---

## 🤝 Contributing

See `docs/COMPONENT_API_GUIDELINES.md` for standards.

Key principles:

1. Follow existing patterns
2. Use design tokens
3. Ensure accessibility
4. Write tests
5. Document in Storybook

---

## 📝 License

MIT © NjingaBV

---

**Last Updated:** 2025-01-10  
**Version:** 0.3.1
