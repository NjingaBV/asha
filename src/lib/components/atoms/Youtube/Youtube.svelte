<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

    const dispatch = createEventDispatcher();

	export let videoId: string;

	let player;

	onMount(() => {
		window.onYouTubeIframeAPIReady = () => {
			player = new YT.Player('player', {
				events: {
					onReady: onPlayerReady,
					onStateChange: onPlayerStateChange
				}
			});
            console.log('player: ',player)
		};
	});

	const onPlayerReady = (event: YT.PlayerEvent) => {
		event.target.playVideo();
	};

	const onPlayerStateChange = (event: YT.OnStateChangeEvent) => {
		if (event.data === YT.PlayerState.PLAYING) {
			console.log('video is playing');
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
