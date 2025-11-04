<script lang="ts">
	let {
		videoId = ''
	}: {
		videoId: string;
	} = $props();

	let player: {
		playVideo: () => void;
	};

	$effect.pre(() => {
		if (typeof window === 'undefined') return;
		(window as any).onYouTubeIframeAPIReady = () => {
			/* eslint-disable */
			const YTGlobal = (window as any).YT;
			player = new YTGlobal.Player('player', {
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
		player.playVideo();
	};
</script>

<svelte:head>
	<script src="https://www.youtube.com/iframe_api"></script>
</svelte:head>

<div class="relative w-full aspect-[16/9]">
	<div id="player" class="absolute inset-0 w-full h-full"></div>
</div>
