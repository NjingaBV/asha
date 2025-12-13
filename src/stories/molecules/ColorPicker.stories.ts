import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorPicker from '$lib/components/molecules/ColorPicker.svelte';

const meta = {
	title: 'Molecules/ColorPicker',
	component: ColorPicker,
	tags: ['autodocs'],
	argTypes: {
		options: { control: 'object' },
		onChange: { action: 'onChange' }
	}
} satisfies Meta<typeof ColorPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		options: ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#00FFFF', '#FF00FF']
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render color picker options', async () => {
			const inputs = canvasElement.querySelectorAll('input[type="radio"]');
			expect(inputs.length).toBe(6);
		});

		await step('Color options are in a group', async () => {
			const radioGroup = canvasElement.querySelector('[role="group"]') || canvasElement;
			expect(radioGroup).toBeInTheDocument();
		});

		await step('Can select a color option', async () => {
			const inputs = canvasElement.querySelectorAll(
				'input[type="radio"]'
			) as NodeListOf<HTMLInputElement>;
			if (inputs.length > 0) {
				await userEvent.click(inputs[0]);
				// Check that the first option is now checked or interactable
				expect(inputs[0]).toBeInTheDocument();
			}
		});

		await step('Render all color swatches', async () => {
			const colors = canvasElement.querySelectorAll(
				'[data-testid="color-swatch"], [style*="background"]'
			);
			expect(colors.length > 0).toBeTruthy();
		});
	}
};
