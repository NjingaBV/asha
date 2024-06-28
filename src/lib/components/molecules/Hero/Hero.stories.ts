import type { Meta, StoryObj } from '@storybook/svelte';
import Hero from './Hero.svelte';

const meta: Meta<typeof Hero> = {
	title: 'Molecules/Hero',
	component: Hero
};

export default meta;
type Story = StoryObj<typeof meta>;

export const SimpleTherapies: Story = {
	name: 'Simples Thérapies',
	args: {
		title: 'Simples Thérapies',
		overview:
			'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
		},
		backgroundColor: '#6c00e2',
		ctaLabel: 'Regarder',
		ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
		ctaEventName: 'PLAY_MEDIA',
		ctaUrl: 'https://www.youtube.com/watch?v=7e90gBu4pas'
	}
};

export const AfroClub: Story = {
	name: "L'Afro Club",
	args: {
		title: "L'Afro Club",
		overview:
			"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker dans l'Afro Club. À cette sélection, s'ajoute désormais une session acoustique Live avec les artistes phares et émergents de la scène africaine francophone.",
		details: '2 Avril 2020 • 53min',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
		},
		backgroundColor: '#990505',
		callToActions: [
			{
				label: 'Regarder',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	}
};

export const UrbanXra: Story = {
	name: 'Urban Xra',
	args: {
		title: 'Urban Xra',
		overview:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		},
		backgroundColor: '#024a99',
		callToActions: [
			{
				label: 'En savoir plus',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z'
			}
		]
	}
};

export const UrbanXraWithoutDescription: Story = {
	name: 'Without Description',
	args: {
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		}
	}
};

export const Ouranos: Story = {
	name: 'Ouranos',
	args: {
		overview:
			'Ouranos combine les meilleures offres d’assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.',
		callToActions: [
			{
				label: 'En savoir plus',
				color: '#0284c7'
			},
			{
				label: "Contacter l'équipe",
				color: '#1c1917'
			}
		]
	}
};
