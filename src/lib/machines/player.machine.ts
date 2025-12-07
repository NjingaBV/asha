import { createMachine, assign } from 'xstate';

export type PlayerEvents =
	| { type: 'PLAY' }
	| { type: 'PAUSE' }
	| { type: 'RESET' }
	| { type: 'END' }
	| { type: 'TOGGLE_EXPAND' };

export interface PlayerContext {
	mediaId?: string;
	mediaUrl?: string;
	mediaTitle?: string;
	mediaDescription?: string;
	mediaDuration?: number;
	mediaCurrentTime?: number;
	mediaThumbnail?: string;
	mediaViews?: number;
	expanded: boolean;
}

export const playerMachine = createMachine({
	id: 'playerMachine',
	context: {
		expanded: false
	} as PlayerContext,
	types: {} as {
		context: PlayerContext;
		events: PlayerEvents;
	},
	initial: 'ready',
	states: {
		ready: {
			on: {
				PLAY: {
					target: 'playing',
					actions: ['playMedia']
				},
				TOGGLE_EXPAND: {
					actions: assign({
						expanded: ({ context }) => !context.expanded
					})
				}
			}
		},
		playing: {
			on: {
				PAUSE: 'paused',
				END: 'ended',
				TOGGLE_EXPAND: {
					actions: assign({
						expanded: ({ context }) => !context.expanded
					})
				}
			}
		},
		paused: {
			on: {
				PLAY: 'playing',
				END: 'ended',
				TOGGLE_EXPAND: {
					actions: assign({
						expanded: ({ context }) => !context.expanded
					})
				}
			}
		},
		ended: {
			on: {
				RESET: 'ready',
				TOGGLE_EXPAND: {
					actions: assign({
						expanded: ({ context }) => !context.expanded
					})
				}
			}
		}
	}
});
