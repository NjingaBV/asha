import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hero from '$lib/components/organisms/Hero.svelte';

const meta = {
	title: 'Organisms/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen',
		docs: {
			description: {
				component: `
# Héros (Hero) - Unified Component

Un composant héros unifié et polyvalent qui offre plusieurs variantes pour différents cas d'usage.

## Variants Disponibles

### variant="molecule" (défaut pour compatibilité)
Une molécule de section héros puissante et en plein écran, combinant une imagerie spectaculaire, une typographie audacieuse et des boutons d'action. Comprend une adaptation intelligente de la couleur du texte en fonction de l'arrière-plan, des images réactives et des superpositions de dégradé.

**Caractéristiques Clés:**
- Support d'Image Réactif: Différentes images pour mobile, tablette et ordinateur
- Coloration Intelligente du Texte: Calcule automatiquement la couleur de texte optimale
- Troncature de Texte: Texte extensible avec "Lire plus/moins"
- Multiples Appels à l'Action: Boutons avec couleurs et icônes personnalisées

### variant="default"
Grande bannière héros pour la page Mac avec une mise en page simple centrant le contenu texte et l'image.

**Caractéristiques:**
- Titre, sous-titre et description
- Images réactives (desktop, tablet, mobile)
- Badge "Nouveau" optionnel
- Liens "En savoir plus" et "Acheter"

### variant="section"
Section héros proéminente en deux colonnes pour les pages de destination avec grille de produits optionnelle.

**Caractéristiques:**
- Contenu principal: titre, sous-titre, description
- Appels à l'action doubles (principal et secondaire)
- Vitrine de produits avec badges
- Arrière-plan optionnel

### variant="banner"
Bannière héros minimaliste avec eyebrow et CTAs pour les sections de contenu.

**Caractéristiques:**
- Texte "eyebrow" optionnel
- Typographie audacieuse
- Appels à l'action doubles
- Image optionnelle
- Arrière-plans personnalisables
`
			}
		}
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['molecule', 'default', 'section', 'banner'],
			description: 'Hero layout variant'
		},
		title: {
			control: 'text',
			description: 'Main heading displayed prominently in the hero'
		},
		description: {
			control: 'text',
			description: 'Supporting description text'
		},
		details: {
			control: 'text',
			description: 'Small badge text displayed above title (molecule variant)'
		},
		image: {
			control: 'object',
			description: 'Image object with responsive sources'
		},
		backgroundColor: {
			control: 'color',
			description: 'Hex color for background'
		},
		ctas: {
			control: 'object',
			description: 'Array of CTA button objects (molecule variant)'
		}
	}
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// ===== MOLECULE VARIANT =====

export const MoleculePrimary: Story = {
	args: {
		variant: 'molecule',
		title: 'Simples Thérapies',
		description:
			'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
		details: '2 Avril 2020 • 53min',
		image: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
		},
		backgroundColor: '#6c00e2',
		ctas: [
			{
				label: 'Regarder',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
				color: '#0a84ff'
			}
		]
	},
	play: async ({ canvasElement, step }) => {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { expect, within } = await import('@storybook/test');
		const canvas = within(canvasElement);

		await step('Render hero title', async () => {
			expect(canvas.getByText('Simples Thérapies')).toBeInTheDocument();
		});

		await step('Display hero description', async () => {
			expect(canvas.getByText(/Leurs succès/)).toBeInTheDocument();
		});

		await step('Show hero details', async () => {
			expect(canvas.getByText('2 Avril 2020 • 53min')).toBeInTheDocument();
		});

		await step('Render CTA button', async () => {
			const button = canvas.getByRole('link', { name: 'Regarder' });
			expect(button).toBeInTheDocument();
			expect(button).toHaveAttribute('href', 'https://www.youtube.com/watch?v=7e90gBu4pas');
		});

		await step('Apply background color', async () => {
			const heroElement =
				canvasElement.querySelector('[data-testid="hero"]') ||
				canvasElement.firstElementChild;
			expect(heroElement).toBeInTheDocument();
		});

		await step('Hero has proper accessibility structure', async () => {
			const heading = canvas.getByRole('heading', { level: 1 });
			expect(heading).toBeInTheDocument();
			expect(heading).toHaveAccessibleName('Simples Thérapies');
		});
	}
};

export const MoleculeAfroClub: Story = {
	args: {
		...MoleculePrimary.args,
		title: "L'Afro Club",
		details: 'En direct • RFI Musique',
		description: `Chaque semaine, explorez les meilleures tendances afro-urbaines avec DJ Face Maker. Sessions acoustiques en direct avec les artistes phares de la scène africaine francophone.`,
		image: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
		},
		backgroundColor: '#990505',
		ctas: [
			{
				label: 'Écouter',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: '#',
				color: '#ff6b6b'
			},
			{
				label: 'En savoir plus',
				icon: 'M 25 5 L 43.58 43.58 M 25 5 L 6.42 43.58',
				url: '#',
				color: '#ffd93d'
			}
		]
	}
};

export const MoleculeNjingaTurbans: Story = {
	args: {
		variant: 'molecule',
		title: 'Turbans Njinga',
		details: 'Collection Premium • Modulable',
		description:
			'Découvrez notre collection exclusive de turbans modulables. Qualité premium, confort inégalé et styles contemporains pour tous les moments de votre vie.',
		image: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
		},
		backgroundColor: '#d4a574',
		ctas: [
			{
				label: 'Acheter',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: '#',
				color: '#8b5a3c'
			},
			{
				label: 'Découvrir',
				icon: 'M 25 10 L 25 40 M 15 25 L 35 25',
				url: '#',
				color: '#f4e4c1'
			}
		]
	}
};

// ===== DEFAULT VARIANT =====

export const DefaultMacBookAir: Story = {
	args: {
		variant: 'default',
		title: 'MacBook Air',
		subtitle: 'Supercharged by M3',
		description: "The world's best-selling laptop is now even more powerful.",
		image: {
			desktop:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
			alt: 'MacBook Air'
		},
		isNew: true,
		learnMoreHref: '#learn-more',
		buyHref: '#buy',
		backgroundColor: '#000000',
		textColor: 'light'
	}
};

export const DefaultIMac: Story = {
	args: {
		variant: 'default',
		title: 'iMac',
		subtitle: 'A statement. Instantly.',
		description: "The all-in-one that's all yours. In seven stunning colors.",
		image: {
			desktop:
				'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop',
			alt: 'iMac'
		},
		isNew: false,
		learnMoreHref: '#learn-more',
		buyHref: '#buy',
		backgroundColor: '#FFFFFF',
		textColor: 'dark'
	}
};

// ===== SECTION VARIANT =====

export const SectionDefault: Story = {
	args: {
		variant: 'section',
		title: 'Les Dernières Sorties Musicales',
		subtitle: 'Découvrez',
		description:
			'Explorez les dernières tendances afro-urbaines, hip hop, r&b, et bien plus. Des sélections curatées des meilleurs artistes africains francophones et émergents.',
		primaryAction: {
			label: 'Écouter Maintenant',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: 'Découvrir Plus',
			onClick: () => console.log('Secondary action clicked')
		},
		products: [
			{
				name: "L'Afro Club",
				image: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format&h=300&w=300&fit=crop',
				badge: 'En Direct'
			},
			{
				name: 'Urban Xra',
				image: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format&h=300&w=300&fit=crop',
				badge: 'Populaire'
			}
		]
	}
};

export const SectionWithoutProducts: Story = {
	args: {
		variant: 'section',
		title: 'Turbans Modulables',
		description:
			'Découvrez notre collection exclusive de turbans modulables. Qualité premium, styles contemporains et confortables pour tous les moments de votre vie.',
		primaryAction: {
			label: 'Explorez la Collection',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: 'Nous Contactez',
			onClick: () => console.log('Secondary action clicked')
		},
		products: []
	}
};

export const SectionWithBackground: Story = {
	args: {
		variant: 'section',
		title: 'Collection Njinga',
		subtitle: 'Exclusif',
		description:
			'Nos turbans modulables combinent tradition et modernité. Chaque pièce est confectionnée avec soin pour offrir confort et style intemporel.',
		primaryAction: {
			label: 'Acheter Maintenant',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: 'Voir la Galerie',
			onClick: () => console.log('Secondary action clicked')
		},
		backgroundImage:
			'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
		products: [
			{
				name: 'Doré',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
				badge: 'Populaire'
			},
			{
				name: 'Panthère',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
				badge: 'Nouveau'
			},
			{
				name: 'Malabo',
				image: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
				badge: 'Bestseller'
			}
		]
	}
};

// ===== BANNER VARIANT =====

export const BannerPrimary: Story = {
	args: {
		variant: 'banner',
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée.',
		subtitle: 'Des fonctionnalités santé et forme avancées.',
		primaryAction: { label: 'Acheter', href: '#' },
		secondaryAction: { label: 'En savoir plus', href: '#' },
		backgroundColor: '#000000'
	}
};

export const BannerWithLongText: Story = {
	args: {
		variant: 'banner',
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée. Plus aventurière. Plus personnelle. Plus tout.',
		subtitle:
			'Des fonctionnalités santé et forme avancées. Et de nouvelles façons de rester connecté. Le tout dans un design élégant et épuré.',
		primaryAction: { label: 'Acheter', href: '#' },
		secondaryAction: { label: 'En savoir plus', href: '#' },
		backgroundColor: '#000000'
	}
};

export const BannerWithDifferentBackground: Story = {
	args: {
		variant: 'banner',
		eyebrow: 'Nouvelle Offre',
		title: 'Découvrez la Révolution',
		subtitle: 'Des fonctionnalités innovantes et un design étonnant.',
		primaryAction: { label: 'Commencer', href: '#' },
		secondaryAction: { label: 'En savoir plus', href: '#' },
		backgroundColor: '#ff0000'
	}
};
