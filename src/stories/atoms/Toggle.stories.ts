import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Toggle from '$lib/components/atoms/Toggle.svelte';

const meta = {
	title: 'Atoms/Toggle',
	component: Toggle,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Toggle

A toggle switch component for binary on/off states.
Accessible alternative to checkboxes when changes take effect immediately.

## Features

- **Three Sizes**: sm, md, lg
- **Label Support**: Optional label with positioning (left/right)
- **Accessible**: ARIA switch role and keyboard support (Space/Enter)
- **Fluid Animation**: Smooth transitions for knob movement and color changes
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		checked: {
			control: 'boolean',
			description: 'Checked state (bindable)',
			table: { defaultValue: { summary: 'false' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Toggle size',
			table: { defaultValue: { summary: 'md' } }
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
			table: { defaultValue: { summary: 'false' } }
		},
		label: {
			control: 'text',
			description: 'Label text'
		},
		labelPosition: {
			control: { type: 'radio' },
			options: ['left', 'right'],
			description: 'Position of the label',
			table: { defaultValue: { summary: 'right' } }
		},
		name: {
			control: 'text',
			description: 'Input name attribute'
		}
	}
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories
// ============================================

export const Default: Story = {
	args: {
		label: 'Toggle',
		checked: false
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test initial state
		expect(toggle).toBeInTheDocument();
		expect(toggle).toHaveAttribute('role', 'switch');
		expect(toggle).toHaveAttribute('aria-checked', 'false');
		expect(toggle).toHaveAttribute('aria-label', 'Toggle');

		// Test toggle on
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'true');

		// Test toggle off
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'false');
	}
};

export const Checked: Story = {
	args: {
		label: 'Active Toggle',
		checked: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test initial "on" state
		expect(toggle).toHaveAttribute('aria-checked', 'true');
		expect(toggle).toHaveAttribute('aria-label', 'Active Toggle');

		// Test toggle to off
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'false');

		// Test toggle back to on
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'true');
	}
};

export const WithoutLabel: Story = {
	args: {
		checked: false,
		'aria-label': 'Silent toggle'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test switch role and aria-label
		expect(toggle).toHaveAttribute('role', 'switch');
		expect(toggle).toHaveAttribute('aria-label', 'Silent toggle');
		expect(toggle).toHaveAttribute('aria-checked', 'false');

		// Test functionality
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'true');
	}
};

// ============================================
// Size Stories
// ============================================

export const Small: Story = {
	args: {
		size: 'sm',
		label: 'Small',
		checked: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test size attribute
		expect(toggle).toHaveAttribute('data-size', 'sm');
		expect(toggle).toHaveAttribute('aria-checked', 'true');

		// Test toggle interaction
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'false');
	}
};

export const Medium: Story = {
	args: {
		size: 'md',
		label: 'Medium',
		checked: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test size attribute
		expect(toggle).toHaveAttribute('data-size', 'md');
		expect(toggle).toHaveAttribute('aria-checked', 'true');

		// Test keyboard activation with Space
		toggle.focus();
		await userEvent.keyboard(' ');
		expect(toggle).toHaveAttribute('aria-checked', 'false');
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		label: 'Large',
		checked: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test size attribute
		expect(toggle).toHaveAttribute('data-size', 'lg');
		expect(toggle).toHaveAttribute('aria-checked', 'true');

		// Test keyboard activation with Enter
		toggle.focus();
		await userEvent.keyboard('{Enter}');
		expect(toggle).toHaveAttribute('aria-checked', 'false');
	}
};

// ============================================
// State Stories
// ============================================

export const Disabled: Story = {
	args: {
		label: 'Disabled Off',
		disabled: true,
		checked: false
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test disabled attribute
		expect(toggle).toBeDisabled();
		expect(toggle).toHaveAttribute('aria-checked', 'false');

		// Test that click doesn't toggle disabled state
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'false');

		// Test that keyboard doesn't toggle disabled state
		toggle.focus();
		await userEvent.keyboard(' ');
		expect(toggle).toHaveAttribute('aria-checked', 'false');
	}
};

export const DisabledChecked: Story = {
	args: {
		label: 'Disabled On',
		disabled: true,
		checked: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');

		// Test disabled state when checked
		expect(toggle).toBeDisabled();
		expect(toggle).toHaveAttribute('aria-checked', 'true');

		// Test that click doesn't change state
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'true');

		// Test that keyboard doesn't change state
		toggle.focus();
		await userEvent.keyboard(' ');
		expect(toggle).toHaveAttribute('aria-checked', 'true');
	}
};

// ============================================
// Layout Stories
// ============================================

export const LabelLeft: Story = {
	args: {
		label: 'Label on left',
		labelPosition: 'left',
		checked: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('switch');
		const label = canvas.getByText('Label on left');

		// Test label exists with correct text
		expect(label).toBeInTheDocument();
		expect(label).toHaveAttribute('for');

		// Test toggle initial state
		expect(toggle).toHaveAttribute('aria-checked', 'true');
		expect(toggle).toHaveAttribute('aria-label', 'Label on left');

		// Test toggle interaction
		await userEvent.click(label);
		expect(toggle).toHaveAttribute('aria-checked', 'false');

		// Test clicking toggle again
		await userEvent.click(toggle);
		expect(toggle).toHaveAttribute('aria-checked', 'true');
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Toggles** for settings that take effect immediately (e.g., "Dark Mode", "Airplane Mode").
 * - Use for binary choices where the action is clearly "On" or "Off".
 *
 * ## Do's
 * - Use short, descriptive labels (e.g., "Wi-Fi" instead of "Turn on Wi-Fi").
 * - Provide immediate visual feedback.
 * - Stick to standard positioning (toggle usually on the right of the label in list views).
 *
 * ## Don'ts
 * - Don't use Toggles for forms that require a "Submit" button (use Checkboxes instead).
 * - Avoid ambiguous labels where "On" might mean "Off" (e.g., "Disable notifications" [On/Off]).
 * - Don't use Toggles for multiple selection lists.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Toggle,
		props: {
			label: 'See Guidelines in Docs',
			checked: true,
			size: 'md'
		}
	})
};
