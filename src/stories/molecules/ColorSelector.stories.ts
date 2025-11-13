import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorSelector from '@/lib/components/molecules/ColorSelector.svelte';

const meta = {
	title: 'Molecules/ColorSelector',
	component: ColorSelector,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Sélecteur de Couleur (ColorSelector)

Une molécule de sélection de couleur interactive permettant aux utilisateurs de choisir parmi des options de couleur prédéfinies. Comprend des nuanciers visuels avec des étiquettes et des états de sélection pour les variantes de produits ou la personnalisation de thèmes.

## Caractéristiques Clés

- **Nuanciers de Couleur**: Représentation visuelle des couleurs disponibles.
- **État de Sélection**: Indication claire de la couleur sélectionnée.
- **Affichage des Étiquettes**: Noms de couleur lisibles par l'homme.
- **Callback de Changement**: Gestion d'événements pour la sélection de couleur.
- **Accessible au Clavier**: Prise en charge complète de la navigation au clavier.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		colors: {
			control: 'object',
			description:
				'Array of color option objects. Each object has: label (string, human-readable name), value (string, hex color code). Example: [{label: "Bleu", value: "#0a84ff"}, {label: "Rouge", value: "#ff3b30"}]'
		},
		selected: {
			control: 'text',
			description:
				'Currently selected color value (hex code). Should match one of the values in the colors array. Controls which swatch appears selected.'
		},
		onChange: {
			action: 'colorChanged',
			description:
				'Callback function triggered when user selects a color. Receives the selected color value (hex code) as argument. Use for updating application state.'
		}
	}
} satisfies Meta<typeof ColorSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		colors: [
			{ label: 'Bleu', value: '#0a84ff' },
			{ label: 'Rouge', value: '#ff3b30' },
			{ label: 'Noir', value: '#000000' }
		],
		selected: '#0a84ff'
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};
