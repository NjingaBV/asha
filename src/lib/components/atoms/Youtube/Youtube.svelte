<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { useMachine } from '@xstate/svelte';
	import { playerMachine } from '$lib/machines';

	const { state, send } = useMachine(playerMachine);

	const dispatch = createEventDispatcher();

	export let videoId: string;

	let player;

	onMount(() => {
		window.onYouTubeIframeAPIReady = () => {
			/* eslint-disable */
			player = new YT.Player('player', {
				events: {
					onReady: onPlayerReady,
					onStateChange: onPlayerStateChange
				}
			});
		};
	});

	/* eslint-disable */
	const onPlayerReady = (event: YT.PlayerEvent) => {
		event.target.playVideo();
	};

	/* eslint-disable */
	const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
		if (event.data === YT.PlayerState.PLAYING) {
			dispatch('isPlaying');
		}
	};
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="relative w-full aspect-[16/9]">
	<iframe
		id="player"
		title="Player"
		loading="lazy"
		class="w-full h-full"
		src="http://www.youtube.com/embed/{videoId}?enablejsapi=1&rel=0&showinfo=0&modestbranding=0&playsinline=1&controls=1&autoplay=0&iv_load_policy=1&origin=http://localhost:6006"
		frameborder="0"
		allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
</div>
