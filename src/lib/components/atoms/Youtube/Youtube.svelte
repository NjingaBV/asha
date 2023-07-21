<script lang="ts">
	import { onMount } from 'svelte';

	export let videoId: string;
	export let isPlayerReady = false;

	let player: any;

	onMount(() => {
		window.onYouTubeIframeAPIReady = () => {
			/* eslint-disable */
			player = new YT.Player('player', {
				videoId,
				playerVars: {
					rel: 0,
					showinfo: 0,
					modestbranding: 0,
					playsinline: 1,
					controls: 1,
					autoplay: 0,
					iv_load_policy: 3
          		},
				events: {
					onReady: onPlayerReady
				}
			});
		};
	});

	const onPlayerReady = (event: YT.PlayerEvent) => {
		isPlayerReady = true;
		event.target.playVideo();
	};


</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="relative w-full aspect-[16/9]">
	<div id="player" class="absolute inset-0 w-full h-full"></div>
</div>
