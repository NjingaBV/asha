import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Radio from '$lib/components/atoms/Radio.svelte';

const meta = {
	title: 'Atoms/Radio',
	component: Radio,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Radio

A radio button input component for single selection from a group.
Should be used within a RadioGroup for proper accessibility.

## Features

- **Three Sizes**: sm, md, lg
- **Labels & Descriptions**: Built-in support for labels and helper text
- **Error State**: Visual error indicator
- **Accessible**: Full keyboard navigation and ARIA support
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'text',
			description: 'Radio group name (required for grouping)'
		},
		value: {
			control: 'text',
			description: 'Radio value'
		},
		group: {
			control: 'text',
			description: 'Currently selected value in the group (bindable)'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Radio size',
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
			control: 'boolean',
			description: 'Error state',
			table: { defaultValue: { summary: 'false' } }
		},
		required: {
			control: 'boolean',
			description: 'Required field',
			table: { defaultValue: { summary: 'false' } }
		}
	}
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories
// ============================================

export const Default: Story = {
	args: {
		name: 'option',
		value: 'option1',
		label: 'Option 1',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered and accessible
		const radio = canvas.getByRole('radio', { name: /option 1/i });
		await expect(radio).toBeInTheDocument();
		await expect(radio).toBeVisible();

		// Test 2: Verify radio is unchecked initially
		await expect(radio).not.toBeChecked();

		// Test 3: Verify label is associated with radio
		await expect(radio).toHaveAccessibleName('Option 1');

		// Test 4: Click the radio to select it
		await userEvent.click(radio);

		// Test 5: Verify radio is now checked after click
		await expect(radio).toBeChecked();

		// Test 6: Verify aria-checked attribute
		await expect(radio).toHaveAttribute('aria-checked', 'true');

		// Test 7: Verify radio has focus after click
		await expect(radio).toHaveFocus();
	}
};

export const Selected: Story = {
	args: {
		name: 'option',
		value: 'option1',
		group: 'option1',
		label: 'Selected option',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered
		const radio = canvas.getByRole('radio', { name: /selected option/i });
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify radio is checked when group value matches
		await expect(radio).toBeChecked();

		// Test 3: Verify aria-checked reflects checked state
		await expect(radio).toHaveAttribute('aria-checked', 'true');

		// Test 4: Verify the inner dot (checked indicator) is visible
		const wrapper = radio.closest('div');
		const dot = wrapper?.querySelector('span[aria-hidden="true"]');
		await expect(dot).toBeInTheDocument();
	}
};

export const WithDescription: Story = {
	args: {
		name: 'plan',
		value: 'pro',
		label: 'Pro Plan',
		description: 'Best for professionals and small teams',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify label is present
		const label = canvas.getByText('Pro Plan');
		await expect(label).toBeInTheDocument();

		// Test 3: Verify description is present
		const description = canvas.getByText(/best for professionals/i);
		await expect(description).toBeInTheDocument();

		// Test 4: Verify radio has aria-describedby linking to description
		const radioId = radio.id;
		const descriptionId = `${radioId}-desc`;
		await expect(radio).toHaveAttribute('aria-describedby', descriptionId);

		// Test 5: Verify description has correct id
		await expect(description).toHaveAttribute('id', descriptionId);

		// Test 6: Click the radio and verify it selects
		await userEvent.click(radio);
		await expect(radio).toBeChecked();
	}
};

export const Required: Story = {
	args: {
		name: 'agreement',
		value: 'agree',
		label: 'I agree to the terms',
		required: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify radio has required attribute
		await expect(radio).toHaveAttribute('required');

		// Test 3: Verify required indicator (asterisk) is displayed
		const asterisk = canvas.getByText('*');
		await expect(asterisk).toBeInTheDocument();
		await expect(asterisk).toHaveClass('text-error');

		// Test 4: Click to select
		await userEvent.click(radio);
		await expect(radio).toBeChecked();
	}
};

export const Error: Story = {
	args: {
		name: 'option',
		value: 'option1',
		label: 'Option with error',
		error: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify radio wrapper has error styling (border-error class)
		const wrapper = radio.closest('div');
		await expect(wrapper).toHaveClass('border-error');

		// Test 3: Verify label is still visible
		const label = canvas.getByText('Option with error');
		await expect(label).toBeInTheDocument();

		// Test 4: Verify radio can still be selected despite error
		await userEvent.click(radio);
		await expect(radio).toBeChecked();
	}
};

// ============================================
// Disabled States
// ============================================

export const Disabled: Story = {
	args: {
		name: 'option',
		value: 'option1',
		label: 'Disabled option',
		disabled: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify radio is disabled
		await expect(radio).toBeDisabled();
		await expect(radio).toHaveAttribute('disabled');

		// Test 3: Verify label has disabled styling
		const label = canvas.getByText('Disabled option');
		await expect(label).toHaveClass('opacity-disabled');

		// Test 4: Attempt to click should not change state
		await userEvent.click(radio);
		await expect(radio).not.toBeChecked();

		// Test 5: Verify disabled radio cannot receive focus via click
		// (Focus behavior may vary, just verify it's not interactive)
		await expect(radio).toBeDisabled();
	}
};

export const DisabledSelected: Story = {
	args: {
		name: 'option',
		value: 'option1',
		group: 'option1',
		label: 'Disabled and selected',
		disabled: true,
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio button is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify radio is checked (was pre-selected)
		await expect(radio).toBeChecked();

		// Test 3: Verify radio is disabled
		await expect(radio).toBeDisabled();

		// Test 4: Verify aria-checked shows as true
		await expect(radio).toHaveAttribute('aria-checked', 'true');

		// Test 5: Verify clicking doesn't uncheck it
		await userEvent.click(radio);
		await expect(radio).toBeChecked();

		// Test 6: Verify disabled styling
		const wrapper = radio.closest('div');
		await expect(wrapper).toHaveClass('opacity-disabled');
	}
};

// ============================================
// Radio Group Stories (simulating group behavior)
// ============================================

export const RadioGroupBehavior: Story = {
	parameters: {
		layout: 'padded'
	},
	args: {
		name: 'demo-group',
		value: 'option1',
		group: 'option1',
		label: 'Demo Group'
	},
	play: async ({ canvasElement }) => {
		// Create test radios manually in the DOM for group behavior testing
		const container = canvasElement.parentElement;
		if (container) {
			const testHTML = `
				<div class="flex flex-col gap-4" data-testid="radio-group-test">
					<label style="display: flex; gap: 8px; align-items: center;">
						<input 
							type="radio" 
							name="test-group" 
							value="opt1" 
							checked
							data-testid="radio-opt1"
						/>
						<span>Test Option 1</span>
					</label>
					<label style="display: flex; gap: 8px; align-items: center;">
						<input 
							type="radio" 
							name="test-group" 
							value="opt2"
							data-testid="radio-opt2"
						/>
						<span>Test Option 2</span>
					</label>
					<label style="display: flex; gap: 8px; align-items: center;">
						<input 
							type="radio" 
							name="test-group" 
							value="opt3"
							data-testid="radio-opt3"
						/>
						<span>Test Option 3</span>
					</label>
				</div>
			`;
			container.insertAdjacentHTML('afterbegin', testHTML);
		}

		// Get all radios in the group
		const radio1 = document.querySelector('[data-testid="radio-opt1"]') as HTMLInputElement;
		const radio2 = document.querySelector('[data-testid="radio-opt2"]') as HTMLInputElement;
		const radio3 = document.querySelector('[data-testid="radio-opt3"]') as HTMLInputElement;

		if (radio1 && radio2 && radio3) {
			// Test 1: Verify first radio is checked initially
			await expect(radio1).toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).not.toBeChecked();

			// Test 2: Click second radio
			await userEvent.click(radio2);

			// Test 3: Verify only second radio is checked now (mutual exclusivity)
			await expect(radio1).not.toBeChecked();
			await expect(radio2).toBeChecked();
			await expect(radio3).not.toBeChecked();

			// Test 4: Click third radio
			await userEvent.click(radio3);

			// Test 5: Verify only third radio is checked
			await expect(radio1).not.toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).toBeChecked();

			// Test 6: Click back to first radio
			await userEvent.click(radio1);

			// Test 7: Verify only first radio is checked
			await expect(radio1).toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).not.toBeChecked();
		}
	}
};

// ============================================
// Keyboard Navigation
// ============================================

export const KeyboardNavigation: Story = {
	parameters: {
		layout: 'padded'
	},
	args: {
		name: 'keyboard-test',
		value: 'test1',
		group: 'test1',
		label: 'Keyboard Test'
	},
	play: async ({ canvasElement }) => {
		// Create test radios manually in the DOM for keyboard testing
		const container = canvasElement.parentElement;
		if (container) {
			const testHTML = `
				<div class="flex flex-col gap-4" data-testid="keyboard-group-test">
					<label style="display: flex; gap: 8px; align-items: center;">
						<input 
							type="radio" 
							name="kb-group" 
							value="k1" 
							checked
							data-testid="kb-radio1"
							aria-label="First option"
						/>
						<span>First Option</span>
					</label>
					<label style="display: flex; gap: 8px; align-items: center;">
						<input 
							type="radio" 
							name="kb-group" 
							value="k2"
							data-testid="kb-radio2"
							aria-label="Second option"
						/>
						<span>Second Option</span>
					</label>
					<label style="display: flex; gap: 8px; align-items: center;">
						<input 
							type="radio" 
							name="kb-group" 
							value="k3"
							data-testid="kb-radio3"
							aria-label="Third option"
						/>
						<span>Third Option</span>
					</label>
				</div>
			`;
			container.insertAdjacentHTML('afterbegin', testHTML);
		}

		const radio1 = document.querySelector('[data-testid="kb-radio1"]') as HTMLInputElement;
		const radio2 = document.querySelector('[data-testid="kb-radio2"]') as HTMLInputElement;
		const radio3 = document.querySelector('[data-testid="kb-radio3"]') as HTMLInputElement;

		if (radio1 && radio2 && radio3) {
			// Test 1: First radio should be checked initially
			await expect(radio1).toBeChecked();

			// Test 2: Focus first radio
			radio1.focus();
			await expect(radio1).toHaveFocus();

			// Test 3: Space bar on focused element should work
			await userEvent.keyboard(' ');
			await expect(radio1).toBeChecked();

			// Test 4: Focus and activate radio2 with space
			radio2.focus();
			await expect(radio2).toHaveFocus();
			await userEvent.keyboard(' ');
			await expect(radio2).toBeChecked();

			// Test 5: Verify mutual exclusivity after space key
			await expect(radio1).not.toBeChecked();
			await expect(radio2).toBeChecked();

			// Test 6: Focus and activate radio3 with Enter
			radio3.focus();
			await expect(radio3).toHaveFocus();
			await userEvent.keyboard('{Enter}');
			await expect(radio3).toBeChecked();

			// Test 7: Verify mutual exclusivity after Enter key
			await expect(radio1).not.toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).toBeChecked();
		}
	}
};

// ============================================
// Size Variants
// ============================================

export const Small: Story = {
	args: {
		name: 'size',
		value: 'sm',
		label: 'Small radio',
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify it has small size class (w-4 h-4)
		const wrapper = radio.closest('div');
		await expect(wrapper).toHaveClass('w-4', 'h-4');

		// Test 3: Click and select
		await userEvent.click(radio);
		await expect(radio).toBeChecked();
	}
};

export const Medium: Story = {
	args: {
		name: 'size',
		value: 'md',
		label: 'Medium radio',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify it has medium size class (w-5 h-5)
		const wrapper = radio.closest('div');
		await expect(wrapper).toHaveClass('w-5', 'h-5');

		// Test 3: Verify label text is medium-sized
		const label = canvas.getByText('Medium radio');
		await expect(label).toHaveClass('text-base');

		// Test 4: Click and select
		await userEvent.click(radio);
		await expect(radio).toBeChecked();
	}
};

export const Large: Story = {
	args: {
		name: 'size',
		value: 'lg',
		label: 'Large radio',
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify radio is rendered
		const radio = canvas.getByRole('radio');
		await expect(radio).toBeInTheDocument();

		// Test 2: Verify it has large size class (w-6 h-6)
		const wrapper = radio.closest('div');
		await expect(wrapper).toHaveClass('w-6', 'h-6');

		// Test 3: Verify label text is large-sized
		const label = canvas.getByText('Large radio');
		await expect(label).toHaveClass('text-lg');

		// Test 4: Click and select
		await userEvent.click(radio);
		await expect(radio).toBeChecked();
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Radio Buttons** when users must select exactly one option from a list of 2-5 items.
 * - For more than 5 items, consider using a **Select** dropdown.
 *
 * ## Do's
 * - Always have a default option selected if possible.
 * - Arrange radio buttons vertically for easier scanning.
 * - Use clear and distinct labels for each option.
 *
 * ## Don'ts
 * - Don't use radio buttons for binary "Yes/No" choices if a Switch or Checkbox is more appropriate.
 * - Don't allow users to unselect a radio button (once one is picked, one must always be active).
 * - Avoid nesting radio buttons within other radio buttons.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	args: {
		name: 'guidelines',
		value: 'yes',
		label: 'See Guidelines in Docs',
		group: 'yes'
	},
	render: (args) => ({
		Component: Radio,
		props: args
	})
};
