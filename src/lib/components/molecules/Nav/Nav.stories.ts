import type { Meta, StoryObj } from '@storybook/svelte';
import Nav from './Nav.svelte';

const meta = {
	title: 'Molecules/Nav',
	component: Nav,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		headerMenu: { control: 'boolean' },
		color: { control: 'color' },
		links: { control: 'object' }
	}
} satisfies Meta<Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	parameters: {
		viewport: {
			defaultViewport: 'desktop'
		}
	},
	args: {
		headerMenu: true,
		color: '#ffffff',
		links: [
			{
				label: 'Home',
				href: '#'
			},
			{
				label: 'About',
				href: '#about'
			},
			{
				label: 'Contact',
				href: '#contact'
			}
		]
	}
};

export const HeaderNavigation: Story = {
	args: {
		...Primary.args
	}
};

export const AsideNavigation: Story = {
	args: {
		...Primary.args,
		headerMenu: false
	}
};
