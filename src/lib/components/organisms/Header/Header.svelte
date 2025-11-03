<script lang="ts">
	import { untrack } from 'svelte';
	import Hamburger from '$lib/components/atoms/Hamburger/Hamburger.svelte';
	import Logo from '$lib/components/molecules/Logo/Logo.svelte';
	import Nav from '$lib/components/molecules/Nav/Nav.svelte';

	import type { LinkType, LogoType } from '$lib/models';

	let {
		logo = { title: '', imgUrl: '', imgAlt: '' },
		link = '/',
		navLinks = [],
		open = $bindable(false),
		children
	}: {
		logo?: LogoType;
		link?: string;
		navLinks?: LinkType[];
		open?: boolean;
		children?: any;
	} = $props();

	let previousY = $state<number>(0);
	let currentY = $state<number>(0);
	let clientHeight = $state<number>(0);

	const deriveDirection = (y: number) => {
		const direction = !previousY || previousY < y ? 'down' : 'up';
		untrack(() => {
			previousY = y;
		});
		return direction;
	};
	let scrollDirection = $derived(deriveDirection(currentY));
	let offscreen = $derived(scrollDirection === 'down' && currentY > clientHeight * 4);
</script>

<svelte:window bind:scrollY={currentY} />

<header
	class={[
		`flex justify-between items-center top-0 z-50 px-2 md:px-0 sticky h-[var(--header-height)]`,
		'container md:mx-auto bg-surface-1/50 text-lg backdrop-blur-sm transition-transform ease-in'
	].join(' ')}
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<Logo {...logo} {link} />
	<Nav headerMenu={true} links={navLinks} />
	{@render children?.()}
	<Hamburger bind:open />
</header>
