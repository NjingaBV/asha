import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductFamilyLanding from '$lib/components/templates/ProductFamilyLanding.svelte';
import { ACME_LAPTOPS } from '$lib/fixtures/products';

/**
 * Product Family Landing Template
 *
 * A comprehensive template for product family landing pages (like Laptop, Tablet, etc.),
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

A flexible template designed to showcase a family of products. It replicates the structure of high-quality marketing pages.

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

// Data for the Laptop family example
const laptopChapterNavItems = [
	{
		label: 'Laptop Air',
		icon: '/images/laptop-air-icon.svg',
		href: '/laptop-air'
	},
	{
		label: 'Laptop Pro 14"',
		icon: '/images/laptop-pro-14-icon.svg',
		href: '/laptop-pro-14',
		isNew: true
	},
	{
		label: 'Laptop Pro 16"',
		icon: '/images/laptop-pro-16-icon.svg',
		href: '/laptop-pro-16'
	}
];

const laptopHeroData = {
	title: 'Power meets portability.\nLaptops that perform.',
	subtitle: 'Great ideas start here.',
	description: 'See how our laptops help ideas come to life.',
	backgroundColor: '#000000',
	textColor: 'light' as const,
	image: {
		src: '/images/laptop-hero.jpg',
		alt: 'Laptop hero image'
	},
	primaryAction: { label: 'Explore laptops', href: '#products' },
	secondaryAction: { label: 'Learn more', href: '#learn-more' }
};

const laptopProductsData = [
	{
		title: 'Laptop Air',
		tagline: 'Lightweight and powerful',
		description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
		image: '/images/laptop-air.jpg',
		price: 'From $1,199',
		colors: ['#2e3642', '#e0e2e0', '#f0e5d3', '#353a42'],
		learnMoreHref: '/laptop-air',
		buyHref: '/buy/laptop-air'
	},
	{
		title: 'Laptop Pro 14"',
		tagline: 'Professional performance',
		description: 'The most advanced laptop for demanding workflows.',
		image: '/images/laptop-pro-14.jpg',
		price: 'From $1,999',
		isNew: true,
		colors: ['#0b0c0e', '#e0e2e0'],
		learnMoreHref: '/laptop-pro-14',
		buyHref: '/buy/laptop-pro-14'
	},
	{
		title: 'Laptop Pro 16"',
		tagline: 'Maximum power',
		description: 'Ultimate performance for professionals.',
		image: '/images/laptop-pro-16.jpg',
		price: 'From $2,499',
		colors: ['#0b0c0e', '#e0e2e0'],
		learnMoreHref: '/laptop-pro-16',
		buyHref: '/buy/laptop-pro-16'
	}
];

const laptopBenefitsData = [
	{
		title: 'Save on laptops with education pricing.',
		description: 'Available to students and educators.',
		learnMoreHref: '/education'
	},
	{
		title: 'Customize your laptop.',
		description: 'Choose your processor, memory, storage, even color.',
		learnMoreHref: '/customize'
	},
	{
		title: 'Get flexible delivery and easy pickup.',
		description: 'Choose from delivery options or easy pickup locations.',
		learnMoreHref: '/shipping'
	}
];

const laptopFeaturesData = [
	{
		title: 'Performance and Battery Life',
		description: 'Go fast. Go far.',
		image: '/images/laptop-performance.jpg',
		learnMore: '#performance'
	},
	{
		title: 'Powerful Ecosystem',
		description: 'Works seamlessly together.',
		image: '/images/laptop-ecosystem.jpg',
		learnMore: '#ecosystem'
	}
];

/**
 * Laptop Landing Page Example
 * Showcases the laptop family with navigation, hero, and product showcase.
 */
export const LaptopLanding: Story = {
	args: {
		variant: 'full',
		chapterNavItems: laptopChapterNavItems,
		heroData: laptopHeroData,
		productsData: laptopProductsData,
		benefitsData: laptopBenefitsData,
		featuresData: laptopFeaturesData,
		benefitsTitle: 'Why Acme is the best\nplace to buy laptops.',
		featuresTitle: 'Get to know our laptops.'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render chapter navigation', async () => {
			expect(canvas.getByText('Laptop Air')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 14"')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 16"')).toBeInTheDocument();
		});

		await step('Render hero section with title', async () => {
			expect(canvas.getByText(/Power meets portability/)).toBeInTheDocument();
		});

		await step('Render hero actions', async () => {
			expect(canvas.getByRole('link', { name: 'Explore laptops' })).toBeInTheDocument();
			expect(canvas.getByRole('link', { name: 'Learn more' })).toBeInTheDocument();
		});

		await step('Render product showcase', async () => {
			expect(canvas.getByText('Laptop Air')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 14"')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 16"')).toBeInTheDocument();
		});

		await step('Product cards have pricing', async () => {
			expect(canvas.getByText('From $1,199')).toBeInTheDocument();
			expect(canvas.getByText('From $1,999')).toBeInTheDocument();
		});

		await step('Render benefits section', async () => {
			expect(canvas.getByText(/Why Acme is the best/)).toBeInTheDocument();
		});

		await step('Benefits have descriptions', async () => {
			expect(canvas.getByText(/Save on laptops/)).toBeInTheDocument();
			expect(canvas.getByText(/Customize your laptop/)).toBeInTheDocument();
		});

		await step('Render features section', async () => {
			expect(canvas.getByText('Get to know our laptops.')).toBeInTheDocument();
		});

		await step('Features have content', async () => {
			expect(canvas.getByText('Performance and Battery Life')).toBeInTheDocument();
			expect(canvas.getByText('Powerful Ecosystem')).toBeInTheDocument();
		});
	}
};

/**
 * Compact Variant
 * Useful for smaller landing pages or mobile-first views.
 */
export const Compact: Story = {
	args: {
		variant: 'compact',
		chapterNavItems: laptopChapterNavItems,
		heroData: laptopHeroData,
		productsData: laptopProductsData.slice(0, 2)
	}
};
