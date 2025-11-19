import type { Meta, StoryObj } from '@storybook/sveltekit';
import AnimatedBlob from '@/lib/components/molecules/AnimatedBlob.svelte';

const meta = {
	title: 'Molecules/AnimatedBlob',
	component: AnimatedBlob,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Blob Animé (AnimatedBlob)

Une molécule de blob de dégradé dynamique et animée pour ajouter un intérêt visuel et une esthétique moderne aux arrière-plans. Comprend des animations de morphing fluides et des dégradés de couleurs personnalisables.

## Caractéristiques Clés

- **Animation Fluide**: Animations de morphing organiques et douces.
- **Couleurs Personnalisées**: Prise en charge des dégradés de plusieurs couleurs.
- **Couverture Plein Écran**: Conçu pour être utilisé en arrière-plan.
- **Optimisé pour la Performance**: Animations CSS accélérées par le GPU.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		colors: {
			control: 'object',
			description:
				'Array of hex color codes for the gradient blob. Recommend 2-4 colors for best visual effect. Colors blend smoothly in the animated gradient. Example: ["#6c00e2", "#ff00e2", "#00e2ff"]'
		}
	}
} satisfies Meta<typeof AnimatedBlob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		colors: ['#6c00e2', '#ff00e2', '#00e2ff']
	}
};

export const Animated: Story = {
	args: {
		...Primary.args
	}
};
