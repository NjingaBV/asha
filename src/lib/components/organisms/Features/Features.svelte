<script lang="ts">
	import Feature from '$lib/components/molecules/Feature/Feature.svelte';

	export let title: string;
	export let features: Array<{
		title: string;
		subtitle: string;
		description: string;
		color: string;
		details: {
			title: string;
			description: string;
			cover: { url: string; alt: string; text: string };
		};
	}>;
</script>

<section class="container mx-auto px-6">
	<div class="text-center mb-12">
		<small class="text-sm font-sans font-semibold tracking-wide uppercase">
			{title}
		</small>
	</div>
	{#each features as feature, index}
		<Feature order={index + 1} {...feature} />
	{/each}
</section>
