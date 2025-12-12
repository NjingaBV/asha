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
			{ label: 'MacBook Pro' }
		],
		size: 'md',
		separator: '/',
		showHomeIcon: false
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
			{ label: 'MacBook Pro 16"' }
		],
		showHomeIcon: true
	}
};
