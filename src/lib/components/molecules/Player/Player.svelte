<script lang="ts">
	import Youtube from '$lib/components/atoms/Youtube/Youtube.svelte';

	export let url: string;
	export let title: string;
	export let subtitle: string;
	export let overview: string;

	const youtubeRegExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;

	$: match = url.match(youtubeRegExp);
	$: videoId = match && match[2].length === 11 ? match[2] : null;

	const getComponent = (selectedUrl: string): ComponentType | undefined => {
		const urlCheck = new URL(selectedUrl);
		console.log('dd: ', urlCheck.host);
		switch (urlCheck.host) {
			case 'www.youtube.com':
				return Youtube;
		}
	};
</script>

<div class="relative w-full aspect-[16/9]">
	<svelte:component this={getComponent(url)} {videoId} />
</div>
<div class={['p-4 rounded-b-xl flex flex-col'].join(' ')}>
	{#if subtitle}
		<h4 class="text-slate-700 text-lg text-left font-black">
			{subtitle}
		</h4>
	{/if}
	{#if title}
		<h2
			class={`text-black text-3xl md:text-4xl mb-4 ${
				subtitle ? 'text-left' : 'text-center'
			} font-black`}
		>
			{title}
		</h2>
	{/if}
	{#if overview}
		<h3 class="text-black font-thin text-left mb-4 line-clamp-5">
			{overview}
		</h3>
	{/if}
</div>
