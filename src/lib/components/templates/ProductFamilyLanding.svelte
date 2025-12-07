<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Card from '$lib/components/molecules/Card.svelte';
	import ChapterNav from '$lib/components/molecules/ChapterNav.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';

	/**
	 * ProductFamilyLanding Template
	 * A generic template for product family landing pages (like Mac, iPad, etc.)
	 * Based on the Apple Mac page layout.
	 */

	interface NavItem {
		label: string;
		icon: string;
		href: string;
		isNew?: boolean;
	}

	interface HeroData {
		title: string;
		subtitle?: string;
		description?: string;
		backgroundColor?: string;
		textColor?: 'light' | 'dark';
		image: {
			src: string;
			alt: string;
		};
		primaryAction?: { label: string; href: string };
		secondaryAction?: { label: string; href: string };
	}

	interface ProductData {
		title: string;
		tagline?: string;
		description?: string;
		image: string;
		price?: string;
		colors?: string[];
		isNew?: boolean;
		learnMoreHref?: string;
		buyHref?: string;
	}

	interface BenefitData {
		title: string;
		description: string;
		learnMoreHref: string;
	}

	interface FeatureData {
		title: string;
		description: string;
		image: string;
		learnMore?: string;
	}

	interface Props {
		variant?: 'full' | 'essentials' | 'compact';
		chapterNavItems?: NavItem[];
		heroData: HeroData;
		productsData?: ProductData[];
		benefitsData?: BenefitData[];
		featuresData?: FeatureData[];
		benefitsTitle?: string;
		featuresTitle?: string;
		helpMeChooseTitle?: string;
		helpMeChooseDescription?: string;
		helpMeChooseButtonLabel?: string;
	}

	let {
		variant = 'full',
		chapterNavItems = [],
		heroData,
		productsData = [],
		benefitsData = [],
		featuresData = [],
		benefitsTitle = 'Why Apple is the best place to buy.',
		featuresTitle = 'Get to know.',
		helpMeChooseTitle = 'Help me choose.',
		helpMeChooseDescription = 'Answer a few questions to find the best product for you.',
		helpMeChooseButtonLabel = 'Get started'
	}: Props = $props();
</script>

<!-- 0. CHAPTER NAV -->
{#if chapterNavItems.length > 0}
	<div class="sticky top-0 z-40 bg-page/80 backdrop-blur-md border-b border-border">
		<ChapterNav items={chapterNavItems} />
	</div>
{/if}

<!-- 1. HERO SECTION -->
<Hero {...heroData} />

<!-- 2. PRODUCT SHOWCASE -->
{#if productsData.length > 0}
	<section class="py-16 md:py-24 bg-page">
		<div class="max-w-360 mx-auto px-4 md:px-6">
			<div class="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
				<Heading level={2} size="5xl" weight="bold" class="text-primary">Explore.</Heading>
				<div class="flex gap-6 text-lg font-medium">
					<a href="/compare" class="text-accent-blue hover:underline">Compare ></a>
				</div>
			</div>

			{#if variant === 'compact'}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{#each productsData.slice(0, 3) as product}
						<Card variant="mac" {...product} />
					{/each}
				</div>
			{:else}
				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{#each productsData as product}
						<Card variant="mac" {...product} />
					{/each}
				</div>
			{/if}
		</div>
	</section>
{/if}

{#if variant !== 'compact'}
	<!-- 3. BENEFITS SECTION -->
	{#if benefitsData.length > 0}
		<section class="py-16 md:py-24 bg-page-alt">
			<div class="max-w-360 mx-auto px-4 md:px-6">
				<Heading
					level={2}
					size="4xl"
					weight="bold"
					class="text-primary mb-16 text-center md:text-left"
				>
					{@html benefitsTitle.replace(/\n/g, '<br/>')}
				</Heading>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
					{#each benefitsData as benefit}
						<div
							class="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
						>
							<Heading
								level={4}
								size="xl"
								weight="semibold"
								class="text-primary mb-4"
							>
								{benefit.title}
							</Heading>
							<Paragraph class="text-secondary text-sm mb-6 flex-grow">
								{benefit.description}
							</Paragraph>
							<a
								href={benefit.learnMoreHref}
								class="text-accent-blue hover:underline text-sm font-medium mt-auto inline-flex items-center gap-1"
							>
								Learn more <span class="text-xs">↗</span>
							</a>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- 4. FEATURES SECTION -->
	{#if featuresData.length > 0}
		<section class="py-16 md:py-24 bg-page">
			<div class="max-w-360 mx-auto px-4 md:px-6">
				<Heading level={2} size="5xl" weight="bold" class="text-primary mb-16">
					{featuresTitle}
				</Heading>

				<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{#each featuresData as feature}
						<div
							class="group relative overflow-hidden rounded-3xl bg-card-hover aspect-4/5"
						>
							<img
								src={feature.image}
								alt={feature.title}
								class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div
								class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent p-8 flex flex-col justify-end"
							>
								<Heading level={3} size="2xl" weight="bold" class="text-white mb-2">
									{feature.title}
								</Heading>
								<Paragraph class="text-white/90 font-medium">
									{feature.description}
								</Paragraph>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/if}

	<!-- 5. HELP ME CHOOSE SECTION -->
	<section class="py-16 md:py-24 bg-page-alt">
		<div class="max-w-4xl mx-auto px-4 text-center">
			<Heading level={2} size="5xl" weight="bold" class="text-primary mb-6">
				{helpMeChooseTitle}
			</Heading>
			<Paragraph size="xl" class="text-secondary mb-10 max-w-2xl mx-auto">
				{helpMeChooseDescription}
			</Paragraph>
			<Button size="xl" tone="primary" rounded>{helpMeChooseButtonLabel}</Button>
		</div>
	</section>
{/if}

<!-- FOOTER -->
<Footer />
