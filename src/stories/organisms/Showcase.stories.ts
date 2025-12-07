import type { Meta, StoryObj } from '@storybook/sveltekit';
import Showcase from '@/lib/components/organisms/Showcase.svelte';

const meta = {
	title: 'Organisms/Showcase',
	component: Showcase,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Showcase Component

A responsive grid component for displaying Mac product cards with title and description.

## Features

- **Responsive Grid**: 1 column (mobile), 2 columns (tablet), 3 columns (desktop)
- **Product Cards**: MacCard components for each product
- **Section Header**: Title and description text
- **Flexible Products**: Any number of Mac products supported
- **Centered Layout**: Max-width container with centered alignment
- **Consistent Spacing**: Proper padding and gap between products

## Product Structure

Each product should include:
- \`title\`: Product name (required)
- \`tagline\`: Short description or tagline
- \`image\`: Product image URL
- \`imageAlt\`: Alt text for accessibility
- \`price\`: Starting price text
- \`isNew\`: Whether to show a "New" badge
- \`colors\`: Array of available color hex codes
- \`learnMoreHref\`: Learn more link URL
- \`buyHref\`: Buy now link URL

## Use Cases

- Mac product lineup showcase
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

const macProductData = {
	macbookAir: {
		title: 'MacBook Air',
		tagline: 'Supercharged by M3',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'MacBook Air',
		price: 'From $1,099',
		isNew: true,
		colors: ['#E8E8ED', '#1D1D1F', '#F0E4D3', '#7D7E80'],
		learnMoreHref: '#',
		buyHref: '#'
	},
	macbookPro14: {
		title: 'MacBook Pro 14"',
		tagline: 'Mind-blowing performance',
		image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=450&fit=crop',
		imageAlt: 'MacBook Pro 14"',
		price: 'From $1,999',
		isNew: false,
		colors: ['#E8E8ED', '#1D1D1F'],
		learnMoreHref: '#',
		buyHref: '#'
	},
	macbookPro16: {
		title: 'MacBook Pro 16"',
		tagline: 'Maximum power. Maximum screen.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'MacBook Pro 16"',
		price: 'From $2,499',
		isNew: false,
		colors: ['#E8E8ED', '#1D1D1F'],
		learnMoreHref: '#',
		buyHref: '#'
	},
	iMac: {
		title: 'iMac',
		tagline: 'A statement. Instantly.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'iMac',
		price: 'From $1,299',
		isNew: false,
		colors: ['#5E9BED', '#E8518F', '#F0B54D', '#64D6A7', '#B576E8', '#EC7D6A', '#E8E8ED'],
		learnMoreHref: '#',
		buyHref: '#'
	},
	macMini: {
		title: 'Mac mini',
		tagline: 'Mighty power. Compact size.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'Mac mini',
		price: 'From $599',
		isNew: false,
		colors: ['#E8E8ED', '#1D1D1F'],
		learnMoreHref: '#',
		buyHref: '#'
	},
	macStudio: {
		title: 'Mac Studio',
		tagline: 'Pro power. Pro flexibility.',
		image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
		imageAlt: 'Mac Studio',
		price: 'From $1,999',
		isNew: true,
		colors: ['#E8E8ED', '#1D1D1F'],
		learnMoreHref: '#',
		buyHref: '#'
	}
};

export const AllMacs: Story = {
	args: {
		title: 'Which Mac is right for you?',
		description: 'Choose the perfect Mac for your needs',
		products: [macProductData.macbookAir, macProductData.macbookPro14, macProductData.iMac]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const ThreeProducts: Story = {
	args: {
		title: 'Best Sellers',
		description: 'Our most popular Mac models',
		products: [macProductData.macbookAir, macProductData.macbookPro14, macProductData.iMac]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const FiveProducts: Story = {
	args: {
		title: 'Complete Mac Lineup',
		description: 'Explore all Mac models available',
		products: [
			macProductData.macbookAir,
			macProductData.macbookPro14,
			macProductData.macbookPro16,
			macProductData.iMac,
			macProductData.macMini
		]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const SixProducts: Story = {
	args: {
		title: 'Explore All Macs',
		description: 'Find the perfect Mac for your creative needs',
		products: [
			macProductData.macbookAir,
			macProductData.macbookPro14,
			macProductData.macbookPro16,
			macProductData.iMac,
			macProductData.macMini,
			macProductData.macStudio
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
		products: [macProductData.macbookAir, macProductData.macbookPro14, macProductData.iMac]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const TitleOnly: Story = {
	args: {
		title: 'Mac Products',
		description: undefined,
		products: [macProductData.macbookAir, macProductData.macbookPro14, macProductData.iMac]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const DescriptionOnly: Story = {
	args: {
		title: undefined,
		description: 'All our Mac models with detailed specifications',
		products: [macProductData.macbookAir, macProductData.macbookPro14, macProductData.iMac]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const SingleProduct: Story = {
	args: {
		title: 'Featured Product',
		description: 'The ultimate MacBook Air',
		products: [macProductData.macbookAir]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const DesktopsOnly: Story = {
	args: {
		title: 'Desktop Macs',
		description: 'Power and performance for your desk',
		products: [macProductData.iMac, macProductData.macMini, macProductData.macStudio]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};

export const LaptopsOnly: Story = {
	args: {
		title: 'MacBook Lineup',
		description: 'Power in your pocket',
		products: [
			macProductData.macbookAir,
			macProductData.macbookPro14,
			macProductData.macbookPro16
		]
	},
	render: ({ title, description, products, className }: any) => ({
		Component: Showcase,
		props: { title, description, products, className }
	})
};
