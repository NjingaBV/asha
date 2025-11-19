import type { Meta, StoryObj } from '@storybook/sveltekit';
import Label from '$lib/components/atoms/Label.svelte';

const meta = {
	title: 'Atoms/Label',
	component: Label,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Étiquette (Label)

Petite étiquette/badge pour mettre en avant les nouveaux produits ou fonctionnalités, inspiré par le design d'Apple.

## Caractéristiques
- Plusieurs schémas de couleurs.
- Design compact.
- Style de texte en majuscules.
- Utilisé pour les badges "Nouveau".
`
			}
		}
	},
	argTypes: {
		text: {
			control: 'text',
			description: 'Label text'
		},
		color: {
			control: 'select',
			options: ['blue', 'orange', 'red', 'green', 'purple', 'slate'],
			description: 'Color scheme'
		}
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const New: Story = {
	args: {
		text: 'New',
		color: 'orange'
	}
};

export const Blue: Story = {
	args: {
		text: 'Featured',
		color: 'blue'
	}
};

export const Green: Story = {
	args: {
		text: 'Available',
		color: 'green'
	}
};

export const Red: Story = {
	args: {
		text: 'Limited',
		color: 'red'
	}
};
