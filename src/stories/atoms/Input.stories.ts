import type { Meta, StoryObj } from '@storybook/sveltekit';
import Input from '@/lib/components/atoms/Input.svelte';

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
// Basic Stories
// ============================================

export const Default: Story = {
	args: {
		label: 'Label',
		placeholder: 'Enter text...'
	}
};

export const WithValue: Story = {
	args: {
		label: 'Name',
		value: 'John Doe'
	}
};

export const WithHelperText: Story = {
	args: {
		label: 'Email',
		type: 'email',
		placeholder: 'you@example.com',
		helperText: 'We will never share your email.'
	}
};

// ============================================
// Variant Stories
// ============================================

export const Outline: Story = {
	args: {
		variant: 'outline',
		label: 'Outline Input',
		placeholder: 'Default variant'
	}
};

export const Filled: Story = {
	args: {
		variant: 'filled',
		label: 'Filled Input',
		placeholder: 'Filled background'
	}
};

export const Ghost: Story = {
	args: {
		variant: 'ghost',
		label: 'Ghost Input',
		placeholder: 'Minimal style'
	}
};

// ============================================
// Size Stories
// ============================================

export const Small: Story = {
	args: {
		size: 'sm',
		label: 'Small Input',
		placeholder: 'Compact size'
	}
};

export const Medium: Story = {
	args: {
		size: 'md',
		label: 'Medium Input',
		placeholder: 'Default size'
	}
};

export const Large: Story = {
	args: {
		size: 'lg',
		label: 'Large Input',
		placeholder: 'Larger touch target'
	}
};

// ============================================
// State Stories
// ============================================

export const Error: Story = {
	args: {
		label: 'Email',
		type: 'email',
		value: 'invalid-email',
		error: 'Please enter a valid email address'
	}
};

export const Success: Story = {
	args: {
		label: 'Username',
		value: 'johndoe',
		success: 'Username is available!'
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Input',
		value: 'Cannot edit this',
		disabled: true
	}
};

export const ReadOnly: Story = {
	args: {
		label: 'Read Only',
		value: 'Read-only content',
		readonly: true
	}
};

export const Required: Story = {
	args: {
		label: 'Required Field',
		placeholder: 'This field is required',
		required: true
	}
};

// ============================================
// Type Stories
// ============================================

export const Password: Story = {
	args: {
		type: 'password',
		label: 'Password',
		placeholder: 'Enter your password'
	}
};

export const Email: Story = {
	args: {
		type: 'email',
		label: 'Email Address',
		placeholder: 'you@example.com'
	}
};

export const Number: Story = {
	args: {
		type: 'number',
		label: 'Quantity',
		placeholder: '0',
		min: 0,
		max: 100
	}
};

export const Search: Story = {
	args: {
		type: 'search',
		label: 'Search',
		placeholder: 'Search...'
	}
};

export const Date: Story = {
	args: {
		type: 'date',
		label: 'Birth Date'
	}
};

// ============================================
// Layout Stories
// ============================================

export const FullWidth: Story = {
	args: {
		label: 'Full Width Input',
		placeholder: 'Expands to container width',
		fullWidth: true
	},
	parameters: {
		layout: 'padded'
	}
};

export const WithoutLabel: Story = {
	args: {
		placeholder: 'Search...',
		ariaLabel: 'Search input'
	}
};

// ============================================
// Validation Examples
// ============================================

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
