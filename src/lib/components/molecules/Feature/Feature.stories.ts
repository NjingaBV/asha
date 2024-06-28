import type { Meta, StoryObj } from '@storybook/svelte';
import Feature from './Feature.svelte';

const meta: Meta<typeof Feature> = {
	title: 'Molecules/Feature',
	component: Feature
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
	args: {
		order: '1',
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
	}
};

export const Transparente: Story = {
	args: {
		order: '2',
		color: '#eab308',
		title: 'Transparente',
		subtitle: 'Des offres adaptées et transparentes.',
		description: 'Nous offrons des prix compétitifs et adaptés à vos besoins.',
		details: {
			cover: {
				url: 'https://images.prismic.io/ouranos/256b6214-43d8-4850-a47b-5df1b7db6e6a_hand-shake-on-yellow.jpg?auto=compress,format'
			}
		}
	}
};

export const Révolutionnaire: Story = {
	args: {
		order: '3',
		color: '#3b82f6',
		title: 'Révolutionnaire',
		subtitle: 'Une interface complète, facile à utiliser.',
		description: 'Courtier en assurances nouvelle génération.',
		details: {
			description:
				"<p><strong>Quand l’assurance rencontre le téléphone</strong><br>Souscrivez en quelques minutes seulement depuis votre application Ouranos. Gérez vos polices d'assurances sur votre téléphone simplement et sans paperasse.<br><br><strong>Réactive<br></strong>Toujours à vos côtés : disponible 7j/7 (même le dimanche!)</p>"
		}
	}
};
