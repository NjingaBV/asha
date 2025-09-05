import type { Meta, StoryObj } from '@storybook/sveltekit';
import Blob from './Blob.svelte';

const meta = {
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
} satisfies Meta<Blob>;

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
