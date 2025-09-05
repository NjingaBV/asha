import type { Meta, StoryObj } from '@storybook/sveltekit';
import Eyebrow from './Eyebrow.svelte';

const meta = {
	title: 'Atoms/Eyebrow',
	component: Eyebrow,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		text: { control: 'text' },
		align: {
			control: { type: 'select' },
			options: ['left', 'center', 'right']
		}
	}
} satisfies Meta<Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		text: 'Apple Watch',
		align: 'center'
	}
};

export const Center: Story = {
	args: {
		...Primary.args
	}
};

export const Left: Story = {
	args: {
		...Primary.args,
		text: 'Series 10',
		align: 'left'
	}
};
