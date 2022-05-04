<script lang="ts">
	import Shelf from '$lib/templates/Shelf/Shelf.svelte';

	import type { LinkType, LogoType, SliceType } from '../../../types';

	export let uiService;
	uiService.start();

	export let slices: SliceType[] = [];
	export let navLinks: LinkType[] = [];
	export let logo: LogoType;
	export let cta;
	export let onClick = () => uiService.send('TOGGLE_MENU');
	export let open = $uiService.matches('menu.opened');
</script>

<Shelf {slices} {logo} {open} {onClick} {navLinks} {cta} />