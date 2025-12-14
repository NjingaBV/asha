import type { Meta, StoryObj } from '@storybook/sveltekit';
import ComparisonCard from '$lib/components/molecules/ComparisonCard.svelte';

const meta = {
	title: 'Molecules/ComparisonCard',
	component: ComparisonCard,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Carte de Comparaison (ComparisonCard)

Une carte de comparaison pour présenter les caractéristiques de modèles côte à côte. Affiche l'image du produit, le nom, le prix et une liste de caractéristiques avec des coches.

## Caractéristiques
- Affichage de l'image du produit.
- Nom et prix.
- Liste des caractéristiques avec des coches.
- État de mise en évidence pour les produits recommandés.
- Design épuré et minimaliste.
`
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

export const AcmeLaptopAir: Story = {
	args: {
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
		imageAlt: 'Acme Laptop Air',
		name: 'Acme Laptop Air',
		price: 'From $1,199',
		features: [
			'Pro CPU chip',
			'13.6" Liquid Retina display',
			'Up to 15 hours battery',
			'1080p FaceTime HD camera',
			'MagSafe charging'
		],
		highlighted: false
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Display product name', async () => {
			expect(canvas.getByText('Acme Laptop Air')).toBeInTheDocument();
		});

		await step('Display product price', async () => {
			expect(canvas.getByText('From $1,199')).toBeInTheDocument();
		});

		await step('Display all features', async () => {
			expect(canvas.getByText('Pro CPU chip')).toBeInTheDocument();
			expect(canvas.getByText(/Liquid Retina display/)).toBeInTheDocument();
		});

		await step('Render product image', async () => {
			const images = canvasElement.querySelectorAll('img');
			expect(images.length > 0).toBeTruthy();
		});

		await step('Display feature list with checkmarks', async () => {
			const listItems = canvasElement.querySelectorAll('li, [role="listitem"]');
			expect(listItems.length).toBeGreaterThanOrEqual(5);
		});
	}
};

export const AcmeLaptopProHighlighted: Story = {
	args: {
		image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop',
		imageAlt: 'Acme Laptop Pro 14"',
		name: 'Acme Laptop Pro 14"',
		price: 'From $1,999',
		features: [
			'Ultra CPU chip',
			'14.2" Liquid Retina XDR display',
			'Up to 18 hours battery',
			'Advanced thermal system',
			'3 Thunderbolt 4 ports'
		],
		highlighted: true
	}
};
