import type { Meta, StoryObj } from '@storybook/svelte';

import Header from './Header.svelte';

const meta: Meta<typeof Header> = {
	title: 'Organism/Header',
	component: Header
};

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuClose: Story = {
	args: {
		logo: {
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ lable: 'Contact', href: '/contact' }
		]
	}
};

export const MenuOpen: Story = {
	args: {
		logo: {
			title: 'DJ FMK',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: true,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ lable: 'Contact', href: '/contact' }
		]
	}
};
