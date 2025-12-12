import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Spacer from '$lib/components/atoms/Spacer.svelte';

const meta = {
	title: 'Atoms/Spacer',
	component: Spacer,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Spacer

A flexible spacing component for creating consistent gaps between elements.
Can be fixed size or flexible to fill available space.

## Features

- **Preset Sizes**: xs, sm, md, lg, xl, 2xl for consistent spacing
- **Custom Size**: Specify custom CSS values for exact spacing
- **Flexible**: Use flex prop to fill available space
- **Direction**: Support horizontal, vertical, or both axes
- **Accessible**: Hidden from screen readers (decorative)
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'select' },
			options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'custom'],
			description: 'Preset size',
			table: { defaultValue: { summary: 'md' } }
		},
		customSize: {
			control: 'text',
			description: 'Custom size when size="custom" (e.g., "2rem", "40px")'
		},
		axis: {
			control: { type: 'select' },
			options: ['horizontal', 'vertical', 'both'],
			description: 'Spacing direction',
			table: { defaultValue: { summary: 'vertical' } }
		},
		flex: {
			control: 'boolean',
			description: 'Flexible spacer (fills available space)',
			table: { defaultValue: { summary: 'false' } }
		},
		class: {
			control: 'text',
			description: 'Additional CSS classes'
		}
	}
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	}
};

export const ExtraSmall: Story = {
	args: {
		size: 'xs',
		axis: 'vertical'
	}
};

export const Small: Story = {
	args: {
		size: 'sm',
		axis: 'vertical'
	}
};

export const Medium: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		axis: 'vertical'
	}
};

export const ExtraLarge: Story = {
	args: {
		size: 'xl',
		axis: 'vertical'
	}
};

export const DoubleExtraLarge: Story = {
	args: {
		size: '2xl',
		axis: 'vertical'
	}
};

export const Vertical: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	}
};

export const Horizontal: Story = {
	args: {
		size: 'md',
		axis: 'horizontal'
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: { style: 'display: flex; align-items: center; gap: 1rem;' }
		})
	]
};

export const Both: Story = {
	args: {
		size: 'md',
		axis: 'both'
	}
};

export const Custom: Story = {
	args: {
		size: 'custom',
		customSize: '2rem',
		axis: 'vertical'
	}
};

export const Flexible: Story = {
	args: {
		flex: true
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: { style: 'display: flex; height: 200px; gap: 1rem;' }
		})
	]
};

export const FlexibleHorizontal: Story = {
	args: {
		flex: true,
		axis: 'horizontal'
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: { style: 'display: flex; width: 100%; gap: 1rem;' }
		})
	]
};

// ============================================
// Play Tests - Spacing Values
// ============================================

export const TestSpacerRendering: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-size="md"]') || canvasElement.firstChild;
		expect(spacer).toBeInTheDocument();
		expect(spacer).toHaveAttribute('aria-hidden', 'true');
	}
};

export const TestSmallSpacing: Story = {
	args: {
		size: 'sm',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-size="sm"]');
		expect(spacer).toBeInTheDocument();
		expect(spacer).toHaveClass('h-2');
	}
};

export const TestMediumSpacing: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-size="md"]');
		expect(spacer).toBeInTheDocument();
		expect(spacer).toHaveClass('h-4');
	}
};

export const TestLargeSpacing: Story = {
	args: {
		size: 'lg',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-size="lg"]');
		expect(spacer).toBeInTheDocument();
		expect(spacer).toHaveClass('h-8');
	}
};

export const TestVerticalAxis: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-axis="vertical"]');
		expect(spacer).toBeInTheDocument();
	}
};

export const TestHorizontalAxis: Story = {
	args: {
		size: 'md',
		axis: 'horizontal'
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: { style: 'display: flex; align-items: center;' }
		})
	],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-axis="horizontal"]');
		expect(spacer).toBeInTheDocument();
	}
};

export const TestBothAxes: Story = {
	args: {
		size: 'md',
		axis: 'both'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-axis="both"]');
		expect(spacer).toBeInTheDocument();
	}
};

export const TestFlexibleSpacer: Story = {
	args: {
		flex: true
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: { style: 'display: flex; height: 100px;' }
		})
	],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[class*="flex-1"]');
		expect(spacer).toBeInTheDocument();
		expect(spacer).toHaveClass('flex-1');
	}
};

export const TestCustomSize: Story = {
	args: {
		size: 'custom',
		customSize: '3rem',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.querySelector('[data-size="custom"]');
		expect(spacer).toBeInTheDocument();
	}
};

export const TestAccessibleHidden: Story = {
	args: {
		size: 'md',
		axis: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const spacer = canvasElement.firstChild;
		expect(spacer).toHaveAttribute('aria-hidden', 'true');
	}
};
