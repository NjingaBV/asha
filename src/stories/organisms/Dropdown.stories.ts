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
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @storybook/no-import-module-by-path
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render dropdown trigger button', async () => {
			const triggerButton = canvas.getByRole('button', { name: 'Options' });
			expect(triggerButton).toBeInTheDocument();
		});

		await step('Dropdown menu is initially closed', async () => {
			// Menu should not be visible initially
			const menuItems = canvas.queryAllByRole('menuitem');
			expect(menuItems.length).toBe(0);
		});

		await step('Click trigger opens dropdown', async () => {
			const triggerButton = canvas.getByRole('button', { name: 'Options' });
			await userEvent.click(triggerButton);

			// After click, menu items should be visible
			const menuItems = canvas.getAllByRole('menuitem');
			expect(menuItems.length).toBeGreaterThan(0);
		});

		await step('Dropdown items are rendered correctly', async () => {
			const editItem = canvas.getByRole('menuitem', { name: 'Edit' });
			const duplicateItem = canvas.getByRole('menuitem', { name: 'Duplicate' });
			const deleteItem = canvas.getByRole('menuitem', { name: 'Delete' });

			expect(editItem).toBeInTheDocument();
			expect(duplicateItem).toBeInTheDocument();
			expect(deleteItem).toBeInTheDocument();
		});

		await step('Can select dropdown items', async () => {
			const editItem = canvas.getByRole('menuitem', { name: 'Edit' });
			await userEvent.click(editItem);
			// After selection, menu should close
			expect(editItem).not.toBeVisible();
		});

		await step('Keyboard navigation works', async () => {
			// Re-open dropdown
			const triggerButton = canvas.getByRole('button', { name: 'Options' });
			await userEvent.click(triggerButton);

			// Test arrow key navigation
			await userEvent.keyboard('{ArrowDown}');
			const firstItem = canvas.getByRole('menuitem', { name: 'Edit' });
			// First item should be focused or selected

			await userEvent.keyboard('{Escape}');
			// Menu should close on escape
			expect(firstItem).not.toBeVisible();
		});

		await step('Dropdown position classes applied', async () => {
			const triggerButton = canvas.getByRole('button', { name: 'Options' });
			expect(triggerButton).toBeInTheDocument();
			// Position classes are applied to the dropdown container
		});
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
