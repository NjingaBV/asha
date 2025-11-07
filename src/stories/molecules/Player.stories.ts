import type { Meta, StoryObj } from '@storybook/sveltekit';
import Player from '@/lib/components/molecules/Player.svelte';

const meta = {
	title: 'Molecules/Player',
	component: Player,
	parameters: {
		layout: 'centered'
	},
	tags: ['autodocs'],
	argTypes: {
		url: { control: 'text' },
		title: { control: 'text' },
		subtitle: { control: 'text' },
		overview: { control: 'text' },
		thumbnail: { control: 'text' }
	}
} satisfies Meta<typeof Player>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		url: 'https://www.youtube.com/embed/G-ECTntZYtk',
		title: 'Olivia Mabounga',
		subtitle: 'Episode 1',
		overview:
			"Olivia Mabounga, française d'origine Algérienne et Congolaise, a écrit et mis en scène Tchoko, un spectacle qui parle du phénomène de l'éclaircissement de la peau chez les femmes noires interprété par Benedicte Mbemba au Théâtre du Lavoir Moderne Parisien sur fond de texte rap, danse chant et pop culture.",
		thumbnail:
			'https://images.prismic.io/djfacemakerv2/0b122bd5-0cf8-427c-a2dd-64d59a2930bb_Olivia+Mabounga.png?auto=compress,format'
	}
};

export const YoutubePlayer: Story = {
	args: {
		...Primary.args
	}
};
