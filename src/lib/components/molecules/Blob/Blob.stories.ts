import type { Meta, StoryObj } from '@storybook/svelte';
import Blob from './Blob.svelte';

const meta: Meta<Blob> = {
	title: 'Molecules/Blob',
	component: Blob,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'color' },
		position: { control: 'text' }
	}
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: '#6c00e2',
		position: ''
	}
};

export const PurpleBlob: Story = {
	args: {
		...Primary.args
	}
};
