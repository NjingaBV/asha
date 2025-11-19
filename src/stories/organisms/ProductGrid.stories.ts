import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductGrid from '$lib/components/organisms/ProductGrid.svelte';

const meta = {
	title: 'Organisms/ProductGrid',
	component: ProductGrid,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		products: { control: 'object' },
		columns: {
			control: { type: 'select' },
			options: [1, 2, 3, 4]
		}
	}
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Our Products',
		subtitle: 'Shop Now',
		columns: 3,
		products: [
			{
				title: 'MacBook Air',
				subtitle: 'M2 chip',
				description: 'Strikingly thin and fast.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
				imageAlt: 'MacBook Air',
				colors: ['#2e3642', '#e0e2e0', '#f0e5d3', '#353a42'],
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} }
			},
			{
				title: 'MacBook Pro',
				subtitle: 'M3 chip',
				description: 'Mind-blowing. Head-turning.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
				imageAlt: 'MacBook Pro',
				colors: ['#0b0c0e', '#e0e2e0'],
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} }
			},
			{
				title: 'iMac',
				subtitle: 'M3 chip',
				description: 'Packed with more juice.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
				imageAlt: 'iMac',
				colors: [
					'#4477ce',
					'#8c52ff',
					'#ff66c4',
					'#ff9f1c',
					'#ffcd3c',
					'#55d6be',
					'#e0e2e0'
				],
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} }
			}
		]
	}
};
