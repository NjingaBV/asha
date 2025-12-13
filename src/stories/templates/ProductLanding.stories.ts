import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductLanding from '$lib/components/templates/ProductLanding.svelte';

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
		name: 'MacBook Pro',
		description: 'Pro performance, pro display.',
		price: '$1,999',
		image: 'https://picsum.photos/seed/mbp/400/400',
		href: '#'
	},
	{
		name: 'MacBook Air',
		description: 'Strikingly thin, all-day battery.',
		price: '$1,099',
		image: 'https://picsum.photos/seed/mba/400/400',
		href: '#'
	},
	{
		name: 'iMac',
		description: 'All-in-one. All in color.',
		price: '$1,299',
		image: 'https://picsum.photos/seed/imac/400/400',
		href: '#'
	},
	{
		name: 'Mac Studio',
		description: 'Outrageous power.',
		price: '$1,999',
		image: 'https://picsum.photos/seed/studio/400/400',
		href: '#'
	}
];

export const Default: Story = {
	args: {
		heroTitle: 'Welcome to Mac',
		heroDescription:
			'Discover our amazing lineup of Mac computers. Powerful, beautiful, and designed for everyone.',
		primaryAction: {
			label: 'Shop Mac',
			href: '#products'
		},
		secondaryAction: {
			label: 'Learn More',
			href: '#features'
		},
		productsTitle: 'Our Products',
		products: sampleProducts,
		featuresTitle: 'Why Mac'
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
				canvas.getByRole('heading', { level: 1, name: 'Welcome to Mac' })
			).toBeInTheDocument();
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
		heroTitle: 'Mac',
		heroDescription: 'If you can dream it, Mac can do it.',
		primaryAction: {
			label: 'Explore All Mac',
			href: '#'
		},
		productsTitle: 'Explore the Lineup',
		products: sampleProducts,
		featuresTitle: ''
	}
};

export const Minimal: Story = {
	args: {
		heroTitle: 'Simple. Powerful. Mac.',
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
