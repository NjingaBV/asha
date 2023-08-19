<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import TextAnimation from './TextAnimation.svelte';
</script>

<Meta
	title="Organisms/TextAnimation"
	component={TextAnimation}
	argTypes={{
		labels: { control: 'object' }
	}}
/>

<Template let:args>
	<TextAnimation {...args} />
</Template>

<Story
	name="Ouranos"
	args={{
		labels: [
			{
				color: '#22c55e',
				title: 'Simple'
			},
			{
				color: '#eab308',
				title: 'Transparente'
			},
			{
				color: '#3b82f6',
				title: 'Révolutionnaire'
			}
		]
	}}
/>
