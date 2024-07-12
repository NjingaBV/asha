import type { Meta, StoryObj } from '@storybook/svelte'

import Player from './Player.svelte'

const meta: Meta<typeof Player> = {
	title: 'Molecules/Player',
	component: Player,
}

export default meta
type Story = StoryObj<typeof meta>

export const YoutubePlayer: Story = {
	args: {
		url: 'https://www.youtube.com/embed/G-ECTntZYtk',
		title: 'Olivia Mabounga',
		subtitle: 'Episode 1',
		overview:
			"Olivia Mabounga, française d'origine Algérienne et Congolaise, a écrit et mis en scène Tchoko, un spectacle qui parle du phénomène de l'éclaircissement de la peau chez les femmes noires interprété par Benedicte Mbemba au Théâtre du Lavoir Moderne Parisien sur fond de texte rap, danse chant et pop culture.",
		thumbnail:
			'https://images.prismic.io/djfacemakerv2/0b122bd5-0cf8-427c-a2dd-64d59a2930bb_Olivia+Mabounga.png?auto=compress,format',
	},
}
