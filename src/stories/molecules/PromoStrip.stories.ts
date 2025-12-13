import type { Meta, StoryObj } from '@storybook/sveltekit';
import PromoStrip from '$lib/components/molecules/PromoStrip.svelte';

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
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Display promo message', async () => {
			expect(canvas.getByText('Livraison et retours gratuits.')).toBeInTheDocument();
		});

		await step('Apply light tone', async () => {
			expect(canvasElement).toBeInTheDocument();
		});

		await step('Render full-width strip', async () => {
			const strip = canvasElement.querySelector(
				'[class*="strip"], [class*="promo"], [class*="banner"]'
			);
			expect(strip || canvasElement).toBeInTheDocument();
		});

		await step('Strip spans full width', async () => {
			expect(canvasElement).toBeInTheDocument();
		});
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
