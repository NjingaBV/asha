import type { Meta, StoryObj } from '@storybook/sveltekit';
import ComparisonCard from '$lib/components/molecules/ComparisonCard.svelte';

const meta = {
	title: 'Molecules/ComparisonCard',
	component: ComparisonCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `# ComparisonCard Component

Comparison card for side-by-side Mac model features. Displays product image, name, price, and feature list with checkmarks.

## Features
- Product image display
- Name and price
- Feature list with checkmarks
- Highlighted state for recommended products
- Clean, minimal design`
			}
		}
	},
	argTypes: {
		name: {
			control: 'text',
			description: 'Product name'
		},
		price: {
			control: 'text',
			description: 'Product price'
		},
		highlighted: {
			control: 'boolean',
			description: 'Highlight this card'
		}
	}
} satisfies Meta<typeof ComparisonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacBookAir: Story = {
	args: {
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
		imageAlt: 'MacBook Air',
		name: 'MacBook Air',
		price: 'From $1,099',
		features: [
			'M3 chip',
			'13.6" Liquid Retina display',
			'Up to 18 hours battery',
			'1080p FaceTime HD camera',
			'MagSafe charging'
		],
		highlighted: false
	}
};

export const MacBookProHighlighted: Story = {
	args: {
		image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop',
		imageAlt: 'MacBook Pro',
		name: 'MacBook Pro 14"',
		price: 'From $1,999',
		features: [
			'M3 Pro or M3 Max chip',
			'14.2" Liquid Retina XDR display',
			'Up to 22 hours battery',
			'Advanced thermal system',
			'3 Thunderbolt 4 ports'
		],
		highlighted: true
	}
};
