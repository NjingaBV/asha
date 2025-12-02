<script lang="ts">
	import Heading from '../atoms/Heading.svelte';
	import Paragraph from '../atoms/Paragraph.svelte';
	import Button from '../atoms/Button.svelte';

	/**
	 * FeatureSection - Generic feature/benefit section organism
	 * Flexible layout for displaying features with optional CTAs and icons
	 *
	 * Can replace WhyAppleSection, GetToKnowMacSection, and similar components
	 *
	 * @example
	 * <FeatureSection
	 *   title="Why Choose Us"
	 *   items={[{title: 'Feature', description: 'Desc', cta: {...}}]}
	 *   layout="grid"
	 *   columns={3}
	 * />
	 */

	type SectionLayout = 'grid' | 'stacked' | 'carousel';
	type SectionVariant = 'default' | 'benefits' | 'features';

	interface FeatureItem {
		title: string;
		description: string;
		icon?: string;
		iconSvg?: string;
		cta?: {
			text: string;
			href: string;
		};
		link?: string;
		class?: string;
	}

	interface Props {
		/** Section title */
		title?: string;
		/** Section subtitle/description */
		description?: string;
		/** Feature items to display */
		items: FeatureItem[];
		/** Layout type: grid, stacked, carousel */
		layout?: SectionLayout;
		/** Section variant for styling */
		variant?: SectionVariant;
		/** Number of grid columns (for grid layout) */
		columns?: 1 | 2 | 3 | 4 | 5 | 6;
		/** Background color/class */
		backgroundColor?: string;
		/** Gap between items */
		gap?: 'small' | 'medium' | 'large';
		/** Header has CTA button */
		headerCta?: {
			text: string;
			href: string;
		};
		/** Title alignment */
		titleAlign?: 'left' | 'center' | 'right';
		/** Additional CSS classes */
		className?: string;
	}

	let {
		title = undefined,
		description = undefined,
		items = [],
		layout = 'grid',
		variant = 'default',
		columns = 3,
		backgroundColor = undefined,
		gap = 'medium',
		headerCta = undefined,
		titleAlign = 'center',
		className = ''
	}: Props = $props();

	// Grid column classes
	const gridColsMap = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
		5: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
		6: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'
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
		['py-20 px-4 sm:px-6 lg:px-8', backgroundColor || 'bg-white', className]
			.filter(Boolean)
			.join(' ')
	);

	const gridClasses = $derived(
		['grid', gridColsMap[columns], gapMap[gap]].filter(Boolean).join(' ')
	);

	const titleClasses = $derived(['mb-16 space-y-4', alignMap[titleAlign]].join(' '));
</script>

<section class={containerClasses}>
	<div class="max-w-7xl mx-auto">
		{#if title || description || headerCta}
			<div class={titleClasses}>
				{#if title}
					<Heading level={2} size="4xl" weight="bold" class="text-gray-900">
						{title}
					</Heading>
				{/if}
				{#if description}
					<Paragraph size="lg" color="text-gray-600">
						{description}
					</Paragraph>
				{/if}
				{#if headerCta}
					<div class="flex justify-center pt-4">
						<Button tone="primary" size="lg" href={headerCta.href}>
							{headerCta.text}
						</Button>
					</div>
				{/if}
			</div>
		{/if}

		{#if layout === 'grid'}
			<div class={gridClasses}>
				{#each items as item}
					<div class={['group relative', item.class].filter(Boolean).join(' ')}>
						{#if item.link}
							<!-- Linkable feature item -->
							<a
								href={item.link}
								class="block bg-gray-50 hover:bg-gray-100 rounded-3xl p-8 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
							>
								<div class="text-center">
									{#if item.iconSvg}
										<div class="flex justify-center mb-6">
											{@html item.iconSvg}
										</div>
									{/if}
									<Heading
										level={3}
										class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
									>
										{item.title}
									</Heading>
									<Paragraph
										class="text-gray-600 group-hover:text-gray-700 transition-colors"
									>
										{item.description}
									</Paragraph>
								</div>
							</a>
						{:else}
							<!-- Regular feature item -->
							<div
								class="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow"
							>
								{#if item.iconSvg}
									<div class="flex justify-center mb-6">
										{@html item.iconSvg}
									</div>
								{/if}
								<Heading
									level={3}
									class="text-xl font-bold text-gray-900 mb-4 text-center"
								>
									{item.title}
								</Heading>
								<Paragraph class="text-gray-600 mb-6 text-center">
									{item.description}
								</Paragraph>
								{#if item.cta}
									<div class="text-center">
										<Button tone="secondary" href={item.cta.href}>
											{item.cta.text}
										</Button>
									</div>
								{/if}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		{:else if layout === 'stacked'}
			<!-- Stacked layout -->
			<div class="space-y-8">
				{#each items as item}
					<div class="bg-white rounded-3xl p-8 shadow-sm">
						<Heading level={3} class="text-2xl font-bold text-gray-900 mb-4">
							{item.title}
						</Heading>
						<Paragraph class="text-gray-600">
							{item.description}
						</Paragraph>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>
