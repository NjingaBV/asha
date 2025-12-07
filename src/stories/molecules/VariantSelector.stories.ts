import type { Meta, StoryObj } from '@storybook/sveltekit';
import VariantSelector from '$lib/components/molecules/VariantSelector.svelte';

const meta = {
	title: 'Molecules/VariantSelector',
	component: VariantSelector,
	tags: ['autodocs'],
	argTypes: {
		colors: { control: 'object' },
		selected: { control: 'text' },
		title: { control: 'text' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		},
		onChange: { action: 'onChange' }
	}
} satisfies Meta<typeof VariantSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Finitions',
		colors: [
			{ name: 'Minuit', swatch: '#1e293b' },
			{ name: 'Lumière stellaire', swatch: '#f8fafc' },
			{ name: 'Gris sidéral', swatch: '#475569' },
			{ name: 'Argent', swatch: '#e2e8f0' }
		],
		selected: 'Minuit',
		tone: 'light'
	}
};

export const DarkMode: Story = {
	args: {
		...Default.args,
		tone: 'dark'
	},
	parameters: {
		backgrounds: { default: 'dark' }
	}
};
