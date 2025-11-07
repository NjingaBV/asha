<script lang="ts">
	import PathLine from '$lib/components/atoms/PathLine.svelte';

	let {
		order = 0,
		title = '',
		subtitle = '',
		description = '',
		color = '',
		details = { title: '', description: '', cover: { url: '', alt: '', text: '' } }
	}: {
		order: number;
		title: string;
		subtitle: string;
		description: string;
		color: string;
		details: {
			title: string;
			description: string;
			cover: { url: string; alt: string; text: string };
		};
	} = $props();
</script>

<div class="mx-auto max-w-full px-4 md:px-6 lg:px-8">
	<div class="flex flex-wrap justify-center mb-8 md:mb-12">
		<PathLine {order} {title} {color} />
	</div>
	<div
		class="text-center font-black tracking-tight text-5xl md:text-6xl lg:text-7xl mb-8 md:mb-10 lg:mb-12 max-w-4xl mx-auto leading-tight"
	>
		{subtitle}
	</div>
	<div
		class="text-left text-slate-600 md:text-center mx-auto max-w-3xl mb-12 md:mb-16 pb-4 md:pb-6 text-base md:text-lg leading-relaxed"
	>
		{description}
	</div>
	{#if details}
		<div class="flex gap-8 md:gap-12 lg:gap-16 items-center flex-col md:flex-row">
			{#if details.description && details.cover}
				<div
					class="w-full md:w-1/2 overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
				>
					<img
						class="w-full h-full object-cover"
						src={details.cover.url}
						alt={details.cover.alt}
					/>
				</div>
				<div
					class="w-full md:w-1/2 text-left text-slate-600 space-y-4 md:space-y-6 leading-relaxed"
				>
					{@html details.description}
				</div>
			{:else if details.cover && !details.description}
				<div
					class="w-full overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-[1.02]"
				>
					<img
						class="w-full h-full object-cover"
						src={details.cover.url}
						alt={details.cover.alt}
					/>
				</div>
			{:else}
				<div class="w-full text-left text-slate-600 space-y-4 md:space-y-6 leading-relaxed">
					{@html details.description}
				</div>
			{/if}
		</div>
	{/if}
</div>

<style>
	:global(div[class*='space-y'] p) {
		margin: 0;
	}

	:global(div[class*='space-y'] strong) {
		font-weight: 700;
		color: var(--text-color);
	}
</style>
