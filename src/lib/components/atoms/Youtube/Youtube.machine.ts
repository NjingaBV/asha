import { assign, createMachine, fromCallback } from 'xstate'


export const youtubeMachine = createMachine({
    id: 'youtubeMachine',
    initial: 'ready',
    types: {} as {
        context: {
            player: null,
            videoId: string
        }
    },
    context: ({ input }) => ({
        player: {
            playVideo: () => {}
        },
        videoId: input.videoId
    }),
    invoke: {
        src: fromCallback(({ sendBack, receive, input }) => {
            
            const handler = (event) => {
                console.log('sendevent: ', event)
                sendBack(event);
            };
            
            receive((event) => {
                console.log('myevent: ', event)
            });
            window.onYouTubeIframeAPIReady = () => {
                new YT.Player('player', {
                    videoId: input.videoId,
                    playerVars: {
                        rel: 0,
                        showinfo: 0,
                        modestbranding: 0,
                        playsinline: 1,
                        controls: 1,
                        autoplay: 0,
                        iv_load_policy: 3
                    }
                }).addEventListener('youtube', handler)
            };
            
            return () => {
                window.removeEventListener('youtube', handler);
            }
        }),
        input: ({ context, event }) => ({
            videoId: context.videoId
        })
    },
    states: {
        ready: {
            on: {
                    READY: {
                        guard: ({context}) => {
                            console.log("gard is here: ", context.player)
                            context.player != null
                        },
                        target: 'playing',
                        actions: ({context}) => {
                            console.log('player ready: ', context.player)
                            context.player.playVideo();
                        }
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
);

