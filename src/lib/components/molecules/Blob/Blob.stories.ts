import type { Meta, StoryObj } from '@storybook/svelte';
import Blob from './Blob.svelte';

const meta: Meta<typeof Blob> = {
	title: 'Molecules/Blob',
	component: Blob,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Purple: Story = {
	args: {
		color: '#6c00e2',
	},
};
