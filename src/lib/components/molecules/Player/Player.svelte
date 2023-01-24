<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Youtube from '$lib/components/atoms/Youtube/Youtube.svelte';

	export let url: string;
	export let title: string;
	export let subtitle: string;
	export let overview: string;
	export let thumbnail: string;

	let lineClampEnabled = true;
	let lines = 5;

	let showThumbnail = true;
	let timeoutId;

	const handleIframeLoad = () => {
		timeoutId = setTimeout(() => {
			showThumbnail = false;
		}, 1000);
	};

	$: if (timeoutId) clearTimeout(timeoutId);

	const dispatch = createEventDispatcher();

	const toggleLineClamp = () => {
		lineClampEnabled = !lineClampEnabled;
		dispatch('lineClampToggled', { lineClampEnabled });
	};

	const youtubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

	$: truncated = overview && overview.length > lines * 45;
	$: match = url.match(youtubeRegExp);
	$: videoId = match && match[2].length === 11 ? match[2] : null;

	const getComponent = (selectedUrl: string): ComponentType | undefined => {
		const urlCheck = new URL(selectedUrl);
		switch (urlCheck.host) {
			case 'www.youtube.com':
				return Youtube;
		}
	};
</script>

<div class="relative w-full aspect-[16/9] sticky top-0 z-10">
	{#if showThumbnail}
		<img src={thumbnail} class="w-full h-full object-cover" on:load={handleIframeLoad} />
	{:else}
		<svelte:component this={getComponent(url)} {videoId} />
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
