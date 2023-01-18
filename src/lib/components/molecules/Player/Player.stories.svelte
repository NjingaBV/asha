<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Player from './Player.svelte';
</script>

<Meta title="Molecules/Player" component={Player} />

<Template let:args>
	<Player {...args} />
</Template>

<Story
	name="Youtube Player"
	args={{
		url: 'https://www.youtube.com/embed/G-ECTntZYtk',
		title: 'Olivia Mabounga',
		subtitle: 'Episode 1',
		overview:
			"Olivia Mabounga, française d'origine Algérienne et Congolaise, a écrit et mis en scène Tchoko, un spectacle qui parle du phénomène de l'éclaircissement de la peau chez les femmes noires interprété par Benedicte Mbemba au Théâtre du Lavoir Moderne Parisien sur fond de texte rap, danse chant et pop culture."
	}}
/>
