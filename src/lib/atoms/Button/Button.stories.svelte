<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from './Button.svelte';
</script>

<Meta
	title="Atoms/Button"
	component={Button}
	argTypes={{
		label: { control: 'text' },
		onClick: { action: 'onClick' },
		primary: { control: 'boolean' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}}
/>

<Template let:args>
	<Button {...args} on:click={args.onClick}>{args.slot}</Button>
</Template>

<Story
	name="Default"
	args={{
		slot: 'Button'
	}}
/>

<Story
	name="Purple"
	args={{
		slot: 'Button',
		color: '#6c00e2'
	}}
/>
<Story
	name="Red"
	args={{
		size: 'large',
		slot: 'Button',
		color: '#990505'
	}}
/>

<Story
	name="Blue"
	args={{
		size: 'small',
		slot: 'Button',
		color: '#024a99'
	}}
/>

<Story
	name="White"
	args={{
		slot: 'Button',
		color: '#ffffff'
	}}
/>
