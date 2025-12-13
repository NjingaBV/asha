import type { Meta, StoryObj } from '@storybook/sveltekit';
import Form from '$lib/components/organisms/Form.svelte';

const meta = {
	title: 'Organisms/Form',
	component: Form,
	tags: ['autodocs'],
	argTypes: {
		action: { control: 'text' },
		method: {
			control: { type: 'select' },
			options: ['get', 'post']
		},
		id: { control: 'text' },
		submitting: { control: 'boolean' },
		submitText: { control: 'text' },
		cancelText: { control: 'text' },
		showCancel: { control: 'boolean' },
		layout: {
			control: { type: 'select' },
			options: ['vertical', 'horizontal', 'inline']
		}
	}
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		method: 'post',
		submitText: 'Submit',
		cancelText: 'Cancel',
		showCancel: false,
		layout: 'vertical',
		submitting: false
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render form with proper structure', async () => {
			const form = canvas.getByRole('form');
			expect(form).toBeInTheDocument();
			expect(form).toHaveAttribute('method', 'post');
		});

		await step('Show submit button with correct text', async () => {
			const submitButton = canvas.getByRole('button', { name: 'Submit' });
			expect(submitButton).toBeInTheDocument();
			expect(submitButton).toHaveAttribute('type', 'submit');
		});

		await step('Form layout classes applied', async () => {
			const form = canvas.getByRole('form');
			expect(form).toHaveClass('space-y-4');
		});

		await step('Submit button is interactive', async () => {
			const submitButton = canvas.getByRole('button', { name: 'Submit' });
			expect(submitButton).toBeEnabled();
			await userEvent.click(submitButton);
			// In a real scenario, this would trigger form submission
		});

		await step('Form handles method attribute', async () => {
			const form = canvas.getByRole('form');
			expect(form).toHaveAttribute('method', 'post');
		});
	}
};

export const WithCancel: Story = {
	args: {
		...Default.args,
		showCancel: true
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render both submit and cancel buttons', async () => {
			const submitButton = canvas.getByRole('button', { name: 'Submit' });
			const cancelButton = canvas.getByRole('button', { name: 'Cancel' });
			expect(submitButton).toBeInTheDocument();
			expect(cancelButton).toBeInTheDocument();
		});

		await step('Cancel button is interactive', async () => {
			const cancelButton = canvas.getByRole('button', { name: 'Cancel' });
			expect(cancelButton).toHaveAttribute('type', 'button');
			await userEvent.click(cancelButton);
			// In a real scenario, this would trigger cancel handler
		});

		await step('Buttons have proper styling', async () => {
			const submitButton = canvas.getByRole('button', { name: 'Submit' });
			const cancelButton = canvas.getByRole('button', { name: 'Cancel' });
			expect(submitButton).toBeVisible();
			expect(cancelButton).toBeVisible();
		});
	}
};

export const Horizontal: Story = {
	args: {
		...Default.args,
		layout: 'horizontal'
	}
};

export const Inline: Story = {
	args: {
		...Default.args,
		layout: 'inline',
		submitText: 'Search'
	}
};

export const Submitting: Story = {
	args: {
		...Default.args,
		submitting: true
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Show submitting state text', async () => {
			const submitButton = canvas.getByRole('button', { name: 'Submitting...' });
			expect(submitButton).toBeInTheDocument();
		});

		await step('Submit button is disabled when submitting', async () => {
			const submitButton = canvas.getByRole('button', { name: 'Submitting...' });
			expect(submitButton).toBeDisabled();
		});

		await step('Form is in submitting state', async () => {
			const form = canvas.getByRole('form');
			expect(form).toBeInTheDocument();
			// The submitting state should prevent interactions
		});
	}
};

export const CustomLabels: Story = {
	args: {
		submitText: 'Save Changes',
		cancelText: 'Discard',
		showCancel: true,
		layout: 'vertical'
	}
};
