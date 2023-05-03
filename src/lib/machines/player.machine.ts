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
	mediaId: string;
	mediaUrl: string;
	mediaTitle: string;
	mediaDescription: string;
	mediaDuration: number;
	mediaCurrentTime: number;
	mediaThumbnail: string;
	mediaViews: number;
	type: 'playerContext';
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
							actions: ['playMedia']
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
