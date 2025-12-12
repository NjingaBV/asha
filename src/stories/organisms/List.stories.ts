import type { Meta, StoryObj } from '@storybook/sveltekit';
import List from '$lib/components/organisms/List.svelte';

const meta = {
	title: 'Organisms/List',
	component: List,
	tags: ['autodocs'],
	argTypes: {
		items: { control: 'object' },
		variant: {
			control: { type: 'select' },
			options: ['unordered', 'ordered', 'none']
		},
		marker: {
			control: { type: 'select' },
			options: ['disc', 'circle', 'square', 'decimal', 'none']
		},
		spacing: {
			control: { type: 'select' },
			options: ['tight', 'normal', 'loose']
		},
		dividers: { control: 'boolean' }
	}
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'unordered',
		marker: 'disc',
		spacing: 'normal',
		dividers: false,
		items: [
			{ id: '1', content: 'First item in the list' },
			{ id: '2', content: 'Second item in the list' },
			{ id: '3', content: 'Third item in the list' },
			{ id: '4', content: 'Fourth item in the list' }
		]
	}
};

export const Ordered: Story = {
	args: {
		...Default.args,
		variant: 'ordered',
		marker: 'decimal'
	}
};

export const Circle: Story = {
	args: {
		...Default.args,
		marker: 'circle'
	}
};

export const Square: Story = {
	args: {
		...Default.args,
		marker: 'square'
	}
};

export const NoMarker: Story = {
	args: {
		...Default.args,
		variant: 'none',
		marker: 'none'
	}
};

export const WithDividers: Story = {
	args: {
		...Default.args,
		dividers: true,
		marker: 'none',
		variant: 'none'
	}
};

export const TightSpacing: Story = {
	args: {
		...Default.args,
		spacing: 'tight'
	}
};

export const LooseSpacing: Story = {
	args: {
		...Default.args,
		spacing: 'loose'
	}
};
