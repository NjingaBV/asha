import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductFamilyLanding from '$lib/components/templates/ProductFamilyLanding.svelte';

/**
 * Product Family Landing Template
 *
 * A comprehensive template for product family landing pages (like Mac, iPad, etc.),
 * featuring sticky navigation, hero section, product grid, benefits, and feature highlights.
 */

const meta = {
	title: 'Templates/ProductFamilyLanding',
	component: ProductFamilyLanding,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Product Family Landing Template

A flexible template designed to showcase a family of products. It replicates the structure of high-quality marketing pages like Apple's Mac page.

## Features
- **Sticky Chapter Navigation**: Quick links to specific products.
- **Hero Section**: Impactful introduction with background image/video support.
- **Product Grid**: Showcase multiple product models with key specs and pricing.
- **Benefits Section**: Highlight ecosystem advantages or purchasing benefits.
- **Feature Grid**: Bento-style grid for highlighting key features.
- **Help Me Choose**: Call to action for product selection assistance.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['full', 'essentials', 'compact'],
			description: 'Page variant'
		},
		heroData: { control: 'object' },
		productsData: { control: 'object' },
		benefitsData: { control: 'object' },
		featuresData: { control: 'object' }
	}
} satisfies Meta<typeof ProductFamilyLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

// Data for the Mac-like example
const macChapterNavItems = [
	{
		label: 'MacBook Air',
		icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macbookair_light__dfypt7o35y6q_large.svg',
		href: '/macbook-air'
	},
	{
		label: 'MacBook Pro',
		icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macbookpro_light__catcn1btfr6q_large.svg',
		href: '/macbook-pro',
		isNew: true
	},
	{
		label: 'iMac',
		icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/imac_light__colyztscbeeu_large.svg',
		href: '/imac'
	},
	{
		label: 'Mac mini',
		icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macmini_light__ndsz6p44ol2y_large.svg',
		href: '/mac-mini'
	},
	{
		label: 'Mac Studio',
		icon: 'https://www.apple.com/v/mac/home/ca/images/chapternav/macstudio_light__dt1p4074j96q_large.svg',
		href: '/mac-studio'
	}
];

const macHeroData = {
	title: 'If you can dream it,\nMac can do it.',
	subtitle: 'Great ideas start here.',
	description: 'See how Mac helps ideas come to life.',
	backgroundColor: '#000000',
	textColor: 'light' as const,
	image: {
		src: 'https://www.apple.com/v/mac/home/ca/images/overview/hero/hero_mac_dream_it__c6uv70k6j04i_large.jpg',
		alt: 'Mac hero image'
	},
	primaryAction: { label: 'Watch the film', href: '#film' },
	secondaryAction: { label: 'Learn more', href: '#learn-more' }
};

const macProductsData = [
	{
		title: 'MacBook Air 13” and 15”',
		tagline: 'M3 chip',
		description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
		image: 'https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3r7cvbo2_large.png',
		price: 'From $999',
		colors: ['#2e3642', '#e0e2e0', '#f0e5d3', '#353a42'],
		learnMoreHref: '/macbook-air',
		buyHref: '/shop/buy-mac/macbook-air'
	},
	{
		title: 'MacBook Pro 14” and 16”',
		tagline: 'M3, M3 Pro, or M3 Max chip',
		description: 'The most advanced Mac laptops for demanding workflows.',
		image: 'https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png',
		price: 'From $1599',
		isNew: true,
		colors: ['#0b0c0e', '#e0e2e0'],
		learnMoreHref: '/macbook-pro',
		buyHref: '/shop/buy-mac/macbook-pro'
	},
	{
		title: 'iMac',
		tagline: 'M3 chip',
		description: 'A stunning all-in-one desktop for creativity and productivity.',
		image: 'https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_imac_24__inq0od011wuq_large.png',
		price: 'From $1299',
		colors: ['#4477ce', '#8c52ff', '#ff66c4', '#ff9f1c', '#ffcd3c', '#55d6be', '#e0e2e0'],
		learnMoreHref: '/imac',
		buyHref: '/shop/buy-mac/imac'
	}
];

const macBenefitsData = [
	{
		title: 'Save on a new Mac with education pricing.',
		description: 'Available to college students and educators.',
		learnMoreHref: '/education'
	},
	{
		title: 'Customize your Mac.',
		description: 'Choose your chip, memory, storage, even color.',
		learnMoreHref: '/shop'
	},
	{
		title: 'Get flexible delivery and easy pickup.',
		description:
			'Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.',
		learnMoreHref: '/shipping'
	}
];

const macFeaturesData = [
	{
		title: 'Performance and Battery Life',
		description: 'Go fast. Go far.',
		image: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_performance__d193s9e5e902_large.jpg',
		learnMore: '#'
	},
	{
		title: 'Mac + iPhone',
		description: 'Together they work wonders.',
		image: 'https://www.apple.com/v/mac/home/ca/images/overview/consider/mac_iphone__d193s9e5e902_large.jpg',
		learnMore: '#'
	}
];

/**
 * Mac Landing Page Example
 * Replicates the Apple Mac landing page structure.
 */
export const MacLanding: Story = {
	args: {
		variant: 'full',
		chapterNavItems: macChapterNavItems,
		heroData: macHeroData,
		productsData: macProductsData,
		benefitsData: macBenefitsData,
		featuresData: macFeaturesData,
		benefitsTitle: 'Why Apple is the best\nplace to buy Mac.',
		featuresTitle: 'Get to know Mac.'
	}
};

/**
 * Compact Variant
 * Useful for smaller landing pages or mobile-first views.
 */
export const Compact: Story = {
	args: {
		variant: 'compact',
		chapterNavItems: macChapterNavItems,
		heroData: macHeroData,
		productsData: macProductsData.slice(0, 2)
	}
};
