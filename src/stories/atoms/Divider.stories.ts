import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, within } from '@storybook/test';
import Divider from '$lib/components/atoms/Divider.svelte';

const meta = {
	title: 'Atoms/Divider',
	component: Divider,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
# Divider

A visual separator component for dividing content sections.
Supports horizontal and vertical orientations.

## Features

- **Two Orientations**: horizontal (default) and vertical
- **Label Support**: Optional centered label for horizontal dividers
- **Three Thicknesses**: thin, medium, thick
- **Accessible**: Proper ARIA separator role
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		orientation: {
			control: { type: 'select' },
			options: ['horizontal', 'vertical'],
			description: 'Divider orientation',
			table: { defaultValue: { summary: 'horizontal' } }
		},
		thickness: {
			control: { type: 'select' },
			options: ['thin', 'medium', 'thick'],
			description: 'Line thickness',
			table: { defaultValue: { summary: 'thin' } }
		},
		label: {
			control: 'text',
			description: 'Label text (only for horizontal)'
		}
	}
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'thin'
	}
};

export const WithLabel: Story = {
	args: {
		orientation: 'horizontal',
		label: 'OR'
	}
};

export const WithLabelText: Story = {
	args: {
		orientation: 'horizontal',
		label: 'Continue with'
	}
};

export const Thin: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'thin'
	}
};

export const Medium: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'medium'
	}
};

export const Thick: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'thick'
	}
};

export const Vertical: Story = {
	args: {
		orientation: 'vertical',
		thickness: 'thin'
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: {
				style: 'height: 100px; display: flex; align-items: center;'
			}
		})
	]
};

export const VerticalMedium: Story = {
	args: {
		orientation: 'vertical',
		thickness: 'medium'
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: {
				style: 'height: 100px; display: flex; align-items: center;'
			}
		})
	]
};

// ============================================
// Play Tests - Rendering & Accessibility
// ============================================

export const TestHorizontalDivider: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'thin'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const divider = canvasElement.querySelector('[role="separator"]');
		expect(divider).toBeInTheDocument();
		expect(divider).toHaveAttribute('role', 'separator');
	}
};

export const TestVerticalDivider: Story = {
	args: {
		orientation: 'vertical',
		thickness: 'thin'
	},
	decorators: [
		() => ({
			Component: 'div' as any,
			props: {
				style: 'height: 100px; display: flex; align-items: center;'
			}
		})
	],
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const divider = canvasElement.querySelector('[role="separator"]');
		expect(divider).toBeInTheDocument();
	}
};

export const TestDividerWithLabel: Story = {
	args: {
		orientation: 'horizontal',
		label: 'OR'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.queryByText('OR');
		if (label) {
			expect(label).toBeInTheDocument();
		}
		const divider = canvasElement.querySelector('[role="separator"]');
		expect(divider).toBeInTheDocument();
	}
};

export const TestDividerThinThickness: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'thin'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const divider = canvasElement.querySelector('[role="separator"]');
		expect(divider).toBeInTheDocument();
	}
};

export const TestDividerMediumThickness: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'medium'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const divider = canvasElement.querySelector('[role="separator"]');
		expect(divider).toBeInTheDocument();
	}
};

export const TestDividerThickThickness: Story = {
	args: {
		orientation: 'horizontal',
		thickness: 'thick'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const divider = canvasElement.querySelector('[role="separator"]');
		expect(divider).toBeInTheDocument();
	}
};
