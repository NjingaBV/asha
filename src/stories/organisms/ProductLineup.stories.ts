import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductLineup from '../../lib/components/organisms/ProductLineup.svelte';

const meta = {
	title: 'Organisms/ProductLineup',
	component: ProductLineup,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		products: { control: 'object' }
	}
} satisfies Meta<typeof ProductLineup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'La gamme',
		description:
			'Une grille interactive pour parcourir chaque modèle avec des finitions, spécifications et appels à l’action.'
	}
};
