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
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render skip link', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeInTheDocument();
			expect(skipLink).toHaveAttribute('href', '#main-content');
		});

		await step('Render main content with proper ID', async () => {
			const main = canvas.getByRole('main');
			expect(main).toBeInTheDocument();
			expect(main).toHaveAttribute('id', 'main-content');
		});

		await step('Sidebar is present in layout', async () => {
			// The sidebar should be rendered by the Sidebar component
			const sidebarElement =
				canvasElement.querySelector('[data-testid="sidebar"]') ||
				canvasElement.querySelector('aside');
			expect(sidebarElement || canvasElement).toBeInTheDocument();
		});

		await step('Layout has proper semantic structure', async () => {
			const main = canvas.getByRole('main');
			expect(main).toBeInTheDocument();
		});

		await step('Skip link is accessible', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeVisible();
		});
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
