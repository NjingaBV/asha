<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Header from './Header.svelte';
</script>

<Meta
	title="Organisms/Header"
	component={Header}
	argTypes={{
		open: { control: 'boolean' },
		items: {
			control: {
				type: 'array',
				options: [
					{ label: 'Home', href: '/' },
					{ label: 'About', href: '/about' },
					{ lable: 'Contact', href: '/contact' }
				]
			}
		}
	}}
/>

<Template let:args>
	<Header {...args} />
</Template>

<Story
	name="Menu Close"
	args={{
		logo: {
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: false,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ lable: 'Contact', href: '/contact' }
		]
	}}
/>

<Story
	name="Menu Open"
	args={{
		logo: {
			title: 'DJ FMK',
			imgUrl: 'https://images.prismic.io/djfacemakerv2/2f3497b5-9e28-4359-8f03-cb8a71548c1e_fmk+transition+noir.png?auto=compress,format'
		},
		open: true,
		navLinks: [
			{ label: 'Home', href: '/' },
			{ label: 'About', href: '/about' },
			{ lable: 'Contact', href: '/contact' }
		]
	}}
/>
