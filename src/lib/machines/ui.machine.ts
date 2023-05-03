import { createMachine, spawn, type MachineConfig, type ActorRef } from 'xstate';
import { playerMachine, type PlayerContext, type PlayerEvents } from './player.machine';

export type UIEvents =
	| { type: 'TOGGLE_MENU' }
	| { type: 'OPEN_PLAYER'; mediaUrl: string }
	| { type: 'CLOSE_PLAYER' };

export interface UIContext {
	isMenuOpen: boolean;
	isPlaying: boolean;
	playerMachineRef?: ActorRef<PlayerContext, PlayerEvents>;
	type: 'uiContext';
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
						OPEN_PLAYER: 'playing'
					}
				},
				playing: {
					entry: (_, event: { type: 'OPEN_PLAYER'; mediaUrl: string }) => ({
						playerMachineRef: spawn(
							playerMachine.withContext({
								...playerMachine.context,
								mediaUrl: event.mediaUrl
							})
						)
					}),
					on: {
						CLOSE_PLAYER: 'idle'
					}
				}
			}
		}
	}
};

export const uiMachine = createMachine(uiMachineConfig);
