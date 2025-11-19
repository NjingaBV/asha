<script lang="ts">
	import { untrack } from 'svelte';
	import Hamburger from '$lib/components/atoms/Hamburger.svelte';
	import NavigationBar from '$lib/components/molecules/NavigationBar.svelte';
	import Logo from '$lib/components/molecules/Logo.svelte';

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
		`sticky top-0 z-50 w-full bg-white/80 text-lg backdrop-blur-md transition-transform ease-in`,
		'h-[var(--header-height)]'
	].join(' ')}
	class:motion-safe:-translate-y-full={offscreen}
	bind:clientHeight
>
	<div
		class="flex justify-between items-center px-2 md:px-6 lg:px-8 h-full max-w-[90rem] mx-auto"
	>
		<Logo {...logo} {link} />
		<NavigationBar links={navLinks} headerMenu={true} transparent={true} />
		{@render children?.()}
		<Hamburger bind:open />
	</div>
</header>
