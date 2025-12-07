import type { Meta, StoryObj } from '@storybook/sveltekit';
import Eyebrow from '@/lib/components/atoms/Eyebrow.svelte';

const meta = {
	title: 'Atoms/Eyebrow',
	component: Eyebrow,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Eyebrow

Une petite étiquette en majuscules qui apparaît au-dessus des titres pour fournir un contexte, une catégorie ou une information de marque.

## Caractéristiques Clés

- **Style Majuscule**: Transforme automatiquement le texte en majuscules avec un espacement large.
- **Hiérarchie Sémantique**: Se positionne au-dessus des titres principaux pour établir la hiérarchie du contenu.
- **Alignement Simple**: Options d'alignement à gauche ou au centre.
- **Style Subtil**: Couleur discrète et petite taille pour un étiquetage non intrusif.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		text: {
			control: 'text',
			description: 'The eyebrow text content. Keep it short (1-3 words) for best results.'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center'],
			description:
				'Text alignment: "center" for hero sections and centered layouts, "left" for left-aligned content sections. Default is "center".'
		},
		children: {
			description:
				'Svelte snippet for custom content. Use when you need more than plain text (e.g., icons, styled text).'
		}
	}
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Apple Watch',
		align: 'center'
	}
};

export const Center: Story = {
	args: {
		...Primary.args
	}
};

export const Left: Story = {
	args: {
		...Primary.args,
		text: 'Series 10',
		align: 'left'
	}
};
