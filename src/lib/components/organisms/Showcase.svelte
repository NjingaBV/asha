<script lang="ts">
	import CardGrid from './CardGrid.svelte';

	/**
	 * Showcase - Thin wrapper around CardGrid with mac variant
	 * Displays Mac product cards in a responsive grid
	 *
	 * @deprecated Use CardGrid component with cardVariant="mac" instead
	 * @example
	 * <CardGrid
	 *   cardVariant="mac"
	 *   title="Mac Models"
	 *   columns={3}
	 *   items={[...]}
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
</script>

<CardGrid
	cardVariant="mac"
	{title}
	{description}
	items={products}
	columns={3}
	backgroundColor="transparent"
	gap="medium"
	{className}
/>
