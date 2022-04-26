<script lang="ts">
    import { uiService } from '@djfacemaker/context'
	import Shelf from '$lib/templates/Shelf/Shelf.svelte';

    uiService.start();

	import type { ILink, ILogo, ISlice } from '@djfacemaker/core';

	export let slices: ISlice[] = [];
	export let navLinks: ILink[] = [];
	export let logo: ILogo;
	export let onClick = () => uiService.send('TOGGLE_MENU');
	export let open = $uiService.matches('menu.opened');
</script>

<Shelf {slices} {logo} {open} {onClick} {navLinks} />