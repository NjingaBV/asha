import type { Meta, StoryObj } from '@storybook/sveltekit';
import Feature from '@/lib/components/molecules/Feature.svelte';

const meta = {
	title: 'Molecules/Feature',
	component: Feature,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `# Feature

A content-rich feature display molecule designed to showcase products, services, or content offerings with visual impact. Combines decorative path lines, bold typography, and flexible image-text layouts.

## Key Features

- **Numbered Path Indicator**: Decorative PathLine atom showing feature order and title
- **Large Impact Typography**: Extra-large subtitle text (5xl-7xl) for immediate visual hierarchy
- **Flexible Layouts**: Supports image-only, text-only, or image-text split layouts
- **HTML Rich Content**: Details section supports HTML for formatted text with bold, links, etc.
- **Responsive Design**: Stacks vertically on mobile, side-by-side on desktop
- **Image Hover Effects**: Subtle scale-up animation on hover for engagement
- **Color Theming**: Custom accent colors for path lines to match brand or content

## Use Cases

- **Product Showcases**: Display product collections with descriptions and imagery
- **Service Highlights**: Present service offerings with detailed explanations
- **Content Series**: Showcase podcasts, video series, or content collections
- **Feature Pages**: Build dedicated pages for specific products or services
- **Portfolio Items**: Display creative work or case studies with context
- **Event Promotion**: Highlight events, workshops, or experiences

## Best Practices

- Use sequential order numbers for multiple features on the same page
- Keep subtitles concise but impactful (under 10 words ideal)
- Use description for high-level overview, details.description for specifics
- Choose accent colors that complement your images and brand
- Use high-quality images (at least 800px wide) for best results
- Format details.description with \`<strong>\` tags for emphasis on key points
- Consider alternating image-left and image-right layouts for multiple features

## Accessibility Notes

- Semantic HTML structure with proper text hierarchy
- Images require alt text via details.cover.alt property
- Strong tags properly marked for screen reader emphasis
- Sufficient color contrast in default text styles (slate-600)
- Focus states supported for interactive elements
- Keyboard navigation supported for all interactive elements

## Composition

This molecule is composed of:
- **PathLine atom**: Decorative numbered indicator with custom color
- **Native typography**: Bold, extra-large headings for maximum impact
- **Image elements**: Responsive images with hover effects
- **HTML content**: Rich text rendering with @html directive

## Responsive Behavior

- Subtitle scales from 5xl (mobile) to 6xl (tablet) to 7xl (desktop)
- Layout switches from stacked (mobile) to side-by-side (md+) for image-text
- Text alignment changes from left (mobile) to center (tablet+) for description
- Spacing scales up on larger screens (mb-8 to mb-12, gap-8 to gap-16)
- Images always full-width on mobile, 50% width on desktop splits
- Padding adjusts from px-4 (mobile) to px-8 (desktop)

## Differences from Atoms

Unlike simple Heading or PathLine atoms, this molecule provides:
- Complete feature section structure with multiple content types
- Integrated number indicator with theming
- Complex responsive layout orchestration
- Image-text relationship management
- Rich HTML content rendering with custom styling
- Multi-element composition with proper semantic structure`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		order: {
			control: 'number',
			description:
				'Sequential number displayed in the PathLine indicator. Used for ordering multiple features on a page (e.g., 1, 2, 3). Shows as a decorative element with the feature title.'
		},
		title: {
			control: 'text',
			description:
				'Short identifier displayed in the PathLine (e.g., "Feature 1", "Product Name"). Appears alongside the order number in the decorative path indicator at the top.'
		},
		subtitle: {
			control: 'text',
			description:
				'Main heading text with extra-large, bold typography (5xl-7xl). This is the primary visual anchor and should be concise but compelling. Supports responsive scaling.'
		},
		description: {
			control: 'text',
			description:
				'High-level overview text displayed below subtitle. Plain text only (use details.description for HTML). Provides context about the feature. Centered on tablet+, left-aligned on mobile.'
		},
		color: {
			control: 'color',
			description:
				'Hex color code for the PathLine accent color. Use colors that complement your brand or feature imagery. Affects the decorative line and circle in the path indicator.'
		},
		details: {
			control: 'object',
			description:
				'Object containing detailed feature information. Properties: title (string), cover (object with url, alt, text), description (HTML string). Supports three layouts: image+text (both present), image-only, or text-only.'
		}
	}
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		order: 1,
		color: '#990505',
		title: "L'Afro Club",
		subtitle: 'Explorez les tendances afro-urbaines',
		description:
			'Chaque semaine, sur RFI Musique, faites le tour des meilleures tendances afro-urbaines avec DJ Face Maker. Une sélection curatée des artistes phares et émergents de la scène africaine francophone.',
		details: {
			title: 'En Direct',
			cover: {
				url: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
				alt: "L'Afro Club - RFI Musique",
				text: 'Cover image'
			},
			description: `<p><strong>Sessions acoustiques en direct</strong><br>Des performances exclusives des artistes les plus en vogue de la musique africaine. Découvrez les sons qui façonnent la scène contemporaine.<br><br><strong>Disponible partout, tout le temps</strong><br>Écoutez sur RFI Musique, votre plateforme préférée de podcast, ou en direct sur Urban FM. La musique africaine n'a jamais été aussi accessible.</p>`
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Complete feature showcase with image-text split layout. Demonstrates music content with red accent color, image, and HTML-formatted details. Shows typical use for content series or podcast promotion.'
			}
		}
	}
};

export const Simple: Story = {
	args: {
		...Primary.args
	}
};

export const UrbanXra: Story = {
	args: {
		order: 2,
		color: '#024a99',
		title: 'Urban Xra',
		subtitle: 'Les dernières tendances urbaines',
		description:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et toutes vos plateformes de podcast préférées.',
		details: {
			title: 'Écouter',
			cover: {
				url: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
				alt: 'Urban Xra - Urban FM',
				text: 'Cover image'
			},
			description: `<p><strong>Une immersion musicale complète</strong><br>De l'afrobeats aux sounds émergents, découvrez la diversité de la musique urbaine africaine et mondiale. Des sélections exclusives des DJ les plus talentueux.<br><br><strong>Connecté à votre quotidien</strong><br>Chaque jour, une nouvelle sélection. Jogging, travail ou soirée - la musique parfaite pour chaque moment de votre vie.</p>`
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'Second feature example with blue accent color. Shows sequential numbering (order: 2) for multi-feature layouts. Demonstrates audio/radio content presentation.'
			}
		}
	}
};

export const NjingaTurbans: Story = {
	args: {
		order: 3,
		color: '#d4a574',
		title: 'Turbans Njinga',
		subtitle: 'Collection premium et modulable',
		description:
			'Découvrez notre sélection exclusive de turbans modulables. Chaque pièce est confectionnée avec soin pour offrir confort, style et une touche intemporelle à votre garde-robe.',
		details: {
			title: 'Explorer',
			cover: {
				url: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
				alt: 'Collection Turbans Njinga',
				text: 'Premium turban collection'
			},
			description: `<p><strong>Qualité Premium, Design Contemporain</strong><br>Chaque turban est conçu pour combiner tradition et modernité. Des teintes sophistiquées aux motifs exclusifs, trouvez le style qui vous ressemble.<br><br><strong>Polyvalent pour tous les moments</strong><br>Du quotidien aux occasions spéciales, nos turbans s'adaptent à votre vie. Modulable, confortable et toujours élégant.</p>`
		}
	},
	parameters: {
		docs: {
			description: {
				story: 'E-commerce product feature with warm gold accent color. Third in sequence (order: 3). Perfect example for fashion or lifestyle product showcases.'
			}
		}
	}
};
