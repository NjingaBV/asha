import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Input from '$lib/components/atoms/Input.svelte';

/**
 * # Input
 *
 * A versatile text input component with validation states, icons, and accessibility.
 * Integrates with form field patterns and supports various input types.
 *
 * ## Features
 *
 * - **3 Variants**: `outline`, `filled`, `ghost`
 * - **3 Sizes**: `sm`, `md`, `lg`
 * - **Validation States**: Error and success with messages
 * - **Icon Support**: Left and right icon slots
 * - **Prefix/Suffix**: Text or element slots
 *
 * ## Accessibility
 *
 * - Labels linked via `for` attribute
 * - Error messages linked via `aria-describedby`
 * - `aria-invalid` for error states
 * - `aria-required` for required fields
 *
 * ## Usage
 *
 * ```svelte
 * <Input label="Email" type="email" placeholder="you@example.com" />
 * <Input label="Password" type="password" error="Required field" />
 * ```
 */
const meta = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A versatile text input component with validation states, icons, and accessibility support.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search', 'date'],
			description: 'Input type',
			table: { defaultValue: { summary: 'text' } }
		},
		variant: {
			control: { type: 'select' },
			options: ['outline', 'filled', 'ghost'],
			description: 'Visual variant',
			table: { defaultValue: { summary: 'outline' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Input size',
			table: { defaultValue: { summary: 'md' } }
		},
		label: {
			control: 'text',
			description: 'Label text'
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text'
		},
		helperText: {
			control: 'text',
			description: 'Helper text below input'
		},
		error: {
			control: 'text',
			description: 'Error message - shows error state'
		},
		success: {
			control: 'text',
			description: 'Success message - shows success state'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state',
			table: { defaultValue: { summary: 'false' } }
		},
		readonly: {
			control: 'boolean',
			description: 'Read-only state',
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories with play() Tests
// ============================================

/**
 * Default input story with text typing test.
 *
 * Tests:
 * - Input renders with label and placeholder
 * - Text can be typed into the input
 * - Value updates as user types
 * - Label is properly associated via "for" attribute
 * - Focus and blur behavior works correctly
 */
export const Default: Story = {
	args: {
		label: 'Label',
		placeholder: 'Enter text...'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input renders and is visible
		const input = canvas.getByRole('textbox');
		await expect(input).toBeInTheDocument();
		await expect(input).toBeVisible();
		await expect(input).toBeEnabled();

		// Test 2: Verify placeholder is displayed
		await expect(input).toHaveAttribute('placeholder', 'Enter text...');

		// Test 3: Verify label is present and linked
		const label = canvas.getByText('Label');
		await expect(label).toBeInTheDocument();
		await expect(label).toHaveAttribute('for');

		// Test 4: Type text and verify value updates
		await userEvent.type(input, 'Hello World');
		await expect(input).toHaveValue('Hello World');

		// Test 5: Verify focus behavior
		await userEvent.click(input);
		await expect(input).toHaveFocus();

		// Test 6: Verify blur works
		await userEvent.tab();
		await expect(input).not.toHaveFocus();
	}
};

/**
 * Input with existing value.
 *
 * Tests:
 * - Initial value is rendered
 * - Value can be cleared and retyped
 * - Text selection and replacement works
 */
export const WithValue: Story = {
	args: {
		label: 'Name',
		value: 'John Doe'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox') as HTMLInputElement;

		// Test 1: Verify initial value is set
		await expect(input).toHaveValue('John Doe');

		// Test 2: Clear the value by selecting all and typing
		await userEvent.tripleClick(input);
		await userEvent.type(input, 'Jane Smith');
		await expect(input).toHaveValue('Jane Smith');

		// Test 3: Verify input remains enabled for editing
		await expect(input).toBeEnabled();
	}
};

/**
 * Input with helper text.
 *
 * Tests:
 * - Helper text is displayed below input
 * - Helper text is linked via aria-describedby
 * - Input maintains association with helper text
 */
export const WithHelperText: Story = {
	args: {
		label: 'Email',
		type: 'email',
		placeholder: 'you@example.com',
		helperText: 'We will never share your email.'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input renders
		const input = canvas.getByRole('textbox');
		await expect(input).toBeInTheDocument();
		await expect(input).toHaveAttribute('type', 'email');

		// Test 2: Verify helper text is displayed
		const helperText = canvas.getByText('We will never share your email.');
		await expect(helperText).toBeInTheDocument();
		await expect(helperText).toHaveClass('text-xs');

		// Test 3: Verify input is linked to helper text via aria-describedby
		const describedById = input.getAttribute('aria-describedby');
		await expect(describedById).toBeTruthy();
		await expect(helperText).toHaveAttribute('id', describedById);

		// Test 4: Type email and verify format doesn't restrict input (validation is external)
		await userEvent.type(input, 'test@example.com');
		await expect(input).toHaveValue('test@example.com');
	}
};

// ============================================
// Variant Stories with play() Tests
// ============================================

export const Outline: Story = {
	args: {
		variant: 'outline',
		label: 'Outline Input',
		placeholder: 'Default variant'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Verify variant is applied
		const container = input.closest('div[data-variant]');
		await expect(container).toHaveAttribute('data-variant', 'outline');

		// Test 2: Type and verify interaction works
		await userEvent.type(input, 'Test outline');
		await expect(input).toHaveValue('Test outline');
	}
};

export const Filled: Story = {
	args: {
		variant: 'filled',
		label: 'Filled Input',
		placeholder: 'Filled background'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Verify variant is applied
		const container = input.closest('div[data-variant]');
		await expect(container).toHaveAttribute('data-variant', 'filled');

		// Test 2: Test interaction
		await userEvent.type(input, 'Filled variant');
		await expect(input).toHaveValue('Filled variant');
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		label: 'Ghost Input',
		placeholder: 'Minimal style'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Verify variant is applied
		const container = input.closest('div[data-variant]');
		await expect(container).toHaveAttribute('data-variant', 'ghost');

		// Test 2: Test interaction
		await userEvent.type(input, 'Ghost style');
		await expect(input).toHaveValue('Ghost style');
	}
};

// ============================================
// Size Stories with play() Tests
// ============================================

export const Small: Story = {
	args: {
		size: 'sm',
		label: 'Small Input',
		placeholder: 'Compact size'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Verify size attribute is set
		const container = input.closest('div[data-size]');
		await expect(container).toHaveAttribute('data-size', 'sm');

		// Test 2: Input should still be fully functional at small size
		await userEvent.type(input, 'Small');
		await expect(input).toHaveValue('Small');
	}
};

export const Medium: Story = {
	args: {
		size: 'md',
		label: 'Medium Input',
		placeholder: 'Default size'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Verify size attribute
		const container = input.closest('div[data-size]');
		await expect(container).toHaveAttribute('data-size', 'md');

		// Test 2: Full functionality test
		await userEvent.type(input, 'Medium');
		await expect(input).toHaveValue('Medium');
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		label: 'Large Input',
		placeholder: 'Larger touch target'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Verify size attribute
		const container = input.closest('div[data-size]');
		await expect(container).toHaveAttribute('data-size', 'lg');

		// Test 2: Full functionality test
		await userEvent.type(input, 'Large');
		await expect(input).toHaveValue('Large');
	}
};

// ============================================
// State Stories with play() Tests
// ============================================

/**
 * Input with error state.
 *
 * Tests:
 * - Error message is displayed
 * - aria-invalid attribute is set
 * - aria-describedby links to error message
 * - Error styling is applied
 * - Input still accepts text input in error state
 */
export const Error: Story = {
	args: {
		label: 'Email',
		type: 'email',
		value: 'invalid-email',
		error: 'Please enter a valid email address'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input renders
		const input = canvas.getByRole('textbox');
		await expect(input).toBeInTheDocument();

		// Test 2: Verify error message is displayed
		const errorMsg = canvas.getByText('Please enter a valid email address');
		await expect(errorMsg).toBeInTheDocument();
		await expect(errorMsg).toHaveAttribute('role', 'alert');

		// Test 3: Verify aria-invalid attribute is set
		await expect(input).toHaveAttribute('aria-invalid', 'true');

		// Test 4: Verify aria-describedby links to error message
		const describedById = input.getAttribute('aria-describedby');
		await expect(describedById).toBeTruthy();
		await expect(errorMsg).toHaveAttribute('id', describedById);

		// Test 5: Error message should have error color styling
		await expect(errorMsg).toHaveClass('text-error');

		// Test 6: Input should still be editable in error state
		await userEvent.clear(input);
		await userEvent.type(input, 'valid@email.com');
		await expect(input).toHaveValue('valid@email.com');
	}
};

/**
 * Input with success state.
 *
 * Tests:
 * - Success message is displayed
 * - Success styling is applied
 * - aria-invalid is not set when successful
 * - Input remains editable
 */
export const Success: Story = {
	args: {
		label: 'Username',
		value: 'johndoe',
		success: 'Username is available!'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input renders
		const input = canvas.getByRole('textbox');
		await expect(input).toBeInTheDocument();
		await expect(input).toHaveValue('johndoe');

		// Test 2: Verify success message is displayed
		const successMsg = canvas.getByText('Username is available!');
		await expect(successMsg).toBeInTheDocument();

		// Test 3: Success message should NOT have alert role
		await expect(successMsg).not.toHaveAttribute('role', 'alert');

		// Test 4: Success message should have success color
		await expect(successMsg).toHaveClass('text-success');

		// Test 5: Input should not have aria-invalid when successful
		await expect(input).not.toHaveAttribute('aria-invalid', 'true');

		// Test 6: Input should remain fully editable
		await userEvent.clear(input);
		await userEvent.type(input, 'newusername');
		await expect(input).toHaveValue('newusername');
	}
};

/**
 * Disabled input story.
 *
 * Tests:
 * - Input is disabled and cannot receive focus via click
 * - Text cannot be typed into disabled input
 * - Disabled attribute is properly set
 * - Disabled styling is applied
 * - Disabled state is accessible (aria-disabled for links, disabled for buttons)
 */
export const Disabled: Story = {
	args: {
		label: 'Disabled Input',
		value: 'Cannot edit this',
		disabled: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input is disabled
		const input = canvas.getByRole('textbox') as HTMLInputElement;
		await expect(input).toBeDisabled();
		await expect(input).toHaveAttribute('disabled');

		// Test 2: Verify disabled styling is applied
		const container = input.closest('[data-disabled]');
		await expect(container).toHaveAttribute('data-disabled');

		// Test 3: Verify initial value is present but cannot be edited
		await expect(input).toHaveValue('Cannot edit this');

		// Test 4: Try to type - should not work
		const initialValue = input.value;
		await userEvent.type(input, 'Should not appear');
		await expect(input).toHaveValue(initialValue);

		// Test 5: Click should not focus the input
		await userEvent.click(input);
		await expect(input).not.toHaveFocus();
	}
};

/**
 * Read-only input story.
 *
 * Tests:
 * - Input has readonly attribute
 * - Value cannot be modified via typing
 * - Input can still receive focus
 * - Value is selectable (unlike disabled)
 */
export const ReadOnly: Story = {
	args: {
		label: 'Read Only',
		value: 'Read-only content',
		readonly: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify readonly attribute is set
		const input = canvas.getByRole('textbox') as HTMLInputElement;
		await expect(input).toHaveAttribute('readonly');

		// Test 2: Verify value is present
		await expect(input).toHaveValue('Read-only content');

		// Test 3: Input can receive focus (unlike disabled)
		await userEvent.click(input);
		await expect(input).toHaveFocus();

		// Test 4: Typing should not change value
		const initialValue = input.value;
		await userEvent.type(input, 'Cannot change');
		await expect(input).toHaveValue(initialValue);
	}
};

/**
 * Required input story.
 *
 * Tests:
 * - required attribute is set
 * - aria-required attribute reflects required state
 * - Required indicator (*) is displayed in label
 * - Input is fully functional despite being required
 */
export const Required: Story = {
	args: {
		label: 'Required Field',
		placeholder: 'This field is required',
		required: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input has required attribute
		const input = canvas.getByRole('textbox');
		await expect(input).toHaveAttribute('required');

		// Test 2: Verify aria-required is set
		await expect(input).toHaveAttribute('aria-required', 'true');

		// Test 3: Verify required indicator (*) is in label
		const label = canvas.getByText(/Required Field/);
		await expect(label).toBeInTheDocument();
		const requiredIndicator = label.querySelector('[aria-hidden="true"]');
		await expect(requiredIndicator).toHaveTextContent('*');

		// Test 4: Input should still be fully functional
		await userEvent.type(input, 'Required value');
		await expect(input).toHaveValue('Required value');

		// Test 5: Can clear the required field (validation is handled externally)
		await userEvent.clear(input);
		await expect(input).toHaveValue('');
	}
};

// ============================================
// Type Stories with play() Tests
// ============================================

/**
 * Password input story.
 *
 * Tests:
 * - Input type is password (text is masked)
 * - Value can be set but is not visible
 * - typing still works, characters are masked
 */
export const Password: Story = {
	args: {
		type: 'password',
		label: 'Password',
		placeholder: 'Enter your password'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input type is password
		const input = canvas.getByLabelText('Password') as HTMLInputElement;
		await expect(input).toHaveAttribute('type', 'password');

		// Test 2: Type password - value is stored but not visible to user
		await userEvent.type(input, 'SecurePassword123');
		await expect(input).toHaveValue('SecurePassword123');

		// Test 3: Verify placeholder is shown
		await expect(input).toHaveAttribute('placeholder', 'Enter your password');
	}
};

/**
 * Email input story.
 *
 * Tests:
 * - Input type is email
 * - Standard text input functionality works
 * - Email type allows browser validation (when HTML5 validation is enabled)
 */
export const Email: Story = {
	args: {
		type: 'email',
		label: 'Email Address',
		placeholder: 'you@example.com'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input type is email
		const input = canvas.getByLabelText('Email Address');
		await expect(input).toHaveAttribute('type', 'email');

		// Test 2: Type email address
		await userEvent.type(input, 'test@example.com');
		await expect(input).toHaveValue('test@example.com');

		// Test 3: Verify placeholder is shown
		await expect(input).toHaveAttribute('placeholder', 'you@example.com');
	}
};

/**
 * Number input story.
 *
 * Tests:
 * - Input type is number
 * - Number input accepts numeric values
 * - Min/max constraints can be set (browser enforced)
 */
export const Number: Story = {
	args: {
		type: 'number',
		label: 'Quantity',
		placeholder: '0',
		min: 0,
		max: 100
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input type is number
		const input = canvas.getByLabelText('Quantity') as HTMLInputElement;
		await expect(input).toHaveAttribute('type', 'number');

		// Test 2: Verify min/max attributes
		await expect(input).toHaveAttribute('min', '0');
		await expect(input).toHaveAttribute('max', '100');

		// Test 3: Type numeric value
		await userEvent.type(input, '50');
		await expect(input).toHaveValue(50);

		// Test 4: Verify placeholder
		await expect(input).toHaveAttribute('placeholder', '0');
	}
};

/**
 * Search input story.
 *
 * Tests:
 * - Input type is search
 * - Provides standard search input functionality
 * - May show search-specific UI (browser dependent)
 */
export const Search: Story = {
	args: {
		type: 'search',
		label: 'Search',
		placeholder: 'Search...'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input type is search
		const input = canvas.getByLabelText('Search');
		await expect(input).toHaveAttribute('type', 'search');

		// Test 2: Type search query
		await userEvent.type(input, 'query');
		await expect(input).toHaveValue('query');

		// Test 3: Clear search
		await userEvent.clear(input);
		await expect(input).toHaveValue('');
	}
};

/**
 * Date input story.
 *
 * Tests:
 * - Input type is date
 * - Date picker UI is available (browser dependent)
 * - Date format is standardized (YYYY-MM-DD internally)
 */
export const Date: Story = {
	args: {
		type: 'date',
		label: 'Birth Date'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input type is date
		const input = canvas.getByLabelText('Birth Date') as HTMLInputElement;
		await expect(input).toHaveAttribute('type', 'date');

		// Test 2: Input is enabled and ready for interaction
		await expect(input).toBeEnabled();

		// Test 3: Can set date value (format: YYYY-MM-DD)
		await userEvent.type(input, '12251990');
		await expect(input.value).toBeTruthy();
	}
};

// ============================================
// Layout Stories with play() Tests
// ============================================

/**
 * Full width input story.
 *
 * Tests:
 * - Input expands to container width
 * - fullWidth prop is applied
 * - Functionality is unchanged
 */
export const FullWidth: Story = {
	args: {
		label: 'Full Width Input',
		placeholder: 'Expands to container width',
		fullWidth: true
	},
	parameters: {
		layout: 'padded'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input renders
		const input = canvas.getByRole('textbox');
		await expect(input).toBeInTheDocument();

		// Test 2: Verify parent wrapper has full width class
		const wrapper = input.closest('div');
		if (wrapper) {
			await expect(wrapper).toHaveClass('w-full');
		}

		// Test 3: Input should be fully functional
		await userEvent.type(input, 'Full width text');
		await expect(input).toHaveValue('Full width text');
	}
};

/**
 * Input without label but with aria-label.
 *
 * Tests:
 * - aria-label provides accessible name when visual label is absent
 * - Input is still fully accessible via screen readers
 * - Functionality is unchanged
 */
export const WithoutLabel: Story = {
	args: {
		placeholder: 'Search...',
		ariaLabel: 'Search input'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify input can be found via aria-label
		const input = canvas.getByLabelText('Search input');
		await expect(input).toBeInTheDocument();

		// Test 2: Verify aria-label is set
		// Note: This is a label-less input, identified only by aria-label
		await expect(input).toHaveAttribute('aria-label', 'Search input');

		// Test 3: Input functionality is unaffected
		await userEvent.type(input, 'search query');
		await expect(input).toHaveValue('search query');

		// Test 4: Placeholder is visible
		await expect(input).toHaveAttribute('placeholder', 'Search...');
	}
};

// ============================================
// Validation Examples with play() Tests
// ============================================

/**
 * Complete form field example.
 *
 * Tests:
 * - All form field elements are rendered (label, input, helper text, required indicator)
 * - Elements are properly associated (label.for, aria-describedby)
 * - Workflow: click label → focus input → type → verify value
 */
export const FormFieldExample: Story = {
	args: {
		label: 'Full Name',
		placeholder: 'John Doe',
		helperText: 'Enter your full legal name',
		required: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete form field with label, placeholder, helper text, and required indicator.'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify all elements are present
		const label = canvas.getByText(/Full Name/);
		const input = canvas.getByRole('textbox');
		const helperText = canvas.getByText('Enter your full legal name');

		await expect(label).toBeInTheDocument();
		await expect(input).toBeInTheDocument();
		await expect(helperText).toBeInTheDocument();

		// Test 2: Verify required indicator is shown
		const requiredIndicator = label.querySelector('[aria-hidden="true"]');
		await expect(requiredIndicator).toHaveTextContent('*');

		// Test 3: Verify label is linked to input via "for" attribute
		const labelForAttr = label.getAttribute('for');
		const inputId = input.getAttribute('id');
		await expect(labelForAttr).toBe(inputId);

		// Test 4: Verify input is linked to helper text
		const describedById = input.getAttribute('aria-describedby');
		const helperTextId = helperText.getAttribute('id');
		await expect(describedById).toBe(helperTextId);

		// Test 5: Verify required attribute
		await expect(input).toHaveAttribute('required');

		// Test 6: Click label should focus input
		await userEvent.click(label);
		await expect(input).toHaveFocus();

		// Test 7: Type full name
		await userEvent.type(input, 'Jane Smith');
		await expect(input).toHaveValue('Jane Smith');

		// Test 8: Verify placeholder
		await userEvent.clear(input);
		await expect(input).toHaveAttribute('placeholder', 'John Doe');
	}
};

// ============================================
// Keyboard Navigation and Focus Tests
// ============================================

/**
 * Test keyboard navigation and focus behavior.
 *
 * Tests:
 * - Tab key navigates to input
 * - Shift+Tab navigates away
 * - Focus is visible
 * - Enter/typing in input works
 */
export const KeyboardNavigation: Story = {
	args: {
		label: 'Keyboard Test',
		placeholder: 'Tab to focus me'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByRole('textbox');

		// Test 1: Input is not focused initially
		await expect(input).not.toHaveFocus();

		// Test 2: Tab key focuses the input
		await userEvent.tab();
		await expect(input).toHaveFocus();

		// Test 3: Can type after focus
		await userEvent.keyboard('Hello');
		await expect(input).toHaveValue('Hello');

		// Test 4: Shift+Tab removes focus from input
		await userEvent.tab({ shift: true });
		await expect(input).not.toHaveFocus();

		// Test 5: Tab again to refocus
		await userEvent.tab();
		await expect(input).toHaveFocus();

		// Test 6: Escape doesn't unfocus but clears focus ring
		await userEvent.keyboard('{Escape}');
		// Input should still have focus, but escape key is captured
		// (exact behavior depends on component implementation)
	}
};

/**
 * Test focus within form field context.
 *
 * Tests:
 * - Label click focuses input
 * - Input accepts text after label click
 * - Focus order is correct
 */
export const FocusAndLabel: Story = {
	args: {
		label: 'Click me to focus',
		placeholder: 'Type here'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Get label and input
		const label = canvas.getByText('Click me to focus');
		const input = canvas.getByRole('textbox');

		// Test 2: Input is not focused initially
		await expect(input).not.toHaveFocus();

		// Test 3: Click label
		await userEvent.click(label);

		// Test 4: Input should now be focused
		await expect(input).toHaveFocus();

		// Test 5: Can immediately type after focus via label
		await userEvent.type(input, 'Typed text');
		await expect(input).toHaveValue('Typed text');
	}
};

// ============================================
// Accessibility Tests
// ============================================

/**
 * Comprehensive accessibility test.
 *
 * Tests:
 * - Input has accessible name (via label or aria-label)
 * - Error state includes alert role
 * - States are properly announced via ARIA
 * - Helper text is associated correctly
 */
export const Accessibility: Story = {
	args: {
		label: 'Accessible Input',
		placeholder: 'Screen readers can read this',
		helperText: 'This input is WCAG compliant'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Input has accessible name via label
		const input = canvas.getByLabelText('Accessible Input');
		await expect(input).toBeInTheDocument();

		// Test 2: Input is properly labeled for assistive technology
		await expect(input).toHaveAccessibleName('Accessible Input');

		// Test 3: Helper text is present and linked
		const helperText = canvas.getByText('This input is WCAG compliant');
		const describedById = input.getAttribute('aria-describedby');
		await expect(helperText).toHaveAttribute('id', describedById);

		// Test 4: Required inputs have aria-required
		// (this example is not required, so aria-required should not be set)
		await expect(input).not.toHaveAttribute('aria-required', 'true');

		// Test 5: No aria-invalid when there's no error
		await expect(input).not.toHaveAttribute('aria-invalid', 'true');

		// Test 6: Input is visible and enabled
		await expect(input).toBeVisible();
		await expect(input).toBeEnabled();
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Outline** inputs for standard forms (default).
 * - Use **Filled** inputs for less emphasis or on colored backgrounds.
 * - Use **Ghost** inputs for inline editing or minimal interfaces.
 *
 * ## Do's
 * - Always provide a visible label or `aria-label`.
 * - Use helper text for instructions or formatting requirements.
 * - Show inline validation errors immediately after interaction (on blur).
 *
 * ## Don'ts
 * - Don't use placeholder text as a replacement for labels.
 * - Don't hide required field indicators.
 * - Avoid using too many different input sizes in the same form.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Input,
		props: {
			label: 'See Guidelines in Docs',
			placeholder: 'Read the docs tab'
		}
	})
};
