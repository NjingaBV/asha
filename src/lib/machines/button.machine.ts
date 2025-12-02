import { assign, createMachine } from 'xstate';

/**
 * Button State Machine
 * Manages button interaction states: idle, hover, pressed, loading, success, error
 * Following Apple design principles: subtle feedback, clear states
 */

export interface ButtonContext {
	/** Error message if any */
	error?: string;
	/** Success message if any */
	message?: string;
	/** Number of click attempts */
	attempts: number;
}

export type ButtonEvents =
	| { type: 'HOVER' }
	| { type: 'UNHOVER' }
	| { type: 'PRESS' }
	| { type: 'RELEASE' }
	| { type: 'CLICK' }
	| { type: 'START_LOADING' }
	| { type: 'SUCCESS'; message?: string }
	| { type: 'ERROR'; error: string }
	| { type: 'RESET' }
	| { type: 'FOCUS' }
	| { type: 'BLUR' };

export const buttonMachine = createMachine({
	id: 'button',
	context: {
		error: undefined,
		message: undefined,
		attempts: 0
	} as ButtonContext,
	types: {} as {
		context: ButtonContext;
		events: ButtonEvents;
	},
	initial: 'idle',
	states: {
		idle: {
			on: {
				HOVER: 'hover',
				PRESS: 'pressed',
				FOCUS: 'focused',
				START_LOADING: 'loading'
			}
		},
		hover: {
			on: {
				UNHOVER: 'idle',
				PRESS: 'pressed',
				FOCUS: 'hoveredAndFocused'
			}
		},
		focused: {
			on: {
				BLUR: 'idle',
				HOVER: 'hoveredAndFocused',
				PRESS: 'pressed'
			}
		},
		hoveredAndFocused: {
			on: {
				BLUR: 'hover',
				UNHOVER: 'focused',
				PRESS: 'pressed'
			}
		},
		pressed: {
			entry: assign({
				attempts: ({ context }) => context.attempts + 1
			}),
			on: {
				RELEASE: [
					{
						target: 'hover',
						guard: ({ context }) => context.attempts > 0
					},
					{ target: 'idle' }
				],
				CLICK: 'loading'
			}
		},
		loading: {
			on: {
				SUCCESS: {
					target: 'success',
					actions: assign({
						message: ({ event }: any) => event.message || 'Success!'
					})
				},
				ERROR: {
					target: 'error',
					actions: assign({
						error: ({ event }: any) => event.error || 'An error occurred'
					})
				},
				RESET: 'idle'
			}
		},
		success: {
			after: {
				2000: 'idle' // Auto-reset after 2 seconds
			},
			on: {
				RESET: 'idle'
			}
		},
		error: {
			on: {
				RESET: 'idle',
				CLICK: 'loading' // Allow retry on error
			}
		}
	}
});
