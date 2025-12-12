/**
 * Button Machine
 *
 * XState machine for managing button interaction states.
 * Handles hover, focus, press, and loading states with proper transitions.
 *
 * States:
 * - idle: Default resting state
 * - hovered: Mouse is over the button
 * - focused: Button has keyboard focus
 * - pressed: Button is being pressed (mouse down or Enter/Space)
 * - loading: Async operation in progress
 * - disabled: Button is non-interactive
 *
 * @example
 * ```ts
 * const actor = createActor(buttonMachine);
 * actor.subscribe((state) => console.log(state.value));
 * actor.start();
 * actor.send({ type: 'HOVER' });
 * ```
 */

import { setup, assign } from 'xstate';

// ============================================
// Types
// ============================================

export interface ButtonContext {
	/** Whether the button is in loading state */
	isLoading: boolean;
	/** Whether the button is disabled */
	isDisabled: boolean;
	/** Track if we have focus for focus-visible behavior */
	hasFocus: boolean;
	/** Track if focus came from keyboard */
	focusFromKeyboard: boolean;
}

export type ButtonEvent =
	| { type: 'HOVER' }
	| { type: 'UNHOVER' }
	| { type: 'FOCUS'; fromKeyboard?: boolean }
	| { type: 'BLUR' }
	| { type: 'PRESS' }
	| { type: 'RELEASE' }
	| { type: 'CLICK' }
	| { type: 'START_LOADING' }
	| { type: 'STOP_LOADING' }
	| { type: 'ENABLE' }
	| { type: 'DISABLE' };

export type ButtonState = 'idle' | 'hovered' | 'focused' | 'pressed' | 'loading' | 'disabled';

// ============================================
// Machine Definition
// ============================================

export const buttonMachine = setup({
	types: {
		context: {} as ButtonContext,
		events: {} as ButtonEvent
	},
	guards: {
		isEnabled: ({ context }) => !context.isDisabled && !context.isLoading,
		isNotLoading: ({ context }) => !context.isLoading,
		isLoading: ({ context }) => context.isLoading,
		isDisabled: ({ context }) => context.isDisabled
	},
	actions: {
		setLoading: assign({ isLoading: true }),
		clearLoading: assign({ isLoading: false }),
		setDisabled: assign({ isDisabled: true }),
		clearDisabled: assign({ isDisabled: false }),
		setFocus: assign({
			hasFocus: true,
			focusFromKeyboard: (_, params: { fromKeyboard?: boolean }) =>
				params?.fromKeyboard ?? false
		}),
		clearFocus: assign({
			hasFocus: false,
			focusFromKeyboard: false
		})
	}
}).createMachine({
	id: 'button',
	initial: 'idle',
	context: {
		isLoading: false,
		isDisabled: false,
		hasFocus: false,
		focusFromKeyboard: false
	},
	states: {
		idle: {
			on: {
				HOVER: {
					target: 'hovered',
					guard: 'isEnabled'
				},
				FOCUS: {
					target: 'focused',
					guard: 'isEnabled',
					actions: [
						{
							type: 'setFocus',
							params: ({ event }) => ({ fromKeyboard: event.fromKeyboard })
						}
					]
				},
				PRESS: {
					target: 'pressed',
					guard: 'isEnabled'
				},
				START_LOADING: {
					target: 'loading',
					actions: 'setLoading'
				},
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				}
			}
		},

		hovered: {
			on: {
				UNHOVER: 'idle',
				FOCUS: {
					target: 'focused',
					actions: [
						{
							type: 'setFocus',
							params: ({ event }) => ({ fromKeyboard: event.fromKeyboard })
						}
					]
				},
				PRESS: 'pressed',
				START_LOADING: {
					target: 'loading',
					actions: 'setLoading'
				},
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				}
			}
		},

		focused: {
			on: {
				BLUR: {
					target: 'idle',
					actions: 'clearFocus'
				},
				HOVER: 'focused', // Stay focused, but could show hover styles too
				UNHOVER: 'focused', // Stay focused
				PRESS: 'pressed',
				START_LOADING: {
					target: 'loading',
					actions: 'setLoading'
				},
				DISABLE: {
					target: 'disabled',
					actions: ['setDisabled', 'clearFocus']
				}
			}
		},

		pressed: {
			on: {
				RELEASE: [
					{
						target: 'hovered',
						guard: 'isEnabled'
					},
					{
						target: 'idle'
					}
				],
				CLICK: [
					{
						target: 'focused',
						guard: 'isEnabled'
					}
				],
				UNHOVER: 'idle', // Mouse left while pressing
				START_LOADING: {
					target: 'loading',
					actions: 'setLoading'
				},
				DISABLE: {
					target: 'disabled',
					actions: 'setDisabled'
				}
			}
		},

		loading: {
			on: {
				STOP_LOADING: {
					target: 'idle',
					actions: 'clearLoading'
				},
				DISABLE: {
					target: 'disabled',
					actions: ['clearLoading', 'setDisabled']
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
	}
});

// ============================================
// Helper Functions
// ============================================

/**
 * Get data attributes for button based on current state
 */
export function getButtonDataAttributes(state: ButtonState, context: unknown) {
	return {
		'data-state': state,
		'data-loading': context.isLoading || undefined,
		'data-disabled': context.isDisabled || undefined,
		'data-focus-visible': context.focusFromKeyboard && context.hasFocus ? '' : undefined
	};
}

/**
 * Map state to visual class modifiers
 */
export function getButtonStateClasses(state: ButtonState): string {
	const stateClasses: Record<ButtonState, string> = {
		idle: '',
		hovered: 'is-hovered',
		focused: 'is-focused',
		pressed: 'is-pressed',
		loading: 'is-loading',
		disabled: 'is-disabled'
	};
	return stateClasses[state] || '';
}

export type { ButtonContext as ButtonMachineContext };
