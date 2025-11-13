import type { Meta, StoryObj } from '@storybook/sveltekit';
import LinkWrapper from './LinkWrapper.svelte';

const meta = {
	title: 'Atoms/Link',
	component: LinkWrapper,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
# Lien (Link)

Un composant de lien stylisé à la manière d'Apple, avec plusieurs variantes. Il prend en charge les icônes et différents styles visuels.

## Caractéristiques
- Plusieurs variantes (\`default\`, \`cta\`, \`subtle\`).
- Prise en charge des icônes.
- Accessible avec les labels ARIA.
- Contrôle de la cible (\`target\`) pour les nouveaux onglets.
- États de survol et de focus.
`
			}
		}
	},
	argTypes: {
		href: {
			control: 'text',
			description: 'Link destination URL'
		},
		variant: {
			control: 'select',
			options: ['default', 'cta', 'subtle'],
			description: 'Visual style variant'
		},
		target: {
			control: 'select',
			options: ['_self', '_blank'],
			description: 'Link target (open in same or new tab)'
		},
		text: {
			control: 'text',
			description: 'Link text content'
		}
	}
} satisfies Meta<typeof LinkWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '#',
		variant: 'default',
		text: 'Learn more'
	}
};

export const CTA: Story = {
	args: {
		href: '#',
		variant: 'cta',
		text: 'Buy now'
	}
};

export const Subtle: Story = {
	args: {
		href: '#',
		variant: 'subtle',
		text: 'View details'
	}
};
