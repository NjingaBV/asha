<script lang="ts">
	/**
	 * ProductPage.svelte - Generic Product Landing Page Template
	 *
	 * This is the generic, brand-agnostic version of MacPage.svelte.
	 * All content is now configurable via props instead of hardcoded.
	 *
	 * @deprecated MacPage.svelte is deprecated. Migrate to ProductPage for new implementations.
	 */

	import Navbar from '$lib/components/organisms/Navbar.svelte';
	import ChapterNav from '$lib/components/molecules/ChapterNav.svelte';
	import FeatureDiscovery from '$lib/components/organisms/FeatureDiscovery.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import HeroBanner from '$lib/components/organisms/HeroBanner.svelte';
	import CTASection from '$lib/components/organisms/CTASection.svelte';
	import ComparisonSection from '$lib/components/organisms/ComparisonSection.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Text from '$lib/components/atoms/Text.svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import type { ProductDetail, LinkType, LogoType } from '$lib/models';

	// Props interface
	interface Props {
		// Page configuration
		pageTitle?: string;

		// Header configuration
		headerNavLinks?: LinkType[];
		headerLogo?: LogoType;

		// Navigation
		chapterNavItems?: Array<{
			label: string;
			icon?: string;
			href: string;
			isNew?: boolean;
		}>;

		// Content
		products: ProductDetail[];
		heroSection?: {
			title: string;
			subtitle?: string;
			backgroundVideo?: string;
			backgroundImage?: string;
			primaryAction?: { label: string; href: string };
			secondaryAction?: { label: string; href: string };
		};

		// Optional sections
		showHeroBanner?: boolean;
		showCTASection?: boolean;
		showComparisonSection?: boolean;
		showFeatureDiscovery?: boolean;

		// Section data
		featureData?: any;
		footerLogo?: LogoType;
		footerBrandName?: string;
	}

	// Default props
	const {
		pageTitle = 'Products',
		headerNavLinks = [],
		headerLogo = { title: 'Brand', imgUrl: '', imgAlt: 'Brand' },
		chapterNavItems = [],
		products,
		heroSection,
		showHeroBanner = true,
		showCTASection = false,
		showComparisonSection = false,
		showFeatureDiscovery = true,
		featureData,
		footerLogo = { title: 'Brand', imgUrl: '', imgAlt: 'Brand' },
		footerBrandName = 'Company Inc.'
	}: Props = $props();

	// Product filter tabs (generic version)
	type FilterTab = 'all' | 'laptops' | 'desktops' | 'accessories';
	let activeFilter = $state<FilterTab>('all');

	const filterTabs: { label: string; value: FilterTab }[] = [
		{ label: 'All products', value: 'all' },
		{ label: 'Laptops', value: 'laptops' },
		{ label: 'Desktops', value: 'desktops' },
		{ label: 'Accessories', value: 'accessories' }
	];

	const filteredProducts = $derived(() => {
		switch (activeFilter) {
			case 'laptops':
				return products.filter((p) => p.category === 'laptop');
			case 'desktops':
				return products.filter((p) => ['desktop', 'other'].includes(p.category || ''));
			case 'accessories':
				return products.filter((p) => p.category === 'accessory');
			default:
				return products;
		}
	});
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen bg-page">
	<!-- Global Header -->
	<Navbar logo={headerLogo} navLinks={headerNavLinks} />

	<!-- Hero Title -->
	{#if heroSection}
		<section class="bg-page py-16 text-center">
			<Heading level={1} size="6xl" weight="semibold" class="text-primary">
				{heroSection.title}
			</Heading>
			{#if heroSection.subtitle}
				<Text class="mt-4 text-secondary">{heroSection.subtitle}</Text>
			{/if}
		</section>
	{:else}
		<section class="bg-page py-16 text-center">
			<Heading level={1} size="6xl" weight="semibold" class="text-primary">
				{pageTitle}
			</Heading>
		</section>
	{/if}

	<!-- Chapter Navigation (Horizontal product icons) -->
	{#if chapterNavItems.length > 0}
		<ChapterNav items={chapterNavItems} />
	{/if}

	<!-- Product Filter Tabs -->
	<section class="border-b border-border/50 bg-page">
		<div class="mx-auto max-w-360 px-4">
			<nav class="flex gap-8" aria-label="Product filter">
				{#each filterTabs as tab}
					<button
						type="button"
						onclick={() => (activeFilter = tab.value)}
						class={[
							'border-b-2 py-4 text-sm font-medium transition-colors min-h-touch',
							'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
							activeFilter === tab.value
								? 'border-primary text-primary'
								: 'border-transparent text-secondary hover:border-border hover:text-primary'
						].join(' ')}
					>
						{tab.label}
					</button>
				{/each}
			</nav>
		</div>
	</section>

	<main id="main-content">
		<!-- Product Grid -->
		<section class="bg-page-alt py-16">
			<div class="mx-auto max-w-360 px-4">
				<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{#each filteredProducts() as product}
						<article
							class="group relative flex flex-col overflow-hidden rounded-3xl bg-card p-6 transition-shadow hover:shadow-xl"
							style={`background: ${product.background || 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)'}`}
						>
							{#if product.badge}
								<span
									class="absolute left-6 top-6 rounded-full bg-accent-orange px-3 py-1 text-xs font-medium text-white"
								>
									{product.badge}
								</span>
							{/if}

							<div class="mb-4 text-center">
								<h3
									class={[
										'text-2xl font-semibold',
										product.textOnDark ? 'text-white' : 'text-primary'
									].join(' ')}
								>
									{product.title || product.name}
									{#if product.subtitle || product.tagline}
										<span class="block text-lg font-normal opacity-80"
											>{product.subtitle || product.tagline}</span
										>
									{/if}
								</h3>
								{#if product.processor}
									<p
										class={[
											'mt-1 text-sm',
											product.textOnDark ? 'text-white/80' : 'text-secondary'
										].join(' ')}
									>
										{product.processor}
									</p>
								{/if}
							</div>

							<!-- Product Image -->
							<div class="relative mx-auto mb-6 aspect-square w-full max-w-[200px]">
								{#if product.image || product.heroImage}
									<img
										src={product.image || product.heroImage}
										alt={product.imageAlt ||
											product.heroAlt ||
											product.title ||
											product.name ||
											'Product'}
										class="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
										loading="lazy"
									/>
								{:else}
									<div
										class="flex h-full w-full items-center justify-center rounded-2xl bg-card-hover"
									>
										<span class="text-tertiary">Image</span>
									</div>
								{/if}
							</div>

							<!-- Color Options -->
							{#if product.colors && product.colors.length > 0}
								<div class="mb-4 flex justify-center gap-2">
									{#each product.colors as color}
										<span
											class="h-3 w-3 rounded-full border border-border"
											style={`background-color: ${color.swatch}`}
											title={color.name}
										></span>
									{/each}
								</div>
							{/if}

							<!-- Description -->
							<p
								class={[
									'mb-6 text-center text-sm leading-relaxed',
									product.textOnDark ? 'text-white/80' : 'text-secondary'
								].join(' ')}
							>
								{product.description}
							</p>

							<!-- CTAs -->
							<div class="mt-auto flex justify-center gap-4">
								{#if product.primaryAction || product.ctas?.primary}
									{@const action = product.primaryAction || product.ctas?.primary}
									{#if action}
										<a
											href={action.href}
											class="text-sm font-medium text-accent-blue hover:underline"
										>
											{action.label}
										</a>
									{/if}
								{/if}
								{#if product.secondaryAction || product.ctas?.secondary}
									{@const action =
										product.secondaryAction || product.ctas?.secondary}
									{#if action}
										<a
											href={action.href}
											class="text-sm font-medium text-accent-blue hover:underline"
										>
											{action.label}
										</a>
									{/if}
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<!-- Optional Hero Banner Section -->
		{#if showHeroBanner && heroSection?.backgroundVideo}
			<HeroBanner
				title={heroSection.title}
				subtitle={heroSection.subtitle}
				backgroundVideo={heroSection.backgroundVideo}
				backgroundImage={heroSection.backgroundImage}
				primaryAction={heroSection.primaryAction}
				secondaryAction={heroSection.secondaryAction}
			/>
		{/if}

		<!-- Optional CTA Section -->
		{#if showCTASection}
			<CTASection />
		{/if}

		<!-- Optional Comparison Section -->
		{#if showComparisonSection}
			<ComparisonSection />
		{/if}

		<!-- Optional Feature Discovery Section -->
		{#if showFeatureDiscovery && featureData}
			<FeatureDiscovery {featureData} />
		{/if}
	</main>

	<!-- Footer -->
	<Footer logo={footerLogo} brandName={footerBrandName} />
</div>
