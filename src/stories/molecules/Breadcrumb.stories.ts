import type { Meta, StoryObj } from '@storybook/sveltekit';
import Breadcrumb from '$lib/components/molecules/Breadcrumb.svelte';

const meta = {
	title: 'Molecules/Breadcrumb',
	component: Breadcrumb,
	tags: ['autodocs'],
	argTypes: {
		items: {
			control: 'object',
			description: 'Array of breadcrumb items with label and optional href'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Breadcrumb size'
		},
		separator: {
			control: 'text',
			description: 'Custom separator string'
		},
		showHomeIcon: {
			control: 'boolean',
			description: 'Show home icon for first item'
		}
	}
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Products', href: '/products' },
			{ label: 'Acme Laptop Pro' }
		],
		size: 'md',
		separator: '/',
		showHomeIcon: false
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, getByRole } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render breadcrumb navigation', async () => {
			const nav = canvas.getByRole('navigation') || canvasElement.querySelector('nav');
			expect(nav || canvasElement).toBeInTheDocument();
		});

		await step('Display all breadcrumb items', async () => {
			expect(canvas.getByText('Home')).toBeInTheDocument();
			expect(canvas.getByText('Products')).toBeInTheDocument();
			expect(canvas.getByText('Acme Laptop Pro')).toBeInTheDocument();
		});

		await step('Render separators between items', async () => {
			const text = canvasElement.textContent;
			expect(text && text.includes('/')).toBeTruthy();
		});

		await step('Have links for navigable items', async () => {
			const links = canvas.getAllByRole('link');
			expect(links.length >= 2).toBeTruthy();
		});
	}
};

export const WithHomeIcon: Story = {
	args: {
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Category', href: '/category' },
			{ label: 'Current Page' }
		],
		size: 'md',
		showHomeIcon: true
	}
};

export const Small: Story = {
	args: {
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Products', href: '/products' },
			{ label: 'Item' }
		],
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Shop', href: '/shop' },
			{ label: 'Electronics', href: '/shop/electronics' },
			{ label: 'Laptops' }
		],
		size: 'lg'
	}
};

export const CustomSeparator: Story = {
	args: {
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Category', href: '/category' },
			{ label: 'Subcategory', href: '/category/sub' },
			{ label: 'Page' }
		],
		separator: '>'
	}
};

export const LongPath: Story = {
	args: {
		items: [
			{ label: 'Home', href: '/' },
			{ label: 'Store', href: '/store' },
			{ label: 'Electronics', href: '/store/electronics' },
			{ label: 'Computers', href: '/store/electronics/computers' },
			{ label: 'Laptops', href: '/store/electronics/computers/laptops' },
			{ label: 'Acme Laptop Pro 16"' }
		],
		showHomeIcon: true
	}
};
