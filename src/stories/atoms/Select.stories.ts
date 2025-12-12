import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Select from '$lib/components/atoms/Select.svelte';

const meta = {
	title: 'Atoms/Select',
	component: Select,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Select

A native select dropdown component with consistent styling.
Supports single selection with customizable options.

## Features

- **Three Variants**: outline, filled, ghost
- **Three Sizes**: sm, md, lg
- **Option Groups**: Support for grouped options
- **Validation States**: Error and success states with messages
- **Accessible**: Full keyboard navigation and ARIA support
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		options: {
			control: 'object',
			description: 'Options array'
		},
		variant: {
			control: { type: 'select' },
			options: ['outline', 'filled', 'ghost'],
			description: 'Visual style variant',
			table: { defaultValue: { summary: 'outline' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Select size',
			table: { defaultValue: { summary: 'md' } }
		},
		value: {
			control: 'text',
			description: 'Current value (bindable)'
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text'
		},
		label: {
			control: 'text',
			description: 'Label text'
		},
		helperText: {
			control: 'text',
			description: 'Helper text below select'
		},
		error: {
			control: 'text',
			description: 'Error message'
		},
		success: {
			control: 'text',
			description: 'Success message'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
			table: { defaultValue: { summary: 'false' } }
		},
		required: {
			control: 'boolean',
			description: 'Required field',
			table: { defaultValue: { summary: 'false' } }
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width',
			table: { defaultValue: { summary: 'false' } }
		}
	}
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const countryOptions = [
	{ value: 'us', label: 'United States' },
	{ value: 'ca', label: 'Canada' },
	{ value: 'uk', label: 'United Kingdom' },
	{ value: 'au', label: 'Australia' },
	{ value: 'de', label: 'Germany' },
	{ value: 'fr', label: 'France' }
];

export const Default: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select a country...',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Initial state - should have placeholder
		expect(select).toBeInTheDocument();
		expect(select).toHaveValue('');
		expect(select.disabled).toBe(false);

		// Test 2: Should have accessible name from label
		const label = canvas.getByText('Country');
		expect(label).toBeInTheDocument();
		expect(select).toHaveAccessibleName('Country');

		// Test 3: Select an option
		await userEvent.selectOptions(select, 'us');
		expect(select).toHaveValue('us');

		// Test 4: Verify selected option displays label
		const options = select.querySelectorAll('option');
		const selectedOption = Array.from(options).find((opt) => opt.value === 'us');
		expect(selectedOption?.textContent).toBe('United States');

		// Test 5: Change selection to another option
		await userEvent.selectOptions(select, 'fr');
		expect(select).toHaveValue('fr');

		// Test 6: Verify aria-invalid is not set in default state
		expect(select).not.toHaveAttribute('aria-invalid');

		// Test 7: Keyboard navigation - Tab focus
		await userEvent.tab();
		expect(select).toHaveFocus();

		// Test 8: Verify all options are available
		expect(options).toHaveLength(7); // 1 placeholder + 6 countries
	}
};

export const WithValue: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		value: 'us',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Initial value should be pre-selected
		expect(select).toHaveValue('us');

		// Test 2: Verify the selected option label
		const options = select.querySelectorAll('option');
		const selectedOption = Array.from(options).find((opt) => opt.value === 'us');
		expect(selectedOption?.selected).toBe(true);
		expect(selectedOption?.textContent).toBe('United States');

		// Test 3: Should be able to change the pre-selected value
		await userEvent.selectOptions(select, 'uk');
		expect(select).toHaveValue('uk');

		// Test 4: Change back to original value
		await userEvent.selectOptions(select, 'us');
		expect(select).toHaveValue('us');

		// Test 5: Placeholder option should not be selected
		const placeholderOption = Array.from(options).find((opt) => opt.value === '');
		expect(placeholderOption?.selected).toBe(false);
	}
};

export const Outline: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'outline',
		size: 'md'
	}
};

export const Filled: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'filled',
		size: 'md'
	}
};

export const Ghost: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'ghost',
		size: 'md'
	}
};

export const WithHelperText: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		helperText: 'Choose your country of residence',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Helper text should be visible
		const helperText = canvas.getByText('Choose your country of residence');
		expect(helperText).toBeInTheDocument();

		// Test 2: Select element should reference helper text
		const helperId = select.getAttribute('aria-describedby');
		expect(helperId).toBeDefined();
		const helperElement = document.getElementById(helperId!);
		expect(helperElement?.textContent).toContain('Choose your country of residence');
	}
};

export const WithError: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		error: 'Please select a country',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Error message should be visible
		const errorText = canvas.getByText('Please select a country');
		expect(errorText).toBeInTheDocument();

		// Test 2: Error text should have role alert
		expect(errorText).toHaveAttribute('role', 'alert');

		// Test 3: Select should have aria-invalid set to true
		expect(select).toHaveAttribute('aria-invalid', 'true');

		// Test 4: Select should reference error message
		const errorId = select.getAttribute('aria-describedby');
		expect(errorId).toBeDefined();
		const errorElement = document.getElementById(errorId!);
		expect(errorElement?.textContent).toContain('Please select a country');

		// Test 5: Error class should be applied (visual indicator)
		const selectClass = select.className;
		expect(selectClass).toContain('border-error');

		// Test 6: Can still select an option despite error state
		await userEvent.selectOptions(select, 'ca');
		expect(select).toHaveValue('ca');
	}
};

export const WithSuccess: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		value: 'us',
		success: 'Great choice!',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Success message should be visible
		const successText = canvas.getByText('Great choice!');
		expect(successText).toBeInTheDocument();

		// Test 2: Select should have initial value
		expect(select).toHaveValue('us');

		// Test 3: Select should NOT have aria-invalid in success state
		expect(select).not.toHaveAttribute('aria-invalid', 'true');

		// Test 4: Success message should use correct styling
		const successClass = successText.className;
		expect(successClass).toContain('text-success');
	}
};

export const Required: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		required: true,
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Select should have required attribute
		expect(select).toHaveAttribute('required');

		// Test 2: Label should show required indicator (asterisk)
		const label = canvas.getByText('Country');
		expect(label).toBeInTheDocument();
		const requiredIndicator = label.querySelector('span[aria-hidden="true"]');
		expect(requiredIndicator?.textContent).toBe('*');

		// Test 3: Placeholder option should be disabled when required
		const options = select.querySelectorAll('option');
		const placeholderOption = Array.from(options).find((opt) => opt.value === '');
		expect(placeholderOption?.disabled).toBe(true);
	}
};

export const Disabled: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		value: 'us',
		disabled: true,
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Select should be disabled
		expect(select).toBeDisabled();
		expect(select.disabled).toBe(true);

		// Test 2: Should have initial value despite being disabled
		expect(select).toHaveValue('us');

		// Test 3: Should not be able to interact with disabled select
		const initialValue = select.value;
		try {
			await userEvent.selectOptions(select, 'ca');
			// If we get here, the value should not have changed
			expect(select.value).toBe(initialValue);
		} catch {
			// userEvent should fail on disabled element, which is expected
			expect(select.value).toBe(initialValue);
		}

		// Test 4: Disabled styling should be applied
		const selectClass = select.className;
		expect(selectClass).toContain('disabled:cursor-not-allowed');

		// Test 5: Should not be focusable (or should have disabled cursor)
		expect(select.disabled).toBe(true);
	}
};

export const Small: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'outline',
		size: 'sm'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Small size should be applied
		const selectClass = select.className;
		expect(selectClass).toContain('h-8');
		expect(selectClass).toContain('text-sm');

		// Test 2: Should still be functional
		await userEvent.selectOptions(select, 'de');
		expect(select).toHaveValue('de');
	}
};

export const Medium: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Medium size should be applied
		const selectClass = select.className;
		expect(selectClass).toContain('h-10');
		expect(selectClass).toContain('text-base');

		// Test 2: Should be functional
		await userEvent.selectOptions(select, 'au');
		expect(select).toHaveValue('au');
	}
};

export const Large: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'outline',
		size: 'lg'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Large size should be applied
		const selectClass = select.className;
		expect(selectClass).toContain('h-12');
		expect(selectClass).toContain('text-lg');

		// Test 2: Should be functional
		await userEvent.selectOptions(select, 'uk');
		expect(select).toHaveValue('uk');
	}
};

export const FullWidth: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select...',
		variant: 'outline',
		size: 'md',
		fullWidth: true
	},
	parameters: {
		layout: 'padded'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Full width class should be applied to wrapper
		const wrapper = select.parentElement?.parentElement;
		expect(wrapper?.className).toContain('w-full');

		// Test 2: Select should take full width
		expect(select.className).toContain('w-full');

		// Test 3: Should be functional
		await userEvent.selectOptions(select, 'fr');
		expect(select).toHaveValue('fr');
	}
};

export const WithOptionGroups: Story = {
	args: {
		options: [
			{
				label: 'North America',
				options: [
					{ value: 'us', label: 'United States' },
					{ value: 'ca', label: 'Canada' },
					{ value: 'mx', label: 'Mexico' }
				]
			},
			{
				label: 'Europe',
				options: [
					{ value: 'uk', label: 'United Kingdom' },
					{ value: 'de', label: 'Germany' },
					{ value: 'fr', label: 'France' }
				]
			}
		],
		label: 'Country',
		placeholder: 'Select a country...',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Should render option groups
		const optgroups = select.querySelectorAll('optgroup');
		expect(optgroups).toHaveLength(2);

		// Test 2: First group should be "North America"
		expect(optgroups[0].label).toBe('North America');
		expect(optgroups[0].children).toHaveLength(3);

		// Test 3: Second group should be "Europe"
		expect(optgroups[1].label).toBe('Europe');
		expect(optgroups[1].children).toHaveLength(3);

		// Test 4: Can select option from first group
		await userEvent.selectOptions(select, 'ca');
		expect(select).toHaveValue('ca');

		// Test 5: Can select option from second group
		await userEvent.selectOptions(select, 'de');
		expect(select).toHaveValue('de');

		// Test 6: Placeholder option should be available
		const options = select.querySelectorAll('option');
		const placeholderOption = Array.from(options).find((opt) => opt.value === '');
		expect(placeholderOption).toBeInTheDocument();
	}
};

// ============================================
// Keyboard Navigation Tests
// ============================================

export const KeyboardNavigation: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select a country...',
		variant: 'outline',
		size: 'md'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Tab to focus the select
		await userEvent.tab();
		expect(select).toHaveFocus();

		// Test 2: Arrow Down should select next option
		await userEvent.keyboard('{ArrowDown}');
		// Native select with Arrow Down should select first option after placeholder
		expect(select.value).toBe('us');

		// Test 3: Arrow Down again should select next option
		await userEvent.keyboard('{ArrowDown}');
		expect(select.value).toBe('ca');

		// Test 4: Arrow Up should go back
		await userEvent.keyboard('{ArrowUp}');
		expect(select.value).toBe('us');

		// Test 5: Enter should confirm selection (already selected)
		await userEvent.keyboard('{Enter}');
		expect(select.value).toBe('us');

		// Test 6: Typing first letter should jump to matching option
		await userEvent.keyboard('f');
		expect(select.value).toBe('fr');

		// Test 7: Typing again should cycle through matches
		await userEvent.keyboard('f');
		// Depending on browser, might stay on 'fr' or cycle
		expect(['fr', 'fr']).toContain(select.value);
	}
};

// ============================================
// Accessibility Tests
// ============================================

export const AccessibilityTesting: Story = {
	args: {
		options: countryOptions,
		label: 'Country',
		placeholder: 'Select a country...',
		variant: 'outline',
		size: 'md',
		required: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByRole('combobox') as HTMLSelectElement;

		// Test 1: Select should have proper role
		expect(select).toHaveAttribute('role', 'combobox');

		// Test 2: Label should be associated with select
		const label = canvas.getByText('Country');
		const selectId = select.id;
		expect(label).toHaveAttribute('for', selectId);
		expect(select).toHaveAccessibleName('Country');

		// Test 3: Required attribute present
		expect(select).toHaveAttribute('required');

		// Test 4: All options should be accessible
		const options = select.querySelectorAll('option');
		options.forEach((option) => {
			expect(option.textContent).toBeTruthy();
		});

		// Test 5: Disabled state should be properly communicated
		expect(select.disabled).toBe(false); // Not disabled in this story

		// Test 6: Focus visible after tab
		await userEvent.tab();
		expect(select).toHaveFocus();

		// Test 7: Value change should be communicated
		const initialValue = select.value;
		await userEvent.selectOptions(select, 'uk');
		expect(select.value).not.toBe(initialValue);
		expect(select.value).toBe('uk');
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Select** when users must choose one option from a list of 5+ items.
 * - For fewer options (2-4), consider using **Radio** buttons.
 * - Use **Option Groups** to organize long lists.
 *
 * ## Do's
 * - Sort options logically.
 * - Provide a placeholder.
 * - Use concise labels.
 *
 * ## Don'ts
 * - Don't hide important options inside dropdowns.
 * - Avoid extremely long option text.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	args: {
		options: countryOptions,
		label: 'See Guidelines in Docs',
		placeholder: 'Read guidelines',
		variant: 'outline'
	},
	render: (args) => ({
		Component: Select,
		props: args
	})
};
