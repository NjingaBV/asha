// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
	'@@xstate/typegen': true;
	internalEvents: {
		'xstate.init': { type: 'xstate.init' };
	};
	invokeSrcNameMap: {};
	missingImplementations: {
		actions: 'pauseVideo' | 'playVideo' | 'resetVideo' | 'stopVideo';
		delays: never;
		guards: never;
		services: never;
	};
	eventsCausingActions: {
		pauseVideo: 'PAUSE';
		playVideo: 'PLAY';
		resetVideo: 'PLAY' | 'RESET';
		stopVideo: 'END';
	};
	eventsCausingDelays: {};
	eventsCausingGuards: {};
	eventsCausingServices: {};
	matchesStates:
		| 'failed'
		| 'ready'
		| 'ready.ended'
		| 'ready.paused'
		| 'ready.playing'
		| 'ready.ready'
		| 'waiting'
		| { ready?: 'ended' | 'paused' | 'playing' | 'ready' };
	tags: never;
}
