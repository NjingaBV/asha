<script lang="ts">
	import Card from '$lib/components/molecules/Card.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';

	/**
	 * Showcase - Displays Mac product cards in a responsive grid
	 *
	 * @example
	 * <Showcase
	 *   title="Mac Models"
	 *   products={[{title: '...', image: '...', price: '...'}]}
	 * />
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
		className?: string;
	}

	interface Props {
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Mac products to display */
		products: MacProduct[];
		/** Additional CSS classes */
		class?: string;
	}

	let { title = undefined, description = undefined, products = [] }: Props = $props();

	// Gap classes
	const gapMap = {
		small: 'gap-4',
		medium: 'gap-8',
		large: 'gap-12'
	};

	const containerClasses = 'py-16 px-4 sm:px-6 lg:px-8 bg-white';
	const gridClasses = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapMap['medium']}`;
	const titleClasses = 'mb-12 space-y-4 text-center';
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description}
			<div class={titleClasses}>
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

		<div class={gridClasses}>
			{#each products as item}
				<Card
					variant="mac"
					title={item.title}
					tagline={item.tagline}
					image={item.image}
					imageAlt={item.imageAlt}
					price={item.price}
					isNew={item.isNew}
					colors={item.colors}
					learnMoreHref={item.learnMoreHref}
					buyHref={item.buyHref}
					className={item.className}
				/>
			{/each}
		</div>
	</div>
</section>
