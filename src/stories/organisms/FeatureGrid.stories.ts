import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureGrid from '@/lib/components/organisms/FeatureGrid.svelte';

const meta = {
	title: 'Organisms/FeatureGrid',
	component: FeatureGrid,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `# FeatureGrid

A flexible layout organism that displays multiple features or content items in a vertical stack with configurable image positioning. Ideal for showcasing products, services, or content highlights with rich imagery and descriptions.

## Key Features

- **Flexible Layout Modes**: Choose between stacked (consistent image position) or alternating (zigzag pattern) layouts
- **Rich Content Display**: Combines images, titles, descriptions, badges, and optional icons
- **Responsive Images**: Large, prominent images that adapt to viewport sizes
- **Badge Support**: Optional badges for highlighting special attributes or categories
- **Fallback Rendering**: Gracefully handles features without images using FeatureItem atoms
- **Generous Spacing**: Vertical rhythm with lg:space-y-24 for visual breathing room

## Use Cases

- **Product Showcases**: Display product collections with images, descriptions, and category badges
- **Service Offerings**: Highlight multiple services or features with rich visual content
- **Content Sections**: Create engaging landing page sections with alternating content blocks
- **Portfolio Items**: Present work samples or case studies with detailed descriptions
- **Feature Comparisons**: Show different plans, tiers, or options side-by-side

## Best Practices

- Provide high-quality images (recommended: 1200x800px or larger)
- Keep descriptions concise (2-3 sentences) for optimal readability
- Use consistent image aspect ratios across all features
- Include descriptive badges to categorize or highlight key attributes
- For alternating layout, use odd number of features for balanced appearance
- Always provide imageAlt text for accessibility (defaults to title if omitted)
- Limit to 3-6 features per grid to avoid overwhelming users

## Accessibility

- Semantic HTML structure with proper heading hierarchy
- All images require alt text (auto-generated from title if not provided)
- Keyboard navigable if features include interactive elements
- Sufficient color contrast in text overlays and badges
- Responsive text sizing for readability at all viewport sizes
- Screen reader friendly content structure

## Component Composition

This organism composes:
- **FeatureCard** (Molecule): Main display component for features with images
- **FeatureItem** (Atom): Fallback component for features without images
- Inherits Badge, Icon, and image handling from child components

## Layout Behavior

### Stacked Layout
- All images appear on the same side (controlled by imagePosition prop)
- Consistent, predictable visual rhythm
- Best for related items in the same category

### Alternating Layout
- Images automatically alternate left/right based on index
- Creates dynamic zigzag pattern
- Best for diverse content or breaking visual monotony

## Page Layout Considerations

- **Width**: Content width determined by FeatureCard molecules (typically max-w-7xl)
- **Spacing**: Vertical spacing of 16 (lg:24) between items provides clear separation
- **Padding**: Requires container padding (provided by 'padded' layout)
- **Responsive Behavior**:
  - Mobile: Single column stack, full-width images
  - Tablet: Two-column layout begins to emerge
  - Desktop: Full side-by-side image + content layout
- **Background**: Transparent, inherits from parent container
- **Integration**: Works well between hero sections and CTAs or footers`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		features: {
			control: 'object',
			description:
				'Array of feature objects. Each feature should contain: title (string), description (string), image (string URL), optional imageAlt (string), optional imagePosition ("left" | "right"), optional icon (string), and optional badge (string).'
		},
		layout: {
			control: { type: 'select' },
			options: ['stacked', 'alternating'],
			description:
				'Layout mode for image positioning. "stacked" keeps all images on the same side (respects imagePosition prop), "alternating" creates a zigzag pattern with images alternating left/right based on index.'
		},
		class: {
			control: 'text',
			description:
				'Optional CSS classes to apply to the container element. Useful for adding custom spacing, backgrounds, or styling.'
		}
	}
} satisfies Meta<typeof FeatureGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		features: [
			{
				title: "L'Afro Club",
				description:
					'Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker. Une sélection des meilleurs artistes de la scène africaine francophone.',
				image: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
				badge: 'Musique Afro'
			},
			{
				title: 'Urban Xra',
				description:
					'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et en podcast.',
				image: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
				badge: 'Radio FM'
			}
		],
		layout: 'stacked'
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic stacked layout showcasing music and radio content. Images remain on the right side consistently, creating a predictable reading pattern. Features include badges for content categorization.'
			}
		}
	},
	render: (args) => ({ Component: FeatureGrid, props: args })
};

export const Default: Story = {
	args: {
		...Primary.args
	},
	parameters: {
		docs: {
			description: {
				story: 'Default story alias for Primary. Same configuration with stacked layout.'
			}
		}
	}
};

export const AlternatingLayout: Story = {
	args: {
		...Primary.args,
		layout: 'alternating'
	},
	parameters: {
		docs: {
			description: {
				story: 'Demonstrates alternating layout mode where images zigzag between left and right positions based on their index. Creates a more dynamic, visually engaging flow perfect for diverse content types.'
			}
		}
	}
};

export const ProductsCollection: Story = {
	args: {
		features: [
			{
				title: 'Doré',
				description:
					"Un turban modulable aux teintes dorées sophistiquées. Parfait pour ajouter une touche d'élégance à votre style quotidien.",
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
				badge: 'Accessoire Mode'
			},
			{
				title: 'Panthère',
				description:
					'Design audacieux avec un motif panthère captivant. Un choix parfait pour les femmes qui aiment exprimer leur personnalité.',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
				badge: 'Collection Exclusive'
			},
			{
				title: 'Malabo',
				description:
					'Le turban flexible Malabo offre confort et style. Adapté à toutes les occasions, du quotidien aux événements spéciaux.',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
				badge: 'Bestseller'
			}
		],
		layout: 'alternating'
	},
	parameters: {
		docs: {
			description: {
				story: 'E-commerce product showcase using alternating layout with three items. Demonstrates how FeatureGrid works perfectly for product catalogs with category badges and detailed product descriptions. The zigzag pattern creates visual interest while maintaining professional presentation.'
			}
		}
	}
};

export const WithAlternatingImages: Story = {
	args: {
		features: [
			{
				title: "L'Afro Club",
				description:
					'Chaque semaine, sur RFI Musique, découvrez les meilleures tendances afro-urbaines avec DJ Face Maker. Une sélection curatée des artistes phares de la scène africaine francophone avec sessions acoustiques en direct.',
				image: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
				badge: 'Musique Afro',
				imagePosition: 'right'
			},
			{
				title: 'Doré',
				description:
					"Un turban modulable aux teintes dorées sophistiquées. Parfait pour ajouter une touche d'élégance intemporelle à votre style quotidien et vos occasions spéciales.",
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
				badge: 'Accessoire Mode',
				imagePosition: 'left'
			},
			{
				title: 'Panthère',
				description:
					'Design audacieux avec un motif panthère captivant. Un choix parfait pour les femmes qui aiment exprimer leur personnalité avec style et confiance.',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
				badge: 'Collection Exclusive',
				imagePosition: 'right'
			}
		],
		layout: 'stacked'
	},
	parameters: {
		docs: {
			description: {
				story: 'Advanced example using stacked layout with manual imagePosition control for each feature. Shows how to create custom alternating patterns that differ from the automatic alternating layout, useful when you need specific image positioning for storytelling or design purposes.'
			}
		}
	}
};
