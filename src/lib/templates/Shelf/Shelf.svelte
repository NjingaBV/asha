<script lang="ts">
	import Button from '$lib/atoms/Button/Button.svelte';
	import Carousel from '$lib/organisms/Carousel/Carousel.svelte';
	import Header from '$lib/organisms/Header/Header.svelte';
	import Hero from '$lib/molecules/Hero/Hero.svelte';
	import Nav from '$lib/molecules/Nav/Nav.svelte';
	import HeroTile from '$lib/organisms/HeroTile/HeroTile.svelte';

	import type { LinkType, LogoType } from '../../../types';

	export let navLinks: LinkType[] = [];
	export let logo: LogoType;
	export let slices = [];
	export let open = false;
	export let onClick = () => {
		open = !open;
	};
	export let alternateColor = false;
	export let cta;

	$: isCta = cta && cta.url && (cta.label || cta.icon);

	const bgColor = (index: number) => {
		console.log('index');
		if (alternateColor) {
			return index % 2 === 1 ? '#f5f5f5' : '#ffffff';
		}
		return '#ffffff';
	};
</script>

<Header {navLinks} {open} {logo} {onClick}>
	{#if isCta}
		<a href={cta.href}><Button>{cta.label}</Button></a>
	{/if}
</Header>
<main class={`flex flex-col h-full ${open && 'fixed'}`}>
	{#if open}
		<Nav headerMenu={false} links={navLinks} />
	{/if}
	{#each slices as slice, index}
		<section class="w-full h-full" style="background-color:{bgColor(index)}">
			{#if slice.type === 'carousel'}
				<div class="container mx-auto">
					<Carousel {...slice} />
				</div>
			{/if}
			{#if slice.type === 'hero'}
				<div>
					<Hero {...slice} />
				</div>
			{/if}
			{#if slice.type === 'tiles'}
				<div class="relative overflow-hidden h-[30vh] md:h-[50vh]">
					<HeroTile {...slice} />
				</div>
			{/if}
		</section>
	{/each}
</main>

