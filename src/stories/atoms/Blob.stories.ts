import type { Meta, StoryObj } from '@storybook/sveltekit';
import Blob from '@/lib/components/atoms/Blob.svelte';

const meta = {
	title: 'Atoms/Blob',
	component: Blob,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Blob Component

An animated, blurred background element that creates organic and fluid visual effects perfect for modern interfaces.

## Features

- **Organic Animation**: Smooth, continuous blob animation for natural movement
- **Blur Effect**: CSS blur filter for soft, ambient visuals
- **Blend Mode**: Uses \`mix-blend-multiply\` for interesting color interactions
- **Customizable Colors**: Accepts any valid CSS color (hex, rgb, rgba, color names)
- **Animation Control**: Adjustable delay and duration for choreography
- **Background Element**: Ideal for decorative effects behind content

## Best Practices

- Use semi-transparent or muted colors for best results
- Combine multiple blobs with different delays for rich effects
- Place behind other content with absolute/relative positioning
- Consider performance with multiple blobs

## Use Cases

- Hero section backgrounds
- Gradient decorative effects
- Landing page visuals
- Feature section animations
- Ambient visual elements
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		color: {
			control: 'color',
			description:
				'Blob color (any valid CSS color). Consider semi-transparent colors (rgba) for better blending with content beneath.'
		},
		delay: {
			control: { type: 'number', min: 0, max: 5, step: 0.5 },
			description: 'Animation delay in seconds. Useful for choreographing multiple blobs.'
		},
		duration: {
			control: { type: 'number', min: 1, max: 10, step: 0.5 },
			description: 'Animation duration in seconds. Longer durations = slower movement.'
		}
	}
} satisfies Meta<typeof Blob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Purple: Story = {
	args: {
		color: '#6c00e2',
		delay: 0,
		duration: 4
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};

export const Orange: Story = {
	args: {
		color: '#ff9800',
		delay: 0,
		duration: 4
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};

export const Blue: Story = {
	args: {
		color: '#2196F3',
		delay: 0,
		duration: 4
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};

export const Pink: Story = {
	args: {
		color: '#E91E63',
		delay: 0,
		duration: 4
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};

export const SemiTransparent: Story = {
	args: {
		color: 'rgba(108, 0, 226, 0.6)',
		delay: 0,
		duration: 4
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};

export const SlowAnimation: Story = {
	args: {
		color: '#6c00e2',
		delay: 0,
		duration: 8
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};

export const DelayedAnimation: Story = {
	args: {
		color: '#ff9800',
		delay: 2,
		duration: 4
	},
	render: ({ color, delay, duration }: any) => ({
		Component: Blob,
		props: { color, delay, duration }
	})
};
