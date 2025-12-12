import type { Meta, StoryObj } from '@storybook/sveltekit';
import CategoryPage from '$lib/components/templates/CategoryPage.svelte';

const meta = {
	title: 'Templates/CategoryPage',
	component: CategoryPage,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		breadcrumbs: {
			control: 'object',
			description: 'Breadcrumb navigation items'
		},
		title: {
			control: 'text',
			description: 'Category title'
		},
		description: {
			control: 'text',
			description: 'Category description'
		},
		totalItems: {
			control: 'number',
			description: 'Total number of items'
		},
		page: {
			control: 'number',
			description: 'Current page number'
		},
		totalPages: {
			control: 'number',
			description: 'Total number of pages'
		},
		perPage: {
			control: 'number',
			description: 'Items per page'
		},
		showFilters: {
			control: 'boolean',
			description: 'Show filter bar'
		},
		class: {
			control: 'text',
			description: 'Custom CSS classes'
		}
	}
} satisfies Meta<typeof CategoryPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: 'Products', href: '/products' },
			{ label: 'Laptops' }
		],
		title: 'Laptops',
		description:
			'Browse our selection of premium laptops for work, creativity, and everyday use.',
		totalItems: 48,
		page: 1,
		totalPages: 4,
		perPage: 12,
		showFilters: true
	}
};

export const NoFilters: Story = {
	args: {
		breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Categories' }],
		title: 'All Categories',
		description: 'Explore all product categories.',
		totalItems: 24,
		page: 1,
		totalPages: 2,
		perPage: 12,
		showFilters: false
	}
};

export const SinglePage: Story = {
	args: {
		breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Accessories' }],
		title: 'Accessories',
		description: 'Complete your setup with our range of accessories.',
		totalItems: 8,
		page: 1,
		totalPages: 1,
		perPage: 12,
		showFilters: true
	}
};

export const MidPagination: Story = {
	args: {
		breadcrumbs: [
			{ label: 'Home', href: '/' },
			{ label: 'Shop', href: '/shop' },
			{ label: 'Electronics' }
		],
		title: 'Electronics',
		description: 'Discover the latest in consumer electronics.',
		totalItems: 156,
		page: 7,
		totalPages: 13,
		perPage: 12,
		showFilters: true
	}
};

export const EmptyCategory: Story = {
	args: {
		breadcrumbs: [{ label: 'Home', href: '/' }, { label: 'Coming Soon' }],
		title: 'Coming Soon',
		description: 'New products are on the way. Check back later!',
		totalItems: 0,
		page: 1,
		totalPages: 1,
		perPage: 12,
		showFilters: false
	}
};
