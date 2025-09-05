import type { Meta, StoryObj } from '@storybook/svelte';
import AnimatedBlob from './AnimatedBlob.svelte';

const meta = {
	title: 'Organisms/AnimatedBlob',
	component: AnimatedBlob,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		colors: { control: 'object' }
	}
} satisfies Meta<AnimatedBlob>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		colors: ['#6c00e2', '#ff00e2', '#00e2ff']
	}
};

export const Animated: Story = {
	args: {
		...Primary.args
	}
};
