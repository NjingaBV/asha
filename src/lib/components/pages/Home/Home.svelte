<script lang="ts">
	import Button from '$lib/components/atoms/Button/Button.svelte';
	import Header from '$lib/components/organisms/Header/Header.svelte';
	import Shelf from '$lib/components/templates/Shelf/Shelf.svelte';

	import type { LinkType, LogoType, SliceType } from '$lib/models';

	export let uiService;
	uiService.start();

	export let slices: SliceType[] = [];
	export let navLinks: LinkType[] = [];
	export let logo: LogoType;
	export let alternateColor = false;
	export let onClick = () => uiService.send('TOGGLE_MENU');
	export let open = $uiService.matches('menu.opened');
	export let cta;
	$: isCta = cta && cta.url && (cta.label || cta.icon);
</script>

<Header {navLinks} {open} {logo} {onClick}>
	{#if isCta}
		<a href={cta.href}><Button>{cta.label}</Button></a>
	{/if}
</Header>
<Shelf {slices} {logo} {open} {onClick} {navLinks} {alternateColor} />
