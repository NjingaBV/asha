<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import CallToAction from './CallToAction.svelte';
</script>

<Meta
	title="Molecules/CallToAction"
	component={CallToAction}
/>

<Template let:args>
	<CallToAction {...args} />
</Template>

<Story
	name="Souscription"
	args={{
        overview: "Ouranos combine les meilleures offres d’assurance du marché avec la meilleure expérience utilisateur. Notre plateforme vous libère de la paperasse.",
		buttons: [
            {
                label: 'Souscrire',
                url: '/souscrire',
                backgroundColor: '#0284c7'
            },
            {
                label: 'Contacter l\'équipe',
                url: '/contact',
                backgroundColor: '#1c1917'
            }
        ],
	}}
/>
