import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from '@/lib/components/atoms/Button.svelte';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
		actions: { handles: ['click'] },
		docs: {
			description: {
				component: `
# Bouton Pilule (Pill Button)

Un bouton d'appel à l'action proéminent en forme de pilule, avec des coins arrondis lisses, inspiré des motifs de design d'interface utilisateur modernes.

## Caractéristiques Clés

- **Forme de Pilule**: Des coins entièrement arrondis pour une apparence moderne et distinctive.
- **Lien ou Bouton**: Se rend automatiquement en tant que \`<a>\` si \`href\` est fourni, sinon en tant que \`<button>\`.
- **Trois Tons**: Variantes \`primary\` (bleu), \`secondary\` (blanc) et \`dark\` (noir).
- **Dimensionnement Flexible**: Tailles petite, moyenne et grande pour différents contextes.
- **Option Pleine Largeur**: Peut s'étendre pour remplir la largeur de son conteneur.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description:
				'Button text label. Keep it short and action-oriented (1-3 words recommended).'
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'dark'],
			description:
				'Visual style: "primary" (blue background, high emphasis), "secondary" (white background with border, medium emphasis), "dark" (black background, bold statement). Default is "primary".'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description:
				'Button size: "sm" (compact padding, text-sm), "md" (standard padding, base text), "lg" (large padding, text-lg). Default is "md".'
		},
		href: {
			control: 'text',
			description:
				'Optional URL for navigation. When provided, renders an <a> element instead of <button>. Omit for in-page actions.'
		},
		disabled: {
			control: 'boolean',
			description:
				'Disables interaction and reduces opacity to 50%. For links, adds aria-disabled and removes from tab order.'
		},
		fullWidth: {
			control: 'boolean',
			description:
				'Makes button expand to full width of its container. Useful for mobile layouts or form actions.'
		}
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Acheter',
		tone: 'primary',
		size: 'md'
	},
	render: (args) => ({ Component: Button, props: args })
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		label: 'En savoir plus',
		tone: 'secondary'
	}
};

export const DarkLarge: Story = {
	args: {
		...Primary.args,
		label: 'Explorer',
		tone: 'dark',
		size: 'lg'
	}
};
