import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacHeroSection from '$lib/components/organisms/HeroSection.svelte';
import ProductGrid from '$lib/components/organisms/ProductGrid.svelte';
import GetToKnowMacSection from '$lib/components/organisms/GetToKnowMacSection.svelte';
import HelpMeChooseSection from '$lib/components/organisms/HelpMeChooseSection.svelte';
import WhyAppleSection from '$lib/components/organisms/WhyAppleSection.svelte';
import BenefitsSection from '$lib/components/organisms/BenefitsSection.svelte';

// Define types locally for Storybook
type Action = {
	label: string;
	href?: string;
	onClick?: () => void;
};

type Product = {
	title: string;
	subtitle?: string;
	description: string;
	colors?: string[];
	colorType?: 'solid' | 'dual-tone';
	primaryAction?: Action;
	secondaryAction?: Action;
	image?: string;
	imageAlt?: string;
	badge?: string;
};

type Benefit = {
	icon?: string;
	title: string;
	description: string;
	link?: Action;
};

const meta = {
	title: 'Pages/AppleMacPage',
	parameters: {
		docs: {
			description: {
				component: 'Complete reproduction of Apple Mac landing page - www.apple.com/mac/'
			}
		},
		layout: 'fullscreen'
	}
} satisfies Meta;

export default meta;
type Story = StoryObj;

// Complete Mac product data from Apple.com
const appleAllProducts: Product[] = [
	{
		title: 'MacBook Air 13" and 15"',
		subtitle: 'M4 chip',
		description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
		colors: ['sky-blue', 'silver', 'starlight', 'midnight'],
		colorType: 'solid',
		primaryAction: { label: 'Learn more', href: '/macbook-air' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/macbook_air' },
		badge: 'New'
	},
	{
		title: 'MacBook Pro 14" and 16"',
		subtitle: 'M5, M4 Pro, or M4 Max chip',
		description: 'The most advanced Mac laptops for demanding workflows.',
		colors: ['space-black', 'silver'],
		colorType: 'solid',
		primaryAction: { label: 'Learn more', href: '/macbook-pro' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/macbook_pro' },
		badge: 'New'
	},
	{
		title: 'iMac',
		subtitle: 'M4 chip',
		description: 'A stunning all-in-one desktop for creativity and productivity.',
		colors: ['blue', 'purple', 'pink', 'orange', 'yellow', 'green', 'silver'],
		colorType: 'dual-tone',
		primaryAction: { label: 'Learn more', href: '/imac' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/imac' }
	},
	{
		title: 'Mac mini',
		subtitle: 'M4 or M4 Pro chip',
		description: 'The mini-est, most affordable Mac with mighty performance.',
		colors: ['silver'],
		colorType: 'solid',
		primaryAction: { label: 'Learn more', href: '/mac-mini' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/mac_mini' }
	},
	{
		title: 'Mac Studio',
		subtitle: 'M4 Max or M3 Ultra chip',
		description: 'Powerful performance and extensive connectivity for pro workflows.',
		colors: ['silver'],
		colorType: 'solid',
		primaryAction: { label: 'Learn more', href: '/mac-studio' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/mac_studio' }
	},
	{
		title: 'Mac Pro',
		subtitle: 'M2 Ultra chip',
		description: 'A pro workstation with PCIe expansion for demanding workflows.',
		colors: ['silver'],
		colorType: 'solid',
		primaryAction: { label: 'Learn more', href: '/mac-pro' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/mac_pro' }
	},
	{
		title: 'Studio Display',
		description: 'A 5K Retina display with stellar camera and audio.',
		primaryAction: { label: 'Learn more', href: '/studio-display' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/mac_studio_display' }
	},
	{
		title: 'Pro Display XDR',
		description: 'An advanced 6K XDR display for pro workflows.',
		primaryAction: { label: 'Learn more', href: '/pro-display-xdr' },
		secondaryAction: { label: 'Buy', href: '/us/shop/goto/buy_mac/pro_display_xdr' }
	}
];

// Laptops only
const laptops = appleAllProducts.slice(0, 2);

// Desktops
const desktops = appleAllProducts.slice(2, 6);

// Displays
const displays = appleAllProducts.slice(6, 8);

// Mac benefits
const macBenefits: Benefit[] = [
	{
		icon: '⚡',
		title: 'Performance and Battery Life',
		description: 'Go fast. Go far.',
		link: { label: 'Learn more', href: '?focus=performance' }
	},
	{
		icon: '🤖',
		title: 'Built for AI',
		description: 'Smart. Secure. On device.',
		link: { label: 'Learn more', href: '?focus=ai' }
	},
	{
		icon: '🧠',
		title: 'macOS and Apple Intelligence',
		description: 'Easy to use. Easy to love.',
		link: { label: 'Learn more', href: '?focus=intelligence' }
	},
	{
		icon: '🔗',
		title: 'Mac + iPhone',
		description: 'Together they work wonders.',
		link: { label: 'Learn more', href: '?focus=continuity' }
	},
	{
		icon: '📱',
		title: 'Compatibility',
		description: 'Mac runs your favorite apps.',
		link: { label: 'Learn more', href: '?focus=compatibility' }
	},
	{
		icon: '🔐',
		title: 'Privacy and Security',
		description: "Your business is nobody else's.",
		link: { label: 'Learn more', href: '?focus=security' }
	},
	{
		icon: '💎',
		title: 'Durability',
		description: 'Built to stand the test of time.',
		link: { label: 'Learn more', href: '?focus=durability' }
	},
	{
		icon: '🌍',
		title: 'Apple Values',
		description: 'Our values drive everything we do.',
		link: { label: 'Learn more', href: '?focus=values' }
	}
];

const whyAppleBenefits: Benefit[] = [
	{
		icon: '🎓',
		title: 'Save on a new Mac with education pricing.',
		description: 'Available to college students and educators.',
		link: { label: 'Education Pricing', href: '/us/shop/goto/educationrouting' }
	},
	{
		icon: '👤',
		title: 'Join an online Personal Setup session.',
		description:
			'Talk one on one with a Specialist to set up your Mac and discover new features.',
		link: { label: 'Personal Setup', href: '/us/shop/goto/personal_setup' }
	},
	{
		icon: '🛠️',
		title: 'Customize your Mac.',
		description: 'Choose your chip, memory, storage, even color.',
		link: { label: 'Customize Your Mac', href: '/us/shop/goto/buy_mac' }
	},
	{
		icon: '📦',
		title: 'Get flexible delivery and easy pickup.',
		description:
			'Choose from two-hour delivery from an Apple Store, free delivery, or easy pickup options.',
		link: { label: 'Delivery and Pickup', href: '/us/shop/goto/shipping_pickup' }
	},
	{
		icon: '🎥',
		title: 'Shop live with a Specialist.',
		description: 'Let us guide you live over video and answer all of your questions.',
		link: { label: 'Guided Video Shopping', href: 'https://contactretail.apple.com/?pg=mac' }
	},
	{
		icon: '📲',
		title: 'Explore a shopping experience designed around you.',
		description: 'Use the Apple Store app to get a more personal way to shop.',
		link: {
			label: 'Apple Store App',
			href: 'https://apps.apple.com/us/app/apple-store/id375380948'
		}
	}
];

/**
 * Hero Section
 * Main hero banner with video background
 */
export const Hero: Story = {
	render: () => ({
		Component: MacHeroSection
	}),
	parameters: {
		layout: 'fullscreen'
	}
};

/**
 * All Products Grid
 * Shows all Mac products in a grid
 */
export const AllProducts: Story = {
	args: {
		title: 'Explore the lineup',
		products: appleAllProducts,
		columns: 2
	},
	render: (args) => ({
		Component: ProductGrid,
		props: args
	})
};

/**
 * Laptops
 * MacBook Air and MacBook Pro
 */
export const Laptops: Story = {
	args: {
		title: 'Laptops',
		products: laptops,
		columns: 2
	},
	render: (args) => ({
		Component: ProductGrid,
		props: args
	})
};

/**
 * Desktops
 * iMac, Mac mini, Mac Studio, Mac Pro
 */
export const Desktops: Story = {
	args: {
		title: 'Desktops',
		products: desktops,
		columns: 2
	},
	render: (args) => ({
		Component: ProductGrid,
		props: args
	})
};

/**
 * Displays
 * Studio Display and Pro Display XDR
 */
export const Displays: Story = {
	args: {
		title: 'Displays',
		products: displays,
		columns: 2
	},
	render: (args) => ({
		Component: ProductGrid,
		props: args
	})
};

/**
 * Get to Know Mac
 * Features and highlights section
 */
export const GetToKnowMac: Story = {
	render: () => ({
		Component: GetToKnowMacSection
	}),
	parameters: {
		layout: 'fullscreen'
	}
};

/**
 * Help Me Choose
 * Interactive tool to find the right Mac
 */
export const HelpMeChoose: Story = {
	render: () => ({
		Component: HelpMeChooseSection
	}),
	parameters: {
		layout: 'fullscreen'
	}
};

/**
 * Why Apple
 * Benefits of buying from Apple
 */
export const WhyApple: Story = {
	args: {
		title: 'Why Apple is the best place to buy Mac.',
		benefits: whyAppleBenefits
	},
	render: (args) => ({
		Component: WhyAppleSection,
		props: args
	}),
	parameters: {
		layout: 'fullscreen'
	}
};

/**
 * Mac Benefits
 * Why you should choose Mac
 */
export const MacBenefits: Story = {
	args: {
		title: 'Get to know Mac.',
		benefits: macBenefits,
		columns: 4
	},
	render: (args) => ({
		Component: BenefitsSection,
		props: args
	}),
	parameters: {
		layout: 'fullscreen'
	}
};

/**
 * Complete Mac Page
 * Full reproduction of Apple Mac landing page
 * Shows all major sections in sequence
 */
export const CompleteMacPage: Story = {
	parameters: {
		docs: {
			description: {
				story: 'Complete reproduction of the official Apple Mac landing page including hero section, product categories, features, help me choose, benefits, and why Apple to buy from Apple.'
			}
		},
		layout: 'fullscreen'
	},
	render: () => {
		return {
			Component: MacHeroSection
		};
	}
};

/**
 * Product Showcase
 * All Mac products in one view
 */
export const ProductShowcase: Story = {
	args: {
		title: 'All Mac Products',
		products: appleAllProducts,
		columns: 2
	},
	render: (args) => ({
		Component: ProductGrid,
		props: args
	}),
	parameters: {
		docs: {
			description: {
				story: 'Complete showcase of all Mac products: MacBook Air, MacBook Pro, iMac, Mac mini, Mac Studio, Mac Pro, Studio Display, and Pro Display XDR.'
			}
		}
	}
};
