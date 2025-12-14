<script lang="ts">
	import Card from '$lib/components/molecules/Card.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import type { Product } from '$lib/models/product.type';

	/**
	 * Showcase - Displays product cards in a responsive grid
	 *
	 * @example
	 * <Showcase
	 *   title="Our Products"
	 *   products={[{title: '...', image: '...', price: '...'}]}
	 * />
	 */

	interface Props {
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Products to display */
		products: Product[];
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

	const containerClasses = 'py-16 px-4 sm:px-6 lg:px-8 bg-bg';
	const gridClasses = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ${gapMap['medium']}`;
	const titleClasses = 'mb-12 space-y-4 text-center';
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description}
			<div class={titleClasses}>
				{#if title}
					<Heading level={2} size="4xl" weight="bold" class="text-fg">
						{title}
					</Heading>
				{/if}
				{#if description}
					<Text size="xl" color="text-fg-muted" class="max-w-3xl mx-auto">
						{description}
					</Text>
				{/if}
			</div>
		{/if}

		<div class={gridClasses}>
			{#each products as item}
				<Card
					title={item.title}
					subtitle={item.subtitle}
					imgSrc={item.image}
					buttonName={item.primaryAction?.label || 'Learn more'}
					buttonLink={item.primaryAction?.href || '#'}
					class={item.className}
				/>
			{/each}
		</div>
	</div>
</section>
