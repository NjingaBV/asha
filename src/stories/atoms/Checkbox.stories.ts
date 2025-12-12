import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Checkbox from '$lib/components/atoms/Checkbox.svelte';

const meta = {
	title: 'Atoms/Checkbox',
	component: Checkbox,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Checkbox

A checkbox input component for boolean selections.
Supports indeterminate state and custom styling.

## Features

- **Three Sizes**: sm, md, lg
- **Indeterminate State**: For partial selections
- **Labels & Descriptions**: Built-in support for labels and helper text
- **Validation**: Error state with message display
- **Accessible**: Full keyboard navigation and ARIA support
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
		indeterminate: {
			control: 'boolean',
			description: 'Indeterminate state',
			table: { defaultValue: { summary: 'false' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Checkbox size',
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
		description: {
			control: 'text',
			description: 'Description text'
		},
		error: {
			control: 'text',
			description: 'Error message'
		},
		required: {
			control: 'boolean',
			description: 'Required field',
			table: { defaultValue: { summary: 'false' } }
		}
	}
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Accept terms and conditions',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const label = canvas.getByText('Accept terms and conditions');

		// Test initial unchecked state
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute('aria-checked', 'false');

		// Test clicking checkbox to check
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test clicking checkbox to uncheck
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute('aria-checked', 'false');

		// Test clicking label to check
		await userEvent.click(label);
		expect(checkbox.checked).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test Space key to toggle
		checkbox.focus();
		await userEvent.keyboard('{Space}');
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute('aria-checked', 'false');

		// Test Space key again to check
		await userEvent.keyboard('{Space}');
		expect(checkbox.checked).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test accessible name
		expect(label).toBeInTheDocument();
		expect(checkbox).toHaveAccessibleName('Accept terms and conditions');
	}
};

export const Checked: Story = {
	args: {
		label: 'Checked checkbox',
		checked: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;

		// Test initial checked state
		expect(checkbox.checked).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test toggling from checked to unchecked
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute('aria-checked', 'false');

		// Test toggling back to checked
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test Space key to uncheck
		checkbox.focus();
		await userEvent.keyboard('{Space}');
		expect(checkbox.checked).toBe(false);
	}
};

export const Indeterminate: Story = {
	args: {
		label: 'Select all',
		indeterminate: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;

		// Test indeterminate state
		expect(checkbox.indeterminate).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'mixed');

		// Test clicking to transition from indeterminate to checked
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
		expect(checkbox.indeterminate).toBe(false);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test clicking to transition to unchecked
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
		expect(checkbox).toHaveAttribute('aria-checked', 'false');

		// Test Space key works from indeterminate
		checkbox.indeterminate = true;
		checkbox.checked = false;
		checkbox.focus();
		await userEvent.keyboard('{Space}');
		expect(checkbox.checked).toBe(true);
	}
};

export const WithDescription: Story = {
	args: {
		label: 'Newsletter',
		description: 'Receive weekly updates and promotions',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const description = canvas.getByText('Receive weekly updates and promotions');

		// Test description is rendered
		expect(description).toBeInTheDocument();

		// Test aria-describedby links to description
		const descriptionId = checkbox.getAttribute('aria-describedby');
		expect(descriptionId).toBeTruthy();
		expect(description.id).toBe(descriptionId);

		// Test checkbox functionality with description present
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);

		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
	}
};

export const WithError: Story = {
	args: {
		label: 'Accept terms',
		error: 'You must accept the terms to continue',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const errorMessage = canvas.getByText('You must accept the terms to continue');

		// Test error message is rendered
		expect(errorMessage).toBeInTheDocument();
		expect(errorMessage).toHaveAttribute('role', 'alert');

		// Test aria-invalid is set
		expect(checkbox).toHaveAttribute('aria-invalid', 'true');

		// Test aria-describedby links to error message
		const errorId = checkbox.getAttribute('aria-describedby');
		expect(errorId).toBeTruthy();
		expect(errorMessage.id).toBe(errorId);

		// Test checkbox can still be interacted with despite error
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
		expect(errorMessage).toBeInTheDocument();
	}
};

export const Required: Story = {
	args: {
		label: 'Required field',
		required: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const label = canvas.getByText(/Required field/);

		// Test required attribute is set
		expect(checkbox).toHaveAttribute('required');

		// Test visual indicator for required field (asterisk)
		const asterisk = label.querySelector('span.text-error');
		expect(asterisk).toBeInTheDocument();
		expect(asterisk).toHaveTextContent('*');

		// Test checkbox functionality
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled checkbox',
		disabled: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const label = canvas.getByText('Disabled checkbox');

		// Test disabled attribute is set
		expect(checkbox).toHaveAttribute('disabled');
		expect(checkbox).toBeDisabled();

		// Test clicking checkbox does not change state
		const initialState = checkbox.checked;
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(initialState);

		// Test clicking label does not change state
		await userEvent.click(label);
		expect(checkbox.checked).toBe(initialState);

		// Test keyboard input is ignored
		checkbox.focus();
		await userEvent.keyboard('{Space}');
		expect(checkbox.checked).toBe(initialState);

		// Test cursor-not-allowed class is applied
		expect(checkbox.parentElement).toHaveClass('cursor-not-allowed');
	}
};

export const DisabledChecked: Story = {
	args: {
		label: 'Disabled and checked',
		disabled: true,
		checked: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;

		// Test initial checked and disabled state
		expect(checkbox).toBeDisabled();
		expect(checkbox.checked).toBe(true);
		expect(checkbox).toHaveAttribute('aria-checked', 'true');

		// Test cannot uncheck
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);

		// Test keyboard input is ignored
		checkbox.focus();
		await userEvent.keyboard('{Space}');
		expect(checkbox.checked).toBe(true);
	}
};

export const Small: Story = {
	args: {
		label: 'Small checkbox',
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const checkboxContainer = checkbox.parentElement;

		// Test small size classes are applied
		expect(checkboxContainer).toHaveClass('w-4', 'h-4');

		// Test checkbox functionality
		expect(checkbox.checked).toBe(false);
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);

		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(false);
	}
};

export const Medium: Story = {
	args: {
		label: 'Medium checkbox',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const checkboxContainer = checkbox.parentElement;

		// Test medium size classes are applied
		expect(checkboxContainer).toHaveClass('w-5', 'h-5');

		// Test checkbox functionality
		expect(checkbox.checked).toBe(false);
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
	}
};

export const Large: Story = {
	args: {
		label: 'Large checkbox',
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox') as HTMLInputElement;
		const checkboxContainer = checkbox.parentElement;

		// Test large size classes are applied
		expect(checkboxContainer).toHaveClass('w-6', 'h-6');

		// Test checkbox functionality
		expect(checkbox.checked).toBe(false);
		await userEvent.click(checkbox);
		expect(checkbox.checked).toBe(true);
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Checkboxes** for selecting multiple options from a list.
 * - Use for standalone binary choices (e.g., "I agree to terms").
 * - Use the **Indeterminate** state for parent checkboxes when only some children are selected.
 *
 * ## Do's
 * - Stack checkboxes vertically for better readability.
 * - Use positive phrasing for labels (e.g., "Subscribe to newsletter" vs "Don't unsubscribe").
 * - Allow clicking the label to toggle the checkbox.
 *
 * ## Don'ts
 * - Don't use checkboxes for mutually exclusive options (use Radio buttons).
 * - Don't trigger immediate changes in system state (unless it's a settings toggle, where a Switch might be better).
 * - Avoid using double negatives in labels.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Checkbox,
		props: {
			label: 'See Guidelines in Docs',
			checked: true
		}
	})
};
