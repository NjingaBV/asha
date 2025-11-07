import type { Meta, StoryObj } from '@storybook/sveltekit';
import HeroSection from '@/lib/components/organisms/HeroSection/HeroSection.svelte';

const meta = {
	title: 'Organisms/HeroSection',
	component: HeroSection,
	parameters: {
		layout: 'fullscreen'
	},
	tags: ['autodocs']
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
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

export const WithoutProducts: Story = {
	args: {
		...Default.args,
		products: [],
		title: 'Turbans Modulables',
		subtitle: undefined,
		description:
			'Découvrez notre collection exclusive de turbans modulables. Qualité premium, styles contemporains et confortables pour tous les moments de votre vie.',
		primaryAction: {
			label: 'Explorez la Collection',
			onClick: () => console.log('Primary action clicked')
		},
		secondaryAction: {
			label: 'Nous Contactez',
			onClick: () => console.log('Secondary action clicked')
		}
	}
};

export const WithBackground: Story = {
	args: {
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
