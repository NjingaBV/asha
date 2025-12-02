import type { Meta, StoryObj } from '@storybook/sveltekit';
import TextAnimation from '@/lib/components/organisms/TextAnimation.svelte';
import ScrollDecorator from './ScrollDecorator.svelte';

const meta = {
	title: 'Organisms/TextAnimation/Verification',
	component: TextAnimation,
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<typeof TextAnimation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ScrollTrigger: Story = {
	args: {
		labels: [
			{ title: 'Scroll', color: '#ef4444' },
			{ title: 'Down', color: '#3b82f6' },
			{ title: 'To', color: '#22c55e' },
			{ title: 'See', color: '#eab308' },
			{ title: 'Magic', color: '#a855f7' }
		]
	},
	decorators: [() => ({ Component: ScrollDecorator })]
};
