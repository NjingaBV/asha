<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import ChapterNav from '$lib/components/molecules/ChapterNav.svelte';
	import VideoHero from '$lib/components/organisms/VideoHero.svelte';
	import WhyAppleSection from '$lib/components/organisms/WhyAppleSection.svelte';
	import FeatureDiscovery from '$lib/components/organisms/FeatureDiscovery.svelte';
	import HelpMeChooseSection from '$lib/components/organisms/HelpMeChooseSection.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';
	import SkipLink from '$lib/components/atoms/SkipLink.svelte';
	import type { MacProduct, LinkType, LogoType } from '$lib/models';

	// Header navigation links
	const headerNavLinks: LinkType[] = [
		{ label: 'Store', href: '/store' },
		{ label: 'Mac', href: '/mac' },
		{ label: 'iPad', href: '/ipad' },
		{ label: 'iPhone', href: '/iphone' },
		{ label: 'Watch', href: '/watch' },
		{ label: 'AirPods', href: '/airpods' },
		{ label: 'TV & Home', href: '/tv-home' },
		{ label: 'Entertainment', href: '/entertainment' },
		{ label: 'Accessories', href: '/accessories' },
		{ label: 'Support', href: '/support' }
	];

	const headerLogo: LogoType = {
		title: 'Apple',
		imgUrl: '',
		imgAlt: 'Apple'
	};

	// Chapter Nav items (horizontal scrollable navigation)
	const chapterNavItems = [
		{
			label: 'MacBook Air',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/macbookair_702x350.png',
			href: '/macbook-air'
		},
		{
			label: 'MacBook Pro',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/macbookpro_702x350.png',
			href: '/macbook-pro',
			isNew: true
		},
		{
			label: 'iMac',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/imac_702x350.png',
			href: '/imac'
		},
		{
			label: 'Mac mini',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/macmini_702x350.png',
			href: '/mac-mini'
		},
		{
			label: 'Mac Studio',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/macstudio_702x350.png',
			href: '/mac-studio'
		},
		{
			label: 'Mac Pro',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/macpro_702x350.png',
			href: '/mac-pro'
		},
		{
			label: 'Help Me Choose',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/helpmechoose_702x350.png',
			href: '/mac/best-mac'
		},
		{
			label: 'Compare',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/compare_702x350.png',
			href: '/mac/compare'
		},
		{
			label: 'Displays',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/displays_702x350.png',
			href: '/displays'
		},
		{
			label: 'Accessories',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/accessories_702x350.png',
			href: '/mac/accessories'
		},
		{
			label: 'macOS Tahoe',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/macos_702x350.png',
			href: '/macos'
		},
		{
			label: 'Shop Mac',
			icon: 'https://www.apple.com/v/mac/home/cd/images/chapternav/shop_mac_702x350.png',
			href: '/shop/buy-mac'
		}
	];

	// Mac Products lineup data
	const macProducts: MacProduct[] = [
		{
			slug: 'macbook-air',
			name: 'MacBook Air',
			tagline: '13" and 15"',
			description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
			startingPrice: 'From $999',
			chip: 'M4 chip',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_mba_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			colors: [
				{ name: 'Sky Blue', swatch: '#7eb4d2' },
				{ name: 'Silver', swatch: '#e3e4e5' },
				{ name: 'Starlight', swatch: '#f0e4d3' },
				{ name: 'Midnight', swatch: '#2e3642' }
			],
			ctas: {
				primary: { label: 'Learn more', href: '/macbook-air' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/macbook-air' }
			}
		},
		{
			slug: 'macbook-pro',
			name: 'MacBook Pro',
			tagline: '14" and 16"',
			description: 'The most advanced Mac laptops for demanding workflows.',
			startingPrice: 'From $1,599',
			badge: 'New 14" with M5',
			chip: 'M5, M4 Pro, or M4 Max chip',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_mbp_702x700.png',
			background: 'linear-gradient(180deg, #1d1d1f 0%, #000000 100%)',
			textOnDark: true,
			colors: [
				{ name: 'Space Black', swatch: '#2e3642' },
				{ name: 'Silver', swatch: '#e3e4e5' }
			],
			ctas: {
				primary: { label: 'Learn more', href: '/macbook-pro' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/macbook-pro' }
			}
		},
		{
			slug: 'imac',
			name: 'iMac',
			tagline: '24-inch',
			description: 'A stunning all-in-one desktop for creativity and productivity.',
			startingPrice: 'From $1,299',
			chip: 'M4 chip',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_imac_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			colors: [
				{ name: 'Blue', swatch: '#5b9bd5' },
				{ name: 'Purple', swatch: '#a78bab' },
				{ name: 'Pink', swatch: '#f4c2c2' },
				{ name: 'Orange', swatch: '#f5a962' },
				{ name: 'Yellow', swatch: '#f5d547' },
				{ name: 'Green', swatch: '#8db48e' },
				{ name: 'Silver', swatch: '#e3e4e5' }
			],
			ctas: {
				primary: { label: 'Learn more', href: '/imac' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/imac' }
			}
		},
		{
			slug: 'mac-mini',
			name: 'Mac mini',
			tagline: '',
			description: 'The mini-est, most affordable Mac with mighty performance.',
			startingPrice: 'From $599',
			chip: 'M4 or M4 Pro chip',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_mac_mini_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			ctas: {
				primary: { label: 'Learn more', href: '/mac-mini' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/mac-mini' }
			}
		},
		{
			slug: 'mac-studio',
			name: 'Mac Studio',
			tagline: '',
			description: 'Powerful performance and extensive connectivity for pro workflows.',
			startingPrice: 'From $1,999',
			chip: 'M4 Max or M3 Ultra chip',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_mac_studio_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			ctas: {
				primary: { label: 'Learn more', href: '/mac-studio' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/mac-studio' }
			}
		},
		{
			slug: 'mac-pro',
			name: 'Mac Pro',
			tagline: '',
			description: 'A pro workstation with PCIe expansion for demanding workflows.',
			startingPrice: 'From $6,999',
			chip: 'M2 Ultra chip',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_mac_pro_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			ctas: {
				primary: { label: 'Learn more', href: '/mac-pro' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/mac-pro' }
			}
		},
		{
			slug: 'studio-display',
			name: 'Studio Display',
			tagline: '',
			description: 'A 5K Retina display with stellar camera and audio.',
			startingPrice: 'From $1,599',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_studio_display_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			ctas: {
				primary: { label: 'Learn more', href: '/studio-display' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/studio-display' }
			}
		},
		{
			slug: 'pro-display-xdr',
			name: 'Pro Display XDR',
			tagline: '',
			description: 'An advanced 6K XDR display for pro workflows.',
			startingPrice: 'From $4,999',
			heroImage:
				'https://www.apple.com/v/mac/home/cd/images/overview/select/product_tile_pro_display_xdr_702x700.png',
			background: 'linear-gradient(180deg, #fafafa 0%, #f5f5f7 100%)',
			textOnDark: false,
			ctas: {
				primary: { label: 'Learn more', href: '/pro-display-xdr' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/pro-display-xdr' }
			}
		}
	];

	// Product filter tabs
	type FilterTab = 'all' | 'laptops' | 'desktops' | 'displays';
	let activeFilter = $state<FilterTab>('all');

	const filterTabs: { label: string; value: FilterTab }[] = [
		{ label: 'All products', value: 'all' },
		{ label: 'Laptops', value: 'laptops' },
		{ label: 'Desktops', value: 'desktops' },
		{ label: 'Displays', value: 'displays' }
	];

	const filteredProducts = $derived(() => {
		switch (activeFilter) {
			case 'laptops':
				return macProducts.filter((p) => ['macbook-air', 'macbook-pro'].includes(p.slug));
			case 'desktops':
				return macProducts.filter((p) =>
					['imac', 'mac-mini', 'mac-studio', 'mac-pro'].includes(p.slug)
				);
			case 'displays':
				return macProducts.filter((p) =>
					['studio-display', 'pro-display-xdr'].includes(p.slug)
				);
			default:
				return macProducts;
		}
	});

	// Apple ecosystem features
	const ecosystemFeatures = [
		{
			title: 'Mac and iPhone',
			description:
				"Answer calls or messages from your iPhone directly on your Mac. See and control what's on your iPhone from your Mac with iPhone Mirroring. Use Universal Clipboard to copy images, video, or text from your iPhone, then paste into another app on your nearby Mac. And thanks to iCloud, you can access your files from either your iPhone or your Mac."
		},
		{
			title: 'Mac and iPad',
			description:
				'Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display, so you can work on one screen while you reference the other. You can even start something on your iPad — like a presentation or an email — and continue it on your Mac.'
		},
		{
			title: 'Mac and Apple Watch',
			description:
				"Automatically log in to your Mac when you're wearing your Apple Watch with Auto Unlock. No password typing required."
		}
	];

	let activeEcosystemTab = $state(0);

	// Footer data
	const footerLogo: LogoType = {
		title: 'Apple',
		imgUrl: '',
		imgAlt: 'Apple'
	};
</script>

<SkipLink href="#main-content" />

<div class="min-h-screen bg-page">
	<!-- Global Header -->
	<Header logo={headerLogo} navLinks={headerNavLinks} />

	<!-- Promo Banner -->
	<div class="bg-page-alt py-3 text-center">
		<p class="text-sm text-primary">
			Now through 12/1, get an Apple Gift Card up to $250 when you buy an eligible Mac.
			<a href="/shop/gifts" class="text-accent-blue hover:underline">Shop</a>
		</p>
	</div>

	<!-- Hero Title -->
	<section class="bg-page py-16 text-center">
		<Heading level={1} size="6xl" weight="semibold" class="text-primary">Mac</Heading>
	</section>

	<!-- Chapter Navigation (Horizontal product icons) -->
	<ChapterNav items={chapterNavItems} />

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
							style={`background: ${product.background}`}
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
									{product.name}
									{#if product.tagline}
										<span class="block text-lg font-normal opacity-80"
											>{product.tagline}</span
										>
									{/if}
								</h3>
								{#if product.chip}
									<p
										class={[
											'mt-1 text-sm',
											product.textOnDark ? 'text-white/80' : 'text-secondary'
										].join(' ')}
									>
										{product.chip}
									</p>
								{/if}
							</div>

							<!-- Product Image -->
							<div class="relative mx-auto mb-6 aspect-square w-full max-w-[200px]">
								{#if product.heroImage}
									<img
										src={product.heroImage}
										alt={product.name}
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
									product.textOnDark ? 'text-secondary' : 'text-secondary'
								].join(' ')}
							>
								{product.description}
							</p>

							<!-- CTAs -->
							<div class="mt-auto flex justify-center gap-4">
								{#if product.ctas?.primary}
									<a
										href={product.ctas.primary.href}
										class="text-sm font-medium text-accent-blue hover:underline"
									>
										{product.ctas.primary.label}
									</a>
								{/if}
								{#if product.ctas?.secondary}
									<a
										href={product.ctas.secondary.href}
										class="text-sm font-medium text-accent-blue hover:underline"
									>
										{product.ctas.secondary.label}
									</a>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<!-- Video Hero - "If you can dream it" -->
		<VideoHero />

		<!-- Why Apple Section -->
		<WhyAppleSection />

		<!-- Get to know Mac (Feature Discovery) -->
		<FeatureDiscovery />

		<!-- Help Me Choose -->
		<HelpMeChooseSection />

		<!-- Switch to Mac Section -->
		<section class="bg-page py-20">
			<div class="mx-auto max-w-360 px-4">
				<Heading level={2} size="4xl" weight="bold" class="mb-12 text-center text-primary">
					Switch to Mac.
				</Heading>

				<div class="grid gap-8 md:grid-cols-2">
					<!-- Trade In Card -->
					<a
						href="/trade-in"
						class="group flex flex-col overflow-hidden rounded-3xl bg-page-alt p-8 transition-shadow hover:shadow-lg"
					>
						<div class="mb-6 text-8xl">
							<svg
								class="mx-auto h-24 w-24 text-green-600"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
								/>
							</svg>
						</div>
						<Heading level={3} size="2xl" weight="bold" class="mb-3 text-primary">
							Give us the old. Save on the new.
						</Heading>
						<Paragraph class="mb-6 text-secondary">
							With Apple Trade In, you can get a great value for your current device
							and apply it toward a new one. If your device isn't eligible for credit,
							we'll recycle it for free.
						</Paragraph>
						<span class="mt-auto text-accent-blue group-hover:underline">
							See what your device is worth
						</span>
					</a>

					<!-- Mac Does That Card -->
					<a
						href="/mac/mac-does-that"
						class="group flex flex-col overflow-hidden rounded-3xl bg-page-alt p-8 transition-shadow hover:shadow-lg"
					>
						<div class="mb-6 text-8xl">
							<svg
								class="mx-auto h-24 w-24 text-accent-blue"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.5"
									d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<Heading level={3} size="2xl" weight="bold" class="mb-3 text-primary">
							Mac does that.
						</Heading>
						<Paragraph class="mb-6 text-secondary">
							See how easy it is to switch to Mac.
						</Paragraph>
						<span class="mt-auto text-accent-blue group-hover:underline"
							>Learn more</span
						>
					</a>
				</div>
			</div>
		</section>

		<!-- Mac Essentials Section -->
		<section class="bg-page-alt py-20">
			<div class="mx-auto max-w-360 px-4">
				<Heading level={2} size="4xl" weight="bold" class="mb-12 text-center text-primary">
					Mac essentials.
				</Heading>

				<div class="grid gap-8 md:grid-cols-2">
					<!-- Accessories Card -->
					<a
						href="/mac/accessories"
						class="group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl bg-card p-8 transition-shadow hover:shadow-lg"
					>
						<div class="relative z-10">
							<Heading level={3} size="2xl" weight="bold" class="mb-3 text-primary">
								Mac accessories
							</Heading>
							<Paragraph class="text-secondary">
								Explore keyboards, mice, and other essentials.
							</Paragraph>
						</div>
						<div class="mt-auto">
							<span class="text-accent-blue group-hover:underline"
								>Shop Mac accessories</span
							>
						</div>
					</a>

					<!-- Studio Display Card -->
					<a
						href="/studio-display"
						class="group relative flex min-h-[400px] flex-col overflow-hidden rounded-3xl bg-card p-8 transition-shadow hover:shadow-lg"
					>
						<div class="relative z-10">
							<Heading level={3} size="2xl" weight="bold" class="mb-3 text-primary">
								Studio Display
							</Heading>
							<Paragraph class="text-secondary">
								The 27-inch 5K Retina display pairs beautifully with any Mac.
							</Paragraph>
						</div>
						<div class="mt-auto">
							<span class="text-accent-blue group-hover:underline">Learn more</span>
						</div>
					</a>
				</div>
			</div>
		</section>

		<!-- Unlock the World of Apple (Ecosystem) Section -->
		<section class="bg-page py-20">
			<div class="mx-auto max-w-360 px-4">
				<Heading level={2} size="4xl" weight="bold" class="mb-6 text-center text-primary">
					Unlock the world of Apple.
				</Heading>
				<div class="mb-12 text-center">
					<a href="/macos/continuity" class="text-accent-blue hover:underline">
						Learn how Apple devices work better together
					</a>
				</div>

				<!-- Ecosystem Tabs -->
				<div class="mx-auto max-w-4xl">
					<div class="mb-8 flex justify-center gap-4">
						{#each ecosystemFeatures as feature, index}
							<button
								type="button"
								onclick={() => (activeEcosystemTab = index)}
								class={[
									'rounded-full px-6 py-2 text-sm font-medium transition-colors min-h-touch',
									'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2',
									activeEcosystemTab === index
										? 'bg-primary text-white'
										: 'bg-secondary text-secondary hover:bg-tertiary'
								].join(' ')}
							>
								{feature.title}
							</button>
						{/each}
					</div>

					<div class="rounded-3xl bg-page-alt p-8 text-center">
						<Heading level={3} size="2xl" weight="bold" class="mb-4 text-primary">
							{ecosystemFeatures[activeEcosystemTab].title}
						</Heading>
						<Paragraph class="mx-auto max-w-2xl text-secondary">
							{ecosystemFeatures[activeEcosystemTab].description}
						</Paragraph>
					</div>
				</div>
			</div>
		</section>

		<!-- Mac Footer Navigation -->
		<section class="border-t border-border bg-page-alt py-16">
			<div class="mx-auto max-w-360 px-4">
				<div class="grid gap-8 md:grid-cols-3">
					<!-- Explore Mac -->
					<div>
						<Heading level={3} size="lg" weight="semibold" class="mb-4 text-primary">
							Explore Mac
						</Heading>
						<ul class="space-y-2 text-sm">
							<li>
								<a href="/mac" class="text-secondary hover:text-primary"
									>Explore All Mac</a
								>
							</li>
							<li>
								<a href="/macbook-air" class="text-secondary hover:text-primary"
									>MacBook Air</a
								>
							</li>
							<li>
								<a href="/macbook-pro" class="text-secondary hover:text-primary"
									>MacBook Pro</a
								>
							</li>
							<li>
								<a href="/imac" class="text-secondary hover:text-primary">iMac</a>
							</li>
							<li>
								<a href="/mac-mini" class="text-secondary hover:text-primary"
									>Mac mini</a
								>
							</li>
							<li>
								<a href="/mac-studio" class="text-secondary hover:text-primary"
									>Mac Studio</a
								>
							</li>
							<li>
								<a href="/mac-pro" class="text-secondary hover:text-primary"
									>Mac Pro</a
								>
							</li>
							<li>
								<a href="/displays" class="text-secondary hover:text-primary"
									>Displays</a
								>
							</li>
							<li>
								<a href="/mac/compare" class="text-secondary hover:text-primary"
									>Compare Mac</a
								>
							</li>
							<li>
								<a
									href="/mac/mac-does-that"
									class="text-secondary hover:text-primary"
									>Switch from PC to Mac</a
								>
							</li>
						</ul>
					</div>

					<!-- Shop Mac -->
					<div>
						<Heading level={3} size="lg" weight="semibold" class="mb-4 text-primary">
							Shop Mac
						</Heading>
						<ul class="space-y-2 text-sm">
							<li>
								<a href="/shop/buy-mac" class="text-secondary hover:text-primary"
									>Shop Mac</a
								>
							</li>
							<li>
								<a href="/shop/gifts" class="text-secondary hover:text-primary"
									>Apple Store Shopping Event</a
								>
							</li>
							<li>
								<a href="/mac/best-mac" class="text-secondary hover:text-primary"
									>Help Me Choose</a
								>
							</li>
							<li>
								<a href="/mac/accessories" class="text-secondary hover:text-primary"
									>Mac Accessories</a
								>
							</li>
							<li>
								<a href="/trade-in" class="text-secondary hover:text-primary"
									>Apple Trade In</a
								>
							</li>
							<li>
								<a href="/shop/financing" class="text-secondary hover:text-primary"
									>Financing</a
								>
							</li>
						</ul>
					</div>

					<!-- More from Mac -->
					<div>
						<Heading level={3} size="lg" weight="semibold" class="mb-4 text-primary">
							More from Mac
						</Heading>
						<ul class="space-y-2 text-sm">
							<li>
								<a href="/support/mac" class="text-secondary hover:text-primary"
									>Mac Support</a
								>
							</li>
							<li>
								<a href="/applecare" class="text-secondary hover:text-primary"
									>AppleCare</a
								>
							</li>
							<li>
								<a href="/macos" class="text-secondary hover:text-primary"
									>macOS Tahoe</a
								>
							</li>
							<li>
								<a
									href="/apple-intelligence"
									class="text-secondary hover:text-primary">Apple Intelligence</a
								>
							</li>
							<li>
								<a href="/apps" class="text-secondary hover:text-primary"
									>Apps by Apple</a
								>
							</li>
							<li>
								<a
									href="/macos/continuity"
									class="text-secondary hover:text-primary">Better with iPhone</a
								>
							</li>
							<li>
								<a href="/icloud" class="text-secondary hover:text-primary"
									>iCloud+</a
								>
							</li>
							<li>
								<a href="/business/mac" class="text-secondary hover:text-primary"
									>Mac for Business</a
								>
							</li>
							<li>
								<a href="/education" class="text-secondary hover:text-primary"
									>Education</a
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	</main>

	<!-- Footer -->
	<Footer logo={footerLogo} brandName="Apple Inc." />
</div>
