import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import Showcase from '$lib/components/organisms/Showcase.svelte';
import { ACME_LAPTOPS, ACME_PHONE_PRO, ACME_TABLET_PRO } from '$lib/fixtures/products';

const meta = {
	title: 'Organisms/Showcase',
	component: Showcase,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Showcase Component

A responsive grid component for displaying product cards with title and description.

## Features

- **Responsive Grid**: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- **Product Cards**: Card components for each product
- **Section Header**: Title and description text
- **Flexible Products**: Any number of products supported
- **Centered Layout**: Max-width container with centered alignment
- **Consistent Spacing**: Proper padding and gap between products

## Product Structure

Each product should include:
- \`title\`: Product name (required)
- \`subtitle\`: Short description or tagline
- \`image\`: Product image URL
- \`imageAlt\`: Alt text for accessibility
- \`primaryAction\`: Primary action with label and href
- \`secondaryAction\`: Secondary action with label and href

## Use Cases

- Product lineup showcase
- Feature comparisons
- Product gallery pages
- E-commerce product listings
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description: 'Section title displayed at the top'
		},
		description: {
			control: 'text',
			description: 'Section description text below the title'
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes for styling'
		}
	}
} satisfies Meta<typeof Showcase>;

export default meta;
type Story = StoryObj<typeof meta>;

const productData = {
	laptopAir: {
		title: ACME_LAPTOPS[0].title,
		subtitle: ACME_LAPTOPS[0].tagline,
		image:
			ACME_LAPTOPS[0].heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: ACME_LAPTOPS[0].heroAlt,
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' }
	},
	laptopPro14: {
		title: ACME_LAPTOPS[1].title,
		subtitle: ACME_LAPTOPS[1].tagline,
		image:
			ACME_LAPTOPS[1].heroImage ||
			'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=450&fit=crop',
		imageAlt: ACME_LAPTOPS[1].heroAlt,
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' }
	},
	laptopPro16: {
		title: ACME_LAPTOPS[2].title,
		subtitle: ACME_LAPTOPS[2].tagline,
		image:
			ACME_LAPTOPS[2].heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: ACME_LAPTOPS[2].heroAlt,
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' }
	},
	phonePro: {
		title: ACME_PHONE_PRO.title,
		subtitle: ACME_PHONE_PRO.tagline,
		image:
			ACME_PHONE_PRO.heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: ACME_PHONE_PRO.heroAlt,
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' }
	},
	tabletPro: {
		title: ACME_TABLET_PRO.title,
		subtitle: ACME_TABLET_PRO.tagline,
		image:
			ACME_TABLET_PRO.heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: ACME_TABLET_PRO.heroAlt,
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' }
	}
};

export const AllProducts: Story = {
	args: {
		title: 'Which product is right for you?',
		description: 'Choose the perfect product for your needs',
		products: [productData.laptopAir, productData.laptopPro14, productData.phonePro]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	}),
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify showcase renders
		const showcase = canvas.getByRole('region', { name: /showcase/i });
		await expect(showcase).toBeInTheDocument();
		await expect(showcase).toBeVisible();

		// Test 2: Verify title and description
		const title = canvas.getByRole('heading', { name: /which product is right for you/i });
		await expect(title).toBeInTheDocument();

		const description = canvas.getByText('Choose the perfect product for your needs');
		await expect(description).toBeInTheDocument();

		// Test 3: Verify products are displayed
		const laptopAir = canvas.getByText('Laptop Air');
		await expect(laptopAir).toBeInTheDocument();

		const laptopPro = canvas.getByText('Laptop Pro 14"');
		await expect(laptopPro).toBeInTheDocument();

		const phonePro = canvas.getByText('Phone Pro');
		await expect(phonePro).toBeInTheDocument();

		// Test 4: Verify product taglines
		const airTagline = canvas.getByText('Light. Bright. Full of might.');
		await expect(airTagline).toBeInTheDocument();

		const proTagline = canvas.getByText('Supercharged for productivity');
		await expect(proTagline).toBeInTheDocument();

		const phoneTagline = canvas.getByText('Pro. Beyond.');
		await expect(phoneTagline).toBeInTheDocument();

		// Test 5: Verify action buttons
		const learnMoreButtons = canvas.getAllByRole('link', { name: /learn more/i });
		expect(learnMoreButtons.length).toBeGreaterThanOrEqual(3);

		const buyButtons = canvas.getAllByRole('link', { name: /buy/i });
		expect(buyButtons.length).toBeGreaterThanOrEqual(3);

		// Test 6: Verify images with alt text
		const images = canvas.getAllByRole('img');
		expect(images.length).toBeGreaterThanOrEqual(3);

		images.forEach((img) => {
			expect(img).toHaveAttribute('alt');
			expect(img.getAttribute('alt')).not.toBe('');
		});

		// Test 7: Verify grid layout structure
		const productCards = canvas.getAllByRole('article');
		expect(productCards.length).toBe(3);

		// Test 8: Test keyboard navigation
		await userEvent.tab();
		// Should be able to navigate through interactive elements

		// Test 9: Verify proper heading hierarchy
		const headings = canvas.getAllByRole('heading');
		expect(headings.length).toBeGreaterThanOrEqual(1);
	}
};

export const ThreeProducts: Story = {
	args: {
		title: 'Best Sellers',
		description: 'Our most popular products',
		products: [productData.laptopAir, productData.laptopPro14, productData.phonePro]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const FiveProducts: Story = {
	args: {
		title: 'Complete Product Lineup',
		description: 'Explore all products available',
		products: [
			productData.laptopAir,
			productData.laptopPro14,
			productData.laptopPro16,
			productData.phonePro,
			productData.tabletPro
		]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const NoHeader: Story = {
	args: {
		title: undefined,
		description: undefined,
		products: [productData.laptopAir, productData.laptopPro14, productData.phonePro]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const TitleOnly: Story = {
	args: {
		title: 'Product Collection',
		description: undefined,
		products: [productData.laptopAir, productData.laptopPro14, productData.phonePro]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const DescriptionOnly: Story = {
	args: {
		title: undefined,
		description: 'All our products with detailed specifications',
		products: [productData.laptopAir, productData.laptopPro14, productData.phonePro]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const SingleProduct: Story = {
	args: {
		title: 'Featured Product',
		description: 'The ultimate laptop',
		products: [productData.laptopAir]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const LaptopsOnly: Story = {
	args: {
		title: 'Laptop Lineup',
		description: 'Power in your pocket',
		products: [productData.laptopAir, productData.laptopPro14, productData.laptopPro16]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const DesktopsOnly: Story = {
	args: {
		title: 'Desktop Computers',
		description: 'Power and performance for your desk',
		products: [productData.laptopAir, productData.laptopPro14, productData.phonePro] // Using available products as placeholders
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};
