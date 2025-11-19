import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductHeader from '$lib/components/molecules/ProductHeader.svelte';

const meta = {
	title: 'Molecules/ProductHeader',
	component: ProductHeader,
	tags: ['autodocs'],
	argTypes: {
		name: { control: 'text' },
		tagline: { control: 'text' },
		description: { control: 'text' },
		price: { control: 'text' },
		badge: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center']
		},
		ctas: { control: 'object' }
	}
} satisfies Meta<typeof ProductHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		name: 'MacBook Air',
		tagline: 'Fidèle au design Air : fin, léger, silencieux.',
		description: 'Puce M3, jusqu’à 18 h d’autonomie, écran Liquid Retina 13 ou 15 pouces.',
		price: 'À partir de 1 299 €',
		badge: 'Nouveau',
		tone: 'light',
		align: 'left',
		ctas: {
			primary: { label: 'Acheter', href: '#' },
			secondary: { label: 'En savoir plus', href: '#' }
		}
	}
};

export const DarkMode: Story = {
	args: {
		...Default.args,
		tone: 'dark',
		name: 'MacBook Pro',
		tagline: 'Pensé pour les pros.',
		price: 'À partir de 1 999 €'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};

export const Centered: Story = {
	args: {
		...Default.args,
		align: 'center'
	}
};
