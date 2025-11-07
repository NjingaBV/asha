import type { Meta, StoryObj } from '@storybook/sveltekit';
import Feature from '@/lib/components/molecules/Feature/Feature.svelte';

const meta = {
	title: 'Molecules/Feature',
	component: Feature,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		order: { control: 'number' },
		title: { control: 'text' },
		subtitle: { control: 'text' },
		description: { control: 'text' },
		color: { control: 'color' },
		details: { control: 'object' }
	}
} satisfies Meta<typeof Feature>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		order: 1,
		color: '#990505',
		title: "L'Afro Club",
		subtitle: 'Explorez les tendances afro-urbaines',
		description:
			'Chaque semaine, sur RFI Musique, faites le tour des meilleures tendances afro-urbaines avec DJ Face Maker. Une sélection curatée des artistes phares et émergents de la scène africaine francophone.',
		details: {
			title: 'En Direct',
			cover: {
				url: 'https://images.prismic.io/djfacemakerv2/afca42bc-3cc1-4476-8b24-97bdafdad556_FMK+RFI.jpg?auto=compress,format',
				alt: "L'Afro Club - RFI Musique",
				text: 'Cover image'
			},
			description: `<p><strong>Sessions acoustiques en direct</strong><br>Des performances exclusives des artistes les plus en vogue de la musique africaine. Découvrez les sons qui façonnent la scène contemporaine.<br><br><strong>Disponible partout, tout le temps</strong><br>Écoutez sur RFI Musique, votre plateforme préférée de podcast, ou en direct sur Urban FM. La musique africaine n'a jamais été aussi accessible.</p>`
		}
	}
};

export const Simple: Story = {
	args: {
		...Primary.args
	}
};

export const UrbanXra: Story = {
	args: {
		order: 2,
		color: '#024a99',
		title: 'Urban Xra',
		subtitle: 'Les dernières tendances urbaines',
		description:
			'Les dernières sorties afro, hip hop, r&b, baile funk, amapiano et punjabi. Disponible du lundi au vendredi sur Urban FM 104.5 à Libreville et toutes vos plateformes de podcast préférées.',
		details: {
			title: 'Écouter',
			cover: {
				url: 'https://images.prismic.io/djfacemakerv2/468e74c9-d158-4fe8-b43b-7aa2f62e942b_Urban+Xtra.png?auto=compress,format',
				alt: 'Urban Xra - Urban FM',
				text: 'Cover image'
			},
			description: `<p><strong>Une immersion musicale complète</strong><br>De l'afrobeats aux sounds émergents, découvrez la diversité de la musique urbaine africaine et mondiale. Des sélections exclusives des DJ les plus talentueux.<br><br><strong>Connecté à votre quotidien</strong><br>Chaque jour, une nouvelle sélection. Jogging, travail ou soirée - la musique parfaite pour chaque moment de votre vie.</p>`
		}
	}
};

export const NjingaTurbans: Story = {
	args: {
		order: 3,
		color: '#d4a574',
		title: 'Turbans Njinga',
		subtitle: 'Collection premium et modulable',
		description:
			'Découvrez notre sélection exclusive de turbans modulables. Chaque pièce est confectionnée avec soin pour offrir confort, style et une touche intemporelle à votre garde-robe.',
		details: {
			title: 'Explorer',
			cover: {
				url: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/products/Welda_121_large.jpg?v=1621181269',
				alt: 'Collection Turbans Njinga',
				text: 'Premium turban collection'
			},
			description: `<p><strong>Qualité Premium, Design Contemporain</strong><br>Chaque turban est conçu pour combiner tradition et modernité. Des teintes sophistiquées aux motifs exclusifs, trouvez le style qui vous ressemble.<br><br><strong>Polyvalent pour tous les moments</strong><br>Du quotidien aux occasions spéciales, nos turbans s'adaptent à votre vie. Modulable, confortable et toujours élégant.</p>`
		}
	}
};
