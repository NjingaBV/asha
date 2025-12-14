# Testing Checklist for New Components

Use this checklist when creating tests for new components in Asha.

## 📋 General Component Testing

### 1. Basic Rendering

- [ ] Component renders without errors
- [ ] Component is visible in the DOM
- [ ] Component has correct semantic HTML element
- [ ] Component has accessible name (if interactive)

### 2. Props Testing

- [ ] Test with default props
- [ ] Test with all required props
- [ ] Test with optional props
- [ ] Test prop validation (if applicable)

### 3. Visual Variants

- [ ] Test all size variants (sm, md, lg, xl)
- [ ] Test all color/tone variants
- [ ] Test all style variants (solid, outline, ghost, etc.)
- [ ] Test responsive behavior (if applicable)

### 4. States

- [ ] Default state
- [ ] Hover state (visual only, use Chromatic)
- [ ] Focus state (keyboard navigation)
- [ ] Active/pressed state
- [ ] Disabled state
- [ ] Loading state (if applicable)
- [ ] Error state (if applicable)
- [ ] Success state (if applicable)

## ♿ Accessibility Testing

### 5. ARIA Attributes

- [ ] Component has proper ARIA role
- [ ] Interactive elements have accessible names
- [ ] State changes announced via ARIA (aria-expanded, aria-checked, etc.)
- [ ] Error messages associated with inputs (aria-describedby, aria-invalid)
- [ ] Required fields marked (aria-required)

### 6. Keyboard Navigation

- [ ] Element is keyboard focusable (Tab)
- [ ] Element can be activated via keyboard (Enter/Space)
- [ ] Keyboard shortcuts work (Arrow keys, Escape, etc.)
- [ ] Focus trap works correctly (for modals/dialogs)
- [ ] Tab order is logical

### 7. Screen Reader Support

- [ ] Labels are properly associated with inputs
- [ ] Images have alt text
- [ ] Headings follow proper hierarchy (h1 → h2 → h3)
- [ ] Live regions announce dynamic content (aria-live)
- [ ] Icon-only buttons have aria-label

### 8. Color Contrast

- [ ] Text has sufficient contrast (4.5:1 for normal, 3:1 for large)
- [ ] Interactive elements are distinguishable
- [ ] Focus indicators are visible

### 9. Touch Targets

- [ ] Interactive elements are at least 44x44px
- [ ] Sufficient spacing between touch targets

## 🧪 Interaction Testing

### 10. User Interactions

- [ ] Click/tap interactions work
- [ ] Hover interactions work (visual only)
- [ ] Drag interactions work (if applicable)
- [ ] Form submission works (if applicable)
- [ ] Validation triggers correctly (if applicable)

### 11. Event Handlers

- [ ] onClick handler fires correctly
- [ ] onChange handler fires correctly
- [ ] onSubmit handler fires correctly
- [ ] Custom event handlers fire correctly

## 📝 Story Documentation

### 12. Storybook Stories

- [ ] Default story created
- [ ] All variants have stories
- [ ] All states have stories
- [ ] Interactive examples included
- [ ] Code examples in docs
- [ ] Do's and Don'ts (for Tier 1 components)

### 13. Story Tests (play functions)

- [ ] Default story has play() function
- [ ] Interactive stories have play() functions
- [ ] Accessibility tested in play() functions
- [ ] Error states tested

## 🔧 Component-Specific Testing

### For Atoms (Basic Components)

- [ ] Basic rendering test
- [ ] Props variation tests
- [ ] Visual variants tests
- [ ] Accessibility basics (label, role)

### For Molecules (Composite Components)

- [ ] All Atoms tests
- [ ] Composition tests (child components render)
- [ ] Interaction tests (clicks, form inputs)
- [ ] State management tests
- [ ] Keyboard navigation tests

### For Organisms (Complex Components)

- [ ] All Molecules tests
- [ ] Workflow tests (complete user flows)
- [ ] Error handling tests
- [ ] Loading states tests
- [ ] Complex keyboard navigation
- [ ] Focus management tests

### For Templates (Page Layouts)

- [ ] Layout rendering tests
- [ ] Responsive behavior tests
- [ ] Slot/children composition tests
- [ ] Navigation tests

## 🎯 Quick Reference - Minimum Tests

### Minimum for Every Component

```typescript
export const Default: Story = {
	args: {
		/* default props */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// 1. Rendering
		const element = canvas.getByRole('...', { name: '...' });
		await expect(element).toBeInTheDocument();
		await expect(element).toBeVisible();

		// 2. Accessibility
		await expect(element).toHaveAccessibleName('...');
	}
};
```

### Minimum for Interactive Components

```typescript
export const Interactive: Story = {
	args: {
		/* props */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const element = canvas.getByRole('button');

		// 1. Rendering + Accessibility
		await expect(element).toBeInTheDocument();
		await expect(element).toHaveAccessibleName('Click me');

		// 2. Interaction
		await userEvent.click(element);

		// 3. State after interaction
		await expect(element).toHaveFocus();
	}
};
```

### Minimum for Form Components

```typescript
export const FormInput: Story = {
	args: {
		/* props */
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('Email');

		// 1. Rendering + Label
		await expect(input).toBeInTheDocument();
		await expect(input).toHaveAccessibleName('Email');

		// 2. Typing
		await userEvent.type(input, 'test@example.com');
		await expect(input).toHaveValue('test@example.com');

		// 3. Validation (if applicable)
		await userEvent.clear(input);
		await userEvent.tab(); // Trigger validation
		// Check for error state
	}
};
```

## 📊 Coverage Goals

- **Atoms**: 100% of components have basic tests
- **Molecules**: 100% of components have interaction tests
- **Organisms**: 100% of components have accessibility tests
- **Templates**: 100% of templates have rendering tests

## 🚀 Testing Utilities

Use the provided test helpers to simplify testing:

```typescript
// From test-helpers.ts
import {
	testBasicAtom,
	testKeyboardNavigation,
	testModalBehavior
} from '@/stories/utils/test-helpers';

// From a11y-testing.ts
import {
	runA11yAudit,
	validateFormAccessibility,
	auditAndReport
} from '@/stories/utils/a11y-testing';
```

## ✅ Before Submitting PR

- [ ] All checklist items completed
- [ ] `pnpm test:unit` passes
- [ ] `pnpm check` passes (no TypeScript errors)
- [ ] `pnpm lint` passes
- [ ] Stories appear correctly in Storybook
- [ ] Accessibility audit passes (no violations)
- [ ] Documentation is complete

## 📚 Resources

- [TESTING_STRATEGY.md](./TESTING_STRATEGY.md) - Full testing strategy
- [TESTING_EXAMPLES.md](./TESTING_EXAMPLES.md) - Code examples
- [Storybook Testing Docs](https://storybook.js.org/docs/writing-stories/play-function)
- [Testing Library](https://testing-library.com/docs/queries/about)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
