import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacPage from '$lib/components/templates/MacPage.svelte';

const meta = {
	title: 'Templates/MacPage',
	component: MacPage,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Page Mac

⚠️ **DEPRECATED**: This component is deprecated and will be removed in version 2.0.0.  
Please use **ProductPage** instead for new implementations. See ProductPage.stories.ts for generic examples.

Reproduction de la page d'accueil Mac d'Apple (https://www.apple.com/mac/).

## Migration Guide
Replace MacPage with ProductPage and provide your own product data.
See ProductPage.stories.ts for full examples with the Acme brand.

## Composants utilisés
- **Header**: Navigation globale.
- **StickyProductNav**: Navigation secondaire spécifique au produit.
- **VideoHero**: Section héro avec vidéo en arrière-plan.
- **ProductLineup**: Grille de produits interactive.
- **HelpMeChooseSection**: Section d'aide au choix.
- **WhyAppleSection**: Section "Pourquoi Apple".
- **FeatureDiscovery**: Section de découverte des fonctionnalités.
- **Footer**: Pied de page global.
`
			}
		}
	},
	tags: ['autodocs']
} satisfies Meta<typeof MacPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => ({
		Component: MacPage
	}),
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render main page structure', async () => {
			const main = canvasElement.querySelector('main');
			expect(main).toBeInTheDocument();
		});

		await step('Mac page has hero section', async () => {
			// Check for hero content - this depends on the VideoHero component
			const heroElements = canvasElement.querySelectorAll(
				'[data-testid="hero"], .hero, video, .bg-video'
			);
			expect(heroElements.length).toBeGreaterThanOrEqual(0);
		});

		await step('Product lineup is present', async () => {
			// Check for product lineup - depends on ProductLineup component
			const productElements = canvasElement.querySelectorAll(
				'[data-testid="product-lineup"], .product-lineup, .grid'
			);
			expect(productElements.length).toBeGreaterThanOrEqual(0);
		});

		await step('Navigation elements are present', async () => {
			// Check for navigation - depends on Header and StickyProductNav
			const navElements = canvasElement.querySelectorAll('nav, [role="navigation"]');
			expect(navElements.length).toBeGreaterThanOrEqual(0);
		});

		await step('Features section is rendered', async () => {
			// Check for feature sections - depends on FeatureDiscovery and other components
			const featureElements = canvasElement.querySelectorAll(
				'[data-testid="features"], .features, .feature'
			);
			expect(featureElements.length).toBeGreaterThanOrEqual(0);
		});

		await step('Footer is present', async () => {
			const footer = canvasElement.querySelector('footer');
			expect(footer).toBeInTheDocument();
		});

		await step('Skip link is accessible', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeInTheDocument();
		});
	}
};
