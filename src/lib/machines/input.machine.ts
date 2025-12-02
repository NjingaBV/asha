/**
 * Input Machine
 *
 * XState machine for managing input field states.
 * Handles focus, validation, and async states.
 *
 * States:
 * - idle: Default resting state
 * - focused: Input has focus
 * - validating: Async validation in progress
 * - valid: Validation passed
 * - invalid: Validation failed
 * - disabled: Input is non-interactive
 */

import { setup, assign } from 'xstate';

// ============================================
// Types
// ============================================

export interface InputContext {
	/** Current input value */
	value: string;
	/** Error message if validation failed */
	errorMessage: string | null;
	/** Whether the field has been touched (focused and blurred) */
	touched: boolean;
	/** Whether the field has been modified */
	dirty: boolean;
	/** Whether the input is disabled */
	isDisabled: boolean;
	/** Whether the input is required */
	isRequired: boolean;
}

export type InputEvent =
	| { type: 'FOCUS' }
	| { type: 'BLUR' }
	| { type: 'CHANGE'; value: string }
	| { type: 'VALIDATE' }
	| { type: 'VALIDATION_SUCCESS' }
	| { type: 'VALIDATION_ERROR'; message: string }
	| { type: 'CLEAR_ERROR' }
	| { type: 'RESET' }
	| { type: 'ENABLE' }
	| { type: 'DISABLE' };

export type InputState = 'idle' | 'focused' | 'validating' | 'valid' | 'invalid' | 'disabled';

// ============================================
// Machine Definition
// ============================================

export const inputMachine = setup({
	types: {
		context: {} as InputContext,
		events: {} as InputEvent
	},
	guards: {
		isEnabled: ({ context }) => !context.isDisabled,
		hasValue: ({ context }) => context.value.length > 0,
		isEmpty: ({ context }) => context.value.length === 0
	},
	actions: {
		setValue: assign({
			value: (_, params: { value: string }) => params.value,
			dirty: true
		}),
		setTouched: assign({ touched: true }),
		setError: assign({
			errorMessage: (_, params: { message: string }) => params.message
		}),
		clearError: assign({ errorMessage: null }),
		setDisabled: assign({ isDisabled: true }),
		clearDisabled: assign({ isDisabled: false }),
		reset: assign({
			value: '',
			errorMessage: null,
			touched: false,
			dirty: false
		})
	}
}).createMachine({
	id: 'input',
	initial: 'idle',
	context: {
		value: '',
		errorMessage: null,
		touched: false,
		dirty: false,
		isDisabled: false,
		isRequired: false
	},
	states: {
		idle: {
			on: {
				FOCUS: {
					target: 'focused',
					guard: 'isEnabled'
				},
				CHANGE: {
					actions: [
						{
							type: 'setValue',
							params: ({ event }) => ({ value: event.value })
						}
					]
				},
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				},
				VALIDATE: 'validating'
			}
		},

		focused: {
			on: {
				BLUR: {
					target: 'idle',
					actions: 'setTouched'
				},
				CHANGE: {
					actions: [
						{
							type: 'setValue',
							params: ({ event }) => ({ value: event.value })
						},
						'clearError'
					]
				},
				VALIDATE: 'validating',
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				}
			}
		},

		validating: {
			on: {
				VALIDATION_SUCCESS: 'valid',
				VALIDATION_ERROR: {
					target: 'invalid',
					actions: [
						{
							type: 'setError',
							params: ({ event }) => ({ message: event.message })
						}
					]
				},
				FOCUS: 'focused',
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				}
			}
		},

		valid: {
			on: {
				FOCUS: 'focused',
				CHANGE: {
					target: 'idle',
					actions: [
						{
							type: 'setValue',
							params: ({ event }) => ({ value: event.value })
						}
					]
				},
				VALIDATE: 'validating',
				CLEAR_ERROR: 'idle',
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				}
			}
		},

		invalid: {
			on: {
				FOCUS: 'focused',
				CHANGE: {
					target: 'idle',
					actions: [
						{
							type: 'setValue',
							params: ({ event }) => ({ value: event.value })
						},
						'clearError'
					]
				},
				VALIDATE: 'validating',
				CLEAR_ERROR: 'idle',
				DISABLE: {
					target: 'disabled',
					actions: ['clearError', 'setDisabled']
				}
			}
		},

		disabled: {
			on: {
				ENABLE: {
					target: 'idle',
					actions: 'clearDisabled'
				}
			}
		}
	},
	on: {
		RESET: {
			target: '.idle',
			actions: 'reset'
		}
	}
});

// ============================================
// Helper Functions
// ============================================

/**
 * Get data attributes for input based on current state
 */
export function getInputDataAttributes(state: InputState, context: InputContext) {
	return {
		'data-state': state,
		'data-touched': context.touched || undefined,
		'data-dirty': context.dirty || undefined,
		'data-invalid': context.errorMessage ? '' : undefined,
		'data-disabled': context.isDisabled || undefined,
		'data-required': context.isRequired || undefined
	};
}

/**
 * Get ARIA attributes for input
 */
export function getInputAriaAttributes(state: InputState, context: InputContext, errorId?: string) {
	return {
		'aria-invalid': state === 'invalid' || !!context.errorMessage,
		'aria-errormessage': context.errorMessage && errorId ? errorId : undefined,
		'aria-required': context.isRequired || undefined,
		'aria-disabled': context.isDisabled || undefined
	};
}
