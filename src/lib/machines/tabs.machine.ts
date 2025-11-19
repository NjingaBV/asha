import { setup } from 'xstate';

export const tabsMachine = setup({
	types: {
		context: {} as { tabs: string[]; active: string },
		events: {} as { type: 'SELECT'; tab: string }
	}
}).createMachine({
	id: 'tabs',
	context: ({ input }) => ({
		tabs: input.tabs,
		active: input.tabs[0]
	}),
	on: {
		SELECT: {
			actions: [
				({ context, event }) => {
					if (context.tabs.includes(event.tab)) {
						context.active = event.tab;
					}
				}
			]
		}
	}
});
