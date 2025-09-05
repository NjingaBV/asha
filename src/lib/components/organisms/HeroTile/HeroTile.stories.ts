import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroTile from './HeroTile.svelte';

const meta = {
	title: 'Organisms/HeroTile',
	component: HeroTile,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		images: { control: 'object' }
	}
} satisfies Meta<HeroTile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		images: [
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
			'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
		],
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		}
	}
};

export const Animated: Story = {
	args: {
		...Primary.args
	}
};
