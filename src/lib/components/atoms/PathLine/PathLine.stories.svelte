<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import PathLine from './PathLine.svelte';
</script>

<Meta
	title="Atoms/PathLine"
	component={PathLine}
	argTypes={{
		order: { control: 'text' },
		title: { control: 'text' },
		color: { control: 'text' }
	}}
/>

<Template let:args>
	<PathLine {...args} />
</Template>

<Story
	name="Green PathLine"
	args={{
		title: 'Simple',
		order: '1',
		color: '#22c55e'
	}}
/>

<Story
	name="Yellow PathLine"
	args={{
		title: 'Transparente',
		order: '2',
		color: '#eab308'
	}}
/>

<Story
	name="Blue PathLine"
	args={{
		title: 'Révolutionnaire',
		order: '3',
		color: '#3b82f6'
	}}
/>
