import type { Meta, StoryObj } from '@storybook/sveltekit';
import NavigationBar from '$lib/components/molecules/NavigationBar.svelte';

const meta = {
	title: 'Molecules/NavigationBar',
	component: NavigationBar,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Barre de Navigation (NavigationBar)

Barre de navigation horizontale et collante pour les modèles de Mac. Présente une mise en page épurée et centrée avec plusieurs liens de produits.

## Caractéristiques
- Positionnement collant (\`sticky\`).
- Éléments de navigation centrés.
- Mise en évidence de l'état actif.
- Défilement horizontal réactif.
- Effet de flou en arrière-plan (\`backdrop-blur\`).
`
			}
		}
	},
	argTypes: {
		items: {
			control: 'object',
			description: 'Navigation items array'
		},
		sticky: {
			control: 'boolean',
			description: 'Enable sticky positioning'
		}
	}
} satisfies Meta<typeof NavigationBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MacNavigation: Story = {
	args: {
		items: [
			{ label: 'MacBook Air', href: '#macbook-air' },
			{ label: 'MacBook Pro', href: '#macbook-pro' },
			{ label: 'iMac', href: '#imac' },
			{ label: 'Mac mini', href: '#mac-mini' },
			{ label: 'Mac Studio', href: '#mac-studio' },
			{ label: 'Mac Pro', href: '#mac-pro' },
			{ label: 'Compare', href: '#compare' },
			{ label: 'Accessories', href: '#accessories' }
		],
		activeHref: '#macbook-air',
		sticky: true
	}
};

export const SimpleNav: Story = {
	args: {
		items: [
			{ label: 'MacBook Air', href: '#macbook-air' },
			{ label: 'MacBook Pro', href: '#macbook-pro' },
			{ label: 'iMac', href: '#imac' },
			{ label: 'Compare', href: '#compare' }
		],
		sticky: false
	}
};
