import type { Meta, StoryObj } from '@storybook/sveltekit';
import Tile from '@/lib/components/molecules/Tile/Tile.svelte';

const meta = {
	title: 'Molecules/Tile',
	component: Tile,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		images: { control: 'object' }
	}
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		images: [
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
		]
	}
};

export const HomeTile: Story = {
	args: {
		...Primary.args
	}
};

export const ShowTile: Story = {
	args: {
		...Primary.args
	}
};
