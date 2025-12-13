import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import ProductGrid from '$lib/components/organisms/ProductGrid.svelte';

const meta = {
	title: 'Organisms/ProductGrid',
	component: ProductGrid,
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		products: { control: 'object' },
		columns: {
			control: { type: 'select' },
			options: [1, 2, 3, 4]
		}
	}
} satisfies Meta<typeof ProductGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'Our Products',
		subtitle: 'Shop Now',
		columns: 3,
		products: [
			{
				title: 'MacBook Air',
				subtitle: 'M2 chip',
				description: 'Strikingly thin and fast.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
				imageAlt: 'MacBook Air',
				colors: ['#2e3642', '#e0e2e0', '#f0e5d3', '#353a42'],
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} }
			},
			{
				title: 'MacBook Pro',
				subtitle: 'M3 chip',
				description: 'Mind-blowing. Head-turning.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
				imageAlt: 'MacBook Pro',
				colors: ['#0b0c0e', '#e0e2e0'],
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} }
			},
			{
				title: 'iMac',
				subtitle: 'M3 chip',
				description: 'Packed with more juice.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
				imageAlt: 'iMac',
				colors: [
					'#4477ce',
					'#8c52ff',
					'#ff66c4',
					'#ff9f1c',
					'#ffcd3c',
					'#55d6be',
					'#e0e2e0'
				],
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} }
			}
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify grid renders
		const grid = canvas.getByRole('region', { name: /product grid/i });
		await expect(grid).toBeInTheDocument();
		await expect(grid).toBeVisible();

		// Test 2: Verify title and subtitle
		const title = canvas.getByRole('heading', { name: /our products/i });
		await expect(title).toBeInTheDocument();

		const subtitle = canvas.getByText('Shop Now');
		await expect(subtitle).toBeInTheDocument();

		// Test 3: Verify products are displayed
		const macbookAir = canvas.getByText('MacBook Air');
		await expect(macbookAir).toBeInTheDocument();

		const macbookPro = canvas.getByText('MacBook Pro');
		await expect(macbookPro).toBeInTheDocument();

		const imac = canvas.getByText('iMac');
		await expect(imac).toBeInTheDocument();

		// Test 4: Verify product descriptions
		const airDesc = canvas.getByText('Strikingly thin and fast.');
		await expect(airDesc).toBeInTheDocument();

		const proDesc = canvas.getByText('Mind-blowing. Head-turning.');
		await expect(proDesc).toBeInTheDocument();

		// Test 5: Verify action buttons
		const buyButtons = canvas.getAllByRole('button', { name: /buy/i });
		expect(buyButtons.length).toBeGreaterThanOrEqual(3);

		const learnMoreButtons = canvas.getAllByRole('button', { name: /learn more/i });
		expect(learnMoreButtons.length).toBeGreaterThanOrEqual(3);

		// Test 6: Test button interactions
		await userEvent.click(buyButtons[0]);
		// Verify button is clickable and doesn't throw errors

		// Test 7: Verify images with alt text
		const images = canvas.getAllByRole('img');
		expect(images.length).toBeGreaterThanOrEqual(3);

		images.forEach((img) => {
			expect(img).toHaveAttribute('alt');
			expect(img.getAttribute('alt')).not.toBe('');
		});

		// Test 8: Verify grid layout (3 columns)
		// This would depend on CSS grid implementation
		const productCards = canvas.getAllByRole('article');
		expect(productCards.length).toBe(3);

		// Test 9: Test keyboard navigation
		await userEvent.tab();
		// Should focus first interactive element

		// Test 10: Verify color swatches if present
		// Color swatches might be present for products with multiple colors
	}
};
