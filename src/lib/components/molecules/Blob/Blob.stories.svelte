<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Blob from './Blob.svelte';
</script>

<Meta
	title="Molecules/Blob"
	component={Blob}
	argTypes={{
		color: { control: 'color' }
	}}
/>

<Template let:args>
	<Blob {...args} />
</Template>

<Story
	name="Purple Blob"
	args={{
		color: '#6c00e2'
	}}
/>
