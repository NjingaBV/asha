import type { Meta, StoryObj } from '@storybook/sveltekit';
import Card from './Card.svelte';

const meta = {
	title: 'Molecules/Card',
	component: Card,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		subtitle: { control: 'text' },
		overview: { control: 'text' },
		imgSrc: { control: 'object' },
		buttonName: { control: 'text' },
		buttonLink: { control: 'text' },
		backgroundColor: { control: 'color' },
		mixColor: { control: 'boolean' },
		textOnImage: { control: 'boolean' },
		rounded: { control: 'boolean' },
		isVideo: { control: 'boolean' }
	}
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simples Thérapies',
		subtitle: '',
		overview:
			'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
		},
		buttonName: 'Boostez votre quotidien',
		buttonLink: 'https://djfacemaker.com/simples-therapies/',
		backgroundColor: '#6c00e2',
		mixColor: false,
		textOnImage: true,
		rounded: true,
		isVideo: false
	}
};

export const SimplesTherapies: Story = {
	args: {
		...Primary.args
	}
};

export const AfroClub: Story = {
	args: {
		...Primary.args,
		title: "L'Afro Club",
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
		rounded: false
	}
};

export const UrbanXra: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
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
		backgroundColor: '#024a99'
	}
};

export const WithoutImage: Story = {
	args: {
		...Primary.args,
		title: "L'Afro Club",
		overview:
			"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker dans l'Afro Club. À cette sélection, s'ajoute désormais une session acoustique Live avec les artistes phares et émergents de la scène africaine francophone.",
		buttonName: 'Entrez dans le club',
		buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
		backgroundColor: '#990505'
	}
};

export const WithoutDescription: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		}
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const NjingaBuy: Story = {
	args: {
		...Primary.args,
		title: 'Bonnet jour et nuit',
		overview:
			'Nos turbans modulables, pratiques et designs vous font gagner du temps et vous coiffent en une minute top chrono ! Vous apportez la pièce forte à votre look tout en protégeant vos cheveux grâce à la doublure en satin. Nos turbans sont résistants et peuvent se ranger facilement sans prendre de place !',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291'
		},
		buttonName: 'Je veux du style',
		buttonLink: '/buy'
		// omit backgroundColor
	}
};

export const NjingaHeadband: Story = {
	args: {
		...Primary.args,
		title: 'Headband',
		subtitle: '9,99€',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/PhotoRoom_20211019_022805_large.jpg?v=1634650638',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/PhotoRoom_20211019_022805_large.jpg?v=1634650638',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/PhotoRoom_20211019_022805_large.jpg?v=1634650638'
		}
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const TurbanMalabo: Story = {
	args: {
		...Primary.args,
		title: 'Turban Modulable Malabo',
		subtitle: '€49,99',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
		}
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};

export const TurbanMalaboVariant: Story = {
	args: {
		...Primary.args,
		title: 'Turban Modulable Malabo',
		subtitle: '€49,99',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
		},
		textOnImage: false,
		rounded: false
		// omit overview/buttonName/buttonLink/backgroundColor
	}
};
