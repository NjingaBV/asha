import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureItem from '@/lib/components/molecules/FeatureItem/FeatureItem.svelte';

const meta = {
	title: 'Molecules/FeatureItem',
	component: FeatureItem,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' }
	}
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Autonomie',
		description: "Jusqu'à 18 heures d'autonomie pour vous accompagner toute la journée."
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};
