<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Footer from './Footer.svelte';
</script>

<Meta title="Organisms/Footer" component={Footer} />

<Template let:args>
	<Footer {...args} />
</Template>

<Story
	name="Ouranos"
	args={{
		logo: {
			title: 'uranos',
			subtitle: "Courtier d'assurances",
			showTitle: true,
			imgUrl: 'https://images.prismic.io/ouranos/5f910072-4e6d-4b5e-b47a-5649dc9312fe_O.png?Fauto=compress,format'
		},
		brandName: 'Ouranos'
	}}
/>
