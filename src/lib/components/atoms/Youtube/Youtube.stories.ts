import type { Meta, StoryObj } from '@storybook/sveltekit';
import Youtube from './Youtube.svelte';

const meta = {
	title: 'Atoms/Youtube',
	component: Youtube,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		videoId: { control: 'text' }
	}
} satisfies Meta<typeof Youtube>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		videoId: 'G-ECTntZYtk'
	}
};

export const YoutubePlayer: Story = {
	args: {
		...Primary.args
	}
};
