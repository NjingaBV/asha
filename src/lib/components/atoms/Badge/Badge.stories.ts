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
		tone: {
			control: { type: 'select' },
			options: ['dark', 'light', 'accent']
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md']
		}
	}
} satisfies Meta<Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'New',
		tone: 'dark',
		size: 'md'
	}
};

export const Dark: Story = {
	args: {
		...Primary.args
	}
};

export const Light: Story = {
	args: {
		...Primary.args,
		tone: 'light'
	}
};

export const Accent: Story = {
	args: {
		...Primary.args,
		label: 'Edition',
		tone: 'accent',
		size: 'sm'
	}
};
