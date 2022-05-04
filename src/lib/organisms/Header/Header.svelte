<script lang="ts">
	import Hamburger from '$lib/atoms/Hamburger/Hamburger.svelte';
	import Logo from '$lib/molecules/Logo/Logo.svelte';
	import Nav from '$lib/molecules/Nav/Nav.svelte';
	
	import type { LinkType, LogoType } from '../../../types';
	
	export let logo: LogoType;
	export let navLinks: LinkType[] = [];
	export let open = false;
	export let onClick = () => {
		open = !open;
	};

	let previousY: number
	let currentY: number
	let clientHeight: number
	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up'
		previousY = y
		return direction
	}
	$: scrollDirection = deriveDirection(currentY)
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4

</script>

<svelte:window bind:scrollY={currentY} />

<header
	class={[
		`flex items-center top-0 z-50 px-2 md:px-0 sticky h-[var(--header-height)]`,
		`container bg-surface-1/50 text-lg backdrop-blur-sm transition-transform ease-in `
	].join(' ')}
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<Logo {...logo} />
	<Nav headerMenu={true} links={navLinks} />
	<slot/>
	<Hamburger {onClick} {open} />
</header>
