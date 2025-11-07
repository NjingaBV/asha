import type { Meta, StoryObj } from '@storybook/sveltekit';
import Shelf from '@/lib/components/templates/Shelf.svelte';

const meta = {
	title: 'Templates/Shelf',
	component: Shelf,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# Shelf Template

A flexible, slice-based template that enables the creation of dynamic, multi-section page layouts with optional navigation and alternating background colors.

## Overview

The Shelf template is a foundational layout component that orchestrates multiple content slices into a cohesive page structure. It provides a flexible container that can display various organisms and molecules in a vertical stack, making it ideal for building landing pages, marketing sites, and content-rich applications.

## Key Features

- **Slice-Based Architecture**: Dynamically renders different content types (hero, carousel, features, etc.) based on configuration
- **Navigation Integration**: Optional full-screen navigation overlay that can be toggled
- **Alternating Backgrounds**: Supports alternating background colors for visual rhythm and content separation
- **Flexible Content Composition**: Seamlessly integrates various organisms including Hero, Carousel, Features, TextAnimation, Slogan, HeroTile, and CallToAction
- **Responsive Design**: Adapts to all screen sizes with mobile-first approach
- **Consistent Spacing**: Maintains visual consistency across different slice types

## Page Layout Structure

The template follows this hierarchical structure:

\`\`\`
<main>
  └── Nav (conditional, overlay)
  └── Section (per slice)
      └── Component (CallToAction | Carousel | Hero | Slogan | Features | TextAnimation | HeroTile)
\`\`\`

Each slice is wrapped in a full-width section with configurable background color, and the appropriate component is dynamically rendered based on the slice's \`name\` property.

## Component Composition

### Atoms
- **Nav**: Primary navigation component (conditionally rendered)

### Molecules
- **CallToAction**: Action-oriented content with buttons
- **Hero**: Hero banner with title, description, and media

### Organisms
- **Carousel**: Image/content carousel
- **Features**: Feature showcase grid
- **Slogan**: Animated or static slogan display
- **TextAnimation**: Animated text with labels and colors
- **HeroTile**: Tile-based hero layout with logo and images

## Use Cases

- **Landing Pages**: Create dynamic landing pages with multiple content sections
- **Marketing Sites**: Build product pages with alternating content blocks
- **Portfolio Sites**: Showcase work with varied content types
- **Campaign Pages**: Design promotional pages with flexible layouts
- **Multi-Section Content**: Any page requiring multiple distinct content areas

## Best Practices

1. **Slice Ordering**: Place hero or high-impact content first for user engagement
2. **Visual Rhythm**: Use alternateColor for pages with 3+ slices to create visual hierarchy
3. **Content Balance**: Mix different slice types to maintain user interest
4. **Navigation State**: Ensure navigation state is properly managed when overlay is active
5. **Performance**: Consider lazy-loading for pages with many image-heavy slices
6. **Accessibility**: Ensure each slice has proper semantic structure and ARIA labels

## Accessibility

- Semantic \`<main>\` landmark for primary content
- Individual \`<section>\` elements for each slice provide clear content boundaries
- Navigation overlay is keyboard-accessible
- Fixed positioning when navigation is open prevents scroll issues
- Each composed organism should implement its own accessibility requirements

## Content Guidelines

### Slices Array
Each slice object should include:
- \`name\`: Component identifier (matches switch case in template)
- Component-specific props (varies by slice type)
- Consistent data structure for similar content types

### Navigation Links
- Keep link text concise (1-2 words ideally)
- Ensure hrefs are valid and tested
- Consider mobile menu item count (max 5-7 recommended)

### Background Colors
- Use high contrast ratios for text readability
- Maintain brand consistency
- Test alternating colors for visual harmony

## Customization Points

1. **Background Colors**: Modify \`bgColor\` function for custom color schemes
2. **Slice Components**: Add new cases in \`getComponent\` switch statement
3. **Layout Direction**: Currently vertical, can be modified for horizontal sections
4. **Navigation Behavior**: Customize overlay appearance and behavior
5. **Section Styling**: Add custom classes or styles to section elements
6. **Responsive Breakpoints**: Adjust responsive behavior per slice type

## Responsive Behavior

- **Mobile**: Full-width sections with vertical stacking
- **Tablet**: Maintains vertical stack with optimized spacing
- **Desktop**: Full viewport width with component-specific responsive behavior
- **Navigation**: Transforms to full-screen overlay on mobile

## Data Requirements

### Required Props
- None (all props have defaults)

### Optional Props
- \`navLinks\`: Array of navigation link objects
- \`slices\`: Array of slice configuration objects
- \`open\`: Boolean for navigation state
- \`alternateColor\`: Boolean for alternating backgrounds

## Integration Notes

This template is designed to work with a slice-based CMS (like Prismic) but can be used with any data source. Ensure slice data matches the expected structure for each component type. The template handles missing components gracefully by not rendering them if no match is found.

## Technical Considerations

- Uses Svelte 5's \`$bindable\` for two-way binding on \`open\` state
- Dynamic component rendering with spread props
- Fixed positioning applied when navigation is open
- Each slice receives full-width, full-height dimensions
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		open: {
			control: 'boolean',
			description:
				'Controls the visibility of the full-screen navigation overlay. When true, displays the navigation menu and applies fixed positioning to prevent scrolling.'
		},
		alternateColor: {
			control: 'boolean',
			description:
				'Enables alternating background colors between slices. When true, odd-indexed slices use #f5f5f5 (light gray) and even-indexed slices use #ffffff (white). This creates visual rhythm and helps separate content sections.'
		},
		navLinks: {
			control: 'object',
			description:
				'Array of navigation link objects. Each link should have a `label` (string) and `href` (string) property. These links are displayed in the full-screen navigation overlay when `open` is true. Typically includes main site sections like Home, About, Contact, Products, etc.'
		},
		slices: {
			control: 'object',
			description:
				"Array of slice configuration objects that define the page content. Each slice object must have a `name` property that corresponds to a component type ('call-to-action', 'carousel', 'hero', 'slogan', 'features', 'text-animation', 'tiles'). Additional properties vary by slice type and are spread directly to the corresponding component. Slices are rendered in the order they appear in the array."
		}
	}
} satisfies Meta<typeof Shelf>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		open: false,
		alternateColor: true,
		navLinks: [
			{
				label: 'Home',
				href: '/'
			},
			{
				label: 'About',
				href: '/about'
			},
			{
				label: 'Contact',
				href: '/contact'
			}
		],
		slices: [
			{
				name: 'tiles',
				logo: {
					title: 'DJ FMK',
					subtitle: '',
					imgUrl: 'https://images.prismic.io/djfacemakerv2/f8e0f24e-8600-4867-9691-9efb20be9ea9_fmk+transition+blanc.png?auto=compress,format',
					imgAlt: 'DJ FMK logo',
					showTitle: false
				},
				images: [
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
				]
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic example of the Shelf template with a single HeroTile slice. Demonstrates the tile-based layout with logo and image grid, perfect for portfolio or gallery homepages. The alternating color feature is enabled to showcase the background color alternation capability.'
			}
		}
	}
};

export const DjFmkHome: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'DJ FMK homepage example showcasing the tile-based hero layout. This demonstrates a real-world use case for a DJ/artist website with a clean, image-focused presentation. Uses the HeroTile organism to create an engaging visual entry point.'
			}
		}
	}
};

export const NjingaHome: Story = {
	args: {
		...Primary.args,
		navLinks: [
			{
				label: 'Turbans modulables',
				href: '/'
			},
			{
				label: 'Headbands modulables',
				href: '/'
			},
			{
				label: 'Turbans croisés',
				href: '/'
			},
			{
				label: 'Echarpes capuches',
				href: '/'
			},
			{
				label: 'Bijoux',
				href: '/'
			}
		],
		slices: [
			{
				name: 'hero',
				title: "Des accessoires chics et malins pour avoir de l'allure.",
				overview: "Et si être élégante au quotidien n'était qu'une affaire de secondes?",
				details: '',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759'
				},
				backgroundColor: '#ffffff',
				ctaLabel: 'Découvrez comment',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'E-commerce homepage for Njinga fashion accessories. Demonstrates using the Hero slice type for product-focused landing pages with custom navigation links for product categories. Shows responsive image handling with desktop/mobile/tablet variants and custom CTA with icon. Ideal for fashion, retail, or product-based businesses.'
			}
		}
	}
};

export const OuranosHome: Story = {
	args: {
		...Primary.args,
		alternateColor: false,
		slices: [
			{
				name: 'text-animation',
				labels: [
					{
						color: '#22c55e',
						title: 'Simple'
					},
					{
						color: '#eab308',
						title: 'Transparente'
					},
					{
						color: '#3b82f6',
						title: 'Révolutionnaire'
					}
				]
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Minimalist homepage featuring the TextAnimation slice. Perfect for SaaS products, tech startups, or modern brands that want to emphasize key value propositions with animated, color-coded messaging. Demonstrates the text-animation slice type with custom color-coded labels that cycle through brand values. No alternating colors used for a cleaner, more focused presentation.'
			}
		}
	}
};
