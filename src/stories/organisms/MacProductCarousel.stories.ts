import type { Meta, StoryObj } from '@storybook/sveltekit';
import MacProductCarousel from '$lib/components/organisms/MacProductCarousel.svelte';

const meta = {
	title: 'Organisms/MacProductCarousel',
	component: MacProductCarousel,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs']
} satisfies Meta<typeof MacProductCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const products = [
	{
		id: 'macbook-air',
		title: 'MacBook Air 13” and 15”',
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
		title: 'MacBook Pro 14” and 16”',
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
	},
	{
		id: 'studio-display',
		title: 'Studio Display',
		subtitle: 'Retina 5K display',
		description: 'A 27-inch 5K Retina display paired with a 12MP Ultra Wide camera.',
		priceDetail: 'From $1599 or $133.25/mo. for 12 mo.**',
		image: 'https://www.apple.com/assets-www/en_WW/mac/01_product_tile/xlarge/studio_display_5958bd8d8_2x.jpg',
		colors: [],
		primaryAction: { label: 'Learn more', href: '#' },
		secondaryAction: { label: 'Buy', href: '#' },
		category: 'displays'
	}
];

export const Default: Story = {
	args: {
		title: 'Mac',
		products,
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'desktops', label: 'Desktops' },
			{ id: 'displays', label: 'Displays' }
		]
	}
};

export const AppleStore: Story = {
	args: {
		title: 'Mac',
		products,
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'laptops', label: 'Laptops' },
			{ id: 'desktops', label: 'Desktops' },
			{ id: 'displays', label: 'Displays' }
		],
		cardVariant: 'minimal',
		imageContainerClass: 'bg-gray-50 rounded-3xl overflow-hidden'
	}
};

export const GetToKnowMac: Story = {
	args: {
		title: 'Get to know Mac',
		cardType: 'feature',
		tabs: [],
		cardVariant: 'minimal',
		imageContainerClass: 'bg-gray-50 rounded-3xl overflow-hidden',
		products: [
			{
				id: 'performance',
				title: 'Go fast. Go far.',
				subtitle: 'Performance and Battery Life',
				description:
					'With Apple silicon, Mac laptops deliver incredible performance and battery life.',
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
				description:
					'Apple Intelligence is the personal intelligence system that helps you write, express yourself, and get things done effortlessly.',
				image: 'https://www.apple.com/v/mac/home/ca/images/overview/get-to-know/mac_intelligence__c40u1141f80y_large.jpg',
				colors: [],
				primaryAction: { label: 'Learn more', href: '#' },
				secondaryAction: { label: '', href: '' },
				category: 'getting-started',
				textColor: 'white'
			},
			{
				id: 'macos',
				title: 'Easy to use. Easy to love.',
				subtitle: 'macOS and Apple Intelligence',
				description: 'Simple, intuitive, and packed with powerful features.',
				image: 'https://www.apple.com/v/mac/home/ca/images/overview/get-to-know/mac_ease__bvgkz2zdltxy_large.jpg',
				colors: [],
				primaryAction: { label: 'Learn more', href: '#' },
				secondaryAction: { label: '', href: '' },
				category: 'getting-started',
				textColor: 'black'
			},
			{
				id: 'continuity',
				title: 'Together they work wonders.',
				subtitle: 'Mac + iPhone',
				description:
					'Copy on iPhone, paste on Mac. Answer calls on your Mac. And so much more.',
				image: 'https://www.apple.com/v/mac/home/ca/images/overview/get-to-know/mac_iphone__gh1tblkt6bqm_large.jpg',
				colors: [],
				primaryAction: { label: 'Learn more', href: '#' },
				secondaryAction: { label: '', href: '' },
				category: 'collaboration',
				textColor: 'black'
			}
		]
	}
};

export const NjingaCollection: Story = {
	args: {
		title: 'Accessoires de cheveux',
		tabs: [
			{ id: 'all', label: 'All products' },
			{ id: 'turbans', label: 'Turbans' },
			{ id: 'headbands', label: 'Headbands' },
			{ id: 'scarves', label: 'Scarves' }
		],
		cardVariant: 'minimal',
		imageContainerClass: 'bg-gray-50 rounded-3xl overflow-hidden',
		products: [
			{
				id: 'turban-dore',
				title: 'Doré',
				subtitle: 'Accessoire de cheveux',
				description: 'Un turban élégant et modulable pour toutes les occasions.',
				priceDetail: '€49,99',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
				colors: ['gold', 'silver', 'black'],
				primaryAction: { label: 'Voir', href: '#' },
				secondaryAction: { label: 'Acheter', href: '#' },
				category: 'turbans'
			},
			{
				id: 'turban-panthere',
				title: 'Panthère',
				subtitle: 'Accessoire de cheveux',
				description: 'Osez le motif panthère pour un look audacieux.',
				priceDetail: '€49,99',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
				colors: ['gold', 'silver', 'black'],
				primaryAction: { label: 'Voir', href: '#' },
				secondaryAction: { label: 'Acheter', href: '#' },
				category: 'headbands'
			},
			{
				id: 'turban-malabo',
				title: 'Malabo',
				subtitle: 'Accessoire de cheveux',
				description: 'Le modèle Malabo apporte une touche de couleur et de fraîcheur.',
				priceDetail: '€49,99',
				image: 'https://njinga.fr/cdn/shop/files/EC_les_gars_540x.jpg?v=1645791000',
				colors: ['red', 'blue', 'black'],
				primaryAction: { label: 'Voir', href: '#' },
				secondaryAction: { label: 'Acheter', href: '#' },
				category: 'scarves'
			}
		]
	}
};
