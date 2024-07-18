<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Header from '$lib/components/organisms/Header/Header.svelte';
	import Shelf from '$lib/components/templates/Shelf/Shelf.svelte';

	import type { LinkType, LogoType, SliceType } from '$lib/models';

	export let slices: SliceType[] = [];
	export let navLinks: LinkType[] = [];
	export let logo: LogoType;
	export let alternateColor = false;
	export let cta: { label: string; url: string; icon: string; href: string };
	let open = false;

	$: isCta = Boolean(cta) && Boolean(cta.url) && Boolean(cta.label || cta.icon);
</script>

<Header {navLinks} bind:open {logo}>
	{#if isCta}
		<Button onclick={() => (location.href = cta.url)}>{cta.label}</Button>
	{/if}
</Header>
<Shelf {slices} bind:open {navLinks} {alternateColor} />
