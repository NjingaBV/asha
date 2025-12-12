<script lang="ts">
	import Card from '$lib/molecules/Card.svelte';
	import Heading from '$lib/atoms/Heading.svelte';
	import Text from '$lib/atoms/Text.svelte';

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
					subtitle={item.tagline}
					imgSrc={item.image}
					buttonName={item.learnMoreHref ? 'Learn more' : ''}
					buttonLink={item.learnMoreHref || item.buyHref}
					class={item.className}
				/>
			{/each}
		</div>
	</div>
</section>
