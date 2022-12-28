<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Carousel from './Carousel.svelte';
</script>

<Meta
	title="Organisms/Carousel"
	component={Carousel}
	argTypes={{
		title: { control: 'text' },
		category: { control: 'text' },
		color: { control: 'color' },
		cards: { control: 'object' }
	}}
/>

<Template let:args>
	<Carousel {...args} />
</Template>

<Story
	name="One Item"
	args={{
		cards: [
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
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				buttonName: 'Entrez dans la danse',
				buttonLink: 'https://audioboom.com/channels/4993780/episodes',
				backgroundColor: '#024a99'
			}
		]
	}}
/>

<Story
	name="Two items"
	args={{
		title: 'Les dernières sorties',
		category: 'Music',
		cards: [
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
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
				},
				buttonName: 'Entrez dans le club',
				buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
				backgroundColor: '#990505'
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
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				buttonName: 'Entrez dans la danse',
				buttonLink: 'https://audioboom.com/channels/4993780/episodes',
				backgroundColor: '#024a99'
			}
		]
	}}
/>

<Story
	name="Three items"
	args={{
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
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
				},
				buttonName: 'Boostez votre quotidien',
				buttonLink: 'https://djfacemaker.com/simples-therapies/',
				backgroundColor: '#6c00e2'
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
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
				},
				buttonName: 'Entrez dans le club',
				buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
				backgroundColor: '#990505'
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
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				buttonName: 'Entrez dans la danse',
				buttonLink: 'https://audioboom.com/channels/4993780/episodes',
				backgroundColor: '#024a99'
			}
		]
	}}
/>

<Story
	name="Three items desktop"
	parameters={{
		viewport: {
			defaultViewport: 'desktop'
		}
	}}
	args={{
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
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
				},
				buttonName: 'Boostez votre quotidien',
				buttonLink: 'https://djfacemaker.com/simples-therapies/',
				backgroundColor: '#6c00e2'
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
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
				},
				buttonName: 'Entrez dans le club',
				buttonLink: 'https://musique.rfi.fr/tag/auteur/herve-mandina',
				backgroundColor: '#990505'
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
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				buttonName: 'Entrez dans la danse',
				buttonLink: 'https://audioboom.com/channels/4993780/episodes',
				backgroundColor: '#024a99'
			}
		]
	}}
/>

<Story
	name="Three items without details"
	args={{
		cards: [
			{
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					mobile:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
					tablet:
						'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
				},
				backgroundColor: '#6c00e2'
			},
			{
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
					mobile:
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
					tablet:
						'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
				},
				backgroundColor: '#990505'
			},
			{
				imgSrc: {
					desktop:
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
					mobile:
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
					tablet:
						'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
				},
				backgroundColor: '#024a99'
			}
		]
	}}
/>

<Story
	name="Njinga - Collections"
	args={{
		title: 'Turbans Modulables',
		category: 'Accessoire de cheveux',
		cards: [
			{
				title: 'Doré',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
				}
			},
			{
				title: 'Panthère',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957'
				}
			},
			{
				title: 'Malabo',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
				}
			}
		]
	}}
/>

<Story
	name="Njinga - Collections Desktop"
	parameters={{
		viewport: {
			defaultViewport: 'desktop'
		}
	}}
	args={{
		title: 'Turbans Modulables',
		category: 'Accessoire de cheveux',
		size: 'md',
		cards: [
			{
				title: 'Doré',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
				},
				buttonLink: 'https://njinga.fr'
			},
			{
				title: 'Panthère',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957'
				},
				buttonLink: 'https://njinga.fr'
			},
			{
				title: 'Malabo',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
				},
				buttonLink: 'https://njinga.fr'
			}
		]
	}}
/>

<Story
	name="Njinga - Collections Desktop Variant"
	parameters={{
		viewport: {
			defaultViewport: 'desktop'
		}
	}}
	args={{
		title: 'Turbans Modulables',
		category: 'Accessoire de cheveux',
		size: 'md',
		cards: [
			{
				title: 'Doré',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
				},
				buttonLink: 'https://njinga.fr',
				textOnImage: false
			},
			{
				title: 'Panthère',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_84_large.jpg?v=1621175957'
				},
				buttonLink: 'https://njinga.fr',
				textOnImage: false
			},
			{
				title: 'Malabo',
				subtitle: '€49,99',
				imgSrc: {
					desktop:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					mobile:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836',
					tablet:
						'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/TurbanflexibleMalabo_large.jpg?v=1621175836'
				},
				buttonLink: 'https://njinga.fr',
				textOnImage: false
			}
		]
	}}
/>
