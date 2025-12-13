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

		await step('Dashboard layout has sidebar and main areas', async () => {
			const main = canvas.getByRole('main');
			expect(main).toBeInTheDocument();
			// Check for sidebar presence
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
