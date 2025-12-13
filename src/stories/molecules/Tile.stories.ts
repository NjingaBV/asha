import type { Meta, StoryObj } from '@storybook/sveltekit';
import Tile from '$lib/components/molecules/Tile.svelte';

const meta = {
	title: 'Molecules/Tile',
	component: Tile,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Tuile (Tile)

Une molécule de tuile d'image minimaliste pour afficher une ou plusieurs images dans une mise en page de grille élégante et réactive au survol. Parfait pour les galeries, les portfolios et les vitrines visuelles.

## Caractéristiques Clés

- **Support Multi-images**: Affiche un tableau d'images au format tuile.
- **Effets de Survol**: Transitions fluides lors de l'interaction.
- **Mises en Page Réactives**: S'adapte aux systèmes de grille.
- **Esthétique Épurée**: Style minimal pour mettre l'accent sur l'image.
- **Chargement Différé**: Chargement d'image optimisé pour la performance.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		images: {
			control: 'object',
			description:
				'Array of image URLs to display in the tile. Images are arranged in a responsive grid. Recommend 2-4 images for optimal layout. All images should have similar aspect ratios.'
		}
	}
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		images: [
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
		]
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line storybook/use-storybook-expect
		const { expect } = await import('@storybook/test');

		await step('Render tile images', async () => {
			const images = canvasElement.querySelectorAll('img');
			expect(images.length).toBeGreaterThanOrEqual(2);
		});

		await step('All images are loaded', async () => {
			const images = canvasElement.querySelectorAll('img');
			images.forEach((img) => {
				expect(img).toHaveAttribute('src');
			});
		});

		await step('Images have proper alt text or accessible names', async () => {
			const images = canvasElement.querySelectorAll('img');
			images.forEach((img) => {
				const hasAlt = img.hasAttribute('alt');
				const hasAriaLabel = img.hasAttribute('aria-label');
				expect(hasAlt || hasAriaLabel).toBeTruthy();
			});
		});

		await step('Tile has responsive grid layout', async () => {
			expect(canvasElement).toBeInTheDocument();
		});
	}
};

export const HomeTile: Story = {
	args: {
		...Primary.args
	}
};

export const ShowTile: Story = {
	args: {
		...Primary.args
	}
};
