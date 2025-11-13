import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorSwatch from '@/lib/components/atoms/ColorSwatch.svelte';

const meta = {
	title: 'Atoms/ColorSwatch',
	component: ColorSwatch,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Nuancier (Color Swatch)

Un bouton de sélection de couleur circulaire et interactif, idéal pour choisir des couleurs de produit ou des variations de thème.

## Caractéristiques Clés

- **Design Circulaire**: Un bouton arrondi affichant la couleur réelle.
- **État de Sélection**: Un anneau visuel indique l'état sélectionné, avec des effets au survol.
- **Accessible**: Inclut un \`aria-label\`, une infobulle (\`title\`) et le support clavier.
- **Couleurs Flexibles**: Accepte toute valeur de couleur CSS valide.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'color',
			description:
				'The color to display. Accepts any valid CSS color value (hex, rgb, hsl, named colors). This value is applied as inline background style.'
		},
		selected: {
			control: 'boolean',
			description:
				'Whether this swatch is currently selected. When true, displays a prominent ring indicator. Default is false.'
		},
		label: {
			control: 'text',
			description:
				'Accessible label describing the color. Used for aria-label and tooltip (title). Essential for accessibility. Example: "Midnight Blue", "Product Red".'
		},
		onclick: {
			description:
				'Click event handler called when swatch is clicked. Use for selection logic or state management. Receives MouseEvent.'
		}
	}
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: '#0a84ff',
		label: 'Bleu',
		selected: true
	},
	render: (args) => ({
		Component: ColorSwatch,
		props: args
	})
};

export const Selected: Story = {
	args: {
		...Primary.args
	}
};

export const Unselected: Story = {
	args: {
		...Primary.args,
		color: '#ff3b30',
		label: 'Rouge',
		selected: false
	}
};

// Group story removed for v9 typing compatibility
