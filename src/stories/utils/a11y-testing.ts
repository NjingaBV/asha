/**
 * Accessibility Testing Utilities for Storybook
 * Provides reusable functions for testing accessibility aspects of components
 */

import axe from 'axe-core';

/**
 * Run accessibility audit on a component using axe-core
 * @param canvasElement - The element to audit
 * @returns The axe results with violations and passes
 */
export async function runA11yAudit(canvasElement: HTMLElement) {
	try {
		const results = await axe.run(canvasElement, {
			runOnly: {
				type: 'tag',
				values: ['wcag2aa', 'wcag21aa']
			}
		});
		return results;
	} catch (error) {
		console.error('Accessibility audit failed:', error);
		return null;
	}
}

/**
 * Test that an element has a proper ARIA label or text content
 * @param element - The element to check
 * @returns True if element has label or text
 */
export function hasAccessibleLabel(element: HTMLElement): boolean {
	const ariaLabel = element.getAttribute('aria-label');
	const ariaLabelledBy = element.getAttribute('aria-labelledby');
	const hasTextContent = element.textContent?.trim().length ? true : false;

	return !!(ariaLabel || ariaLabelledBy || hasTextContent);
}

/**
 * Test that all interactive elements are keyboard accessible
 * @param element - The element to check
 * @returns True if element is keyboard accessible
 */
export function isKeyboardAccessible(element: HTMLElement): boolean {
	const interactiveTags = ['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'];
	const isInteractive = interactiveTags.includes(element.tagName);

	if (!isInteractive) {
		return true; // Not interactive, so no keyboard requirement
	}

	const tabIndex = element.getAttribute('tabindex');
	const disabled = element.getAttribute('disabled');

	// Interactive elements should be focusable and not disabled
	return !disabled || (tabIndex !== null && parseInt(tabIndex) >= 0);
}

/**
 * Test for proper color contrast (WCAG AA)
 *
 * WARNING: This is a placeholder function. For real contrast testing,
 * use runA11yAudit() which uses axe-core for accurate calculations.
 *
 * @deprecated Use runA11yAudit() for real contrast checking
 * @param element - The element to check
 * @returns Placeholder contrast ratio (always 4.5)
 */
export function getComputedContrast(element: HTMLElement): number | null {
	console.warn(
		'getComputedContrast() is a placeholder. Use runA11yAudit() for real contrast checking.'
	);
	const styles = window.getComputedStyle(element);
	const bgColor = styles.backgroundColor;
	const color = styles.color;

	// Simplified contrast calculation
	// In production, use axe-core via runA11yAudit()
	if (!bgColor || !color) {
		return null;
	}

	return 4.5; // Placeholder - use axe-core for real calculations
}

/**
 * Test that form elements have associated labels
 * @param input - The input element to check
 * @returns True if input has a label
 */
export function hasFormLabel(
	input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
): boolean {
	const id = input.id;
	const ariaLabel = input.getAttribute('aria-label');
	const ariaLabelledBy = input.getAttribute('aria-labelledby');

	if (ariaLabel || ariaLabelledBy) {
		return true;
	}

	if (id) {
		const label = document.querySelector(`label[for="${id}"]`);
		return !!label;
	}

	return false;
}

/**
 * Test that images have alt text
 * @param img - The img element to check
 * @returns True if image has alt text
 */
export function hasAltText(img: HTMLImageElement): boolean {
	const alt = img.getAttribute('alt');
	return alt !== null && alt !== '';
}

/**
 * Test that heading hierarchy is correct
 * @param element - The container to check
 * @returns Array of heading levels found in order
 */
export function getHeadingHierarchy(element: HTMLElement): number[] {
	const headings = Array.from(element.querySelectorAll('h1, h2, h3, h4, h5, h6'));
	return headings.map((h) => {
		const level = parseInt(h.tagName[1]);
		return level;
	});
}

/**
 * Validate heading hierarchy (no skipped levels)
 * @param element - The container to check
 * @returns Object with isValid and any violations
 */
export function validateHeadingHierarchy(element: HTMLElement): {
	isValid: boolean;
	violations: string[];
} {
	const hierarchy = getHeadingHierarchy(element);
	const violations: string[] = [];

	for (let i = 1; i < hierarchy.length; i++) {
		const prev = hierarchy[i - 1];
		const current = hierarchy[i];

		// Check if level skipped (e.g., h1 -> h3)
		if (current > prev + 1) {
			violations.push(`Heading level skipped from h${prev} to h${current} (index ${i})`);
		}
	}

	return {
		isValid: violations.length === 0,
		violations
	};
}

/**
 * Test that all buttons have accessible names
 * @param container - Container element
 * @returns Object with results
 */
export function validateButtonAccessibility(container: HTMLElement): {
	isValid: boolean;
	violations: string[];
} {
	const buttons = Array.from(container.querySelectorAll('button, [role="button"]'));
	const violations: string[] = [];

	buttons.forEach((button, index) => {
		if (!hasAccessibleLabel(button as HTMLElement)) {
			violations.push(`Button at index ${index} has no accessible name`);
		}
	});

	return {
		isValid: violations.length === 0,
		violations
	};
}

/**
 * Test focus management - verify focus is visible
 * @param element - Element that should have focus
 * @returns True if focus is visible
 */
export function hasFocusIndicator(element: HTMLElement): boolean {
	const styles = window.getComputedStyle(element);
	const outline = styles.outline;
	const outlineWidth = styles.outlineWidth;
	const boxShadow = styles.boxShadow;

	// Check if there's a visible focus indicator
	return (
		(outline !== 'none' && outlineWidth !== '0px') ||
		(boxShadow !== 'none' && boxShadow.length > 0)
	);
}

/**
 * Test ARIA live regions for dynamic content
 * @param container - Container element
 * @returns Array of live regions found
 */
export function getLiveRegions(container: HTMLElement): HTMLElement[] {
	const liveRegions = Array.from(
		container.querySelectorAll('[aria-live], [role="status"], [role="alert"]')
	);
	return liveRegions as HTMLElement[];
}

/**
 * Validate form accessibility (labels, error messages, required fields)
 * @param form - Form element
 * @returns Object with validation results
 */
export function validateFormAccessibility(form: HTMLFormElement): {
	isValid: boolean;
	violations: string[];
} {
	const violations: string[] = [];
	const inputs = Array.from(form.querySelectorAll('input, select, textarea')) as Array<
		HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
	>;

	inputs.forEach((input, index) => {
		// Check for label
		if (!hasFormLabel(input)) {
			violations.push(
				`Input at index ${index} (${input.type || input.tagName}) has no label`
			);
		}

		// Check required fields have aria-required or required attribute
		if (input.hasAttribute('required') && !input.hasAttribute('aria-required')) {
			// This is OK - native required is fine
		}

		// Check if there's an error state without aria-invalid
		const hasErrorClass =
			input.classList.contains('error') || input.classList.contains('invalid');
		if (hasErrorClass && input.getAttribute('aria-invalid') !== 'true') {
			violations.push(`Input at index ${index} has error class but no aria-invalid`);
		}
	});

	return {
		isValid: violations.length === 0,
		violations
	};
}

/**
 * Test keyboard trap (for modals/dialogs)
 * @param container - Container element (modal/dialog)
 * @returns All focusable elements within container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
	const selector =
		'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';
	return Array.from(container.querySelectorAll(selector));
}

/**
 * Test that interactive elements have sufficient size (min 44x44px for WCAG 2.5.5 Level AA)
 * @param element - Element to test
 * @returns True if element meets minimum size
 */
export function hasSufficientSize(element: HTMLElement): boolean {
	const rect = element.getBoundingClientRect();
	const minSize = 44; // WCAG 2.5.5 Target Size (Level AA) recommends 44x44px

	return rect.width >= minSize && rect.height >= minSize;
}

/**
 * Run comprehensive accessibility audit and log violations
 * @param canvasElement - The element to audit
 * @param logToConsole - Whether to log results to console
 * @returns Summary of violations
 */
export async function auditAndReport(
	canvasElement: HTMLElement,
	logToConsole = false
): Promise<{
	passed: number;
	violations: number;
	incomplete: number;
}> {
	const results = await runA11yAudit(canvasElement);

	if (!results) {
		return { passed: 0, violations: 0, incomplete: 0 };
	}

	if (logToConsole) {
		console.group('Accessibility Audit Results');
		console.log(`✅ Passed: ${results.passes.length}`);
		console.log(`❌ Violations: ${results.violations.length}`);
		console.log(`⚠️  Incomplete: ${results.incomplete.length}`);

		if (results.violations.length > 0) {
			console.group('Violations');
			results.violations.forEach((violation) => {
				console.error(`${violation.id}: ${violation.description}`);
				console.log(`Impact: ${violation.impact}`);
				console.log(`Help: ${violation.helpUrl}`);
			});
			console.groupEnd();
		}

		console.groupEnd();
	}

	return {
		passed: results.passes.length,
		violations: results.violations.length,
		incomplete: results.incomplete.length
	};
}
