import type { Meta, StoryObj } from '@storybook/sveltekit';
import Home from '@/lib/components/pages/Home.svelte';

const meta = {
	title: 'Pages/Home',
	component: Home,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# Home Page

A complete homepage implementation that combines a persistent header with navigation and a flexible shelf-based content system for building dynamic, multi-section homepages.

## Overview

The Home page is a full-featured page component that extends the Shelf template by adding a persistent header with navigation, logo, and optional CTA button. It serves as the primary entry point for websites and applications, providing a cohesive experience from navigation through content slices. The page architecture separates fixed elements (header) from dynamic content (slices), enabling consistent branding while maintaining content flexibility.

## Key Features

- **Persistent Header**: Sticky navigation header with logo and menu
- **Optional CTA**: Configurable call-to-action button in header
- **Flexible Content Slices**: Supports multiple content types (hero, carousel, features, etc.)
- **Integrated Navigation**: Full-screen overlay navigation that syncs with header
- **Slice-Based Content**: Dynamic rendering of different content sections
- **Alternating Backgrounds**: Optional visual rhythm through alternating section colors
- **Responsive Design**: Mobile-first with adaptive header and navigation
- **Bindable State**: Two-way navigation state binding between header and shelf

## Page Layout Structure

The page follows this hierarchical structure:

\`\`\`
Page Container
  └── Header (persistent)
      └── Logo (image or text)
      └── Navigation Links (collapsed to hamburger on mobile)
      └── CTA Button (optional)
      └── Hamburger Menu Toggle

  └── Shelf Template
      └── Nav Overlay (full-screen, conditional)
      └── Section × N (per slice)
          └── Dynamic Component (CallToAction | Carousel | Hero | Slogan | Features | TextAnimation | HeroTile)
\`\`\`

The header remains fixed while slices scroll beneath it, creating a standard web page experience.

## Component Composition

### Atoms
- **Button**: CTA button in header
- **Nav**: Full-screen navigation overlay
- **Logo**: Brand identity display
- **Hamburger**: Menu toggle icon

### Molecules
- **CallToAction**: Action-oriented content sections
- **Hero**: Hero banner sections with media

### Organisms
- **Header**: Primary navigation and branding container
- **Carousel**: Image/content carousels
- **Features**: Feature showcase grids
- **Slogan**: Animated or static slogan displays
- **TextAnimation**: Animated text with labels
- **HeroTile**: Tile-based hero layouts

### Templates
- **Shelf**: Slice-based content container

### Composition Hierarchy
\`\`\`
Home (Page)
└── Header (Organism)
    └── Logo (Atom)
    └── Nav Links (Atom)
    └── Button (Atom) [optional]
    └── Hamburger (Atom)
└── Shelf (Template)
    └── Nav (Atom) [overlay]
    └── Multiple Organisms/Molecules based on slice configuration
\`\`\`

## Use Cases

- **Corporate Homepages**: Business websites with navigation and multiple content sections
- **Portfolio Sites**: Creative showcases with persistent branding and flexible content
- **Product Marketing Sites**: Product-focused sites with clear navigation and multiple content blocks
- **Agency Sites**: Service providers with navigation and diverse content types
- **Landing Pages with Navigation**: Marketing pages that need persistent navigation
- **Multi-Section Campaigns**: Promotional pages with consistent header and varied content

## Best Practices

1. **Logo Strategy**: Use image logo for brand recognition, ensure it scales properly on mobile
2. **Navigation Links**: Limit to 5-7 main items, use clear, concise labels
3. **CTA Placement**: Only include header CTA if it's a primary conversion action (e.g., "Get Started", "Sign Up")
4. **Slice Ordering**: Start with hero or high-impact content, follow with details, end with CTA
5. **Content Balance**: Mix different slice types to maintain visual interest
6. **Navigation State**: Ensure menu open/close animations are smooth
7. **Mobile Menu**: Test hamburger menu with various link counts
8. **Header Height**: Consider header height when designing first slice (avoid content hiding)

## Accessibility

- Semantic \`<header>\` and \`<main>\` landmarks for page structure
- Keyboard-navigable header and navigation
- ARIA labels on hamburger menu button
- Focus management when navigation overlay opens
- Skip to main content link (recommended addition)
- Logo image has proper alt text
- Navigation links are keyboard accessible
- Sufficient color contrast in header and navigation
- Screen reader announcements for navigation state changes

## Content Guidelines

### Logo
- **title**: Text logo content if no image (fallback)
- **imgUrl**: Brand logo image URL (PNG/SVG preferred)
- **imgAlt**: Descriptive alt text for logo image
- **showTitle**: Show title text alongside or instead of image

### Navigation Links
- Keep labels short (1-2 words: "Home", "About", "Products")
- Order by importance (most important first)
- Use clear, action-oriented language
- Ensure hrefs point to valid routes
- Consider mobile menu length (5-7 items max recommended)

### CTA Button
- **label**: Clear action verb ("Get Started", "Try Free", "Contact")
- **url**: Destination URL or route
- **icon**: Optional SVG path for icon
- Only include if it's a primary conversion point

### Slices
Same guidelines as Shelf template:
- Start with engaging content (hero, tiles)
- Mix content types for variety
- End with call-to-action
- Each slice should have clear purpose

## Customization Points

1. **Header Styling**: Modify Header component for different styles (transparent, colored, shadows)
2. **Logo Display**: Configure logo size, position, or replace with custom branding
3. **Navigation Behavior**: Customize overlay animations or use dropdown/mega menu
4. **CTA Styling**: Customize button appearance through Button component
5. **Slice Selection**: Add/remove slice types in Shelf component
6. **Background Colors**: Enable/disable alternating colors, customize color scheme
7. **Header Fixed/Sticky**: Modify header position behavior
8. **Mobile Breakpoints**: Adjust when header collapses to mobile menu

## Responsive Behavior

### Mobile (< 768px)
- Logo size reduced
- Navigation links hidden, replaced with hamburger menu
- Full-screen navigation overlay on menu open
- CTA button may be hidden or repositioned
- Single column slice layouts
- Reduced header height

### Tablet (768px - 1024px)
- Medium logo size
- May still use hamburger menu depending on link count
- Two-column slice layouts where applicable
- Standard header height

### Desktop (> 1024px)
- Full logo size
- Horizontal navigation links visible
- No hamburger menu (unless many links)
- CTA button visible in header
- Full-width slice layouts with max-width containers
- Maximum header height

## Data Requirements

### Required Props
- **logo**: Logo configuration object with title, imgUrl, imgAlt

### Optional Props
- **cta**: CTA button configuration (label, url, icon, href)
- **navLinks**: Array of navigation link objects
- **slices**: Array of slice configuration objects
- **alternateColor**: Boolean for alternating backgrounds (default: false)

### Example Data Structure
\`\`\`typescript
{
  logo: {
    title: 'Brand Name',
    imgUrl: '/logo.png',
    imgAlt: 'Brand Name Logo',
    showTitle: false
  },
  cta: {
    label: 'Get Started',
    url: '/signup',
    icon: 'arrow-right-path',
    href: '/signup'
  },
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ],
  slices: [
    {
      name: 'hero',
      title: 'Welcome',
      description: 'Hero content...',
      // ... hero-specific props
    }
  ],
  alternateColor: true
}
\`\`\`

## Integration Notes

This page component is designed for:
- **SvelteKit applications**: Use with SvelteKit routing and layouts
- **CMS integration**: Map CMS data to props structure
- **Authentication**: Header can be extended to show user state
- **Analytics**: Track navigation interactions and slice views
- **A/B testing**: Test different slice orders or header CTAs
- **Internationalization**: All content is prop-driven for i18n

## Technical Considerations

- Uses Svelte 5's \`$state\` for navigation open/close management
- Two-way binding (\`bind:open\`) synchronizes state between Header and Shelf
- Header and Shelf are decoupled but communicate through shared state
- Dynamic component rendering in Shelf via switch statement
- CTA button navigates using \`location.href\` (can be replaced with router navigation)
- Fixed positioning applied to page when navigation is open
- Logo and navigation links are separate concerns in Header
- Slice data is passed directly to Shelf template

## State Management

The page manages a single piece of state:
- **open**: Boolean controlling navigation overlay visibility
  - Set by hamburger click in Header
  - Used by Shelf to render Nav overlay
  - Bindable between components
  - Applies fixed positioning when true

## Performance Considerations

- Logo images should be optimized (WebP, proper sizing)
- Navigation overlay only renders when open
- Slice components should implement lazy loading for images
- Consider intersection observer for slice animations
- Header can be made sticky with CSS position: sticky
- Minimize JavaScript in slice components for fast rendering
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		logo: {
			control: 'object',
			description:
				'Logo configuration object for header branding. Contains: title (text logo fallback), imgUrl (logo image URL), imgAlt (alt text for accessibility), showTitle (boolean to display title alongside/instead of image). The logo typically links to the homepage and serves as the primary brand identifier in the header.'
		},
		cta: {
			control: 'object',
			description:
				'Optional call-to-action button configuration for the header. Contains: label (button text), url (destination), icon (optional SVG path), href (navigation target). Only include if there is a primary conversion action. The CTA appears in the header and is visible on desktop (may be hidden on mobile for space). Common examples: "Get Started", "Sign Up", "Buy Now".'
		},
		alternateColor: {
			control: 'boolean',
			description:
				'Enables alternating background colors for content slices (passed to Shelf). When true, odd-indexed slices use #f5f5f5 (light gray) and even-indexed slices use #ffffff (white). Creates visual rhythm and helps separate distinct content sections. Particularly effective for pages with 3+ slices.'
		},
		navLinks: {
			control: 'object',
			description:
				'Array of navigation link objects for both header and overlay menu. Each link should have: label (display text) and href (destination route). These links appear horizontally in the desktop header and vertically in the mobile full-screen overlay. Keep to 5-7 items maximum for usability. Examples: Home, About, Products, Services, Contact.'
		},
		slices: {
			control: 'object',
			description:
				'Array of content slice configuration objects (passed to Shelf). Each slice must have a `name` property matching a component type: "call-to-action", "carousel", "hero", "slogan", "features", "text-animation", or "tiles". Additional properties vary by slice type and are spread to the corresponding component. Slices are rendered sequentially below the header, creating the main page content structure.'
		}
	}
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		logo: {
			title: 'DJ FMK',
			subtitle: '',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
			imgAlt: 'DJ FMK logo',
			showTitle: false
		},
		cta: { label: 'Action', url: '#', icon: 'M 10 5  L 40 25 L 10 45 Z', href: '#' },
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
				story: 'Complete homepage example for DJ FMK featuring persistent header with logo, CTA button, and navigation. Uses HeroTile slice for visual portfolio display with image grid. Demonstrates the full page structure with header remaining fixed while content scrolls beneath. Includes play icon CTA in header and simple navigation structure. Perfect for artist, photographer, or creative portfolios.'
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
				story: 'Identical to Primary story - DJ FMK homepage with complete header and tile-based content. Demonstrates a production-ready artist homepage with consistent branding (logo in both header and hero tile), simple three-item navigation, and engaging visual content. The alternating colors create visual separation despite having a single slice.'
			}
		}
	}
};

export const DjFmkShow: Story = {
	args: {
		...Primary.args,
		slices: [
			{
				name: 'hero',
				title: 'Simples Thérapies',
				overview:
					'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
				details: '',
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
				},
				backgroundColor: '#6c00e2',
				ctaLabel: 'Dernier épisode',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Show/podcast homepage for "Simples Thérapies" - demonstrates using the Hero slice instead of tiles for content-focused pages. Features a bold purple background (#6c00e2), responsive imagery, and "Latest Episode" CTA with play icon. Shows how the same page structure can be adapted for different content types - from visual portfolio (tiles) to show landing page (hero). Same header branding maintained across different content approaches.'
			}
		}
	}
};
