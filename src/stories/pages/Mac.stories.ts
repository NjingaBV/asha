import type { Meta, StoryObj } from '@storybook/sveltekit';
import Mac from '$lib/components/pages/Mac.svelte';

const meta = {
	title: 'Pages/Mac',
	component: Mac,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# Mac Landing Page

Complete Apple Mac landing page implementation inspired by https://www.apple.com/mac/

## Overview

The Mac page is a full-featured landing page showcasing all Mac models with hero sections, product showcases, and comparison tools. It follows Apple's clean, minimal design aesthetic with focus on product imagery and clear calls-to-action.

## Page Structure

The page combines multiple organisms following the Atomic Design methodology:
- **Header**: Persistent navigation with logo
- **MacHero**: Large hero banner with product spotlight
- **NavigationBar**: Sticky navigation for Mac models
- **MacShowcase**: Grid of all Mac products
- **MacComparison**: Side-by-side feature comparison
- **Footer**: Site footer with links

## Key Features

- **Comprehensive Product Display**: Shows all Mac models with images, prices, and specifications
- **Hero Section**: Large, impactful hero with product image and CTAs
- **Sticky Navigation**: Quick access to different Mac models
- **Product Cards**: Individual cards for each Mac with color options and pricing
- **Comparison Tool**: Side-by-side feature comparison
- **Responsive Design**: Mobile-first with adaptive layouts
- **Consistent Branding**: Apple-style typography, colors, and spacing

## Use Cases

- **Product Landing Pages**: Showcase multiple products in a category
- **E-commerce Sites**: Display product lines with comparison features
- **Marketing Campaigns**: Product launches and promotions
- **Portfolio Sites**: Creative work showcases

## Best Practices

1. **Hero Image**: Use high-quality product images at appropriate resolutions
2. **Product Grid**: Limit to 6-8 products for optimal browsing
3. **Comparison**: Highlight recommended products
4. **CTAs**: Keep "Learn more" and "Buy" consistent across all cards
5. **Colors**: Show available color options for products
6. **Pricing**: Always display starting price clearly
7. **Navigation**: Keep sticky nav items to 6-8 for desktop visibility

## Accessibility

- Semantic HTML structure with proper headings
- ARIA labels on navigation and interactive elements
- Keyboard navigation support
- Alt text on all images
- Sufficient color contrast
- Focus visible states on all interactive elements

## Component Composition

### Atoms
- **Link**: Navigation and CTA links
- **Image**: Responsive product images
- **Label**: "New" badges
- **Heading**: Section titles
- **Paragraph**: Descriptions and pricing

### Molecules
- **MacCard**: Individual product cards
- **NavigationBar**: Sticky product navigation
- **ComparisonCard**: Feature comparison cards

### Organisms
- **Header**: Site header with navigation
- **MacHero**: Large hero section
- **MacShowcase**: Product grid section
- **MacComparison**: Comparison section
- **Footer**: Site footer

### Page Hierarchy
\`\`\`
Mac (Page)
├── Header (Organism)
│   └── Logo (Molecule)
│   └── Nav Links (Atoms)
├── MacHero (Organism)
│   └── Heading (Atom)
│   └── Paragraph (Atom)
│   └── Link (Atom) × 2
│   └── Label (Atom)
│   └── Image (Atom)
├── NavigationBar (Molecule)
│   └── Link (Atom) × N
├── MacShowcase (Organism)
│   └── MacCard (Molecule) × N
│       └── Image (Atom)
│       └── Label (Atom)
│       └── Heading (Atom)
│       └── Paragraph (Atom)
│       └── Link (Atom) × 2
├── MacComparison (Organism)
│   └── ComparisonCard (Molecule) × N
│       └── Image (Atom)
│       └── Heading (Atom)
│       └── Paragraph (Atom)
└── Footer (Organism)
\`\`\`

## Data Requirements

### Required Props
- **logo**: Logo configuration object
- **hero**: Hero section data with title, images, CTAs

### Optional Props
- **navLinks**: Array of main navigation links
- **macNavItems**: Array of Mac model navigation items
- **products**: Array of Mac products for showcase
- **comparisonItems**: Array of items for comparison
- **showComparison**: Boolean to show/hide comparison section

## Integration Notes

- Works with SvelteKit routing
- CMS integration ready (prop-driven content)
- Supports internationalization (all text as props)
- Analytics tracking points on CTAs
- A/B testing friendly structure`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		logo: {
			control: 'object',
			description: 'Logo configuration for header'
		},
		hero: {
			control: 'object',
			description: 'Hero section configuration'
		},
		products: {
			control: 'object',
			description: 'Array of Mac products to display'
		},
		showComparison: {
			control: 'boolean',
			description: 'Show comparison section'
		}
	}
} satisfies Meta<typeof Mac>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FullMacPage: Story = {
	args: {
		logo: {
			title: 'Apple',
			imgUrl: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg',
			imgAlt: 'Apple logo',
			showTitle: false
		},
		navLinks: [
			{ label: 'Mac', href: '/mac' },
			{ label: 'iPad', href: '/ipad' },
			{ label: 'iPhone', href: '/iphone' },
			{ label: 'Watch', href: '/watch' },
			{ label: 'Support', href: '/support' }
		],
		macNavItems: [
			{ label: 'MacBook Air', href: '#macbook-air' },
			{ label: 'MacBook Pro', href: '#macbook-pro' },
			{ label: 'iMac', href: '#imac' },
			{ label: 'Mac mini', href: '#mac-mini' },
			{ label: 'Mac Studio', href: '#mac-studio' },
			{ label: 'Compare', href: '#compare' }
		],
		hero: {
			title: 'MacBook Air',
			subtitle: 'Supercharged by M3',
			description:
				"The world's best-selling laptop is now even more powerful with the M3 chip.",
			imageDesktop:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
			imageMobile:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
			imageAlt: 'MacBook Air with M3 chip',
			isNew: true,
			learnMoreHref: '#learn-more',
			buyHref: '#buy',
			backgroundColor: '#000000',
			textColor: 'light'
		},
		products: [
			{
				title: 'MacBook Air',
				tagline: 'Supercharged by M3',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'MacBook Air',
				price: 'From $1,099',
				isNew: true,
				colors: ['#E8E8ED', '#1D1D1F', '#F0E4D3', '#7D7E80'],
				learnMoreHref: '#macbook-air',
				buyHref: '#buy-macbook-air'
			},
			{
				title: 'MacBook Pro 14"',
				tagline: 'Mind-blowing performance',
				image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=450&fit=crop',
				imageAlt: 'MacBook Pro 14"',
				price: 'From $1,999',
				isNew: false,
				colors: ['#E8E8ED', '#1D1D1F'],
				learnMoreHref: '#macbook-pro-14',
				buyHref: '#buy-macbook-pro-14'
			},
			{
				title: 'MacBook Pro 16"',
				tagline: 'The ultimate pro laptop',
				image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=600&h=450&fit=crop',
				imageAlt: 'MacBook Pro 16"',
				price: 'From $2,499',
				isNew: false,
				colors: ['#E8E8ED', '#1D1D1F'],
				learnMoreHref: '#macbook-pro-16',
				buyHref: '#buy-macbook-pro-16'
			},
			{
				title: 'iMac',
				tagline: 'A statement. Instantly.',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'iMac',
				price: 'From $1,299',
				isNew: false,
				colors: [
					'#5E9BED',
					'#E8518F',
					'#F0B54D',
					'#64D6A7',
					'#B576E8',
					'#EC7D6A',
					'#E8E8ED'
				],
				learnMoreHref: '#imac',
				buyHref: '#buy-imac'
			},
			{
				title: 'Mac mini',
				tagline: 'The mighty mini',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'Mac mini',
				price: 'From $599',
				isNew: false,
				colors: ['#E8E8ED'],
				learnMoreHref: '#mac-mini',
				buyHref: '#buy-mac-mini'
			},
			{
				title: 'Mac Studio',
				tagline: 'Supercharged for pros',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'Mac Studio',
				price: 'From $1,999',
				isNew: false,
				colors: ['#E8E8ED'],
				learnMoreHref: '#mac-studio',
				buyHref: '#buy-mac-studio'
			}
		],
		comparisonItems: [
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'MacBook Air',
				name: 'MacBook Air',
				price: 'From $1,099',
				features: [
					'M3 chip',
					'13.6" Liquid Retina display',
					'Up to 18 hours battery',
					'1080p FaceTime HD camera',
					'MagSafe charging'
				],
				highlighted: false
			},
			{
				image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=300&fit=crop',
				imageAlt: 'MacBook Pro 14"',
				name: 'MacBook Pro 14"',
				price: 'From $1,999',
				features: [
					'M3 Pro or M3 Max chip',
					'14.2" Liquid Retina XDR display',
					'Up to 22 hours battery',
					'Advanced thermal system',
					'3 Thunderbolt 4 ports'
				],
				highlighted: true
			},
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'iMac',
				name: 'iMac',
				price: 'From $1,299',
				features: [
					'M3 chip',
					'24" 4.5K Retina display',
					'1080p FaceTime HD camera',
					'Six-speaker sound system',
					'Four USB-C ports'
				],
				highlighted: false
			},
			{
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300&h=300&fit=crop',
				imageAlt: 'Mac mini',
				name: 'Mac mini',
				price: 'From $599',
				features: [
					'M2 or M2 Pro chip',
					'Supports up to two displays',
					'Gigabit Ethernet',
					'Two Thunderbolt 4 ports',
					'Compact design'
				],
				highlighted: false
			}
		],
		showComparison: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete Mac landing page showcasing all Mac models with hero, product grid, and comparison sections. Features sticky navigation, responsive design, and Apple-style aesthetics. This story demonstrates the full page structure with all sections enabled.'
			}
		}
	}
};

export const HeroAndShowcase: Story = {
	args: {
		...FullMacPage.args,
		showComparison: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Mac page with hero and product showcase only, without comparison section. Ideal for simpler product pages or when comparison is handled separately.'
			}
		}
	}
};

export const MinimalPage: Story = {
	args: {
		logo: {
			title: 'Apple',
			imgUrl: 'https://www.apple.com/ac/globalnav/7/en_US/images/be15095f-5a20-57d0-ad14-cf4c638e223a/globalnav_apple_image__b5er5ngrzxqq_large.svg',
			imgAlt: 'Apple logo',
			showTitle: false
		},
		navLinks: [
			{ label: 'Mac', href: '/mac' },
			{ label: 'Support', href: '/support' }
		],
		macNavItems: [],
		hero: {
			title: 'MacBook Air',
			subtitle: 'Supercharged by M3',
			imageDesktop:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
			imageAlt: 'MacBook Air',
			isNew: true,
			learnMoreHref: '#',
			buyHref: '#',
			backgroundColor: '#000000',
			textColor: 'light'
		},
		products: [
			{
				title: 'MacBook Air',
				tagline: 'Supercharged by M3',
				image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=450&fit=crop',
				imageAlt: 'MacBook Air',
				price: 'From $1,099',
				isNew: true,
				learnMoreHref: '#',
				buyHref: '#'
			}
		],
		showComparison: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Minimal Mac page with just hero and a single product. Perfect for focused product launches or single-product campaigns.'
			}
		}
	}
};
