import type { Meta, StoryObj } from '@storybook/svelte';

import Shelf from './Shelf.svelte';

const meta: Meta<typeof Shelf> = {
	title: 'Templates/Shelf',
	component: Shelf
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DJFMK: Story = {
	name: 'DJ Face Maker - Home',
	args: {
		logo: {
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: false,
		alternateColor: true,
		navLinks: [
			{
				label: 'Home',
				href: '/'
			},
			{
				label: 'About',
				href: '/about'
			},
			{
				label: 'Contact',
				href: '/contact'
			}
		],
		slices: [
			{
				name: 'tiles',
				logo: {
					imgUrl: 'https://images.prismic.io/djfacemakerv2/f8e0f24e-8600-4867-9691-9efb20be9ea9_fmk+transition+blanc.png?auto=compress,format'
				},
				images: [
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/4a7327bf-a1e4-4767-aab1-d77b2a3d8391_FMK_Home.jpg?auto=compress,format',
					'https://images.prismic.io/djfacemakerv2/ecdf7fa2-f35e-4824-9ccc-7229b1977fe1_A65B51FA-DCEA-46EE-AB42-DFB9DA659ABD.JPG?auto=compress,format'
				]
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
							mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
							tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
						},
						buttonName: 'Boostez votre quotidien',
						buttonLink: 'https://djfacemaker.com/simples-therapies/',
						backgroundColor: '#6c00e2',
						mixColor: true
					},
					{
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
						mixColor: true
					},
					{
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
						backgroundColor: '#024a99',
						mixColor: true
					}
				]
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
							mobile: 'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format',
							tablet: 'https://images.prismic.io/djfacemakerv2/77f12aba-a888-4ce2-8b08-c6c8ffa71835_ACAL+cover.jpg?auto=compress,format'
						}
					}
				]
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
							mobile: 'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format',
							tablet: 'https://images.prismic.io/djfacemakerv2/605984ce-c535-46cd-801a-bc67fd548db6_Sagacite%CC%81.jpg?auto=compress,format'
						},
						buttonLink: 'https://www.youtube.com/watch?v=UnJ05tL_MNM',
						backgroundColor: '#C48C3B',
						mixColor: true
					},
					{
						title: '1 Question Pour 2.',
						overview:
							"Les céréales, c'est avant ou après le lait ? La capsule de Daphné vous interroge sur les questions essentielles du quotidien en duo et ce n'est pas toujours très conventionnel.",
						imgSrc: {
							desktop:
								'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
							mobile: 'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format',
							tablet: 'https://images.prismic.io/djfacemakerv2/4b213e73-25c8-4a5a-895e-f382832fbfde_1QP2.jpg?auto=compress,format'
						},
						buttonLink:
							'https://youtube.com/playlist?list=PL4H1Npa0YXqYJkl25FzX-A08dI-LSnAb8',
						backgroundColor: '#FF7BBF',
						mixColor: true
					}
				]
			}
		]
	}
};

export const Njinga: Story = {
	name: 'Njinga - Home',
	args: {
		logo: {
			imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543'
		},
		open: false,
		alternateColor: true,
		navLinks: [
			{
				label: 'Turbans modulables',
				href: '/'
			},
			{
				label: 'Headbands modulables',
				href: '/'
			},
			{
				label: 'Turbans croisés',
				href: '/'
			},
			{
				label: 'Echarpes capuches',
				href: '/'
			},
			{
				label: 'Bijoux',
				href: '/'
			}
		],
		slices: [
			{
				name: 'hero',
				title: "Des accessoires chics et malins pour avoir de l'allure.",
				overview: "Et si être élégante au quotidien n'était qu'une affaire de secondes?",
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759',
					tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_102_720x.jpg?v=1645793759'
				},
				buttonName: 'Découvrez comment',
				buttonLink: 'https://njinga.fr'
			},
			{
				name: 'carousel',
				title: 'Décontracté. Jour et nuit.',
				category: 'Bonnet nuit et jour',
				overview:
					'Le bonnet nuit et jour ajustable est la dernière création de Njinga. La doublure en satin alliée au street style du bonnet vous donne belle allure de jour comme de nuit.',
				cards: [
					{
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_155_7d3e18cc-aadf-48ee-a292-dda3cd25ad82_540x.jpg?v=1645794291'
						}
					}
				]
			},
			{
				name: 'carousel',
				title: 'Itérations. Améliorations.',
				category: 'Turbans modulables',
				overview:
					'Chez Njinga nous sommes à l’écoute de vos besoins. Nous avons amélioré les turbans modulables en y intégrant une doublure en satin afin de protéger vos cheveux de la casse.',
				cards: [
					{
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_89_24428b6f-c0e4-4b10-8738-263442c1ed6b_1080x.jpg?v=1645654449',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_89_24428b6f-c0e4-4b10-8738-263442c1ed6b_1080x.jpg?v=1645654449',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Welda_89_24428b6f-c0e4-4b10-8738-263442c1ed6b_1080x.jpg?v=1645654449'
						}
					}
				]
			},
			{
				name: 'carousel',
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
						}
					},
					{
						title: 'Panthère',
						subtitle: '€49,99',
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957'
						}
					},
					{
						title: 'Malabo',
						subtitle: '€49,99',
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
						}
					}
				]
			},
			{
				name: 'carousel',
				title: 'Headbands Modulables',
				category: 'Accessoire de cheveux',
				cards: [
					{
						title: 'Doré',
						subtitle: '€34,99',
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_101_large.jpg?v=1621177160',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_101_large.jpg?v=1621177160',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_101_large.jpg?v=1621177160'
						}
					},
					{
						title: 'Panthère',
						subtitle: '€24,99',
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_46_large.jpg?v=1621177619',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_46_large.jpg?v=1621177619',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_46_large.jpg?v=1621177619'
						}
					},
					{
						title: 'Kente Violet',
						subtitle: '€49,99',
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_132_large.jpg?v=1621177375',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_132_large.jpg?v=1621177375',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_132_large.jpg?v=1621177375'
						}
					},
					{
						title: 'Bogolan',
						subtitle: '€49,99',
						imgSrc: {
							desktop:
								'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_41_large.jpg?v=1621178350',
							mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_41_large.jpg?v=1621178350',
							tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_41_large.jpg?v=1621178350'
						}
					}
				]
			}
		]
	}
};

export const Ouranos: Story = {
	name: 'Ouranos - Home',
	args: {
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			showTitle: true,
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
		},
		cta: {
			label: 'Souscrire',
			url: '/souscrire'
		},
		open: false,
		alternateColor: false,
		navLinks: [
			{
				label: 'Home',
				href: '/'
			},
			{
				label: 'About',
				href: '/about'
			},
			{
				label: 'Contact',
				href: '/contact'
			}
		],
		slices: [
			{
				name: 'text-animation',
				labels: [
					{
						color: '#22c55e',
						title: 'Simple'
					},
					{
						color: '#eab308',
						title: 'Transparente'
					},
					{
						color: '#3b82f6',
						title: 'Révolutionnaire'
					}
				]
			},
			{
				name: 'call-to-action',
				buttonBefore: true,
				overview:
					'Ouranos combine les meilleures offres d’assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.',
				buttons: [
					{
						label: 'Souscrire',
						url: '/souscrire',
						backgroundColor: '#0284c7'
					},
					{
						label: "Contacter l'equipe",
						url: '/contact',
						backgroundColor: '#1c1917'
					}
				]
			},
			{
				name: 'features',
				title: 'Découvrez comment ?',
				features: [
					{
						color: '#22c55e',
						title: 'Simple',
						subtitle: 'L’assurance en toute simplicité.',
						description:
							'Ouranos réinvente complètement l’approche de l’assurance. Vos informations d’assuré dans le creux de votre main grâce à votre smartphone, magnifiquement disposées et faciles à comprendre.',
						details: {
							cover: {
								url: 'https://images.prismic.io/ouranos/3f508aca-4bba-4975-899c-cfa85646553a_couple-sits-relaxing-in-living-room.jpg?auto=compress,format'
							},
							description:
								'<p><strong>Où vous voulez, quand vous le souhaitez.</strong><br>Que vous soyez devant votre TV, en plein jogging ou en train de cuisiner, il vous suffit d’un smartphone pour vous assurer.<br><br><strong>Bye bye la paperasse. Bonjour la liberté.</strong><br>Il suffit de répondre à quelques questions pour définir vos besoins, pour découvrir la proposition qui vous correspond.</p>'
						}
					},
					{
						color: '#eab308',
						title: 'Transparente',
						subtitle: 'Des offres adaptées et transparentes.',
						description: 'Nous offrons des prix compétitifs et adaptés à vos besoins.',
						details: {
							cover: {
								url: 'https://images.prismic.io/ouranos/256b6214-43d8-4850-a47b-5df1b7db6e6a_hand-shake-on-yellow.jpg?auto=compress,format'
							},
							description:
								'<p><strong>Oubliez tout ce que vous connaissez des assurances</strong><br>Et découvrez des offres adaptées et transparentes</p>'
						}
					},
					{
						color: '#3b82f6',
						title: 'Révolutionnaire',
						subtitle: 'Une interface complète, facile à utiliser.',
						description: 'Courtier en assurances nouvelle génération.',
						details: {
							cover: {
								url: 'https://images.prismic.io/ouranos/c92dd038-7b63-4a4a-8aaa-4fd26d6ca3da_office-work-tools-on-the-white-desk.jpg?auto=compress,format'
							},
							description:
								"<p><strong>Quand l’assurance rencontre le téléphone</strong><br>Souscrivez en quelques minutes seulement depuis votre application Ouranos. Gérez vos polices d'assurances sur votre téléphone simplement et sans paperasse.<br><br><strong>Réactive<br></strong>Toujours à vos côtés : disponible 7j/7 (même le dimanche!)</p>"
						}
					}
				]
			},
			{
				name: 'slogan',
				cta: {
					url: '/',
					label: 'Souscrire',
					color: '#0284c7'
				},
				backgroundColor: '#000000',
				slogans: [
					{
						title: 'Simple.',
						subtitle: '0% prise de tête'
					},
					{
						title: 'Transparente.',
						subtitle: 'Au juste prix'
					},
					{
						title: 'Révolutionnaire.',
						subtitle: '100% mobile et flexible'
					}
				]
			}
		]
	}
};
