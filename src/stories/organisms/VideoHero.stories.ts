import type { Meta, StoryObj } from '@storybook/sveltekit';
import VideoHero from '$lib/components/organisms/VideoHero.svelte';

const meta = {
	title: 'Organisms/VideoHero',
	component: VideoHero,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof VideoHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
