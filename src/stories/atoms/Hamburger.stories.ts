import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hamburger from '@/lib/components/atoms/Hamburger.svelte';

const meta = {
	title: 'Atoms/Hamburger',
	component: Hamburger,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Bouton Hamburger

Un bouton de menu hamburger animé et accessible, conçu pour la navigation mobile avec des transitions SVG fluides.

## Caractéristiques Clés

- **Animations Fluides**: Transitions SVG pour des changements d'état élégants.
- **Variantes Multiples**: Quatre styles visuels distincts (défaut, croix, flèche, plus).
- **Entièrement Accessible**: Labels ARIA, navigation au clavier et gestion du focus.
- **Personnalisable**: Contrôlez la taille, la couleur, l'épaisseur du trait et la durée de l'animation.
- **État Liable**: Liaison bidirectionnelle avec \`bind:open\` pour une gestion facile de l'état.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description:
				'Controls the open/closed state of the hamburger. Use `bind:open` for two-way binding. When true, animates to the variant\'s "open" state.'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description:
				'Icon size: sm (40px), md (60px), lg (80px). Choose based on navigation bar height. Default is "md".'
		},
		variant: {
			control: { type: 'select' },
			options: ['default', 'cross', 'arrow', 'plus'],
			description:
				'Visual animation style: "default" for standard hamburger-to-X, "cross" for simple X-pattern, "arrow" for directional indicators, "plus" for add/close pattern. Default is "default".'
		},
		color: {
			control: { type: 'select' },
			options: ['currentColor', 'inherit', 'primary', 'white', 'black', 'gray-600'],
			description:
				'Icon color. Use "currentColor" to inherit text color, "white" for dark backgrounds, "primary" for brand color. Default is "currentColor".'
		},
		strokeWidth: {
			control: { type: 'number', min: 1, max: 10 },
			description:
				'SVG stroke thickness (1-10). Thicker strokes (6-8) appear more bold, thinner (2-4) more delicate. Default is 5.'
		},
		duration: {
			control: { type: 'number', min: 100, max: 1000, step: 100 },
			description:
				'Animation duration in milliseconds. Match this with your menu transition. Fast (200-300ms) feels snappy, slow (600-800ms) feels smooth. Default is 400ms.'
		},
		disabled: {
			control: 'boolean',
			description:
				'Disables the button and prevents interaction. Visual opacity reduced to 50%. Use when menu should be temporarily unavailable.'
		},
		ariaLabel: {
			control: 'text',
			description:
				'Accessible label for screen readers. Be descriptive: "Toggle main navigation" or "Open mobile menu". Required for accessibility. Default is "Toggle menu".'
		},
		class: {
			control: 'text',
			description:
				'Additional CSS classes for custom styling, backgrounds, or positioning. Commonly used for adding padding or background colors.'
		},
		onToggle: {
			description:
				'Callback function invoked when button is clicked, receiving the new open state. Use for triggering menu animations or analytics.'
		}
	}
} satisfies Meta<typeof Hamburger>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
	args: {
		open: false,
		size: 'md',
		variant: 'default',
		color: 'currentColor',
		strokeWidth: 5,
		duration: 400,
		disabled: false,
		ariaLabel: 'Toggle menu'
	}
};

export const Opened: Story = {
	args: {
		...Default.args,
		open: true
	}
};

// Size Variants
export const SmallSize: Story = {
	args: {
		...Default.args,
		size: 'sm'
	}
};

export const MediumSize: Story = {
	args: {
		...Default.args,
		size: 'md'
	}
};

export const LargeSize: Story = {
	args: {
		...Default.args,
		size: 'lg'
	}
};

// Visual Variants
export const DefaultVariant: Story = {
	args: {
		...Default.args,
		variant: 'default'
	}
};

export const CrossVariant: Story = {
	args: {
		...Default.args,
		variant: 'cross'
	}
};

export const ArrowVariant: Story = {
	args: {
		...Default.args,
		variant: 'arrow'
	}
};

export const PlusVariant: Story = {
	args: {
		...Default.args,
		variant: 'plus'
	}
};

// Color Variants
export const ColorPrimary: Story = {
	args: {
		...Default.args,
		color: 'primary'
	}
};

export const ColorBlack: Story = {
	args: {
		...Default.args,
		color: 'black'
	}
};

export const ColorWhite: Story = {
	args: {
		...Default.args,
		color: 'white',
		class: 'bg-gray-900 p-4'
	}
};

export const ColorGray: Story = {
	args: {
		...Default.args,
		color: 'gray-600'
	}
};

// State Variants
export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true
	}
};

export const DisabledOpened: Story = {
	args: {
		...Default.args,
		open: true,
		disabled: true
	}
};

// Customization Examples
export const ThickStroke: Story = {
	args: {
		...Default.args,
		strokeWidth: 8
	}
};

export const ThinStroke: Story = {
	args: {
		...Default.args,
		strokeWidth: 2
	}
};

export const FastAnimation: Story = {
	args: {
		...Default.args,
		duration: 200
	}
};

export const SlowAnimation: Story = {
	args: {
		...Default.args,
		duration: 800
	}
};

// Combined Variations
export const SmallCross: Story = {
	args: {
		...Default.args,
		size: 'sm',
		variant: 'cross',
		color: 'primary'
	}
};

export const LargeArrowDark: Story = {
	args: {
		...Default.args,
		size: 'lg',
		variant: 'arrow',
		color: 'black',
		strokeWidth: 6
	}
};

export const MediumPlusLight: Story = {
	args: {
		...Default.args,
		size: 'md',
		variant: 'plus',
		color: 'gray-600',
		duration: 300
	}
};

// With Custom Labels
export const CustomLabel: Story = {
	args: {
		...Default.args,
		ariaLabel: 'Open main navigation menu'
	}
};

export const CustomLabelFr: Story = {
	args: {
		...Default.args,
		ariaLabel: 'Ouvrir le menu principal'
	}
};

// With Callbacks
export const WithCallbacks: Story = {
	args: {
		...Default.args,
		onToggle: (open: boolean) => console.log('Menu toggled:', open)
	}
};

// Real-world Usage Examples
export const DarkNavbar: Story = {
	args: {
		...Default.args,
		size: 'md',
		color: 'white',
		variant: 'default',
		class: 'bg-gradient-to-r from-slate-900 to-slate-800 p-6 rounded-lg'
	}
};

export const ModernDesign: Story = {
	args: {
		...Default.args,
		size: 'lg',
		variant: 'cross',
		color: 'primary',
		strokeWidth: 4,
		duration: 350,
		class: 'bg-white p-4 rounded-full shadow-lg'
	}
};

export const MinimalDesign: Story = {
	args: {
		...Default.args,
		size: 'sm',
		variant: 'default',
		color: 'gray-600',
		strokeWidth: 3,
		duration: 250
	}
};

export const AccessibleMenu: Story = {
	args: {
		...Default.args,
		size: 'md',
		variant: 'default',
		color: 'primary',
		ariaLabel: 'Toggle primary navigation',
		duration: 400
	}
};
