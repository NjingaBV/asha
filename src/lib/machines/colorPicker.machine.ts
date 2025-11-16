import { createMachine } from 'xstate';

export type ColorPickerContext = {
	options: string[];
	selected?: string;
};
export type ColorPickerEvent = { type: 'SELECT'; value: string } | { type: 'RESET' };

export const colorPickerMachine = createMachine<ColorPickerContext, ColorPickerEvent>({
	id: 'colorPicker',
	initial: 'idle',
	states: {
		idle: {
			on: {
				SELECT: {
					target: 'selected',
					actions: ({ context, event }) => {
						context.selected = event.value;
					}
				},
				RESET: {
					actions: ({ context }) => {
						context.selected = undefined;
					}
				}
			}
		},
		selected: {
			on: {
				SELECT: {
					actions: ({ context, event }) => {
						context.selected = event.value;
					}
				},
				RESET: {
					target: 'idle',
					actions: ({ context }) => {
						context.selected = undefined;
					}
				}
			}
		}
	}
});
