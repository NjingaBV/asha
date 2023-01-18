<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Youtube from './Youtube.svelte';
</script>

<Meta
	title="Atoms/Youtube"
	component={Youtube}
/>

<Template let:args>
	<Youtube {...args} />
</Template>

<Story
	name="Youtube Player"
	args={{
		videoId: "G-ECTntZYtk"
	}}
/>