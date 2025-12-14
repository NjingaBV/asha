import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductDetail from '$lib/components/templates/ProductDetail.svelte';
import { ACME_LAPTOP_PRO_14, ACME_LAPTOP_AIR } from '$lib/fixtures/products';

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
			{ label: 'Laptop Pro 14"' }
		],
		images: [
			{ src: '/images/laptop-pro-14-1.jpg', alt: 'Laptop Pro 14 inch front view' },
			{ src: '/images/laptop-pro-14-2.jpg', alt: 'Laptop Pro 14 inch side view' },
			{ src: '/images/laptop-pro-14-3.jpg', alt: 'Laptop Pro 14 inch keyboard' },
			{ src: '/images/laptop-pro-14-4.jpg', alt: 'Laptop Pro 14 inch ports' }
		],
		title: 'Laptop Pro 14"',
		description:
			'The most powerful laptop we have ever made. With Ultra CPU, incredible battery life, and a stunning Liquid Retina XDR display.',
		price: 1999,
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
				canvas.getByRole('heading', { level: 1, name: 'Laptop Pro 14"' })
			).toBeInTheDocument();
		});

		await step('Render product description', async () => {
			expect(
				canvas.getByText(/The most powerful laptop we have ever made/)
			).toBeInTheDocument();
		});

		await step('Render product price', async () => {
			expect(canvas.getByText('$1,999')).toBeInTheDocument();
		});

		await step('Render breadcrumb navigation', async () => {
			expect(canvas.getByText('Home')).toBeInTheDocument();
			expect(canvas.getByText('Products')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 14"')).toBeInTheDocument();
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
			{ label: 'Laptop Air' }
		],
		images: [
			{ src: '/images/laptop-air-1.jpg', alt: 'Laptop Air front view' },
			{ src: '/images/laptop-air-2.jpg', alt: 'Laptop Air side view' }
		],
		title: 'Laptop Air',
		description: 'Lightweight design. Incredible all-day battery life.',
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
		images: [{ src: '/images/accessory.jpg', alt: 'Accessory product image' }],
		title: 'Wireless Keyboard',
		description: 'A sleek wireless keyboard with comfortable typing experience.',
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
