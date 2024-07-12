import { createMachine } from 'xstate'

export type PlayerEvents =
	| { type: 'PLAY' }
	| { type: 'PAUSE' }
	| { type: 'RESET' }
	| { type: 'END' }

export interface PlayerContext {
	mediaId: string
	mediaUrl: string
	mediaTitle: string
	mediaDescription: string
	mediaDuration: number
	mediaCurrentTime: number
	mediaThumbnail: string
	mediaViews: number
	type: 'playerContext'
}

export const playerMachine = createMachine({
	id: 'playerMachine',
	initial: 'ready',
	schema: {
		context: {} as PlayerContext,
		events: {} as PlayerEvents,
	},
	states: {
		ready: {
			entry: () => console.log('ready'),
			on: {
				PLAY: {
					target: 'playing',
					actions: ['playMedia'],
				},
			},
		},
		playing: {
			on: {
				PAUSE: 'paused',
				END: 'ended',
			},
		},
		paused: {
			on: {
				PLAY: 'playing',
				END: 'ended',
			},
		},
		ended: {
			on: {
				RESET: 'ready',
			},
		},
	},
})
