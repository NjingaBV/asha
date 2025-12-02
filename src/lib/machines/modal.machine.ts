import { assign, createMachine } from 'xstate';

/**
 * Modal State Machine
 * Manages modal lifecycle: closed, opening, open, closing
 * Handles focus trap, escape key, backdrop clicks
 * Following WCAG 2.2 AA guidelines for dialogs
 */

export interface ModalContext {
	/** Element that triggered the modal (to restore focus) */
	triggerElement?: HTMLElement;
	/** Whether to close on backdrop click */
	closeOnBackdrop: boolean;
	/** Whether to close on escape key */
	closeOnEscape: boolean;
	/** Modal content element */
	contentElement?: HTMLElement;
	/** Trapped focus elements */
	focusableElements?: HTMLElement[];
}

export type ModalEvents =
	| { type: 'OPEN'; triggerElement?: HTMLElement }
	| { type: 'CLOSE' }
	| { type: 'BACKDROP_CLICK' }
	| { type: 'ESCAPE_KEY' }
	| { type: 'OPENED' }
	| { type: 'CLOSED' }
	| { type: 'FOCUS_FIRST' }
	| { type: 'FOCUS_LAST' }
	| { type: 'TAB_FORWARD' }
	| { type: 'TAB_BACKWARD' };

export const modalMachine = createMachine({
	id: 'modal',
	context: {
		triggerElement: undefined,
		closeOnBackdrop: true,
		closeOnEscape: true,
		contentElement: undefined,
		focusableElements: []
	} as ModalContext,
	types: {} as {
		context: ModalContext;
		events: ModalEvents;
	},
	initial: 'closed',
	states: {
		closed: {
			entry: 'restoreFocus',
			on: {
				OPEN: {
					target: 'opening',
					actions: assign({
						triggerElement: ({ event }) => {
							if (event.type === 'OPEN') {
								return event.triggerElement;
							}
							return undefined;
						}
					})
				}
			}
		},
		opening: {
			entry: ['lockBodyScroll', 'announceOpening'],
			after: {
				// Small delay for animation
				200: 'open'
			},
			on: {
				OPENED: 'open',
				CLOSE: 'closing'
			}
		},
		open: {
			entry: ['trapFocus', 'focusFirstElement'],
			on: {
				CLOSE: 'closing',
				BACKDROP_CLICK: {
					target: 'closing',
					guard: ({ context }) => context.closeOnBackdrop
				},
				ESCAPE_KEY: {
					target: 'closing',
					guard: ({ context }) => context.closeOnEscape
				},
				FOCUS_FIRST: {
					actions: 'focusFirstElement'
				},
				FOCUS_LAST: {
					actions: 'focusLastElement'
				},
				TAB_FORWARD: {
					actions: 'handleTabForward'
				},
				TAB_BACKWARD: {
					actions: 'handleTabBackward'
				}
			}
		},
		closing: {
			entry: ['unlockBodyScroll', 'announceClosing'],
			after: {
				// Animation time
				200: 'closed'
			},
			on: {
				CLOSED: 'closed'
			}
		}
	}
});

/**
 * Default modal actions (to be implemented by the component)
 */
export const modalActions = {
	lockBodyScroll: () => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = 'hidden';
		}
	},
	unlockBodyScroll: () => {
		if (typeof document !== 'undefined') {
			document.body.style.overflow = '';
		}
	},
	trapFocus: ({ context }: { context: ModalContext }) => {
		if (typeof document !== 'undefined' && context.contentElement) {
			// Get all focusable elements within modal
			const focusableSelectors = [
				'a[href]',
				'button:not([disabled])',
				'textarea:not([disabled])',
				'input:not([disabled])',
				'select:not([disabled])',
				'[tabindex]:not([tabindex="-1"])'
			].join(', ');

			const elements = Array.from(
				context.contentElement.querySelectorAll(focusableSelectors)
			) as HTMLElement[];

			// Store in context via side effect
			// Note: This should be handled through assign in the machine definition
			context.focusableElements = elements;
		}
	},
	focusFirstElement: ({ context }: { context: ModalContext }) => {
		if (context.focusableElements && context.focusableElements.length > 0) {
			context.focusableElements[0]?.focus();
		}
	},
	focusLastElement: ({ context }: { context: ModalContext }) => {
		if (context.focusableElements && context.focusableElements.length > 0) {
			context.focusableElements[context.focusableElements.length - 1]?.focus();
		}
	},
	restoreFocus: ({ context }: { context: ModalContext }) => {
		if (context.triggerElement) {
			context.triggerElement.focus();
		}
	},
	announceOpening: () => {
		// Announce to screen readers
		if (typeof document !== 'undefined') {
			const announcement = document.createElement('div');
			announcement.setAttribute('role', 'status');
			announcement.setAttribute('aria-live', 'polite');
			announcement.className = 'sr-only';
			announcement.textContent = 'Dialog opened';
			document.body.appendChild(announcement);
			setTimeout(() => announcement.remove(), 1000);
		}
	},
	announceClosing: () => {
		// Announce to screen readers
		if (typeof document !== 'undefined') {
			const announcement = document.createElement('div');
			announcement.setAttribute('role', 'status');
			announcement.setAttribute('aria-live', 'polite');
			announcement.className = 'sr-only';
			announcement.textContent = 'Dialog closed';
			document.body.appendChild(announcement);
			setTimeout(() => announcement.remove(), 1000);
		}
	},
	handleTabForward: ({ context }: { context: ModalContext }) => {
		if (
			context.focusableElements &&
			context.focusableElements.length > 0 &&
			typeof document !== 'undefined'
		) {
			const currentIndex = context.focusableElements.indexOf(
				document.activeElement as HTMLElement
			);
			if (currentIndex === context.focusableElements.length - 1) {
				// Wrap to first
				context.focusableElements[0]?.focus();
			}
		}
	},
	handleTabBackward: ({ context }: { context: ModalContext }) => {
		if (
			context.focusableElements &&
			context.focusableElements.length > 0 &&
			typeof document !== 'undefined'
		) {
			const currentIndex = context.focusableElements.indexOf(
				document.activeElement as HTMLElement
			);
			if (currentIndex === 0) {
				// Wrap to last
				context.focusableElements[context.focusableElements.length - 1]?.focus();
			}
		}
	}
};
