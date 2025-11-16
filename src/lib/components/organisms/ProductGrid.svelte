<script lang="ts">
	import ProductCard from '../molecules/ProductCard.svelte';
	import type { Product } from '../../models/product.type';

	/**
	 * ProductGrid component - displays a responsive grid of product cards
	 *
	 * @example
	 * <ProductGrid
	 *   title="Our Products"
	 *   products={[
	 *     {
	 *       title: "Product Name",
	 *       subtitle: "Product subtitle",
	 *       description: "Product description.",
	 *       colors: ['blue', 'silver'],
	 *       primaryAction: { label: 'Learn more', href: '/product' },
	 *       secondaryAction: { label: 'Buy', href: '/buy' }
	 *     }
	 *   ]}
	 * />
	 */

	interface Props {
		/** Section title */
		title?: string;
		/** Section subtitle */
		subtitle?: string;
		/** Array of products to display */
		products: Product[];
		/** Number of columns on desktop (default: 2) */
		columns?: 1 | 2 | 3 | 4;
		/** Custom CSS classes */
		class?: string;
	}

	let { title, subtitle, products, columns = 2, class: className = '' }: Props = $props();

	// Grid classes based on columns
	const gridClasses = $derived(() => {
		const baseClasses = 'grid gap-8';
		const responsiveClasses = {
			1: 'grid-cols-1',
			2: 'grid-cols-1 md:grid-cols-2',
			3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
			4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
		};
		return `${baseClasses} ${responsiveClasses[columns]}`;
	});

	// Container classes
	const containerClasses = $derived(
		['py-16 px-4 sm:px-6 lg:px-8', className].filter(Boolean).join(' ')
	);
</script>

<section class={containerClasses}>
	{#if title || subtitle}
		<div class="text-center mb-12">
			{#if subtitle}
				<div class="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
					{subtitle}
				</div>
			{/if}
			{#if title}
				<h2 class="text-3xl md:text-4xl font-bold text-gray-900">
					{title}
				</h2>
			{/if}
		</div>
	{/if}

	<div class={gridClasses}>
		{#each products as product}
			<ProductCard
				title={product.title}
				subtitle={product.subtitle}
				description={product.description}
				colors={product.colors}
				colorType={product.colorType}
				primaryAction={product.primaryAction}
				secondaryAction={product.secondaryAction}
				image={product.image}
				imageAlt={product.imageAlt}
				badge={product.badge}
			/>
		{/each}
	</div>
</section>
