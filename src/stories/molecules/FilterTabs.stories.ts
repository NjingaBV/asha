import type { Meta, StoryObj } from '@storybook/sveltekit';
import FilterTabs from '@/lib/components/molecules/FilterTabs.svelte';

const meta = {
	title: 'Molecules/FilterTabs',
	component: FilterTabs,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# FilterTabs

A pill-style tab component for filtering content. Uses proper ARIA tablist pattern with full keyboard navigation.

## Accessibility Features

- **ARIA Tablist Pattern**: Proper \`role="tablist"\` and \`role="tab"\` attributes
- **Keyboard Navigation**: Arrow keys, Home/End for navigation
- **Roving Tabindex**: Only active tab is focusable
- **Focus Visible**: Clear focus indicators

## Keyboard Interactions

- **Arrow Left/Right**: Navigate between tabs
- **Home**: Jump to first tab
- **End**: Jump to last tab
- **Enter/Space**: Activate focused tab (automatic on focus)
`
			}
		}
	},
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
} satisfies Meta<typeof FilterTabs>;

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
