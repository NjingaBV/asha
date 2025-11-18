<script lang="ts">
	import CardGrid from './CardGrid.svelte';

	/**
	 * FeatureGrid - Thin wrapper around CardGrid with feature variant
	 * Displays feature cards in stacked or alternating layout
	 *
	 * @deprecated Use CardGrid component with cardVariant="feature" instead
	 * @example
	 * <CardGrid cardVariant="feature" layout="alternating" items={[...]} />
	 */

	let {
		features = [],
		layout = 'stacked',
		class: className = ''
	}: {
		features: Array<{
			title: string;
			description: string;
			image: string;
			imageAlt?: string;
			imagePosition?: 'left' | 'right';
			icon?: string;
			badge?: string;
		}>;
		layout: 'stacked' | 'alternating';
		class?: string;
	} = $props();
</script>

<CardGrid
	cardVariant="feature"
	items={features}
	columns={1}
	{layout}
	backgroundColor="transparent"
	gap="large"
	{className}
/>
