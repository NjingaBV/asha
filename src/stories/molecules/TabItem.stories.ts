import type { Meta, StoryObj } from '@storybook/sveltekit';
import TabItem from '$lib/components/molecules/TabItem.svelte';

const meta = {
	title: 'Molecules/TabItem',
	component: TabItem,
	tags: ['autodocs'],
	argTypes: {
		tabs: {
			control: 'object',
			description: 'Array of tab objects with id and label'
		},
		activeTab: {
			control: 'text',
			description: 'ID of the currently active tab'
		},
		onSelect: {
			action: 'selected',
			description: 'Callback when a tab is selected'
		},
		label: {
			control: 'text',
			description: 'Accessible label for the tablist'
		}
	}
} satisfies Meta<typeof TabItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		tabs: [
			{ id: 'all', label: 'All' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'desktops', label: 'Desktops' }
		],
		activeTab: 'all',
		label: 'Product categories'
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render tab items', async () => {
			const tabs = canvas.getAllByRole('tab');
			expect(tabs.length).toBeGreaterThanOrEqual(3);
		});

		await step('Display all tab labels', async () => {
			expect(canvas.getByText('All')).toBeInTheDocument();
			expect(canvas.getByText('Laptops')).toBeInTheDocument();
			expect(canvas.getByText('Desktops')).toBeInTheDocument();
		});

		await step('First tab is active by default', async () => {
			const tabs = canvas.getAllByRole('tab');
			expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
		});

		await step('Can click to select different tab', async () => {
			const tabs = canvas.getAllByRole('tab');
			if (tabs.length > 1) {
				await userEvent.click(tabs[1]);
				expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
			}
		});
	}
};

export const ProductFilters: Story = {
	args: {
		tabs: [
			{ id: 'all', label: 'All Products' },
			{ id: 'new', label: 'New' },
			{ id: 'popular', label: 'Popular' },
			{ id: 'sale', label: 'On Sale' }
		],
		activeTab: 'all',
		label: 'Filter products'
	}
};

export const SizeOptions: Story = {
	args: {
		tabs: [
			{ id: 'sm', label: 'Small' },
			{ id: 'md', label: 'Medium' },
			{ id: 'lg', label: 'Large' }
		],
		activeTab: 'md',
		label: 'Select size'
	}
};

export const TimeRanges: Story = {
	args: {
		tabs: [
			{ id: 'day', label: 'Day' },
			{ id: 'week', label: 'Week' },
			{ id: 'month', label: 'Month' },
			{ id: 'year', label: 'Year' },
			{ id: 'all', label: 'All Time' }
		],
		activeTab: 'week',
		label: 'Select time range'
	}
};

export const TwoOptions: Story = {
	args: {
		tabs: [
			{ id: 'monthly', label: 'Monthly' },
			{ id: 'yearly', label: 'Yearly' }
		],
		activeTab: 'monthly',
		label: 'Billing period'
	}
};

export const ContentTabs: Story = {
	args: {
		tabs: [
			{ id: 'overview', label: 'Overview' },
			{ id: 'specs', label: 'Specifications' },
			{ id: 'reviews', label: 'Reviews' }
		],
		activeTab: 'overview',
		label: 'Product sections'
	}
};

export const StatusFilter: Story = {
	args: {
		tabs: [
			{ id: 'all', label: 'All' },
			{ id: 'active', label: 'Active' },
			{ id: 'pending', label: 'Pending' },
			{ id: 'completed', label: 'Completed' }
		],
		activeTab: 'active',
		label: 'Filter by status'
	}
};
