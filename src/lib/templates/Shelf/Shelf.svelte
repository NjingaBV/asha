<script lang="ts">
	import Carousel from '$lib/organisms/Carousel/Carousel.svelte';
	import Header from '$lib/organisms/Header/Header.svelte';
	import Nav from '$lib/molecules/Nav/Nav.svelte';
	import HeroTile from '$lib/organisms/HeroTile/HeroTile.svelte';

	import type { ILink, ILogo, ISlice } from '@djfacemaker/core';

	export let navLinks: ILink[] = [];
	export let logo: ILogo;
	export let slices = [];
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
</script>

<Header {navLinks} {open} {logo} {onClick} />
<main class={`flex flex-col h-full ${open && 'fixed'} gap-10`}>
	{#if open}
		<Nav headerMenu={false} links={navLinks} />
	{/if}
	{#each slices as slice}
		{#if slice.type === 'carousel'}
			<section class="container mx-auto">
				<Carousel {...slice} />
			</section>
		{/if}
		{#if slice.type === 'tiles'}
			<section class="relative overflow-hidden h-[30vh] md:h-[50vh]">
				<HeroTile {...slice} />
			</section>
		{/if}
	{/each}
</main>
