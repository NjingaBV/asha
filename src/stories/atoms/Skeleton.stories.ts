import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Skeleton from '$lib/components/atoms/Skeleton.svelte';

const meta = {
	title: 'Atoms/Skeleton',
	component: Skeleton,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Skeleton

A loading placeholder component that mimics content layout.
Use during loading states to reduce perceived loading time and prevent layout shift.

## Features

- **Three Variants**: rectangle (default), circle (for avatars), text (for paragraph text)
- **Customizable Size**: Width, height, or size prop for circle variant
- **Multiple Lines**: Text variant supports multiple lines
- **Border Radius**: Control corner rounding
- **Animation**: Pulsing animation (disabled with motion-reduce)
- **Accessibility**: Proper ARIA labels and semantic structure
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['rectangle', 'circle', 'text'],
			description: 'Shape variant',
			table: { defaultValue: { summary: 'rectangle' } }
		},
		width: {
			control: 'text',
			description: 'Width (CSS value, e.g., "200px", "100%")'
		},
		height: {
			control: 'text',
			description: 'Height (CSS value, e.g., "20px", "100%")'
		},
		size: {
			control: 'text',
			description: 'Size for circle variant (e.g., "48px", "100px")'
		},
		rounded: {
			control: { type: 'select' },
			options: ['none', 'sm', 'md', 'lg', 'full'],
			description: 'Border radius',
			table: { defaultValue: { summary: 'md' } }
		},
		lines: {
			control: { type: 'number', min: 1, max: 5 },
			description: 'Number of text lines (text variant only)',
			table: { defaultValue: { summary: '1' } }
		},
		animate: {
			control: 'boolean',
			description: 'Animate with pulsing effect',
			table: { defaultValue: { summary: 'true' } }
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes'
		}
	}
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		rounded: 'md',
		animate: true
	}
};

export const Circle: Story = {
	args: {
		variant: 'circle',
		size: '64px',
		animate: true
	}
};

export const CircleSmall: Story = {
	args: {
		variant: 'circle',
		size: '48px',
		animate: true
	}
};

export const CircleLarge: Story = {
	args: {
		variant: 'circle',
		size: '128px',
		animate: true
	}
};

export const TextSingleLine: Story = {
	args: {
		variant: 'text',
		width: '100%',
		lines: 1,
		animate: true
	}
};

export const TextMultiLine: Story = {
	args: {
		variant: 'text',
		width: '100%',
		lines: 3,
		animate: true
	}
};

export const TextFiveLines: Story = {
	args: {
		variant: 'text',
		width: '100%',
		lines: 5,
		animate: true
	}
};

export const RectangleSmall: Story = {
	args: {
		variant: 'rectangle',
		width: '100px',
		height: '100px',
		rounded: 'md',
		animate: true
	}
};

export const RectangleLarge: Story = {
	args: {
		variant: 'rectangle',
		width: '100%',
		height: '300px',
		rounded: 'lg',
		animate: true
	}
};

export const RectangleNoRounding: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		rounded: 'none',
		animate: true
	}
};

export const RectangleFullRounding: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		rounded: 'full',
		animate: true
	}
};

export const NoAnimation: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		rounded: 'md',
		animate: false
	}
};

// ============================================
// Play Tests - Loading States
// ============================================

export const TestRectangleSkeleton: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		rounded: 'md',
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveAttribute('aria-label', 'Loading...');
	}
};

export const TestCircleSkeleton: Story = {
	args: {
		variant: 'circle',
		size: '64px',
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveClass('rounded-full');
	}
};

export const TestTextSkeleton: Story = {
	args: {
		variant: 'text',
		lines: 3,
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const container = canvasElement.querySelector('[role="status"]');
		expect(container).toBeInTheDocument();
	}
};

export const TestSkeletonAnimation: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveClass('animate-pulse');
	}
};

export const TestSkeletonNoAnimation: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		animate: false
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).not.toHaveClass('animate-pulse');
	}
};

export const TestSkeletonRounded: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		rounded: 'lg',
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveClass('rounded-lg');
	}
};

export const TestSkeletonAccessibility: Story = {
	args: {
		variant: 'rectangle',
		width: '300px',
		height: '150px',
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
		expect(skeleton).toHaveAttribute('role', 'status');
		const screenReaderText = canvasElement.querySelector('.sr-only');
		expect(screenReaderText).toBeInTheDocument();
	}
};

export const TestMultiLineText: Story = {
	args: {
		variant: 'text',
		lines: 3,
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeletons = canvasElement.querySelectorAll('[role="status"] > div');
		expect(skeletons.length).toBeGreaterThan(0);
	}
};

export const TestCircleSize: Story = {
	args: {
		variant: 'circle',
		size: '100px',
		animate: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const skeleton = canvasElement.querySelector('[role="status"]');
		expect(skeleton).toBeInTheDocument();
	}
};
