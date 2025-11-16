<script lang="ts">
	import BenefitCard from '../molecules/BenefitCard.svelte';

	/**
	 * BenefitsSection component - displays a section of benefit/feature cards
	 *
	 * @example
	 * <BenefitsSection
	 *   title="Why Choose Us"
	 *   benefits={[
	 *     {
	 *       icon: "star",
	 *       title: "Amazing Feature",
	 *       description: "This feature provides incredible benefits.",
	 *       link: { label: "Learn more", href: "/feature" }
	 *     }
	 *   ]}
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

	// Container classes
	const containerClasses = $derived(
		['py-16 px-4 sm:px-6 lg:px-8 bg-gray-50', className].filter(Boolean).join(' ')
	);

	// Grid classes for responsive layout
	const gridClasses = 'grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5';
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold text-gray-900">
				{title}
			</h2>
		</div>

		<div class={gridClasses}>
			{#each benefits as benefit}
				<BenefitCard
					icon={benefit.icon}
					title={benefit.title}
					description={benefit.description}
					link={benefit.link}
				/>
			{/each}
		</div>
	</div>
</section>
