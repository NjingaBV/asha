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

A selectable color indicator button for displaying and selecting colors.

## Features

- **CSS Color Support**: Accepts any CSS color value (hex, rgb, color names)
- **Selection State**: Visual feedback for selected color with border and scale animation
- **Customizable Size**: Configurable diameter in pixels
- **Accessible**: ARIA attributes, keyboard focus support, and screen reader text
- **Responsive**: Smooth transitions for all interactions

## Use Cases

- Product color picker
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
			control: 'color',
			description: 'CSS color value (hex code, rgb, or color name)'
		},
		selected: {
			control: 'boolean',
			description: 'Whether the color dot is selected (shows border and scale animation)'
		},
		size: {
			control: { type: 'number', min: 12, max: 48, step: 2 },
			description: 'Diameter of the color dot in pixels'
		}
	}
} satisfies Meta<typeof ColorDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 20
	},
	render: ({ color, selected, size, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, class: className }
	})
};

export const Selected: Story = {
	args: {
		color: '#0a84ff',
		selected: true,
		size: 20
	},
	render: ({ color, selected, size, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, class: className }
	})
};

export const Small: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 12
	},
	render: ({ color, selected, size, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, class: className }
	})
};

export const Large: Story = {
	args: {
		color: '#0a84ff',
		selected: false,
		size: 36
	},
	render: ({ color, selected, size, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, class: className }
	})
};

export const Red: Story = {
	args: {
		color: '#ff3b30',
		selected: false,
		size: 20
	},
	render: ({ color, selected, size, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, class: className }
	})
};

export const Green: Story = {
	args: {
		color: '#34c759',
		selected: false,
		size: 20
	},
	render: ({ color, selected, size, class: className }: any) => ({
		Component: ColorDot,
		props: { color, selected, size, class: className }
	})
};
