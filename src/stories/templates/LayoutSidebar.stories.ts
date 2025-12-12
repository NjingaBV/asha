import type { Meta, StoryObj } from '@storybook/sveltekit';
import LayoutSidebar from '$lib/components/templates/LayoutSidebar.svelte';

const meta = {
	title: 'Templates/LayoutSidebar',
	component: LayoutSidebar,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		sidebarPosition: {
			control: 'select',
			options: ['left', 'right'],
			description: 'Sidebar position'
		},
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
} satisfies Meta<typeof LayoutSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		sidebarPosition: 'left',
		sidebarWidth: '16rem',
		sidebarOpen: true
	}
};

export const RightSidebar: Story = {
	args: {
		sidebarPosition: 'right',
		sidebarWidth: '16rem',
		sidebarOpen: true
	}
};

export const NarrowSidebar: Story = {
	args: {
		sidebarPosition: 'left',
		sidebarWidth: '12rem',
		sidebarOpen: true
	}
};

export const WideSidebar: Story = {
	args: {
		sidebarPosition: 'left',
		sidebarWidth: '20rem',
		sidebarOpen: true
	}
};

export const CollapsedSidebar: Story = {
	args: {
		sidebarPosition: 'left',
		sidebarWidth: '16rem',
		sidebarOpen: false
	}
};
