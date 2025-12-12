import type { Meta, StoryObj } from '@storybook/sveltekit';
import NavLink from '$lib/components/molecules/NavLink.svelte';

const meta = {
	title: 'Molecules/NavLink',
	component: NavLink,
	tags: ['autodocs'],
	argTypes: {
		href: {
			control: 'text',
			description: 'Link destination'
		},
		variant: {
			control: { type: 'select' },
			options: ['default', 'subtle', 'pill'],
			description: 'Visual style variant'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Link size'
		},
		active: {
			control: 'boolean',
			description: 'Active/selected state'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state'
		},
		target: {
			control: { type: 'select' },
			options: ['_blank', '_self', '_parent', '_top'],
			description: 'Link target'
		},
		onclick: {
			action: 'clicked',
			description: 'Click handler'
		}
	}
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '/about',
		variant: 'default',
		size: 'md',
		active: false,
		disabled: false
	}
};

export const Active: Story = {
	args: {
		href: '/dashboard',
		variant: 'default',
		size: 'md',
		active: true
	}
};

export const Subtle: Story = {
	args: {
		href: '/settings',
		variant: 'subtle',
		size: 'md',
		active: false
	}
};

export const SubtleActive: Story = {
	args: {
		href: '/profile',
		variant: 'subtle',
		size: 'md',
		active: true
	}
};

export const Pill: Story = {
	args: {
		href: '/features',
		variant: 'pill',
		size: 'md',
		active: false
	}
};

export const PillActive: Story = {
	args: {
		href: '/pricing',
		variant: 'pill',
		size: 'md',
		active: true
	}
};

export const Small: Story = {
	args: {
		href: '/help',
		variant: 'default',
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		href: '/contact',
		variant: 'default',
		size: 'lg'
	}
};

export const Disabled: Story = {
	args: {
		href: '/admin',
		variant: 'default',
		size: 'md',
		disabled: true
	}
};

export const ExternalLink: Story = {
	args: {
		href: 'https://example.com',
		variant: 'default',
		size: 'md',
		target: '_blank'
	}
};
