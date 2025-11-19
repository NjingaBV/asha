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
	}
};
