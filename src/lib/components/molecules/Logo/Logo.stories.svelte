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
		title: 'DJ FMK Logo',
		imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
	}}
/>

<Story
	name="Njinga"
	args={{
		title: 'Njinga Logo',
		imgUrl: 'https://cdn.shopify.com/s/files/1/0347/8392/0260/files/Logo_njinga_raccourci_540x.png?v=1645790543'
	}}
/>

<Story
	name="Ouranos"
	args={{
		title: 'uranos',
		subtitle: "Courtier d'assurances",
		showTitle: true,
		imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
	}}
/>
