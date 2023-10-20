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

<section class="container mx-auto space-y-6 px-6 py-12">
	<div class="text-center">
		<small class="text-base md:text-lg font-sans font-semibold tracking-wide uppercase">
			{title}
		</small>
	</div>
	{#each features as feature, index}
		<Feature order={index + 1} {...feature} />
	{/each}
</section>
