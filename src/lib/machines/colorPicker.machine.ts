import { setup, assign } from 'xstate';

export const colorPickerMachine = setup({
	types: {
		context: {} as {
			options: string[];
			selected?: string;
		},
		events: {} as { type: 'SELECT'; value: string } | { type: 'RESET' },
		input: {} as {
			options?: string[];
			selected?: string;
		}
	},
	actions: {
		selectColor: assign({
			selected: (_, params: { value: string }) => params.value
		}),
		resetColor: assign({
			selected: () => undefined
		})
	}
}).createMachine({
	id: 'colorPicker',
	initial: 'idle',
	context: ({ input }) => ({
		options: input?.options ?? [],
		selected: input?.selected
	}),
	states: {
		idle: {
			on: {
				SELECT: {
					target: 'selected',
					actions: [
						{
							type: 'selectColor',
							params: ({ event }) => ({ value: event.value })
						}
					]
				},
				RESET: {
					actions: ['resetColor']
				}
			}
		},
		selected: {
			on: {
				SELECT: {
					actions: [
						{
							type: 'selectColor',
							params: ({ event }) => ({ value: event.value })
						}
					]
				},
				RESET: {
					target: 'idle',
					actions: ['resetColor']
				}
			}
		}
	}
});

// Re-export types for consumers
export type ColorPickerContext = {
	options: string[];
	selected?: string;
};
export type ColorPickerEvent = { type: 'SELECT'; value: string } | { type: 'RESET' };
