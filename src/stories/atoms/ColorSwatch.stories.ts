import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorSwatch from '@/lib/components/atoms/ColorSwatch.svelte';

const meta = {
	title: 'Atoms/ColorSwatch',
	component: ColorSwatch,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		color: { control: 'color' },
		selected: { control: 'boolean' },
		label: { control: 'text' }
	}
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: '#0a84ff',
		label: 'Bleu',
		selected: true
	},
	render: (args) => ({
		Component: ColorSwatch,
		props: args
	})
};

export const Selected: Story = {
	args: {
		...Primary.args
	}
};

export const Unselected: Story = {
	args: {
		...Primary.args,
		color: '#ff3b30',
		label: 'Rouge',
		selected: false
	}
};

// Group story removed for v9 typing compatibility
