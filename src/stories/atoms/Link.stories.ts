import type { Meta, StoryObj } from '@storybook/sveltekit';
import Link from '$lib/components/atoms/Link.svelte';

const meta = {
	title: 'Atoms/Link',
	component: Link,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Link Component

An accessible hyperlink component with Apple-inspired styling and smooth transitions.

## Key Features
- **Multiple Variants**: default, subtle, primary, underline
- **Sizes**: sm, md, lg for different contexts
- **External Links**: Automatic external link icon and rel attributes
- **States**: disabled, hover, focus with clear visual feedback
- **Icon Support**: Left and right icon slots
- **Accessibility**: Full keyboard support, proper ARIA attributes

## Best Practices
- Use descriptive link text (avoid "click here")
- Indicate external links clearly
- Ensure sufficient color contrast
- Make interactive area large enough (min 44x44px)
- Use rel="noopener noreferrer" for external links (automatic)

## Accessibility
- Keyboard accessible (Tab, Enter)
- Focus states clearly visible
- ARIA attributes for disabled state
- External links announced to screen readers
				`
			}
		}
	},
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: ['default', 'subtle', 'primary', 'underline'],
			description: 'Link style variant'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Link size'
		},
		external: {
			control: 'boolean',
			description: 'External link (opens in new tab)'
		},
		disabled: {
			control: 'boolean',
			description: 'Disable link'
		}
	}
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default link
export const Default: Story = {
	args: {
		href: '/about',
		children: 'About Us'
	}
};

// Variants
export const Subtle: Story = {
	args: {
		href: '#',
		variant: 'subtle',
		children: 'Subtle Link'
	}
};

export const Primary: Story = {
	args: {
		href: '#',
		variant: 'primary',
		children: 'Primary Link'
	}
};

export const Underline: Story = {
	args: {
		href: '#',
		variant: 'underline',
		children: 'Underlined Link'
	}
};

// Sizes
export const Small: Story = {
	args: {
		href: '#',
		size: 'sm',
		children: 'Small Link'
	}
};

export const Large: Story = {
	args: {
		href: '#',
		size: 'lg',
		children: 'Large Link'
	}
};

// External link
export const External: Story = {
	args: {
		href: 'https://apple.com',
		external: true,
		children: 'Visit Apple'
	}
};

export const ExternalSubtle: Story = {
	args: {
		href: 'https://github.com',
		external: true,
		variant: 'subtle',
		children: 'GitHub'
	}
};

// Disabled
export const Disabled: Story = {
	args: {
		href: '#',
		disabled: true,
		children: 'Disabled Link'
	}
};

// Download link
export const Download: Story = {
	args: {
		href: '/documents/report.pdf',
		download: 'report.pdf',
		children: 'Download Report'
	}
};

// In text context
export const InParagraph: Story = {
	render: (args) => ({
		Component: Link,
		...args
	}),
	args: {
		href: '#',
		variant: 'default',
		children: 'this link'
	},
	decorators: [
		(story: any) => ({
			Component: story,
			template: `
				<p class="text-text max-w-md">
					This is a paragraph with {story} embedded in it. Links should be clearly 
					visible and accessible within text content.
				</p>
			`
		})
	]
};

// Dark mode
export const DarkMode: Story = {
	args: {
		href: '#',
		children: 'Dark Mode Link'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};
