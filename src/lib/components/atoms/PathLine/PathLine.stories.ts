import type { Meta, StoryObj } from '@storybook/svelte';
import PathLine from './PathLine.svelte';

const meta: Meta<typeof PathLine> = {
	title: 'Atoms/PathLine',
	component: PathLine
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Green: Story = {
	args: {
		title: 'Simple',
		order: '1',
		color: '#22c55e'
	}
};

export const Yellow: Story = {
	args: {
		title: 'Transparente',
		order: '2',
		color: '#eab308'
	}
};

export const Blue: Story = {
	args: {
		title: 'Révolutionnaire',
		order: '3',
		color: '#3b82f6'
	}
};
