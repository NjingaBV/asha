<script lang="ts">
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';

	/**
	 * FeatureGrid - Displays feature cards in stacked or alternating layout
	 *
	 * @example
	 * <FeatureGrid
	 *   features={[{title: '...', description: '...', image: '...'}]}
	 *   layout="alternating"
	 * />
	 */

	interface Feature {
		title: string;
		description: string;
		image: string;
		imageAlt?: string;
		imagePosition?: 'left' | 'right';
		icon?: string;
		badge?: string;
		class?: string;
	}

	interface Props {
		features: Feature[];
		layout?: 'stacked' | 'alternating';
		gap?: 'small' | 'medium' | 'large';
		class?: string;
	}

	let { features = [], layout = 'stacked', gap = 'large' }: Props = $props();

	// Gap classes
	const gapMap = {
		small: 'gap-4',
		medium: 'gap-8',
		large: 'gap-12'
	};

	const containerClasses = 'py-16 px-4 sm:px-6 lg:px-8 bg-bg';
	const gridClasses = `grid grid-cols-1 ${gapMap[gap]}`;
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		<div class={gridClasses}>
			{#each features as item, index}
				<FeatureCard
					title={item.title}
					description={item.description}
					image={item.image}
					imageAlt={item.imageAlt || item.title}
					imagePosition={layout === 'alternating'
						? index % 2 === 0
							? 'right'
							: 'left'
						: item.imagePosition || 'right'}
					icon={item.icon}
					badge={item.badge}
					class={item.class}
				/>
			{/each}
		</div>
	</div>
</section>
