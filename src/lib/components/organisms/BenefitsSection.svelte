<script lang="ts">
	import BenefitCard from '$lib/components/molecules/BenefitCard.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';

	/**
	 * BenefitsSection - Displays benefit cards in a responsive grid
	 *
	 * @example
	 * <BenefitsSection
	 *   title="Benefits"
	 *   benefits={[{icon: '...', title: '...', description: '...'}]}
	 * />
	 */

	interface Benefit {
		icon?: string;
		title: string;
		description: string;
		link?: { label: string; href?: string; onClick?: () => void };
		class?: string;
	}

	interface Props {
		/** Section title */
		title: string;
		/** Array of benefits to display */
		benefits: Benefit[];
		/** Custom CSS classes */
		class?: string;
	}

	let { title, benefits }: Props = $props();

	// Gap classes
	const gapMap = {
		small: 'gap-4',
		medium: 'gap-8',
		large: 'gap-12'
	};

	const containerClasses = 'py-16 px-4 sm:px-6 lg:px-8 bg-gray-50';
	const gridClasses = `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${gapMap['medium']}`;
	const titleClasses = 'mb-12 space-y-4 text-center';
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title}
			<div class={titleClasses}>
				<Heading level={2} size="4xl" weight="bold" class="text-slate-900">
					{title}
				</Heading>
			</div>
		{/if}

		<div class={gridClasses}>
			{#each benefits as item}
				<BenefitCard
					icon={item.icon}
					title={item.title}
					description={item.description}
					link={item.link}
					class={item.class}
				/>
			{/each}
		</div>
	</div>
</section>
