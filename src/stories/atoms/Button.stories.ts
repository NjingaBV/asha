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
- **Quatre Tons**: Variantes \`primary\` (bleu), \`secondary\` (blanc), \`dark\` (noir) et \`neutral\` (gris).
- **Dimensionnement Flexible**: Tailles petite, moyenne et grande pour différents contextes.
- **Option Pleine Largeur**: Peut s'étendre pour remplir la largeur de son conteneur.
- **État de Chargement**: Affiche un spinner SVG pendant les opérations asynchrones.

## Props

- \`children\`: Snippet de contenu (texte ou HTML) à afficher dans le bouton
- \`tone\`: Style visuel - 'primary' (bleu), 'secondary' (blanc), 'dark' (noir), 'neutral' (gris)
- \`size\`: Dimensions - 'sm' (petit), 'md' (moyen), 'lg' (grand)
- \`href\`: URL optionnelle pour rendre un \`<a>\` au lieu de \`<button>\`
- \`disabled\`: Désactiver l'interaction et réduire l'opacité
- \`fullWidth\`: Remplir la largeur du conteneur parent
- \`loading\`: Afficher l'état de chargement avec spinner
- \`type\`: Type de bouton - 'button', 'submit' ou 'reset' (défaut: 'button')
- \`ariaLabel\`: Label ARIA pour l'accessibilité
- \`onClick\`: Gestionnaire d'événement click
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'dark', 'neutral'],
			description:
				'Visual style: "primary" (blue background, high emphasis), "secondary" (white background with border, medium emphasis), "dark" (black background, bold statement), "neutral" (gray background, low emphasis). Default is "primary".'
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
				'Disables interaction and reduces opacity to 50%. For links with href, prevents rendering as link.'
		},
		fullWidth: {
			control: 'boolean',
			description:
				'Makes button expand to full width of its container. Useful for mobile layouts or form actions.'
		},
		loading: {
			control: 'boolean',
			description:
				'Shows a loading spinner inside the button and disables interaction. Useful for async actions.'
		},
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset'],
			description:
				'Button type (only for <button> elements). Default is "button". Use "submit" for form submission.'
		},
		ariaLabel: {
			control: 'text',
			description:
				'Aria label for accessibility. Use when button content is an icon or needs additional context.'
		}
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		tone: 'primary',
		size: 'md'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Acheter'
		}
	})
};

export const Secondary: Story = {
	args: {
		tone: 'secondary',
		size: 'md'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'En savoir plus'
		}
	})
};

export const Dark: Story = {
	args: {
		tone: 'dark',
		size: 'md'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Explorer'
		}
	})
};

export const Neutral: Story = {
	args: {
		tone: 'neutral',
		size: 'md'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Annuler'
		}
	})
};

export const Small: Story = {
	args: {
		tone: 'primary',
		size: 'sm'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Petit'
		}
	})
};

export const Large: Story = {
	args: {
		tone: 'primary',
		size: 'lg'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Grand Bouton'
		}
	})
};

export const FullWidth: Story = {
	args: {
		tone: 'primary',
		size: 'md',
		fullWidth: true
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Pleine Largeur'
		}
	})
};

export const Disabled: Story = {
	args: {
		tone: 'primary',
		size: 'md',
		disabled: true
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Désactivé'
		}
	})
};

export const Loading: Story = {
	args: {
		tone: 'primary',
		size: 'md',
		loading: true
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'En cours...'
		}
	})
};

export const LinkButton: Story = {
	args: {
		tone: 'secondary',
		size: 'md',
		href: '/about'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Lien Navigation'
		}
	})
};

export const SubmitButton: Story = {
	args: {
		tone: 'primary',
		size: 'md',
		type: 'submit'
	},
	render: ({ tone, size, disabled, fullWidth, loading, type, ariaLabel, href }: any) => ({
		Component: Button,
		props: {
			tone,
			size,
			disabled,
			fullWidth,
			loading,
			type,
			ariaLabel,
			href,
			children: () => 'Soumettre Formulaire'
		}
	})
};
