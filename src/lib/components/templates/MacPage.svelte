<script lang="ts">
	/**
	 * @deprecated MacPage is deprecated. Use ProductPage instead for new implementations.
	 * This component will be removed in version 2.0.0.
	 *
	 * Migration: Replace MacPage with ProductPage and provide your own product data.
	 * See ProductPage.stories.ts for generic examples using the Acme brand.
	 */

	import { onMount } from 'svelte';
	import ProductPage from './ProductPage.svelte';
	import type { ProductDetail, LinkType, LogoType } from '$lib/models';

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
	const macProducts: ProductDetail[] = [
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
			category: 'laptop',
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
			category: 'laptop',
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
			category: 'other',
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
			category: 'other',
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
			category: 'other',
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
			category: 'other',
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
			category: 'accessory',
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
			category: 'accessory',
			ctas: {
				primary: { label: 'Learn more', href: '/pro-display-xdr' },
				secondary: { label: 'Buy', href: '/shop/buy-mac/pro-display-xdr' }
			}
		}
	];

	// Footer data
	const footerLogo: LogoType = {
		title: 'Apple',
		imgUrl: '',
		imgAlt: 'Apple'
	};

	// Deprecation warning
	onMount(() => {
		console.warn(
			'MacPage is deprecated. Use ProductPage instead. This component will be removed in version 2.0.0.'
		);
	});
</script>

<ProductPage
	pageTitle="Mac"
	{headerNavLinks}
	{headerLogo}
	{chapterNavItems}
	products={macProducts}
	showHeroBanner={true}
	showCTASection={true}
	showComparisonSection={true}
	showFeatureDiscovery={true}
	{footerLogo}
	footerBrandName="Apple Inc."
/>
