import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureGrid from '@/lib/components/organisms/FeatureGrid.svelte';

const meta = {
	title: 'Organisms/FeatureGrid',
	component: FeatureGrid,
	parameters: {
		layout: 'padded',
		docs: {
			description: {
				component: `
# Grille de Caractéristiques (FeatureGrid)

Un organisme de mise en page flexible qui affiche plusieurs caractéristiques ou éléments de contenu dans une pile verticale avec un positionnement d'image configurable. Idéal pour présenter des produits, des services ou des points forts de contenu avec des images et des descriptions riches.

## Caractéristiques Clés

- **Modes de Mise en Page Flexibles**: Choisissez entre des mises en page empilées (position d'image cohérente) ou alternées (motif en zigzag).
- **Affichage de Contenu Riche**: Combine des images, des titres, des descriptions, des badges et des icônes optionnelles.
- **Images Réactives**: Grandes images proéminentes qui s'adaptent à la taille de la fenêtre.
- **Support de Badge**: Badges optionnels pour mettre en évidence des attributs ou des catégories spéciales.
`
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
