import { assign, createMachine } from 'xstate';
import { playerMachine } from './player.machine';

export interface UIContext {
	mediaUrl: string;
}

export type UIEvents =
	| { type: 'TOGGLE_MENU' }
	| { type: 'OPEN_PLAYER'; mediaUrl: string }
	| { type: 'CLOSE_PLAYER' };

export const uiMachine = createMachine({
	id: 'uiMachine',
	type: 'parallel',
	schema: {
		context: {} as UIContext,
		events: {} as UIEvents,
	},
	states: {
		menu: {
			initial: 'closed',
			states: {
				closed: {
					on: {
						TOGGLE_MENU: 'open',
					},
				},
				open: {
					on: {
						TOGGLE_MENU: 'closed',
					},
				},
			},
		},
		player: {
			initial: 'closed',
			states: {
				closed: {
					on: {
						OPEN_PLAYER: {
							target: 'open',
							actions: assign({
								mediaUrl: (_, event) => event.mediaUrl,
							}),
						},
					},
				},
				open: {
					invoke: {
						id: 'playerActor',
						src: playerMachine,
						data: (context) => ({
							mediaUrl: context.mediaUrl,
						}),
						onDone: 'closed',
						onError: 'closed',
					},
					on: {
						CLOSE_PLAYER: 'closed',
					},
				},
			},
		},
	},
});
