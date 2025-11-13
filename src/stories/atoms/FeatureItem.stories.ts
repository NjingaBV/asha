import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureItem from '@/lib/components/atoms/FeatureItem.svelte';

const meta = {
	title: 'Atoms/FeatureItem',
	component: FeatureItem,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Élément de Caractéristique (Feature Item)

Un composant compact pour lister des caractéristiques, affichant une icône optionnelle, un titre et une description en disposition horizontale.

## Caractéristiques Clés

- **Support d'Icône**: Icône SVG optionnelle avec un dimensionnement et un alignement cohérents.
- **Contenu Flexible**: Titre et description avec un balisage HTML sémantique.
- **Disposition Horizontale**: Icône et texte alignés horizontalement avec un espacement approprié.
- **Typographie Structurée**: Titres en demi-gras et descriptions en sourdine pour une bonne hiérarchie.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description:
				'The feature title/heading. Displayed in large, semibold text. Keep concise (2-5 words) for best readability.'
		},
		description: {
			control: 'text',
			description:
				'Brief description of the feature. Shown in smaller, muted text below title. One sentence recommended (8-15 words).'
		},
		icon: {
			control: 'text',
			description:
				'SVG path data for the icon. Should be a valid SVG path string. Icon is rendered at 24x24px with currentColor stroke. Optional - omit to show text-only.'
		},
		children: {
			description:
				'Svelte snippet for additional custom content. Use for extended descriptions, badges, or interactive elements.'
		}
	}
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Autonomie',
		description: "Jusqu'à 18 heures d'autonomie pour vous accompagner toute la journée."
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};
