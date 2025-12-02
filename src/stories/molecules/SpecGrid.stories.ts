import type { Meta, StoryObj } from '@storybook/sveltekit';
import SpecGrid from '$lib/components/molecules/SpecGrid.svelte';

const meta = {
	title: 'Molecules/SpecGrid',
	component: SpecGrid,
	tags: ['autodocs'],
	argTypes: {
		specs: { control: 'object' },
		tone: {
			control: { type: 'select' },
			options: ['light', 'dark']
		}
	}
} satisfies Meta<typeof SpecGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		specs: [
			{ label: 'Puce', value: 'Apple M3', emphasize: true },
			{ label: 'Autonomie', value: 'Jusqu’à 18 h' },
			{ label: 'Poids', value: 'Dès 1,24 kg' },
			{ label: 'Écran', value: '13" ou 15" Liquid Retina' },
			{ label: 'Ports', value: 'MagSafe + 2x Thunderbolt' },
			{ label: 'Audio', value: '4 haut-parleurs' }
		],
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
