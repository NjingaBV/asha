<script lang="ts">
	import Linkable from '$lib/atoms/Linkable.svelte';

	let {
		title = '',
		subtitle = '',
		imgUrl = '',
		imgAlt = '',
		showTitle = false,
		link = undefined
	}: {
		title?: string;
		subtitle?: string;
		imgUrl?: string;
		imgAlt?: string;
		showTitle?: boolean;
		link?: string;
	} = $props();

	let isLinkable = $derived(Boolean(link));
</script>

<Linkable {isLinkable} {link}>
	<div class="flex flex-col w-full py-2">
		<div class="flex items-center justify-start">
			{#if imgUrl}
				<div class="h-full flex items-center">
					<img src={imgUrl} alt={imgAlt || title} class="h-10" loading="lazy" />
				</div>
			{/if}
			{#if showTitle && title}
				<div>
					<h1 class="font-semibold uppercase text-4xl tracking-tighter">{title}</h1>
				</div>
			{/if}
		</div>
		{#if subtitle}
			<div class="flex items-center">
				<p class="text-xs font-thin font-[Lato]">{subtitle}</p>
			</div>
		{/if}
	</div>
</Linkable>
