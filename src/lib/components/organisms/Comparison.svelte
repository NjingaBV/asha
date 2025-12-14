<script lang="ts">
	import ComparisonCard from '$lib/components/molecules/ComparisonCard.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';

	/**
	 * Comparison component - Side-by-side comparison section
	 * Compare different product models with features
	 *
	 * @example
	 * <Comparison
	 *   title="Compare Models"
	 *   items={[...]}
	 * />
	 */

	interface ComparisonItem {
		image: string;
		imageAlt?: string;
		name: string;
		price?: string;
		features?: string[];
		highlighted?: boolean;
	}

	interface Props {
		/** Section title */
		title?: string;
		/** Section description */
		description?: string;
		/** Items to compare */
		items: ComparisonItem[];
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title = undefined,
		description = undefined,
		items = [],
		className = ''
	}: Props = $props();

	const comparisonClasses = $derived(
		['py-16 px-4 sm:px-6 lg:px-8 bg-bg-subtle', className].filter(Boolean).join(' ')
	);
</script>

<section class={comparisonClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description}
			<div class="text-center mb-12 space-y-4">
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

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
			{#each items as item}
				<ComparisonCard {...item} />
			{/each}
		</div>
	</div>
</section>
