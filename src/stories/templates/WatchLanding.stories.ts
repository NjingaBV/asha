import type { Meta, StoryObj } from '@storybook/sveltekit';
import WatchLanding from '@/lib/components/templates/WatchLanding.svelte';

const meta = {
	title: 'Templates/WatchLanding',
	component: WatchLanding,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# WatchLanding Template

A complete, production-ready landing page template designed for Apple Watch-style product showcases. Features a hero section, product grid, feature highlights, and call-to-action.

## Overview

The WatchLanding template is a sophisticated, multi-section landing page specifically designed for showcasing premium products like smartwatches, wearables, or other tech products. Inspired by Apple's design language, it combines clean typography, spacious layouts, and compelling product presentations to drive conversions. The template provides sensible defaults while allowing complete customization of all sections.

## Key Features

- **Hero Section with Product Showcase**: Full-width hero with title, description, CTAs, and product cards with badges
- **Product Grid Section**: Detailed product cards with images, color variants, and dual CTAs
- **Feature Grid Section**: Alternating layout featuring key product benefits with images and descriptions
- **Call-to-Action Section**: Final conversion-focused section with compelling messaging
- **Smart Defaults**: Works out-of-the-box with comprehensive default data
- **Fully Customizable**: Override any section independently for flexible branding
- **Responsive Design**: Mobile-first approach with optimized layouts for all screen sizes
- **Conversion Optimized**: Strategic placement of CTAs throughout the page flow

## Page Layout Structure

The template follows a fixed, multi-section structure:

\`\`\`
<main>
  └── HeroSection
      └── Heading (title)
      └── Paragraph (subtitle)
      └── Paragraph (description)
      └── PillButton × 2 (primary + secondary actions)
      └── Product Cards × 3 (images with badges)

  └── Products Section
      └── Heading (section title)
      └── Paragraph (section description)
      └── ProductGrid
          └── ProductCard × 3 (detailed cards)
              └── Badge
              └── Image
              └── Heading
              └── Paragraph
              └── ColorSwatch (color variants)
              └── PillButton × 2

  └── Features Section
      └── FeatureGrid (alternating layout)
          └── Feature × 3 (image + content)
              └── Badge
              └── Icon
              └── Heading
              └── Paragraph
              └── Image

  └── CallToAction
      └── Heading
      └── Paragraph
      └── PillButton
\`\`\`

Each section is wrapped with appropriate spacing and background colors for visual hierarchy.

## Component Composition

### Atoms
- **Heading**: Typography component for titles (levels 1-6)
- **Paragraph**: Body text with size and color variants
- **Badge**: Label badges for "New" or feature categories
- **ColorSwatch**: Color variant display for products
- **Icon**: Iconography for features
- **PillButton**: Primary action buttons

### Molecules
- **CallToAction**: Final conversion section
- **ProductCard**: Individual product presentation
- **Feature**: Feature showcase card

### Organisms
- **HeroSection**: Hero with products and CTAs
- **ProductGrid**: Grid layout for product cards
- **FeatureGrid**: Alternating feature layout

## Use Cases

- **Product Landing Pages**: Launch pages for new tech products
- **E-commerce Product Pages**: Detailed product showcases with variants
- **Campaign Pages**: Marketing campaigns for hardware or wearables
- **Pre-order Pages**: Product announcements with multiple CTAs
- **Collection Pages**: Showcase multiple product variants or models
- **Brand Experience Pages**: Premium product presentations

## Best Practices

1. **Hero Focus**: Keep hero messaging concise (1-2 sentences) with clear value proposition
2. **Product Imagery**: Use high-quality, consistent product images with transparent backgrounds
3. **Color Variants**: Show all available colors for each product to aid decision-making
4. **Feature Selection**: Choose 3-5 most compelling features, prioritize unique selling points
5. **CTA Strategy**: Primary CTA should be "Buy" or conversion-focused, secondary should be "Learn more"
6. **Badge Usage**: Use badges sparingly to highlight "New" or key differentiators
7. **Content Hierarchy**: Maintain visual flow from hero → products → features → CTA
8. **Responsive Images**: Ensure product images work at multiple sizes and aspect ratios

## Accessibility

- Semantic HTML structure with \`<main>\` and \`<section>\` landmarks
- Proper heading hierarchy (h1 for hero, h2 for sections, h3 for products/features)
- Alt text for all product and feature images
- ARIA labels on interactive elements
- Sufficient color contrast ratios (WCAG AA minimum)
- Keyboard-navigable buttons and links
- Focus states on all interactive elements
- Screen reader-friendly badge and color swatch content

## Content Guidelines

### Hero Data
- **Title**: Product name (2-4 words) - e.g., "Apple Watch Series 11"
- **Subtitle**: "New" or key differentiator (1 word)
- **Description**: Value proposition (1-2 sentences, 15-25 words)
- **Primary Action**: Main CTA - "Buy now" or "Shop Apple Watch"
- **Secondary Action**: "Learn more" or "Compare models"
- **Products**: 2-3 product images with names and badges

### Products Data
- **Title**: Full product name
- **Subtitle**: "New" or model descriptor
- **Description**: Key benefit or selling point (1 sentence)
- **Image**: High-res product image (400x400px minimum)
- **Colors**: Array of available color names (2-7 colors)
- **Badge**: Optional - use for "New", "Best Seller", etc.

### Features Data
- **Title**: Feature name (1-3 words)
- **Description**: Feature benefit (1-2 sentences)
- **Image**: Feature illustration or lifestyle image (800x600px)
- **Icon**: Icon name or path for small visual identifier
- **Badge**: Optional category label

### CTA Data
- **Title**: Compelling reason to buy (1 sentence)
- **Description**: Supporting information (1-2 sentences)
- **Primary Action**: Main conversion CTA

## Customization Points

1. **Color Scheme**: Update background colors in sections (currently white/gray-50 alternation)
2. **Typography**: Adjust heading sizes and weights in Heading components
3. **Spacing**: Modify py-16/py-24 padding classes for different visual density
4. **Grid Columns**: ProductGrid uses 3 columns, adjustable via columns prop
5. **Feature Layout**: FeatureGrid uses "alternating" layout, can switch to "grid" or "list"
6. **Max Width**: Currently set to max-w-7xl, adjustable for wider/narrower content
7. **Default Data**: Replace default data objects for different product types
8. **Section Backgrounds**: Alternate section backgrounds for visual rhythm

## Responsive Behavior

### Mobile (< 768px)
- Single column layout for products and features
- Stacked hero elements
- Full-width product cards
- Reduced padding (py-12 instead of py-24)
- Smaller typography scales

### Tablet (768px - 1024px)
- Two-column product grid
- Maintained alternating feature layout
- Optimized spacing
- Medium typography scales

### Desktop (> 1024px)
- Three-column product grid
- Full alternating feature layout with side-by-side image/content
- Maximum spacing and typography
- Fixed max-width container (max-w-7xl = 1280px)

## Data Requirements

### Required Props
None - all props have comprehensive defaults for an Apple Watch showcase

### Optional Props
All props are optional and can be overridden independently:
- \`heroData\`: Hero section configuration
- \`productsData\`: Array of product configurations
- \`featuresData\`: Array of feature configurations
- \`ctaData\`: Final CTA configuration

### Default Data Structure
The template includes complete default data for:
- 1 hero section with 3 product previews
- 3 detailed product cards
- 3 feature highlights
- 1 call-to-action section

## Integration Notes

This template works standalone but can integrate with:
- **E-commerce platforms**: Connect primaryAction onClick to add-to-cart functions
- **CMS systems**: Map CMS fields to data objects
- **Analytics**: Add tracking to button onClick handlers
- **A/B testing**: Easily swap hero or CTA data for testing
- **Internationalization**: All text content is customizable for localization

## Technical Considerations

- Uses Svelte 5's \`$state\` for reactive default data
- Uses \`$derived\` for computed data merging (props override defaults)
- Default data provides complete Apple Watch showcase
- onClick handlers currently log to console (replace with real handlers)
- Placeholder images demonstrate layout (replace with actual product images)
- Color arrays are strings, not color codes (for display purposes)
- Spread props pattern allows flexible data structure

## Performance Optimization

- Image lazy loading recommended for product and feature images
- Consider implementing skeleton screens during data loading
- Optimize images (WebP format, proper sizing)
- Defer off-screen section rendering if needed
- Implement intersection observer for analytics tracking
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		heroData: {
			control: 'object',
			description:
				'Configuration object for the hero section. Contains: title (product name), subtitle (badge like "New"), description (value proposition), primaryAction (main CTA with label and onClick), secondaryAction (secondary CTA), and products array (2-3 product preview cards with name, image, and badge). If not provided, uses Apple Watch Series 11 defaults with 3 product variants.'
		},
		productsData: {
			control: 'object',
			description:
				'Array of detailed product configuration objects for the products section. Each product should have: title (product name), subtitle (descriptor), description (key selling point), image (product photo URL), colors (array of color variant names), primaryAction (CTA object), secondaryAction (CTA object), and badge (optional label). If empty array provided, defaults to 3 Apple Watch models with full specifications.'
		},
		featuresData: {
			control: 'object',
			description:
				'Array of feature highlight objects for the features section. Each feature should have: title (feature name like "Health" or "Fitness"), description (benefit explanation), image (feature illustration URL), icon (icon identifier), and badge (optional category label). If empty array provided, defaults to 3 Apple Watch features: Health, Fitness, and Safety with corresponding icons and images.'
		},
		ctaData: {
			control: 'object',
			description:
				'Configuration object for the final call-to-action section. Contains: title (compelling headline), description (supporting information about buying benefits), and primaryAction (main CTA with label and onClick). If not provided, uses default messaging about buying from Apple with free shipping and returns.'
		}
	}
} satisfies Meta<typeof WatchLanding>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Default configuration with comprehensive Apple Watch showcase. Demonstrates the complete template with all sections populated: hero with 3 product previews, detailed product grid with 3 models (Series 11, SE 3, Ultra 3), feature highlights (Health, Fitness, Safety), and final CTA. This story showcases how the template works out-of-the-box with sensible defaults, perfect for rapid prototyping or as a starting point for customization.'
			}
		}
	}
};

export const Primary: Story = {
	args: {},
	parameters: {
		docs: {
			description: {
				story: 'Primary/default variant showcasing the full Apple Watch landing page experience. Identical to Default story, demonstrating the production-ready nature of the template with all sections fully populated and styled. Use this as a reference for complete landing page implementations.'
			}
		}
	}
};

export const CustomHero: Story = {
	args: {
		heroData: {
			title: 'Apple Watch Series 11',
			subtitle: 'Nouveau',
			description:
				"Profitez de 3 mois d'abonnement à Apple Fitness+ pour l'achat d'une Apple Watch. La montre ultime pour votre santé.",
			primaryAction: {
				label: 'Acheter maintenant',
				onClick: () => console.log('Primary action clicked')
			},
			secondaryAction: {
				label: 'En savoir plus',
				onClick: () => console.log('Secondary action clicked')
			},
			products: [
				{
					name: 'Apple Watch Series 11',
					image: 'https://via.placeholder.com/300x300/2563eb/ffffff?text=Series+11',
					badge: 'Nouveau'
				},
				{
					name: 'Apple Watch SE 3',
					image: 'https://via.placeholder.com/300x300/64748b/ffffff?text=SE+3',
					badge: 'Nouveau'
				}
			]
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates hero section customization while keeping other sections at defaults. Shows how to override the hero with custom messaging focused on Series 11, French localization, and a fitness promotion. Only shows 2 products instead of 3, demonstrating flexible product count. Perfect example for A/B testing different hero messages or seasonal promotions while maintaining consistent product catalog below.'
			}
		}
	}
};

export const WithCustomProducts: Story = {
	args: {
		productsData: [
			{
				title: 'Apple Watch Series 11',
				subtitle: 'Édition limitée',
				description: 'La montre ultime pour votre santé avec de nouvelles fonctionnalités.',
				image: 'https://via.placeholder.com/400x400/2563eb/ffffff?text=Series+11',
				colors: ['gris sidéral', 'argent', 'or rose', 'noir de jais'],
				primaryAction: { label: 'En savoir plus' },
				secondaryAction: { label: 'Acheter' },
				badge: 'Nouveau'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates product grid customization with a single limited edition model. Shows how to feature a special edition or exclusive product by reducing the product count to 1 and highlighting it with a custom subtitle and 4 premium color variants. Hero, features, and CTA sections remain at defaults. Useful for product launch campaigns or when focusing on a single hero product with multiple variants.'
			}
		}
	}
};

export const WithCustomFeatures: Story = {
	args: {
		featuresData: [
			{
				title: 'Santé avancée',
				description:
					'Surveillez votre tension artérielle, votre fréquence cardiaque et bien plus encore.',
				image: 'https://via.placeholder.com/800x600/10b981/ffffff?text=Sant%C3%A9',
				icon: 'heart',
				badge: 'Fonctionnalité principale'
			},
			{
				title: 'Forme optimale',
				description: 'Suivez vos entraînements et atteignez vos objectifs fitness.',
				image: 'https://via.placeholder.com/800x600/f59e0b/ffffff?text=Forme',
				icon: 'activity',
				badge: 'Sport'
			}
		]
	},
	parameters: {
		docs: {
			description: {
				story: 'Showcases feature section customization with 2 custom features instead of default 3. Demonstrates how to highlight specific product capabilities with custom titles, descriptions, icons, and category badges. Each feature uses color-coded images for visual differentiation. Useful when you want to focus on fewer, more detailed features or when targeting specific use cases (health & fitness in this example). Other sections use defaults.'
			}
		}
	}
};

export const WithCustomCTA: Story = {
	args: {
		ctaData: {
			title: "Prêt à découvrir l'Apple Watch?",
			description:
				'Livraison gratuite et retours gratuits. Profitez de notre service client exceptionnel.',
			primaryAction: {
				label: 'Acheter une Apple Watch',
				onClick: () => console.log('Buy now clicked')
			}
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates call-to-action section customization with French localization. Shows how to override the final conversion section with custom messaging emphasizing buying benefits (free shipping, free returns, customer service). The question format ("Ready to discover?") creates urgency and engagement. Other sections use defaults. Perfect for testing different CTA messaging, regional variations, or promotional periods.'
			}
		}
	}
};
