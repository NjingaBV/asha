import type { Meta, StoryObj } from '@storybook/svelte';

import Home from './Home.svelte';

const meta: Meta<typeof Home> = {
	title: 'Pages/Home',
	component: Home,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DJFMK: Story = {
	name: 'DJ FMK - Home',
	args: {
		logo: {
			imgUrl:
				'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		},
		open: false,
		alternateColor: true,
		navLinks: [
			{
				label: 'Home',
				href: '/',
			},
			{
				label: 'About',
				href: '/about',
			},
			{
				label: 'Contact',
				href: '/contact',
			},
		],
		slices: [
			{
				name: 'tiles',
				logo: {
					imgUrl:
						'https://images.prismic.io/djfacemakerv2/f8e0f24e-8600-4867-9691-9efb20be9ea9_fmk+transition+blanc.png?auto=compress,format',
				},
				images: [
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
				],
			},
			{
				name: 'carousel',
				title: 'Les dernières nouveautés',
				category: 'Podcast',
				cards: [
					{
						title: 'Simples Thérapies',
						overview:
							'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
						},
						buttonName: 'Boostez votre quotidien',
						buttonLink:
							'https://djfacemaker.com/simples-therapies/',
						backgroundColor: '#6c00e2',
						mixColor: true,
					},
					{
						title: "L'Afro Club",
						overview:
							"Chaque semaine, sur RFI Musique, faites le tour des tendances afro-urbaines avec DJ Face Maker dans l'Afro Club. À cette sélection, s'ajoute désormais une session acoustique Live avec les artistes phares et émergents de la scène africaine francophone.",
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
						},
						buttonName: 'Entrez dans le club',
						buttonLink:
							'https://musique.rfi.fr/tag/auteur/herve-mandina',
						backgroundColor: '#990505',
						mixColor: true,
					},
					{
						title: 'Urban Xra',
						overview:
							'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
						},
						buttonName: 'Entrez dans la danse',
						buttonLink:
							'https://audioboom.com/channels/4993780/episodes',
						backgroundColor: '#024a99',
						mixColor: true,
					},
				],
			},
			{
				name: 'carousel',
				title: 'Dans les backs',
				category: 'Music',
				cards: [
					{
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
						},
					},
				],
			},
			{
				name: 'carousel',
				title: 'Emissions',
				category: 'Show',
				cards: [
					{
						title: 'Sagacité',
						overview:
							"Le programme pour les entrepreneurs d'Afrique et de la diaspora. Relever des défis, résoudre des problèmes et apporter des solutions n'a plus aucun secret pour eux.",
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
						},
						backgroundColor: '#C48C3B',
						mixColor: true,
					},
					{
						title: '1 Question Pour 2.',
						overview:
							"Les céréales, c'est avant ou après le lait ? La capsule de Daphné vous interroge sur les questions essentielles du quotidien en duo et ce n'est pas toujours très conventionnel.",
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
						},
						buttonLink:
							'https://youtube.com/playlist?list=PL4H1Npa0YXqYJkl25FzX-A08dI-LSnAb8',
						backgroundColor: '#FF7BBF',
						mixColor: true,
					},
				],
			},
		],
	},
};

export const DJFMKShow: Story = {
	name: 'DJ FMK - Show',
	args: {
		logo: {
			imgUrl:
				'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format',
		},
		open: false,
		alternateColor: true,
		navLinks: [
			{
				label: 'Home',
				href: '/',
			},
			{
				label: 'About',
				href: '/about',
			},
			{
				label: 'Contact',
				href: '/contact',
			},
		],
		slices: [
			{
				name: 'hero',
				title: 'Simples Thérapies',
				overview:
					'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					mobile:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					tablet:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
				},
				backgroundColor: '#6c00e2',
				ctaLabel: 'Dernier épisode',
				ctaIcon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				ctaEventName: 'OPEN_PLAYER',
				ctaUrl: 'https://www.youtube.com/watch?v=G-ECTntZYtk',
			},
			{
				name: 'carousel',
				category: 'Podcast',
				cards: [
					{
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
						},
						backgroundColor: '#6c00e2',
						mixColor: true,
						isVideo: true,
					},
					{
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
						},
						backgroundColor: '#6c00e2',
						mixColor: true,
						isVideo: true,
					},
					{
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
						},
						backgroundColor: '#6c00e2',
						mixColor: true,
						isVideo: true,
					},
				],
			},
			{
				name: 'carousel',
				title: 'Dans les backs',
				category: 'Music',
				cards: [
					{
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
						},
					},
				],
			},
			{
				name: 'carousel',
				title: 'Emissions',
				category: 'Show',
				cards: [
					{
						title: 'Sagacité',
						overview:
							"Le programme pour les entrepreneurs d'Afrique et de la diaspora. Relever des défis, résoudre des problèmes et apporter des solutions n'a plus aucun secret pour eux.",
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
						},
						backgroundColor: '#C48C3B',
						mixColor: true,
					},
					{
						title: '1 Question Pour 2.',
						overview:
							"Les céréales, c'est avant ou après le lait ? La capsule de Daphné vous interroge sur les questions essentielles du quotidien en duo et ce n'est pas toujours très conventionnel.",
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
							mobile:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
							tablet:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
						},
						buttonLink:
							'https://youtube.com/playlist?list=PL4H1Npa0YXqYJkl25FzX-A08dI-LSnAb8',
						backgroundColor: '#FF7BBF',
						mixColor: true,
					},
				],
			},
		],
	},
};
