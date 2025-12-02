/**
 * Modal Machine
 *
 * XState machine for managing modal dialog states.
 * Handles open/close transitions, focus trap, and escape key behavior.
 *
 * States:
 * - closed: Modal is not visible
 * - opening: Transition animation in progress
 * - open: Modal is visible and interactive
 * - closing: Closing transition in progress
 *
 * Features:
 * - Focus trap management
 * - Escape key handling
 * - Backdrop click handling
 * - Proper ARIA announcements
 */

import { setup, assign } from 'xstate';

// ============================================
// Types
// ============================================

export interface ModalContext {
	/** Element that had focus before modal opened */
	previousActiveElement: HTMLElement | null;
	/** Whether to close on escape key */
	closeOnEscape: boolean;
	/** Whether to close on backdrop click */
	closeOnBackdrop: boolean;
	/** Whether modal is currently transitioning */
	isTransitioning: boolean;
}

export type ModalEvent =
	| { type: 'OPEN' }
	| { type: 'CLOSE' }
	| { type: 'ESCAPE_KEY' }
	| { type: 'BACKDROP_CLICK' }
	| { type: 'ANIMATION_END' }
	| { type: 'SET_PREVIOUS_ELEMENT'; element: HTMLElement | null };

export type ModalState = 'closed' | 'opening' | 'open' | 'closing';

// ============================================
// Machine Definition
// ============================================

export const modalMachine = setup({
	types: {
		context: {} as ModalContext,
		events: {} as ModalEvent
	},
	guards: {
		canCloseOnEscape: ({ context }) => context.closeOnEscape,
		canCloseOnBackdrop: ({ context }) => context.closeOnBackdrop
	},
	actions: {
		savePreviousElement: assign({
			previousActiveElement: () => {
				if (typeof document !== 'undefined') {
					return document.activeElement as HTMLElement | null;
				}
				return null;
			}
		}),
		restoreFocus: ({ context }) => {
			if (context.previousActiveElement && typeof document !== 'undefined') {
				// Delay to ensure modal is fully closed
				requestAnimationFrame(() => {
					context.previousActiveElement?.focus();
				});
			}
		},
		setTransitioning: assign({ isTransitioning: true }),
		clearTransitioning: assign({ isTransitioning: false }),
		clearPreviousElement: assign({ previousActiveElement: null })
	}
}).createMachine({
	id: 'modal',
	initial: 'closed',
	context: {
		previousActiveElement: null,
		closeOnEscape: true,
		closeOnBackdrop: true,
		isTransitioning: false
	},
	states: {
		closed: {
			on: {
				OPEN: {
					target: 'opening',
					actions: ['savePreviousElement', 'setTransitioning']
				}
			}
		},

		opening: {
			on: {
				ANIMATION_END: {
					target: 'open',
					actions: 'clearTransitioning'
				},
				CLOSE: {
					target: 'closing',
					actions: 'setTransitioning'
				}
			},
			// Auto-transition if no animation
			after: {
				300: {
					target: 'open',
					actions: 'clearTransitioning'
				}
			}
		},

		open: {
			on: {
				CLOSE: {
					target: 'closing',
					actions: 'setTransitioning'
				},
				ESCAPE_KEY: {
					target: 'closing',
					guard: 'canCloseOnEscape',
					actions: 'setTransitioning'
				},
				BACKDROP_CLICK: {
					target: 'closing',
					guard: 'canCloseOnBackdrop',
					actions: 'setTransitioning'
				}
			}
		},

		closing: {
			on: {
				ANIMATION_END: {
					target: 'closed',
					actions: ['clearTransitioning', 'restoreFocus', 'clearPreviousElement']
				},
				OPEN: {
					target: 'opening',
					actions: 'setTransitioning'
				}
			},
			// Auto-transition if no animation
			after: {
				200: {
					target: 'closed',
					actions: ['clearTransitioning', 'restoreFocus', 'clearPreviousElement']
				}
			}
		}
	}
});

// ============================================
// Focus Trap Helper
// ============================================

/**
 * Get all focusable elements within a container
 */
export function getFocusableElements(container: HTMLElement): HTMLElement[] {
	const selector = [
		'a[href]',
		'button:not([disabled])',
		'input:not([disabled])',
		'select:not([disabled])',
		'textarea:not([disabled])',
		'[tabindex]:not([tabindex="-1"])',
		'[contenteditable="true"]'
	].join(', ');

	return Array.from(container.querySelectorAll<HTMLElement>(selector)).filter(
		(el) => el.offsetParent !== null // Only visible elements
	);
}

/**
 * Create a focus trap for modal dialogs
 */
export function createFocusTrap(container: HTMLElement) {
	const focusableElements = getFocusableElements(container);
	const firstFocusable = focusableElements[0];
	const lastFocusable = focusableElements[focusableElements.length - 1];

	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const activeElement = document.activeElement;

		if (event.shiftKey) {
			// Shift + Tab: moving backwards
			if (activeElement === firstFocusable || !container.contains(activeElement)) {
				event.preventDefault();
				lastFocusable?.focus();
			}
		} else {
			// Tab: moving forwards
			if (activeElement === lastFocusable || !container.contains(activeElement)) {
				event.preventDefault();
				firstFocusable?.focus();
			}
		}
	}

	// Initial focus
	if (firstFocusable) {
		requestAnimationFrame(() => firstFocusable.focus());
	}

	container.addEventListener('keydown', handleKeydown);

	return {
		destroy() {
			container.removeEventListener('keydown', handleKeydown);
		},
		update() {
			// Re-query focusable elements if DOM changes
			const updated = getFocusableElements(container);
			return updated;
		}
	};
}

// ============================================
// Data Attributes Helper
// ============================================

export function getModalDataAttributes(state: ModalState, context: ModalContext) {
	return {
		'data-state': state,
		'data-transitioning': context.isTransitioning || undefined
	};
}
