<script lang="ts">
	import Hero from '$lib/components/organisms/Hero.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import Card from '$lib/components/molecules/Card.svelte';
	import Button from '$lib/components/atoms/Button.svelte';
	import Heading from '$lib/components/atoms/Heading.svelte';
	import Paragraph from '$lib/components/atoms/Paragraph.svelte';

	/**
	 * MacAppleLike Page Component
	 * Reproduction de https://www.apple.com/mac/ en utilisant Asha design system
	 */

	interface HeroType {
		title: string;
		subtitle?: string;
		description?: string;
		backgroundColor?: string;
		textColor?: 'light' | 'dark';
		image?: { src: string; alt: string };
		primaryAction?: { label: string; href?: string };
		secondaryAction?: { label: string; href?: string };
	}

	interface ProductType {
		id: string;
		title: string;
		chip: string;
		description: string;
		image: string;
		colors: Array<{ name: string; code: string }>;
		learnMoreHref: string;
		buyHref: string;
	}

	interface BenefitType {
		icon?: string;
		title: string;
		description: string;
		learnMoreHref?: string;
	}

	interface FeatureType {
		title: string;
		description: string;
		image: string;
		learnMore?: string;
	}

	interface EcosystemSection {
		title: string;
		description: string;
		image: string;
	}

	let {
		variant = 'full'
	}: {
		variant: 'full' | 'essentials' | 'compact';
	} = $props();

	// Hero Section Data
	const heroData: HeroType = {
		title: 'If you can dream it, Mac can do it',
		subtitle: 'Great ideas start here',
		description: 'See how Mac helps ideas come to life',
		backgroundColor: '#000000',
		textColor: 'light',
		primaryAction: { label: 'Watch the film', href: '#film' },
		secondaryAction: { label: 'Learn more', href: '#' }
	};

	// Products Data
	const productsData: ProductType[] = [
		{
			id: 'macbook-air',
			title: 'MacBook Air 13" and 15"',
			chip: 'M4 chip',
			description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
			colors: [
				{ name: 'sky blue', code: '#5B9FDB' },
				{ name: 'silver', code: '#E8E8ED' },
				{ name: 'starlight', code: '#E4DED6' },
				{ name: 'midnight', code: '#2D2D2D' }
			],
			learnMoreHref: '/macbook-air/',
			buyHref: '/shop/macbook-air'
		},
		{
			id: 'macbook-pro-14',
			title: 'MacBook Pro 14"',
			chip: 'M5, M4 Pro, or M4 Max chip',
			description: 'The most advanced Mac laptops for demanding workflows.',
			image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&h=400&fit=crop',
			colors: [
				{ name: 'space black', code: '#1D1D1F' },
				{ name: 'silver', code: '#E8E8ED' }
			],
			learnMoreHref: '/macbook-pro/',
			buyHref: '/shop/macbook-pro'
		},
		{
			id: 'macbook-pro-16',
			title: 'MacBook Pro 16"',
			chip: 'M5, M4 Pro, or M4 Max chip',
			description: 'The most advanced Mac laptops for demanding workflows.',
			image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&h=400&fit=crop',
			colors: [
				{ name: 'space black', code: '#1D1D1F' },
				{ name: 'silver', code: '#E8E8ED' }
			],
			learnMoreHref: '/macbook-pro/',
			buyHref: '/shop/macbook-pro'
		},
		{
			id: 'imac',
			title: 'iMac',
			chip: 'M4 chip',
			description: 'A stunning all-in-one desktop for creativity and productivity.',
			image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=400&fit=crop',
			colors: [
				{ name: 'blue', code: '#5B9FDB' },
				{ name: 'purple', code: '#B576E8' },
				{ name: 'pink', code: '#E8518F' },
				{ name: 'orange', code: '#F0B54D' },
				{ name: 'yellow', code: '#FFC93C' },
				{ name: 'green', code: '#64D6A7' },
				{ name: 'silver', code: '#E8E8ED' }
			],
			learnMoreHref: '/imac/',
			buyHref: '/shop/imac'
		},
		{
			id: 'mac-mini',
			title: 'Mac mini',
			chip: 'M4 or M4 Pro chip',
			description: 'The mini-est, most affordable Mac with mighty performance.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
			colors: [{ name: 'silver', code: '#E8E8ED' }],
			learnMoreHref: '/mac-mini/',
			buyHref: '/shop/mac-mini'
		},
		{
			id: 'mac-studio',
			title: 'Mac Studio',
			chip: 'M4 Max or M3 Ultra chip',
			description: 'Powerful performance and extensive connectivity for pro workflows.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop',
			colors: [{ name: 'silver', code: '#E8E8ED' }],
			learnMoreHref: '/mac-studio/',
			buyHref: '/shop/mac-studio'
		}
	];

	// Benefits Data
	const benefitsData: BenefitType[] = [
		{
			title: 'Save on a new Mac with education pricing',
			description: 'Available to college students and educators.',
			learnMoreHref: '/education'
		},
		{
			title: 'Join an online Personal Setup session',
			description: 'Talk one on one with a Specialist to set up your Mac.',
			learnMoreHref: '/personal-setup'
		},
		{
			title: 'Customize your Mac',
			description: 'Choose your chip, memory, storage, even color.',
			learnMoreHref: '/shop'
		},
		{
			title: 'Get flexible delivery and easy pickup',
			description: 'Choose from delivery or pickup options.',
			learnMoreHref: '/shipping'
		},
		{
			title: 'Shop live with a Specialist',
			description: 'Let us guide you live over video.',
			learnMoreHref: '/video-shop'
		}
	];

	// Features Data - Get to Know Mac
	const featuresData: FeatureType[] = [
		{
			title: 'Performance and Battery Life',
			description:
				'Go fast. Go far. With industry-leading performance and all-day battery life.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'Built for AI',
			description: 'Smart. Secure. On device. Mac is built for intelligence.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'macOS and Apple Intelligence',
			description: 'Easy to use. Easy to love. macOS is the most intuitive operating system.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'Mac + iPhone',
			description: 'Together they work wonders. Seamless integration across devices.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'Compatibility',
			description: 'Mac runs your favorite apps. Thousands of powerful apps.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'Privacy and Security',
			description: "Your business is nobody else's. Built-in security and privacy.",
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'Durability',
			description: 'Built to stand the test of time. Premium materials and craftsmanship.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		},
		{
			title: 'Apple Values',
			description: 'Our values drive everything we do. Sustainability and responsibility.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			learnMore: '#'
		}
	];

	// Ecosystem Data
	const ecosystemData: EcosystemSection[] = [
		{
			title: 'Mac and iPhone',
			description:
				'Answer calls or messages from your iPhone directly on your Mac. Use Universal Clipboard to copy and paste. And so much more.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
		},
		{
			title: 'Mac and iPad',
			description:
				'Sketch on your iPad and have it appear instantly on your Mac. Or use your iPad as a second display.',
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
		},
		{
			title: 'Mac and Apple Watch',
			description:
				"Automatically log in to your Mac when you're wearing your Apple Watch. No password typing required.",
			image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
		}
	];
</script>

<!-- 1. HERO SECTION -->
<Hero {...heroData} />

<!-- 2. PRODUCT SHOWCASE -->
<section class="py-16 md:py-20 lg:py-24">
	<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
		<div class="mb-12 md:mb-16 text-center">
			<Heading level={2} size="4xl" weight="bold" class="text-slate-900 mb-4">
				Explore Mac
			</Heading>
			<Paragraph class="text-slate-600 max-w-2xl mx-auto">
				Find the perfect Mac for your needs
			</Paragraph>
		</div>

		{#if variant === 'compact'}
			<!-- Grille simple de produits -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
				{#each productsData.slice(0, 3) as product}
					<div
						class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
					>
						<img
							src={product.image}
							alt={product.title}
							class="w-full h-64 object-cover"
						/>
						<div class="p-6">
							<Heading level={3} size="lg" weight="semibold" class="text-slate-900">
								{product.title}
							</Heading>
							<Paragraph class="text-sm text-slate-500 mt-1">{product.chip}</Paragraph
							>
							<Paragraph class="mt-3 text-slate-700">{product.description}</Paragraph>
							<div class="mt-4 flex gap-2">
								<a
									href={product.learnMoreHref}
									class="text-blue-600 hover:text-blue-700 text-sm font-medium"
									>Learn more</a
								>
								<span class="text-slate-300">•</span>
								<a
									href={product.buyHref}
									class="text-blue-600 hover:text-blue-700 text-sm font-medium"
									>Buy</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<!-- Grille complète de tous les produits -->
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
				{#each productsData as product}
					<div
						class="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
					>
						<img
							src={product.image}
							alt={product.title}
							class="w-full h-64 object-cover"
						/>
						<div class="p-6">
							<Heading level={3} size="lg" weight="semibold" class="text-slate-900">
								{product.title}
							</Heading>
							<Paragraph class="text-sm text-slate-500 mt-1">{product.chip}</Paragraph
							>
							<Paragraph class="mt-3 text-slate-700">{product.description}</Paragraph>

							<!-- Color Dots -->
							{#if product.colors.length > 0}
								<div class="mt-3 flex gap-2">
									{#each product.colors as color}
										<div
											class="w-4 h-4 rounded-full border border-slate-300 hover:border-slate-600 cursor-pointer transition-colors"
											style={`background-color: ${color.code}`}
											title={color.name}
										/>
									{/each}
								</div>
							{/if}

							<div class="mt-4 flex gap-2">
								<a
									href={product.learnMoreHref}
									class="text-blue-600 hover:text-blue-700 text-sm font-medium"
									>Learn more</a
								>
								<span class="text-slate-300">•</span>
								<a
									href={product.buyHref}
									class="text-blue-600 hover:text-blue-700 text-sm font-medium"
									>Buy</a
								>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</section>

{#if variant !== 'compact'}
	<!-- 3. WHY BUY AT APPLE SECTION -->
	<section class="py-16 md:py-20 lg:py-24 bg-slate-50">
		<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
			<div class="mb-12 md:mb-16 text-center">
				<Heading level={2} size="4xl" weight="bold" class="text-slate-900 mb-4">
					Why Apple is the best place to buy Mac
				</Heading>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
				{#each benefitsData as benefit}
					<div class="bg-white rounded-lg p-6 shadow-sm hover:shadow transition-shadow">
						<Heading
							level={4}
							size="base"
							weight="semibold"
							class="text-slate-900 mb-3"
						>
							{benefit.title}
						</Heading>
						<Paragraph class="text-slate-600 text-sm mb-4"
							>{benefit.description}</Paragraph
						>
						{#if benefit.learnMoreHref}
							<a
								href={benefit.learnMoreHref}
								class="text-blue-600 hover:text-blue-700 text-sm font-medium"
							>
								Learn more →
							</a>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- 4. GET TO KNOW MAC SECTION -->
	<section class="py-16 md:py-20 lg:py-24">
		<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
			<div class="mb-12 md:mb-16 text-center">
				<Heading level={2} size="4xl" weight="bold" class="text-slate-900 mb-4">
					Get to know Mac
				</Heading>
			</div>

			<div class="space-y-12 md:space-y-16">
				{#each featuresData as feature, i}
					<div
						class={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}
					>
						<div class={i % 2 === 1 ? 'md:order-2' : ''}>
							<img
								src={feature.image}
								alt={feature.title}
								class="w-full rounded-lg"
							/>
						</div>
						<div class={i % 2 === 1 ? 'md:order-1' : ''}>
							<Heading level={3} size="2xl" weight="bold" class="text-slate-900 mb-4">
								{feature.title}
							</Heading>
							<Paragraph class="text-slate-600 mb-6">{feature.description}</Paragraph>
							{#if feature.learnMore}
								<a
									href={feature.learnMore}
									class="text-blue-600 hover:text-blue-700 font-medium"
								>
									Learn more →
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- 5. HELP ME CHOOSE SECTION -->
	<section class="py-16 md:py-20 lg:py-24 bg-slate-50">
		<div class="max-w-2xl mx-auto px-4 md:px-6 lg:px-8 text-center">
			<Card>
				<Heading level={3} size="2xl" weight="bold" class="text-slate-900 mb-4">
					Help me choose
				</Heading>
				<Paragraph class="text-slate-600 mb-8">
					Answer a few questions to find the best Mac for you
				</Paragraph>
				<a href="/help-choose">
					<Button tone="primary" size="lg">Get started</Button>
				</a>
			</Card>
		</div>
	</section>

	<!-- 6. ECOSYSTEM SECTION -->
	<section class="py-16 md:py-20 lg:py-24">
		<div class="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
			<div class="mb-12 md:mb-16 text-center">
				<Heading level={2} size="4xl" weight="bold" class="text-slate-900 mb-4">
					Unlock the world of Apple
				</Heading>
				<Paragraph class="text-slate-600 max-w-2xl mx-auto">
					Learn how Apple devices work better together
				</Paragraph>
			</div>

			<div class="space-y-12 md:space-y-16">
				{#each ecosystemData as section}
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<img src={section.image} alt={section.title} class="w-full rounded-lg" />
						<div>
							<Heading level={3} size="2xl" weight="bold" class="text-slate-900 mb-4">
								{section.title}
							</Heading>
							<Paragraph class="text-slate-600">{section.description}</Paragraph>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}

<!-- FOOTER -->
<Footer />

<style>
	section {
		@apply w-full;
	}
</style>
