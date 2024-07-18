import type { Meta, StoryObj } from '@storybook/svelte';

import Nav from './Nav.svelte';

const meta: Meta<typeof Nav> = {
	title: 'Molecules/Nav',
	component: Nav,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const HeaderNavigation: Story = {
	args: {
		headerMenu: true,
		color: '#ffffff',
		links: [
			{
				label: 'Home',
				href: '#',
			},
			{
				label: 'About',
				href: '#about',
			},
			{
				label: 'Contact',
				href: '#contact',
			},
		],
	},
};

export const SideNavigation: Story = {
	args: {
		headerMenu: false,
		color: '#ffffff',
		links: [
			{
				label: 'Home',
				href: '#',
			},
			{
				label: 'About',
				href: '#about',
			},
			{
				label: 'Contact',
				href: '#contact',
			},
		],
	},
};
