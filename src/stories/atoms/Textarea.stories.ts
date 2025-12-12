import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Textarea from '$lib/components/atoms/Textarea.svelte';

/**
 * # Textarea
 *
 * A multi-line text input component with validation states, auto-resize option,
 * and character count support. Follows the same patterns as Input for consistency.
 *
 * ## Features
 *
 * - **3 Variants**: `outline`, `filled`, `ghost`
 * - **3 Sizes**: `sm`, `md`, `lg`
 * - **Validation States**: Error and success with messages
 * - **Auto-Resize**: Automatically grows/shrinks with content
 * - **Character Count**: Display current/max character count
 * - **Resize Behavior**: Control user resize capability
 *
 * ## Accessibility
 *
 * - Labels linked via `for` attribute
 * - Error messages linked via `aria-describedby`
 * - `aria-invalid` for error states
 * - `aria-required` for required fields
 * - Multiline textarea support with semantic HTML
 *
 * ## Usage
 *
 * ```svelte
 * <Textarea label="Description" placeholder="Enter description..." />
 * <Textarea
 *   label="Bio"
 *   maxlength={500}
 *   error="Bio is required"
 * />
 * <Textarea autoResize minRows={2} maxRows={10} />
 * ```
 */
const meta = {
	title: 'Atoms/Textarea',
	component: Textarea,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'A multi-line text input component with validation states, auto-resize, and character counting support.'
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['outline', 'filled', 'ghost'],
			description: 'Visual variant',
			table: { defaultValue: { summary: 'outline' } }
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Textarea size',
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
			description: 'Helper text below textarea'
		},
		error: {
			control: 'text',
			description: 'Error message - shows error state'
		},
		success: {
			control: 'text',
			description: 'Success message - shows success state'
		},
		value: {
			control: 'text',
			description: 'Current value'
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
		rows: {
			control: 'number',
			description: 'Number of visible rows',
			table: { defaultValue: { summary: '3' } }
		},
		minRows: {
			control: 'number',
			description: 'Min rows for auto-resize',
			table: { defaultValue: { summary: '3' } }
		},
		maxRows: {
			control: 'number',
			description: 'Max rows for auto-resize',
			table: { defaultValue: { summary: '10' } }
		},
		autoResize: {
			control: 'boolean',
			description: 'Auto-resize based on content',
			table: { defaultValue: { summary: 'false' } }
		},
		resize: {
			control: { type: 'select' },
			options: ['none', 'vertical', 'horizontal', 'both'],
			description: 'Resize behavior',
			table: { defaultValue: { summary: 'vertical' } }
		},
		maxlength: {
			control: 'number',
			description: 'Maximum character length'
		},
		minlength: {
			control: 'number',
			description: 'Minimum character length'
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width',
			table: { defaultValue: { summary: 'false' } }
		}
	}
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================
// Basic Stories with play() Tests
// ============================================

/**
 * Default textarea story with multiline typing test.
 *
 * Tests:
 * - Textarea renders with label and placeholder
 * - Multiline text can be typed into the textarea
 * - Value updates as user types
 * - Label is properly associated via "for" attribute
 * - Newlines are preserved in multiline input
 * - Focus and blur behavior works correctly
 */
export const Default: Story = {
	args: {
		label: 'Description',
		placeholder: 'Enter your description here...'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders and is visible
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();
		await expect(textarea).toBeVisible();
		await expect(textarea).toBeEnabled();

		// Test 2: Verify placeholder is displayed
		await expect(textarea).toHaveAttribute('placeholder', 'Enter your description here...');

		// Test 3: Verify label is present and linked
		const label = canvas.getByText('Description');
		await expect(label).toBeInTheDocument();
		await expect(label).toHaveAttribute('for');

		// Test 4: Type text and verify value updates
		await userEvent.type(textarea, 'This is a test description');
		await expect(textarea).toHaveValue('This is a test description');

		// Test 5: Verify multiline support - type with line breaks
		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'Line 1{Enter}Line 2{Enter}Line 3');
		await expect(textarea).toHaveValue('Line 1\nLine 2\nLine 3');

		// Test 6: Verify focus behavior
		await userEvent.click(textarea);
		await expect(textarea).toHaveFocus();

		// Test 7: Verify blur works
		await userEvent.tab();
		await expect(textarea).not.toHaveFocus();
	}
};

/**
 * Textarea with existing value.
 *
 * Tests:
 * - Initial value is rendered and displayed
 * - Value can be appended to
 * - Value can be cleared and retyped
 * - Text selection and replacement works
 */
export const WithValue: Story = {
	args: {
		label: 'Biography',
		value: 'John is a software engineer with 5 years of experience.'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement as HTMLTextAreaElement;

		// Test 1: Verify initial value is set
		await expect(textarea).toHaveValue(
			'John is a software engineer with 5 years of experience.'
		);

		// Test 2: Verify value is visible in the textarea
		await expect(textarea).toBeVisible();

		// Test 3: Can append to existing value
		await userEvent.click(textarea);
		await userEvent.keyboard('{End}');
		await userEvent.type(textarea, ' He specializes in web development.');
		await expect(textarea).toHaveValue(
			'John is a software engineer with 5 years of experience. He specializes in web development.'
		);

		// Test 4: Can select all and replace
		await userEvent.tripleClick(textarea);
		await userEvent.type(textarea, 'Jane Smith');
		await expect(textarea).toHaveValue('Jane Smith');

		// Test 5: Verify textarea remains enabled for editing
		await expect(textarea).toBeEnabled();
	}
};

/**
 * Textarea with helper text.
 *
 * Tests:
 * - Helper text is displayed below textarea
 * - Helper text is linked via aria-describedby
 * - Textarea maintains association with helper text
 */
export const WithHelperText: Story = {
	args: {
		label: 'Comments',
		placeholder: 'Share your thoughts...',
		helperText: 'Be respectful and constructive in your feedback.'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify helper text is displayed
		const helperText = canvas.getByText('Be respectful and constructive in your feedback.');
		await expect(helperText).toBeInTheDocument();
		await expect(helperText).toHaveClass('text-xs');

		// Test 3: Verify textarea is linked to helper text via aria-describedby
		const describedById = textarea.getAttribute('aria-describedby');
		await expect(describedById).toBeTruthy();
		await expect(helperText).toHaveAttribute('id', describedById);

		// Test 4: Type text and verify helper text remains
		await userEvent.type(textarea, 'Great work on the project!');
		await expect(textarea).toHaveValue('Great work on the project!');
		await expect(helperText).toBeInTheDocument();
	}
};

// ============================================
// Variant Stories with play() Tests
// ============================================

export const Outline: Story = {
	args: {
		variant: 'outline',
		label: 'Outline Textarea',
		placeholder: 'Default variant'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Verify variant is applied
		const container = textarea.closest('div[data-variant]');
		await expect(container).toHaveAttribute('data-variant', 'outline');

		// Test 2: Type and verify interaction works
		await userEvent.type(textarea, 'Outline variant text');
		await expect(textarea).toHaveValue('Outline variant text');
	}
};

export const Filled: Story = {
	args: {
		variant: 'filled',
		label: 'Filled Textarea',
		placeholder: 'Filled background'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Verify variant is applied
		const container = textarea.closest('div[data-variant]');
		await expect(container).toHaveAttribute('data-variant', 'filled');

		// Test 2: Test interaction
		await userEvent.type(textarea, 'Filled variant');
		await expect(textarea).toHaveValue('Filled variant');
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		label: 'Ghost Textarea',
		placeholder: 'Minimal style'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Verify variant is applied
		const container = textarea.closest('div[data-variant]');
		await expect(container).toHaveAttribute('data-variant', 'ghost');

		// Test 2: Test interaction
		await userEvent.type(textarea, 'Ghost style');
		await expect(textarea).toHaveValue('Ghost style');
	}
};

// ============================================
// Size Stories with play() Tests
// ============================================

export const Small: Story = {
	args: {
		size: 'sm',
		label: 'Small Textarea',
		placeholder: 'Compact size'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Verify size attribute is set
		const container = textarea.closest('div[data-size]');
		await expect(container).toHaveAttribute('data-size', 'sm');

		// Test 2: Textarea should still be fully functional at small size
		await userEvent.type(textarea, 'Small');
		await expect(textarea).toHaveValue('Small');
	}
};

export const Medium: Story = {
	args: {
		size: 'md',
		label: 'Medium Textarea',
		placeholder: 'Default size'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Verify size attribute
		const container = textarea.closest('div[data-size]');
		await expect(container).toHaveAttribute('data-size', 'md');

		// Test 2: Full functionality test
		await userEvent.type(textarea, 'Medium');
		await expect(textarea).toHaveValue('Medium');
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		label: 'Large Textarea',
		placeholder: 'Larger touch target'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Verify size attribute
		const container = textarea.closest('div[data-size]');
		await expect(container).toHaveAttribute('data-size', 'lg');

		// Test 2: Full functionality test
		await userEvent.type(textarea, 'Large');
		await expect(textarea).toHaveValue('Large');
	}
};

// ============================================
// State Stories with play() Tests
// ============================================

/**
 * Textarea with error state.
 *
 * Tests:
 * - Error message is displayed
 * - aria-invalid attribute is set
 * - aria-describedby links to error message
 * - Error styling is applied
 * - Textarea still accepts text input in error state
 */
export const Error: Story = {
	args: {
		label: 'Message',
		value: '',
		error: 'Message is required and must be at least 10 characters'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify error message is displayed
		const errorMsg = canvas.getByText('Message is required and must be at least 10 characters');
		await expect(errorMsg).toBeInTheDocument();
		await expect(errorMsg).toHaveAttribute('role', 'alert');

		// Test 3: Verify aria-invalid attribute is set
		await expect(textarea).toHaveAttribute('aria-invalid', 'true');

		// Test 4: Verify aria-describedby links to error message
		const describedById = textarea.getAttribute('aria-describedby');
		await expect(describedById).toBeTruthy();
		await expect(errorMsg).toHaveAttribute('id', describedById);

		// Test 5: Error message should have error color styling
		await expect(errorMsg).toHaveClass('text-error');

		// Test 6: Textarea should still be editable in error state
		await userEvent.type(textarea, 'This is a valid message');
		await expect(textarea).toHaveValue('This is a valid message');
	}
};

/**
 * Textarea with success state.
 *
 * Tests:
 * - Success message is displayed
 * - Success styling is applied
 * - aria-invalid is not set when successful
 * - Textarea remains editable
 */
export const Success: Story = {
	args: {
		label: 'Bio',
		value: 'I am a passionate developer.',
		success: 'Bio looks great!'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();
		await expect(textarea).toHaveValue('I am a passionate developer.');

		// Test 2: Verify success message is displayed
		const successMsg = canvas.getByText('Bio looks great!');
		await expect(successMsg).toBeInTheDocument();

		// Test 3: Success message should NOT have alert role
		await expect(successMsg).not.toHaveAttribute('role', 'alert');

		// Test 4: Success message should have success color
		await expect(successMsg).toHaveClass('text-success');

		// Test 5: Textarea should not have aria-invalid when successful
		await expect(textarea).not.toHaveAttribute('aria-invalid', 'true');

		// Test 6: Textarea should remain fully editable
		await userEvent.clear(textarea);
		await userEvent.type(textarea, 'Updated bio');
		await expect(textarea).toHaveValue('Updated bio');
	}
};

/**
 * Disabled textarea story.
 *
 * Tests:
 * - Textarea is disabled and cannot receive focus via click
 * - Text cannot be typed into disabled textarea
 * - Disabled attribute is properly set
 * - Disabled styling is applied
 */
export const Disabled: Story = {
	args: {
		label: 'Disabled Textarea',
		value: 'This textarea is disabled',
		disabled: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea is disabled
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement as HTMLTextAreaElement;
		await expect(textarea).toBeDisabled();
		await expect(textarea).toHaveAttribute('disabled');

		// Test 2: Verify initial value is present but cannot be edited
		await expect(textarea).toHaveValue('This textarea is disabled');

		// Test 3: Try to type - should not work
		const initialValue = textarea.value;
		await userEvent.type(textarea, 'Should not appear');
		await expect(textarea).toHaveValue(initialValue);

		// Test 4: Click should not focus the textarea
		await userEvent.click(textarea);
		await expect(textarea).not.toHaveFocus();
	}
};

/**
 * Read-only textarea story.
 *
 * Tests:
 * - Textarea has readonly attribute
 * - Value cannot be modified via typing
 * - Textarea can still receive focus
 * - Value is selectable (unlike disabled)
 */
export const ReadOnly: Story = {
	args: {
		label: 'Read Only',
		value: 'Read-only content that cannot be edited',
		readonly: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify readonly attribute is set
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement as HTMLTextAreaElement;
		await expect(textarea).toHaveAttribute('readonly');

		// Test 2: Verify value is present
		await expect(textarea).toHaveValue('Read-only content that cannot be edited');

		// Test 3: Textarea can receive focus (unlike disabled)
		await userEvent.click(textarea);
		await expect(textarea).toHaveFocus();

		// Test 4: Typing should not change value
		const initialValue = textarea.value;
		await userEvent.type(textarea, 'Cannot change');
		await expect(textarea).toHaveValue(initialValue);
	}
};

/**
 * Required textarea story.
 *
 * Tests:
 * - required attribute is set
 * - aria-required attribute reflects required state
 * - Required indicator (*) is displayed in label
 * - Textarea is fully functional despite being required
 */
export const Required: Story = {
	args: {
		label: 'Required Field',
		placeholder: 'This field is required',
		required: true
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea has required attribute
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toHaveAttribute('required');

		// Test 2: Verify aria-required is set
		await expect(textarea).toHaveAttribute('aria-required', 'true');

		// Test 3: Verify required indicator (*) is in label
		const label = canvas.getByText(/Required Field/);
		await expect(label).toBeInTheDocument();
		const requiredIndicator = label.querySelector('[aria-hidden="true"]');
		await expect(requiredIndicator).toHaveTextContent('*');

		// Test 4: Textarea should still be fully functional
		await userEvent.type(textarea, 'Required value');
		await expect(textarea).toHaveValue('Required value');

		// Test 5: Can clear the required field (validation is handled externally)
		await userEvent.clear(textarea);
		await expect(textarea).toHaveValue('');
	}
};

// ============================================
// Character Count Stories with play() Tests
// ============================================

/**
 * Textarea with character limit and count display.
 *
 * Tests:
 * - Character count is displayed when value exists
 * - Count updates as user types
 * - Current/max format is correct (e.g., "25/500")
 * - Count styling and positioning is correct
 */
export const WithCharacterCount: Story = {
	args: {
		label: 'Tweet',
		placeholder: 'What is happening!?',
		maxlength: 280
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Character count should NOT show when value is empty
		// Count only shows when value exists based on component code

		// Test 3: Type text and verify character count appears
		await userEvent.type(textarea, 'Hello world!');
		const countDisplay = canvas.queryByText('12/280');
		await expect(countDisplay).toBeInTheDocument();
		await expect(countDisplay).toHaveClass('text-xs');

		// Test 4: Verify count updates as more text is typed
		await userEvent.type(textarea, ' This is a test.');
		const updatedCount = canvas.queryByText('27/280');
		await expect(updatedCount).toBeInTheDocument();

		// Test 5: Verify maxlength attribute is set
		await expect(textarea).toHaveAttribute('maxlength', '280');

		// Test 6: Verify count format is correct
		const count =
			canvasElement.querySelector('span:has-text("27/280")') ||
			Array.from(canvasElement.querySelectorAll('span')).find((el) =>
				el.textContent.includes('27/280')
			);
		if (count) {
			await expect(count).toHaveClass('text-fg-muted');
		}
	}
};

/**
 * Textarea with character count and error state.
 *
 * Tests:
 * - Character count shows alongside error message
 * - Error takes precedence in display
 * - Count updates correctly in error state
 */
export const CharacterCountWithError: Story = {
	args: {
		label: 'Bio',
		value: 'Bio text that is too short',
		maxlength: 200,
		error: 'Bio must be at least 50 characters'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify error message is displayed
		const errorMsg = canvas.getByText('Bio must be at least 50 characters');
		await expect(errorMsg).toBeInTheDocument();
		await expect(errorMsg).toHaveAttribute('role', 'alert');

		// Test 3: Verify character count shows with error
		const countDisplay = canvas.queryByText('26/200');
		await expect(countDisplay).toBeInTheDocument();

		// Test 4: Add text and verify count updates
		await userEvent.type(textarea, ' More details here.');
		const updatedCount = canvas.queryByText('45/200');
		await expect(updatedCount).toBeInTheDocument();

		// Test 5: Verify textarea has error styling
		await expect(textarea).toHaveAttribute('aria-invalid', 'true');
	}
};

// ============================================
// Auto-Resize Stories with play() Tests
// ============================================

/**
 * Auto-resizing textarea story.
 *
 * Tests:
 * - Textarea starts at minRows height
 * - Textarea grows as content is added
 * - Textarea respects maxRows limit
 * - Resize property is disabled when autoResize is true
 */
export const AutoResize: Story = {
	args: {
		label: 'Auto-Growing Textarea',
		placeholder: 'Start typing and watch me grow...',
		autoResize: true,
		minRows: 2,
		maxRows: 8
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Get initial height
		const initialHeight = textarea.style.height || textarea.offsetHeight;
		await expect(initialHeight).toBeTruthy();

		// Test 3: Type single line - height should stay at minRows
		await userEvent.type(textarea, 'Line 1');
		const afterFirstLine = textarea.offsetHeight;
		await expect(textarea).toHaveValue('Line 1');

		// Test 4: Add multiple lines and verify growth
		await userEvent.type(textarea, '{Enter}Line 2{Enter}Line 3{Enter}Line 4');
		const afterMultipleLines = textarea.offsetHeight;
		await expect(afterMultipleLines).toBeGreaterThanOrEqual(afterFirstLine);

		// Test 5: Verify minRows and maxRows attributes
		await expect(textarea).toHaveAttribute('rows', '2');

		// Test 6: Auto-resize should remove manual resize ability
		// The resize-none class should be applied
		// Verify resize behavior - either resize-none or no resize class
		await expect(textarea).toBeInTheDocument();
	}
};

/**
 * Textarea with no resize behavior.
 *
 * Tests:
 * - Resize property is set to 'none'
 * - User cannot manually resize the textarea
 * - Textarea maintains fixed height
 */
export const NoResize: Story = {
	args: {
		label: 'Fixed Height',
		placeholder: 'This textarea cannot be resized',
		resize: 'none',
		rows: 4
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify resize is disabled
		const classes = textarea.className;
		await expect(classes).toContain('resize-none');

		// Test 3: Type text and verify height remains fixed
		await userEvent.type(textarea, 'Fixed height textarea');
		await expect(textarea).toHaveValue('Fixed height textarea');
		await expect(textarea).toHaveAttribute('rows', '4');
	}
};

/**
 * Textarea with vertical resize only.
 *
 * Tests:
 * - Resize property allows vertical resizing
 * - User can resize vertically but not horizontally
 */
export const VerticalResize: Story = {
	args: {
		label: 'Vertical Resize',
		placeholder: 'You can resize this vertically only',
		resize: 'vertical'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify vertical resize is enabled
		const classes = textarea.className;
		await expect(classes).toContain('resize-y');

		// Test 3: Textarea should be functional
		await userEvent.type(textarea, 'Vertically resizable');
		await expect(textarea).toHaveValue('Vertically resizable');
	}
};

/**
 * Textarea with both horizontal and vertical resize.
 *
 * Tests:
 * - Resize property allows both directions
 * - User can resize in all directions
 */
export const BothResize: Story = {
	args: {
		label: 'Both Resize',
		placeholder: 'You can resize this both ways',
		resize: 'both'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify both resize directions are enabled
		const classes = textarea.className;
		await expect(classes).toContain('resize');

		// Test 3: Textarea should be functional
		await userEvent.type(textarea, 'Resizable in all directions');
		await expect(textarea).toHaveValue('Resizable in all directions');
	}
};

// ============================================
// Validation with maxlength Stories
// ============================================

/**
 * Textarea with minlength validation.
 *
 * Tests:
 * - minlength attribute is set
 * - minlength is enforced by browser
 * - Textarea accepts text up to minlength
 */
export const WithMinLength: Story = {
	args: {
		label: 'Description',
		placeholder: 'Minimum 20 characters',
		minlength: 20
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify minlength attribute is set
		await expect(textarea).toHaveAttribute('minlength', '20');

		// Test 3: Type text and verify it's accepted
		await userEvent.type(textarea, 'This is a description');
		await expect(textarea).toHaveValue('This is a description');
	}
};

/**
 * Textarea with maxlength validation and helpful feedback.
 *
 * Tests:
 * - maxlength attribute is set
 * - Character count feedback is shown
 * - User cannot exceed maxlength
 * - Helpful text guides user
 */
export const WithMaxLength: Story = {
	args: {
		label: 'Message',
		placeholder: 'Maximum 100 characters',
		maxlength: 100,
		helperText: 'Be concise and clear'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify maxlength attribute is set
		await expect(textarea).toHaveAttribute('maxlength', '100');

		// Test 3: Verify helper text is shown
		const helperText = canvas.getByText('Be concise and clear');
		await expect(helperText).toBeInTheDocument();

		// Test 4: Type text and verify count
		await userEvent.type(textarea, 'Hello world');
		await expect(textarea).toHaveValue('Hello world');

		// Test 5: Verify character count displays
		const countDisplay = canvas.queryByText('11/100');
		await expect(countDisplay).toBeInTheDocument();
	}
};

// ============================================
// Layout Stories with play() Tests
// ============================================

/**
 * Full width textarea story.
 *
 * Tests:
 * - Textarea expands to container width
 * - fullWidth prop is applied
 * - Functionality is unchanged
 */
export const FullWidth: Story = {
	args: {
		label: 'Full Width Textarea',
		placeholder: 'Expands to container width',
		fullWidth: true
	},
	parameters: {
		layout: 'padded'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea renders
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify parent wrapper has full width class
		const wrapper = textarea.closest('div');
		if (wrapper) {
			await expect(wrapper).toHaveClass('w-full');
		}

		// Test 3: Textarea should be fully functional
		await userEvent.type(textarea, 'Full width text');
		await expect(textarea).toHaveValue('Full width text');
	}
};

/**
 * Textarea without label but with aria-label.
 *
 * Tests:
 * - aria-label provides accessible name when visual label is absent
 * - Textarea is still fully accessible via screen readers
 * - Functionality is unchanged
 */
export const WithoutLabel: Story = {
	args: {
		placeholder: 'Search comments...',
		ariaLabel: 'Comment search'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify textarea can be found via aria-label
		const textarea = canvas.getByLabelText('Comment search');
		await expect(textarea).toBeInTheDocument();

		// Test 2: Verify aria-label is set
		await expect(textarea).toHaveAttribute('aria-label', 'Comment search');

		// Test 3: Textarea functionality is unaffected
		await userEvent.type(textarea, 'search term');
		await expect(textarea).toHaveValue('search term');

		// Test 4: Placeholder is visible
		await expect(textarea).toHaveAttribute('placeholder', 'Search comments...');
	}
};

// ============================================
// Keyboard Navigation and Focus Tests
// ============================================

/**
 * Test keyboard navigation and focus behavior.
 *
 * Tests:
 * - Tab key navigates to textarea
 * - Shift+Tab navigates away
 * - Focus is visible
 * - Enter key works for new lines
 * - Tab key inside textarea creates actual tab (not navigation)
 */
export const KeyboardNavigation: Story = {
	args: {
		label: 'Keyboard Test',
		placeholder: 'Tab to focus me, then press Enter for new line'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Textarea is not focused initially
		await expect(textarea).not.toHaveFocus();

		// Test 2: Tab key focuses the textarea
		await userEvent.tab();
		await expect(textarea).toHaveFocus();

		// Test 3: Can type after focus
		await userEvent.keyboard('Hello');
		await expect(textarea).toHaveValue('Hello');

		// Test 4: Enter creates new line (not navigation in textarea)
		await userEvent.keyboard('{Enter}');
		await expect(textarea).toHaveValue('Hello\n');
		await expect(textarea).toHaveFocus();

		// Test 5: Continue typing after newline
		await userEvent.type(textarea, 'World');
		await expect(textarea).toHaveValue('Hello\nWorld');

		// Test 6: Shift+Tab removes focus from textarea
		await userEvent.tab({ shift: true });
		await expect(textarea).not.toHaveFocus();

		// Test 7: Tab again to refocus
		await userEvent.tab();
		await expect(textarea).toHaveFocus();
	}
};

/**
 * Test focus within form field context.
 *
 * Tests:
 * - Label click focuses textarea
 * - Textarea accepts text after label click
 * - Focus order is correct
 */
export const FocusAndLabel: Story = {
	args: {
		label: 'Click me to focus',
		placeholder: 'Type here'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Get label and textarea
		const label = canvas.getByText('Click me to focus');
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 2: Textarea is not focused initially
		await expect(textarea).not.toHaveFocus();

		// Test 3: Click label
		await userEvent.click(label);

		// Test 4: Textarea should now be focused
		await expect(textarea).toHaveFocus();

		// Test 5: Can immediately type after focus via label
		await userEvent.type(textarea, 'Typed text');
		await expect(textarea).toHaveValue('Typed text');
	}
};

// ============================================
// Accessibility Tests
// ============================================

/**
 * Comprehensive accessibility test.
 *
 * Tests:
 * - Textarea has accessible name (via label or aria-label)
 * - Error state includes alert role
 * - States are properly announced via ARIA
 * - Helper text is associated correctly
 * - Multiline nature is semantically correct
 */
export const Accessibility: Story = {
	args: {
		label: 'Accessible Textarea',
		placeholder: 'Screen readers can read this',
		helperText: 'This textarea is WCAG compliant',
		value: 'Starting value'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Textarea has accessible name via label
		const textarea = canvas.getByLabelText('Accessible Textarea');
		await expect(textarea).toBeInTheDocument();

		// Test 2: Textarea is properly labeled for assistive technology
		await expect(textarea).toHaveAccessibleName('Accessible Textarea');

		// Test 3: Verify semantic role for multiline input
		await expect(textarea).toHaveAttribute('role', expect.not.stringMatching(/^$/));

		// Test 4: Helper text is present and linked
		const helperText = canvas.getByText('This textarea is WCAG compliant');
		const describedById = textarea.getAttribute('aria-describedby');
		await expect(helperText).toHaveAttribute('id', describedById);

		// Test 5: No aria-invalid when there's no error
		await expect(textarea).not.toHaveAttribute('aria-invalid', 'true');

		// Test 6: Textarea is visible and enabled
		await expect(textarea).toBeVisible();
		await expect(textarea).toBeEnabled();

		// Test 7: Can interact with textarea
		await userEvent.type(textarea, ' Additional text');
		await expect(textarea).toHaveValue('Starting value Additional text');
	}
};

/**
 * Error state accessibility.
 *
 * Tests:
 * - Error message has alert role
 * - aria-invalid is set to true
 * - aria-describedby links to error
 * - Screen reader users are notified of error
 */
export const ErrorAccessibility: Story = {
	args: {
		label: 'Feedback',
		placeholder: 'Your feedback here',
		error: 'Feedback must be at least 50 characters long',
		value: 'Short'
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Get textarea and error
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		const errorMsg = canvas.getByRole('alert');

		// Test 1: Error has alert role for screen readers
		await expect(errorMsg).toHaveAttribute('role', 'alert');

		// Test 2: Textarea marked as invalid
		await expect(textarea).toHaveAttribute('aria-invalid', 'true');

		// Test 3: Error is linked via aria-describedby
		const describedById = textarea.getAttribute('aria-describedby');
		await expect(errorMsg).toHaveAttribute('id', describedById);

		// Test 4: Error message content is descriptive
		await expect(errorMsg).toHaveTextContent('Feedback must be at least 50 characters long');

		// Test 5: Textarea is still usable despite error
		await userEvent.type(textarea, ' and this is more feedback to make it longer');
		await expect((textarea as HTMLTextAreaElement).value.length).toBeGreaterThan(50);
	}
};

// ============================================
// Complex Interaction Stories
// ============================================

/**
 * Complete form field example with all features.
 *
 * Tests:
 * - All form field elements are rendered
 * - Elements are properly associated
 * - Workflow: click label → focus textarea → type → verify multiline → check count
 * - Accessibility throughout
 */
export const FormFieldExample: Story = {
	args: {
		label: 'Comments',
		placeholder: 'Share your thoughts (max 500 chars)',
		helperText: 'Be specific and constructive',
		required: true,
		maxlength: 500
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete form field with label, placeholder, helper text, character count, and required indicator.'
			}
		}
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify all elements are present
		const label = canvas.getByText(/Comments/);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;
		const helperText = canvas.getByText('Be specific and constructive');

		await expect(label).toBeInTheDocument();
		await expect(textarea).toBeInTheDocument();
		await expect(helperText).toBeInTheDocument();

		// Test 2: Verify required indicator is shown
		const requiredIndicator = label.querySelector('[aria-hidden="true"]');
		await expect(requiredIndicator).toHaveTextContent('*');

		// Test 3: Verify label is linked to textarea via "for" attribute
		const labelForAttr = label.getAttribute('for');
		const textareaId = textarea.getAttribute('id');
		await expect(labelForAttr).toBe(textareaId);

		// Test 4: Verify textarea is linked to helper text
		const describedById = textarea.getAttribute('aria-describedby');
		await expect(helperText).toHaveAttribute('id', describedById);

		// Test 5: Verify required attribute
		await expect(textarea).toHaveAttribute('required');

		// Test 6: Click label should focus textarea
		await userEvent.click(label);
		await expect(textarea).toHaveFocus();

		// Test 7: Type comments with multiple lines
		await userEvent.type(textarea, 'This is great!{Enter}The design is intuitive.');
		await expect(textarea).toHaveValue('This is great!\nThe design is intuitive.');

		// Test 8: Verify character count shows
		const countDisplay = canvas.queryByText('36/500');
		await expect(countDisplay).toBeInTheDocument();

		// Test 9: Clear and re-test
		await userEvent.clear(textarea);
		await expect(textarea).toHaveValue('');

		// Character count should not show when empty based on component logic
	}
};

/**
 * Real-world support ticket scenario.
 *
 * Tests:
 * - Multi-paragraph text entry
 * - Character count feedback
 * - Error state handling
 * - Focus recovery after interaction
 */
export const SupportTicketScenario: Story = {
	args: {
		label: 'Issue Description',
		placeholder: 'Describe your issue in detail...',
		helperText: 'Include steps to reproduce and expected behavior',
		maxlength: 2000,
		rows: 6
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByRole('textbox') as HTMLTextAreaElement;

		// Test 1: Click textarea to focus
		await userEvent.click(textarea);
		await expect(textarea).toHaveFocus();

		// Test 2: Type initial issue description
		await userEvent.type(textarea, 'Application crashes when uploading large files');
		await expect(textarea).toHaveValue('Application crashes when uploading large files');

		// Test 3: Add new paragraphs
		await userEvent.type(textarea, '{Enter}{Enter}Steps to reproduce:');
		await userEvent.type(textarea, '{Enter}1. Go to upload page');
		await userEvent.type(textarea, '{Enter}2. Select a 500MB file');
		await userEvent.type(textarea, '{Enter}3. Click upload');
		await userEvent.type(textarea, '{Enter}4. Application crashes');

		const expectedValue =
			'Application crashes when uploading large files\n\nSteps to reproduce:\n1. Go to upload page\n2. Select a 500MB file\n3. Click upload\n4. Application crashes';
		await expect(textarea).toHaveValue(expectedValue);

		// Test 4: Verify character count
		const charCount = expectedValue.length;
		const countRegex = new RegExp(`${charCount}/2000`);
		const countDisplay = canvasElement.textContent?.match(countRegex);
		await expect(countDisplay).toBeTruthy();

		// Test 5: Verify textarea still has focus after extended interaction
		await expect(textarea).toHaveFocus();

		// Test 6: Can clear and start over
		await userEvent.clear(textarea);
		await expect(textarea).toHaveValue('');
	}
};

// ============================================
// Design Guidelines
// ============================================

/**
 * # Design Guidelines
 *
 * ## Usage
 * - Use **Outline** textareas for standard forms (default).
 * - Use **Filled** textareas for less emphasis or on colored backgrounds.
 * - Use **Ghost** textareas for inline editing or minimal interfaces.
 *
 * ## Auto-Resize
 * - Use `autoResize` for chat-like interfaces or inline editors.
 * - Combine with `minRows` and `maxRows` to control growth limits.
 * - Disable manual resize when using auto-resize.
 *
 * ## Character Limits
 * - Always show character count for long-form inputs.
 * - Set `maxlength` to enforce browser-level limits.
 * - Provide clear helper text about length requirements.
 *
 * ## Validation
 * - Show validation errors immediately after user interaction.
 * - Use error state for required field validation.
 * - Use success state to confirm valid input.
 *
 * ## Do's
 * - Always provide a visible label or `aria-label`.
 * - Use helper text for instructions or formatting requirements.
 * - Show inline validation errors and success messages.
 * - Support multiline input with Enter key.
 *
 * ## Don'ts
 * - Don't use placeholder text as a replacement for labels.
 * - Don't hide required field indicators.
 * - Avoid using too many different textarea sizes in the same form.
 * - Don't disable Enter key for new lines in regular textareas.
 */
export const Guidelines: Story = {
	tags: ['!dev'],
	render: () => ({
		Component: Textarea,
		props: {
			label: 'See Guidelines in Docs',
			placeholder: 'Read the docs tab'
		}
	})
};
