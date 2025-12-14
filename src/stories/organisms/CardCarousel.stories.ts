import type { Meta, StoryObj } from '@storybook/sveltekit';
import { expect, userEvent, within } from '@storybook/test';
import CardCarousel from '$lib/components/organisms/CardCarousel.svelte';
import {
	ACME_LAPTOPS,
	ACME_PHONE_PRO,
	ACME_TABLET_PRO,
	GENERIC_COLORS
} from '$lib/fixtures/products';

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
		id: 'laptop-air',
		title: ACME_LAPTOPS[0].title,
		subtitle: ACME_LAPTOPS[0].processor,
		description: ACME_LAPTOPS[0].description,
		priceDetail: ACME_LAPTOPS[0].startingPrice,
		image:
			ACME_LAPTOPS[0].heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
		colors: ACME_LAPTOPS[0].colors || [
			GENERIC_COLORS.midnightBlue,
			GENERIC_COLORS.starlight,
			GENERIC_COLORS.spaceGray,
			GENERIC_COLORS.silver
		],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'laptops'
	},
	{
		id: 'laptop-pro-14',
		title: ACME_LAPTOPS[1].title,
		subtitle: ACME_LAPTOPS[1].processor,
		description: ACME_LAPTOPS[1].description,
		priceDetail: ACME_LAPTOPS[1].startingPrice,
		badge: 'New',
		badgeColor: 'orange',
		image:
			ACME_LAPTOPS[1].heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
		colors: ACME_LAPTOPS[1].colors || [GENERIC_COLORS.spaceGray, GENERIC_COLORS.silver],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'laptops'
	},
	{
		id: 'laptop-pro-16',
		title: ACME_LAPTOPS[2].title,
		subtitle: ACME_LAPTOPS[2].processor,
		description: ACME_LAPTOPS[2].description,
		priceDetail: ACME_LAPTOPS[2].startingPrice,
		image:
			ACME_LAPTOPS[2].heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
		colors: ACME_LAPTOPS[2].colors || [GENERIC_COLORS.spaceGray, GENERIC_COLORS.silver],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'laptops'
	},
	{
		id: 'phone-pro',
		title: ACME_PHONE_PRO.title,
		subtitle: ACME_PHONE_PRO.processor,
		description: ACME_PHONE_PRO.description,
		priceDetail: ACME_PHONE_PRO.startingPrice,
		image:
			ACME_PHONE_PRO.heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
		colors: ACME_PHONE_PRO.colors || [
			GENERIC_COLORS.midnightBlue,
			GENERIC_COLORS.spaceGray,
			GENERIC_COLORS.silver,
			GENERIC_COLORS.gold
		],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'phones'
	},
	{
		id: 'tablet-pro',
		title: ACME_TABLET_PRO.title,
		subtitle: ACME_TABLET_PRO.processor,
		description: ACME_TABLET_PRO.description,
		priceDetail: ACME_TABLET_PRO.startingPrice,
		image:
			ACME_TABLET_PRO.heroImage ||
			'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
		colors: ACME_TABLET_PRO.colors || [GENERIC_COLORS.spaceGray, GENERIC_COLORS.silver],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'tablets'
	}
];

export const Default: Story = {
	args: {
		title: 'Our Products',
		products,
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'phones', label: 'Phones' },
			{ id: 'tablets', label: 'Tablets' }
		]
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);

		// Test 1: Verify carousel renders
		const carousel = canvas.getByRole('region', { name: /card carousel/i });
		await expect(carousel).toBeInTheDocument();
		await expect(carousel).toBeVisible();

		// Test 2: Verify title is displayed
		const title = canvas.getByRole('heading', { name: /our products/i });
		await expect(title).toBeInTheDocument();

		// Test 3: Verify tabs are rendered
		const allTab = canvas.getByRole('tab', { name: /all products/i });
		await expect(allTab).toBeInTheDocument();

		const laptopsTab = canvas.getByRole('tab', { name: /laptops/i });
		await expect(laptopsTab).toBeInTheDocument();

		const phonesTab = canvas.getByRole('tab', { name: /phones/i });
		await expect(phonesTab).toBeInTheDocument();

		const tabletsTab = canvas.getByRole('tab', { name: /tablets/i });
		await expect(tabletsTab).toBeInTheDocument();

		// Test 4: Verify products are displayed
		const laptopAir = canvas.getByText(ACME_LAPTOPS[0].title);
		await expect(laptopAir).toBeInTheDocument();

		const laptopPro = canvas.getByText(ACME_LAPTOPS[1].title);
		await expect(laptopPro).toBeInTheDocument();

		// Test 5: Test tab navigation
		await userEvent.click(laptopsTab);
		await expect(laptopsTab).toHaveAttribute('aria-selected', 'true');

		// Verify laptops are still visible after tab switch
		await expect(laptopAir).toBeInTheDocument();
		await expect(laptopPro).toBeInTheDocument();

		// Test 6: Test phones tab
		await userEvent.click(phonesTab);
		await expect(phonesTab).toHaveAttribute('aria-selected', 'true');

		const phonePro = canvas.getByText(ACME_PHONE_PRO.title);
		await expect(phonePro).toBeInTheDocument();

		// Test 7: Test tablets tab
		await userEvent.click(tabletsTab);
		await expect(tabletsTab).toHaveAttribute('aria-selected', 'true');

		const tabletPro = canvas.getByText(ACME_TABLET_PRO.title);
		await expect(tabletPro).toBeInTheDocument();

		// Test 8: Test keyboard navigation between tabs
		await userEvent.keyboard('{ArrowRight}');
		// Should move to next tab

		// Test 9: Verify action buttons
		const learnMoreButtons = canvas.getAllByRole('link', { name: /learn more/i });
		expect(learnMoreButtons.length).toBeGreaterThan(0);

		const buyButtons = canvas.getAllByRole('link', { name: /buy/i });
		expect(buyButtons.length).toBeGreaterThan(0);

		// Test 10: Verify images are present
		const images = canvas.getAllByRole('img');
		expect(images.length).toBeGreaterThan(0);

		// Test 11: Test infinite scroll behavior (if implemented)
		// This would depend on the actual carousel implementation
	}
};

export const MinimalCards: Story = {
	args: {
		title: 'Our Products',
		products,
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'phones', label: 'Phones' },
			{ id: 'tablets', label: 'Tablets' }
		],
		cardVariant: 'minimal',
		imageContainerClass: 'bg-gray-50 rounded-3xl overflow-hidden'
	}
};

export const FeatureCards: Story = {
	args: {
		title: 'Get to know our products',
		cardType: 'feature',
		tabs: [],
		cardVariant: 'minimal',
		products: [
			{
				id: 'performance',
				title: 'Go fast. Go far.',
				subtitle: 'Performance and Battery Life',
				description:
					'With our latest processors, our laptops deliver incredible performance.',
				image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
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
				description: 'Our AI features help you write and get things done effortlessly.',
				image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
				colors: [],
				primaryAction: { label: 'Learn more', href: '#' },
				secondaryAction: { label: '', href: '' },
				category: 'getting-started',
				textColor: 'white'
			}
		]
	}
};
