import type { Meta, StoryObj } from '@storybook/sveltekit';
import Hero from '@/lib/components/molecules/Hero/Hero.svelte';

const meta = {
	title: 'Molecules/Hero',
	component: Hero,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		overview: { control: 'text' },
		details: { control: 'text' },
		imgSrc: { control: 'object' },
		backgroundColor: { control: 'color' },
		callToActions: { control: 'object' }
	}
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'Simples Thérapies',
		overview:
			'Leurs succès, leurs échecs et leurs doutes les ont conduits sur le chemin de leur destinée.',
		details: '2 Avril 2020 • 53min',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/cc7c006e-352b-4dd2-bb41-2625d8eab953_ST+vignette+FMK.png?auto=compress,format'
		},
		backgroundColor: '#6c00e2',
		callToActions: [
			{
				label: 'Regarder',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: 'https://www.youtube.com/watch?v=7e90gBu4pas',
				color: '#0a84ff'
			}
		]
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
		details: 'En direct • RFI Musique',
		overview: `Chaque semaine, explorez les meilleures tendances afro-urbaines avec DJ Face Maker. Sessions acoustiques en direct avec les artistes phares de la scène africaine francophone.`,
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format'
		},
		backgroundColor: '#990505',
		callToActions: [
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

export const UrbanXra: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		details: 'Lundi - Vendredi • Urban FM 104.5',
		overview:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi. Disponible sur Urban FM 104.5 à Libreville et toutes vos plateformes préférées de podcast.',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		},
		backgroundColor: '#024a99',
		callToActions: [
			{
				label: 'Écouter',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				url: '#',
				color: '#00d4ff'
			},
			{
				label: 'Découvrir',
				icon: 'M 25 10 L 25 40 M 15 25 L 35 25',
				url: '#',
				color: '#ffd700'
			}
		]
	}
};

export const WithoutDescription: Story = {
	args: {
		...Primary.args,
		details: '',
		imgSrc: {
			desktop:
				'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			mobile: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
			tablet: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format'
		}
	}
};

export const UrbanXraWithoutImage: Story = {
	args: {
		...Primary.args,
		title: 'Urban Xra',
		// omit image
		overview:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi sont dans le show de la radio. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et également sur toutes vos plateformes préférées de podcast.',
		backgroundColor: '#024a99',
		callToActions: [
			{
				label: 'En savoir plus',
				url: '#',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				color: '#0a84ff'
			}
		]
	}
};

export const Ouranos: Story = {
	args: {
		...Primary.args,
		overview: `Ouranos combine les meilleures offres d'assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.`,
		callToActions: [
			{
				label: 'En savoir plus',
				url: '#',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				color: '#0284c7'
			},
			{
				label: "Contacter l'équipe",
				url: '#',
				icon: 'M 10 5.25 L 10 44.746094 L 43.570313 25 Z',
				color: '#1c1917'
			}
		]
	}
};

export const NjingaTurbans: Story = {
	args: {
		title: 'Turbans Njinga',
		details: 'Collection Premium • Modulable',
		overview:
			'Découvrez notre collection exclusive de turbans modulables. Qualité premium, confort inégalé et styles contemporains pour tous les moments de votre vie.',
		imgSrc: {
			desktop:
				'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
			mobile: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
			tablet: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269'
		},
		backgroundColor: '#d4a574',
		callToActions: [
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
