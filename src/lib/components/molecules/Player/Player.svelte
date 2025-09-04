<script lang="ts">
	import Youtube from '$lib/components/atoms/Youtube/Youtube.svelte';

	export let title: string;
	export let subtitle: string;
	export let overview: string;
	export let url: string;
	export let thumbnail: string;
	export let isPlaying = false;
	export let isPlayerReady = false;
	export let lineClampEnabled = true;

	let lines = 5;

	let showThumbnail = true;
	let timeoutId: number | undefined;

	$: if (timeoutId !== undefined) clearTimeout(timeoutId);

	const toggleLineClamp = () => {
		lineClampEnabled = !lineClampEnabled;
	};

	const togglePlay = () => {
		showThumbnail = !showThumbnail;
		isPlaying = true;
	};

	const youtubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

	$: truncated = overview && overview.length > lines * 45;
	$: match = url.match(youtubeRegExp);
	$: videoId = match && match[2].length === 11 ? match[2] : null;

	const getComponent = (selectedUrl: string): any => {
		const urlCheck = new URL(selectedUrl);
		switch (urlCheck.host) {
			case 'www.youtube.com':
				return Youtube;
		}
	};
</script>

<div class="relative flex w-full aspect-[16/9] top-0 z-10 items-center justify-center">
	{#if !isPlaying}
		<img src={thumbnail} alt="video thumbnail" class="absolute w-full h-full object-cover" />
		<button class="absolute w-1/4 opacity-90" aria-label="Play video" on:click={togglePlay}>
			<svg class="stroke-[5] h-full fill-white" stroke-width="2" viewBox="0 0 50 50">
				<path d="M 10 5.25 L 10 44.746094 L 43.570313 25 Z" />
			</svg>
		</button>
	{:else}
		<svelte:component this={getComponent(url)} {videoId} bind:isPlayerReady />
	{/if}
</div>
<div class={['p-4 rounded-b-xl flex flex-col'].join(' ')}>
	{#if subtitle}
		<h4 class="text-slate-700 text-lg text-left font-black">
			{subtitle}
		</h4>
	{/if}
	{#if title}
		<h2
			class={[
				`text-black text-3xl md:text-4xl mb-4 font-black`,
				`${subtitle ? 'text-left' : 'text-center'} `
			].join(' ')}
		>
			{title}
		</h2>
	{/if}
	{#if overview}
		<div class="relative flex flex-col">
			<h3
				class={`text-black font-thin text-left flex-1 ${
					lineClampEnabled ? 'line-clamp-5' : 'mb-4'
				}`}
			>
				{overview}
			</h3>
			{#if truncated}
				<button
					class="absolute text-black underline bottom-0 self-end"
					on:click={toggleLineClamp}
				>
					{#if lineClampEnabled}plus{:else}moins{/if}
				</button>
			{/if}
		</div>
	{/if}
</div>
