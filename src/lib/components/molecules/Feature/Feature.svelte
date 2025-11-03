<script lang="ts">
	import PathLine from '$lib/components/atoms/PathLine/PathLine.svelte';

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

<div class="mx-auto max-w-full">
	<div class="flex flex-wrap justify-center pb-4">
		<PathLine {order} {title} {color} />
	</div>
	<div class="text-center font-bold tracking-tighter text-5xl pb-3 mb-6">
		{subtitle}
	</div>
	<div class="text-left text-slate-500 tracking-wider md:text-center mx-auto max-w-3xl mb-6 pb-6">
		{description}
	</div>
	{#if details}
		<div class="flex gap-12 items-center flex-col md:flex-row">
			{#if details.description && details.cover}
				<img
					class="w-full md:w-1/2 rounded-md"
					src={details.cover.url}
					alt={details.cover.alt}
				/>
				<div class="w-full md:w-1/2 text-left text-slate-700 tracking-wider">
					{@html details.description}
				</div>
			{:else if details.cover && !details.description}
				<img class="w-full rounded-md" src={details.cover.url} alt={details.cover.alt} />
			{:else}
				<div class="w-full text-left text-slate-700 tracking-wider">
					{@html details.description}
				</div>
			{/if}
		</div>
	{/if}
</div>
