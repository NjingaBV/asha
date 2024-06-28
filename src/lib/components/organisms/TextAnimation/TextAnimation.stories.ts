import type { Meta, StoryObj } from '@storybook/svelte';

import TextAnimation from './TextAnimation.svelte';

const meta: Meta<typeof TextAnimation> = {
	title: 'Organism/TextAnimation',
	component: TextAnimation
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Ouranos: Story = {
	args: {
		labels: [
			{
				color: '#22c55e',
				title: 'Simple'
			},
			{
				color: '#eab308',
				title: 'Transparente'
			},
			{
				color: '#3b82f6',
				title: 'Révolutionnaire'
			}
		]
	}
};
