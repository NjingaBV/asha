import type { Meta, StoryObj } from '@storybook/sveltekit';
import CTAGroup from '@/lib/components/molecules/CTAGroup.svelte';

const meta = {
	title: 'Molecules/CTAGroup',
	component: CTAGroup,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		primary: { control: 'object' },
		secondary: { control: 'object' },
		align: { control: { type: 'select' }, options: ['left', 'center'] }
	}
} satisfies Meta<typeof CTAGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: { label: 'Acheter', href: '#', tone: 'primary' },
		secondary: { label: 'En savoir plus', href: '#', tone: 'secondary' },
		align: 'center'
	}
};

export const PrimaryAndSecondary: Story = {
	args: {
		...Primary.args
	}
};

export const OnlyPrimary: Story = {
	args: {
		...Primary.args,
		secondary: null,
		align: 'left'
	}
};
