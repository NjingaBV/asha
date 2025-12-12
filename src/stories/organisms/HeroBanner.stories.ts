import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroBanner from '$lib/components/organisms/HeroBanner.svelte';

const meta = {
	title: 'Organisms/HeroBanner',
	component: HeroBanner,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
