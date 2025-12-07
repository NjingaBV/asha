# Migration Guide: Design System 2.0

This guide helps migrate existing components to the new design system standards.

---

## 1. Breaking Changes Summary

### 1.1 Prop Renaming (v0.4.0)

Several components have had their props renamed for consistency:

#### `className` → `class`

| Component       | Old Prop    | New Prop |
| --------------- | ----------- | -------- |
| `Link`          | `className` | `class`  |
| `Card`          | `className` | `class`  |
| `Label`         | `className` | `class`  |
| `Image`         | `className` | `class`  |
| `NavigationBar` | `className` | `class`  |
| `Hero`          | `className` | `class`  |

**Before:**

```svelte
<Link href="/about" className="my-link">About</Link>
<Card title="Title" className="my-card" />
```

**After:**

```svelte
<Link href="/about" class="my-link">About</Link>
<Card title="Title" class="my-card" />
```

#### `badgeSize` → `size`

| Component | Old Prop    | New Prop |
| --------- | ----------- | -------- |
| `Badge`   | `badgeSize` | `size`   |

**Before:**

```svelte
<Badge label="New" badgeSize="lg" />
```

**After:**

```svelte
<Badge label="New" size="lg" />
```

#### `color` → `tone` (Semantic Values)

| Component | Old Prop | New Prop | Old Values                                | New Values                                                        |
| --------- | -------- | -------- | ----------------------------------------- | ----------------------------------------------------------------- |
| `Badge`   | `color`  | `tone`   | `blue`, `slate`, `emerald`, `amber`, etc. | `primary`, `secondary`, `success`, `warning`, `danger`, `neutral` |
| `Label`   | `color`  | `tone`   | CSS color values                          | `primary`, `secondary`, `success`, `warning`, `danger`, `neutral` |

**Before:**

```svelte
<Badge label="Active" color="blue" />
<Badge label="Warning" color="amber" />
<Label color="emerald">Available</Label>
```

**After:**

```svelte
<Badge label="Active" tone="primary" />
<Badge label="Warning" tone="warning" />
<Label tone="success">Available</Label>
```

**Color → Tone Mapping:**

| Old Color Value | New Tone Value |
| --------------- | -------------- |
| `blue`          | `primary`      |
| `slate`         | `neutral`      |
| `emerald/green` | `success`      |
| `amber/orange`  | `warning`      |
| `red`           | `danger`       |

### 1.2 Button Component

| Old Prop      | New Prop         | Notes                           |
| ------------- | ---------------- | ------------------------------- |
| `tone="dark"` | `tone="neutral"` | Dark tone renamed               |
| `onClick`     | `onclick`        | Svelte 5 lowercase events       |
| `color`       | Removed          | Use tokens instead              |
| `rounded`     | Removed          | Always uses design token radius |
| `class`       | `class`          | No change                       |

**Before:**

```svelte
<Button tone="primary" onClick={handleClick} color="#0070c9">Click me</Button>
```

**After:**

```svelte
<Button tone="primary" variant="solid" onclick={handleClick}>Click me</Button>
```

### 1.2 Input Component (New)

The new `Input` component replaces any custom input implementations.

**Migration:**

```svelte
<!-- Old: Custom input with inline styles -->
<input class="px-4 py-2 border rounded-lg" placeholder="Email" />

<!-- New: Use Input component -->
<Input label="Email" placeholder="Enter your email" variant="outline" />
```

### 1.3 Modal Component (Refactored)

| Old Pattern              | New Pattern               |
| ------------------------ | ------------------------- |
| Custom backdrop handling | Native `<dialog>` element |
| Manual focus trap        | Automatic focus trap      |
| `isOpen` prop            | `open` prop (bindable)    |

**Before:**

```svelte
<Modal isOpen={showModal} onClose={() => (showModal = false)}>Content</Modal>
```

**After:**

```svelte
<Modal bind:open={showModal} title="Title">
	Content
	{#snippet footer()}
		<Button onclick={() => (open = false)}>Close</Button>
	{/snippet}
</Modal>
```

### 1.4 Tabs Component (Refactored)

| Old Pattern       | New Pattern                          |
| ----------------- | ------------------------------------ |
| Context-driven    | XState machine                       |
| `tabs` as strings | `tabs` as objects with `id`, `label` |

**Before:**

```svelte
<script>
	let active = 'tab1';
</script>

<Tabs tabs={['Tab 1', 'Tab 2']} bind:active />
```

**After:**

```svelte
<Tabs
	tabs={[
		{ id: 'tab1', label: 'Tab 1' },
		{ id: 'tab2', label: 'Tab 2' }
	]}
	defaultActiveId="tab1"
>
	{#snippet panel(tab)}
		{#if tab.id === 'tab1'}
			Tab 1 content
		{:else}
			Tab 2 content
		{/if}
	{/snippet}
</Tabs>
```

---

## 2. Design Token Migration

### 2.1 Color Classes

| Old (Hardcoded)   | New (Token-based) |
| ----------------- | ----------------- |
| `bg-white`        | `bg-bg`           |
| `bg-black`        | `bg-fg`           |
| `text-gray-500`   | `text-fg-muted`   |
| `text-gray-400`   | `text-fg-subtle`  |
| `border-gray-200` | `border-border`   |
| `bg-blue-500`     | `bg-accent`       |
| `text-red-500`    | `text-error`      |
| `text-green-500`  | `text-success`    |

### 2.2 Spacing Classes

Old utility classes remain valid. New semantic tokens added:

| Token                | Value  | Usage              |
| -------------------- | ------ | ------------------ |
| `gap-gutter`         | 24px   | Section gutters    |
| `max-w-container-xl` | 1280px | Content containers |

### 2.3 Shadow Classes

| Old               | New                                   |
| ----------------- | ------------------------------------- |
| `shadow`          | `shadow-md`                           |
| `shadow-lg`       | `shadow-lg`                           |
| Custom box-shadow | `shadow-elevated` or `shadow-overlay` |

---

## 3. Event Handler Migration (Svelte 5)

Svelte 5 uses lowercase event handlers:

| Svelte 4     | Svelte 5    |
| ------------ | ----------- |
| `on:click`   | `onclick`   |
| `on:focus`   | `onfocus`   |
| `on:blur`    | `onblur`    |
| `on:input`   | `oninput`   |
| `on:change`  | `onchange`  |
| `on:keydown` | `onkeydown` |

**Component props also changed:**

```typescript
// Old
interface Props {
	onClick?: (event: MouseEvent) => void;
}

// New
interface Props {
	onclick?: (event: MouseEvent) => void;
}
```

---

## 4. XState Machine Integration

### 4.1 Using Machines in Components

```svelte
<script>
	import { createActor } from 'xstate';
	import { buttonMachine } from '$lib/machines/button.machine';

	const actor = createActor(buttonMachine);
	actor.start();

	let state = $state(actor.getSnapshot().value);

	actor.subscribe((snapshot) => {
		state = snapshot.value;
	});

	$effect(() => {
		return () => actor.stop();
	});
</script>
```

### 4.2 Machine Events

```typescript
// Button machine events
actor.send({ type: 'HOVER' });
actor.send({ type: 'PRESS' });
actor.send({ type: 'START_LOADING' });

// Modal machine events
actor.send({ type: 'OPEN' });
actor.send({ type: 'CLOSE' });
actor.send({ type: 'ESCAPE_KEY' });

// Tabs machine events
actor.send({ type: 'SELECT', id: 'tab2' });
actor.send({ type: 'FOCUS_NEXT' });
```

---

## 5. Component Deprecation Schedule

### Phase 1 (Current)

- [ ] **Button**: Refactored - migration required
- [ ] **Input**: New component - adopt for new code
- [ ] **Modal**: Refactored - migration required
- [ ] **Tabs**: Refactored - migration required

### Phase 2 (Next Sprint)

- [ ] **Link**: Unify with Button (variant="link")
- [ ] **Badge**: Standardize props
- [ ] **Icon**: Add size tokens
- [ ] **Card**: Simplify API

### Phase 3 (Future)

- [ ] Remove deprecated props
- [ ] Remove inline color props
- [ ] Enforce token usage

---

## 6. Accessibility Fixes Required

### 6.1 Focus Visible

Replace custom focus styles with token-based:

```css
/* Old */
.focus-visible:outline-none .focus-visible:ring-2 .focus-visible:ring-blue-500

/* New */
.focus-visible:outline-none .focus-visible:ring-2 .focus-visible:ring-accent .focus-visible:ring-offset-2
```

### 6.2 ARIA Attributes

Ensure all interactive elements have:

```html
<!-- Buttons -->
<button aria-label="Close modal" aria-busy="{loading}" aria-disabled="{disabled}">
	<!-- Inputs -->
	<input aria-invalid="{hasError}" aria-describedby="{errorId}" aria-required="{required}" />

	<!-- Modals -->
	<dialog role="dialog" aria-modal="true" aria-labelledby="{titleId}"></dialog>
</button>
```

### 6.3 Keyboard Navigation

Test with keyboard only:

1. Tab through all interactive elements
2. Escape closes modals
3. Arrow keys navigate tabs
4. Enter/Space activates buttons

---

## 7. Testing Updates

### 7.1 Update Test Selectors

```typescript
// Old
screen.getByRole('button', { name: 'Submit' });

// New - use data attributes
screen.getByTestId('submit-button');
// or
screen.getByRole('button', { name: 'Submit' });
```

### 7.2 XState Machine Tests

```typescript
import { createActor } from 'xstate';
import { buttonMachine } from './button.machine';

describe('buttonMachine', () => {
	it('transitions from idle to hovered', () => {
		const actor = createActor(buttonMachine);
		actor.start();

		actor.send({ type: 'HOVER' });

		expect(actor.getSnapshot().value).toBe('hovered');
		actor.stop();
	});
});
```

---

## 8. Checklist for Migration

For each component:

- [ ] Update import paths if changed
- [ ] Replace deprecated props with new equivalents
- [ ] Update event handler naming (onClick → onclick)
- [ ] Replace hardcoded colors with tokens
- [ ] Add missing ARIA attributes
- [ ] Test keyboard navigation
- [ ] Test in light and dark mode
- [ ] Update Storybook stories
- [ ] Run accessibility audit

---

## 9. Getting Help

- Check `openspec/DESIGN_SYSTEM_SPEC.md` for token documentation
- Review Storybook for component examples
- Run `pnpm storybook` to see all variants
- Run `pnpm lint && pnpm check` to catch issues

---

## 10. Do's and Don'ts

### Do

- ✅ Use design tokens for colors, spacing, shadows
- ✅ Use semantic class names (`text-fg-muted` not `text-gray-500`)
- ✅ Add ARIA labels for icon-only buttons
- ✅ Use `variant` and `tone` for styling
- ✅ Test with keyboard and screen reader

### Don't

- ❌ Use hardcoded hex colors
- ❌ Use inline styles for design values
- ❌ Create custom focus ring styles
- ❌ Skip accessibility testing
- ❌ Mix old and new component APIs
