<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import HeroBanner from './HeroBanner.svelte';
</script>

<Meta title="Organisms/HeroBanner" component={HeroBanner} />

<Template let:args>
	<HeroBanner {...args} />
</Template>

<Story
	name="Default"
	args={{
		eyebrow: 'Apple Watch',
		title: 'Plus puissante. Plus connectée.',
		subtitle: 'Des fonctionnalités santé et forme avancées.',
		primaryCTA: { label: 'Acheter', href: '#' },
		secondaryCTA: { label: 'En savoir plus', href: '#' },
		background: '#000000'
	}}
/>
