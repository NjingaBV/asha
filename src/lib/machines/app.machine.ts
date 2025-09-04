import { assign, createMachine, sendTo } from 'xstate';

export type AppEvents =
	| { type: 'PAGE_LOADED'; pathname: string }
	| { type: 'MEDIA_PLAYING' }
	| { type: 'MEDIA_PAUSE' }
	| { type: 'MEDIA_STOP' };

export interface AppContext {
	pathname: string;
}

export const appMachineConfig = {
	id: 'appMachine',
	initial: 'idle',
	states: {
		idle: {
			on: {
				PAGE_LOADED: {
					target: 'browsing',
					actions: assign({
						// best-effort typing
						pathname: (_: any, event: any) => event?.pathname ?? ''
					})
				}
			}
		},
		browsing: {
			on: {
				MEDIA_PLAYING: {
					target: 'playing',
					actions: sendTo('uiMachine', { type: 'MEDIA_PLAYING' })
				}
			}
		},
		playing: {
			on: {
				MEDIA_PAUSE: {
					target: 'paused',
					actions: sendTo('uiMachine', { type: 'MEDIA_PAUSE' })
				},
				MEDIA_STOP: {
					target: 'idle',
					actions: sendTo('uiMachine', { type: 'MEDIA_STOP' })
				}
			}
		},
		paused: {
			on: {
				MEDIA_PLAYING: {
					target: 'playing',
					actions: sendTo('uiMachine', { type: 'MEDIA_PLAYING' })
				},
				MEDIA_STOP: {
					target: 'idle',
					actions: sendTo('uiMachine', { type: 'MEDIA_STOP' })
				}
			}
		}
	}
};

export const appMachine = createMachine(appMachineConfig as any);
