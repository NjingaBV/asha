import type { Meta, StoryObj } from '@storybook/sveltekit';
import Comparison from '$lib/components/organisms/Comparison.svelte';
import { ACME_LAPTOP_AIR, ACME_LAPTOP_PRO_14, ACME_LAPTOP_PRO_16 } from '$lib/fixtures/products';

const meta = {
	title: 'Organisms/Comparison',
	component: Comparison,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Comparaison de Produits (Comparison)

Section de comparaison côte à côte pour les modèles de produits avec leurs caractéristiques.

## Caractéristiques
- Titre et description de la section.
- Mise en page en grille réactive.
- Prise en charge des produits mis en évidence.
- Listes de caractéristiques avec des coches.
- Vue de comparaison épurée.
`
			}
		}
	}
} satisfies Meta<typeof Comparison>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompareLaptops: Story = {
	args: {
		title: 'Compare Laptop models',
		description: 'Find the perfect laptop that fits your workflow',
		items: [
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'Laptop Air',
				name: 'Laptop Air',
				price: ACME_LAPTOP_AIR.startingPrice,
				features: [
					'Pro CPU with 8-core processor',
					'13-inch Liquid Retina display',
					'Up to 15 hours battery',
					'Fanless design'
				],
				highlighted: false
			},
			{
				image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop',
				imageAlt: 'Laptop Pro 14"',
				name: 'Laptop Pro 14"',
				price: ACME_LAPTOP_PRO_14.startingPrice,
				features: [
					'Ultra CPU with 12-core processor',
					'14-inch Liquid Retina XDR display',
					'Up to 18 hours battery',
					'Three Thunderbolt 4 ports'
				],
				highlighted: true
			},
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'Laptop Pro 16"',
				name: 'Laptop Pro 16"',
				price: ACME_LAPTOP_PRO_16.startingPrice,
				features: [
					'Max CPU with 16-core processor',
					'16-inch Liquid Retina XDR display',
					'Up to 22 hours battery',
					'Three Thunderbolt 4 ports + HDMI'
				],
				highlighted: false
			}
		]
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render comparison title', async () => {
			expect(canvas.getByText('Compare Laptop models')).toBeInTheDocument();
		});

		await step('Display comparison description', async () => {
			expect(
				canvas.getByText('Find the perfect laptop that fits your workflow')
			).toBeInTheDocument();
		});

		await step('Render product names', async () => {
			expect(canvas.getByText('Laptop Air')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 14"')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 16"')).toBeInTheDocument();
		});

		await step('Display product prices', async () => {
			expect(canvas.getByText('$1,199')).toBeInTheDocument();
			expect(canvas.getByText('$1,999')).toBeInTheDocument();
			expect(canvas.getByText('$2,499')).toBeInTheDocument();
		});

		await step('Show product features', async () => {
			expect(canvas.getByText('Pro CPU with 8-core processor')).toBeInTheDocument();
			expect(canvas.getByText('Ultra CPU with 12-core processor')).toBeInTheDocument();
			expect(canvas.getByText('Max CPU with 16-core processor')).toBeInTheDocument();
		});

		await step('Render product images', async () => {
			const images = canvas.getAllByRole('img');
			expect(images.length).toBeGreaterThan(0);
			expect(images[0]).toHaveAttribute('alt', 'Laptop Air');
		});

		await step('Comparison has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Compare Laptop models');
		});
	}
};
