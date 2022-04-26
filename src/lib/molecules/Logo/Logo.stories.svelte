<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Logo from './Logo.svelte';
</script>

<Meta
	title="Molecules/Logo"
	component={Logo}
	argTypes={{
		title: { control: 'text' },
		subtitle: { control: 'text' },
		imgUrl: { control: 'text' },
		imgAlt: { control: 'text' },
		showTitle: { control: 'boolean' },
		isSquare: { control: 'boolean' }
	}}
/>

<Template let:args>
	<Logo {...args} />
</Template>

<Story
	name="DJ FMK"
	args={{
		title: 'Logo',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
	}}
/>

<Story
	name="Njinga"
	args={{
		title: 'Logo',
		imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543'
	}}
/>
