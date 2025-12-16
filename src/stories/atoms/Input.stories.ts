import type { Meta, StoryObj } from '@storybook/sveltekit';
import Input from '$lib/components/atoms/Input.svelte';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
# Input Component

A comprehensive, accessible text input component following Apple design principles.

## Key Features
- **Multiple Types**: text, email, password, url, tel, number, search
- **Sizes**: sm, md, lg for different contexts
- **States**: disabled, readonly, invalid with proper visual feedback
- **Validation**: Built-in error messages and hints
- **Icons**: Support for left and right icons
- **Accessibility**: Full WCAG 2.2 AA compliance with ARIA attributes
- **Real-time & Change Events**: Both oninput and onchange handlers

## Best Practices
- Always provide labels for accessibility
- Use appropriate input types for better mobile keyboards
- Show clear error messages for validation failures
- Use hints to guide users before they make mistakes
- Mark required fields clearly
- Use disabled sparingly - prefer readonly for display-only fields

## Accessibility
- Proper label association with unique IDs
- ARIA attributes (aria-required, aria-invalid, aria-describedby)
- Error messages announced to screen readers with role="alert"
- Focus states clearly visible
- Keyboard accessible
				`
			}
		}
	},
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['text', 'email', 'password', 'url', 'tel', 'number', 'search'],
			description: 'Input type'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Input size'
		},
		disabled: {
			control: 'boolean',
			description: 'Disable input'
		},
		readonly: {
			control: 'boolean',
			description: 'Read-only state'
		},
		required: {
			control: 'boolean',
			description: 'Required field'
		},
		invalid: {
			control: 'boolean',
			description: 'Show invalid state'
		},
		fullWidth: {
			control: 'boolean',
			description: 'Full width input'
		}
	}
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
	args: {
		label: 'Email',
		type: 'email',
		placeholder: 'you@example.com',
		size: 'md'
	}
};

// Sizes
export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm',
		label: 'Small Input'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg',
		label: 'Large Input'
	}
};

// Types
export const Password: Story = {
	args: {
		label: 'Password',
		type: 'password',
		placeholder: 'Enter your password',
		required: true
	}
};

export const Number: Story = {
	args: {
		label: 'Age',
		type: 'number',
		placeholder: '25',
		min: 0,
		max: 120
	}
};

export const Search: Story = {
	args: {
		label: 'Search',
		type: 'search',
		placeholder: 'Search...'
	}
};

export const Tel: Story = {
	args: {
		label: 'Phone',
		type: 'tel',
		placeholder: '+1 (555) 123-4567'
	}
};

export const URL: Story = {
	args: {
		label: 'Website',
		type: 'url',
		placeholder: 'https://example.com'
	}
};

// States
export const WithValue: Story = {
	args: {
		label: 'Username',
		value: 'john.doe',
		placeholder: 'Enter username'
	}
};

export const Required: Story = {
	args: {
		label: 'Email',
		type: 'email',
		required: true,
		placeholder: 'Required field'
	}
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Input',
		value: 'Cannot edit',
		disabled: true
	}
};

export const Readonly: Story = {
	args: {
		label: 'Read-only Input',
		value: 'This is read-only',
		readonly: true
	}
};

export const Invalid: Story = {
	args: {
		label: 'Email',
		type: 'email',
		value: 'invalid-email',
		invalid: true,
		error: 'Please enter a valid email address'
	}
};

export const WithError: Story = {
	args: {
		label: 'Username',
		value: 'ab',
		error: 'Username must be at least 3 characters'
	}
};

export const WithHint: Story = {
	args: {
		label: 'Password',
		type: 'password',
		hint: 'Must be at least 8 characters with uppercase, lowercase, and numbers'
	}
};

// Full width
export const FullWidth: Story = {
	args: {
		label: 'Full Width Input',
		fullWidth: true,
		placeholder: 'This input takes full width'
	}
};

// No label (with aria-label)
export const NoLabel: Story = {
	args: {
		type: 'search',
		placeholder: 'Search...',
		ariaLabel: 'Search'
	}
};

// With maxlength
export const WithMaxLength: Story = {
	args: {
		label: 'Username',
		maxlength: 20,
		hint: 'Maximum 20 characters'
	}
};

// Dark mode example
export const DarkMode: Story = {
	args: {
		label: 'Dark Mode Input',
		placeholder: 'Enter text...'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	},
	decorators: [
		(story: any) => ({
			Component: story,
			props: {
				style: 'color-scheme: dark;'
			}
		})
	]
};
