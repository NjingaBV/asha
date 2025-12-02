import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTAGroup from '@/lib/components/molecules/CTAGroup.svelte';

const meta = {
	title: 'Molecules/CTAGroup',
	component: CTAGroup,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Groupe d'Appel à l'Action (CTAGroup)

Une molécule de boutons groupés pour afficher un bouton d'appel à l'action principal et un bouton secondaire optionnel, avec un espacement et un alignement cohérents. Simplifie les motifs à double action courants dans la conception d'interfaces.

## Caractéristiques Clés

- **Support Double Bouton**: Actions principale et secondaire optionnelle.
- **Alignement Flexible**: Options d'alignement à gauche ou au centre.
- **Espacement Cohérent**: Un écart unifié entre les boutons.
- **Mise en Page Réactive**: S'empile sur mobile, côte à côte sur ordinateur.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		primary: {
			control: 'object',
			description:
				'Primary action button configuration. Object with: label (string), href (string), tone (string, e.g., "primary"). This is the main conversion action.'
		},
		secondary: {
			control: 'object',
			description:
				'Optional secondary action button. Same structure as primary. Set to null to display only primary button. Provides alternative user path.'
		},
		align: {
			control: { type: 'select' },
			options: ['left', 'center'],
			description:
				'Horizontal alignment of button group. "center" for hero sections and modals, "left" for forms and content sections. Default is "center".'
		}
	}
} satisfies Meta<typeof CTAGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: { label: 'Acheter', href: '#', tone: 'primary' },
		secondary: { label: 'En savoir plus', href: '#', tone: 'secondary' },
		align: 'center'
	}
};

export const PrimaryAndSecondary: Story = {
	args: {
		...Primary.args
	}
};

export const OnlyPrimary: Story = {
	args: {
		...Primary.args,
		secondary: null,
		align: 'left'
	}
};
