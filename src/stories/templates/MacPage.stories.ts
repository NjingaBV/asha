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

Reproduction de la page d'accueil Mac d'Apple (https://www.apple.com/mac/).

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
	})
};
