<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Nav from './Nav.svelte';
</script>

<Meta
	title="Molecules/Nav"
	component={Nav}
	argTypes={{
		headerMenu: { control: 'boolean' }
	}}
/>

<Template let:args>
	<Nav {...args} />
</Template>

<Story
	name="Header Navigation"
	parameters={{
		viewport: {
			defaultViewport: 'desktop'
		}
	}}
	args={{
		headerMenu: true,
		links: [
			{
				label: 'Home',
				href: '#'
			},
			{
				label: 'About',
				href: '#about'
			},
			{
				label: 'Contact',
				href: '#contact'
			}
		]
	}}
/>

<Story
	name="Aside Navigation"
	args={{
		headerMenu: false,
		links: [
			{
				label: 'Home',
				href: '#'
			},
			{
				label: 'About',
				href: '#about'
			},
			{
				label: 'Contact',
				href: '#contact'
			}
		]
	}}
/>
