import type { Meta, StoryObj } from '@storybook/sveltekit';
import Nav from '@/lib/components/atoms/Nav.svelte';

const meta = {
	title: 'Atoms/Nav',
	component: Nav,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Navigation (Nav)

Un composant de navigation réactif à double mode qui s'adapte entre un menu d'en-tête horizontal et une barre de navigation latérale verticale.

## Caractéristiques Clés

- **Mises en Page Doubles**: Menu d'en-tête horizontal pour le bureau, barre latérale verticale pour le mobile.
- **Comportement Réactif**: S'ajuste automatiquement en fonction de la taille de l'écran.
- **Couleur de Texte Intelligente**: Calcule automatiquement la couleur de texte optimale en fonction de l'arrière-plan pour l'accessibilité.
- **Transitions Fluides**: Animation d'apparition pour une expérience élégante.
- **Gestion des Liens**: Accepte un tableau d'objets de liens avec libellé et href.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		headerMenu: {
			control: 'boolean',
			description:
				'Layout mode: true for horizontal header navigation (desktop), false for vertical sidebar navigation (mobile). Affects positioning, spacing, and visibility. Default is false.'
		},
		color: {
			control: 'color',
			description:
				'Background color for mobile navigation. Hex format required. Component automatically calculates optimal text color for contrast. On desktop (md+), background becomes transparent. Default is "#ffffff".'
		},
		links: {
			control: 'object',
			description:
				'Array of navigation link objects. Each object should have "label" (string) and "href" (string) properties. Example: [{ label: "Home", href: "/" }]'
		}
	}
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	},
	args: {
		headerMenu: true,
		color: '#ffffff',
		links: [
			{
				label: 'Home',
				href: '#'
			},
			{
				label: 'About',
				href: '#about'
			},
			{
				label: 'Contact',
				href: '#contact'
			}
		]
	}
};

export const HeaderNavigation: Story = {
	args: {
		...Primary.args
	}
};

export const AsideNavigation: Story = {
	args: {
		...Primary.args,
		headerMenu: false
	}
};
