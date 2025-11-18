import type { Meta, StoryObj } from '@storybook/sveltekit';
import CardGrid from '$lib/components/organisms/CardGrid.svelte';

const meta = {
	title: 'Organisms/CardGrid',
	component: CardGrid,
	tags: ['autodocs'],
	argTypes: {
		cardVariant: {
			control: { type: 'select' },
			options: ['feature', 'benefit', 'mac', 'product', 'image', 'comparison']
		},
		columns: {
			control: { type: 'select' },
			options: [1, 2, 3, 4, 5, 'responsive']
		},
		title: { control: 'text' },
		description: { control: 'text' },
		titleAlign: {
			control: { type: 'select' },
			options: ['left', 'center', 'right']
		},
		backgroundColor: { control: 'color' },
		gap: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		},
		layout: {
			control: { type: 'select' },
			options: ['stacked', 'alternating']
		},
		items: { control: 'object' }
	}
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Features: Story = {
	args: {
		cardVariant: 'feature',
		title: 'Features',
		description: 'Discover what makes our product unique.',
		items: [
			{
				title: 'Feature 1',
				description: 'Description 1',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
			},
			{
				title: 'Feature 2',
				description: 'Description 2',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
			}
		]
	}
};

export const Benefits: Story = {
	args: {
		cardVariant: 'benefit',
		title: 'Benefits',
		columns: 3,
		items: [
			{
				title: 'Benefit 1',
				description: 'Description 1',
				icon: 'star'
			},
			{
				title: 'Benefit 2',
				description: 'Description 2',
				icon: 'heart'
			},
			{
				title: 'Benefit 3',
				description: 'Description 3',
				icon: 'shield'
			}
		]
	}
};
