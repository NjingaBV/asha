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
- Plusieurs schémas de couleurs sémantiques.
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
		tone: {
			control: 'select',
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
			description: 'Semantic color tone'
		}
	}
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Warning: Story = {
	args: {
		text: 'New',
		tone: 'warning'
	}
};

export const Primary: Story = {
	args: {
		text: 'Featured',
		tone: 'primary'
	}
};

export const Success: Story = {
	args: {
		text: 'Available',
		tone: 'success'
	}
};

export const Danger: Story = {
	args: {
		text: 'Limited',
		tone: 'danger'
	}
};

export const Neutral: Story = {
	args: {
		text: 'Default',
		tone: 'neutral'
	}
};
