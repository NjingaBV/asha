import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureCard from '$lib/components/molecules/FeatureCard.svelte';

const meta = {
	title: 'Molecules/FeatureCard',
	component: FeatureCard,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		image: { control: 'text' },
		imageAlt: { control: 'text' },
		imagePosition: {
			control: { type: 'select' },
			options: ['left', 'right']
		},
		icon: { control: 'text' },
		badge: { control: 'text' }
	}
} satisfies Meta<typeof FeatureCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Advanced Health Features',
		description:
			'Keep an eye on your heart rate, sleep stages, and blood oxygen levels with advanced sensors.',
		image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
		imageAlt: 'Health monitoring',
		imagePosition: 'right',
		icon: 'heart',
		badge: 'New'
	}
};

export const LeftImage: Story = {
	args: {
		...Default.args,
		imagePosition: 'left',
		title: 'Seamless Connectivity',
		description: 'Stay connected with calls, messages, and notifications right on your wrist.',
		icon: 'wifi'
	}
};
