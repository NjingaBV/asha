import type { Meta, StoryObj } from '@storybook/sveltekit';
import NavItem from '$lib/components/molecules/NavItem.svelte';

const meta = {
	title: 'Molecules/NavItem',
	component: NavItem,
	tags: ['autodocs'],
	argTypes: {
		href: {
			control: 'text',
			description: 'Link destination (renders as <a> if provided)'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Item size'
		},
		active: {
			control: 'boolean',
			description: 'Active state'
		},
		disabled: {
			control: 'boolean',
			description: 'Disabled state'
		},
		badge: {
			control: 'text',
			description: 'Badge text/number'
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
} satisfies Meta<typeof NavItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		href: '/products',
		size: 'md',
		active: false,
		disabled: false
	}
};

export const Active: Story = {
	args: {
		href: '/dashboard',
		size: 'md',
		active: true
	}
};

export const WithBadge: Story = {
	args: {
		href: '/notifications',
		size: 'md',
		badge: '3'
	}
};

export const Disabled: Story = {
	args: {
		href: '/settings',
		size: 'md',
		disabled: true
	}
};

export const Small: Story = {
	args: {
		href: '/help',
		size: 'sm',
		active: false
	}
};

export const Large: Story = {
	args: {
		href: '/about',
		size: 'lg',
		active: false
	}
};

export const AsButton: Story = {
	args: {
		size: 'md',
		active: false
	}
};

export const ExternalLink: Story = {
	args: {
		href: 'https://example.com',
		size: 'md',
		target: '_blank'
	}
};
