import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductPage from '$lib/components/templates/ProductPage.svelte';
import { ACME_LAPTOPS } from '$lib/fixtures/products';
import type { LinkType, LogoType } from '$lib/models';

const meta = {
	title: 'Templates/ProductPage',
	component: ProductPage,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# ProductPage Template

Generic, brand-agnostic product landing page template. This is the successor to MacPage.svelte, designed to work with any product category (laptops, phones, tablets, etc.).

## Key Features

- **Fully configurable**: All content provided via props, no hardcoded data
- **Brand-agnostic**: Uses fictional "Acme" brand for examples
- **Flexible product categories**: Supports laptops, phones, tablets, audio, accessories
- **Responsive design**: Mobile-first with progressive enhancement
- **Accessible**: Skip links, proper ARIA labels, keyboard navigation

## Usage

Pass all content as props:
- \`products\`: Array of ProductDetail objects
- \`pageTitle\`: Page heading
- \`headerNavLinks\`: Global navigation links
- \`chapterNavItems\`: Horizontal product category navigation
- \`heroSection\`: Optional hero banner configuration

## Migration from MacPage

Replace MacPage imports with ProductPage and provide all content via props instead of hardcoded Apple-specific data.
`
			}
		}
	},
	tags: ['autodocs']
} satisfies Meta<typeof ProductPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// Generic navigation data (not Apple-specific)
const genericHeaderNavLinks: LinkType[] = [
	{ label: 'Store', href: '/store' },
	{ label: 'Laptops', href: '/laptops' },
	{ label: 'Tablets', href: '/tablets' },
	{ label: 'Phones', href: '/phones' },
	{ label: 'Audio', href: '/audio' },
	{ label: 'Accessories', href: '/accessories' },
	{ label: 'Support', href: '/support' }
];

const acmeLogo: LogoType = {
	title: 'Acme',
	imgUrl: '/images/acme-logo.svg',
	imgAlt: 'Acme logo'
};

const chapterNavItems = [
	{ label: 'Laptops', href: '/laptops', icon: 'laptop' },
	{ label: 'Tablets', href: '/tablets', icon: 'tablet' },
	{ label: 'Phones', href: '/phones', icon: 'phone' },
	{ label: 'Audio', href: '/audio', icon: 'headphones' },
	{ label: 'Accessories', href: '/accessories', icon: 'accessory' }
];

export const Default: Story = {
	args: {
		pageTitle: 'Laptops',
		headerNavLinks: genericHeaderNavLinks,
		headerLogo: acmeLogo,
		chapterNavItems,
		products: ACME_LAPTOPS,
		heroSection: {
			title: 'Laptops',
			subtitle: 'Powerful performance meets incredible portability',
			primaryAction: { label: 'Shop All Laptops', href: '/laptops' },
			secondaryAction: { label: 'Compare Models', href: '/laptops/compare' }
		},
		showHeroBanner: false,
		showCTASection: false,
		showComparisonSection: false,
		showFeatureDiscovery: false,
		footerLogo: acmeLogo,
		footerBrandName: 'Acme Corporation'
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within, userEvent } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render main page structure', async () => {
			const main = canvasElement.querySelector('main');
			expect(main).toBeInTheDocument();
		});

		await step('Page title is displayed', async () => {
			const heading = canvas.getByRole('heading', { level: 1, name: /laptops/i });
			expect(heading).toBeInTheDocument();
		});

		await step('Hero section subtitle is present', async () => {
			const subtitle = canvas.getByText('Powerful performance meets incredible portability');
			expect(subtitle).toBeInTheDocument();
		});

		await step('Product grid renders laptops', async () => {
			const productCards = canvasElement.querySelectorAll('article');
			expect(productCards.length).toBeGreaterThanOrEqual(3); // Laptop Air, Pro 14, Pro 16
		});

		await step('Chapter navigation is present', async () => {
			const chapterNav = canvasElement.querySelector(
				'[data-testid="chapter-nav"], .chapter-nav'
			);
			expect(chapterNav).toBeInTheDocument();
		});

		await step('Filter tabs are rendered', async () => {
			const filterButtons = canvas.getAllByRole('button', {
				name: /all products|laptops|desktops|accessories/i
			});
			expect(filterButtons.length).toBeGreaterThanOrEqual(4);
		});

		await step('Navigation elements are present', async () => {
			const navElements = canvasElement.querySelectorAll('nav, [role="navigation"]');
			expect(navElements.length).toBeGreaterThanOrEqual(1);
		});

		await step('Footer is present', async () => {
			const footer = canvasElement.querySelector('footer');
			expect(footer).toBeInTheDocument();
		});

		await step('Skip link is accessible', async () => {
			const skipLink = canvas.getByRole('link', { name: /skip to main content/i });
			expect(skipLink).toBeInTheDocument();
		});
	}
};
