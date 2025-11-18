import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorIndicator from '@/lib/components/atoms/ColorIndicator.svelte';

const meta = {
	title: 'Atoms/ColorIndicator',
	component: ColorIndicator,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# ColorIndicator Component

Apple-style color indicator for displaying product color options with optional dual-tone gradients.

## Features

- **Apple Color Palette**: 10+ built-in Apple colors (blue, purple, pink, orange, yellow, green, silver, space-black, sky-blue, starlight, midnight)
- **Dual-Tone Gradient**: Optional gradient effect for visual richness
- **Three Sizes**: Small, medium, and large indicators
- **Accessible**: Proper ARIA labels and semantic markup
- **Customizable**: Support for custom CSS classes

## Use Cases

- Mac color picker
- iPhone/iPad color selector
- Product variant indicators
- Design system color reference
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'select',
			options: [
				'blue',
				'purple',
				'pink',
				'orange',
				'yellow',
				'green',
				'silver',
				'space-black',
				'sky-blue',
				'starlight',
				'midnight'
			],
			description: 'Apple color name from the palette'
		},
		type: {
			control: 'select',
			options: ['solid', 'dual-tone'],
			description: 'Color type: "solid" for flat color, "dual-tone" for gradient effect'
		},
		size: {
			control: 'select',
			options: ['sm', 'md', 'lg'],
			description: 'Indicator size: "sm" (16px), "md" (24px), "lg" (32px)'
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes'
		},
		ariaLabel: {
			control: 'text',
			description: 'ARIA label for accessibility'
		}
	}
} satisfies Meta<typeof ColorIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {
	args: {
		color: 'blue',
		type: 'solid',
		size: 'md',
		ariaLabel: 'Bleu'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const BlueDualTone: Story = {
	args: {
		color: 'blue',
		type: 'dual-tone',
		size: 'md',
		ariaLabel: 'Bleu dégradé'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const Silver: Story = {
	args: {
		color: 'silver',
		type: 'solid',
		size: 'md',
		ariaLabel: 'Argent'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const SpaceBlack: Story = {
	args: {
		color: 'space-black',
		type: 'solid',
		size: 'md',
		ariaLabel: 'Noir sidéral'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const Small: Story = {
	args: {
		color: 'purple',
		type: 'solid',
		size: 'sm',
		ariaLabel: 'Petit violet'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const Large: Story = {
	args: {
		color: 'purple',
		type: 'dual-tone',
		size: 'lg',
		ariaLabel: 'Grand violet dégradé'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const Starlight: Story = {
	args: {
		color: 'starlight',
		type: 'solid',
		size: 'md',
		ariaLabel: 'Clair étoilé'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};

export const Midnight: Story = {
	args: {
		color: 'midnight',
		type: 'solid',
		size: 'md',
		ariaLabel: 'Minuit'
	},
	render: ({ color, type, size, ariaLabel, class: className }) => ({
		Component: ColorIndicator,
		props: { color, type, size, ariaLabel, class: className }
	})
};
