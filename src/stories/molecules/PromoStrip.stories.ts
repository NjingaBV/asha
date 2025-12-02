import type { Meta, StoryObj } from '@storybook/sveltekit';
import PromoStrip from '@/lib/components/molecules/PromoStrip.svelte';

const meta = {
	title: 'Molecules/PromoStrip',
	component: PromoStrip,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Bandeau Promotionnel (PromoStrip)

Un bandeau simple et pleine largeur pour afficher des messages promotionnels ou des annonces importantes.

## Caractéristiques Clés
- **Pleine Largeur**: S'étend sur toute la largeur de la fenêtre.
- **Message Simple**: Affiche un message texte centré.
- **Tons Clair et Sombre**: Variantes pour s'adapter à différents thèmes de page.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		text: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		}
	}
} satisfies Meta<typeof PromoStrip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Livraison et retours gratuits.',
		tone: 'light',
		children: null
	}
};

export const Light: Story = {
	args: {
		...Primary.args
	}
};

export const Dark: Story = {
	args: {
		...Primary.args,
		text: 'Disponibilité limitée.',
		tone: 'dark'
	}
};
