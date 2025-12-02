import type { Meta, StoryObj } from '@storybook/sveltekit';
import TextAnimation from '@/lib/components/organisms/TextAnimation.svelte';

const meta = {
	title: 'Organisms/TextAnimation',
	component: TextAnimation,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Animation de Texte (TextAnimation)

Un organisme d'affichage de texte dynamique et animé qui crée des animations séquentielles attrayantes avec des couleurs personnalisables pour chaque étiquette de texte. Parfait pour les sections héros, les pages de destination ou le contenu promotionnel qui doit mettre en évidence plusieurs propositions de valeur.

## Caractéristiques Clés

- **Animations Séquentielles**: Chaque étiquette s'anime en séquence avec des délais configurables.
- **Couleurs Personnalisées**: Contrôle individuel de la couleur pour chaque étiquette de texte.
- **Grande Typographie**: Texte extra-audacieux et réactif pour un impact maximal.
- **Animations Fluides**: Animation de clignotement/fondu intégrée pour un intérêt visuel.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		labels: {
			control: 'object',
			description:
				'Array of label objects, each containing a title (string) and color (string). The title is the text to display, and color accepts any valid CSS color value (hex, rgb, named colors). Labels animate sequentially with 1 second delay between each.'
		}
	}
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		labels: [
			{
				color: '#22c55e',
				title: 'Simple'
			},
			{
				color: '#eab308',
				title: 'Transparente'
			},
			{
				color: '#3b82f6',
				title: 'Révolutionnaire'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Default animated text showcase with three value propositions in distinct colors (green, yellow, blue). Each word animates in sequence to create a dynamic, attention-grabbing effect. Perfect example of emphasizing multiple brand attributes or product benefits.'
			}
		}
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Ouranos brand example using the same three animated labels. Demonstrates how the text animation can be applied to insurance/financial services messaging with terms like "Simple", "Transparente", and "Révolutionnaire" to communicate brand values.'
			}
		}
	}
};
