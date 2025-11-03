import type { Meta, StoryObj } from '@storybook/sveltekit';
import PathLine from './PathLine.svelte';

const meta = {
	title: 'Atoms/PathLine',
	component: PathLine,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		order: { control: 'number' },
		title: { control: 'text' },
		color: { control: 'color' }
	}
} satisfies Meta<typeof PathLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simple',
		order: 1,
		color: '#22c55e'
	}
};

export const GreenPathLine: Story = {
	args: {
		...Primary.args
	}
};

export const YellowPathLine: Story = {
	args: {
		...Primary.args,
		title: 'Transparente',
		order: 2,
		color: '#eab308'
	}
};

export const BluePathLine: Story = {
	args: {
		...Primary.args,
		title: 'Révolutionnaire',
		order: 3,
		color: '#3b82f6'
	}
};
