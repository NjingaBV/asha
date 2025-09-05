import type { Meta, StoryObj } from '@storybook/sveltekit';
import Home from './Home.svelte';

const meta = {
	title: 'Pages/Home',
	component: Home,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		alternateColor: { control: 'boolean' },
		navLinks: { control: 'object' },
		slices: { control: 'object' }
	}
} satisfies Meta<Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		},
		cta: { label: 'Action', url: '#', icon: 'M 10 5  L 40 25 L 10 45 Z', href: '#' },
		alternateColor: true,
		navLinks: [
			{
				label: 'Home',
				href: '/'
			},
			{
				label: 'About',
				href: '/about'
			},
			{
				label: 'Contact',
				href: '/contact'
			}
		],
		slices: [
			{
				name: 'tiles',
				logo: {
					title: 'DJ FMK',
					subtitle: '',
					imgUrl: 'https://images.prismic.io/djfacemakerv2/f8e0f24e-8600-4867-9691-9efb20be9ea9_fmk+transition+blanc.png?auto=compress,format',
					imgAlt: 'DJ FMK logo',
					showTitle: false
				},
				images: [
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
				]
			}
		]
	}
};

export const DjFmkHome: Story = {
	args: {
		...Primary.args
	}
};

export const DjFmkShow: Story = {
	args: {
		...Primary.args,
		slices: [
			{
				name: 'hero',
				title: 'Simples Thérapies',
				overview:
					'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
				details: '',
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
				},
				backgroundColor: '#6c00e2',
				ctaLabel: 'Dernier épisode',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	}
};
