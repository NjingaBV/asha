import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductLanding from '$lib/components/templates/ProductLanding.svelte';
import { ACME_LAPTOPS } from '$lib/fixtures/products';

const meta = {
	title: 'Templates/ProductLanding',
	component: ProductLanding,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# ProductLanding

A full-page landing template with hero section, product grid, and features section.

## Features

- **Skip Link**: Accessibility skip navigation to main content
- **Hero Section**: Title, description, and CTA buttons
- **Product Grid**: Displays products in a responsive grid
- **Features Section**: Highlights key features with icons

## Accessibility

- Includes SkipLink component for keyboard users
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic HTML structure
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		heroTitle: {
			control: 'text',
			description: 'Main hero title'
		},
		heroDescription: {
			control: 'text',
			description: 'Hero section description'
		},
		primaryAction: {
			control: 'object',
			description: 'Primary CTA button configuration'
		},
		secondaryAction: {
			control: 'object',
			description: 'Secondary CTA button configuration'
		},
		productsTitle: {
			control: 'text',
			description: 'Products section title'
		},
		products: {
			control: 'object',
			description: 'Array of products to display'
		},
		featuresTitle: {
			control: 'text',
			description: 'Features section title'
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes'
		}
	}
} satisfies Meta<typeof ProductLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleProducts = [
	{
		name: 'Laptop Pro 14"',
		description: 'Supercharged for productivity.',
		price: '$1,999',
		image: '/images/laptop-pro-14.jpg',
		href: '#'
	},
	{
		name: 'Laptop Air',
		description: 'Light. Bright. Full of might.',
		price: '$1,199',
		image: '/images/laptop-air.jpg',
		href: '#'
	},
	{
		name: 'Laptop Pro 16"',
		description: 'Maximum performance.',
		price: '$2,499',
		image: '/images/laptop-pro-16.jpg',
		href: '#'
	}
];

export const Default: Story = {
	args: {
		heroTitle: 'Welcome to Acme',
		heroDescription:
			'Discover our amazing lineup of laptops. Powerful, beautiful, and designed for everyone.',
		primaryAction: {
			label: 'Shop Laptops',
			href: '#products'
		},
		secondaryAction: {
			label: 'Learn More',
			href: '#features'
		},
		productsTitle: 'Our Products',
		products: sampleProducts,
		featuresTitle: 'Why Acme'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render skip link', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeInTheDocument();
			expect(skipLink).toHaveAttribute('href', '#main-content');
		});

		await step('Render hero section with title', async () => {
			expect(
				canvas.getByRole('heading', { level: 1, name: 'Welcome to Acme' })
			).toBeInTheDocument();
		});

		await step('Render hero description', async () => {
			expect(canvas.getByText(/Discover our amazing lineup/)).toBeInTheDocument();
		});

		await step('Render primary CTA button', async () => {
			const primaryButton = canvas.getByRole('link', { name: 'Shop Laptops' });
			expect(primaryButton).toBeInTheDocument();
			expect(primaryButton).toHaveAttribute('href', '#products');
		});

		await step('Render product grid with items', async () => {
			// Check for product names
			expect(canvas.getByText('Laptop Pro 14"')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Air')).toBeInTheDocument();
		});

		await step('Render features section', async () => {
			expect(canvas.getByRole('heading', { level: 2, name: 'Why Acme' })).toBeInTheDocument();
		});

		await step('Render hero description', async () => {
			expect(canvas.getByText(/Discover our amazing lineup/)).toBeInTheDocument();
		});

		await step('Render primary CTA button', async () => {
			const primaryButton = canvas.getByRole('link', { name: 'Shop Mac' });
			expect(primaryButton).toBeInTheDocument();
			expect(primaryButton).toHaveAttribute('href', '#products');
		});

		await step('Render secondary CTA button', async () => {
			const secondaryButton = canvas.getByRole('link', { name: 'Learn More' });
			expect(secondaryButton).toBeInTheDocument();
			expect(secondaryButton).toHaveAttribute('href', '#features');
		});

		await step('Render products section', async () => {
			expect(
				canvas.getByRole('heading', { level: 2, name: 'Our Products' })
			).toBeInTheDocument();
		});

		await step('Render product grid with items', async () => {
			// Check for product names
			expect(canvas.getByText('MacBook Pro')).toBeInTheDocument();
			expect(canvas.getByText('MacBook Air')).toBeInTheDocument();
		});

		await step('Render features section', async () => {
			expect(canvas.getByRole('heading', { level: 2, name: 'Why Mac' })).toBeInTheDocument();
		});

		await step('Features section has content', async () => {
			expect(canvas.getByText('Performance')).toBeInTheDocument();
			expect(canvas.getByText('Smart Features')).toBeInTheDocument();
			expect(canvas.getByText('User Friendly')).toBeInTheDocument();
		});

		await step('Main content has proper ID', async () => {
			const main = canvas.getByRole('main');
			expect(main).toHaveAttribute('id', 'main-content');
		});
	}
};

export const HeroOnly: Story = {
	args: {
		heroTitle: 'Introducing the Future',
		heroDescription: 'A revolutionary new product that changes everything.',
		primaryAction: {
			label: 'Pre-order Now',
			href: '#'
		},
		productsTitle: '',
		products: [],
		featuresTitle: ''
	}
};

export const WithProducts: Story = {
	args: {
		heroTitle: 'Laptops',
		heroDescription: 'Power meets portability.',
		primaryAction: {
			label: 'Explore All Laptops',
			href: '#'
		},
		productsTitle: 'Explore the Lineup',
		products: sampleProducts,
		featuresTitle: ''
	}
};

export const Minimal: Story = {
	args: {
		heroTitle: 'Simple. Powerful. Acme.',
		heroDescription: '',
		primaryAction: {
			label: 'Shop Now',
			href: '#'
		},
		productsTitle: '',
		products: [],
		featuresTitle: ''
	}
};

export const FullPage: Story = {
	args: {
		heroTitle: 'Think Different',
		heroDescription:
			"Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes.",
		primaryAction: {
			label: 'Get Started',
			href: '#'
		},
		secondaryAction: {
			label: 'Watch Video',
			href: '#'
		},
		productsTitle: 'Featured Products',
		products: sampleProducts,
		featuresTitle: 'Built for Everyone'
	}
};
