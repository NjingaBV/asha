<script lang="ts">
	import Card from '$lib/components/molecules/Card.svelte';
	import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';
	import BenefitCard from '$lib/components/molecules/BenefitCard.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import type { Snippet } from 'svelte';

	/**
	 * CardGrid - Unified grid layout for displaying cards
	 * Replaces FeatureGrid, BenefitsSection, Showcase, ProductGrid, Comparison
	 *
	 * @example
	 * <CardGrid
	 *   cardVariant="feature"
	 *   columns={3}
	 *   title="Features"
	 *   items={[{title: '...', description: '...', image: '...'}]}
	 * />
	 */

	type CardVariant = 'feature' | 'benefit' | 'mac' | 'product' | 'image' | 'comparison';

	interface CommonItem {
		title?: string;
		description?: string;
		image?: string;
		imageAlt?: string;
	}

	interface Props {
		/** Card type to render: feature, benefit, mac, product, image, comparison */
		cardVariant?: CardVariant;
		/** Items to display */
		items: any[];
		/** Number of grid columns: 1, 2, 3, 4, 5 or 'responsive' */
		columns?: 1 | 2 | 3 | 4 | 5 | 'responsive';
		/** Section title */
		title?: string;
		/** Section subtitle/description */
		description?: string;
		/** Title alignment */
		titleAlign?: 'left' | 'center' | 'right';
		/** Background color */
		backgroundColor?: string;
		/** Gap between items */
		gap?: 'small' | 'medium' | 'large';
		/** For FeatureGrid: layout type */
		layout?: 'stacked' | 'alternating';
		/** Additional CSS classes */
		className?: string;
	}

	let {
		cardVariant = 'feature',
		items = [],
		columns = 'responsive',
		title = undefined,
		description = undefined,
		titleAlign = 'center',
		backgroundColor = undefined,
		gap = 'medium',
		layout = 'alternating',
		className = ''
	}: Props = $props();

	// Grid column classes
	const gridColsMap = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
		5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
		responsive: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
	};

	// Gap classes
	const gapMap = {
		small: 'gap-4',
		medium: 'gap-8',
		large: 'gap-12'
	};

	// Title alignment classes
	const alignMap = {
		left: 'text-left',
		center: 'text-center',
		right: 'text-right'
	};

	const containerClasses = $derived(
		['py-16 px-4 sm:px-6 lg:px-8', backgroundColor || 'bg-white', className]
			.filter(Boolean)
			.join(' ')
	);

	const gridClasses = $derived(
		['grid', gridColsMap[columns], gapMap[gap]].filter(Boolean).join(' ')
	);

	const titleClasses = $derived(['mb-12 space-y-4', alignMap[titleAlign]].join(' '));
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description}
			<div class={titleClasses}>
				{#if title}
					<Heading level={2} size="4xl" weight="bold" class="text-slate-900">
						{title}
					</Heading>
				{/if}
				{#if description}
					<Paragraph
						size="xl"
						color="text-slate-600"
						class={titleAlign === 'center' ? 'max-w-3xl mx-auto' : ''}
					>
						{description}
					</Paragraph>
				{/if}
			</div>
		{/if}

		<div class={gridClasses}>
			{#each items as item, index}
				{#if cardVariant === 'feature'}
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
				{:else if cardVariant === 'benefit'}
					<BenefitCard
						icon={item.icon}
						title={item.title}
						description={item.description}
						link={item.link}
						class={item.class}
					/>
				{:else if cardVariant === 'mac'}
					<Card
						variant="mac"
						title={item.title}
						tagline={item.tagline}
						image={item.image}
						imageAlt={item.imageAlt}
						price={item.price}
						isNew={item.isNew}
						colors={item.colors}
						learnMoreHref={item.learnMoreHref}
						buyHref={item.buyHref}
						className={item.className}
					/>
				{:else if cardVariant === 'product'}
					<Card
						variant="image"
						title={item.title}
						subtitle={item.subtitle}
						overview={item.overview}
						imgSrc={item.imgSrc}
						buttonName={item.buttonName}
						buttonLink={item.buttonLink}
						backgroundColor={item.backgroundColor}
						mixColor={item.mixColor}
						textOnImage={item.textOnImage}
						rounded={item.rounded}
						isVideo={item.isVideo}
						className={item.className}
					/>
				{:else if cardVariant === 'image'}
					<Card
						variant="image"
						title={item.title}
						subtitle={item.subtitle}
						overview={item.overview}
						imgSrc={item.imgSrc}
						buttonName={item.buttonName}
						buttonLink={item.buttonLink}
						backgroundColor={item.backgroundColor}
						mixColor={item.mixColor}
						textOnImage={item.textOnImage}
						rounded={item.rounded}
						isVideo={item.isVideo}
						className={item.className}
					/>
				{:else if cardVariant === 'comparison'}
					<!-- Comparison cards can use the image variant or a specialized layout -->
					<Card
						variant="image"
						title={item.title}
						subtitle={item.subtitle}
						overview={item.overview}
						imgSrc={item.imgSrc}
						className={item.className}
					/>
				{/if}
			{/each}
		</div>
	</div>
</section>
