import type { Meta, StoryObj } from '@storybook/sveltekit';
import PathLine from '@/lib/components/atoms/PathLine.svelte';

const meta = {
	title: 'Atoms/PathLine',
	component: PathLine,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Ligne de Parcours (PathLine)

Un indicateur décoratif de chronologie ou d'étape, comprenant une ligne verticale, un badge numéroté et un titre, avec des effets de dégradé optionnels.

## Caractéristiques Clés

- **Chronologie Verticale**: Relie les étapes d'un flux vertical avec une ligne colorée.
- **Badge Numéroté**: Un badge circulaire affichant le numéro de l'étape.
- **Support de Dégradé**: Effets de dégradé optionnels pour la ligne, le badge et le titre.
- **Thème de Couleur**: Couleur personnalisable avec des variations claires/foncées automatiques.
- **Typographie Audacieuse**: Titre large et percutant.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		order: {
			control: 'number',
			description:
				'The step number or sequence order displayed in the circular badge. Typically starts at 1 and increments for each step.'
		},
		title: {
			control: 'text',
			description:
				'The heading text for this step. Rendered as h3 with large, bold styling. Keep concise for best visual impact.'
		},
		color: {
			control: 'color',
			description:
				'Base color for the line, badge, and title. Hex color format recommended. When gradient is enabled, lighter and darker shades are automatically generated.'
		},
		gradient: {
			control: 'boolean',
			description:
				'Enables gradient effects. When true, creates light/dark color variations and applies gradient backgrounds to line, badge, and text. Default is false for solid colors.'
		}
	}
} satisfies Meta<typeof PathLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simple',
		order: 1,
		color: '#22c55e'
	}
};

export const GreenPathLine: Story = {
	args: {
		...Primary.args
	}
};

export const YellowPathLine: Story = {
	args: {
		...Primary.args,
		title: 'Transparente',
		order: 2,
		color: '#eab308'
	}
};

export const BluePathLine: Story = {
	args: {
		...Primary.args,
		title: 'Révolutionnaire',
		order: 3,
		color: '#3b82f6'
	}
};
