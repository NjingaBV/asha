import type { Meta, StoryObj } from '@storybook/sveltekit';
import ProductCard from '@/lib/components/molecules/ProductCard.svelte';

const meta = {
	title: 'Molecules/ProductCard',
	component: ProductCard,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Carte Produit (ProductCard)

Une molécule de carte d'affichage de produit complète, conçue pour le commerce électronique et les vitrines de contenu. Comprend une image, un badge, des nuanciers de couleurs, un texte détaillé et des boutons à double action.

## Caractéristiques Clés

- **Support de Badge**: Badge optionnel pour "Nouveau", "Populaire", "Meilleure vente", etc.
- **Nuanciers de Couleurs**: Affiche les couleurs/variantes de produit disponibles.
- **Appels à l'Action Doubles**: Boutons d'action principal et secondaire.
- **Mise en Page de Texte Riche**: Titre, sous-titre (prix/métadonnées) et description.
- **Affichage d'Image**: Imagerie du produit ou du contenu avec texte alternatif.
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		title: {
			control: 'text',
			description: 'Product or content name. Main heading displayed prominently.'
		},
		subtitle: {
			control: 'text',
			description:
				'Secondary info like price, category, or metadata (e.g., "€49,99 • Modulable", "En Direct • RFI Musique").'
		},
		description: {
			control: 'text',
			description:
				'Product or content description. Brief summary of key features or value proposition.'
		},
		image: {
			control: 'text',
			description:
				'URL to product/content image. Should be square format (1:1) for best results. Recommend 400x400px minimum.'
		},
		imageAlt: {
			control: 'text',
			description:
				'Alt text for product image. Describe what the image shows for accessibility.'
		},
		colors: {
			control: 'array',
			description:
				'Array of color names for product variants (e.g., ["noir", "or", "marron"]). Displayed as swatches below image.'
		},
		primaryAction: {
			control: 'object',
			description:
				'Primary CTA button config with label property. Main conversion action (e.g., {label: "Acheter"}, {label: "Écouter"}).'
		},
		secondaryAction: {
			control: 'object',
			description:
				'Secondary CTA button config. Alternative action (e.g., {label: "Plus de détails"}, {label: "Découvrir"}).'
		},
		badge: {
			control: 'text',
			description:
				'Optional badge text displayed on product (e.g., "Nouveau", "Populaire", "En Direct"). Draws attention to status.'
		}
	}
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "L'Afro Club",
		subtitle: 'En Direct • RFI Musique',
		description:
			'Chaque semaine, explorez les meilleures tendances afro-urbaines avec DJ Face Maker. Sessions acoustiques en direct avec les artistes phares de la scène africaine francophone.',
		image: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format&h=400&w=400&fit=crop',
		imageAlt: "L'Afro Club",
		colors: [],
		primaryAction: { label: 'Écouter Maintenant' },
		secondaryAction: { label: 'Découvrir Plus' },
		badge: 'En Direct'
	}
};

export const UrbanXra: Story = {
	args: {
		...Default.args,
		badge: 'Populaire',
		title: 'Urban Xra',
		subtitle: 'Lundi - Vendredi • Urban FM 104.5',
		description:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi. Disponible sur Urban FM 104.5 à Libreville et toutes vos plateformes préférées de podcast.',
		image: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format&h=400&w=400&fit=crop',
		colors: []
	}
};

export const DoréTurban: Story = {
	args: {
		title: 'Doré',
		subtitle: '€49,99 • Modulable',
		description:
			"Un turban modulable aux teintes dorées sophistiquées. Parfait pour ajouter une touche d'élégance intemporelle à votre style quotidien et vos occasions spéciales.",
		image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
		imageAlt: 'Turban Doré',
		colors: ['or', 'marron'],
		primaryAction: { label: 'Acheter' },
		secondaryAction: { label: 'Plus de détails' },
		badge: 'Populaire'
	}
};

export const PanthèreTurban: Story = {
	args: {
		title: 'Panthère',
		subtitle: '€49,99 • Motif Exclusif',
		description:
			'Design audacieux avec un motif panthère captivant. Un choix parfait pour les femmes qui aiment exprimer leur personnalité avec style et confiance.',
		image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
		imageAlt: 'Turban Panthère',
		colors: ['noir', 'or'],
		primaryAction: { label: 'Acheter' },
		secondaryAction: { label: 'Plus de détails' },
		badge: 'Nouveau'
	}
};

export const MalaboTurban: Story = {
	args: {
		title: 'Malabo',
		subtitle: '€49,99 • Flexible',
		description:
			'Le turban flexible Malabo offre confort et style. Adapté à toutes les occasions, du quotidien aux événements spéciaux avec une flexibilité optimale.',
		image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
		imageAlt: 'Turban Malabo',
		colors: ['marron', 'gris'],
		primaryAction: { label: 'Acheter' },
		secondaryAction: { label: 'Plus de détails' },
		badge: 'Bestseller'
	}
};
