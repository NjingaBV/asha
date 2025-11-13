<script lang="ts">
	import MacCard from '$lib/components/molecules/MacCard.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';

	/**
	 * MacShowcase component - Grid of Mac product cards
	 * Displays all Mac models in a responsive grid
	 */

	interface MacProduct {
		title: string;
		tagline?: string;
		image: string;
		imageAlt?: string;
		price?: string;
		isNew?: boolean;
		colors?: string[];
		learnMoreHref?: string;
		buyHref?: string;
	}

	interface Props {
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Mac products to display */
		products: MacProduct[];
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title = undefined,
		description = undefined,
		products = [],
		className = ''
	}: Props = $props();

	const showcaseClasses = $derived(
		['py-16 px-4 sm:px-6 lg:px-8', className].filter(Boolean).join(' ')
	);
</script>

<section class={showcaseClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description}
			<div class="text-center mb-12 space-y-4">
				{#if title}
					<Heading level={2} size="4xl" weight="bold" class="text-slate-900">
						{title}
					</Heading>
				{/if}
				{#if description}
					<Paragraph size="xl" color="text-slate-600" class="max-w-3xl mx-auto">
						{description}
					</Paragraph>
				{/if}
			</div>
		{/if}

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each products as product}
				<MacCard {...product} />
			{/each}
		</div>
	</div>
</section>
