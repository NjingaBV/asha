import type { Meta, StoryObj } from '@storybook/svelte'
import CallToAction from './CallToAction.svelte'

const meta: Meta<typeof CallToAction> = {
	title: 'Molecules/CallToAction',
	component: CallToAction,
}

export default meta
type Story = StoryObj<typeof meta>

export const Souscription: Story = {
	args: {
		overview:
			'Ouranos combine les meilleures offres d’assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.',
		buttons: [
			{
				label: 'Souscrire',
				url: '/souscrire',
				backgroundColor: '#0284c7',
			},
			{
				label: "Contacter l'équipe",
				url: '/contact',
				backgroundColor: '#1c1917',
			},
		],
	},
}
