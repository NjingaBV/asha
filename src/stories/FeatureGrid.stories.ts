import type { Meta, StoryObj } from '@storybook/sveltekit';
import FeatureGrid from '@/lib/components/organisms/FeatureGrid/FeatureGrid.svelte';

const meta = {
	title: 'Organisms/FeatureGrid',
	component: FeatureGrid,
	parameters: {
		layout: 'padded'
	},
	tags: ['autodocs'],
	argTypes: {
		features: { control: 'object' },
		layout: {
			control: { type: 'select' },
			options: ['grid', 'alternating']
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
					"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker. Une sélection des meilleurs artistes de la scène africaine francophone.",
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
	render: (args) => ({ Component: FeatureGrid, props: args })
};

export const Default: Story = {
	args: {
		...Primary.args
	}
};

export const AlternatingLayout: Story = {
	args: {
		...Primary.args,
		layout: 'alternating'
	}
};

export const ProductsCollection: Story = {
	args: {
		features: [
			{
				title: 'Doré',
				description:
					'Un turban modulable aux teintes dorées sophistiquées. Parfait pour ajouter une touche d\'élégance à votre style quotidien.',
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
	}
};

export const WithAlternatingImages: Story = {
	args: {
		features: [
			{
				title: "L'Afro Club",
				description:
					"Chaque semaine, sur RFI Musique, découvrez les meilleures tendances afro-urbaines avec DJ Face Maker. Une sélection curatée des artistes phares de la scène africaine francophone avec sessions acoustiques en direct.",
				image: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
				badge: 'Musique Afro',
				imagePosition: 'right'
			},
			{
				title: 'Doré',
				description:
					'Un turban modulable aux teintes dorées sophistiquées. Parfait pour ajouter une touche d\'élégance intemporelle à votre style quotidien et vos occasions spéciales.',
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
	}
};
