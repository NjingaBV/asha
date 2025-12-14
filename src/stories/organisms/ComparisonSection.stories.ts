import type { Meta, StoryObj } from '@storybook/sveltekit';
import ComparisonSection from '$lib/components/organisms/ComparisonSection.svelte';
import { ACME_LAPTOP_AIR, ACME_LAPTOP_PRO_14, ACME_LAPTOP_PRO_16 } from '$lib/fixtures/products';

const meta = {
	title: 'Organisms/ComparisonSection',
	component: ComparisonSection,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Section de Comparaison (ComparisonSection)

Tableau de comparaison détaillée produit par produit avec attributs configurables.

## Caractéristiques
- Tableau de comparaison responsive avec défilement horizontal.
- Attributs de comparaison configurables.
- Images de produits et boutons d'action.
- Mise en évidence des différences.
- Accessibilité complète avec structure de tableau.
`
			}
		}
	}
} satisfies Meta<typeof ComparisonSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CompareLaptops: Story = {
	args: {
		title: 'Compare Laptop Models',
		description: 'Choose the perfect laptop for your needs',
		products: [ACME_LAPTOP_AIR, ACME_LAPTOP_PRO_14, ACME_LAPTOP_PRO_16],
		compareAttributes: ['processor', 'display', 'battery', 'startingPrice']
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render comparison section title', async () => {
			expect(canvas.getByText('Compare Laptop Models')).toBeInTheDocument();
		});

		await step('Display section description', async () => {
			expect(
				canvas.getByText('Choose the perfect laptop for your needs')
			).toBeInTheDocument();
		});

		await step('Render comparison table', async () => {
			const table = canvas.getByRole('table');
			expect(table).toBeInTheDocument();
		});

		await step('Display product names in table headers', async () => {
			expect(canvas.getByText('Laptop Air')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 14"')).toBeInTheDocument();
			expect(canvas.getByText('Laptop Pro 16"')).toBeInTheDocument();
		});

		await step('Show comparison attributes', async () => {
			expect(canvas.getByText('Processor')).toBeInTheDocument();
			expect(canvas.getByText('Display')).toBeInTheDocument();
			expect(canvas.getByText('Battery')).toBeInTheDocument();
			expect(canvas.getByText('Starting Price')).toBeInTheDocument();
		});

		await step('Display product specs', async () => {
			expect(canvas.getByText('Pro CPU')).toBeInTheDocument();
			expect(canvas.getByText('Ultra CPU')).toBeInTheDocument();
			expect(canvas.getByText('Max CPU')).toBeInTheDocument();
		});

		await step('Render CTA buttons', async () => {
			const buttons = canvas.getAllByRole('link', { name: 'Buy' });
			expect(buttons.length).toBe(3);
		});

		await step('Comparison section has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 2 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Compare Laptop Models');

			const table = canvas.getByRole('table');
			expect(table).toBeInTheDocument();
		});
	}
};

export const CustomAttributes: Story = {
	args: {
		title: 'Detailed Comparison',
		description: 'Compare key specifications side by side',
		products: [ACME_LAPTOP_AIR, ACME_LAPTOP_PRO_14],
		compareAttributes: ['processor', 'memory', 'storage', 'battery']
	}
};
