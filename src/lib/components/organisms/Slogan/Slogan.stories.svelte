<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Slogan from './Slogan.svelte';
</script>

<Meta
	title="Organisms/Slogan"
	component={Slogan}
	argTypes={{
		slogans: { control: 'object' }
	}}
/>

<Template let:args>
	<Slogan {...args} />
</Template>

<Story
	name="Ouranos"
	args={{
		cta: {
			url: '/',
			label: 'Souscrire',
			color: '#0284c7'
		},
		backgroundColor: '#000000',
		slogans: [
			{
				title: 'Simple.',
				subtitle: '0% prise de tête'
			},
			{
				title: 'Transparente.',
				subtitle: 'Au juste prix'
			},
			{
				title: 'Révolutionnaire.',
				subtitle: '100% mobile et flexible'
			}
		]
	}}
/>
