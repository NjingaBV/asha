import type { Meta, StoryObj } from '@storybook/sveltekit';
import Button from '@/lib/components/atoms/Button.svelte';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Button Component

A versatile, accessible button component that supports multiple variants, sizes, and states.

## Key Features
- **Multiple Variants**: primary, ghost, outline, solid for different visual styles
- **Flexible Sizing**: sm, md, lg sizes for various contexts
- **Rich States**: loading, disabled, and focus states with proper visual feedback
- **Icon Support**: Built-in slots for icons before and after text
- **Accessibility**: Full keyboard support, ARIA labels, and focus indicators
- **Link Support**: Can render as &lt;a&gt; tag when href is provided
- **Type Support**: Supports button, submit, and reset types

## Use Cases
- Call-to-action buttons in forms
- Navigation links styled as buttons
- Submit buttons in forms with loading states
- Icon buttons with optional text
- Full-width button groups
- Disabled interactive states

## Best Practices
- Use semantic type attributes (submit for form submissions)
- Provide loading feedback for async operations
- Use icon slots for visual emphasis
- Ensure sufficient color contrast
- Use aria-label for icon-only buttons
- Keep button text concise and actionable
				`
			}
		}
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['primary', 'ghost', 'outline', 'solid'],
			description: 'Visual style variant of the button (primary, ghost, outline, solid)'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Size of the button (sm: small, md: medium, lg: large)'
		},
		tone: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'neutral'],
			description: 'Color tone/theme of the button'
		},
		type: {
			control: { type: 'select' },
			options: ['button', 'submit', 'reset'],
			description: 'HTML button type (button, submit, reset)'
		},
		disabled: {
			control: 'boolean',
			description: 'Disable the button and prevent interactions'
		},
		loading: {
			control: 'boolean',
			description: 'Show loading spinner and disable interaction during async operations'
		},
		fullWidth: {
			control: 'boolean',
			description: 'Make button take full width of its container'
		},
		rounded: {
			control: 'boolean',
			description: 'Apply rounded corners (border-radius)'
		},
		href: {
			control: 'text',
			description: 'URL for navigation (renders as &lt;a&gt; tag instead of &lt;button&gt;)'
		}
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default button
export const Default: Story = {
	args: {
		variant: 'primary',
		size: 'md',
		disabled: false,
		loading: false,
		children: 'Click me'
	}
};

// Variants
export const Ghost: Story = {
	args: {
		...Default.args,
		variant: 'ghost',
		children: 'Ghost Button'
	}
};

export const Outline: Story = {
	args: {
		...Default.args,
		variant: 'outline',
		children: 'Outline Button'
	}
};

export const Solid: Story = {
	args: {
		...Default.args,
		variant: 'solid',
		children: 'Solid Button'
	}
};

// Sizes
export const Small: Story = {
	args: {
		...Default.args,
		size: 'sm',
		children: 'Small'
	}
};

export const Large: Story = {
	args: {
		...Default.args,
		size: 'lg',
		children: 'Large'
	}
};

// Tones
export const Secondary: Story = {
	args: {
		...Default.args,
		tone: 'secondary',
		children: 'Secondary Button'
	}
};

export const Neutral: Story = {
	args: {
		...Default.args,
		tone: 'neutral',
		children: 'Neutral Button'
	}
};

// States
export const Disabled: Story = {
	args: {
		...Default.args,
		disabled: true,
		children: 'Disabled'
	}
};

export const Loading: Story = {
	args: {
		...Default.args,
		loading: true,
		children: 'Loading...'
	}
};

// Shapes
export const Rounded: Story = {
	args: {
		...Default.args,
		rounded: true,
		children: 'Rounded Pill'
	}
};

// Link button
export const AsLink: Story = {
	args: {
		...Default.args,
		href: '#',
		children: 'Link Button'
	}
};

// Full width
export const FullWidth: Story = {
	args: {
		...Default.args,
		fullWidth: true,
		children: 'Full Width Button'
	}
};

// Button types
export const Submit: Story = {
	args: {
		...Default.args,
		type: 'submit',
		children: 'Submit'
	}
};

export const Reset: Story = {
	args: {
		...Default.args,
		type: 'reset',
		children: 'Reset'
	}
};

// Custom color
export const CustomColor: Story = {
	args: {
		...Default.args,
		color: '#ff6b6b',
		children: 'Custom Color'
	}
};
