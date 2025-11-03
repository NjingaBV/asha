import type { Meta, StoryObj } from '@storybook/sveltekit';
import Badge from './Badge.svelte';

const meta = {
	title: 'Atoms/Badge',
	component: Badge,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		color: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'success', 'warning', 'danger', 'neutral']
		},
		variant: {
			control: { type: 'select' },
			options: ['solid', 'outline', 'ghost']
		},
		badgeSize: {
			control: { type: 'select' },
			options: ['sm', 'base', 'lg']
		}
	}
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'New',
		color: 'primary',
		variant: 'solid',
		badgeSize: 'base',
		children: null
	}
};

export const Secondary: Story = {
	args: {
		...Primary.args,
		color: 'secondary'
	}
};

export const Success: Story = {
	args: {
		...Primary.args,
		label: 'Available',
		color: 'success'
	}
};

export const Warning: Story = {
	args: {
		...Primary.args,
		label: 'Limited',
		color: 'warning'
	}
};

export const Danger: Story = {
	args: {
		...Primary.args,
		label: 'Sold Out',
		color: 'danger'
	}
};

export const Neutral: Story = {
	args: {
		...Primary.args,
		label: 'Edition',
		color: 'neutral',
		badgeSize: 'sm'
	}
};

export const Outline: Story = {
	args: {
		...Primary.args,
		variant: 'outline'
	}
};

export const Ghost: Story = {
	args: {
		...Primary.args,
		variant: 'ghost'
	}
};
