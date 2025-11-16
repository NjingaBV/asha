<script lang="ts">
	import LandingPage from '../templates/LandingPage.svelte';
	import type { Product, Benefit } from '../../models';

	// Mac product data
	const macProducts: Product[] = [
		{
			title: 'MacBook Air',
			subtitle: 'Supercharged by M3',
			description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
			colors: ['silver', 'space-black', 'starlight'],
			colorType: 'solid',
			primaryAction: { label: 'Learn more', href: '/macbook-air' },
			secondaryAction: { label: 'Buy', href: '/buy/macbook-air' },
			badge: 'New'
		},
		{
			title: 'MacBook Pro',
			subtitle: 'Supercharged by M3 Pro and M3 Max',
			description:
				'The most advanced chips ever built for a pro laptop. Incredibly capable, and designed for creators.',
			colors: ['silver', 'space-black'],
			colorType: 'solid',
			primaryAction: { label: 'Learn more', href: '/macbook-pro' },
			secondaryAction: { label: 'Buy', href: '/buy/macbook-pro' }
		},
		{
			title: 'iMac',
			subtitle: 'Supercharged by M3',
			description:
				'The all-in-one computer for creativity. With the M3 chip, colour-matched Magic accessories, and a stunning 24-inch display.',
			colors: ['blue', 'green', 'orange', 'pink', 'purple', 'silver', 'yellow'],
			colorType: 'solid',
			primaryAction: { label: 'Learn more', href: '/imac' },
			secondaryAction: { label: 'Buy', href: '/buy/imac' }
		},
		{
			title: 'Mac Studio',
			subtitle: 'Supercharged by M2 Max and M2 Ultra',
			description:
				'A powerhouse compact desktop for pro workflows. With up to 128GB of unified memory and pro media engines.',
			colors: ['silver'],
			colorType: 'solid',
			primaryAction: { label: 'Learn more', href: '/mac-studio' },
			secondaryAction: { label: 'Buy', href: '/buy/mac-studio' }
		}
	];

	// Mac benefits data
	const macBenefits: Benefit[] = [
		{
			icon: '⚡',
			title: 'Incredible Performance',
			description:
				'Powered by Apple silicon, Mac delivers exceptional performance for everything you do.'
		},
		{
			icon: '🔒',
			title: 'Advanced Security',
			description:
				'Built-in security features protect your data and privacy from the moment you turn it on.'
		},
		{
			icon: '🌍',
			title: 'Seamless Ecosystem',
			description:
				'Works perfectly with all your Apple devices for a seamless experience across all platforms.'
		},
		{
			icon: '🎨',
			title: 'Creative Power',
			description:
				'Professional-grade apps and powerful tools for creators, developers, and everyone in between.'
		}
	];
</script>

<svelte:head>
	<title>Mac - Apple</title>
	<meta
		name="description"
		content="If you can dream it, Mac can do it. Discover the full line of Mac computers, including MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, and Mac Pro."
	/>
</svelte:head>

<LandingPage
	heroTitle="Mac"
	heroDescription="If you can dream it, Mac can do it."
	primaryAction={{ label: 'Shop Mac', href: '/shop' }}
	secondaryAction={{ label: 'Compare', href: '/compare' }}
	productsTitle="Explore the lineup"
	products={macProducts}
	benefitsTitle="Why Mac?"
	benefits={macBenefits}
	featuresTitle="Built for everything you love"
/>
