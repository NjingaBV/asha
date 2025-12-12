import type { Meta, StoryObj } from '@storybook/sveltekit';
import LayoutDashboard from '$lib/components/templates/LayoutDashboard.svelte';

const meta = {
	title: 'Templates/LayoutDashboard',
	component: LayoutDashboard,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		sidebarWidth: {
			control: 'text',
			description: 'Sidebar width (CSS value)'
		},
		sidebarOpen: {
			control: 'boolean',
			description: 'Whether sidebar is open on mobile'
		},
		class: {
			control: 'text',
			description: 'Custom CSS classes for main content'
		}
	}
} satisfies Meta<typeof LayoutDashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		sidebarWidth: '16rem',
		sidebarOpen: true
	}
};

export const NarrowSidebar: Story = {
	args: {
		sidebarWidth: '12rem',
		sidebarOpen: true
	}
};

export const WideSidebar: Story = {
	args: {
		sidebarWidth: '20rem',
		sidebarOpen: true
	}
};

export const CollapsedSidebar: Story = {
	args: {
		sidebarWidth: '16rem',
		sidebarOpen: false
	}
};
