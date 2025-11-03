<script lang="ts">
	import ProductCard from '../../molecules/ProductCard/ProductCard.svelte';

	let {
		products = [],
		columns = 3,
		gap = 'base'
	}: {
		products: Array<{
			title: string;
			subtitle: string;
			description: string;
			image: string;
			imageAlt?: string;
			colors?: string[];
			primaryAction?: { label: string; href?: string; onClick?: () => void };
			secondaryAction?: { label: string; href?: string; onClick?: () => void };
			badge?: string;
		}>;
		columns: 1 | 2 | 3 | 4;
		gap: 'sm' | 'base' | 'lg';
	} = $props();

	let gridCols = $derived(`grid-cols-${columns}`);
	let gapSize = $derived(`gap-${gap === 'sm' ? '4' : gap === 'lg' ? '8' : '6'}`);
	let gridClasses = $derived(
		['grid', gridCols, gapSize, $$props.class].filter(Boolean).join(' ')
	);
</script>

<div class={gridClasses}>
	{#each products as product}
		<ProductCard
			title={product.title}
			subtitle={product.subtitle}
			description={product.description}
			image={product.image}
			imageAlt={product.imageAlt || product.title}
			colors={product.colors || []}
			primaryAction={product.primaryAction}
			secondaryAction={product.secondaryAction}
			badge={product.badge}
		/>
	{/each}
</div>
