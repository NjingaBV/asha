import { setup, assign } from 'xstate';

export type Theme = 'light' | 'dark' | 'system';

export const themeMachine = setup({
	types: {
		context: {} as {
			theme: Theme;
		},
		events: {} as { type: 'SET'; value: Theme } | { type: 'TOGGLE' }
	},
	actions: {
		setTheme: assign({
			theme: (_, params: { value: Theme }) => params.value
		}),
		toggleTheme: assign({
			theme: ({ context }) => (context.theme === 'dark' ? 'light' : 'dark')
		})
	}
}).createMachine({
	id: 'theme',
	initial: 'active',
	context: {
		theme: 'system'
	},
	states: {
		active: {}
	},
	on: {
		SET: {
			actions: [
				{
					type: 'setTheme',
					params: ({ event }) => ({ value: event.value })
				}
			]
		},
		TOGGLE: {
			actions: ['toggleTheme']
		}
	}
});

// Re-export types for consumers
export type ThemeContext = {
	theme: Theme;
};
export type ThemeEvent = { type: 'SET'; value: Theme } | { type: 'TOGGLE' };
