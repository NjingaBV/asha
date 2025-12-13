import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import CardCarousel from '$lib/components/organisms/CardCarousel.svelte';

const meta = {
	title: 'Organisms/CardCarousel',
	component: CardCarousel,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		products: { control: 'object' },
		tabs: { control: 'object' },
		cardVariant: {
			control: { type: 'select' },
			options: ['default', 'minimal']
		},
		imageContainerClass: { control: 'text' },
		cardType: {
			control: { type: 'select' },
			options: ['product', 'feature']
		}
	}
} satisfies Meta<typeof CardCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const products = [
	{
		id: 'macbook-air',
		title: 'MacBook Air 13" and 15"',
		subtitle: 'M3 chip',
		description: 'Strikingly thin and fast so you can work, play, or create anywhere.',
		priceDetail: 'From $999 or $83.25/mo. for 12 mo.**',
		image: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mba_13_15_140e630d3_2x.jpg',
		colors: ['midnight', 'starlight', 'silver', 'space-gray'],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'laptops'
	},
	{
		id: 'macbook-pro',
		title: 'MacBook Pro 14" and 16"',
		subtitle: 'M5, M4 Pro, or M4 Max chip',
		description: 'The most advanced Mac laptops for demanding workflows.',
		priceDetail: 'From $1599 or $133.25/mo. for 12 mo.**',
		badge: 'New 14" with M5',
		badgeColor: 'orange',
		image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spaceblack-select-202410?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1728916255121',
		colors: ['space-black', 'silver'],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'laptops'
	},
	{
		id: 'imac',
		title: 'iMac',
		subtitle: 'M4 chip',
		description: 'A stunning all-in-one desktop for creativity and productivity.',
		priceDetail: 'From $1299 or $108.25/mo. for 12 mo.**',
		image: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/imac_24_cc965acc1_2x.jpg',
		colors: ['blue', 'green', 'pink', 'silver', 'yellow', 'orange', 'purple'],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'desktops'
	},
	{
		id: 'mac-mini',
		title: 'Mac mini',
		subtitle: 'M4 or M4 Pro chip',
		description: 'The mini-est, mightiest Mac ever.',
		priceDetail: 'From $599 or $49.91/mo. for 12 mo.**',
		image: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/mac_mini_f6ea6b417_2x.jpg',
		colors: ['silver'],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'desktops'
	}
];

export const Default: Story = {
	args: {
		title: 'Mac',
		products,
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'desktops', label: 'Desktops' }
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify carousel renders
		const carousel = canvas.getByRole('region', { name: /card carousel/i });
		await expect(carousel).toBeInTheDocument();
		await expect(carousel).toBeVisible();

		// Test 2: Verify title is displayed
		const title = canvas.getByRole('heading', { name: /mac/i });
		await expect(title).toBeInTheDocument();

		// Test 3: Verify tabs are rendered
		const allTab = canvas.getByRole('tab', { name: /all products/i });
		await expect(allTab).toBeInTheDocument();

		const laptopsTab = canvas.getByRole('tab', { name: /laptops/i });
		await expect(laptopsTab).toBeInTheDocument();

		const desktopsTab = canvas.getByRole('tab', { name: /desktops/i });
		await expect(desktopsTab).toBeInTheDocument();

		// Test 4: Verify products are displayed
		const macbookAir = canvas.getByText('MacBook Air 13" and 15"');
		await expect(macbookAir).toBeInTheDocument();

		const macbookPro = canvas.getByText('MacBook Pro 14" and 16"');
		await expect(macbookPro).toBeInTheDocument();

		// Test 5: Test tab navigation
		await userEvent.click(laptopsTab);
		await expect(laptopsTab).toHaveAttribute('aria-selected', 'true');

		// Verify laptops are still visible after tab switch
		await expect(macbookAir).toBeInTheDocument();
		await expect(macbookPro).toBeInTheDocument();

		// Test 6: Test desktops tab
		await userEvent.click(desktopsTab);
		await expect(desktopsTab).toHaveAttribute('aria-selected', 'true');

		const imac = canvas.getByText('iMac');
		await expect(imac).toBeInTheDocument();

		const macMini = canvas.getByText('Mac mini');
		await expect(macMini).toBeInTheDocument();

		// Test 7: Test keyboard navigation between tabs
		await userEvent.keyboard('{ArrowRight}');
		// Should move to next tab

		// Test 8: Verify action buttons
		const learnMoreButtons = canvas.getAllByRole('link', { name: /learn more/i });
		expect(learnMoreButtons.length).toBeGreaterThan(0);

		const buyButtons = canvas.getAllByRole('link', { name: /buy/i });
		expect(buyButtons.length).toBeGreaterThan(0);

		// Test 9: Verify images are present
		const images = canvas.getAllByRole('img');
		expect(images.length).toBeGreaterThan(0);

		// Test 10: Test infinite scroll behavior (if implemented)
		// This would depend on the actual carousel implementation
	}
};

export const MinimalCards: Story = {
	args: {
		title: 'Mac',
		products,
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'desktops', label: 'Desktops' }
		],
		cardVariant: 'minimal',
		imageContainerClass: 'bg-gray-50 rounded-3xl overflow-hidden'
	}
};

export const FeatureCards: Story = {
	args: {
		title: 'Get to know Mac',
		cardType: 'feature',
		tabs: [],
		cardVariant: 'minimal',
		products: [
			{
				id: 'performance',
				title: 'Go fast. Go far.',
				subtitle: 'Performance and Battery Life',
				description: 'With Apple silicon, Mac laptops deliver incredible performance.',
				image: 'https://www.apple.com/v/mac/home/ca/images/overview/get-to-know/mac_performance__d19401l8acme_large.jpg',
				colors: [],
				primaryAction: { label: 'Learn more', href: '#' },
				secondaryAction: { label: '', href: '' },
				category: 'performance',
				textColor: 'white'
			},
			{
				id: 'ai',
				title: 'Smart. Secure. On device.',
				subtitle: 'Built for AI',
				description: 'Apple Intelligence helps you write and get things done effortlessly.',
				image: 'https://www.apple.com/v/mac/home/ca/images/overview/get-to-know/mac_intelligence__c40u1141f80y_large.jpg',
				colors: [],
				primaryAction: { label: 'Learn more', href: '#' },
				secondaryAction: { label: '', href: '' },
				category: 'getting-started',
				textColor: 'white'
			}
		]
	}
};
