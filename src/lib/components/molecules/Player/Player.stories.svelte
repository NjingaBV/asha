<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Player from './Player.svelte';
</script>

<Meta
	title="Molecules/Player"
	component={Player}
/>

<Template let:args>
	<Player {...args} />
</Template>

<Story
	name="Youtube Player"
	args={{
		url: "https://www.youtube.com/embed/G-ECTntZYtk"
	}}
/>
