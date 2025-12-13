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
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render navigation item as link', async () => {
			const link = canvas.getByRole('link');
			expect(link).toBeInTheDocument();
		});

		await step('Link has correct href', async () => {
			const link = canvas.getByRole('link');
			expect(link).toHaveAttribute('href', '/products');
		});

		await step('Item is not active by default', async () => {
			const link = canvas.getByRole('link');
			expect(link).not.toHaveClass('active');
		});

		await step('Item is not disabled by default', async () => {
			const link = canvas.getByRole('link');
			expect(link).not.toBeDisabled();
		});

		await step('Can click navigation item', async () => {
			const link = canvas.getByRole('link');
			await userEvent.click(link);
			expect(link).toBeInTheDocument();
		});
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
