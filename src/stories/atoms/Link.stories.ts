import type { Meta, StoryObj } from '@storybook/sveltekit';
import Link from '$lib/components/atoms/Link.svelte';

const meta = {
	title: 'Atoms/Link',
	component: Link,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `# Link Component

Apple-style link component with multiple variants. Supports icons and different visual styles.

## Features
- Multiple variants (default, cta, subtle)
- Icon support
- Accessible with ARIA labels
- Target control for new tabs
- Hover and focus states`
			}
		}
	},
	argTypes: {
		href: {
			control: 'text',
			description: 'Link destination URL'
		},
		variant: {
			control: 'select',
			options: ['default', 'cta', 'subtle'],
			description: 'Visual style variant'
		},
		target: {
			control: 'select',
			options: ['_self', '_blank'],
			description: 'Link target (open in same or new tab)'
		}
	}
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '#',
		variant: 'default',
		children: 'Learn more'
	}
};

export const CTA: Story = {
	args: {
		href: '#',
		variant: 'cta',
		children: 'Buy now'
	}
};

export const Subtle: Story = {
	args: {
		href: '#',
		variant: 'subtle',
		children: 'View details'
	}
};
