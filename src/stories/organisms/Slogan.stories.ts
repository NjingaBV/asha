import type { Meta, StoryObj } from '@storybook/sveltekit';
import Slogan from '$lib/components/organisms/Slogan.svelte';

const meta = {
	title: 'Organisms/Slogan',
	component: Slogan,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Slogan

Un organisme qui affiche une série de slogans percutants avec des sous-titres, combinés à un appel à l'action final, pour créer un message marketing puissant.

## Caractéristiques Clés
- **Slogans Multiples**: Affiche une liste de slogans pour renforcer un message.
- **Appel à l'Action Final**: Se termine par un bouton d'appel à l'action clair.
- **Arrière-plan Personnalisable**: La couleur de fond peut être modifiée pour correspondre à l'identité de la marque.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		slogans: { control: 'object' },
		cta: { control: 'object' },
		backgroundColor: { control: 'color' }
	}
} satisfies Meta<typeof Slogan>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		cta: {
			url: '/',
			label: 'Souscrire',
			color: '#0284c7'
		},
		backgroundColor: '#000000',
		slogans: [
			{
				title: 'Simple.',
				subtitle: '0% prise de tête'
			},
			{
				title: 'Transparente.',
				subtitle: 'Au juste prix'
			},
			{
				title: 'Révolutionnaire.',
				subtitle: '100% mobile et flexible'
			}
		]
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args
	}
};
