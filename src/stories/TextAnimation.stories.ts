import type { Meta, StoryObj } from '@storybook/sveltekit';
import TextAnimation from '@/lib/components/organisms/TextAnimation/TextAnimation.svelte';

const meta = {
	title: 'Organisms/TextAnimation',
	component: TextAnimation,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		labels: { control: 'object' }
	}
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
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

export const Ouranos: Story = {
	args: {
		...Primary.args
	}
};
