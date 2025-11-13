import type { Meta, StoryObj } from '@storybook/sveltekit';
import Blob from '@/lib/components/atoms/Blob.svelte';

const meta = {
	title: 'Atoms/Blob',
	component: Blob,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Blob

Un élément d'arrière-plan animé et flou qui crée des effets visuels organiques et fluides, parfaits pour les interfaces modernes et dynamiques.

## Caractéristiques Clés

- **Forme Organique**: Un cercle animé pour un mouvement naturel.
- **Effet de Flou**: Un flou prononcé pour des visuels d'ambiance doux.
- **Mode de Fusion**: Utilise \`mix-blend-multiply\` pour des interactions de couleurs intéressantes.
- **Personnalisable**: La couleur et la position peuvent être ajustées.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'color',
			description:
				'The blob color. Accepts any valid CSS color value. The blur and blend modes will affect final appearance. Consider using semi-transparent or muted colors for best results.'
		},
		position: {
			control: 'text',
			description:
				'CSS position value (though note there is a typo in the component - "postion"). Used for positioning the blob within its container.'
		}
	}
} satisfies Meta<typeof Blob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: '#6c00e2',
		position: ''
	}
};

export const PurpleBlob: Story = {
	args: {
		...Primary.args
	}
};
