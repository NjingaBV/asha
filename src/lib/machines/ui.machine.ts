import { createMachine } from 'xstate';
import type { MachineConfig } from 'xstate';

export type UIEvents =
	| { type: 'TOGGLE_MENU' }
	| { type: 'MEDIA_PLAYING' }
	| { type: 'MEDIA_PAUSE' }
	| { type: 'MEDIA_STOP' };

export interface UIContext {
	isMenuOpen: boolean;
	isPlaying: boolean;
}

export const uiMachineConfig: MachineConfig<UIContext, any, UIEvents> = {
	schema: { context: {} as UIContext, events: {} as UIEvents },
	id: 'uiMachine',
	type: 'parallel',
	states: {
		menu: {
			initial: 'closed',
			states: {
				closed: {
					on: {
						TOGGLE_MENU: 'open'
					}
				},
				open: {
					on: {
						TOGGLE_MENU: 'closed'
					}
				}
			}
		},
		player: {
			initial: 'idle',
			states: {
				idle: {
					on: {
						MEDIA_PLAYING: 'playing'
					}
				},
				playing: {
					on: {
						MEDIA_PAUSE: 'paused',
						MEDIA_STOP: 'idle'
					}
				},
				paused: {
					on: {
						MEDIA_PLAYING: 'playing',
						MEDIA_STOP: 'idle'
					}
				}
			}
		}
	}
};

export const uiMachine = createMachine(uiMachineConfig);
