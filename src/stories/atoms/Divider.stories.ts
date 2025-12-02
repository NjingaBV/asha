import type { Meta, StoryObj } from '@storybook/sveltekit';
import Divider from '$lib/components/atoms/Divider.svelte';

const meta = {
	title: 'Atoms/Divider',
	component: Divider,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
# Divider Component

A simple, accessible separator component for visually dividing content sections.

## Key Features
- **Orientations**: horizontal (default) and vertical
- **Variants**: solid, dashed, dotted line styles
- **Optional Label**: Can include centered text
- **Spacing Control**: sm, md, lg spacing options
- **Accessibility**: Proper ARIA separator role

## Best Practices
- Use to separate distinct sections of content
- Consider spacing in relation to surrounding content
- Use labels sparingly for clarity
- Vertical dividers work best in flex/grid layouts

## Accessibility
- Uses proper role="separator"
- Includes aria-orientation attribute
- Labels are properly semantic
				`
			}
		}
	},
	argTypes: {
		orientation: {
			control: { type: 'select' },
			options: ['horizontal', 'vertical'],
			description: 'Divider orientation'
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'dashed', 'dotted'],
			description: 'Border style'
		},
		spacing: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Spacing around divider'
		}
	}
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default divider
export const Default: Story = {
	args: {}
};

// Variants
export const Solid: Story = {
	args: {
		variant: 'solid'
	}
};

export const Dashed: Story = {
	args: {
		variant: 'dashed'
	}
};

export const Dotted: Story = {
	args: {
		variant: 'dotted'
	}
};

// With label
export const WithLabel: Story = {
	args: {
		label: 'OR'
	}
};

export const WithLabelLong: Story = {
	args: {
		label: 'Continue with'
	}
};

// Spacing
export const SmallSpacing: Story = {
	args: {
		spacing: 'sm'
	}
};

export const LargeSpacing: Story = {
	args: {
		spacing: 'lg'
	}
};

// Vertical divider
export const Vertical: Story = {
	args: {
		orientation: 'vertical'
	},
	decorators: [
		(story: any) => ({
			Component: story,
			template: `
				<div class="flex items-center gap-4" style="height: 100px;">
					<span>Left</span>
					{story}
					<span>Right</span>
				</div>
			`
		})
	]
};

export const VerticalDashed: Story = {
	args: {
		orientation: 'vertical',
		variant: 'dashed'
	},
	decorators: [
		(story: any) => ({
			Component: story,
			template: `
				<div class="flex items-center gap-4" style="height: 100px;">
					<span>Item 1</span>
					{story}
					<span>Item 2</span>
					{story}
					<span>Item 3</span>
				</div>
			`
		})
	]
};

// In content example
export const InContent: Story = {
	render: () => ({
		Component: Divider
	}),
	decorators: [
		(story: any) => ({
			Component: story,
			template: `
				<div class="max-w-2xl">
					<h2 class="text-2xl font-bold mb-4">Section 1</h2>
					<p class="text-text-muted mb-4">
						This is the first section of content with some interesting information.
					</p>
					{story}
					<h2 class="text-2xl font-bold mb-4">Section 2</h2>
					<p class="text-text-muted">
						This is the second section, clearly separated from the first.
					</p>
				</div>
			`
		})
	]
};

// Login form example
export const LoginForm: Story = {
	render: () => ({
		Component: Divider,
		props: {
			label: 'OR'
		}
	}),
	decorators: [
		(story: any) => ({
			Component: story,
			template: `
				<div class="max-w-md space-y-4">
					<button class="w-full px-4 py-2 bg-primary text-white rounded-md">
						Sign in with Email
					</button>
					{story}
					<button class="w-full px-4 py-2 border border-border rounded-md">
						Continue with Google
					</button>
				</div>
			`
		})
	]
};

// Dark mode
export const DarkMode: Story = {
	args: {
		label: 'Dark Theme'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};
