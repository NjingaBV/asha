import type { Meta, StoryObj } from '@storybook/sveltekit';
import Sidebar from '$lib/components/organisms/Sidebar.svelte';

const meta = {
	title: 'Organisms/Sidebar',
	component: Sidebar,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		open: { control: 'boolean' },
		position: {
			control: { type: 'select' },
			options: ['left', 'right']
		},
		width: { control: 'text' },
		overlay: { control: 'boolean' }
	}
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		open: true,
		position: 'left',
		width: '16rem',
		overlay: true
	}
};

export const Right: Story = {
	args: {
		...Default.args,
		position: 'right'
	}
};

export const Wide: Story = {
	args: {
		...Default.args,
		width: '20rem'
	}
};

export const Closed: Story = {
	args: {
		...Default.args,
		open: false
	}
};

export const NoOverlay: Story = {
	args: {
		...Default.args,
		overlay: false
	}
};
