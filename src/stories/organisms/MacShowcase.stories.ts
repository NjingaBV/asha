import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacShowcase from '$lib/components/organisms/MacShowcase.svelte';

const meta = {
	title: 'Organisms/MacShowcase',
	component: MacShowcase,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# MacShowcase Component

Grid of Mac product cards showcasing all available models.

## Features
- Section title and description
- Responsive grid layout (1-3 columns)
- Multiple product cards
- Consistent spacing and alignment`
			}
		}
	}
} satisfies Meta<typeof MacShowcase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllMacs: Story = {
	args: {
		title: 'Which Mac is right for you?',
		description: 'Choose the perfect Mac for your needs',
		products: [
			{
				title: 'MacBook Air',
				tagline: 'Supercharged by M3',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'MacBook Air',
				price: 'From $1,099',
				isNew: true,
				colors: ['#E8E8ED', '#1D1D1F', '#F0E4D3', '#7D7E80'],
				learnMoreHref: '#',
				buyHref: '#'
			},
			{
				title: 'MacBook Pro 14"',
				tagline: 'Mind-blowing performance',
				image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=450&fit=crop',
				imageAlt: 'MacBook Pro 14"',
				price: 'From $1,999',
				isNew: false,
				colors: ['#E8E8ED', '#1D1D1F'],
				learnMoreHref: '#',
				buyHref: '#'
			},
			{
				title: 'iMac',
				tagline: 'A statement. Instantly.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'iMac',
				price: 'From $1,299',
				isNew: false,
				colors: [
					'#5E9BED',
					'#E8518F',
					'#F0B54D',
					'#64D6A7',
					'#B576E8',
					'#EC7D6A',
					'#E8E8ED'
				],
				learnMoreHref: '#',
				buyHref: '#'
			}
		]
	}
};
