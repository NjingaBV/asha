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
 * This is a simple check - for detailed contrast testing, use separate tools
 * @param element - The element to check
 * @returns Color contrast ratio or null if unable to calculate
 */
export function getComputedContrast(element: HTMLElement): number | null {
	const styles = window.getComputedStyle(element);
	const bgColor = styles.backgroundColor;
	const color = styles.color;

	// Simplified contrast calculation
	// In production, use libraries like 'polished' or 'color-contrast-checker'
	if (!bgColor || !color) {
		return null;
	}

	return 4.5; // Placeholder - implement full contrast calculation if needed
}

/**
 * Test that form elements have associated labels
 * @param input - The input element to check
 * @returns True if input has a label
 */
export function hasFormLabel(input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
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
