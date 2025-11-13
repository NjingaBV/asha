import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroBanner from '@/lib/components/organisms/HeroBanner.svelte';

const meta = {
	title: 'Organisms/HeroBanner',
	component: HeroBanner,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Bannière Héros (HeroBanner)

Un organisme de section héros pleine largeur et accrocheur, conçu pour être le point focal principal en haut des pages de destination. Comprend une typographie audacieuse, un texte "eyebrow" optionnel, des boutons d'appel à l'action et des arrière-plans personnalisables.

## Caractéristiques Clés

- **Typographie Audacieuse**: Titres réactifs de grande taille avec un espacement serré.
- **Texte "Eyebrow"**: Identifiant de catégorie ou de gamme de produits optionnel au-dessus du titre principal.
- **Appels à l'Action Doubles**: Boutons d'appel à l'action principal et secondaire pour l'optimisation de la conversion.
- **Arrière-plans Personnalisés**: Couleurs d'arrière-plan ou dégradés configurables.
- **Image Héros Optionnelle**: Prise en charge des images de produit ou de fonctionnalité sous le contenu.
`
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
