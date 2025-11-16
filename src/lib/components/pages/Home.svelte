<script lang="ts">
	import Button from '$lib/components/atoms/Button.svelte';
	import Header from '$lib/components/organisms/Header.svelte';
	import Shelf from '$lib/components/templates/Shelf.svelte';

	import type { LinkType, LogoType, SliceType } from '$lib/models';

	let {
		slices = [],
		navLinks = [],
		logo = { title: '', imgUrl: '', imgAlt: '' },
		alternateColor = false,
		cta = { label: '', url: '', icon: '', href: '' }
	}: {
		slices?: SliceType[];
		navLinks?: LinkType[];
		logo: LogoType;
		alternateColor?: boolean;
		cta: { label: string; url: string; icon: string; href: string };
	} = $props();

	let open = $state(false);

	let isCta = $derived(Boolean(cta) && Boolean(cta.url) && Boolean(cta.label || cta.icon));
</script>

<Header {navLinks} bind:open {logo}>
	{#if isCta}
		<Button onClick={() => (location.href = cta.url)}>{cta.label}</Button>
	{/if}
</Header>
<Shelf {slices} bind:open {navLinks} {alternateColor} />
