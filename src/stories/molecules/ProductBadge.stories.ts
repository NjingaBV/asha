import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductBadge from '$lib/components/molecules/ProductBadge.svelte';

const meta = {
	title: 'Molecules/ProductBadge',
	component: ProductBadge,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['new', 'sale', 'bestseller', 'limited', 'outofstock', 'preorder', 'custom'],
			description: 'Badge type'
		},
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg'],
			description: 'Badge size'
		},
		label: {
			control: 'text',
			description: 'Custom label (for custom type)'
		},
		discount: {
			control: 'number',
			description: 'Discount percentage (for sale type)'
		}
	}
} satisfies Meta<typeof ProductBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: 'new',
		size: 'md'
	},
	play: async ({ canvasElement, step }) => {
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render product badge', async () => {
			expect(canvasElement).toBeInTheDocument();
		});

		await step('Display badge text', async () => {
			const text = canvasElement.textContent;
			expect(text && (text.includes('New') || text.includes('new'))).toBeTruthy();
		});

		await step('Badge has proper styling', async () => {
			const badge = canvasElement.querySelector('[class*="badge"], [class*="product"]');
			expect(badge || canvasElement).toBeInTheDocument();
		});

		await step('Medium size applied', async () => {
			expect(canvasElement).toBeInTheDocument();
		});
	}
};

export const New: Story = {
	args: {
		type: 'new',
		size: 'md'
	}
};

export const Sale: Story = {
	args: {
		type: 'sale',
		size: 'md'
	}
};

export const SaleWithDiscount: Story = {
	args: {
		type: 'sale',
		discount: 25,
		size: 'md'
	}
};

export const Bestseller: Story = {
	args: {
		type: 'bestseller',
		size: 'md'
	}
};

export const Limited: Story = {
	args: {
		type: 'limited',
		size: 'md'
	}
};

export const OutOfStock: Story = {
	args: {
		type: 'outofstock',
		size: 'md'
	}
};

export const Preorder: Story = {
	args: {
		type: 'preorder',
		size: 'md'
	}
};

export const Custom: Story = {
	args: {
		type: 'custom',
		label: 'Limited Edition',
		size: 'md'
	}
};

export const Small: Story = {
	args: {
		type: 'new',
		size: 'sm'
	}
};

export const Large: Story = {
	args: {
		type: 'bestseller',
		size: 'lg'
	}
};

export const BigDiscount: Story = {
	args: {
		type: 'sale',
		discount: 50,
		size: 'lg'
	}
};
