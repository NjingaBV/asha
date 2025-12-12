import type { Meta, StoryObj } from '@storybook/sveltekit';
import FilterBar from '$lib/components/organisms/FilterBar.svelte';

const meta = {
	title: 'Organisms/FilterBar',
	component: FilterBar,
	tags: ['autodocs'],
	argTypes: {
		filters: { control: 'object' },
		selected: { control: 'object' },
		direction: {
			control: { type: 'select' },
			options: ['horizontal', 'vertical']
		},
		showClear: { control: 'boolean' }
	}
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		direction: 'horizontal',
		showClear: true,
		filters: [
			{
				id: 'category',
				label: 'Category',
				options: [
					{ label: 'Electronics', value: 'electronics', count: 42 },
					{ label: 'Clothing', value: 'clothing', count: 28 },
					{ label: 'Books', value: 'books', count: 15 }
				]
			},
			{
				id: 'price',
				label: 'Price',
				options: [
					{ label: 'Under $50', value: 'under-50' },
					{ label: '$50-$100', value: '50-100' },
					{ label: 'Over $100', value: 'over-100' }
				]
			}
		],
		selected: {}
	}
};

export const WithSelection: Story = {
	args: {
		...Default.args,
		selected: {
			category: 'electronics',
			price: '50-100'
		}
	}
};

export const Vertical: Story = {
	args: {
		...Default.args,
		direction: 'vertical'
	}
};

export const MultipleSelection: Story = {
	args: {
		direction: 'horizontal',
		showClear: true,
		filters: [
			{
				id: 'tags',
				label: 'Tags',
				multiple: true,
				options: [
					{ label: 'New', value: 'new' },
					{ label: 'Sale', value: 'sale' },
					{ label: 'Popular', value: 'popular' },
					{ label: 'Featured', value: 'featured' }
				]
			}
		],
		selected: {
			tags: ['new', 'sale']
		}
	}
};
