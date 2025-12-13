import type { Meta, StoryObj } from '@storybook/sveltekit';
import Comparison from '$lib/components/organisms/Comparison.svelte';

const meta = {
	title: 'Organisms/Comparison',
	component: Comparison,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Comparaison de Mac (Comparison)

Section de comparaison côte à côte pour les modèles de Mac avec leurs caractéristiques.

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

export const CompareModels: Story = {
	args: {
		title: 'Compare Mac models',
		description: 'Find the perfect Mac that fits your workflow',
		items: [
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'MacBook Air',
				name: 'MacBook Air',
				price: 'From $1,099',
				features: [
					'M3 chip',
					'13.6" Liquid Retina display',
					'Up to 18 hours battery',
					'1080p FaceTime HD camera'
				],
				highlighted: false
			},
			{
				image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop',
				imageAlt: 'MacBook Pro 14"',
				name: 'MacBook Pro 14"',
				price: 'From $1,999',
				features: [
					'M3 Pro or M3 Max chip',
					'14.2" Liquid Retina XDR display',
					'Up to 22 hours battery',
					'Advanced thermal system'
				],
				highlighted: true
			},
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'iMac',
				name: 'iMac',
				price: 'From $1,299',
				features: [
					'M3 chip',
					'24" 4.5K Retina display',
					'1080p FaceTime HD camera',
					'Six-speaker sound system'
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
			expect(canvas.getByText('Compare Mac models')).toBeInTheDocument();
		});

		await step('Display comparison description', async () => {
			expect(
				canvas.getByText('Find the perfect Mac that fits your workflow')
			).toBeInTheDocument();
		});

		await step('Render product names', async () => {
			expect(canvas.getByText('MacBook Air')).toBeInTheDocument();
			expect(canvas.getByText('MacBook Pro 14"')).toBeInTheDocument();
			expect(canvas.getByText('iMac')).toBeInTheDocument();
		});

		await step('Display product prices', async () => {
			expect(canvas.getByText('From $1,099')).toBeInTheDocument();
			expect(canvas.getByText('From $1,999')).toBeInTheDocument();
			expect(canvas.getByText('From $1,299')).toBeInTheDocument();
		});

		await step('Show product features', async () => {
			expect(canvas.getByText('M3 chip')).toBeInTheDocument();
			expect(canvas.getByText('13.6" Liquid Retina display')).toBeInTheDocument();
			expect(canvas.getByText('M3 Pro or M3 Max chip')).toBeInTheDocument();
		});

		await step('Render product images', async () => {
			const images = canvas.getAllByRole('img');
			expect(images.length).toBeGreaterThan(0);
			expect(images[0]).toHaveAttribute('alt', 'MacBook Air');
		});

		await step('Comparison has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Compare Mac models');
		});
	}
};
