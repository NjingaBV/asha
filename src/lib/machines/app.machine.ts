import { assign, createMachine, sendTo, type MachineConfig } from 'xstate';

export type AppEvents =
	| { type: 'PAGE_LOADED'; pathname: string }
	| { type: 'MEDIA_PLAYING' }
	| { type: 'MEDIA_PAUSE' }
	| { type: 'MEDIA_STOP' };

export interface AppContext {
	pathname: string;
}

export const appMachineConfig: MachineConfig<AppContext, any, AppEvents> = {
	schema: { context: {} as AppContext, events: {} as AppEvents },
	id: 'appMachine',
	initial: 'idle',
	states: {
		idle: {
			on: {
				PAGE_LOADED: {
					target: 'browsing',
					actions: assign({
						pathname: (_, event) => event.pathname
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

export const appMachine = createMachine(appMachineConfig);
