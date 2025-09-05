import type { Meta, StoryObj } from '@storybook/svelte';
import Shelf from './Shelf.svelte';

const meta = {
	title: 'Templates/Shelf',
	component: Shelf,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		logo: { control: 'object' },
		open: { control: 'boolean' },
		alternateColor: { control: 'boolean' },
		navLinks: { control: 'object' },
		slices: { control: 'object' },
		cta: { control: 'object' }
	}
} satisfies Meta<Shelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		cta: {
			label: 'Souscrire',
			url: '/souscrire'
		},
		open: false,
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
					imgUrl: 'https://images.prismic.io/djfacemakerv2/f8e0f24e-8600-4867-9691-9efb20be9ea9_fmk+transition+blanc.png?auto=compress,format'
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

export const NjingaHome: Story = {
	args: {
		...Primary.args,
		logo: {
			imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543'
		},
		navLinks: [
			{
				label: 'Turbans modulables',
				href: '/'
			},
			{
				label: 'Headbands modulables',
				href: '/'
			},
			{
				label: 'Turbans croisés',
				href: '/'
			},
			{
				label: 'Echarpes capuches',
				href: '/'
			},
			{
				label: 'Bijoux',
				href: '/'
			}
		],
		slices: [
			{
				name: 'hero',
				title: "Des accessoires chics et malins pour avoir de l'allure.",
				overview: "Et si être élégante au quotidien n'était qu'une affaire de secondes?",
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759'
				},
				buttonName: 'Découvrez comment',
				buttonLink: 'https://njinga.fr'
			}
		]
	}
};

export const OuranosHome: Story = {
	args: {
		...Primary.args,
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			showTitle: true,
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
		},
		alternateColor: false,
		slices: [
			{
				name: 'text-animation',
				labels: [
					{
						color: '#22c55e',
						title: 'Simple'
					},
					{
						color: '#eab308',
						title: 'Transparente'
					},
					{
						color: '#3b82f6',
						title: 'Révolutionnaire'
					}
				]
			}
		]
	}
};
