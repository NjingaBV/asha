import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroBanner from '@/lib/components/organisms/HeroBanner.svelte';

const meta = {
	title: 'Organisms/HeroBanner',
	component: HeroBanner,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `# HeroBanner

A full-width, attention-grabbing hero section organism designed to be the primary focal point at the top of landing pages. Features bold typography, optional eyebrow text, call-to-action buttons, and customizable backgrounds.

## Key Features

- **Bold Typography**: Large, responsive headlines (4xl to 6xl) with tight tracking
- **Eyebrow Text**: Optional category or product line identifier above the main title
- **Dual CTAs**: Primary and secondary call-to-action buttons for conversion optimization
- **Custom Backgrounds**: Configurable background colors or gradients
- **Optional Hero Image**: Support for product or feature images below the content
- **Center-Aligned Layout**: Optimized for maximum visual impact and readability
- **Responsive Spacing**: Adapts padding and text sizes across all viewports

## Use Cases

- **Product Launches**: Announce new products with compelling headlines and imagery
- **Landing Pages**: Create high-converting entry points for marketing campaigns
- **Feature Announcements**: Highlight major features or updates to existing products
- **Event Promotion**: Promote events, webinars, or special announcements
- **Brand Campaigns**: Establish brand messaging with bold, centered content
- **Homepage Heroes**: Serve as the primary above-the-fold content

## Best Practices

- Keep titles concise and impactful (5-10 words maximum)
- Use eyebrow text sparingly for context (product name, category)
- Subtitles should expand on the title with benefits or value proposition
- Primary CTA should be the main desired action (Buy, Sign Up, Learn More)
- Secondary CTA provides alternative path (Watch Video, Learn More, Compare)
- Choose background colors with sufficient contrast for white text
- Hero images should be high-quality and relevant to the message
- Test CTA placement and wording for optimal conversion rates

## Accessibility

- Semantic \`<h1>\` heading for the main title (one per page)
- High contrast white text on dark/colored backgrounds
- All interactive elements are keyboard accessible
- CTAs use semantic link elements with clear labels
- Images include proper alt text
- Responsive text sizing maintains readability at all sizes
- Focus states visible on all interactive elements

## Component Composition

This organism composes:
- **Eyebrow** (Atom): Small category/brand text above title
- **CTAGroup** (Molecule): Manages primary and secondary button layout
- Inherits button styling and accessibility from CTAGroup molecule

## Page Layout Considerations

- **Width**: Full viewport width with contained content (container mx-auto)
- **Height**: Flexible based on content (py-16 md:py-24)
- **Positioning**: Typically first organism after header/navigation
- **Background**: Covers full width, can use solid colors or gradients
- **Text Color**: White text designed for dark backgrounds
- **Spacing**:
  - Top/Bottom: 16 (mobile) to 24 (desktop)
  - Container: px-6 for consistent edge spacing
  - Internal: Consistent mt-3/mt-4 rhythm between elements
- **Responsive Behavior**:
  - Mobile: text-4xl titles, text-lg subtitles
  - Desktop: text-6xl titles, text-xl subtitles
  - Image: max-w-5xl for large displays
- **Z-index**: Relatively low, should sit below navigation if sticky
- **Integration**: Works well above FeatureGrid or other content organisms`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		eyebrow: {
			control: 'text',
			description:
				'Optional small text displayed above the main title. Typically used for product names, brand names, or category labels. Appears in a distinctive eyebrow style for visual hierarchy.'
		},
		title: {
			control: 'text',
			description:
				'Main headline text. Should be concise, impactful, and communicate the primary value proposition. Renders as an H1 element with large, bold typography (4xl on mobile, 6xl on desktop).'
		},
		subtitle: {
			control: 'text',
			description:
				'Optional supporting text that expands on the title. Provides additional context, benefits, or details. Renders in lighter color (slate-200) for visual hierarchy below the title.'
		},
		image: {
			control: 'object',
			description:
				'Optional hero image object with src and alt properties. Displayed below the text content, centered and contained within max-w-5xl. Ideal for product shots or feature illustrations.'
		},
		primaryCTA: {
			control: 'object',
			description:
				'Primary call-to-action button object with label and optional href. This should be your main conversion action (e.g., "Buy Now", "Get Started"). Renders with primary tone styling.'
		},
		secondaryCTA: {
			control: 'object',
			description:
				'Secondary call-to-action button object with label and optional href. Provides an alternative action (e.g., "Learn More", "Watch Video"). Renders with secondary tone styling for visual distinction.'
		},
		background: {
			control: 'color',
			description:
				'Background color for the entire hero section. Accepts any valid CSS color value (hex, rgb, named colors). Default is black (#000000). Choose colors that provide sufficient contrast with white text.'
		}
	}
} satisfies Meta<typeof HeroBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée.',
		subtitle: 'Des fonctionnalités santé et forme avancées.',
		primaryCTA: { label: 'Acheter', href: '#' },
		secondaryCTA: { label: 'En savoir plus', href: '#' },
		background: '#000000'
	},
	parameters: {
		docs: {
			description: {
				story: 'Classic product launch hero banner with Apple Watch styling. Demonstrates the standard configuration with eyebrow text, bold title, supporting subtitle, and dual CTAs on a black background. Perfect template for product launches.'
			}
		}
	}
};

export const Default: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Default story alias for Primary. Same configuration with black background and dual CTAs.'
			}
		}
	}
};

export const WithLongText: Story = {
	args: {
		...Primary.args,
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée. Plus aventurière. Plus personnelle. Plus tout.',
		subtitle:
			'Des fonctionnalités santé et forme avancées. Et de nouvelles façons de rester connecté. Le tout dans un design élégant et épuré.'
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates how the hero banner handles longer content. Shows that the component gracefully accommodates extended titles and subtitles while maintaining readability and visual hierarchy. Useful for testing responsive text wrapping behavior.'
			}
		}
	}
};

export const WithDifferentBackground: Story = {
	args: {
		...Primary.args,
		background: '#ff0000'
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates custom background color functionality with a bold red background. Shows how different background colors can be used to match brand colors or create distinct visual sections. Ensure sufficient contrast is maintained with white text.'
			}
		}
	}
};
