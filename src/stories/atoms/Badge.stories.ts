import type { Meta, StoryObj } from '@storybook/sveltekit';
import Badge from '@/lib/components/atoms/Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Badge

Un composant d'étiquette compact et polyvalent pour mettre en évidence des statuts, des catégories ou des informations supplémentaires.

## Caractéristiques Clés

- **Variantes Multiples**: Styles _solid_, _outline_, et _ghost_ pour différents niveaux d'emphase.
- **Couleurs Sémantiques**: Options de couleur pour représenter le succès, l'avertissement, le danger, etc.
- **Tailles Flexibles**: Plusieurs tailles pour s'adapter à divers contextes d'interface.
- **Contenu Personnalisable**: Utilisez la prop \`label\` pour du texte simple ou le slot par défaut pour du contenu riche (icônes, etc.).
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: 'text',
			description:
				'Text content for the badge. Use for simple string labels. Omit to use children slot for custom content.'
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral'],
			description:
				'Semantic color tone: "primary" (accent) for brand/main actions, "secondary" for less prominent info, "success" for positive states, "warning" for caution, "danger" for errors/critical, "neutral" for general labels. Default is "primary".'
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost'],
			description:
				'Visual style: "solid" for filled backgrounds (high emphasis), "outline" for bordered badges (medium emphasis), "ghost" for text-only (low emphasis). Default is "solid".'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'base', 'lg'],
			description:
				'Size variant: "sm" (text-xs, compact padding) for inline use, "base" (text-xs, standard padding) for general use, "lg" (text-sm, larger padding) for prominent displays. Default is "base".'
		},
		rounded: {
			control: 'boolean',
			description:
				'Shape style: true for fully rounded pill shape, false for subtle rounded corners. Default is true.'
		},
		children: {
			description:
				'Svelte snippet for custom badge content. Use when you need more than simple text (e.g., icons, counts, complex layouts).'
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'New',
		tone: 'primary',
		variant: 'solid',
		size: 'base',
		children: null
	}
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		tone: 'secondary'
	}
};

export const Success: Story = {
	args: {
		...Primary.args,
		label: 'Available',
		tone: 'success'
	}
};

export const Warning: Story = {
	args: {
		...Primary.args,
		label: 'Limited',
		tone: 'warning'
	}
};

export const Danger: Story = {
	args: {
		...Primary.args,
		label: 'Sold Out',
		tone: 'danger'
	}
};

export const Neutral: Story = {
	args: {
		...Primary.args,
		label: 'Edition',
		tone: 'neutral',
		size: 'sm'
	}
};

export const Outline: Story = {
	args: {
		...Primary.args,
		variant: 'outline'
	}
};

export const Ghost: Story = {
	args: {
		...Primary.args,
		variant: 'ghost'
	}
};
