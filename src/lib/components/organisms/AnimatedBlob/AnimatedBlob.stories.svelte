<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import AnimatedBlob from './AnimatedBlob.svelte';
</script>

<Meta
	title="Organisms/AnimatedBlob"
	component={AnimatedBlob}
	argTypes={{
		colors: { control: 'object' }
	}}
/>

<Template let:args>
	<AnimatedBlob {...args} />
</Template>

<Story
	name="Animated"
	args={{
		colors: ['#6c00e2', '#ff00e2', '#00e2ff']
	}}
/>
