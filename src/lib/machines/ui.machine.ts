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
    context: {} as UIContext,
    types: {} as {
        context: UIContext;
        events: UIEvents;
    },
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
			initial: 'closed',
			states: {
				closed: {
                on: {
                    OPEN_PLAYER: {
                        target: 'open',
                        actions: assign({
                            // loosen typing
                            mediaUrl: (ctx: any, event: any) => (event?.mediaUrl ?? ctx.mediaUrl)
                        })
                    }
                }
				},
				open: {
					invoke: {
						id: 'playerActor',
						src: playerMachine,
                    input: (context: UIContext) => ({
                        mediaUrl: context.mediaUrl
                    }),
						onDone: 'closed',
						onError: 'closed'
					},
					on: {
						CLOSE_PLAYER: 'closed'
					}
				}
			}
		}
    }
});
