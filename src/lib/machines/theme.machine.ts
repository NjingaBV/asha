import { createMachine } from 'xstate';

export type ThemeContext = {
	theme: 'light' | 'dark' | 'system';
};
export type ThemeEvent = { type: 'SET'; value: 'light' | 'dark' | 'system' } | { type: 'TOGGLE' };

export const themeMachine = createMachine<ThemeContext, ThemeEvent>({
	id: 'theme',
	initial: 'system',
	states: {
		active: {}
	},
	on: {
		SET: {
			actions: ({ context, event }) => {
				context.theme = event.value;
			}
		},
		TOGGLE: {
			actions: ({ context }) => {
				context.theme = context.theme === 'dark' ? 'light' : 'dark';
			}
		}
	}
});
