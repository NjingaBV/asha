import type { Meta, StoryObj } from '@storybook/sveltekit';
import Dropdown from '$lib/components/organisms/Dropdown.svelte';

const meta = {
	title: 'Organisms/Dropdown',
	component: Dropdown,
	tags: ['autodocs'],
	argTypes: {
		items: { control: 'object' },
		label: { control: 'text' },
		icon: { control: 'text' },
		position: {
			control: { type: 'select' },
			options: ['bottom-start', 'bottom-end', 'top-start', 'top-end']
		},
		open: { control: 'boolean' }
	}
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Options',
		icon: 'chevron-down',
		position: 'bottom-start',
		open: false,
		items: [
			{ id: 'edit', label: 'Edit', icon: 'edit' },
			{ id: 'duplicate', label: 'Duplicate', icon: 'copy' },
			{ id: 'divider', label: '', divider: true },
			{ id: 'delete', label: 'Delete', icon: 'trash', danger: true }
		]
	}
};

export const WithLinks: Story = {
	args: {
		label: 'Navigation',
		items: [
			{ id: 'home', label: 'Home', href: '/' },
			{ id: 'products', label: 'Products', href: '/products' },
			{ id: 'about', label: 'About', href: '/about' },
			{ id: 'contact', label: 'Contact', href: '/contact' }
		]
	}
};

export const WithDisabled: Story = {
	args: {
		label: 'Actions',
		items: [
			{ id: 'save', label: 'Save', icon: 'save' },
			{ id: 'export', label: 'Export', icon: 'download', disabled: true },
			{ id: 'print', label: 'Print', icon: 'printer' }
		]
	}
};

export const TopEnd: Story = {
	args: {
		...Default.args,
		position: 'top-end',
		label: 'Menu (Top End)'
	}
};
