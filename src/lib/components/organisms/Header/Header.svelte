<script lang="ts">
	import Hamburger from '$lib/components/atoms/Hamburger/Hamburger.svelte';
	import Logo from '$lib/components/molecules/Logo/Logo.svelte';
	import Nav from '$lib/components/molecules/Nav/Nav.svelte';

	import type { LinkType, LogoType } from '$lib/models';

	export let logo: LogoType;
	export let link = '/';
	export let navLinks: LinkType[] = [];
	export let open = false;

	let previousY: number;
	let currentY: number;
	let clientHeight: number;
	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		previousY = y;
		return direction;
	};
	$: scrollDirection = deriveDirection(currentY);
	$: offscreen = scrollDirection === 'down' && currentY > clientHeight * 4;
</script>

<svelte:window bind:scrollY={currentY} />

<header
	class={[
		`flex justify-between items-center top-0 z-50 px-2 md:px-0 sticky h-[var(--header-height)]`,
		`container bg-surface-1/50 text-lg backdrop-blur-sm transition-transform ease-in `
	].join(' ')}
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<Logo {...logo} {link} />
	<Nav headerMenu={true} links={navLinks} />
	<slot />
	<Hamburger bind:open />
</header>
