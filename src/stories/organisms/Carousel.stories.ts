import type { Meta, StoryObj } from '@storybook/sveltekit';
import Carousel from '@/lib/components/organisms/Carousel.svelte';

const meta = {
	title: 'Organisms/Carousel',
	component: Carousel,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		category: { control: 'text' },
		color: { control: 'color' },
		cards: { control: 'object' }
	}
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Les dernières sorties',
		category: 'Music',
		overview: '',
		color: '#ff0000',
		cards: [
			{
				title: "L'Afro Club",
				subtitle: '',
				overview:
					"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker dans l'Afro Club. À cette sélection, s'ajoute désormais une session acoustique Live avec les artistes phares et émergents de la scène africaine francophone.",
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
					mobile: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
					tablet: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
				},
				buttonName: 'Entrez dans le club',
				buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
				backgroundColor: '#990505',
				mixColor: false,
				textOnImage: true
			},
			{
				title: 'Urban Xra',
				subtitle: '',
				overview:
					'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
					mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
					tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				buttonName: 'Entrez dans la danse',
				buttonLink: 'https://audioboom.com/channels/4993780/episodes',
				backgroundColor: '#024a99',
				mixColor: false,
				textOnImage: true
			}
		]
	}
};

export const OneItem: Story = {
	args: {
		...Primary.args,
		title: '',
		category: '',
		cards: [
			{
				title: 'Urban Xra',
				subtitle: '',
				overview:
					'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
					mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
					tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				buttonName: 'Entrez dans la danse',
				buttonLink: 'https://audioboom.com/channels/4993780/episodes',
				backgroundColor: '#024a99',
				mixColor: false,
				textOnImage: true
			}
		]
	}
};

export const TwoItems: Story = {
	args: {
		...Primary.args
	}
};

export const NjingaCollections: Story = {
	args: {
		...Primary.args,
		title: 'Turbans Modulables',
		category: 'Accessoire de cheveux',
		cards: [
			{
				title: 'Doré',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
				},
				overview: '',
				buttonName: '',
				buttonLink: '',
				backgroundColor: '#ffffff',
				mixColor: false,
				textOnImage: false
			},
			{
				title: 'Panthère',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957'
				},
				overview: '',
				buttonName: '',
				buttonLink: '',
				backgroundColor: '#ffffff',
				mixColor: false,
				textOnImage: false
			},
			{
				title: 'Malabo',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
				},
				overview: '',
				buttonName: '',
				buttonLink: '',
				backgroundColor: '#ffffff',
				mixColor: false,
				textOnImage: false
			}
		]
	}
};
