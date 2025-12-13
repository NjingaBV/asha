import type { Meta, StoryObj } from '@storybook/sveltekit';
import LayoutDefault from '$lib/components/templates/LayoutDefault.svelte';

const meta = {
	title: 'Templates/LayoutDefault',
	component: LayoutDefault,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		class: {
			control: 'text',
			description: 'Custom CSS classes for main content'
		}
	}
} satisfies Meta<typeof LayoutDefault>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
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

export const WithCustomClass: Story = {
	args: {
		class: 'bg-gray-100'
	}
};
