import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorDot from '@/lib/components/atoms/ColorDot.svelte';

const meta = {
	title: 'Atoms/ColorDot',
	component: ColorDot,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# ColorDot Component

A unified, selectable color indicator button for displaying and selecting colors. Supports both custom CSS colors and Apple's color palette with optional gradient effects.

## Features

- **Flexible Color Support**: CSS colors (hex, rgb, names) or Apple color names
- **Apple Color Palette**: 10+ built-in colors with optional dual-tone gradients
- **Selection State**: Visual feedback with border, ring, and scale animation
- **Multiple Size Options**: Pixel-based (any number) or named sizes (sm, md, lg)
- **Gradient Effects**: Optional dual-tone gradient for visual richness
- **Accessible**: Full ARIA support, keyboard navigation, and screen reader text
- **Responsive**: Smooth transitions for all interactions

## Use Cases

- Product color picker
- Mac variant selector
- Color palette selector
- Design system color reference
- Theme switcher
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'text',
			description:
				'Color value: CSS color (hex, rgb, names) or Apple color name (blue, purple, pink, orange, yellow, green, silver, space-black, sky-blue, starlight, midnight)'
		},
		selected: {
			control: 'boolean',
			description:
				'Whether the color dot is selected (shows border, ring, and scale animation)'
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Size: named sizes (sm=16px, md=24px, lg=32px) or custom pixel value'
		},
		type: {
			control: 'select',
			options: ['solid', 'dual-tone'],
			description: 'Color type: "solid" for flat color, "dual-tone" for gradient effect'
		},
		label: {
			control: 'text',
			description: 'Accessible label for the color (used as aria-label and title)'
		},
		ariaLabel: {
			control: 'text',
			description: 'ARIA label (alternative to label prop)'
		}
	}
} satisfies Meta<typeof ColorDot>;

export default meta;
type Story = StoryObj<typeof meta>;

// CSS Color Examples
export const Default: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 'md'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const Selected: Story = {
	args: {
		color: '#0a84ff',
		selected: true,
		size: 'md',
		label: 'Bleu'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const Small: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 'sm'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const Large: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 'lg'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const Red: Story = {
	args: {
		color: '#ff3b30',
		selected: false,
		size: 'md'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const Green: Story = {
	args: {
		color: '#34c759',
		selected: false,
		size: 'md'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

// Apple Color Palette Examples
export const AppleBlue: Story = {
	args: {
		color: 'blue',
		type: 'solid',
		size: 'md',
		label: 'Bleu'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const AppleBlueDualTone: Story = {
	args: {
		color: 'blue',
		type: 'dual-tone',
		size: 'md',
		label: 'Bleu dégradé'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const AppleSilver: Story = {
	args: {
		color: 'silver',
		type: 'solid',
		size: 'md',
		label: 'Argent'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const AppleSpaceBlack: Story = {
	args: {
		color: 'space-black',
		type: 'solid',
		size: 'md',
		label: 'Noir sidéral'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const ApplePurple: Story = {
	args: {
		color: 'purple',
		type: 'dual-tone',
		size: 'lg',
		label: 'Grand violet dégradé'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const AppleStarlight: Story = {
	args: {
		color: 'starlight',
		type: 'solid',
		size: 'md',
		label: 'Clair étoilé'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};

export const AppleMidnight: Story = {
	args: {
		color: 'midnight',
		type: 'solid',
		size: 'md',
		label: 'Minuit'
	},
	render: ({ color, selected, size, type, label, ariaLabel, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, type, label, ariaLabel, class: className }
	})
};
