import type { Meta, StoryObj } from '@storybook/sveltekit';
import Shelf from '@/lib/components/templates/Shelf.svelte';

const meta = {
	title: 'Templates/Shelf',
	component: Shelf,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		open: { control: 'boolean' },
		alternateColor: { control: 'boolean' },
		navLinks: { control: 'object' },
		slices: { control: 'object' }
	}
} satisfies Meta<typeof Shelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
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

export const NjingaHome: Story = {
	args: {
		...Primary.args,
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
				details: '',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759'
				},
				backgroundColor: '#ffffff',
				ctaLabel: 'Découvrez comment',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	}
};

export const OuranosHome: Story = {
	args: {
		...Primary.args,
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
