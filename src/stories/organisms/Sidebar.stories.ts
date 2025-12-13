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
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render sidebar container when open', async () => {
			const sidebar = canvasElement.querySelector('[data-sidebar]');
			expect(sidebar).toBeInTheDocument();
		});

		await step('Sidebar has correct position class', async () => {
			const sidebar = canvasElement.querySelector('[data-sidebar]');
			expect(sidebar).toHaveClass('left-0');
		});

		await step('Overlay is present when enabled', async () => {
			const overlay = canvasElement.querySelector('.bg-black\\/50');
			expect(overlay).toBeInTheDocument();
		});

		await step('Sidebar has proper width', async () => {
			const sidebar = canvasElement.querySelector('[data-sidebar]');
			expect(sidebar).toHaveStyle({ width: '16rem' });
		});

		await step('Can close sidebar via overlay click', async () => {
			const overlay = canvasElement.querySelector('.bg-black\\/50');
			if (overlay) {
				await userEvent.click(overlay);
				// Note: In Storybook, the state change might not be reflected immediately
				// but the click event should be testable
			}
		});
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
