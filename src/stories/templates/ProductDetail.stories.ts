import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductDetail from '$lib/components/templates/ProductDetail.svelte';

const meta = {
	title: 'Templates/ProductDetail',
	component: ProductDetail,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		breadcrumbs: {
			control: 'object',
			description: 'Breadcrumb navigation items'
		},
		images: {
			control: 'object',
			description: 'Product images array (src, alt)'
		},
		title: {
			control: 'text',
			description: 'Product title'
		},
		description: {
			control: 'text',
			description: 'Product description'
		},
		price: {
			control: 'number',
			description: 'Product price'
		},
		salePrice: {
			control: 'number',
			description: 'Sale price (optional)'
		},
		currency: {
			control: 'text',
			description: 'Currency symbol'
		},
		rating: {
			control: { type: 'number', min: 0, max: 5, step: 0.1 },
			description: 'Rating value (0-5)'
		},
		reviewCount: {
			control: 'number',
			description: 'Number of reviews'
		},
		class: {
			control: 'text',
			description: 'Custom CSS classes'
		}
	}
} satisfies Meta<typeof ProductDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: 'Products', href: '/products' },
			{ label: 'MacBook Pro' }
		],
		images: [
			{ src: 'https://picsum.photos/seed/mbp1/800/800', alt: 'MacBook Pro front view' },
			{ src: 'https://picsum.photos/seed/mbp2/800/800', alt: 'MacBook Pro side view' },
			{ src: 'https://picsum.photos/seed/mbp3/800/800', alt: 'MacBook Pro keyboard' },
			{ src: 'https://picsum.photos/seed/mbp4/800/800', alt: 'MacBook Pro ports' }
		],
		title: 'MacBook Pro 16"',
		description:
			'The most powerful MacBook Pro ever. With M3 Pro or M3 Max chip, incredible battery life, and a stunning Liquid Retina XDR display.',
		price: 2499,
		currency: '$',
		rating: 4.8,
		reviewCount: 1247
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render product title', async () => {
			expect(
				canvas.getByRole('heading', { level: 1, name: 'MacBook Pro 16"' })
			).toBeInTheDocument();
		});

		await step('Render product description', async () => {
			expect(canvas.getByText(/The most powerful MacBook Pro ever/)).toBeInTheDocument();
		});

		await step('Render product price', async () => {
			expect(canvas.getByText('$2,499')).toBeInTheDocument();
		});

		await step('Render product rating and reviews', async () => {
			expect(canvas.getByText('4.8')).toBeInTheDocument();
			expect(canvas.getByText('1247')).toBeInTheDocument();
		});

		await step('Render breadcrumb navigation', async () => {
			expect(canvas.getByText('Home')).toBeInTheDocument();
			expect(canvas.getByText('Products')).toBeInTheDocument();
			expect(canvas.getByText('MacBook Pro')).toBeInTheDocument();
		});

		await step('Product images are present', async () => {
			const images = canvasElement.querySelectorAll('img');
			expect(images.length).toBeGreaterThan(0);
		});

		await step('Main content has proper structure', async () => {
			const main = canvasElement.querySelector('main');
			expect(main).toBeInTheDocument();
		});
	}
};

export const OnSale: Story = {
	args: {
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: 'Sale', href: '/sale' },
			{ label: 'MacBook Air' }
		],
		images: [
			{ src: 'https://picsum.photos/seed/mba1/800/800', alt: 'MacBook Air front view' },
			{ src: 'https://picsum.photos/seed/mba2/800/800', alt: 'MacBook Air side view' }
		],
		title: 'MacBook Air 13"',
		description: 'Supercharged by M2. Strikingly thin design. Incredible all-day battery life.',
		price: 1199,
		salePrice: 999,
		currency: '$',
		rating: 4.6,
		reviewCount: 892
	}
};

export const SingleImage: Story = {
	args: {
		breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Accessories' }],
		images: [{ src: 'https://picsum.photos/seed/accessory/800/800', alt: 'Product image' }],
		title: 'Magic Keyboard',
		description: 'A wireless keyboard with a sleek design and comfortable typing experience.',
		price: 99,
		currency: '$',
		rating: 4.5,
		reviewCount: 456
	}
};

export const NoRating: Story = {
	args: {
		breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'New Arrivals' }],
		images: [
			{ src: 'https://picsum.photos/seed/new1/800/800', alt: 'New product view 1' },
			{ src: 'https://picsum.photos/seed/new2/800/800', alt: 'New product view 2' }
		],
		title: 'New Product',
		description: 'Just launched! Be the first to review this product.',
		price: 299,
		currency: '$'
	}
};

export const Minimal: Story = {
	args: {
		title: 'Simple Product',
		description: 'A straightforward product listing.',
		price: 49,
		currency: '$'
	}
};

export const EuroCurrency: Story = {
	args: {
		breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Products' }],
		images: [{ src: 'https://picsum.photos/seed/euro/800/800', alt: 'Product image' }],
		title: 'European Product',
		description: 'Available in European markets with Euro pricing.',
		price: 899,
		currency: '€',
		rating: 4.2,
		reviewCount: 234
	}
};
