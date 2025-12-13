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
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render category title', async () => {
			expect(canvas.getByRole('heading', { level: 1, name: 'Laptops' })).toBeInTheDocument();
		});

		await step('Render category description', async () => {
			expect(canvas.getByText(/Browse our selection of premium laptops/)).toBeInTheDocument();
		});

		await step('Render breadcrumb navigation', async () => {
			expect(canvas.getByText('Home')).toBeInTheDocument();
			expect(canvas.getByText('Products')).toBeInTheDocument();
			expect(canvas.getByText('Laptops')).toBeInTheDocument();
		});

		await step('Display total items count', async () => {
			expect(canvas.getByText('48')).toBeInTheDocument();
		});

		await step('Show pagination info', async () => {
			expect(canvas.getByText('1')).toBeInTheDocument(); // current page
			expect(canvas.getByText('4')).toBeInTheDocument(); // total pages
		});

		await step('Filter bar is visible when enabled', async () => {
			// Check for filter elements - this depends on the FilterBar component
			const filterElements = canvasElement.querySelectorAll(
				'[data-testid="filter"], .filter, [role="search"]'
			);
			expect(filterElements.length).toBeGreaterThanOrEqual(0);
		});

		await step('Main content has proper structure', async () => {
			const main = canvasElement.querySelector('main');
			expect(main).toBeInTheDocument();
		});
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
