/**
 * Generic Product Fixtures
 *
 * Example product data using the fictional "Acme" brand.
 * Use these for stories, examples, and testing.
 */

import type { ProductDetail, ColorOption } from '$lib/models';

/**
 * Generic color options (no brand-specific names)
 */
export const GENERIC_COLORS: Record<string, ColorOption> = {
	spaceGray: {
		id: 'space-gray',
		name: 'Space Gray',
		swatch: '#5e5e60',
		hex: '#5e5e60'
	},
	silver: {
		id: 'silver',
		name: 'Silver',
		swatch: '#e3e4e5',
		hex: '#e3e4e5'
	},
	midnightBlue: {
		id: 'midnight-blue',
		name: 'Midnight Blue',
		swatch: '#232934',
		hex: '#232934'
	},
	starlight: {
		id: 'starlight',
		name: 'Starlight',
		swatch: '#f0e4d3',
		hex: '#f0e4d3'
	},
	gold: {
		id: 'gold',
		name: 'Gold',
		swatch: '#fae7cf',
		hex: '#fae7cf'
	},
	roseGold: {
		id: 'rose-gold',
		name: 'Rose Gold',
		swatch: '#e8d2cf',
		hex: '#e8d2cf'
	}
};

/**
 * Example: Acme Laptop Pro 14"
 */
export const ACME_LAPTOP_PRO_14: ProductDetail = {
	slug: 'laptop-pro-14',
	title: 'Laptop Pro 14"',
	name: 'Laptop Pro 14"',
	tagline: 'Supercharged for productivity',
	description: 'The most powerful compact laptop we have ever made.',
	category: 'laptop',
	variant: 'Pro',
	startingPrice: '$1,999',
	badge: 'New',

	// Visual
	heroImage: '/images/laptop-pro-14.jpg',
	heroAlt: 'Acme Laptop Pro 14 inch',
	background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
	textOnDark: true,

	// Specs
	processor: 'Ultra CPU',
	display: {
		size: '14-inch',
		resolution: '3024 x 1964',
		technology: 'Liquid Retina XDR',
		brightness: '1600 nits peak'
	},
	battery: 'Up to 18 hours',
	memory: ['16GB', '32GB', '64GB', '96GB'],
	storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],

	// Colors
	colors: [GENERIC_COLORS.spaceGray, GENERIC_COLORS.silver],

	// Highlights
	highlights: [
		'Ultra CPU with 12-core processor',
		'Up to 96GB unified memory',
		'Stunning 14-inch Liquid Retina XDR display',
		'Up to 18 hours battery life',
		'Three Thunderbolt 4 ports'
	],

	// CTAs
	ctas: {
		primary: {
			label: 'Buy',
			href: '/buy/laptop-pro-14'
		},
		secondary: {
			label: 'Learn more',
			href: '/laptop-pro-14'
		}
	}
};

/**
 * Example: Acme Laptop Pro 16"
 */
export const ACME_LAPTOP_PRO_16: ProductDetail = {
	slug: 'laptop-pro-16',
	title: 'Laptop Pro 16"',
	name: 'Laptop Pro 16"',
	tagline: 'Maximum performance',
	description: 'The ultimate laptop for professionals.',
	category: 'laptop',
	variant: 'Pro',
	startingPrice: '$2,499',

	processor: 'Max CPU',
	display: {
		size: '16-inch',
		resolution: '3456 x 2234',
		technology: 'Liquid Retina XDR',
		brightness: '1600 nits peak'
	},
	battery: 'Up to 22 hours',
	memory: ['16GB', '32GB', '64GB', '128GB'],
	storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],

	colors: [GENERIC_COLORS.spaceGray, GENERIC_COLORS.silver],

	highlights: [
		'Max CPU with 16-core processor',
		'Up to 128GB unified memory',
		'Massive 16-inch Liquid Retina XDR display',
		'Up to 22 hours battery life',
		'Three Thunderbolt 4 ports + HDMI'
	],

	ctas: {
		primary: { label: 'Buy', href: '/buy/laptop-pro-16' },
		secondary: { label: 'Learn more', href: '/laptop-pro-16' }
	}
};

/**
 * Example: Acme Laptop Air
 */
export const ACME_LAPTOP_AIR: ProductDetail = {
	slug: 'laptop-air',
	title: 'Laptop Air',
	name: 'Laptop Air',
	tagline: 'Light. Bright. Full of might.',
	description: 'Remarkably thin and light design. Incredibly powerful performance.',
	category: 'laptop',
	variant: 'Air',
	startingPrice: '$1,199',

	processor: 'Pro CPU',
	display: {
		size: '13-inch',
		resolution: '2560 x 1664',
		technology: 'Liquid Retina',
		brightness: '500 nits'
	},
	battery: 'Up to 15 hours',
	memory: ['8GB', '16GB', '24GB'],
	storage: ['256GB', '512GB', '1TB', '2TB'],

	colors: [
		GENERIC_COLORS.midnightBlue,
		GENERIC_COLORS.starlight,
		GENERIC_COLORS.spaceGray,
		GENERIC_COLORS.silver
	],

	highlights: [
		'Pro CPU with 8-core processor',
		'Up to 24GB unified memory',
		'Beautiful 13-inch Liquid Retina display',
		'Up to 15 hours battery life',
		'Fanless design'
	],

	ctas: {
		primary: { label: 'Buy', href: '/buy/laptop-air' },
		secondary: { label: 'Learn more', href: '/laptop-air' }
	}
};

/**
 * All Acme Laptops
 */
export const ACME_LAPTOPS = [ACME_LAPTOP_AIR, ACME_LAPTOP_PRO_14, ACME_LAPTOP_PRO_16];

/**
 * Example: Acme Phone Pro
 */
export const ACME_PHONE_PRO: ProductDetail = {
	slug: 'phone-pro',
	title: 'Phone Pro',
	name: 'Phone Pro',
	tagline: 'Pro. Beyond.',
	description: 'The most advanced phone we have ever created.',
	category: 'phone',
	variant: 'Pro',
	startingPrice: '$999',

	processor: 'Ultra A17 Pro',
	display: {
		size: '6.7-inch',
		resolution: '2796 x 1290',
		technology: 'Super Retina XDR',
		brightness: '2000 nits peak'
	},
	battery: 'Up to 29 hours video',
	storage: ['128GB', '256GB', '512GB', '1TB'],

	colors: [
		{ ...GENERIC_COLORS.midnightBlue, name: 'Deep Blue' },
		{ ...GENERIC_COLORS.spaceGray, name: 'Black Titanium' },
		{ ...GENERIC_COLORS.silver, name: 'White Titanium' },
		GENERIC_COLORS.gold
	],

	highlights: [
		'Professional camera system',
		'Ultra A17 Pro chip',
		'Titanium design',
		'Up to 29 hours battery'
	],

	ctas: {
		primary: { label: 'Buy', href: '/buy/phone-pro' },
		secondary: { label: 'Learn more', href: '/phone-pro' }
	}
};

/**
 * Example: Acme Tablet Pro
 */
export const ACME_TABLET_PRO: ProductDetail = {
	slug: 'tablet-pro',
	title: 'Tablet Pro',
	name: 'Tablet Pro',
	tagline: 'Your ultimate creative canvas',
	description: 'The most powerful tablet for professionals.',
	category: 'tablet',
	variant: 'Pro',
	startingPrice: '$799',

	processor: 'Ultra CPU',
	display: {
		size: '12.9-inch',
		resolution: '2732 x 2048',
		technology: 'Liquid Retina XDR',
		brightness: '1600 nits peak'
	},
	battery: 'Up to 10 hours',
	storage: ['128GB', '256GB', '512GB', '1TB', '2TB'],

	colors: [GENERIC_COLORS.spaceGray, GENERIC_COLORS.silver],

	highlights: [
		'Stunning 12.9-inch display',
		'Ultra CPU performance',
		'All-day battery life',
		'Works with Smart Keyboard and Stylus'
	],

	ctas: {
		primary: { label: 'Buy', href: '/buy/tablet-pro' },
		secondary: { label: 'Learn more', href: '/tablet-pro' }
	}
};

/**
 * All Acme Products
 */
export const ACME_PRODUCTS = [...ACME_LAPTOPS, ACME_PHONE_PRO, ACME_TABLET_PRO];
