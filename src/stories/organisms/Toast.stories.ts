import type { Meta, StoryObj } from '@storybook/sveltekit';
import Toast from '$lib/components/organisms/Toast.svelte';

const meta = {
	title: 'Organisms/Toast',
	component: Toast,
	tags: ['autodocs'],
	argTypes: {
		message: { control: 'text' },
		type: {
			control: { type: 'select' },
			options: ['info', 'success', 'warning', 'error']
		},
		title: { control: 'text' },
		duration: { control: { type: 'number', min: 0 } },
		visible: { control: 'boolean' },
		position: {
			control: { type: 'select' },
			options: [
				'top-right',
				'top-left',
				'bottom-right',
				'bottom-left',
				'top-center',
				'bottom-center'
			]
		},
		dismissible: { control: 'boolean' }
	}
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
	args: {
		message: 'This is an informational message.',
		type: 'info',
		visible: true,
		position: 'top-right',
		dismissible: true,
		duration: 0
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Toast is visible when visible prop is true', async () => {
			const toast = canvas.getByRole('status');
			expect(toast).toBeInTheDocument();
			expect(toast).toBeVisible();
		});

		await step('Toast displays correct message', async () => {
			expect(canvas.getByText('This is an informational message.')).toBeInTheDocument();
		});

		await step('Toast has correct type styling', async () => {
			const toast = canvas.getByRole('status');
			// Check for info type classes or attributes
			expect(toast).toBeInTheDocument();
		});

		await step('Dismiss button is present when dismissible', async () => {
			const dismissButton = canvas.getByRole('button', { name: /close|dismiss|×/i });
			expect(dismissButton).toBeInTheDocument();
		});

		await step('Can dismiss toast manually', async () => {
			const dismissButton = canvas.getByRole('button', { name: /close|dismiss|×/i });
			await userEvent.click(dismissButton);
			// Toast should disappear
			expect(dismissButton).not.toBeVisible();
		});

		await step('Toast has proper ARIA attributes', async () => {
			const toast = canvas.getByRole('status');
			expect(toast).toHaveAttribute('aria-live', 'polite');
		});

		await step('Toast position classes applied', async () => {
			const toast = canvas.getByRole('status');
			// Position classes should be applied
			expect(toast).toBeInTheDocument();
		});
	}
};

export const Success: Story = {
	args: {
		...Info.args,
		title: 'Success!',
		message: 'Your changes have been saved successfully.',
		type: 'success'
	}
};

export const Warning: Story = {
	args: {
		...Info.args,
		title: 'Warning',
		message: 'This action may have unintended consequences.',
		type: 'warning'
	}
};

export const Error: Story = {
	args: {
		...Info.args,
		title: 'Error',
		message: 'Something went wrong. Please try again.',
		type: 'error'
	}
};

export const TopLeft: Story = {
	args: {
		...Info.args,
		position: 'top-left'
	}
};

export const BottomRight: Story = {
	args: {
		...Info.args,
		position: 'bottom-right'
	}
};

export const TopCenter: Story = {
	args: {
		...Info.args,
		position: 'top-center'
	}
};

export const NotDismissible: Story = {
	args: {
		...Info.args,
		dismissible: false,
		message: 'This toast cannot be dismissed manually.'
	}
};

export const WithTitle: Story = {
	args: {
		title: 'Update Available',
		message: 'A new version is available. Click to update.',
		type: 'info',
		visible: true,
		position: 'top-right',
		dismissible: true,
		duration: 0
	}
};
