import type { Meta, StoryObj } from '@storybook/svelte';
import Header from './Header.svelte';

const meta = {
	title: 'Organisms/Header',
	component: Header,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		open: { control: 'boolean' },
		logo: { control: 'object' },
		navLinks: { control: 'object' }
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ label: 'Contact', href: '/contact' }
		]
	}
};

export const MenuClose: Story = {
	args: {
		...Primary.args
	}
};

export const MenuOpen: Story = {
	args: {
		...Primary.args,
		logo: {
			title: 'DJ FMK',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: true
	}
};
