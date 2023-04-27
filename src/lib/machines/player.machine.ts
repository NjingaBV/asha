import { createMachine } from 'xstate';

export type PlayerEvents =
	| { type: 'SUCCESS' }
	| { type: 'FAILED' }
	| { type: 'PLAY' }
	| { type: 'PAUSE' }
	| { type: 'RESET' }
	| { type: 'END' };

export interface PlayerContext {
	videoId: string;
	videoUrl: string;
	videoTitle: string;
	videoDescription: string;
	videoDuration: number;
	videoCurrentTime: number;
	videoThumbnail: string;
	videoViews: number;
}

export const playerMachine = createMachine({
	tsTypes: {} as import('./player.machine.typegen').Typegen0,
	schema: { context: {} as PlayerContext, events: {} as PlayerEvents },
	id: 'playerMachine',
	initial: 'waiting',
	states: {
		waiting: {
			on: {
				SUCCESS: 'ready',
				FAILED: 'failed'
			}
		},
		failed: {},
		ready: {
			id: 'readyMachine',
			initial: 'ready',
			states: {
				ready: {
					on: {
						PLAY: {
							target: 'playing',
							actions: ['playVideo'] //fire actions when the transition happen
						}
					}
				},
				playing: {
					on: {
						PAUSE: {
							target: 'paused',
							actions: ['pauseVideo']
						},
						RESET: {
							target: 'playing',
							actions: ['resetVideo']
						},
						END: {
							target: 'ended',
							actions: ['stopVideo']
						}
					}
				},
				paused: {
					on: {
						PLAY: {
							target: 'playing',
							actions: ['playVideo']
						},
						RESET: {
							target: 'playing',
							actions: ['resetVideo']
						},
						END: {
							target: 'ended',
							actions: ['stopVideo']
						}
					}
				},
				ended: {
					on: {
						RESET: {
							target: 'playing',
							actions: ['resetVideo']
						},
						PLAY: {
							target: 'playing',
							actions: ['resetVideo']
						}
					}
				}
			}
		}
	}
});
