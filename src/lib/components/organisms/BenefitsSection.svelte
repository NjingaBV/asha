<script lang="ts">
	import CardGrid from './CardGrid.svelte';

	/**
	 * BenefitsSection - Thin wrapper around CardGrid with benefit variant
	 * Displays benefit/feature cards in a responsive grid
	 *
	 * @deprecated Use CardGrid component with cardVariant="benefit" instead
	 * @example
	 * <CardGrid
	 *   cardVariant="benefit"
	 *   title="Benefits"
	 *   columns={3}
	 *   items={[...]}
	 * />
	 */

	interface Benefit {
		icon?: string;
		title: string;
		description: string;
		link?: { label: string; href?: string; onClick?: () => void };
	}

	interface Props {
		/** Section title */
		title: string;
		/** Array of benefits to display */
		benefits: Benefit[];
		/** Custom CSS classes */
		class?: string;
	}

	let { title, benefits, class: className = '' }: Props = $props();
</script>

<CardGrid
	cardVariant="benefit"
	{title}
	items={benefits}
	columns={5}
	backgroundColor="bg-gray-50"
	gap="medium"
	{className}
/>
