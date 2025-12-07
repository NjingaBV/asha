import type { Meta, StoryObj } from '@storybook/sveltekit';
import Feature from '@/lib/components/molecules/Feature.svelte';

const meta = {
	title: 'Molecules/Feature',
	component: Feature,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component: `
# Caractéristique (Feature)

Une molécule d'affichage de caractéristique riche en contenu, conçue pour présenter des produits, des services ou des offres de contenu avec un impact visuel. Combine des lignes de parcours décoratives, une typographie audacieuse et des mises en page image-texte flexibles.

## Caractéristiques Clés

- **Indicateur de Parcours Numéroté**: Atome \`PathLine\` décoratif montrant l'ordre et le titre de la caractéristique.
- **Typographie à Grand Impact**: Texte de sous-titre extra-large pour une hiérarchie visuelle immédiate.
- **Mises en Page Flexibles**: Prend en charge les mises en page image seule, texte seul ou image-texte partagé.
- **Contenu Riche en HTML**: La section des détails prend en charge le HTML pour du texte formaté.
- **Design Réactif**: S'empile verticalement sur mobile, côte à côte sur ordinateur.
`
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
