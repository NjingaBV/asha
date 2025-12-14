/**
 * Test Helper Utilities for Storybook & Vitest
 * Reusable functions for component testing
 */

import { expect, within } from '@storybook/test';

// Type for Storybook canvas from within()
type Canvas = ReturnType<typeof within>;

/**
 * Wait for a condition to be true with timeout
 * @param condition - Function that returns true when condition is met
 * @param timeout - Max time to wait in ms (default: 3000)
 * @param interval - Check interval in ms (default: 100)
 */
export async function waitFor(
	condition: () => boolean | Promise<boolean>,
	timeout = 3000,
	interval = 100
): Promise<void> {
	const startTime = Date.now();
	while (Date.now() - startTime < timeout) {
		if (await condition()) {
			return;
		}
		await new Promise((resolve) => setTimeout(resolve, interval));
	}
	throw new Error(`Timeout waiting for condition after ${timeout}ms`);
}

/**
 * Wait for an element to appear in the DOM
 * @param canvas - Storybook canvas element
 * @param role - ARIA role to search for
 * @param name - Accessible name to match
 * @param timeout - Max time to wait in ms
 */
export async function waitForElement(
	canvas: Canvas,
	role: string,
	name?: string | RegExp,
	timeout = 3000
): Promise<HTMLElement> {
	const options = name ? { name } : {};
	let element: HTMLElement | null = null;

	await waitFor(() => {
		element = canvas.queryByRole(role, options);
		return element !== null;
	}, timeout);

	if (!element) {
		throw new Error(`Element with role "${role}" not found`);
	}

	return element;
}

/**
 * Test keyboard navigation through a list of elements
 * @param canvas - Storybook canvas element
 * @param elements - Array of element selectors or roles
 * @param key - Keyboard key to press (default: 'Tab')
 */
export async function testKeyboardNavigation(
	canvas: Canvas,
	elements: Array<{ role: string; name?: string | RegExp }>,
	key = 'Tab'
): Promise<void> {
	const { userEvent } = await import('@storybook/test');

	for (const element of elements) {
		await userEvent.keyboard(`{${key}}`);
		const el = canvas.getByRole(element.role, element.name ? { name: element.name } : {});
		await expect(el).toHaveFocus();
	}
}

/**
 * Test all variants of a component by checking visual attributes
 * @param element - Element to test
 * @param variants - Object mapping variant names to expected classes/attributes
 */
export async function testVariants(
	element: HTMLElement,
	variants: Record<string, string[]>
): Promise<void> {
	for (const [variantName, expectedClasses] of Object.entries(variants)) {
		for (const expectedClass of expectedClasses) {
			const hasClass = element.classList.contains(expectedClass);
			if (!hasClass) {
				throw new Error(
					`Variant "${variantName}" missing expected class "${expectedClass}"`
				);
			}
		}
	}
}

/**
 * Test that an element has proper ARIA attributes
 * @param element - Element to test
 * @param attributes - Object mapping ARIA attributes to expected values
 */
export async function testAriaAttributes(
	element: HTMLElement,
	attributes: Record<string, string | boolean | null>
): Promise<void> {
	for (const [attr, expectedValue] of Object.entries(attributes)) {
		const actualValue = element.getAttribute(attr);

		if (expectedValue === null) {
			await expect(actualValue).toBeNull();
		} else if (typeof expectedValue === 'boolean') {
			await expect(actualValue).toBe(expectedValue.toString());
		} else {
			await expect(actualValue).toBe(expectedValue);
		}
	}
}

/**
 * Test form validation behavior
 * @param canvas - Storybook canvas element
 * @param inputRole - Role of the input element
 * @param inputName - Name of the input element
 * @param invalidValue - Value that should trigger validation error
 * @param validValue - Value that should pass validation
 */
export async function testFormValidation(
	canvas: Canvas,
	inputRole: string,
	inputName: string | RegExp,
	invalidValue: string,
	validValue: string
): Promise<void> {
	const { userEvent } = await import('@storybook/test');
	const input = canvas.getByRole(inputRole, { name: inputName });

	// Test invalid value
	await userEvent.clear(input);
	await userEvent.type(input, invalidValue);
	await userEvent.tab(); // Blur to trigger validation

	// Check for error state (aria-invalid or error message)
	const hasError =
		input.getAttribute('aria-invalid') === 'true' || canvas.queryByRole('alert') !== null;

	await expect(hasError).toBe(true);

	// Test valid value
	await userEvent.clear(input);
	await userEvent.type(input, validValue);
	await userEvent.tab(); // Blur to trigger validation

	// Check error is cleared
	const stillHasError =
		input.getAttribute('aria-invalid') === 'true' || canvas.queryByRole('alert') !== null;

	await expect(stillHasError).toBe(false);
}

/**
 * Test modal/dialog behavior (open, close, focus trap)
 * @param canvas - Storybook canvas element
 * @param triggerRole - Role of the element that opens the modal
 * @param triggerName - Name of the trigger element
 */
export async function testModalBehavior(
	canvas: Canvas,
	triggerRole: string,
	triggerName: string | RegExp
): Promise<void> {
	const { userEvent } = await import('@storybook/test');

	// Open modal
	const trigger = canvas.getByRole(triggerRole, { name: triggerName });
	await userEvent.click(trigger);

	// Check modal is open
	const dialog = await waitForElement(canvas, 'dialog');
	await expect(dialog).toBeInTheDocument();
	await expect(dialog).toBeVisible();

	// Test focus trap (focus should be inside modal)
	const focusedElement = document.activeElement;
	await expect(dialog.contains(focusedElement)).toBe(true);

	// Test Escape key closes modal
	await userEvent.keyboard('{Escape}');
	await waitFor(() => !canvas.queryByRole('dialog'));

	// Verify modal is closed
	await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
}

/**
 * Test responsive behavior by changing viewport
 *
 * WARNING: This is a placeholder function. Actual viewport resizing requires
 * Playwright or Chromatic integration. Use this for documenting responsive tests.
 *
 * @deprecated This function doesn't actually resize viewports. Use Chromatic for visual testing.
 * @param callback - Function to run at each viewport size
 * @param viewports - Array of viewport widths to test
 */
export async function testResponsive(
	callback: (width: number) => Promise<void>,
	viewports: number[] = [375, 768, 1024, 1440]
): Promise<void> {
	console.warn(
		'testResponsive() is a placeholder. Use Chromatic or Playwright for real viewport testing.'
	);
	for (const width of viewports) {
		// Note: This doesn't actually resize the viewport
		// For real viewport testing, use Playwright or Chromatic
		await callback(width);
	}
}

/**
 * Simulate loading state and verify spinner/skeleton
 * @param canvas - Storybook canvas element
 * @param loadingRole - Role of the loading indicator
 */
export async function testLoadingState(canvas: Canvas, loadingRole = 'status'): Promise<void> {
	const loadingIndicator = canvas.queryByRole(loadingRole);
	await expect(loadingIndicator).toBeInTheDocument();
	await expect(loadingIndicator).toBeVisible();
}

/**
 * Test disabled state of interactive elements
 * @param canvas - Storybook canvas element
 * @param role - Role of the element
 * @param name - Name of the element
 */
export async function testDisabledState(
	canvas: Canvas,
	role: string,
	name: string | RegExp
): Promise<void> {
	const { userEvent } = await import('@storybook/test');
	const element = canvas.getByRole(role, { name });

	await expect(element).toBeDisabled();

	// Try to interact and verify no effect
	await userEvent.click(element);
	// Element should still be disabled (no state change)
	await expect(element).toBeDisabled();
}

/**
 * Test hover states (for visual components)
 * @param element - Element to hover
 */
export async function testHoverState(element: HTMLElement): Promise<void> {
	const { userEvent } = await import('@storybook/test');

	// Hover element
	await userEvent.hover(element);

	// Note: Actual visual testing requires Chromatic
	// This ensures the hover doesn't cause errors
	await expect(element).toBeInTheDocument();

	// Unhover
	await userEvent.unhover(element);
}

/**
 * Test color contrast ratio (placeholder)
 *
 * WARNING: This is a placeholder function that always returns true.
 * For real contrast testing, use axe-core via runA11yAudit() from a11y-testing.ts
 *
 * @deprecated Use runA11yAudit() from a11y-testing.ts for real contrast checking
 * @param element - Element to test
 * @returns True (placeholder - not a real check)
 */
export function hasGoodContrast(element: HTMLElement): boolean {
	console.warn(
		'hasGoodContrast() is a placeholder. Use runA11yAudit() from a11y-testing.ts for real contrast checking.'
	);
	const styles = window.getComputedStyle(element);
	const bgColor = styles.backgroundColor;
	const color = styles.color;

	// Basic validation
	if (!bgColor || !color) {
		console.warn('Cannot determine colors for contrast check');
		return false;
	}

	// PLACEHOLDER: Use axe-core for real contrast testing
	return true;
}

/**
 * Get all interactive elements within a container
 * @param container - Container element
 * @returns Array of interactive elements
 */
export function getInteractiveElements(container: HTMLElement): HTMLElement[] {
	const selector = 'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
	return Array.from(container.querySelectorAll(selector));
}

/**
 * Test that all links have proper href attributes
 * @param canvas - Storybook canvas element
 */
export async function testLinks(canvas: Canvas): Promise<void> {
	const links = canvas.container.querySelectorAll('a');
	for (const link of links) {
		const href = link.getAttribute('href');
		// Links should have href or be explicitly non-navigable
		if (!href && link.getAttribute('role') !== 'button') {
			throw new Error(`Link missing href: ${link.textContent}`);
		}
	}
}

/**
 * Common test for all atoms - basic rendering and accessibility
 * @param canvas - Storybook canvas element
 * @param role - Expected ARIA role
 * @param name - Expected accessible name
 */
export async function testBasicAtom(
	canvas: Canvas,
	role: string,
	name?: string | RegExp
): Promise<void> {
	const options = name ? { name } : {};
	const element = canvas.getByRole(role, options);

	// Basic rendering
	await expect(element).toBeInTheDocument();
	await expect(element).toBeVisible();

	// Accessibility
	if (name) {
		await expect(element).toHaveAccessibleName(
			typeof name === 'string' ? name : expect.stringMatching(name)
		);
	}
}
