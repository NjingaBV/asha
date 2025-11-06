import type { Meta, StoryObj } from '@storybook/sveltekit';
import ColorSelector from '@/lib/components/molecules/ColorSelector/ColorSelector.svelte';

const meta = {
	title: 'Molecules/ColorSelector',
	component: ColorSelector,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		colors: { control: 'object' },
		selected: { control: 'text' },
		onChange: { action: 'colorChanged' }
	}
} satisfies Meta<typeof ColorSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		colors: [
			{ label: 'Bleu', value: '#0a84ff' },
			{ label: 'Rouge', value: '#ff3b30' },
			{ label: 'Noir', value: '#000000' }
		],
		selected: '#0a84ff'
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};
