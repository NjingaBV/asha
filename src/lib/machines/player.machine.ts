import { createMachine } from 'xstate';
import type { MachineConfig } from 'xstate';

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

export const playerMachineConfig: MachineConfig<PlayerContext, any, PlayerEvents> = {
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
							actions: ['playVideo']
						}
					}
				},
				playing: {
					on: {
						PAUSE: 'paused',
						END: 'ended'
					}
				},
				paused: {
					on: {
						PLAY: 'playing',
						END: 'ended'
					}
				},
				ended: {
					on: {
						RESET: 'ready'
					}
				}
			}
		}
	}
};

export const playerMachine = createMachine(playerMachineConfig);
