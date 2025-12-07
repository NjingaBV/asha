# Design System Specifications

## Overview

This document defines the foundational specifications for the Asha design system,
including tokens, component APIs, accessibility requirements, and implementation guidelines.

---

## 1. Design Tokens

### 1.1 Color Tokens

| Token                  | Light Mode | Dark Mode | Usage                |
| ---------------------- | ---------- | --------- | -------------------- |
| `--ds-color-bg`        | `#FFFFFF`  | `#0A0A0A` | Primary background   |
| `--ds-color-bg-subtle` | `#FAFAFA`  | `#121212` | Secondary background |
| `--ds-color-bg-muted`  | `#F5F5F7`  | `#1A1A1A` | Tertiary background  |
| `--ds-color-fg`        | `#0A0A0A`  | `#F5F5F7` | Primary text         |
| `--ds-color-fg-muted`  | `#6B7280`  | `#A3A3A3` | Secondary text       |
| `--ds-color-fg-subtle` | `#9CA3AF`  | `#737373` | Tertiary text        |
| `--ds-color-accent`    | `#0070C9`  | `#00C7BE` | Primary accent       |
| `--ds-color-border`    | `#E5E7EB`  | `#2C2C2E` | Default border       |
| `--ds-color-error`     | `#EF4444`  | `#FF453A` | Error state          |
| `--ds-color-success`   | `#22C55E`  | `#30D158` | Success state        |
| `--ds-color-warning`   | `#F59E0B`  | `#FF9F0A` | Warning state        |

### 1.2 Typography Scale

| Token                 | Size | Line Height | Usage            |
| --------------------- | ---- | ----------- | ---------------- |
| `--ds-font-size-xs`   | 12px | 1.5         | Captions, labels |
| `--ds-font-size-sm`   | 14px | 1.5         | Helper text      |
| `--ds-font-size-base` | 16px | 1.5         | Body text        |
| `--ds-font-size-lg`   | 18px | 1.5         | Large body       |
| `--ds-font-size-xl`   | 20px | 1.3         | Subheadings      |
| `--ds-font-size-2xl`  | 24px | 1.3         | Section titles   |
| `--ds-font-size-3xl`  | 32px | 1.15        | Page titles      |
| `--ds-font-size-4xl`  | 40px | 1.15        | Hero titles      |
| `--ds-font-size-5xl`  | 56px | 1.0         | Display          |
| `--ds-font-size-6xl`  | 72px | 1.0         | Marketing        |

### 1.3 Spacing Scale (4pt Grid)

| Token           | Value | Usage           |
| --------------- | ----- | --------------- |
| `--ds-space-1`  | 4px   | Tight gaps      |
| `--ds-space-2`  | 8px   | Icon padding    |
| `--ds-space-3`  | 12px  | Small gaps      |
| `--ds-space-4`  | 16px  | Default padding |
| `--ds-space-6`  | 24px  | Section gaps    |
| `--ds-space-8`  | 32px  | Large gaps      |
| `--ds-space-12` | 48px  | Section spacing |
| `--ds-space-16` | 64px  | Page sections   |

### 1.4 Motion Tokens

| Token                  | Value                             | Usage              |
| ---------------------- | --------------------------------- | ------------------ |
| `--ds-duration-fast`   | 120ms                             | Hover states       |
| `--ds-duration-normal` | 200ms                             | Transitions        |
| `--ds-duration-slow`   | 280ms                             | Complex animations |
| `--ds-duration-slower` | 400ms                             | Page transitions   |
| `--ds-ease-standard`   | cubic-bezier(0.25, 0.1, 0.25, 1)  | Default easing     |
| `--ds-ease-spring`     | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy effects     |

---

## 2. Component API Specifications

### 2.1 Standardized Prop Names

| Prop        | Type    | Values                                                 | Description          |
| ----------- | ------- | ------------------------------------------------------ | -------------------- |
| `variant`   | string  | `solid`, `outline`, `ghost`, `link`                    | Visual style         |
| `tone`      | string  | `primary`, `secondary`, `neutral`, `danger`, `success` | Color scheme         |
| `size`      | string  | `sm`, `md`, `lg`                                       | Component size       |
| `disabled`  | boolean | -                                                      | Disables interaction |
| `loading`   | boolean | -                                                      | Shows loading state  |
| `fullWidth` | boolean | -                                                      | Expands to container |
| `class`     | string  | -                                                      | Custom CSS classes   |

### 2.2 Button Component

```typescript
interface ButtonProps {
	// Visual
	variant?: 'solid' | 'outline' | 'ghost' | 'link';
	tone?: 'primary' | 'secondary' | 'neutral' | 'danger' | 'success';
	size?: 'sm' | 'md' | 'lg';

	// State
	disabled?: boolean;
	loading?: boolean;

	// Layout
	fullWidth?: boolean;

	// Link mode
	href?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';

	// Form
	type?: 'button' | 'submit' | 'reset';
	name?: string;
	value?: string;
	form?: string;

	// Accessibility
	ariaLabel?: string;
	id?: string;

	// Slots
	iconLeft?: Snippet;
	iconRight?: Snippet;
	children?: Snippet;

	// Events
	onclick?: (event: MouseEvent) => void;
	onfocus?: (event: FocusEvent) => void;
	onblur?: (event: FocusEvent) => void;
}
```

### 2.3 Input Component

```typescript
interface InputProps {
	// Type & variant
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date';
	variant?: 'outline' | 'filled' | 'ghost';
	size?: 'sm' | 'md' | 'lg';

	// Value
	value?: string; // bindable
	placeholder?: string;

	// Labels
	label?: string;
	helperText?: string;
	error?: string;
	success?: string;

	// State
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;

	// Validation
	min?: string | number;
	max?: string | number;
	minlength?: number;
	maxlength?: number;
	pattern?: string;

	// Layout
	fullWidth?: boolean;

	// Slots
	iconLeft?: Snippet;
	iconRight?: Snippet;
	prefix?: Snippet;
	suffix?: Snippet;

	// Events
	oninput?: (event: Event) => void;
	onchange?: (event: Event) => void;
	onfocus?: (event: FocusEvent) => void;
	onblur?: (event: FocusEvent) => void;
}
```

### 2.4 Modal Component

```typescript
interface ModalProps {
	// State
	open?: boolean; // bindable

	// Content
	title?: string;
	description?: string;

	// Behavior
	size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
	closeOnEscape?: boolean;
	closeOnBackdrop?: boolean;
	hideCloseButton?: boolean;

	// Slots
	header?: Snippet;
	children?: Snippet;
	footer?: Snippet;

	// Events
	onclose?: () => void;
	onopen?: () => void;
}
```

### 2.5 Tabs Component

```typescript
interface Tab {
	id: string;
	label: string;
	disabled?: boolean;
}

interface TabsProps {
	// Data
	tabs: Tab[];
	defaultActiveId?: string;

	// Visual
	variant?: 'underline' | 'pills' | 'enclosed';
	size?: 'sm' | 'md' | 'lg';

	// Layout
	orientation?: 'horizontal' | 'vertical';
	fullWidth?: boolean;

	// Slots
	panel?: Snippet<[Tab]>;

	// Events
	onchange?: (activeId: string) => void;
}
```

---

## 3. Accessibility Requirements (WCAG 2.2 AA)

### 3.1 Color Contrast

| Element                          | Minimum Ratio |
| -------------------------------- | ------------- |
| Normal text (< 18px)             | 4.5:1         |
| Large text (≥ 18px bold, ≥ 24px) | 3:1           |
| UI components & graphics         | 3:1           |
| Focus indicators                 | 3:1           |

### 3.2 Keyboard Navigation

| Component | Keys                                         |
| --------- | -------------------------------------------- |
| Button    | Enter, Space to activate                     |
| Modal     | Escape to close, Tab to navigate, focus trap |
| Tabs      | Arrow keys to navigate, Enter to select      |
| Input     | Tab to focus, typing to input                |

### 3.3 ARIA Attributes

| Component | Required ARIA                                                      |
| --------- | ------------------------------------------------------------------ |
| Button    | `aria-label` (icon-only), `aria-busy` (loading)                    |
| Modal     | `role="dialog"`, `aria-modal`, `aria-labelledby`                   |
| Tabs      | `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected` |
| Input     | `aria-invalid`, `aria-describedby`, `aria-required`                |

### 3.4 Focus Management

- **Focus ring**: 2px solid accent color with 2px offset
- **Focus visible**: Only show for keyboard navigation
- **Focus trap**: Modal traps focus while open
- **Focus restore**: Return focus to trigger on modal close

### 3.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
	* {
		animation-duration: 0ms !important;
		transition-duration: 0ms !important;
	}
}
```

---

## 4. XState Machine Patterns

### 4.1 Button Machine States

```
idle → hovered → pressed → loading → success/error
  ↓       ↓          ↓
focused ←←←←←←←←←←←←←←
  ↓
disabled
```

### 4.2 Modal Machine States

```
closed → opening → open → closing → closed
           ↓                ↓
      (focus trap)    (restore focus)
```

### 4.3 Tabs Machine States

```
stateless machine with context:
- tabs: Tab[]
- activeId: string

Events: SELECT, FOCUS_NEXT, FOCUS_PREV, FOCUS_FIRST, FOCUS_LAST
```

---

## 5. Performance Guidelines

### 5.1 Image Optimization

- Use responsive `srcset` for different screen sizes
- Lazy load below-the-fold images
- Use modern formats (WebP, AVIF)
- Include width/height to prevent CLS

### 5.2 Animation Performance

- Prefer `transform` and `opacity` for animations
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`
- Keep animations under 400ms for UI feedback

### 5.3 Bundle Optimization

- Code-split large components
- Tree-shake unused utilities
- Lazy load modals and drawers
- Use dynamic imports for heavy dependencies

### 5.4 Core Web Vitals Targets

| Metric                          | Target  |
| ------------------------------- | ------- |
| LCP (Largest Contentful Paint)  | < 2.5s  |
| FID (First Input Delay)         | < 100ms |
| CLS (Cumulative Layout Shift)   | < 0.1   |
| INP (Interaction to Next Paint) | < 200ms |

---

## 6. Tailwind CSS Integration

### 6.1 Using Design Tokens

```html
<!-- Colors -->
<div class="bg-bg text-fg border-border">
	<div class="bg-accent text-fg-on-accent">
		<div class="text-fg-muted">
			<!-- Spacing -->
			<div class="p-4 gap-6 mb-8">
				<!-- Typography -->
				<p class="text-base leading-normal"></p>
				<h1 class="text-3xl font-bold tracking-tight">
					<!-- Shadows -->
					<div class="shadow-md hover:shadow-lg">
						<!-- Transitions -->
						<button class="transition-all duration-fast ease-standard"></button>
					</div>
				</h1>
			</div>
		</div>
	</div>
</div>
```

### 6.2 Data Attributes for States

```html
<!-- Button states -->
<button data-variant="solid" data-tone="primary" data-size="md" data-loading>
	<!-- Tab states -->
	<button data-state="active" data-disabled></button>
</button>
```

---

## 7. Component Checklist

For each component, ensure:

- [ ] Props are typed with TypeScript interfaces
- [ ] Default values are documented
- [ ] SSR-safe (no window/document in module scope)
- [ ] Keyboard navigation works correctly
- [ ] Focus states are visible
- [ ] Color contrast meets WCAG AA
- [ ] ARIA attributes are correct
- [ ] Reduced motion is respected
- [ ] Storybook stories cover all variants
- [ ] Unit tests exist for XState machines
- [ ] JSDoc comments are complete
