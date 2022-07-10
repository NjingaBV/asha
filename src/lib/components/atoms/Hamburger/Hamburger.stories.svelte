<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Hamburger from './Hamburger.svelte';
</script>

<Meta
	title="Atoms/Hamburger"
	component={Hamburger}
	argTypes={{
		open: { control: 'boolean' },
	}}
/>

<Template let:args>
	<Hamburger {...args} on:click={args.onClick} />
</Template>

<Story
	name="Close"
	args={{
		open: false
	}}
/>

<Story
	name="Open"
	args={{
		open: true
	}}
/>

