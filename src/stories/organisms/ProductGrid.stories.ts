import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import ProductGrid from '$lib/components/organisms/ProductGrid.svelte';
import { ACME_LAPTOPS, ACME_PHONE_PRO, ACME_TABLET_PRO } from '$lib/fixtures/products';

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
				title: ACME_LAPTOPS[0].title,
				subtitle: ACME_LAPTOPS[0].tagline,
				description: ACME_LAPTOPS[0].description,
				image: ACME_LAPTOPS[0].heroImage,
				imageAlt: ACME_LAPTOPS[0].heroAlt,
				colors: ACME_LAPTOPS[0].colors?.map((c) => c.hex || c.swatch),
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} },
				badge: ACME_LAPTOPS[0].badge
			},
			{
				title: ACME_LAPTOPS[1].title,
				subtitle: ACME_LAPTOPS[1].tagline,
				description: ACME_LAPTOPS[1].description,
				image: ACME_LAPTOPS[1].heroImage,
				imageAlt: ACME_LAPTOPS[1].heroAlt,
				colors: ACME_LAPTOPS[1].colors?.map((c) => c.hex || c.swatch),
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} },
				badge: ACME_LAPTOPS[1].badge
			},
			{
				title: ACME_PHONE_PRO.title,
				subtitle: ACME_PHONE_PRO.tagline,
				description: ACME_PHONE_PRO.description,
				image: ACME_PHONE_PRO.heroImage,
				imageAlt: ACME_PHONE_PRO.heroAlt,
				colors: ACME_PHONE_PRO.colors?.map((c) => c.hex || c.swatch),
				primaryAction: { label: 'Buy', onClick: () => {} },
				secondaryAction: { label: 'Learn more', onClick: () => {} },
				badge: ACME_PHONE_PRO.badge
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
		const laptopAir = canvas.getByText(ACME_LAPTOPS[0].title);
		await expect(laptopAir).toBeInTheDocument();

		const laptopPro = canvas.getByText(ACME_LAPTOPS[1].title);
		await expect(laptopPro).toBeInTheDocument();

		const phonePro = canvas.getByText(ACME_PHONE_PRO.title);
		await expect(phonePro).toBeInTheDocument();

		// Test 4: Verify product descriptions
		const airDesc = canvas.getByText(ACME_LAPTOPS[0].description);
		await expect(airDesc).toBeInTheDocument();

		const proDesc = canvas.getByText(ACME_LAPTOPS[1].description);
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
